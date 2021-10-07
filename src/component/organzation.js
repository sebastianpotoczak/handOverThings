import tribal from '../assets/Decoration.svg'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const Concern = () => {
    return(
        <>
        <Element name="company">
            <div className="concern">
                <div className="concern_contain"> 
                    <div className="concern_tittle">
                        <h1>Komu pomagamy?</h1>
                        <img src={tribal}/>
                        <div>
                        <a href="#">Fundacjom</a>
                        <a href="#">Organizacjom pozarządowym</a>
                        <a href="#">Lokalnym zbiórkom</a>

                        </div>
                       
                        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

                    </div>
                    <div className="concern_content">
                       <div>
                            <div className="concern_element">

                            <h3>Fundacja "Dbam o Zdrowie"</h3>
                        <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>

                        </div>
                        <h4>ubrania,jedzenie, sprzęd AGD, meble ,zabawki</h4>
                        </div>
                        <div> 
                            <div className="concern_element">
                            <h3>Fundacja “Dla dzieci”</h3>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>

                            </div>
                            <h4>ubrania, meble , zabawki</h4>
                        

                        </div>
                        <div> 
                            <div className="concern_element">
                            <h3>Fundacja “Bez domu”</h3>
                            <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>

                            </div>
                            <h4>ubrania, jedzenie, ciepłe koce</h4>
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                        </div>
                      


                    </div>
                </div>
            </div>
            </Element>
        </>
    )
}

export default Concern