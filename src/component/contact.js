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
                            <div>
                            <p>Wpisz swoje imię</p>
                            <input />

                            </div>
                            <div>
                            <p>Wpisz swój email</p>
                            <input />

                            </div>
                         
                         
                        </div>
                        Wpisz swoją wiadomość
                        <textarea />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact