import { Link } from 'react-scroll';

const MeSection = () => {
  return (
    <section className="section-background section-me background-overlay text-center">
      <div className="container page-scroll">
        <h2>Are You Impressed By My Work?</h2>
        {/* <p>Durabitur commodo ras non urna mauris mollis auctor proin laoreet</p> */}
        <Link to="contact" className="btn" smooth={true} duration={500}>GET IN TOUCH</Link>
      </div>
    </section>
  )
}

export default MeSection;
