import React, { useEffect, useState } from 'react'
import ScreeningQuestions from './ScreeningQuestions'
import TagsInput from "react-tagsinput"
import "react-tagsinput/react-tagsinput.css"
import Autosuggest from "react-autosuggest"
import Modal from 'react-bootstrap/Modal'

function VettingPlan({ addJobData, setAddJobData, mandatorySkills, screeningQuestions, 
    setScreeningQuestions, selectedLanguages, setSelectedLanguages, skillSetOption, 
    QualificationType, vettingCheck }) {

    const [ displayScreening, setDisplayScreening ] = useState(false)
    const [ resumeMandatory, setResumeMandatory ] = useState(false)
    const [ addSkill, setAddSkill ] = useState(false)
    const [ skillInput, setSkillInput ] = useState({ name: '', type: 'MCQ' })
    const [ skillArray, setSkillArray ] = useState([])
    const [ dropDownSkills, setDropDownSkills ] = useState([])
    const [ showQnAModal, setShowQnAModal ] = useState(false)
    const [ confirmQnA, showConfirmQnA ] = useState(false)
    const [ showVettingModal, setShowVettingModal ] = useState(false)
    const [ confirmVetting, showConfirmVetting ] = useState(false)

    useEffect(() => {
        //fetchDropDown()
    }, [])

    const autocompleteRenderInput = ({ addTag, ...props }) => {
        const theme = {
            suggestionsContainerOpen: {
                display: "block",
                position: "absolute",
                width: "95%",
                border: "1px solid #aaa",
                listStyle: "none",
                zIndex: 10,
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
                e.preventDefault();
            } else {
                props.onChange(e);
            }
        };

        const getSuggestionValue = (suggestion) => suggestion.PositionName;

        const getSuggestions = (value) => {
            const inputValue = value.trim().toLowerCase();
            const inputLength = inputValue.length;
            const suggestValues =
                inputLength === 0
                    ? []
                    : dropDownSkills.filter((item) =>
                        item.toLowerCase().includes(inputValue) && !addJobData.vettingDetails.map(i => i.name).includes(item)
                    )
            return suggestValues;
        };

        const renderSuggestion = (suggestion) => (
            <div>{suggestion}</div>
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
                    addTag(suggestion);
                }}
                theme={theme}
            />
        );
    }

    return (
        <>
            <div className='card card-flat m-3'>
                <div className='card-body'>
                    <div className='mx-4'>
                        Vetting plan will allow you to plan vetting requirements needed for the job
                    </div>

                    <div className='card card-flat bg-gray4 m-3'>
                        <div className='card-body'>                   

                        {/* SCREENING REQUIREMENT */}
                        <div className='row m-4 d-flex align-items-center'>
                            {/* <div className='col-lg-1'>
                                <i className='avatar avatar-sm'><strong>1</strong></i>
                            </div> */}
                            <div className='col-lg-8'>
                                Do you have a Screening Requirement?                
                            </div>  
                            <div className='col-lg-2'>
                                <select 
                                    className='form-select' 
                                    onChange={(e) => { 
                                        if(e.target.value === 'Yes') {
                                            setDisplayScreening(true)
                                            setAddJobData({ ...addJobData, screeningRequired: true })
                                        }
                                        else {
                                            setShowQnAModal(true)
                                        }                          
                                    }
                                }>
                                    <option selected={addJobData.screeningRequired} value='Yes'>Yes</option>
                                    <option selected={!addJobData.screeningRequired} value='No'>No</option>
                                </select>               
                            </div>            
                        </div>

                        {   
                            addJobData.screeningRequired &&
                            <div className="mb-2 m-4 ml-5">
                                <button 
                                    type="button" 
                                    className="btn btn-collapsible" 
                                    onClick={() => setDisplayScreening(!displayScreening)} 
                                >
                                    <i className={displayScreening ? "fal fa-angle-down fa-fw" : "fal fa-angle-up fa-fw"}></i>
                                    <span>
                                        <small>Screening Requirement</small>
                                    </span>
                                </button>
                            </div>
                        }
                    
                        {
                            addJobData.screeningRequired &&
                            <div className={displayScreening ? "ml-5 mb-4" : "d-none"}>                       
                                <ScreeningQuestions
                                    selectedLanguages={selectedLanguages}
                                    setSelectedLanguages={setSelectedLanguages}
                                    skillSetOption={skillSetOption}
                                    QualificationType={QualificationType}
                                    screeningQuestions={screeningQuestions}
                                    setScreeningQuestions={setScreeningQuestions}
                                />                 
                            </div>   
                        }

                        {/* <div className='row m-4'>                  
                            <div className='col-lg-6'>
                                Do you want candidate to submit Video Pitch/Resume
                            </div>  
                            <div className='col-lg-6'>
                                <select className='form-select' onChange={(e) => setResumeMandatory(e.target.value === 'Mandatory' ? true : false) }>
                                    <option selected={!resumeMandatory} value='Optional'>Preferred but not mandatory</option>
                                    <option selected={resumeMandatory} value='Mandatory'>Mandatory</option>
                                </select>               
                            </div>            
                        </div>    */}

                        {/* PRE VETTING REQUIREMENT */}
                        <div className='row m-4 d-flex align-items-center mt-5'>
                            {/* <div className='col-lg-1'>
                                <i className='avatar avatar-sm'><strong>3</strong></i>
                            </div> */}
                            <div className='col-lg-8'>
                                Do you want pre-vetted talent to be submitted?
                            </div>  
                            <div className='col-lg-2'>
                                <select 
                                    className='form-select' 
                                    onChange={(e) => { 
                                        if(e.target.value === 'Yes') {
                                            setAddJobData({ ...addJobData, vettingRequired: true }) 
                                        }
                                        else {
                                            setShowVettingModal(true)
                                        }
                                    }}
                                >
                                    <option selected={addJobData.vettingRequired} value='Yes'>Yes</option>
                                    <option selected={!addJobData.vettingRequired} value='No'>No</option>
                                </select>               
                            </div>             
                        </div>    

                        {   addJobData.vettingRequired &&
                            <div className='card card-flat m-2'>
                                <div className='card-body'>
                                    <h6 className='m-1 mb-5'>Suggested Vetting</h6>
                                    <div className='m-4'>
                                        {
                                            mandatorySkills.length > 0 ?
                                            <div>
                                                <p>Choose Skills for Vetting <small>(You can add maximum 3 skills)</small></p>
                                                <div className='ml-2'>
                                                    { 
                                                        mandatorySkills.map(i => 
                                                            <button 
                                                                disabled={addJobData.vettingDetails.map(j => j.name).includes(i)} 
                                                                className='btn btn-sm btn-secondary m-1' 
                                                                onClick={() => { 
                                                                    setAddSkill(false)
                                                                    setAddJobData({ ...addJobData, vettingDetails: [ ...addJobData.vettingDetails, { name: i, type: 'MCQ' }]})
                                                                }}
                                                            >
                                                                {i}
                                                            </button>
                                                        )
                                                    }
                                                </div>
                                            </div> :
                                            addJobData.vettingDetails.length == 0 && 
                                            <div class="text-center p-2">
                                                <div class="avatar avatar-lg">
                                                    <i aria-hidden="true" class="fad fa-users-slash"></i>
                                                </div>
                                                <div class="mt-2">
                                                    No Skills Added
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className='m-4'>

                                        {
                                            addJobData.vettingDetails.length > 0 &&
                                            <>
                                                <div className='row mb-3'>
                                                    <div className='col-lg-2'>
                                                        <strong>Skill</strong>
                                                    </div>
                                                    <div className='col-lg-3'>
                                                        <strong>Type</strong>
                                                    </div>
                                                    <div className='col-lg-3'>
                                                        <strong>Difficulty</strong>
                                                    </div>
                                                    <div className='col-lg-3'>
                                                        <strong>Duration</strong>
                                                    </div>
                                                </div>
                                                <hr />
                                                {
                                                    addJobData.vettingDetails.map((skill, index) => 
                                                        <div className='row mb-3'>
                                                            <div className='col-lg-2'>
                                                                {skill.name}
                                                            </div>  
                                                            <div className='col-lg-3'>
                                                                <select 
                                                                    className='form-select font-14' 
                                                                    onChange={(e) => {
                                                                        let temp = [...addJobData.vettingDetails]
                                                                        temp[index] = { ...temp[index], type: e.target.value }
                                                                        setAddJobData({ ...addJobData, vettingDetails: temp })
                                                                    }}
                                                                >
                                                                    <option value='MCQ' selected={skill.type === 'MCQ'}>MCQ</option>
                                                                    <option value='Video MCQ' selected={skill.type === 'Video MCQ'}>Video MCQ</option>
                                                                </select>               
                                                            </div>
                                                            <div className='col-lg-3'>
                                                                <select 
                                                                    className='form-select font-14' 
                                                                    onChange={(e) => {
                                                                        let temp = [...addJobData.vettingDetails]
                                                                        temp[index] = { ...temp[index], difficulty: e.target.value }
                                                                        setAddJobData({ ...addJobData, vettingDetails: temp })
                                                                    }}
                                                                >
                                                                    {
                                                                        ['Simple', 'Medium', 'Advanced'].map(item => <option value={item} selected={skill.difficulty === item || (item === 'Simple' && !skill.difficulty)}>{item}</option>)
                                                                    }
                                                                </select>               
                                                            </div>
                                                            <div className='col-lg-3 d-flex'>
                                                                <select 
                                                                    className='form-select font-14' 
                                                                    onChange={(e) => {
                                                                        let temp = [...addJobData.vettingDetails]
                                                                        temp[index] = { ...temp[index], duration: e.target.value }
                                                                        setAddJobData({ ...addJobData, vettingDetails: temp })
                                                                    }}
                                                                >
                                                                    {
                                                                        ['15 mins', '30 mins', '45 mins', '60 mins'].map(item => <option value={item} selected={skill.duration === item || (item === '15 mins' && !skill.duration)}>{item}</option>)
                                                                    }
                                                                </select>  
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-icon ml-2"
                                                                    onClick={() => setAddJobData({ ...addJobData, vettingDetails: addJobData.vettingDetails.filter((item2, index2) => index !== index2)})}
                                                                >
                                                                    <i className="fal fa-fw fa-trash-alt" aria-hidden="true"></i>
                                                                </button>             
                                                            </div>
                                                            {/* <div className='col-lg-1'>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-icon"
                                                                    onClick={() => setAddJobData({ ...addJobData, vettingDetails: addJobData.vettingDetails.filter((item2, index2) => index !== index2)})}
                                                                >
                                                                    <i className="fal fa-fw fa-trash-alt" aria-hidden="true"></i>
                                                                </button>
                                                            </div> */}
                                                        </div>
                                                    )
                                                }                                      
                                            </>
                                        }                              
                                    </div>
                                    { vettingCheck.length > 0 &&
                                    <div className="text-center mt-2 px-2">
                                        <div className="avatar avatar-lg avatar-red2 mr-3">
                                        <i class="fas fa-exclamation-triangle fa-fw"></i>
                                        </div>
                                        <p className="text-center lead mt-3">
                                            Vetting for following skills not available for now
                                        </p>       
                                        {
                                            vettingCheck.map(i => <div>{i.name}</div>)
                                        }       
                                    </div>}
                                    <hr />
                                    {
                                        addSkill &&
                                        <div className='row m-3'>
                                            <p>Add a new skill</p>
                                            <div className='col-lg-8'>
                                                <div className='form-group'>
                                                    <TagsInput
                                                        renderInput={autocompleteRenderInput}
                                                        inputClass="mb-1"
                                                        containerClass=''
                                                        value={skillArray}
                                                        onChange={(skills) => {
                                                            setSkillArray(skills)
                                                        }}
                                                        inputValue={skillInput.name}
                                                        onChangeInput={(skill) => {
                                                            setSkillInput({ ...skillInput, name: skill })
                                                        }}
                                                        disabled={skillArray.length === 1}
                                                        maxTags={1}
                                                        inputProps={{
                                                            placeholder: skillInput.name ? '' : 'Select Skills*',
                                                        }}
                                                    />
                                                    {'' && <small className='validation ml-2'>{''}</small>}
                                                </div>
                                            </div>  
                                            {/* <div className='col-lg-5'>
                                                <select className='form-select font-14' onChange={(e) => setSkillInput({ ...skillInput, type: e.target.value })}>
                                                    <option value='MCQ'>MCQ</option>
                                                    <option value='Video MCQ'>Video MCQ</option>
                                                </select>               
                                            </div> */}
                                            <div className='col-lg-2'>
                                                <button
                                                    type="button"
                                                    className="btn btn-icon ml-1"
                                                    onClick={() => {
                                                        setSkillInput({ name: '', type: 'MCQ' })
                                                        setSkillArray([])
                                                        setAddSkill(false)
                                                    }}
                                                >
                                                    <i className="fal fa-fw fa-trash-alt" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    }
                                    <div className='d-flex align-items-center m-3'>
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-text"
                                            disabled={addSkill || addJobData.vettingDetails.length === 3}
                                            onClick={() => {
                                                setAddSkill(true)
                                            }}
                                        >
                                            <i className="fal fa-plus mr-2"></i>
                                            Add Skill
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary "
                                            onClick={() => {
                                                setAddJobData({ ...addJobData, vettingDetails: [...addJobData.vettingDetails, { name: skillArray[0], type: 'MCQ', duration: '15 mins', difficulty: 'Simple' }]})
                                                setSkillInput({ name: '', type: 'MCQ' })
                                                setSkillArray([])
                                                setAddSkill(false)
                                            }}
                                            disabled={skillArray.length === 0}
                                        >
                                            <span>Save</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    </div>
                </div>
            </div>
            { showQnAModal &&
                <div className='bg-gray3'>
                    <Modal show={true}>                             
                        <Modal.Body>
                            <div className="text-center mt-2 px-2">
                                <div className="avatar avatar-lg avatar-red2 mr-3">
                                    <i class="fas fa-exclamation-triangle fa-fw"></i>
                                </div>
                                <p className="text-center lead mt-3">
                                    Existing data will be erased
                                </p>
                                <div class="text-center my-4">
                                    <button 
                                        type="button" 
                                        className="btn btn-secondary mr-3"                             
                                        onClick={() => { 
                                            setShowQnAModal(false)
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-primary" 
                                        onClick={() => {
                                            setShowQnAModal(false)
                                            setDisplayScreening(false)
                                            setAddJobData({ ...addJobData, screeningRequired: false })
                                            setScreeningQuestions([])                                         
                                        }}
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </div>  
                        </Modal.Body>                 
                    </Modal>
                </div>
            }
            { showVettingModal &&
                <div className='bg-gray3'>
                    <Modal show={true}>                             
                        <Modal.Body>
                            <div className="text-center mt-2 px-2">
                                <div className="avatar avatar-lg avatar-red2 mr-3">
                                    <i class="fas fa-exclamation-triangle fa-fw"></i>
                                </div>
                                <p className="text-center lead mt-3">
                                    Existing data will be erased
                                </p>
                                <div class="text-center my-4">
                                    <button 
                                        type="button" 
                                        className="btn btn-secondary mr-3"                             
                                        onClick={() => { 
                                            setShowVettingModal(false)
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-primary" 
                                        onClick={() => {
                                            setShowVettingModal(false)                                     
                                            setAddJobData({ ...addJobData, vettingRequired: false })
                                            setScreeningQuestions([])                                         
                                        }}
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </div>  
                        </Modal.Body>                 
                    </Modal>
                </div>
            }
        </>
    )
}

export default VettingPlan