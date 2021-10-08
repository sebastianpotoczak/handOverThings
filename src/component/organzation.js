import tribal from '../assets/Decoration.svg'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useEffect, useState } from 'react';


const buttons = [
    "fundacion",
    "organisations",
    "other"
]

const Concern = () => {
    const [fundations, setFundations] = useState([]);
    const [current, setCurrent] = useState("fundacion");

    useEffect(() => {
        fetch(`http://localhost:3005/${current}`)
            .then(res => res.json())
            .then(res => setFundations(res))
    }, [current])


    const handleCurrent = fund => () => {
        setCurrent(fund)
    }

    console.log(fundations)

    return(
        <>
        <Element name="company">
            <div className="concern">
              =
                <div className="concern_contain"> 
                    <div className="concern_tittle">
                        <h1>Komu pomagamy?</h1>
                        <img src={tribal}/>
                        <div className="concern_position">
                        {buttons.map(button => (
                    <a href="#" onClick={handleCurrent(button)}>{button}</a>
                ))}

                        </div>
                       
                        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

                    </div>
                    <div className="concern_content">
                        {fundations.map(fund => (
                            <>
                            <h2>{fund.title}</h2>
                            <p>{fund.text}</p>
                            <i>{fund.items}</i>
                            </>
                        ))}
                      


                    </div>
                </div>
            </div>
            </Element>
        </>
    )
}

export default Concern