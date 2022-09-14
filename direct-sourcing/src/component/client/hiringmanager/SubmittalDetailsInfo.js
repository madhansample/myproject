import React, { useState, useEffect } from 'react'
import "react-tagsinput/react-tagsinput.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'


function SubmittalDetailsInfo({ weightage, setWeightage, addJobData, component }) {

    const [ automatch, setAutomatch ] = useState(true)
    
    const [ average, setAverage ] = useState([
        { name: 'Overall', score: 0 },
        { name: 'Mandatory Skills', score: 0 },
        { name: 'Good To Have Skills', score: 0 },
        { name: 'Location', score: 0 },
        { name: 'Industry', score: 0 },
        { name: 'Education', score: 0 },
        { name: 'Experience', score: 0 },
        { name: 'Job Title', score: 0 }
    ]) 

    const calculateAverage = () => {
        let primary = 0
        let secondary = 0
        let skillSet = 0
        let location = 0
        let education = 0
        let jobTitle = 0
        let experience = 0
        let sum = 0
        let count = addJobData.primarySkills.length + addJobData.secondarySkills.length + addJobData.skillSet.length + addJobData.education.length + 3
        addJobData.primarySkills.forEach(skill => {
            if(weightage.primarySkills.includes(skill)) {
                sum ++
                primary ++
            }
        })
        addJobData.secondarySkills.forEach(skill => {
            if(weightage.secondarySkills.includes(skill)) {
                sum ++
                secondary ++
            }
        })
        addJobData.skillSet.forEach(skill => {
            if(weightage.industries.includes(skill)) {
                sum ++
                skillSet ++
            }
        })
        addJobData.education.forEach(skill => {
            if(weightage.education.includes(skill)) {
                sum ++
                education ++
            }
        })
        if(weightage.location) {
            sum ++
            location ++         
        }
        if(weightage.jobTitle) {
            sum ++
            jobTitle ++
        }
        if(weightage.experienceLevel) {
            sum ++
            experience ++
        }
        let primaryAverage = addJobData.primarySkills.length > 0 ? Math.round((primary*100)/addJobData.primarySkills.length) : 0
        let secondaryAverage = addJobData.secondarySkills.length > 0 ? Math.round((secondary*100)/addJobData.secondarySkills.length) : 0
        let industryAverage = addJobData.skillSet.length > 0 ? Math.round((skillSet*100)/addJobData.skillSet.length) : 0
        let locationAverage = location ? 100 : 0
        let jobTitleAverage = jobTitle ? 100 : 0
        let experienceAvg = experience ? 100 : 0
        let educationAvg = addJobData.education.length > 0 ? Math.round((education*100)/addJobData.education.length) : 0
        let total = Math.round((sum*100)/count)
        setAverage([
            { name: 'Overall', score: total },
            { name: 'Mandatory Skills', score: primaryAverage },
            { name: 'Good To Have Skills', score: secondaryAverage },
            { name: 'Location', score: locationAverage },
            { name: 'Industry', score: industryAverage },
            { name: 'Education', score: educationAvg },
            { name: 'Experience', score: experienceAvg },
            { name: 'Job Title', score: jobTitleAverage }
          ]) 
    }

    useEffect(() => {  
        console.log(addJobData)
        console.log(weightage)    
        calculateAverage()
    }, [weightage])

    return (
        <div> 
            <div>
                { !component &&
                <div className="mx-5 mt-2">
                    <p>
                    You can add candidate shortlisting criteria based on below parameters, all the candidates matching to the defined criteria will be submitted to the jobs
                    </p>              
                </div>} 

                <div className='m-3'>
                    <table>
                        <tr>
                            {
                                average.map(item => 
                                    <td className='p-3'>
                                        <div className='d-flex flex-column align-items-center justify-content-end'>
                                            {   item.name !== 'Overall' ?
                                                <div style={{ width: '3rem' }}>
                                                    <CircularProgressbar 
                                                        strokeWidth={6}                                   
                                                        value={item.score} 
                                                        text={`${item.score}%`} 
                                                        styles={buildStyles({    
                                                            textColor: item.score >= 50 ? 'green' : 'black',                                                                                                     
                                                            pathColor: item.score >= 50 ? "green" : 'orange' 
                                                        })}
                                                    />
                                                </div> : 
                                                <div style={{ width: '4rem' }}>
                                                    <CircularProgressbar 
                                                        value={item.score}
                                                        text={`${item.score}%`}
                                                        background
                                                        backgroundPadding={6}
                                                        styles={buildStyles({
                                                            backgroundColor: item.score >= 50 ? "green" : 'orange',
                                                            textColor: "#fff",
                                                            pathColor: "#fff",
                                                            trailColor: "transparent"
                                                        })}
                                                    />
                                                </div>
                                            }                                 
                                            <div>
                                                <small>{item.name}</small>
                                            </div>
                                        </div>                                  
                                    </td>
                                )
                            }
                        </tr>
                    </table>
                </div>

                <div className="ml-4 mt-4 mb-2">
                    <button 
                        type="button" 
                        className="btn btn-collapsible"                                
                        onClick={() => setAutomatch(!automatch)} 
                    >
                        <i className={automatch ? "fal fa-angle-down fa-fw" : "fal fa-angle-up fa-fw"}></i>
                        <span>
                            <small>Resume Matching Parameters</small>
                        </span>
                    </button>
                </div>

                <div className={automatch ? "mx-5 d-none mb-5" : "mx-5"}>   

                    {/* MANDATORY SKILLS */}
                    <div className='card card-flat bg-gray4 m-3'>
                        <div className='card-body'>
                            <div className='row m-2'>
                                <div className='col-lg-6'>
                                    <strong>Mandatory Skills</strong>
                                </div>
                                <div className='col-lg-6'>
                                    <strong>Recommended</strong>
                                </div>
                            </div>
                            <hr />
                            {
                                addJobData.primarySkills.length > 0 &&
                                addJobData.primarySkills.map((item, index) => 
                                    <div className='row m-2'>
                                        <div className='col-lg-6'>
                                            {item}
                                        </div>
                                        <div className='col-lg-3'>
                                            <select 
                                                className='form-select font-14' 
                                                onChange={(e) => {  
                                                    if(e.target.value === 'Necessary'){
                                                        setWeightage({ ...weightage, primarySkills: [ ...weightage.primarySkills, item ] })
                                                    }                
                                                    else {
                                                        setWeightage({ ...weightage, primarySkills: weightage.primarySkills.filter(skill => skill !== item)})
                                                    }                              
                                                }}
                                                disabled={component}
                                            >
                                                <option selected={weightage.primarySkills.includes(item)} value='Necessary'>Necessary</option>
                                                <option selected={!weightage.primarySkills.includes(item)} value='Optional'>Optional</option>
                                            </select>
                                        </div>
                                    </div>
                                )
                            }                      
                        </div>
                    </div>    

                    {/* GOOD TO HAVE SKILLS */}
                    <div className='card card-flat bg-gray4 m-3'>
                        <div className='card-body'>
                            <div className='row m-2'>
                                <div className='col-lg-6'>
                                    <strong>Good To Have Skills</strong>
                                </div>
                                <div className='col-lg-6'>
                                    <strong>Recommended</strong>
                                </div>
                            </div>
                            <hr />
                            {
                                addJobData.secondarySkills.length > 0 &&
                                addJobData.secondarySkills.map((item, index) => 
                                    <div className='row m-2'>
                                        <div className='col-lg-6'>
                                            {item}
                                        </div>
                                        <div className='col-lg-3'>
                                            <select 
                                                className='form-select font-14' 
                                                onChange={(e) => {  
                                                    if(e.target.value === 'Necessary'){
                                                        setWeightage({ ...weightage, secondarySkills: [ ...weightage.secondarySkills, item ] })
                                                    }                
                                                    else {
                                                        setWeightage({ ...weightage, secondarySkills: weightage.secondarySkills.filter(skill => skill !== item)})
                                                    }                              
                                                }}
                                                disabled={component}
                                            >
                                                <option selected={weightage.secondarySkills.includes(item)} value='Necessary'>Necessary</option>
                                                <option selected={!weightage.secondarySkills.includes(item)} value='Optional'>Optional</option>
                                            </select>
                                        </div>
                                    </div>
                                )
                            }                      
                        </div>
                    </div>    

                    {/* INDUSTRY */}
                    <div className='card card-flat bg-gray4 m-3'>
                        <div className='card-body'>
                            <div className='row m-2'>
                                <div className='col-lg-6'>
                                    <strong>Industries</strong>
                                </div>
                                <div className='col-lg-6'>
                                    <strong>Recommended</strong>
                                </div>
                            </div>
                            <hr />
                            {
                                addJobData.skillSet.length > 0 &&
                                addJobData.skillSet.map((item, index) => 
                                    <div className='row m-2'>
                                        <div className='col-lg-6'>
                                            {item}
                                        </div>
                                        <div className='col-lg-3'>
                                            <select 
                                                className='form-select font-14' 
                                                onChange={(e) => {  
                                                    if(e.target.value === 'Necessary'){
                                                        setWeightage({ ...weightage, industries: [ ...weightage.industries, item ] })
                                                    }                
                                                    else {
                                                        setWeightage({ ...weightage, industries: weightage.industries.filter(skill => skill !== item)})
                                                    }                              
                                                }}
                                                disabled={component}
                                            >
                                                <option selected={weightage.industries.includes(item)} value='Necessary'>Necessary</option>
                                                <option selected={!weightage.industries.includes(item)} value='Optional'>Optional</option>
                                            </select>
                                        </div>
                                    </div>
                                )
                            }                       
                        </div>
                    </div> 

                    {/* LOCATION */}
                    <div className='card card-flat bg-gray4 m-3'>
                        <div className='card-body'>
                            <div className='row m-2'>
                                <div className='col-lg-6'>
                                    <strong>Location</strong>
                                </div>
                                <div className='col-lg-6'>
                                    <strong>Recommended</strong>
                                </div>
                            </div>
                            <hr />
                            <div className='row m-2'>
                                <div className='col-lg-6'>
                                    { (addJobData.location.city && addJobData.location.state && addJobData.location.country ) && (addJobData.isRemote ? 'Remote' : (addJobData.location.city + ', ' + addJobData.location.state + ', ' + addJobData.location.country ))}
                                </div>
                                <div className='col-lg-3'>
                                    <select 
                                        className='form-select font-14' 
                                        disabled={component}
                                        onChange={(e) => setWeightage({ ...weightage, location: e.target.value === 'Necessary' ? true : false })}
                                    >
                                        <option selected={weightage.location} value='Necessary'>Necessary</option>
                                        <option selected={!weightage.location} value='Optional'>Optional</option>
                                    </select>
                                </div>
                            </div>                    
                        </div>
                    </div>

                    {/* JOB TITLE */}
                    <div className='card card-flat bg-gray4 m-3'>
                        <div className='card-body'>
                            <div className='row m-2'>
                                <div className='col-lg-6'>
                                    <strong>Job Title</strong>
                                </div>
                                <div className='col-lg-6'>
                                    <strong>Recommended</strong>
                                </div>
                            </div>
                            <hr />
                            <div className='row m-2'>
                                <div className='col-lg-6'>
                                    { component ? addJobData.jobTitle : addJobData.title}
                                </div>
                                <div className='col-lg-3'>
                                    <select 
                                        disabled={component}
                                        className='form-select font-14' 
                                        onChange={(e) => setWeightage({ ...weightage, jobTitle: e.target.value === 'Necessary' ? true : false })}
                                    >
                                        <option selected={weightage.jobTitle} value='Necessary'>Necessary</option>
                                        <option selected={!weightage.jobTitle} value='Optional'>Optional</option>
                                    </select>
                                </div>
                            </div>                    
                        </div>
                    </div>

                    {/* EDUCATION */}
                    <div className='card card-flat bg-gray4 m-3'>
                        <div className='card-body'>
                            <div className='row m-2'>
                                <div className='col-lg-6'>
                                    <strong>Education</strong>
                                </div>
                                <div className='col-lg-6'>
                                    <strong>Recommended</strong>
                                </div>
                            </div>
                            <hr />
                            {
                                addJobData.education.length > 0 &&
                                addJobData.education.map((item, index) => 
                                    <div className='row m-2'>
                                        <div className='col-lg-6'>
                                            {item}
                                        </div>
                                        <div className='col-lg-3'>
                                            <select 
                                                className='form-select font-14' 
                                                onChange={(e) => {  
                                                    if(e.target.value === 'Necessary'){
                                                        setWeightage({ ...weightage, education: [ ...weightage.education, item ] })
                                                    }                
                                                    else {
                                                        setWeightage({ ...weightage, education: weightage.education.filter(skill => skill !== item)})
                                                    }                              
                                                }}
                                                disabled={component}
                                            >
                                                <option selected={weightage.education.includes(item)} value='Necessary'>Necessary</option>
                                                <option selected={!weightage.education.includes(item)} value='Optional'>Optional</option>
                                            </select>
                                        </div>
                                    </div>
                                )
                            }                       
                        </div>
                    </div>

                    {/* EXPERIENCE */}
                    <div className='card card-flat bg-gray4 m-3'>
                        <div className='card-body'>
                            <div className='row m-2'>
                                <div className='col-lg-6'>
                                    <strong>Experience</strong>
                                </div>
                                <div className='col-lg-6'>
                                    <strong>Recommended</strong>
                                </div>
                            </div>
                            <hr />
                            <div className='row m-2'>
                                <div className='col-lg-6'>
                                    {addJobData.experienceLevel}
                                </div>
                                <div className='col-lg-3'>
                                    <select 
                                        className='form-select font-14' 
                                        disabled={component}
                                        onChange={(e) => setWeightage({ ...weightage, experienceLevel: e.target.value === 'Necessary' ? true : false })}
                                    >
                                        <option selected={weightage.experienceLevel} value='Necessary'>Necessary</option>
                                        <option selected={!weightage.experienceLevel} value='Optional'>Optional</option>
                                    </select>
                                </div>
                            </div>                    
                        </div>
                    </div>
                
                </div>
            </div>                     
      </div>
) 
}

export default SubmittalDetailsInfo

