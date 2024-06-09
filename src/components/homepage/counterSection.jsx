import CountUp from "react-countup";

const CounterSection = () => {
  return (
    <section className="site-section section-counters text-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-2 col-xs-6 col-sm-offset-1">
            <div className="counter">
              <div className="rectangle medium-rectangle ">
                <i className="fa fa-rocket" aria-hidden="true"></i>
                <CountUp
                  className="counter-start"
                  start={1}
                  end={13}
                  duration={2}
                  useEasing={true}
                />
              </div>
              <p>Projects Launched</p>
            </div>
          </div>
          <div className="col-sm-2 col-xs-6">
            <div className="counter">
              <div className="rectangle medium-rectangle ">
                <i className="fa fa-trophy" aria-hidden="true"></i>
                <CountUp
                  className="counter-start"
                  start={1}
                  end={5}
                  duration={2}
                  useEasing={true}
                />
              </div>
              <p>Awards won</p>
            </div>
          </div>
          <div className="col-sm-2 col-xs-6">
            <div className="counter">
              <div className="rectangle medium-rectangle ">
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                <CountUp
                  className="counter-start"
                  start={1}
                  end={34}
                  duration={2}
                  useEasing={true}
                />
              </div>
              <p>Proposals Sent</p>
            </div>
          </div>
          <div className="col-sm-2 col-xs-6">
            <div className="counter">
              <div className="rectangle medium-rectangle ">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                <CountUp
                  className="counter-start"
                  start={1}
                  end={20823}
                  duration={2}
                  useEasing={true}
                />
              </div>
              <p>Hours of work</p>
            </div>
          </div>
          <div className="col-sm-2 col-xs-12">
            <div className="counter">
              <div className="rectangle medium-rectangle ">
                <i className="fa fa-coffee" aria-hidden="true"></i>
                <CountUp
                  className="counter-start"
                  start={1}
                  end={38}
                  duration={2}
                  useEasing={true}
                />
              </div>
              <p>Cups of coffee</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CounterSection;
