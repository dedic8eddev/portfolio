import ProgressBar from "../progressbar";

const SkillSection = () => {
  return (
    <section className="site-section section-skills">
      <div className="container">
        <div className="row">
          {/* <div className="col-sm-6">
            <h2>Introduction video</h2>
            <iframe src="https://player.vimeo.com/video/158928871" width="100%" height="280" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div> */}
          <div className="col-sm-12">
            <h2>SKILLS</h2>
            <div className="progress-group">
              <p>Node.js</p>
              <div className="progress">
                <ProgressBar value={95} />
              </div>
            </div>

            <div className="progress-group">
              <p>Python</p>
              <div className="progress">
                <ProgressBar value={90} />
              </div>
            </div>

            <div className="progress-group">
              <p>PHP</p>
              <div className="progress">
                <ProgressBar value={90} />
              </div>
            </div>

            <div className="progress-group">
              <p>C#</p>
              <div className="progress">
                <ProgressBar value={85} />
              </div>
            </div>

            <div className="progress-group">
              <p>Golang</p>
              <div className="progress">
                <ProgressBar value={80} />
              </div>
            </div>

            <div className="progress-group">
              <p>Rust</p>
              <div className="progress">
                <ProgressBar value={80} />
              </div>
            </div>

            <div className="progress-group">
              <p>Java</p>
              <div className="progress">
                <ProgressBar value={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection;
