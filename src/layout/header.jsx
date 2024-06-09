import ScrollspyNav from "react-scrollspy-nav";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isAffixed, setIsAffixed] = useState(false);
  const navigationRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = heroRef.current.offsetHeight;
      const isPastHero = window.scrollY > heroHeight;
      setIsAffixed(isPastHero);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToIntro = () => {
    window.scrollTo({
      top: navigationRef.current.offsetTop + 1,
      behavior: "smooth"
    });
  }

  return (
    <>
      <div ref={heroRef} id="top" className="hero background-overlay">
        <div className="hero-content">
          <h1>I am Vladimir Jovovic</h1>
          <p className="hero-job"><span>I'M A SENIOR BACKEND DEVELOPER</span></p>
        </div>
        <div className="hero-arrow page-scroll home-arrow-down">
          <a className="" onClick={scrollToIntro}><i className="fa fa-angle-double-down" aria-hidden="true"></i></a>
        </div>
      </div>

      <header id="masthead" className="site-header">
        <nav ref={navigationRef} id="primary-navigation" className={`site-navigation ${isAffixed ? 'affix' : ''}`} data-spy="affix">
          <div className="container">
            <div className="navbar-header page-scroll">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#portfolio-perfect-collapse" aria-expanded="false" >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="page-scroll site-logo">
                <a onClick={scrollToTop}>Vladimir</a>
              </div>
            </div>
            <div className="main-menu collapse navbar-collapse" id="portfolio-perfect-collapse">
              <ScrollspyNav
                scrollTargetIds={["top", "intro", "about", "history", "works", "contact"]}
                offset={0}
                activeNavClass="active"
                scrollDuration="600"
                headerBackground="true"
              >
                <ul className="nav navbar-nav navbar-right">
                  <li className="page-scroll"><a href="#top">Home</a></li>
                  <li className="page-scroll"><a href="#intro">Intro</a></li>
                  <li className="page-scroll"><a href="#about">About</a></li>
                  {/* <li className="page-scroll"><a href="#services">Services</a></li>
                  <li className="page-scroll"><a href="#team">Team</a></li> */}
                  <li className="page-scroll"><a href="#history">History</a></li>
                  <li className="page-scroll"><a href="#works">Works</a></li>
                  <li className="page-scroll"><a href="#contact">Contact</a></li>
                </ul>
              </ScrollspyNav>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;
