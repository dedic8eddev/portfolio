const ContactSection = () => {
  return (
    <section className="site-section section-contact" id="contact">
      <div className="container">
        <h2>CONTACT MiKE</h2>
        <p className="section-subtitle"><span>Here i am</span></p>
        <div className="row">
          <form>
            <div className="col-md-4">
              <input className="form-control" type="text" placeholder="Name" required />
            </div>
            <div className="col-md-4">
              <input className="form-control" type="email" placeholder="Email" required />
            </div>
            <div className="col-md-4">
              <input className="form-control" type="text" placeholder="Subject" required />
            </div>
            <div className="col-sm-12">
              <textarea className="form-control" placeholder="Your Message"  required></textarea>
            </div>

            <div className="col-sm-12">
              <button className="btn btn-inverted">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;
