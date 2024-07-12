import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { signOut} from "firebase/auth";
import { auth } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import './Contact.css'
import emailjs from '@emailjs/browser';
import { FaLinkedin,FaGithub} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../../assets/logo.webp";
import { Switch } from 'antd';
import { ThemeContext } from '../../App';

const Contact = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

    const navigate = useNavigate();
    const handleThemeChange = useCallback(() => {
      toggleTheme();
    }, [toggleTheme]);
    let [isLoggedIn,setLogin]=useState(false)
    useEffect(() => {
      if(localStorage.getItem('login')){
  
        setLogin(true)
      }
      // auth.onAuthStateChanged((user) => {
      //   if (user) {
      //     // handle user logged in state
      //   } else {
          
      //   }
      // });
    }, [navigate]);
  let form=useRef()
    // useEffect(() => {
    //   auth.onAuthStateChanged((user) => {
    //     if (user) {
    //       // read
    //     } else if (!user) {
    //       navigate("/");
    //     }
    //   });
    // }, []);
    function handleSubmit(e){
      e.preventDefault();
      let params={
        name:name.current.value,
        email:email.current.value,
        feedback:message.current.value
      }
     await  emailjs.send('service_kszura2',"template_u8shl9d",params ,{
        publicKey:"rSYpY_RsF76o4MgcA",
      })
      console.log('sdsdsd')
    }
    const handleSignOut = () => {
      signOut(auth)
        .then(() => {
          localStorage.removeItem('login')
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
    const [fix, setFix] = useState(false);

  const setFixed = useCallback(() => {
    if (window.scrollY > 0) {
      setFix(true);
    } else {
      setFix(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", setFixed);
    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, [setFixed]);

  return (
    <main>
       <nav className={`navbar fixed`}>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className={`menu ${menuOpen ? "show" : ""}`}>
          <ul>
            <li><a href="/topuniversities">Top Universities</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="./courses">Courses</a></li>
            <li><a href="/careersupport">Career Support</a></li>
            <li className='dot'><a href="error">•</a></li>
            {!isLoggedIn&&  <li><a href="/" onClick={handleSignOut}>Login</a></li>}
          {
isLoggedIn&&<>

           <li><a href="/" onClick={handleSignOut}>Log Out</a></li>
            <li><button className='profile_btn'>Profile</button></li>
         
            <li>
              <Switch
                style={{ backgroundColor: theme === "dark" ? "#000000" : "" }}
                onChange={handleThemeChange}
                checked={theme === "dark"}
                checkedChildren="Dark Mode"
                unCheckedChildren="Light Mode"
              />
            </li> </>} 
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
        </div>
      </nav>
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
    <div 
    className='contact-page'>
       
      <section 
      id="contact">
  <div 
  class="contact-box">
    <div 
    class="contact-clinks">
      <h2 
      className='ch2'>CONTACT</h2>
      <div 
      class="clinks">
        <div 
        class="clink">
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
    <div 
    class="contact-form-wrapper">
      <form 
      id='form' 
      ref={form}>
        <div 
        class="cform-item">
        <div 
        className="search1">
         
          <input type="text" placeholder="Name"
            required
            name='name'
            ref={name}
            style={{  fontSize: "20px" }}
          />
        
      </div>
          {/* <input className='cinput' type="text" name="name" required/> */}
      </div>
      <div 
      class="cform-item">
        <div 
        className="search1">
         
          <input
            type="text"
            placeholder="Email:"
            name='email'
            ref={email}
            required
            style={{ fontSize: "20px" }}
          />
        
      </div>
          {/* <input className='cinput' type="text" name="name" required/> */}
      </div>
      <div 
      class="cform-item">
        <div 
        className="search1 search2">
        <textarea id='m-textarea' ref={message}  style={{  fontSize: "20px" }} className='ctextarea' placeholder='Message :' class="" name="feedback" required/>
      
        
      </div>
          {/* <input className='cinput' type="text" name="name" required/> */}
      </div>
        <button
         class="click-btn3"
          onClick={handleSubmit}>Send</button>  
      </form>
    </div>
  </div>
</section>


    </div>
    <Footer/>
    </main>
  )
}

export default Contact
