import tribal from '../assets/Decoration.svg'
import signature from '../assets/Signature.svg'
import peoplePhoto from '../assets/People.jpg'

const AboutUs = () => {
    return(
        <>
            <div className="aboutMe">
                <div className="aboutContain">
                <div className="leftAbout">
                        <h1>O nas</h1>
                        <img src={tribal} />
                        <p>Nori winogrono srebro burak brokuły kombu buraki fava fasola ziemniaki quandong seler. Orzechy Bunya Czarnooki Groch Prairie Rzepa Por Soczewica Rzepa Zieleń Pasternak.</p>
                        <div className="signature">

                        <img src={signature} />
                        </div>
                       
                    
                    </div>

                </div>
                <div className="rightAbout">
                    <img src={peoplePhoto} />
                </div>
            </div>

        </>
    )
}


export default AboutUs