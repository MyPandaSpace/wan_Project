import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import './css/About.css';

export default function About() {

  return (
    <>
      <div className="about-Banner">
        <Navbar />
        <img src="./src/images/About/about_Title.png" alt="" />
      </div>
      <div className="about-Content">
        <div id="about-Content-Title">
          <img src="./src/images/About/about-Content-Title.png" alt="" />
        </div>
        <Footer />
      </div>
    </>
  )
}