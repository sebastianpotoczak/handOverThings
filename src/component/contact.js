import tribal from '../assets/Decoration.svg'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useState } from 'react'
import validator from 'validator'
const textError = document.querySelector(".text_error")
const emailError = document.querySelector(".email_error")
const nameError = document.querySelector(".name_error")



const Contact = () => {
   
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[text, setText] = useState("");


    const handleName = (e) => {
      const newName =  e.target.value  
      setName(newName)
    }


    const handleEmail = (e) => {
        const newEmail = e.target.value;
        
       setEmail(newEmail)
       
    }

    const handleText = (e) => {
        const newText = e.target.value
        setText(newText)
    }
 
    const handleClick = (e) => { 
       
        if(text === "" ){
            textError.style.display = "flex"
            e.preventDefault();
        }else{
            textError.style.display = "none"
        }
        if(validator.isEmail(email)){
            emailError.style.display ="none"
        }else{
            emailError.style.display ="flex"
            e.preventDefault();
        }
        if(name === ""){
            nameError.style.display = "flex"
            e.preventDefault();
        }else{
            nameError.style.display = "none"
        }
    }

    
    return(
        <>
        <Element name="contact">
            <div className="contact">
                <div className="contact_contain">
                    <div className="contact_text">
                        <h1>Skontaktuj się z nami</h1>
                        <img src={tribal}/>
                        <div className="contact_name">
                            <div className="contact_element">
                            <p>Wpisz swoje imię</p>
                            <input type="text" value={name} onChange={handleName}/>
                            <h3 className="name_error">Podane imię jest nieprawidłowe!</h3>

                            </div>
                            <div>
                            <p>Wpisz swój email</p>
                            <input type="text" value={email} onChange={handleEmail}/>
                            <h3 className="email_error">Podany email jest nieprawidłowy!</h3>
                            </div>
                         
                        </div>
                        <div>

                        <p className="last_input">  Wpisz swoją wiadomość</p> 
                        <textarea type="text" value={text} onChange={handleText} />
                        <h3 className="text_error">Wiadomość musi mieć conajmniej 120 znaków!</h3>

                        </div>
                        <div className="button_contact">
                        <a className="contact_button" href="#" onClick={handleClick}>Wyślij</a>
                        </div>
                       
                </div>
                    <div className="footer">
                   
                    <a href="https://www.instagram.com/" target="_blank"></a>
                    <a href="https://www.facebook.com/" target="_blank"></a>
                </div>
                </div>
                <h3 className="footer_title">Copyright by Coders Lab</h3>
               
            </div>
            </Element>
        </>
    )
}

export default Contact