import tribal from '../assets/Decoration.svg'




const Contact = () => {
    return(
        <>
            <div className="contact">
                <div className="contact_contain">
                    <div className="contact_text">
                        <h1>Skontaktuj się z nami</h1>
                        <img src={tribal}/>
                        <div className="contact_name">
                            <div className="contact_element">
                            <p>Wpisz swoje imię</p>
                            <input type="text" />

                            </div>
                            <div>
                            <p>Wpisz swój email</p>
                            <input type="text"/>

                            </div>
                         
                        </div>
                        <div>

                        <p className="last_input">  Wpisz swoją wiadomość</p> 
                        <textarea type="text" />

                        </div>
                        <div className="button_contact">
                        <a className="contact_button" href="#">Wyślij</a>
                        </div>
                       
                </div>
                    <div className="footer">
                   
                    <a href="https://www.instagram.com/" target="_blank"></a>
                    <a href="https://www.facebook.com/" target="_blank"></a>
                </div>
                </div>
                <h3 className="footer_title">Copyright by Coders Lab</h3>
               
            </div>
        </>
    )
}

export default Contact