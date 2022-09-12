import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRegCalendarAlt,FaUser,FaMapMarkerAlt } from "react-icons/fa";
import TopNavBar from '../../common/TopNavBar';






const Index = () => {
    return (
        <div>
            <TopNavBar />
            {/* <body>
        <div id="Content">
          <section id="TestApp">
            <div className="hero height-200">
              <div className="section pt-1 pb-2">
                <div className="row d-flex justify-content ml-30 mb-0">
                <button id="MainMenuToggle" type="button" class="btn btn-icon nav-toggle btn-nav"> Back to all jobs
                </button>
                  <p><div className="mt-4 mb-4 font-white text-capitalize">
                 
                 <h5 className="mb-0">ASASDASDA</h5>
                 
               </div></p>
                </div>
              </div>
            </div>
            <div className="page-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-9">
                    <div className="page-content-wrapper">
                      <div className="Sspace"></div>
                      <div className="jobsort">
                        <div className="jobsortheading"></div>
                        <div className="clientdiv">
                          <div className="clienttext">
                            <h5>{ADASDAD}</h5>
                          </div>
                          <div className="jobview"></div>
                          <ul></ul>
                        </div>
                        <div className="jobviewpostdiv">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="jobviewpostopen">
                                Posted on : &nbsp;
                                <span>{dateDiff}</span>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="jobviewpostopen">
                                Opening : &nbsp;
                                <span>{dasd}</span>
                              </div>
                            </div>
                            <div className="Sspace"></div>
                          </div>
                        </div>
                        <div className="Sspace"></div>
                        <div className="linediv"></div>
                        <div className="jdexpandiv">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="jobviewpostopen">
                                Job Title : &nbsp;
                                <span>
                                  <strong>aSas</strong>
                                </span>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="jobviewpostopen">
                                Position Type : &nbsp;
                                <span>
                                  <strong>ss</strong>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="linediv"></div>
                        <div className="Sspace"></div>
                     
                        <div className="Sspace"></div>
                       
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>
      </body> */}
            <div className='font-link' >
              <Container fluid classN style={{backgroundColor :' #F3F5F7', marginTop: 50, height:220}}>
                <Row style={{marginLeft:80}}>
                <Col style={{marginTop:40}}><a style={{color: '#3F7BB9'}} href="/careers/hcltech/jobs" >‹ Back to all jobs</a>

                  <div className='header'  >
                      <h1 style={{marginTop:20}}  >SAP ABAP Developer with P2P</h1>

                    <div style={{marginTop:20}}> 
                      <FaMapMarkerAlt style={{color: '#3F7BB9', fontSize : '12px' , marginLeft:1, marginRight:5}} />  
                     
                        <span  style={{marginRight:10}}>Austin, TX - United States</span>

                        <FaUser style={{color :"#3F7BB9", fontSize : '12px' , marginLeft:10, marginRight:5}} />  
                        <span style={{marginRight:10}}>1 Position</span>


                        <FaRegCalendarAlt style={{color :"#3F7BB9", fontSize : '12px' , marginLeft:10, marginRight:5}} />  
                       
                        <span  style={{marginRight:10}}>25 days ago</span>
                    </div>

                  </div>
                  </Col>
                  </Row>
                </Container>
              </div>

            <div style={{marginLeft:100, marginTop:20}}> 
              <p><strong >Job no: </strong>
              <span  style={{marginRight:10}}>XYMEJ</span></p>
              <p><strong >Role : SAP ABAP Developer</strong></p>
              <p><strong >Location : Autin, TX / Mountain View, CA</strong></p>
              <p><strong>Onsite / Remote :  Onsite</strong></p>
            </div>

            <div style={{marginLeft:100, marginTop:40}}>
              <strong >Skills</strong>
 
              <p><span> 1) Application engineering experience in SAP toolset, ABAP, Docusign</span></p>
              <p><span> 2) Expertise in procurement, P2P domain areas, and approval workflow management</span></p>
              <p><span> 3) Working proficiency and communication skills in verbal and written English</span></p>
              <p><span> 4) Years of experience: Level II and Level III AE (minimum 4 years)</span></p>
            </div>

            <div  style={{marginLeft:100, marginTop:40}}>
              <strong >Responsibilities:</strong>
              <p><span> 1) Execute on integration and customization build based on SAP or other internal tools </span></p>
              <p><span> 2) Author design documents and present design reviews </span></p> 
              <p><span> 3) Identify problems with requirements and communicate them</span></p>
              <p><span> 4) Work in an agile development environment making regular incremental progress </span> </p>
            </div>

            <div style={{marginLeft:100, marginTop:80}}><span >Published on 16 Aug 2022, 10:28 PM</span></div>
            
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
                    <span >Powered by</span><a href="/for-candidates/" rel="noopener" target="_blank"><img src = './High5Logo.png'/></a></div><p><a href="/privacy-policy" target="https">Privacy Policy</a> and <a href="/terms-of-service" target="https">Terms of Service</a></p></footer>

        </div>
    );
};

export default Index;