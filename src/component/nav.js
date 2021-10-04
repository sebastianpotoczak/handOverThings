


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
                <li><a href="#">Start</a></li>
                <li><a href="#">O co chodzi?</a></li>
                <li><a href="#">O nas</a></li>
                <li><a href="#">Fundacja i organizajce</a></li>
                <li><a href="#">Kontakt</a></li>
            </ul>

                </div>
           
              
            </nav>
        </>
    )
}


export default Nav