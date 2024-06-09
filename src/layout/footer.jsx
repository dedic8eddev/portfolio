import { Link } from 'react-scroll';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="colophon" className="site-footer">
      <div className="container-fluid">
        <ul className="list-unstyled list-inline">
          <li className="page-scroll"><Link to="top" smooth={true} duration={500}>Home</Link></li>
          <li className="page-scroll"><Link to="intro" smooth={true} duration={500}>Intro</Link></li>
          <li className="page-scroll"><Link to="about" smooth={true} duration={500}>About</Link></li>
          {/* <li className="page-scroll"><Link to="services" smooth={true} duration={500}>Services</Link></li> */}
          {/* <li className="page-scroll"><Link to="team" smooth={true} duration={500}>Team</Link></li> */}
          <li className="page-scroll"><Link to="history" smooth={true} duration={500}>History</Link></li>
          <li className="page-scroll"><Link to="works" smooth={true} duration={500}>Works</Link></li>
          <li className="page-scroll"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
        <div className="page-scroll">
          <a onClick={scrollToTop} className="rectangle">
            <i className="fa fa-angle-double-up"></i>
          </a>
        </div>
      </div>
      {/* <div className="container text-center">
        <p className="copyright">&copy; <a href="http://pixelperfect.mk/" target="_blank">PixelPerfect</a> - 2017</p>
      </div> */}
    </footer>
  )
}

export default Footer;
