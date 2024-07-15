import { useEffect, useRef, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  const navigate = useNavigate();
  let form = useRef();
  let name=useRef()
  let email=useRef()
  let feedback=useRef()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // read
      } else if (!user) {
        navigate("/");
      }
    });
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    let params = {
      name:name.current.value,
      email: email.current.value,
      feedback: feedback.current.value,
    };
    emailjs.send("service_kszura2", "template_u8shl9d", params, {
      publicKey: "rSYpY_RsF76o4MgcA",
    });
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <main>
      <Navbar />
      {/* <nav className="navbar">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className={`menu ${menuOpen ? 'show' : ''}`}>
            <ul>
              
              <li><a href="#">Top Universities</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Carrier Support</a></li>
              <li className='dot'><a href="#">•</a></li>
              <li><a href="#" onClick={handleSignOut}>Log Out</a></li>
              <li><a href="#"><button className='profile_btn'>Profile</button></a></li>
            </ul>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? 'open' : ''}`}/>
            <div className={`bar ${menuOpen ? 'open' : ''}`}/>
            <div className={`bar ${menuOpen ? 'open' : ''}`}/>
          </div>
        </nav> */}
      {/* <div className='contact-page'>
       
      <section id="contact">
  <div class="contact-box">
    <div class="contact-clinks">
      <h2 className='ch2'>CONTACT</h2>
      <div class="clinks">
        <div class="clink">
          <FaLinkedin />
        </div>
        <div class="clink">
          <FaGithub />
        </div>
        <div class="clink">
          <MdEmail />
          
        </div>
      </div>
    </div>
    <div class="contact-form-wrapper">
      <form id='form' ref={form}>
        <div class="cform-item">
          <input className='cinput' type="text" name="name" required/>
          <label className='clabel'>Name:</label>
        </div>
        <div class="cform-item">
          <input className='cinput' type="text" name="email" required/>
          <label className='clabel'>Email:</label>
        </div>
        <div class="cform-item">
          <textarea id='m-textarea' className='ctextarea' class="" name="feedback" required/>
          <label className='clabel'>Message:</label>
        </div>
        <button className=" click-btn3 "  onClick={handleSubmit}>
                <span className="text">Send</span>
              </button>
        
      </form>
    </div>
  </div>
</section>


    </div> */}
      <div className="contact1">
        <div className="left">
          <h1>Contact Us </h1>
          <p>
            Email , Call or compete the form to learn how counsellor can solve
            your problem{" "}
          </p>
          <span>Counsellor@gmail.com</span>
          <span>xxxxx-xxxxx</span>
          <div className="customer" style={{ display: "flex", gap: "20px" }}>
            <div className="left1">
              <h1 style={{ fontSize: "20px" }}>Customer Support</h1>
              <p>
                Our Support Team is Available around the clock to address any
                concerns or queries
              </p>
            </div>
            <div className="left1">
              <h1 style={{ fontSize: "20px" }}>Feedback And Suggestions</h1>
              <p>
           We Value Your Feedback and working to continuously improving us 
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <form className="form" onSubmit={handleSubmit}> 
            <h1>Get In Touch</h1>
            <p>You can React us any time</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <input ref={name} className="name" placeholder="First Name"></input>
              <input className="name" placeholder="Last name"></input>
            </div>
            <div>
              <input ref={email} placeholder="Your Email" type="email"></input>
            </div>
            <div>
              <textarea ref={feedback} placeholder="How Can i Help you ?"></textarea>
            </div>
            <button type="submit">Submit</button>
            <p style={{fontSize:"12px"}}>By Contacting Us You Value Our <b>Terms of Service </b> and <b> privacy policy</b></p>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
