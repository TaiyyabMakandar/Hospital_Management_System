import Hero from "../components/Hero.jsx";
import Biography from "../components/Biography.jsx";
import Department from "../components/Department.jsx";
import Messageform from "../components/Messageform.jsx";

const Home = () => {
    return (
        <>
            <Hero title={"welcome to taiyyab medical institute | your trusted healthcare provider"} imageUrl={"/hero.png"} />
            <Biography imageUrl={"/about.png"} />
            <Department />
            <Messageform />
        </>
    )
}

export default Home