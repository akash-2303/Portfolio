import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}







// import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import colorsharp2 from '../assets/img/color-sharp2.png';
// import img1 from '../assets/img/project-img1.png';
// import img2 from '../assets/img/project-img2.png';
// import img3 from '../assets/img/project-img3.png';

// export const Projects = () => {
//     const projects = [
//         {
//             title: 'Project 1',
//             description: 'Description 1',
//             img: 'img1',
//             tech: ['Python', 'React', 'Node.js']
//         },
//         {
//             title: 'Project 2',
//             description: 'Description 2',
//             img: 'img2',
//             tech: ['Python', 'React', 'Node.js']
//         },
//         {
//             title: 'Project 3',
//             description: 'Description 3',
//             img: 'img3',
//             tech: ['Python', 'React', 'Node.js']
//         },
//         {
//             title: 'Project 4',
//             description: 'Description 4',
//             img: 'img1',
//             tech: ['Python', 'React', 'Node.js']
//         }, 

//         {
//             title: 'Project 5',
//             description: 'Description 5',
//             img: 'img1',
//             tech: ['Python', 'React', 'Node.js']
//         }
//     ];

//     return(
//         <section className="project" id = "project">
//             <Container>
//                 <Row>
//                     <Col>
//                         <h2>Projects</h2>
//                         <p> Expand on the project</p>
//                         <Tab.Container id="project-tabs" defaultActiveKey="first">
//                         <Nav variant="pills" defaultActiveKey="/home">
//                             <Nav.Item>
//                                 <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                             </Nav.Item>
//                         </Nav>
//                         <Tab.Content>
//                             <Tab.Pane eventKey="first">
//                                 <Row>
//                                     {
//                                         projects.map((project, index) => {
//                                             return (
//                                                 <ProjectCard
//                                                 key={index}
//                                                 {...project}
//                                                 />
//                                             )
//                                         })
//                                     }
//                                 </Row>
//                             </Tab.Pane>
//                             <Tab.Pane eventKey="second">
//                                 <Row>
//                                     {
//                                         projects.map((project, index) => {
//                                             return (
//                                                 <ProjectCard
//                                                 key={index}
//                                                 {...project}
//                                                 />
//                                             )
//                                         })
//                                     }
//                                 </Row>
//                             </Tab.Pane>
//                             <Tab.Pane eventKey="third">
//                                 <Row>
//                                     {
//                                         projects.map((project, index) => {
//                                             return (
//                                                 <ProjectCard
//                                                 key={index}
//                                                 {...project}
//                                                 />
//                                             )
//                                         })
//                                     }
//                                 </Row>
//                             </Tab.Pane>
//                         </Tab.Content>

//                         </Tab.Container>
//                     </Col>
//                 </Row>
//             </Container>
//             <img className="background-image-right" src={colorsharp2}></img>
//         </section>
            
//     )
// }