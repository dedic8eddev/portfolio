const AboutSection = () => {
  return (
    <section className="site-section section-about text-center" id="about">
      <div className="container">
        <h2>ABOUT My WORK</h2>
        <p className="section-subtitle"><span>My goal is to build products and services</span></p>
        <div className="row">
          <div className="col-sm-4 col-xs-6">
            <div className="feature-about">
              <div className="medium-rectangle rectangle">
                <i className="fa fa-laptop" aria-hidden="true"></i>
              </div>
              <h3>Backend Development</h3>
              {/* <p>Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience</p> */}
            </div>
          </div>
          <div className="col-sm-4 col-xs-6">
            <div className="feature-about">
              <div className="medium-rectangle rectangle">
                <i className="fa fa-code" aria-hidden="true"></i>
              </div>
              <h3>Architecturing</h3>
              {/* <p>The web development process involves taking the graphical elements defined in the design process and coding them into a custom theme.</p> */}
            </div>
          </div>
          <div className="col-sm-4 col-xs-6">
            <div className="feature-about">
              <div className="medium-rectangle rectangle">
                <i className="fa fa-search" aria-hidden="true"></i>
              </div>
              <h3>Infrastructure</h3>
              {/* <p>Go farther than you thought you could. With us you can go farther then ever before. Be in top results of searches.</p> */}
            </div>
          </div>
          {/* <div className="col-sm-3 col-xs-6">
            <div className="feature-about">
              <div className="medium-rectangle rectangle">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </div>
              <h3>SOCIAL MEDIA</h3>
              <p>It's important to keep your brand consistent and recognizable across all platforms</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
