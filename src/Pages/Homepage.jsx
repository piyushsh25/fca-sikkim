import { BodyDescription } from "../Components/Body/BodyDescription"
import { BodyIntro } from "../Components/Body/BodyIntro"
import { Footer } from "../Components/Body/Footer"
import { Header } from "../Components/Navbar"

export const Homepage=()=>{
    return <>
        <Header/>
        <BodyIntro/>
        <BodyDescription/>
        <Footer/>
    </>
}