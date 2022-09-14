import React, { useState } from 'react'
import Autosuggest from "react-autosuggest"
import Select from 'react-select'
import TagsInput from "react-tagsinput"
import "react-tagsinput/react-tagsinput.css"
import _ from "lodash";
import moment from 'moment';
import { toast } from 'react-toastify';
import RichTextEditor from 'react-rte';
//import { currency_list } from '../../function/CommonFunction';
import { toolbarRTEConfig } from '../../../constants/Constants'
import Dropzone from "react-dropzone"
import { FaCheckCircle } from "react-icons/fa"

const JobDetails = ({ addJobData, setAddJobData, value, setValue, addJobVal, addJobType, 
        dropdownList, documents, setDocuments, preview, handleBackNext, addTemplate, 
        templateName, setTemplateName, templateCategory, setTemplateCategory, editTemplate
    }) => {
    let currency_list = { USD: 'US Dollars'}
    const name = 'Name'
    const today = moment()
    let todayDate = today.format("MM/DD/YYYY")
    const [ primarySkillinput, setPrimarySkillInput ] = useState("")
    const [ secondarySkillsInput, setSecondarySkillSInput ] = useState("")
    const experienceLevel = [ 'Intern', 'Less than one year', '1-3 years', '3-5 years', '5-10 years', '10+ years' ]
    const [ openForReferral, setOpenForReferral ] = useState(false)

    let skillSetOption = Object.keys(dropdownList).length > 0 ? (dropdownList.skillSet).map((item) => {
        const skillSetObj = { value: item.PositionName, label: item.PositionName };
        return skillSetObj;
    }) : []
    skillSetOption = _.sortBy(skillSetOption, ['value'])
    
    let QualificationType = Object.keys(dropdownList).length > 0 ? (dropdownList.QualificationType).filter(item => item.PositionName !== 'Select' && item.PositionName !== 'NA').map((item) => {
        return item.PositionName 
    }) : []
    QualificationType = _.sortBy(QualificationType)

    const handleNumberOfPositions = (e) => {
        setAddJobData({
            ...addJobData,
            numberOfPositions: e.target.value,
            allowedSubmittals: (e.target.value * 5)
        })
    }

    const onChange = (value) => {
        setValue(value)
        setAddJobData({ ...addJobData, description: value.toString('html') })    
    }
    
    const autocompleteRenderInput = ({ addTag, ...props }) => {
        const theme = {
          suggestionsContainerOpen: {
            display: "block",
            position: "absolute",
            width: "95%",
            border: "1px solid #aaa",
            listStyle: "none",
            zIndex: 999,
            backgroundColor: "rgb(255, 255, 255)",
            fontSize: 14,
            fontFamily: "sans-serif",
            maxHeight: "250px",
            overflow: "auto",
            padding: "5px 15px",
          },
          suggestionsList: {
            listStyleType: "none",
          },
          suggestion: {
            cursor: "pointer",
            padding: "5px 0px",
          },
          suggestionHighlighted: {
            backgroundColor: "rgba(114, 112, 112, 0.125)",
          },
        };
    
        const handleOnChange = (e, { newValue, method }) => {
          if (method === "enter") {
            e.preventDefault()
          } else {
            props.onChange(e)
          }
        };
    
        const getSuggestionValue = (suggestion) => suggestion.PositionName;
    
        const getSuggestions = (value) => {
          const inputValue = value.trim().toLowerCase();
          const inputLength = inputValue.length;
          const suggestValues =
            (inputLength === 0 || Object.keys(dropdownList).length === 0)
              ? []
              : dropdownList.skills.filter((item) =>
                item.PositionName.toLowerCase().includes(inputValue) && ![ ...addJobData.primarySkills, ...addJobData.secondarySkills ].includes(item.PositionName)
              )
          return suggestValues
        };
    
        const renderSuggestion = (suggestion) => (
          <div>{suggestion.PositionName}</div>
        );
    
        const value = (props.value && props.value.trim().toLowerCase()) || "";
        let suggestions = getSuggestions(value);
    
        return (
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={() => { }}
            onSuggestionsClearRequested={() => { }}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={{ ...props, onChange: handleOnChange }}
            onSuggestionSelected={(e, { suggestion }) => {
              addTag(suggestion.PositionName);
            }}
            theme={theme}
          />
        )
    }

    const handleChange = (e) => {
        if(e.target.name === 'placementFee') {
            let value = e.target.value
            if(value) {
                if(+value === 0) {
                    toast.error('Cannot Be Zero')
                }
                else if(+value < 0 || +value === -0) {
                    toast.error('Negative numbers are not allowed')
                }
                else {
                    setAddJobData({ ...addJobData, [e.target.name]: e.target.value })     
                }
            }
            else {
                setAddJobData({ ...addJobData, [e.target.name]: e.target.value })     
            }
        }
        else {
            setAddJobData({ ...addJobData, [e.target.name]: e.target.value })     
        }
    }

    const handleChangeLocation = (e) => {
        setAddJobData({ ...addJobData, location: { ...addJobData.location, [e.target.name]: e.target.value } })
    }


    const onUploadHandler = (file, type) => {
        let docs = [...documents]
        console.log(file)
        if (file) {
            if((file[0].size)/1024 > 2048) {
                toast.error('File size exceeded 2 MB')
            }
            else {
                file.forEach((eachFile) => {
                    const reader = new FileReader()
                    reader.readAsDataURL(eachFile)
                    reader.onload = (event) => {
                      const obj = {
                        documentName: eachFile.name,
                        base64: event.target.result,
                        uploadedDate: todayDate,
                        uploadedBy: name,
                        category: type === 'Video' ? "Video Job Description" : "Job Description",
                        role: 'undefined',
                        type
                      }
                      docs.push(obj)
                      setDocuments((current) => ([...current, obj]))
                    }
                  })
            }        
        }
    }

    return (
        <div>                      
            <div className="d-flex mb-2">
                <label className="ml-auto mr-4">*denotes required field</label>
            </div>   

            {/* TEMPLATE NAME */}
            { (addTemplate || editTemplate) &&
                <div className='card card-flat bg-gray4 ml-3 mr-3 mb-3'>
                    <div className='card-body'>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className={ addJobVal.template ? "form-control border border-danger" : "form-control"}
                                        name="Template"
                                        placeholder="Enter a job title"
                                        onChange={(e) => setTemplateName(e.target.value)}
                                        value={templateName}
                                        disabled={editTemplate}
                                    />
                                    <label>Template Name*</label>
                                    { addJobVal.template &&
                                    <small className='validation ml-2'>
                                        {addJobVal.template}
                                    </small>}
                                </div>
                            </div>                                   
                        </div>
                    </div>
                </div> 
            }

            {/* JOB TITLE and PREFERRED START DATE */}
            {   (addTemplate || editTemplate) ?
                <div className='card card-flat bg-gray4 m-3'>
                    <div className='card-body'>
                        <div className="row">
                            <div className='col-lg-6'>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className={ addJobVal.title ? "form-control border border-danger" : "form-control"}
                                        name="title"
                                        placeholder="Enter a job title"
                                        onChange={handleChange}
                                        value={addJobData.title}
                                    />
                                    <label>Job Title*</label>
                                </div>
                                { addJobVal.title &&
                                <small className='validation ml-2'>
                                    {addJobVal.title}
                                </small>}
                            </div>                                  
                            <div className='col-lg-6'>
                                <div className="form-floating ml-1">
                                    <select
                                        className="form-select"                                              
                                        onChange={(e) => setTemplateCategory(e.target.value)}
                                    >
                                        <option disabled>Select</option>
                                        {
                                            skillSetOption.map(i => i.value).map(item => <option selected={item === templateCategory} value={item}>{item}</option>)
                                        } 
                                    </select>
                                    <label>Template Category</label>
                                </div>                 
                            </div>                                                                                                                                          
                        </div>
                    </div>
                </div> :
                <div className='card card-flat bg-gray4 mb-3 mx-3'>
                    <div className='card-body py-0'>
                        <div className="row my-3">
                            <div className='col-lg-5'>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className={ addJobVal.title ? "form-control border border-danger" : "form-control"}
                                        name="title"
                                        placeholder="Enter a job title"
                                        onChange={handleChange}
                                        value={addJobData.title}
                                        disabled={preview}
                                    />
                                    <label>Job Title*</label>
                                </div>
                                { addJobVal.title &&
                                <small className='validation ml-2'>
                                    {addJobVal.title}
                                </small>}
                            </div>                                                                      
                            <div className="col-lg-3 mt-2">
                                <div className="form-check form-switch d-flex align-items-center">
                                    <label
                                        className="form-check-label pt-0"
                                    >
                                        Hot Job?
                                    </label>
                                    <input
                                        name="isHotJob"
                                        className="form-check-input ml-2"
                                        type="checkbox"
                                        id="hotJobSwitch"
                                        checked={addJobData.isHotJob}                               
                                        onChange={(e) => !preview && setAddJobData({ ...addJobData, isHotJob: e.target.checked })}
                                    />
                                </div>
                            </div>                       
                            <div className="col-lg-4">                     
                                <div className="form-floating">
                                    <input
                                        type='date'
                                        name="startDate"
                                        value={moment(new Date(addJobData.startDate)).format(
                                            "YYYY-MM-DD"
                                        )}
                                        //value={addJobData.startDate}
                                        onChange={handleChange}
                                        className={ addJobVal.startDateError ? "form-control border border-danger" : "form-control"}
                                        min={moment(new Date(addJobData.activeFrom)).format("YYYY-MM-DD")}
                                        max="9999-12-31"
                                        // pattern="\d{4}-\d{2}-\d{2}"
                                    />
                                <label>Preferred Start Date*</label>
                                </div>
                                { addJobVal.startDateError && <small className="validation">{addJobVal.startDateError}</small>}
                            </div>
                        </div>
                    </div>
                </div> 
            }

            {/* No of POSITIONS, ACTIVE FROM and EXPIRES ON */}
            {  !(addTemplate || editTemplate) &&
            <div className="card card-flat bg-gray4 m-3">
                <div className="card-body">
                    <div className="row mt-2">
                        <div className="col-lg-3">
                            <div className="form-floating">
                                <input
                                    name="numberOfPositions"
                                    type="number"
                                    min="1"
                                    className="form-control"
                                    value={addJobData.numberOfPositions}
                                    onChange={handleNumberOfPositions}
                                />
                                <label>Total No. of Positions</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-floating">
                                <input                                               
                                    type="number"
                                    min="5"
                                    className="form-control"
                                    value={addJobData.allowedSubmittals}
                                    onChange={(e) => setAddJobData({...addJobData, allowedSubmittals: e.target.value })}
                                />
                                <label>Allowed Submittals</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-floating form-date">
                            <input
                                type="date"
                                name="activeFrom"
                                value={moment(new Date(addJobData.activeFrom)).format(
                                    "YYYY-MM-DD"
                                )}
                                onChange={handleChange}
                                className={ addJobVal.activeFromError ?  "form-control border border-danger" : "form-control"}
                                min={moment(new Date()).format("YYYY-MM-DD")}
                                max="9999-12-31"
                            />
                            <label>Active From*</label>
                            </div>
                            { addJobVal.activeFromError &&
                            <small className="validation">
                                {addJobVal.activeFromError}
                            </small>}
                        </div>
                        <div className="col-lg-3">
                            <div className="form-floating form-date">
                                <input
                                    type='date'
                                    name="expiresOn"
                                    value={moment(new Date(addJobData.expiresOn)).format(
                                        "YYYY-MM-DD"
                                    )}
                                    //value={addJobData.startDate}
                                    onChange={handleChange}
                                    className={ addJobVal.expiresOnError ? "form-control border border-danger" : "form-control"}
                                    min={moment(addJobData.activeFrom).format("YYYY-MM-DD")}
                                    max="9999-12-31"
                                    // pattern="\d{4}-\d{2}-\d{2}"
                                />
                            <label>Expires On*</label>
                            </div>
                            { addJobVal.expiresOnError &&
                                <small className="validation">
                                    {addJobVal.expiresOnError}
                                </small>
                            }
                        </div>
                    </div>
                </div>
            </div>}

            {/* WORK PLACE TYPE and LOCATION */}
            { !(addTemplate || editTemplate) &&
            <>
                {/* <div className="mt-4 ml-3 mb-1">
                    <label>Choose the workplace type</label>
                </div> */}

                <div className="card card-flat bg-gray4 mx-3">
                    <div className="card-body">
                        <p className='mb-2'>Choose the workplace type</p>
                        <hr />
                        <div className="row mt-2">
                            <div className="col-lg-4">
                                <div className="d-flex">
                                <div className="flex-item">
                                    <p className="mb-0"><strong>Remote</strong></p>
                                    <span><medium>Employee work off-site</medium></span>
                                </div>
                                <div className="flex-item mt-2">
                                    <div className="form-check form-switch d-flex align-items-center p-0">
                                    <input
                                        name="isRemote"
                                        className="form-check-input ml-3"
                                        type="checkbox"
                                        id="RemoteSwitch"
                                        checked={addJobData.isRemote}
                                        onChange={(e) => {
                                            if(e.target.checked) {
                                                setAddJobData({ ...addJobData, workPlaceType: 'Remote', isRemote: true })
                                            }
                                            else {
                                                setAddJobData({ ...addJobData, workPlaceType: 'On-Site', isRemote: false })
                                            }
                                        }}
                                    />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="d-flex">
                                <div className="flex-item">
                                <p className="mb-0"><strong>Hybrid</strong></p>
                                <span><medium>Employee work both on-site & off-site</medium></span>
                                </div>
                                <div className="flex-item mt-2">
                                <div className="form-check form-switch d-flex align-items-center p-0">
                                    <input
                                        name="isHybrid"
                                        className="form-check-input ml-3"
                                        type="checkbox"
                                        id="HybridSwitch"
                                        checked={addJobData.workPlaceType === 'Hybrid'}
                                        onChange={(e) => {
                                            if(e.target.checked) {
                                                setAddJobData({ ...addJobData, onsiteWorkDays: '3 days', workPlaceType: 'Hybrid', isRemote: false })
                                            }
                                            else {
                                                setAddJobData({ ...addJobData, onsiteWorkDays: '', workPlaceType: 'Remote', isRemote: true })
                                            }
                                        }}
                                    />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="d-flex">
                                    <div className="flex-item">
                                        <p className="mb-0" style={{ fontWeight: "bold" }}>On-Site</p>
                                        <span><medium>Employee comes to work in person</medium></span>
                                    </div>
                                    <div className="flex-item mt-2">
                                        <div className="form-check form-switch d-flex align-items-center p-0">
                                            <input
                                                name="isRemote"
                                                className="form-check-input ml-3"
                                                type="checkbox"                       
                                                checked={addJobData.workPlaceType === 'On-Site'}
                                                onChange={(e) => {
                                                    if(e.target.checked) {
                                                        setAddJobData({ ...addJobData, workPlaceType: 'On-Site', isRemote: false })
                                                    }
                                                    else {
                                                        setAddJobData({ ...addJobData, workPlaceType: 'Remote', isRemote: true })
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        { addJobData.workPlaceType === 'Hybrid' &&
                            <>
                                <hr />
                                <div className='d-flex align-items-center mt-3'>
                                    <p className='m-0'>Number of days for on-site</p>
                                    <div className="col-lg-2 ml-3">
                                        <select className="font-14 form-select" name="onsiteWorkDays" onChange={handleChange}>                                  
                                            {
                                                ['Select', '1 day', '2 days', '3 days', '4 days', '5 days'].map(v => 
                                                    <option selected={addJobData.onsiteWorkDays === v} value={v}>{v}</option>    
                                                )
                                            }                                              
                                        </select>
                                    </div>
                                </div>                            
                            </>
                        }
                    </div>
                </div>

                {/* <AddJobNewGoogleMaps
                    isRemote={addJobData.isRemote} 
                    setIsRemote={(value) => setAddJobData({ ...addJobData, isRemote: value })} 
                    addJobData={addJobData} 
                    setAddJobData={setAddJobData}
                /> */}

                {!addJobData.isRemote && (
                    <div className="card card-flat card-borderless bg-gray4 m-3">
                        <div className="card-body">
                            <div className="row">
                            <div className="col-lg-8 mb-2 mb-lg-0">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className={ addJobVal.location.address ? "form-control border border-danger" : "form-control"}
                                        name="address"
                                        value={addJobData.location.address}                      
                                        placeholder=""
                                        onChange={handleChangeLocation}
                                    />
                                    <label>Address</label>
                                    {
                                        addJobVal.location.address &&
                                        <small className='ml-2 validation'>
                                            { addJobVal.location.address }
                                        </small>
                                    }
                                </div>
                            </div>
                            <div className="col-lg-4 mb-2 mb-lg-0">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className={ addJobVal.location.city ? "form-control border border-danger" : "form-control"}
                                        name="city"
                                        value={addJobData.location.city}                    
                                        placeholder=""
                                        onChange={handleChangeLocation}
                                    />
                                    <label>City*</label> 
                                    {
                                        addJobVal.location.city &&
                                        <small className='ml-2 validation'>
                                            { addJobVal.location.city }
                                        </small>
                                    }                 
                                </div>
                            </div>
                            </div>
                            <div className="row mt-2">
                            <div className="col-lg-4 mb-2 mb-lg-0">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className={ addJobVal.location.state ? "form-control border border-danger" : "form-control"}
                                        name="state"
                                        value={addJobData.location.state}                                   
                                        placeholder=""
                                        onChange={handleChangeLocation}
                                    />
                                    <label>State*</label>  
                                    {
                                        addJobVal.location.state &&
                                        <small className='ml-2 validation'>
                                            { addJobVal.location.state }
                                        </small>
                                    }                  
                                </div>
                            </div>
                            <div className="col-lg-4 mb-2 mb-lg-0">
                                <div className="form-floating">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="postalCode"
                                        defaultValue={addJobData.location.zipcode}

                                    //     {...addJobData.location.zipcode ?
                                    //    ( value={...addJobData.location.zipcode}  )
                                    //     : value= "" }                     
                                        placeholder=""

                                        // onChange={value => {

                                        //     if(value==''){
                                        //      alert('Text Input Empty')
                                        //    }
                                        //    else {
                                    
                                    onChange={handleChangeLocation}
                                   
                                  //         }}}
                                    />
                                    <label>Postal</label>                  
                                </div>
                            </div>
                            <div className="col-lg-4 mb-2 mb-lg-0">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className={ addJobVal.location.country ? "form-control border border-danger" : "form-control"}
                                        name="country"
                                        value={addJobData.location.country}                    
                                        placeholder=""
                                        onChange={handleChangeLocation}
                                    />
                                    <label>Country*</label>   
                                    {
                                        addJobVal.location.country &&
                                        <small className='ml-2 validation'>
                                            { addJobVal.location.country }
                                        </small>
                                    }                 
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* <div className=" d-flex col-6 gap-1">

                    <CountrySelector setSelectedCountry={setSelectedCountry} />

                    <div className="input-group mb-3">

                        <span className="input-group-text" id="basic-addon1"> {countryPhoneCode.find(x => x.name === `${selectedCountry?.name?.common}`)?.code || '+1'} </span>

                        <input type="text" className="form-control" name="phoneNumber" aria-label="Username" aria-describedby="basic-addon1" />

                    </div>

                </div> */}  
            </>}              
            
            {/* SALARY */}
            <div className="card card-flat bg-gray4 m-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="form-floating pl-1">              
                                <select className="font-14 form-select" name='salaryCurrency' onChange={handleChange}>
                                    {
                                        Object.keys(currency_list).map(item => <option selected={item === addJobData.salaryCurrency} value={item}>{item}</option>)
                                    }                                                                                             
                                </select>
                                <label>Display currency</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-floating">                                          
                                <input 
                                    value={addJobData.minimumPay} 
                                    type="number" 
                                    min='1' 
                                    className={ addJobVal.minimumPay ?  "form-control border border-danger" : "form-control"} 
                                    name="minimumPay" 
                                    onChange={(e) => {
                                        let value = e.target.value
                                        if(value) {
                                            if(+value === 0) {
                                                toast.error('Cannot Be Zero')
                                            }
                                            else if(+value < 0 || +value === -0) {
                                                toast.error('Negative numbers are not allowed')
                                            }
                                            else {
                                                handleChange(e)
                                            }
                                        }
                                        else {
                                            handleChange(e)
                                        }
                                    }}
                                    placeholder="US$" 
                                />
                                <label>Minimum pay*</label>
                                {
                                    addJobVal.minimumPay &&
                                    <small className='ml-2 validation'>
                                        {addJobVal.minimumPay}
                                    </small>
                                }
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-floating">                                
                                <input 
                                    value={addJobData.maximumPay} 
                                    type="number" 
                                    min='1' 
                                    className={ addJobVal.maximumPay ?  "form-control border border-danger" : "form-control"} 
                                    name="maximumPay" 
                                    placeholder="US$" 
                                    onChange={(e) => {
                                        if(e.target.value === '0') {
                                            toast.error('Cannot Be Zero')
                                        }
                                        else if(+e.target.value < 0) {
                                            toast.error('Negative numbers are not allowed')
                                        }
                                        else {
                                            handleChange(e)
                                        }
                                    }}
                                />
                                <label>Maximum pay*</label>
                                {
                                    addJobVal.maximumPay &&
                                    <small className='ml-2 validation'>
                                        {addJobVal.maximumPay}
                                    </small>
                                }
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-floating">                                           
                                <select disabled={addJobType.typeSelected && !addJobType.fulltimeSelected} className="font-14 form-select" name='salaryType' onChange={handleChange}>
                                    <option selected={addJobData.salaryType === "Annual"} value="Annual">Annual</option>
                                    <option selected={addJobData.salaryType === "Per hour"} value="Per hour">Per hour</option>
                                </select>
                                <label>Payment Type</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTRACT DURATION */}
            { addJobType.contractSelected && 
            <div className="card card-flat card-borderless bg-gray4 m-3">
                <div className="card-body">
                    <p className="mb-1">Contract Duration*</p>
                <div className="row">
                    <div className="col-lg-3 mb-2 mb-lg-0">
                    <div className="form-floating">
                        <input
                            name="durationMonths"
                            type="number"
                            min='0'
                            className={"" ? "form-control border border-danger" : "form-control"}
                            placeholder="Months"
                            onChange={handleChange}
                            value={addJobData.durationMonths}                      
                        />
                        <label>Months</label>
                    </div>
                    {"" &&
                        <small className="validation ml-1">
                        {""}
                        </small>}
                    </div>
                    <div className="col-lg-3">
                    <div className="form-floating">
                        <input
                            name="durationDays"
                            type="number"
                            min='0'
                            className={"" ? "form-control border border-danger" : "form-control"}
                            placeholder="Months"
                            onChange={handleChange}
                            value={addJobData.durationDays}                                        
                        />
                        <label>Days</label>
                    </div>
                    {"" &&
                        <small className="validation ml-1">
                        {""}
                        </small>}
                    </div>
                </div>
                </div>
            </div>}
            
            {/* PRIMARY SKILLS */}
            <div className="card card-flat bg-gray4 m-3">
                <div className="card-body py-0">
                    <div className="form-floating mb-2" style={{ zIndex: '999' }}>
                        <div className="">
                            <label className='mb-1'>Mandatory Skills* <small>(Suggested to add top 3 skills)</small></label>
                            <TagsInput
                                renderInput={autocompleteRenderInput}
                                value={addJobData.primarySkills}
                                onChange={skills => {
                                    setAddJobData({ ...addJobData, weightage: { ...addJobData.weightage, primarySkills: skills }, primarySkills: skills })
                                }}
                                inputValue={primarySkillinput}
                                onChangeInput={skills => setPrimarySkillInput(skills)}
                                placeholder="Type a location and hit enter"
                                inputProps={{
                                    placeholder: primarySkillinput ? '' : 'Enter Skills*',
                                }}
                            />
                        </div>
                        { addJobVal.primary &&
                            <small className="validation ml-2">
                                {addJobVal.primary}
                            </small>
                        }
                    </div>
                </div>
            </div>

            {/* SECONDARY SKILLS */}
            <div className="card card-flat bg-gray4 m-3">
                <div className="card-body py-0">
                    <div className="form-floating" style={{ zIndex: '998' }}>
                        <div className="mb-2">
                            <label>Good to have Skills</label>
                            <TagsInput
                                renderInput={autocompleteRenderInput}
                                value={addJobData.secondarySkills}
                                onChange={(skills) => setAddJobData({ ...addJobData, secondarySkills: skills })}
                                inputValue={secondarySkillsInput}
                                onChangeInput={(skills) => setSecondarySkillSInput(skills)}
                                placeholder="Type a location and hit enter"
                                inputProps={{
                                    placeholder: secondarySkillsInput ? '' : 'Enter Skills',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* INDUSTRY */}
            <div className="card card-flat bg-gray4 m-3">
                <div className="card-body py-0">
                    <label>Industry</label>
                    <div className="form-floating Hover-Dropdown mb-2" style={{ zIndex: '997' }}>
                        <Select
                            isMulti
                            options={skillSetOption}
                            name="placementSkill"
                            onChange={(e) => {
                                setAddJobData({
                                    ...addJobData,
                                    skillSet: e.map((skillSet) => skillSet.value),
                                })
                            }}
                            isSearchable={true}
                            value={skillSetOption.filter(item => addJobData.skillSet.includes(item.value))}
                        >
                        </Select>
                    </div>
                </div>
            </div>

            {/* REQUIRED EXPERIENCE and REQUIRED EDUCATION */}
            <div className="card card-flat bg-gray4 m-3">
                <div className="card-body m-0">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-floating">
                                <select className="font-14 form-select" name="experienceLevel" onChange={handleChange}>
                                    {/* <option disabled>Select</option> */}
                                    {
                                        experienceLevel.map(e => 
                                        <option selected={e === addJobData.experienceLevel} value={e}>{e}</option>)
                                    }                                   
                                </select>
                                <label>Required Experience*</label>
                            </div>
                        </div>                
                        <div className="col-lg-6">
                            <div className="form-floating">
                                <select className="font-14 form-select" onChange={(e) => setAddJobData({ ...addJobData, education: [e.target.value]})}>
                                    {/* <option disabled>Select</option> */}
                                    {
                                        QualificationType.map(e => 
                                        <option selected={addJobData.education[0] === e}>{e}</option>)
                                    }
                                    <option selected={addJobData.education[0] === 'NA'}>NA</option>
                                </select>
                                <label>Required Education*</label>
                            </div>
                        </div>                     
                    </div>
                </div>
            </div>
            
            {/* DESCRIPTION */}
            <div className="card card-flat bg-gray4 m-3">
                <div className="card-body pt-0"> 
                    <div className='d-flex align-items-center my-3'>
                        <p className='m-0 mr-3'>Description*</p>                       
                    </div>
                    <div className="form-floating">
                        <RichTextEditor 
                            toolbarConfig={toolbarRTEConfig}
                            value={value}
                            onChange={onChange}
                            className={addJobVal.description && 'border border-danger h-25'}                          
                        />
                        {
                            addJobVal.description &&
                            <small className='validation'>{addJobVal.description}</small>
                        }
                    </div>
                    { !(addTemplate || editTemplate) &&
                    <div className='card card-flat mt-2'>
                        <div className='card-body'>
                            { documents.findIndex(i => i.type === 'JD') !== -1 ?
                                <div className='ml-auto mr-2'>
                                    <span>
                                        <button 
                                            type="button"
                                            onClick={() => {
                                                setDocuments(documents.filter(i => i.type !== 'JD'))
                                            }}
                                            className="btn btn-icon"
                                            title='Delete'
                                        >
                                            <i className='fa fa-trash mr-2'></i>
                                        </button>
                                            Document Uploaded Successfully
                                            <FaCheckCircle className='ml-2' style={{ color: 'green', height: '1.2rem', width: '1.2rem' }} />
                                    </span>
                                </div> :
                                <div className='d-flex align-items-center'>
                                    <p className='m-0 mr-2'>Do you want to upload Job Description document?</p>
                                    <Dropzone onDrop={(file) => onUploadHandler(file, 'JD')} multiple={false}>
                                        {({ getRootProps, getInputProps }) => (
                                            <div {...getRootProps()} className="">
                                                <button type="button" className="btn btn-sm btn-secondary">
                                                    <i className="far fa-cloud-upload mr-1 fa-fw"></i>
                                                    Upload
                                                </button>
                                                <input type="file" {...getInputProps()} accept=".doc, .docx, .pdf, application/msword" />
                                            </div>
                                        )}
                                    </Dropzone>
                                    <div className='ml-3'>
                                        <small>Supported Formats: .doc, .docx and .pdf <br /> File Size: upto 2 MB</small>
                                    </div>
                                    
                                </div>
                            }
                        </div>
                    </div>}           
                </div>
            </div>

            {/* PLACEMENT and REFERRAL */}
            <div className="card card-flat bg-gray4 m-3">
                <div className="card-body py-0">
                    <div className="row">
                        <div className="col-lg-6 mb-2">
                            <div className="d-flex mb-1">
                                <label className="mb-1">Placement Fee*
                                </label>
                                <div className='d-flex align-items-center ml-auto mb-1'>
                                    <label
                                        className="form-check-label mr-2"                                             
                                    >
                                        Show Fee In Percentage?
                                    </label>
                                    <div className="form-check form-switch mt-3">                                                                 
                                        <input
                                            name="isFeePercentage"
                                            className="form-check-input"
                                            type="checkbox"
                                            id="Switch"
                                            onChange={(e) => {                                              
                                                    setAddJobData({ ...addJobData, isFeePercentage: e.target.checked, placementFee: "" })
                                                }                                             
                                            }
                                            checked={addJobData.isFeePercentage}
                                        />                                                
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="form-floating w-50">
                                    <input
                                        name="placementFee"
                                        type="number"
                                        min="1"
                                        value={addJobData.placementFee}
                                        // defaultValue={isFeePercentage && " " || !isFeePercentage && " "}
                                        max={addJobData.isFeePercentage && "100"}
                                        className={ addJobVal.placement ? "form-control border border-danger" :"form-control"}
                                        placeholder={addJobData.isFeePercentage ? "Enter Amount %" : "Enter Amount Fee"}
                                        onChange={handleChange}
                                    />
                                <label> {addJobData.isFeePercentage ? "Percentage %" : "Amount"}</label>
                                <small className="validation ml-2">
                                    {addJobVal.placement}
                                </small>
                                </div>
                                {!addJobData.isFeePercentage && 
                                <div className="form-floating w-50 ml-1">
                                    <select
                                        className="form-select"
                                        name="placementCurrency"
                                        onChange={handleChange}
                                    >
                                        {
                                            Object.keys(currency_list).map(item => <option selected={item === addJobData.placementCurrency} value={item}>{item}</option>)
                                        }
                                    </select>
                                    <label>Currency</label>
                                </div>}
                            </div>
                        </div>
                        <div className="col-lg-6 mb-2">
                            <div className='d-flex mb-1'>
                                { openForReferral && <label className="mb-1">Candidate Referral Bonus</label>}
                                <div className='d-flex align-items-center ml-auto mb-1'>
                                    <label
                                        className="form-check-label mr-2"                                             
                                    >
                                        Open for Referral?
                                    </label>
                                    <div className="form-check form-switch mt-3">                                                                 
                                        <input                                              
                                            className="form-check-input"
                                            type="checkbox"                                             
                                            onChange={(e) => setOpenForReferral(e.target.checked)}
                                            checked={openForReferral}
                                        />                                                
                                    </div>
                                </div>
                            </div>
                            
                            {    openForReferral &&
                                <>                                   
                                    <div className="d-flex">
                                        <div className="form-floating">
                                        <input
                                            name="referralFee"
                                            type="number"
                                            min="1"
                                            className="form-control"
                                            placeholder="Enter Referral Fee"
                                            onChange={handleChange}
                                            value={addJobData.referralFee}
                                        />
                                        <label>Amount</label>
                                        </div>
                                        <div className="form-floating w-50 ml-1">
                                        <select
                                            className="form-select"
                                            name="referralCurrency"
                                            onChange={handleChange}
                                        >
                                            {
                                                Object.keys(currency_list).map(item => <option selected={item === addJobData.referralCurrency} value={item}>{item}</option>)
                                            } 
                                        </select>
                                        <label>Currency</label>
                                        </div>
                                    </div>
                                </>
                            }
                            </div>
                    </div>
                </div>
            </div>

            {/* SUPPLIERS */}
            { !(addTemplate || editTemplate) &&
            <div className="card card-flat bg-gray4 m-3">
                <div className="card-body py-0">
                    <div className='mb-2'>
                        <label className='mb-1'>
                            Publish to your Preferred Suppliers 
                            {/* <BsInfoCircle className='ml-2' title='What is Preferred Supplier' /> */}
                        </label>
                        <div className="form-floating mb-2">
                            <select className="form-select" value={addJobData.isPublic} onChange={(e) => setAddJobData({ ...addJobData, isPublic: e.target.value === 'true' ? true : false })} name="editPreferred">
                            <option value={true}>No release directly to public</option>
                            <option value={false}>Yes</option>

                            </select>
                            <label>Use Preferred Suppliers?</label>                                   
                        </div>
                        {/* {!addJobData.isPublic &&                       
                            <SupplierTable 
                                addJobData={addJobData}
                                setTierData={(obj) => setAddJobData({ ...addJobData, tierData: obj })}
                            />                        
                        } */}
                    </div>
                </div>
            </div>}

        </div>
  )
}

export default JobDetails