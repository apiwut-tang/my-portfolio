import { Link } from "react-scroll";


export default function HeroSection() {

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Tang</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Programmer</span>{" "}
          </h1>
          <p className="hero--section-description">
          Hi, My name is Apiwut Wijitemee. Graduated from King
          Mongkut University of Technology North Bangkok
          faculty of Computer Science. Interested working about
          Programmer , Front-End Developer ,Back-End
          Developer Website Developer , ReactJS ,C# .Net MVC
          API and other I'm try to learner and improve myself all
          the time.
          </p>
        </div>
        <Link
          activeClass="navbar--active-content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="AboutMe"
          className="text-md"
        >
        <button className="btn btn-primary">
        Get In Touch
        </button>
        </Link> 
      </div>
      <div className="hero--section--img">
        <img src="./img/S__18276386.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
