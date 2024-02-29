import React, { useState, useEffect } from "react";
import './App.css';
import Me from './images/image0.jpeg'
import {  Container, Navbar, Nav, Image, Button, Carousel } from 'react-bootstrap';
import newvid from './newvid.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';
import Winner from './images/Winner.jpg';
import DisGraph from './images/DisGraph.png';
import resume from './Resume.pdf';
import skipper from './images/logo.png'
import sowad from './images/sowad.jpg'
import tyseer from './images/Tyseer.jpg'
import Gallery from './Gallery';

function App() {

  const [page, setPage] = useState("splash");


  const checkPw = () => {
  // gets the current input value
  const answer = document.getElementById("password").value;

  if (answer === "PERSONSPECIFIED") { 
    setPage("PERSONSPECIFIED");
  } else {
    setPage("");
  }
  };

  function renderForHer(){
    return(
      <video className='videoTag' id="background-video" autoPlay loop muted>
          <source src={newvid} type='video/mp4'/>
      </video>
    )
  }
  function renderBackground(){
return(
    <video className='videoTag' id="background-video" autoPlay loop muted>
          <source src={newvid} type='video/mp4'/>
      </video>
)
  }

  function renderSplash(){
    const handleClick=(e)=>{
      setPage("");
      
    }

    return(
      <div className='header-wrapper'>
        
        <div className='main-info'>
          
        <Button onClick={handleClick}>
          <h1>
            Enter
          </h1>
          
        </Button>
        Not optimized for mobile.
         <form onSubmit={checkPw}>
     <input id="password" name="password" />
     <button>Enter with a password</button>
    </form>
        
        </div>
        
      </div>   
    )
  }

  function renderPage(){
    return(
        <>
       
        <Navbar className="dark-nav" fixed="top" class="nav-3" align="center" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><h1 className='dark-info-tex'>CloseZad</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto"> 

              <Nav.Link href="#welcome" ><h4 className='dark-info-tex'>Welcome</h4></Nav.Link>
              <Nav.Link href="#about"><h4 className='dark-info-tex'>About</h4></Nav.Link>
              <Nav.Link href="#work"><h4 className='dark-info-tex'>Work</h4></Nav.Link>
              <Nav.Link href="#sites"><h4 className='dark-info-tex'>Sites</h4></Nav.Link>
              <Nav.Link href="#projects"><h4 className='dark-info-tex'>Projects</h4></Nav.Link>
              {/* <Nav.Link href="#GameGallery"><h4 className='dark-info-tex'>GameGallery</h4></Nav.Link> */}
              <Nav.Link href={resume}><h4 className='dark-info-tex'>Résumé</h4></Nav.Link>
              {/* <NavDropdown title="Résumé" className='dark-info-tex' id="basic-nav-dropdown">
                <NavDropdown.Item href="https://farzadr-dev.github.io/Skills%20Resume.docx.pdf">Version 1</NavDropdown.Item>
                <NavDropdown.Item href="https://farzadr-dev.github.io/Updated%20Resume.pdf">Version 2</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
     
      
      <div className='header-wrapper'>

        <div className='main-info' id="welcome">
        {/* <Particles params={{particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "square",
            stroke: {
              width: 6,
              color: "#f9ab00"
            }
          }
        }}}
            /> */}
          <h1>Welcome</h1>
          <p>Website? More like a glorified linktree.
          <br/> And a bit about Farzad too...
          <br></br>
          <br/> Here have some lazy music. Try from number 6 and below.
          </p>          
          <iframe title="spotify" src="https://open.spotify.com/embed/playlist/1wbz27QMs5MwI4FblEoaOj?utm_source=generator" width="20%" height="50%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
      </div>

      <div className='header-wrapper' id="about">
        <div className='dark-info' class='dark-info'>
          <div className='wrapper container'>
          <div className='row'>
          <div className='column'>
            <Image src={Me} className='image-type'/>
            </div>
            <div className='column'>
            <h1 className='dark-info-text'>About Me</h1><br></br>
          <p className='paragraph'>I'm Farzad, a computer engineering student at the University of Waterloo and software developer. I will be working at ClearPath Robotics this Summer.
            
          </p>
            </div>
          </div>
          </div>
        </div>

      </div>



  <div className='header-wrapper'>
    <div className='dark-info-3' id="work">
          <h1>Recent Work Experience</h1>
          <br></br>
          <a href="https://www.blackberry.com/us/en">
          <img alt='BlackBerry'src='https://logos-world.net/wp-content/uploads/2020/11/BlackBerry-Logo.png' className='image-type'/>
          </a>
          <h3 className='white-text' id="workdesc">Software Development Student (React, .NET, C#, LaunchDarkly, NuGet, Ubuntu Linux)</h3> 
            <p className='paragraph-2'>After my QA-related job, I got to join the Dev team of the same project I was working on (the Multi-Tenant-Console), 
            which involved working on both the Frontend and the Backend of the platform. Working on frontend was the first time I had to run a VM with Ubuntu for my work environment.
            I used React.Js (familiar) for frontend features and bugs, and .NET for backend. One of my largest tasks that was not a specific feature to develop, involved me reorganizing and rewriting/combining over 10 methods to use 2 general methods to control the LaunchDarkly Feature Flag API architecture, spanning across 4 repositories, and probably over 100 instances. 
            
  </p>
    </div>
  </div>
      


<div className='header-wrapper' id="sites">
  <Carousel className='dark-info-2'>
  <Carousel.Item>
    <a  href="https://github.com/FarzadR-Dev?tab=repositories">
    <img
      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
      alt="First slide"
      className='image-type'
    />
    </a>
    
    <Carousel.Caption>
      <h3>My Github</h3>
      <p>That's where I upload most projects I had worked on including school projects. Still got more to upload and more to work on. </p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <a href="https://www.linkedin.com/in/farzad-rahman-929ab5191">
    <img
      className='image-type'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
      alt="Second slide"
    />
    </a>
    <Carousel.Caption>
      <h3>My LinkedIn</h3>
      <p>Feel free to see my LinkedIn profile and connect with my professional side.</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <a href="mailto:farzadrahman20@gmail.com">
    <img
      className='image-type'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
      alt="Third slide"
    />
    </a>
        <Carousel.Caption>
      <h3>My Email</h3>
      <p>Reach me by email by sending to farzadrahman20@gmail.com</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>

    <a href="https://www.instagram.com/closezad/">
      <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" alt="Fourth slide" className='image-type'/>
    </a>
        <Carousel.Caption>
      <h3>instagram</h3>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
  <a href="https://www.facebook.com/profile.php?id=100007856446681">
    <img src="https://assets.stickpng.com/thumbs/584ac2d03ac3a570f94a666d.png" alt="Fifth slide" className='image-type'/>
  </a>
        <Carousel.Caption>
      <h3>facebook</h3>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
  <a href="https://www.youtube.com/channel/UCxgxN6_o2_jEU_4zAKd91pA">
      <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png" alt="Sixth slide" className='image-type'/>
  </a>
        <Carousel.Caption>
      <h3>youtube</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/A9FPrMZYIro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/bg7WgyDC9kI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/r_5zR3e6feo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/N63z0A_Kses" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
  <a href="https://refillonline.github.io/">
      <img src="https://cdn.discordapp.com/attachments/772201659212365895/797899045737725992/iconReFillother.png" alt="Seventh slide" className='image-type'/>
  </a>
        <Carousel.Caption>
      <h3>Re-Fill</h3>
      <p>Re-Fill is a revolutionary snack subscription platform whose automated system is designed to give customers the most freedom regarding 
        their snacks, their schedule and their lifestyle. The website is currently under reconstruction, but check out our award winning pitch!
      </p>
      <iframe src="https://www.youtube.com/embed/3kRQREANJzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>


<div className='header-wrapper' id="projects">
  <Carousel className='dark-info-4'>

  <Carousel.Item>

  <a href="https://github.com/FarzadR-Dev/Skipper">
      <img src={skipper} alt="Seventh slide" className='image-type'/>
  </a>


  <Carousel.Caption>
      <h3>skipper: swift + swiftUI personal project (work in progress)</h3>
      <p>I wanted to explore mobile development with IOS so I decided to create a stone-skipper record-keeper. (stone skipping is on my linkedin skills)</p>
      <iframe src="https://www.youtube.com/embed/5NIeasdt-VM" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <a href="https://youtube.com/shorts/5NIeasdt-VM?feature=share">
      Demo Video
    </a> */}
    </Carousel.Caption>

  </Carousel.Item>

  <Carousel.Item>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/hLxgE1tyIVA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <h3 className='white-text'>Assetto Corsa Speed Tracker App</h3>
      <p className='paragraph-2'>I was playing around with App-development for Assetto Corsa and thought of a neat little tool for myself when doing top speed runs. 

I was inspired by the Midnight Club's runs and Wangan Midnight (hence the Nissan Fairlady S30Z "Devil Z" and the Shutoku Highway). Apologies for quiet audio.</p>

<a href="https://github.com/FarzadR-Dev/Assetto-Corsa-Speed-Tracker-App">GitHub Link</a>
<br></br>
<a href="https://github.com/FarzadR-Dev/Assetto-Corsa-Speed-Tracker-App/archive/refs/heads/main.zip">Download</a>
  </Carousel.Item>


  <Carousel.Item>
  <a href="https://github.com/FarzadR-Dev/GameJam2020-WON-AWARD-">
      <img src={Winner} alt="Seventh slide" className='image-type'/>
  </a>
        <Carousel.Caption>
      <h3>UW Games Institute Game Jam Project</h3>
      <p>In June 2020, my friends and I entered a game jam (hackathon where you create a game in short time) hosted by the University of Waterloo's Games Institute. I was one of the lead developers on our team where we somehow won an award.
                            Might get a demo out???</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <a href="https://devpost.com/software/disgraph?ref_content=user-portfolio&ref_feature=in_progress">
      <img src={DisGraph} alt="Seventh slide" className='image-type'/>
  </a>
        <Carousel.Caption>
      <h3>DisGraph (Hack the North 2020 Submission)</h3>
      <p>Wrote script functions for a discord bot that generates graphs from user input data based on graph style choice and details.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <a href="https://tyseer2335.github.io/chAD-Bot/">
      <img src="https://tyseer2335.github.io/chAD-Bot/images/logo.png" alt="Seventh slide" className='image-type'/>
  </a>
        <Carousel.Caption>
      <h3>chAD (EngHacks 2021 Submission)</h3>
      <p>Designed a discord bot that generates custom ads based on wishes of the server's owner. Curated for businesses looking to market in new spaces, and server owners looking to make ad-revenue.</p>
      <a href="https://devpost.com/software/chad-the-ad-bot-for-discord-servers?ref_content=my-projects-tab&ref_feature=my_projects" className=''> DevPost Link</a>
    </Carousel.Caption>
  </Carousel.Item>

  </Carousel>
</div>

 <div className='header-wrapper' id="GameGallery">
  <Carousel className="dark-info-4">
  <Carousel.Item>

    <h2>A cool little hobby</h2>
    <p>Since childhood, I have been obsessed with the beautiful worlds game studios are able to generate. These worlds are an escape to me from the bubble I live in called Waterloo. <br></br>So here's a gallery of some neat pictures I have taken in games I adore.</p>

  </Carousel.Item>
  <Carousel.Item>
    <a href="" onClick={function(){
    return setPage("ffxv")
  }}>
        <img src="https://upload.wikimedia.org/wikipedia/it/c/c1/Final_Fantasy_XV_Logo.jpg" alt = "Seventh slide" className='image-type'/>
    </a>
  </Carousel.Item>
  <Carousel.Item>
    <a href="" onClick={function(){
    return setPage("minecraft")
  }}>
        <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png" alt = "Seventh slide" className='image-type'/>
    </a>
  </Carousel.Item>
  <Carousel.Item>
    <a href="" onClick={function(){
    return setPage("assetto")
  }}>
        <img src="https://steamuserimages-a.akamaihd.net/ugc/1018321821846208980/B5E41D6A704B9BB13949F08BBB007AC7B8C8B9D1/?imw=512&imh=512&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt = "Seventh slide" className='image-type'/>
    </a>
  </Carousel.Item>
  <Carousel.Item>
    <a href="" onClick={function(){
    return setPage("bioshock")
  }}>
        <img src="https://dl2.macupdate.com/images/icons256/49059.png" alt = "Seventh slide" className='image-type'/>
    </a>
  </Carousel.Item>
  <Carousel.Item>
    <a href="" onClick={function(){
    return setPage("destiny")
  }}>
        <img src="https://static-00.iconduck.com/assets.00/destiny-icon-512x475-qi0g8ih3.png" alt = "Seventh slide" className='image-type'/>
    </a>
  </Carousel.Item>
  <Carousel.Item>
    <a href="" onClick={function(){
    return setPage("cyberpunk")
  }}>
        <img src="https://i1.modland.net/i/5fbcd2b1dc19b/7-1607541762-1961921767-lg_modland.webp" alt = "Seventh slide" className='image-type'/>
    </a>
  </Carousel.Item>

  </Carousel>
</div> 

<div className='header-wrapper' id="projects">
<Carousel className='dark-info-2'>
  <Carousel.Item>
    <h3>Check out some of my friends' sites!</h3>
  </Carousel.Item>
  <Carousel.Item>
  <a href="https://sowadk25.github.io/">
      <img src={sowad} alt="Seventh slide" className='image-type'/>
  </a>
  </Carousel.Item>

  <Carousel.Item>
  <a href="https://tyseer.ca/">
      <img src={tyseer} alt="Seventh slide" className='image-type'/>
  </a>
  </Carousel.Item>
  <Carousel.Item>
    <a href="https://joonsauce.me/">
      <img src="https://joonsauce.me/media/joon.jpg" alt="Seventh slide" className="image-type"/>
    </a>
  </Carousel.Item>
  </Carousel>
</div>

</>
    )
  }


  return (

    <>
    
      {/* {(page !== "lander") && renderMap()} */}
      {(page === "splash") && renderSplash()}
      {(page === "") && renderBackground()}
      {(page === "") && renderPage()}
      {(page === "PERSONSPECIFIED") && renderForHer()}
      {(page === "assetto") && <Gallery game="assetto"/>}
      {(page === "bioshock") && <Gallery game="bioshock"/>}
      {(page === "cyberpunk") && <Gallery game="cyberpunk"/>}
      {(page === "destiny") && <Gallery game="destiny"/>}
      {(page === "ffxv") && <Gallery game="ffxv"/>}
      {(page === "minecraft") && <Gallery game="minecraft"/>}
      <>

  {/* <footer fixed="bottom">A CloseZad Production</footer> */}
      </>
      

    
   </>
  
  );
}

export default App;
