import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



const Nav = () => {

    const loginUrl = "http://localhost:3000/#/login"
    const registerUrl = "http://localhost:3000/#/rejestracja"
    return(
        <>
            <nav>
                <div className="nav_contain">
                    <div className="login_contain">
                    <a href={loginUrl}>Zaloguj</a>
                <a href={registerUrl}>Załóż konto</a>
                    </div>
              

             <ul class="menu" role="menu">
                 
             <Link to="start" smooth={true} className="react_scroll">
                <li><a href="#">Start</a></li>
                </Link>
            
                <Link to="whats_going" smooth={true} className="react_scroll">
                <li><a href="#">O co chodzi?</a></li>
                </Link>

                <Link to="aboutMe" smooth={true} className="react_scroll">
                <li><a href="#">O nas</a></li>
                </Link>
                <Link to="company" smooth={true} className="react_scroll">
                <li><a href="#">Fundacja i organizajce</a></li>
                </Link>
                <Link to="contact" smooth={true} className="react_scroll">
                <li><a href="#">Kontakt</a></li>
                </Link>
            </ul>

                </div>
           
              
            </nav>
        </>
    )
}


export default Nav