import React from 'react';
import './Content.css';
import ps from '../components/ps.png';
import lr from '../components/lr.png';
import pp from '../components/pp.png';
import cv from '../components/cv.pdf';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pr1 from '../components/bookmyshow.png';
import pr2 from '../components/quizapp.png';
import pr3 from '../components/cuppacafe.png';
import pr4 from '../components/travel.png';




function Content() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = './cv.pdf'; // Provide the correct path to your PDF file
        link.download = 'cv.pdf'; // Specify the download file name
        link.click();
    };

    return (
        <>
            <div className='contents '>
                <div>
                    <h2>Let me Introduce <span className='text-info'>Myself</span></h2>
                    <p className='part mt-5'>
                        I am a Passionate MEAN stack developer with a flair for design. Experienced in crafting seamless user interfaces and responsive web applications. Dedicated to creating visually appealing and functional digital experiences.
                    </p>
                </div>

                <div className='Skills d-flex align-items-center flex-column'>
                    <h3>My <span className='text-info'>Skills</span></h3>
                    <div className='d-flex justify-content-center align-items-center flex-row mt-5'>
                        <div className='fs-4 icon-group d-flex flex-column'>
                            <div className='p-4'><i className="fab fa-html5 fa-2x"></i> HTML 5</div>
                            <div className='p-4'><i className="fab fa-css3-alt fa-2x"></i> CSS</div>
                            <div className='p-4'><i className="fab fa-react fa-2x"></i> React</div>
                        </div>

                        <div className='fs-4 icon-group d-flex flex-column'>
                            <div className='p-4'><i className="fab fa-js fa-2x"></i> JavaScript</div>
                            <div className='p-4'><i className="fab fa-bootstrap fa-2x"></i> Bootstrap</div>
                            <div className='p-4'><i className="fab fa-node-js fa-2x"></i> Node.js</div>
                        </div>

                        <div className='fs-4 icon-group d-flex flex-column'>
                            <div className='p-4'><i className="devicon-photoshop-plain fa-2x"></i>  Photoshop</div>
                            <div className='p-4'><i className="devicon-premierepro-plain fa-2x"></i>  Premiere Pro</div>
                            <div className='p-4'><i className="devicon-aftereffects-plain fa-2x"></i> Aftereffect</div>
                        </div>
                    </div>
                </div>

                <div className='interests d-flex align-items-center flex-column'>
                    <h3>My <span className='text-info'>Interests</span></h3>
                    <div className='d-flex justify-content-center align-items-center flex-row mt-4'>
                        <div className='fs-4 icon-group d-flex flex-row'>
                            <div className='p-4'><i class="fa-solid fa-code fa-2x"></i> Coding</div>
                            <div className='p-4'><i class="fa-solid fa-circle-exclamation fa-2x"></i> Problem Solving</div>
                            <div className='p-4'><i class="fa-solid fa-gamepad fa-2x"></i> Gaming</div>
                            <div className='p-4'><i class="fa-solid fa-film fa-2x"></i> Movies</div>
                        </div>
                    </div>
                </div>

               
            </div>

            <div style={{padding:"150px"}} className='projects d-flex justify-content-center align-items-center flex-column mt-5 '>
              <h3>My <span className='text-info'>Projects</span></h3>
            <div style={{alignItems:"center"}} className='cards d-flex flex-row'>
              <Card style={{ width: '18rem',margin:'20px' }}>
        <Card.Img variant="top" src={pr1} />
        <Card.Body>
          <Card.Title>Clone App</Card.Title>
          <Card.Text>
          BookMyShow App Using React 
          </Card.Text>
          <Button href='https://willowy-cocada-f4d1ff.netlify.app/' variant="primary">View site</Button>
        </Card.Body>
      </Card>
  
      <Card style={{ width: '18rem',margin:'20px' }}>
        <Card.Img variant="top" src={pr2} />
        <Card.Body>
          <Card.Title>Quiz App</Card.Title>
          <Card.Text>
            Quiz App Using react
          </Card.Text>
          <Button href='https://comfy-tapioca-148612.netlify.app/' variant="primary">View site</Button>
        </Card.Body>
      </Card>
  
      <Card style={{ width: '18rem',margin:'20px' }}>
        <Card.Img variant="top" src={pr3} />
        <Card.Body>
          <Card.Title>Travel Website</Card.Title>
          <Card.Text>
           website using Html,Css
          </Card.Text>
          <Button href='https://lucent-kitsune-65cc31.netlify.app/' variant="primary">View site</Button>
        </Card.Body>
      </Card>
  
      <Card style={{ width: '18rem',margin:'20px' }}>
        <Card.Img variant="top" src={pr4} />
        <Card.Body>
          <Card.Title>Parallex Website</Card.Title>
          <Card.Text>
            Website using Parallex effect
          </Card.Text>
          <Button href='https://phenomenal-piroshki-1203e2.netlify.app/' variant="primary">View site</Button>
        </Card.Body>
      </Card>
            </div>
            </div>

            <div className='cv'>
                <h3>Know More <span className='text-info'>About Me</span></h3>
                <p style={{ textAlign: "justify" }}>{"I invite you to learn more about me and my qualifications. Feel free to download my CV to explore my skills, experiences, and achievements in detail."}</p>
                <button onClick={handleDownload} type="button" className="btn btn-dark">Download CV</button>
            </div>

            <div className='find d-flex justify-content-center align-items-center flex-column'>
                <h3>FIND ME ON</h3>
                <p className='mt-3' style={{ fontSize: "15px" }}>Feel Free TO <span className='text-info'>Connect</span> With Me</p>
                <div className='d-flex align-items-center mt-3'>
                    <i className="fa-brands fa-instagram fa-xl" style={{ color: "#2ea4d6", marginRight: "20px" }}></i>
                    <i className="fa-brands fa-twitter fa-xl" style={{ color: "#2ea4d6", marginRight: "20px" }}></i>
                    <i className="fa-brands fa-github fa-xl" style={{ color: "#2ea4d6", marginRight: "20px" }}></i>
                    <i className="fa-brands fa-linkedin fa-xl" style={{ color: "#2ea4d6" }}></i>
                </div>
            </div>
        </>
    );
}

export default Content;
