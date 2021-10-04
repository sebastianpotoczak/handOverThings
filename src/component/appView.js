import Header from '../component/header'
import Nav from '../component/nav'
import Article from './article'
import Contact from './contact'
import Section from './section'
import AboutUs from './aboutUs'
import Concern from './organzation'
import Info from './info'


const AppView = () => {

    return(
        <>
            <Nav />
            <Header />
            <Info />
            <Article />
            <Section />
            <AboutUs />
            <Concern />
            <Contact />
        </>
    )

}


export default AppView