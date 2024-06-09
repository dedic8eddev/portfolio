import TimeLineImage from "../../assets/img/timeline-img.jpg";

const HistorySection = () => {
  return (
    <section className="section-history" id="history">
      <div className="container">
        <div className="text-center section-diff-title">
          <h2>A Look Back At My History</h2>
          {/* <p>This my Education and Experience</p> */}
        </div>
        <ul className="timeline">
          <li className="timeline-start">
            <div className="rectangle"><span>2009</span></div>
          </li>
          <li>
            <div className="rectangle timeline-rectangle"></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <div className="timeline-date">
                  <p>Feb</p>
                </div>
                <div className="timeline-position">
                  <p>Backend Developer</p>
                </div>
              </div>
              <div className="timeline-body">
                {/* <div className="timeline-body-thumb">
                  <img src={TimeLineImage} className="img-res" alt="" />
                </div> */}
                <ul>
                  <li>Developed backend systems and APIs using PHP, Laravel, Node.js, and Express.js for complex web applications.</li>
                  <li>Leveraged SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases to optimize data processing and retrieval.</li>
                  <li>Implemented CI/CD pipelines with AWS, Azure, and Google Cloud Platform for automated build and deployment.</li>
                </ul>
              </div>
            </div>
          </li>

          <li className="timeline-start">
            <div className="rectangle"><span>2012</span></div>
          </li>

          <li className="timeline-inverted">
            <div className="rectangle timeline-rectangle"></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <div className="timeline-position">
                  <p>Backend Developer</p>
                </div>
                <div className="timeline-date">
                  <p>Sep</p>
                </div>
              </div>
              <div className="timeline-body">
                <div className="timeline-body-thumb">
                  {/* <img src={TimeLineImage} className="img-res" alt="" /> */}
                </div>
                <ul>
                  <li>Utilized HTML5, CSS3, JavaScript, Node.js, Java, Ruby, Python for frontend and backend development in startup projects.</li>
                  <li>Integrated Firebase for real-time database synchronization and user authentication, enhancing application responsiveness and security.</li>
                  <li>Employed GitLab for version control, facilitating collaborative development and efficient code review processes.</li>
                </ul>
              </div>
            </div>
          </li>

          <li className="timeline-start">
            <div className="rectangle"><span>2019</span></div>
          </li>

          <li>
            <div className="rectangle timeline-rectangle"></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <div className="timeline-date">
                  <p>Aug</p>
                </div>
                <div className="timeline-position">
                  <p>Backend Developer</p>
                </div>
              </div>
              <div className="timeline-body">
                <div className="timeline-body-thumb">
                  {/* <img src={TimeLineImage} className="img-res" alt="" /> */}
                </div>
                <ul>
                  <li>Architected and developed web applications with HTML5, CSS3, JavaScript, Node.js, Python, PHP, .NET for scalability.</li>
                  <li>Leveraged SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases for efficient data storage and retrieval.</li>
                  <li>Implemented CI/CD pipelines with Docker, and AWS for streamlined development workflows.</li>
                </ul>
              </div>
            </div>
          </li>

          <li className="timeline-end">
            <div className="rectangle"><span>More</span></div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default HistorySection;
