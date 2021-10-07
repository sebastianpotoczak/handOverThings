import Nav from './nav';
import tribal from '../assets/Decoration.svg'
const loginView = () => {
    return(
      <>
      <div className="login">  
      <div className="content">
         
          <div className="login_contain">
          <Nav />

          </div>
          <div className="login_form">
              <h1>Zaloguj się</h1>
              <img src={tribal} />
              <div className="login_input">
                  <div className="login_element">
                      <p>Email</p>
                     <input />
                  </div>
           
                  <div className="login_element">
                      <p>Hasło</p>
                    <input />
                  </div>
                <div>  
                </div>
              

              </div>  
              <div className="login_submit">
                <a href="http://localhost:3000/#/rejestracja">Załóż konto</a>   
                    <a href="#">Zaloguj się</a>

              </div>
                   

            
                        
          </div>
         
          </div>
      </div>
      

      </>
    )
}


export default loginView