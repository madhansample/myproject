import React, { useState } from 'react'
import { languages } from '../../../constants/Constants'
import { toast } from 'react-toastify'
import Select from 'react-select'

function ScreeningQuestions({ selectedLanguages, setSelectedLanguages, screeningQuestions, setScreeningQuestions, skillSetOption, QualificationType }) {

    //let languages = ['English', 'Kannada', 'Hindi']
    const screeningArray = [
        { name: 'Background Check', question: 'Are you willing to undergo a background check, in accordance with local law/regulations?', isMandatory: false },
        { name: 'Drug Check', question: 'Are you willing to take a drug test, in accordance with local law/regulations?', isMandatory: false },
        { name: 'Driving Licence', question: "Do you have a valid driver's license?", isMandatory: false },
        { name: 'Education', question: 'Have you completed the following level of education?', input: `Bachelor's Degree`, isMandatory: false },
        { name: 'Industry Experience', question: 'How many years of following Industry experience do you currently have?', input: 'Information Technology', isMandatory: false },
        { name: 'Language', question: 'What is your level of proficiency in following Languages?', input: '[English]', isMandatory: false },
        { name: 'Work Experience', question: 'How many years of experience do you currently have?', input: 'Numeric', isMandatory: false },
        { name: 'Location', question: "Are you comfortable commuting to job's location?", isMandatory: false },
        { name: 'Remote Work', question: 'Are you comfortable working in a remote setting?', isMandatory: false },
        { name: 'Urgent Hiring Need', question: 'We must fill this position urgently. Can you start immediately?', isMandatory: false },
        { name: 'Custom Question', index: 1, question: '', input: 'Yes/No', isMandatory: false }
    ]
    const [ customQuestion, setCustomQuestion ] = useState('')
    const [ customQuestionValidate, setCustomQuestionValidate ] = useState('')

    const handleChange = (value, name, indexValue) => {
        let temp = [...screeningQuestions]
        let index
        if(name === 'Custom Question' && indexValue) {
            index = temp.findIndex(i => i.index === indexValue)
        }
        else {
            index = temp.findIndex(i => i.name === name)
        }
        temp[index] = { ...temp[index], input: value }
        setScreeningQuestions(temp)
    }

    const handleChangeMandatory = (checked, name, indexValue) => {
        let temp = [...screeningQuestions]
        let index
        if(name === 'Custom Question' && indexValue) {
            index = temp.findIndex(i => i.index === indexValue)
        }
        else {
            index = temp.findIndex(i => i.name === name)
        }
        temp[index] = { ...temp[index], isMandatory: checked }
        setScreeningQuestions(temp)
    }

    return (
        <div className='card card-flat bg-gray4 m-3'>
            <div className='card-body'>
                <div className='px-3'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='mb-1'>
                            <h6>Add Screening Questions</h6>
                            <p>
                                Note: Maximum 5 Custom Questions can be added
                            </p>                      
                        </div>
                        <hr />
                    </div>
                    {
                        screeningQuestions.length > 0 &&
                        screeningQuestions.filter(i => i.name !== 'Custom Question').map(item => 
                        <div className='card card-flat m-2'>
                        <div className='card-body'>                        
                            <div className='d-flex p-3 mb-2' style={{ backgroundColor: "#dcdcdc" }}>
                                <div className='flex-item'>
                                    <medium>{item.question}</medium>
                                </div>
                                <button className='ml-auto btn btn-icon'>
                                    <i className='fa fa-close' onClick={() => {
                                        setScreeningQuestions([...screeningQuestions.filter(i => i.name !== item.name)])
                                    }}>

                                    </i>
                                </button>
                            </div> 
                            <div className='d-flex align-items-center justify-content-center'>                                                                           
                                { item.name === 'Education' &&
                                    <div className="form-floating w-50 ml-1">
                                        <select
                                            className="form-select font-14"                                                                   
                                            onChange={(e) => handleChange(e.target.value, item.name)}
                                        >
                                            {
                                                QualificationType.map(i => i.value).map(item2 => <option selected={item2 === item.input} value={item2}>{item2}</option>)
                                            } 
                                        </select>
                                        <label>Education</label>
                                    </div> 
                                }  
                                { item.name === 'Industry Experience' &&
                                    <div className="form-floating w-50 ml-1">
                                        <select
                                            className="form-select font-14"
                                            name="referralCurrency"
                                            onChange={(e) => handleChange(e.target.value, item.name)}
                                        >
                                            {
                                                skillSetOption.map(i => i.value).map(item2 => <option selected={item2 === item.input} value={item2}>{item2}</option>)
                                            } 
                                        </select>
                                        <label>Industry</label>
                                    </div> 
                                }  
                                { item.name === 'Language' &&
                                    <div className="form-group w-50 text-left">
                                        <label className="mb-2">Language</label>
                                        <div className="form-floating font-14 Hover-Dropdown" >
                                            <Select
                                                isMulti
                                                options={languages.map(lang => ({ value: lang, label: lang }))}
                                                value={selectedLanguages.map(i => ({ value: i, label: i }))}
                                                name="Qualification"
                                                onChange={(e) => {
                                                    setSelectedLanguages(Array.isArray(e) ? e.map(x => x.value) : [])
                                                }}
                                                isSearchable={true}
                                                defaultValue={{ value: 'English' }}
                                            >
                                            </Select>
                                        </div>                              
                                    </div> 
                                }   
                                { item.name === 'Work Experience' &&
                                    <div className="form-floating ml-1">
                                        {/* <select
                                            className="form-select font-14"
                                            name="referralCurrency"
                                            onChange={(e) => handleChange(e.target.value, item.name)}
                                        >
                                            {
                                                ['Numeric'].map(item2 => <option selected={item2 === item.input} value={item2}>{item2}</option>)
                                            } 
                                        </select> */}
                                        <span>Response Type: Numeric</span>
                                    </div> 
                                }   
                                { 
                                    !['Education', 'Industry Experience', 'Language', 'Work Experience'].includes(item.name) &&
                                    <div className="form-floating ml-1">
                                        {/* <select
                                            className="form-select font-14"                                                                                                                                    
                                        >
                                            {
                                                ['Yes/No'].map(item2 => <option selected={item2 === item.input} value={item2}>{item2}</option>)
                                            } 
                                        </select> */}
                                        <span>Response Type: Yes/No</span>
                                    </div>
                                }
                                <div className='ml-auto'>
                                    <div className="form-check form-switch d-flex align-items-center">
                                        <label
                                            className="form-check-label pt-0"
                                        >
                                            Must answer this question
                                        </label>
                                        <input                                                                                   
                                            className="form-check-input ml-2"
                                            type="checkbox"
                                            checked={item.isMandatory}
                                            onChange={(e) => handleChangeMandatory(e.target.checked, item.name)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>)
                    }   
                    {
                        screeningQuestions.map(i => i.name).includes('Custom Question') &&
                        <div className='mt-3'>
                        <div className='m-1'>Custom Questions: </div>
                            {screeningQuestions.filter(i => i.name === 'Custom Question').map(item => 
                            <div className='card card-flat m-2'>
                                <div className='card-body'> 
                                    {item.question ?
                                        <div className='d-flex p-3 mb-2' style={{ backgroundColor: "#dcdcdc" }}>
                                            <div className='flex-item'>
                                                <medium>{item.question}</medium>
                                            </div>
                                            <button className='ml-auto btn btn-icon'>
                                                <i 
                                                    className='fa fa-close' 
                                                    onClick={() => {
                                                        setScreeningQuestions([...screeningQuestions.filter(i => i.index !== item.index)])
                                                    }}
                                                >

                                                </i>
                                            </button>
                                        </div> :                                                            
                                        <div className='row'>
                                            <div className='col-lg-8'>
                                                <div className='form-floating mb-2'>
                                                    <input 
                                                        type='text' 
                                                        className={ customQuestionValidate ? 'form-control border border-danger' : 'form-control'}
                                                        placeholder='Type Question'
                                                        onChange={(e) => { 
                                                            if(customQuestionValidate) {
                                                                setCustomQuestionValidate('')
                                                            }                                                                                              
                                                            setCustomQuestion(e.target.value)
                                                        }}
                                                        value={customQuestion}
                                                    />
                                                    <label>Question</label>
                                                    {
                                                        customQuestionValidate &&
                                                        <small className='validation ml-2'>{customQuestionValidate}</small>
                                                    }
                                                </div>
                                            </div>                      
                                            <div className='col-lg-4'>
                                                <div className='d-flex'>
                                                    <button 
                                                        className='btn btn-sm' 
                                                        onClick={() => {
                                                            if(customQuestion) {
                                                                let temp = screeningQuestions.filter(i => (i.name !== 'Custom Question') || (i.name === 'Custom Question' && i.question !== ''))
                                                                temp.push({...screeningQuestions.filter(i => i.name === 'Custom Question' && i.question === '')[0], question: customQuestion })                                                                                                  
                                                                setScreeningQuestions(temp)
                                                                setCustomQuestion('')
                                                            }
                                                            else {
                                                                setCustomQuestionValidate('*Required Field')
                                                            }
                                                        }}
                                                    >
                                                        Add
                                                    </button>
                                                    <button 
                                                        className='btn btn-sm btn-secondary ml-1'
                                                        onClick={() => { 
                                                            setCustomQuestion('')
                                                            setCustomQuestionValidate('')
                                                            setScreeningQuestions(screeningQuestions.filter(i => (i.name !== 'Custom Question') || (i.name === 'Custom Question' && i.question !== '')))
                                                        }}
                                                    >
                                                        Cancel
                                                    </button>   
                                                </div>                                         
                                            </div>                                                               
                                        </div>    
                                    }                                                                                                                              
                                    <div className='d-flex align-items-center justify-content-center'>                                                                                                                                                                                                         
                                        <div className="form-floating w-50 ml-1">
                                            <select
                                                className="form-select font-14"                                                                  
                                                onChange={(e) => handleChange(e.target.value, item.name, item.index)}
                                            >
                                                {
                                                    ['Yes/No', 'Text', 'Numeric', 'Long Text'].map(item2 => <option selected={item2 === item.input} value={item2}>{item2}</option>)
                                                } 
                                            </select>
                                            <label>Response Type</label>
                                        </div>                                                                                                                                      
                                        <div className='ml-auto'>
                                            <div className="form-check form-switch d-flex align-items-center">
                                                <label
                                                    className="form-check-label pt-0"
                                                >
                                                    Must answer this question
                                                </label>
                                                <input                                                                                   
                                                    className="form-check-input ml-2"
                                                    type="checkbox"
                                                    checked={item.isMandatory}
                                                    onChange={(e) => handleChangeMandatory(e.target.checked, item.name, item.index)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)}
                        <div className='d-flex'>
                            <label className='ml-auto'>Remaining Custom Questions: <strong>{ 5 - screeningQuestions.filter(i => i.name === 'Custom Question').length }</strong></label>
                        </div>
                        </div>
                    }                            
                    { screeningQuestions.length > 0 && <hr className='m-2'></hr>}

                    <div>
                        {screeningArray.map(item =>                                                               
                        <button 
                            className='btn btn-sm m-1' 
                            onClick={() => { 
                                if(item.name === 'Custom Question' && screeningQuestions.filter(i => i.name === 'Custom Question').length >= 5) {
                                    toast.error('Maximum 5 Custom Questions are allowed')
                                }
                                else if(item.name === 'Custom Question' && screeningQuestions.filter(i => i.name === 'Custom Question' && i.question === '').length > 0) {
                                    toast.error('Please complete the Custom Question Info')
                                }
                                else {
                                    let temp = [...screeningQuestions]
                                    let item2 = {}
                                    if(item.name === 'Custom Question') {
                                        let maxIndex = screeningQuestions.filter(i => i.name === 'Custom Question').length + 1
                                        item2 = { ...item, index: maxIndex }
                                        temp.push(item2)
                                    }
                                    else {
                                        item2 = {...item}
                                        temp.push(item2)
                                    }
                                    setScreeningQuestions(temp)
                                }                                                       
                            }} 
                            style={{ background: 'none', color: '#333' }}
                            disabled={item.name !== 'Custom Question' && screeningQuestions.map(i => i.name).includes(item.name)}
                        >
                            <i className='fas fa-fw mr-2 fa-plus' aria-hidden='true'></i>
                            {item.name}
                        </button>                                                               
                        )}
                    </div>                                                           
                </div>
            </div>
        </div>
    )
}

export default ScreeningQuestions