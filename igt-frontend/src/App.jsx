import Banner from "./pages/Banner"
import CoreFeatures from "./pages/CoreFeatures"
import DesigningCourse from "./pages/DesigningCourse"
import Faq from "./pages/Faq"
import Features from "./pages/Features"
import Footer from "./pages/Footer"
import Header from "./pages/Header"
import Pricing from "./pages/Pricing"
import Tutorial from "./pages/Tutorial"
import Works from "./pages/Works"

const App = () => {
  return (
    <div>
    <Header/>
    <Banner/>
    <Features/>
    <CoreFeatures/>
    <DesigningCourse/>
    <Works/>
    <Pricing/>
    <Tutorial/>
    <Faq/>
    <Footer/>
    </div>
  )
}

export default App