import React, { useState } from 'react'
import { toast } from 'react-toastify'
import TagsInput from "react-tagsinput"
import moment from 'moment'
import Select from 'react-select'

function AdditionalInfo({ additionalInfoFinal, setAdditionalInfoFinal, addJobData, setAddJobData }) {

    const additionalInfoArray = 2 === 2 ? [
        { name: 'Client Data', question: 'Provide Client Info' },
        { name: 'Certifications', question: 'Required Certifications' },
        { name: 'License Requirement', question: 'License Requirement' },
        { name: 'Work Schedule', question: 'Please mention the work schedule for the job' },
        { name: 'Visa Requirement', question: 'Please add visa requirement for the job' },
        { name: 'Travel Requirement', question: 'Travel Requirement' },
        { name: 'Security Clearance', question: 'Security Clearance Requirement' },
        { name: 'Drug Test', question: 'Drug Test Consent', answer: 'No' },
        { name: 'Background Check', question: 'Background Check Consent', answer: 'No' },
        { name: 'Submittal Instructions', question: 'Add Submittal Instructions' },
        { name: 'Interview Process Steps', question: 'Mention the steps involved in interview process', answer: '' },
        { name: '30-60-90 Day Expectations', question: 'What do you expect from candidate in 30-60-90 Days?', answer: '' },
        { name: 'Current Team Structure', question: 'How many members are there in your current team?', answer: '' },
        { name: 'Custom Info', question: '', answer: '' }
    ] : [
        { name: 'Certifications', question: 'Required Certifications' },
        { name: 'License Requirement', question: 'License Requirement' },
        { name: 'Work Schedule', question: 'Please mention the work schedule for the job' },
        { name: 'Visa Requirement', question: 'Please add visa requirement for the job' },
        { name: 'Travel Requirement', question: 'Travel Requirement' },
        { name: 'Security Clearance', question: 'Security Clearance Requirement' },
        { name: 'Drug Test', question: 'Drug Test Consent', answer: 'No' },
        { name: 'Background Check', question: 'Background Check Consent', answer: 'No' },
        { name: 'Submittal Instructions', question: 'Add Submittal Instructions' },
        { name: 'Interview Process Steps', question: 'Mention the steps involved in interview process', answer: '' },
        { name: '30-60-90 Day Expectations', question: 'What do you expect from candidate in 30-60-90 Days?', answer: '' },
        { name: 'Current Team Structure', question: 'How many members are there in your current team?', answer: '' },
        { name: 'Custom Info', question: '', answer: '' }
    ]

    const visaStatus = ['Green Card', 'H1B', 'Citizen', 'H4 EAD', 'GC EAD', 'L2EAD', 'OPT EAD', 'TN1', 'TN2'].map(i => ({ value: i, label: i }))

    const [ customInfo, setCustomInfo ] = useState({ question: '', answer: '' })
    const [ customInfoClicked, setCustomInfoClicked ] = useState(false)
    const [ customInfoValidate, setCustomInfoValidate ] = useState({ question: '', answer: '' })
    const [ certificateInput, setCertificateInput ] = useState('')
    const [ licenseInput, setLicenseInput ] = useState('')

    const handleChange = (e) => {
        if(e.target.name === 'companyName') {
            console.log(!/^[A-Za-z0-9 ]+$/.test(e.target.value))
            if(e.target.value && !/^[a-zA-Z0-9_ ]+$/.test(e.target.value)) {
                toast.error('Special characters are not allowed')
            }
            else {
                setAddJobData({ ...addJobData, [e.target.name]: e.target.value })     
            }
        }
        else if(e.target.name === 'companyJobId') {
            if(+e.target.value < 0) {
                toast.error('Negative numbers are not allowed')
            }
            else {
                setAddJobData({ ...addJobData, [e.target.name]: Math.round(+e.target.value).toString() })
            }
        }
        else {
            setAddJobData({ ...addJobData, [e.target.name]: e.target.value })     
        }      
    }

    const handleStartTime = (e) => {
        console.log(e.target.value)
        const endtime = moment.utc(e.target.value, 'HH:mm').add(9, 'hours').format('HH:mm')
        setAddJobData({ ...addJobData, workStart: e.target.value, workEnd: endtime })
    }

    const handleEndTime = (e) => {
        setAddJobData({ ...addJobData, workEnd: e.target.value })
    }

    return (
        <div className='m-4'>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='mb-1'>
                    <h6>Add Additonal Info</h6>
                    <p>
                        Note: In addition to the pre-populated questions you can add custom information to your job post. Please note that you can add maximum of 5 custom info and help keep High5hire a respectful and professional platform by adding job related informations only in custom job info.
                    </p>
                </div>                                                           
            </div>                                                           
            {
                additionalInfoFinal.map((item, index) => 
                    <div className="card card-flat mb-2">
                        <div className="card-body">                                                       
                            <div className='d-flex p-3' style={{ backgroundColor: "#dcdcdc" }}>
                                <div className='flex-item'>
                                    <medium>{item.question}</medium>
                                </div>
                                <button className='btn btn-icon ml-auto' onClick={() => {
                                    if(item.name === 'Drug Test') {
                                        setAddJobData({ ...addJobData, drugTest: false })
                                    }
                                    else if(item.name === 'Background Check') {
                                        setAddJobData({ ...addJobData, backgroundCheck: false })
                                    }
                                    setAdditionalInfoFinal(additionalInfoFinal.filter((_, i) => i !== index ))
                                }}>
                                    <i className='fa fa-close'></i>
                                </button>
                            </div>                                                                              
                            <div>
                                {
                                    item.name === 'Current Team Structure' &&                                                                               
                                    <div className='form-floating mt-2 w-25'>
                                        <input 
                                            className='form-control'
                                            type='number'
                                            value={item.answer}
                                            min='1'
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
                                                        let add = [...additionalInfoFinal]
                                                        add[index] = { ...add[index], answer: e.target.value }
                                                        setAdditionalInfoFinal(add) 
                                                    }
                                                }
                                            }}
                                        />
                                        <label>Members</label>
                                    </div>                                                                                                                          
                                }
                                {
                                    ( item.name === 'Submittal Instructions' || item.name === 'Employer Value Proposition' || item.name === 'Day to Day Responsibilities' || item.name === 'Interview Process Steps' || item.name === 'Custom Info') &&                                                                               
                                    <div className='form-floating mt-2'>
                                        <textarea 
                                            className='form-control'                                                                                       
                                            value={item.answer}                                                                                       
                                            onChange={(e) => {
                                                let add = [...additionalInfoFinal]
                                                add[index] = { ...add[index], answer: e.target.value }
                                                setAdditionalInfoFinal(add)
                                            }}
                                        />                                                                                   
                                    </div>                                                                                                                          
                                }
                                {
                                    item.name === 'Travel Requirement' &&                                                                               
                                    <div className='form-floating mt-2 w-50'>
                                        <select 
                                            className="form-select font-14" 
                                            name='travel'
                                            onChange={handleChange}
                                        >
                                            {['None', '15%', "25%", "50%", "75%", "100%"].map(item2 => {
                                                return <option selected={item2 === addJobData.travel} value={item2}>{item2}</option>
                                            })}
                                        </select>
                                        <label>Select</label>
                                    </div>                                                                                                                          
                                }
                                {
                                    item.name === '30-60-90 Day Expectations' &&                                                                               
                                    <div className='form-floating mt-2'>
                                        <textarea 
                                            className='form-control'                                                                                       
                                            value={item.answer}                                                                                       
                                            onChange={(e) => {
                                                let add = [...additionalInfoFinal]
                                                add[index] = { ...add[index], answer: e.target.value }
                                                setAdditionalInfoFinal(add)
                                            }}
                                        />                                                                                   
                                    </div>                                                                                                                         
                                }
                                {
                                    item.name === 'Client Data' &&
                                    <div className="row mt-2">                         
                                        <div className="col-lg-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" value={addJobData.companyName} name='companyName' placeholder='enter a client name' onChange={handleChange} />
                                                <label>Client Name*</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-floating">
                                                <input type="number" min='1' className="form-control" value={addJobData.companyJobId} name="companyJobId" placeholder='Enter a Client Job Id' onChange={handleChange} />
                                                <label>Client ID</label>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {  ['Drug Test', 'Background Check'].includes(item.name) &&
                                    <div className='col-lg-12 d-flex mt-2'>
                                        <div className="form-check font-14 form-switch d-flex align-items-center">
                                            <input
                                                className="form-check-input mr-2"
                                                type="checkbox"
                                                checked={item.name === 'Drug Test' ? addJobData.drugTest : addJobData.backgroundCheck} 
                                                onChange={(e) => {
                                                    if(item.name === 'Drug Test') {
                                                        setAddJobData({ ...addJobData, drugTest: e.target.checked })
                                                    }
                                                    else {
                                                        setAddJobData({ ...addJobData, backgroundCheck: e.target.checked })
                                                    }
                                                }}
                                            />
                                            <label
                                                className="form-check-label pt-0"
                                            >
                                                Yes
                                            </label>
                                        </div>                                       
                                    </div>
                                }
                                {
                                    item.name === 'Work Schedule' &&
                                    <div className='row mx-2 mt-2'>
                                        <div className="col-lg-6 mb-2 mb-lg-2">
                                            <div className="form-floating">                                                                           
                                                <input value={addJobData.workStart} type="time" className="form-control" onChange={handleStartTime} />                                                                        
                                                <label>Work Hour Start</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2 mb-lg-2">
                                            <div className="form-floating">                                               
                                                <input value={addJobData.workEnd} type="time" className="form-control" onChange={handleEndTime} />                                                                           
                                                <label>Work Hour End</label>
                                            </div>
                                        </div>
                                    </div>
                                } 
                                {
                                    item.name === 'Security Clearance' &&
                                    <div className="col-lg-6 mt-2">
                                        <div className="form-floating">
                                            <select className="font-14 form-select" name="securityClearance" onChange={handleChange} >
                                                <option disabled>Select</option>
                                                <option selected={addJobData.securityClearance === 'None'} value="None">None</option>
                                                <option selected={addJobData.securityClearance === 'Required'} value="Required">Required</option>
                                                <option selected={addJobData.securityClearance === 'Confidential'} value="Confidential">Confidential</option>
                                            </select>
                                            <label>Security Clearance</label>
                                        </div>
                                    </div>
                                }    
                                {
                                    item.name === 'License Requirement' &&
                                    <div className="form-floating font-14 mx-2">
                                        <div>                            
                                            <TagsInput
                                                value={addJobData.licenceRequirement}
                                                onChange={(c) => setAddJobData({...addJobData, licenceRequirement: c })}
                                                inputValue={licenseInput}
                                                onChangeInput={(input) => setLicenseInput(input)}                  
                                                inputProps={{ placeholder: "Add License"}}
                                                className='form-control mt-1'
                                                inputClass='w-100'                
                                            />
                                        </div>
                                        <small className="ml-2">
                                            Type a licence name above and hit enter
                                        </small>
                                    </div>
                                }   
                                {
                                    item.name === 'Certifications' &&
                                    <div className="form-floating font-14 mx-2">
                                        <div>                            
                                            <TagsInput
                                                value={addJobData.certifications}
                                                onChange={(c) => setAddJobData({...addJobData, certifications: c })}
                                                inputValue={certificateInput}
                                                onChangeInput={(input) => setCertificateInput(input)}                  
                                                inputProps={{ placeholder: "Add Certificate"}}
                                                className='form-control mt-1'
                                                inputClass='w-100'                
                                            />
                                        </div>
                                        <small className="ml-2">
                                            Type a certificate name above and hit enter
                                        </small>
                                    </div> 
                                }   
                                {                                                              
                                    item.name === 'Visa Requirement' &&
                                    <div className="form-floating Hover-Dropdown m-2" style={{ zIndex: '997' }}>
                                        <Select
                                            isMulti
                                            options={visaStatus}
                                            name="placementSkill"
                                            onChange={(e) => {
                                                setAddJobData({
                                                    ...addJobData,
                                                    visaRequirement: e.map((visa) => visa.value),
                                                })
                                            }}
                                            isSearchable={true}
                                            value={visaStatus.filter(item => addJobData.visaRequirement.includes(item.value))}
                                        >
                                        </Select>
                                    </div>
                                }                                                                                                                           
                            </div>
                        </div>
                    </div>
                )
            }
            {
                customInfoClicked &&
                <div className='card card-flat bg-gray4'>
                    <div className='card-body'>
                        <div className='mt-1'>
                            <small>Help keep High5hire a respectful and professional</small>
                            <div className='row'>
                                <div className='col-lg-9'>                                   
                                    <div className='form-floating'>
                                        <input 
                                            type='text'
                                            className={ customInfoValidate.question ? 'form-control border border-danger' : 'form-control'}
                                            placeholder="Title"
                                            onChange={(e) => {
                                                setCustomInfo({ ...customInfo, question: e.target.value })
                                            }}
                                        />
                                        <label>Question</label>
                                        {
                                            customInfoValidate.question &&
                                            <small className='validation ml-2'>{customInfoValidate.question}</small>
                                        }
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className='d-flex mt-2'>
                                        <button 
                                            className='btn btn-sm' 
                                            onClick={() => {
                                                if(customInfo.question === '' || customInfo.answer === '') {
                                                    toast.error('Please Complete the Custom Info')
                                                    setCustomInfoValidate({ question: customInfo.question ? '' : '*Required Field', answer: customInfo.answer ? '' : '*Required Field'})
                                                }
                                                else {
                                                    let temp = [...additionalInfoFinal]
                                                    temp.push({ name: 'Custom Info', question: customInfo.question, answer: customInfo.answer })
                                                    setAdditionalInfoFinal(temp)
                                                    setCustomInfo({ question: '', answer: '' })
                                                    setCustomInfoClicked(false)
                                                    setCustomInfoValidate({ question: '', answer: '' })
                                                }
                                            }}
                                        >
                                            Add
                                        </button>
                                        <button 
                                            className='btn btn-sm btn-secondary ml-1'
                                            onClick={() => { 
                                                setCustomInfo({ question: '', answer: '' })
                                                setCustomInfoClicked(false)
                                                setCustomInfoValidate({ question: '', answer: '' })
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </div>                                                      
                                </div>
                            </div>
                            <div className='form-floating mt-2'>
                                <textarea 
                                    className={ customInfoValidate.answer ? 'form-control border border-danger' : 'form-control'}                                                                                       
                                    value={customInfo.answer}                                                                                       
                                    onChange={(e) => {                                                          
                                        setCustomInfo({ ...customInfo, answer: e.target.value })
                                    }}
                                /> 
                                {
                                    customInfoValidate.answer &&
                                    <small className='validation ml-2'>{customInfoValidate.answer}</small>
                                }                                                                                  
                            </div> 
                            <div className='d-flex'>
                                <label className='ml-auto'>Remaining Custom Info: <strong>{ (5 - additionalInfoFinal.filter(i => i.name === 'Custom Info').length) + (customInfoClicked ? -1 : 0) }</strong></label>
                            </div>
                        </div>
                    </div>
                </div>
            }
            { additionalInfoFinal.length > 0 && <hr className='m-2'></hr>}

            { 
                additionalInfoArray.map(item => 
                    <button 
                        className='btn btn-sm m-1' 
                        onClick={() => { 
                            if(item.name === 'Custom Info' && additionalInfoFinal.filter(i => i.name === 'Custom Info').length >= 5) {
                                toast.error('Maximum 5 Custom Info are allowed')
                            }
                            else if(customInfoClicked && item.name === 'Custom Info' && (customInfo.question === '' || customInfo.answer === '')) {
                                toast.error('Please Complete the Custom Info')
                            }
                            else if(item.name === 'Custom Info') {
                                setCustomInfoClicked(true)
                            }
                            else {
                                setAdditionalInfoFinal([...additionalInfoFinal, item])
                            }                                                       
                        }}
                        style={{ background: 'none', color: '#333' }}
                        disabled={item.name !== 'Custom Info' && additionalInfoFinal.map(i => i.name).includes(item.name)}
                    >
                        <i className='fas fa-fw mr-2 fa-plus ' aria-hidden='true'></i>
                        {item.name}
                    </button>
                )
            }                                                                                                  
        </div>
    )
}

export default AdditionalInfo