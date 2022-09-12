import React ,{useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRegCalendarAlt,FaUser,FaMapMarkerAlt } from "react-icons/fa";
import TopNavBar from '../../common/TopNavBar';
import jobs from '../../../data/jobs.json'
import Logo from '../viewjob/High5Logo.png'

function Index  (props)  {

const [job, setJob] =useState( {})
    
useEffect (()=> {
   
   setJob(props)
}, [])
//console.log(job)

    return (
        <div>
            <TopNavBar />
            <div className='font-link' >
              <Container fluid style={{backgroundColor :' #F3F5F7', marginTop: 50, height:220}}>
                <Row style={{marginLeft:80}}>
                <Col style={{marginTop:40}}><a style={{color: '#3F7BB9'}} href="/" >‹ Back to all jobs</a>

                  <div className='header'  >
                      <h1 style={{marginTop:20}}>{job.jobTitle}</h1>

                    <div style={{marginTop:20}}> 
                      <FaMapMarkerAlt style={{color: '#3F7BB9', fontSize : '12px' , marginLeft:1, marginRight:5}} />  
                     
                        <span  style={{marginRight:10}}>{job.jobLocation}</span>

                        <FaUser style={{color :"#3F7BB9", fontSize : '12px' , marginLeft:10, marginRight:5}} />  
                        <span style={{marginRight:10}}>{job.positionCount} Position</span>


                        <FaRegCalendarAlt style={{color :"#3F7BB9", fontSize : '12px' , marginLeft:10, marginRight:5}} />  
                       
                        <span  style={{marginRight:10}}>{job.jobDuration}</span>
                    </div>

                  </div>
                  </Col>
                  </Row>
                </Container>
              </div>

            <div style={{marginLeft:100, marginTop:20}}> 
              <p><strong >Job Id: </strong>
              <span  style={{marginRight:10}}>{job.jobId}</span></p>
              <p><strong >Role : {job.jobRole}</strong></p>
              <p><strong >Location : {job.jobLocation}</strong></p>
              {
                job.Onsite ?  <p><strong>Onsite / Hybrid / Remote :  Onsite</strong></p>
                :  <strong>Onsite / Hybrid / Remote :  Remote</strong>
              }
             
            </div>

            <div style={{marginLeft:100, marginTop:40}}>

              <strong >Skills</strong>
              {
                job.jobSkill.map((ele,i)=>{
                    return    <p>
                                {`${i+1}) ${ele} ` }
                            </p>
                            
                })
              }

            </div>

            <div  style={{marginLeft:100, marginTop:40}}>
              <strong >Responsibilities:</strong>

              {
                job.jobResponsibilty.map((ele,i)=>{
                    return    <p>
                                {`${i+1}) ${ele} ` }
                            </p>
                            
                })
              }

            </div>

            <div style={{marginLeft:100, marginTop:80}}><span >Published on {job.jobPostedDate}, {job.jobPublishTime}</span></div>
            
            <div style={{marginLeft:100, marginTop:40, width: 625, height: 1.5, backgroundColor: "#eee" }}></div>


            <div style={{marginLeft:100, marginTop:40}}>
              <button onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }}
                style={{backgroundColor :"#3F7BB9"}}>
                <span _ngcontent-careers-app-c17="" class="label">Back to Top</span>
               </button>
            </div>

            <footer style={{marginLeft:100, marginTop:40}}>
                <div >
                    <span >Powered by</span><a href="/for-candidates/" rel="noopener" target="_blank"><img style={{width:40, height:30, paddingBottom: 10, marginLeft: 5}}src = {Logo}/></a></div><p><a href="/privacy-policy" target="https">Privacy Policy</a> and <a href="/terms-of-service" target="https">Terms of Service</a></p></footer>

        </div>
    );
};

export default Index;