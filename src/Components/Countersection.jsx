import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CounterSection = () => {
  const { ref: counterRef, inView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.5,    // Trigger when 50% of the element is in the viewport
  });

  return (
    <div
      className="counter-area pt-50 pb-20"
      style={{
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF-MqvU0f2Zt2E0G91s8TLmiCCY3_Fbnx7CNhx9ue7p6lOwFJfsNCFOUCWdUUlh1hlmFc&usqp=CAU)",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Single Counter Item 1 */}
          <div className="col-lg-3 col-md-6 mb-30">
            <div className="counter-item" ref={counterRef}>
              <div className="icon">
                <i className="fas fa-tasks"></i>
              </div>
              <div className="content">
                <div className="title">
                  <h2 className="counter">
                    {inView ? (
                      <CountUp start={0} end={151} duration={1} suffix="+" />
                    ) : (
                      <span>0</span>
                    )}
                  </h2>
                </div>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Single Counter Item 2 */}
          <div className="col-lg-3 col-md-6 mb-30">
            <div className="counter-item" ref={counterRef}>
              <div className="icon">
                <i className="fas fa-dna"></i>
              </div>
              <div className="content">
                <div className="title">
                  <h2 className="counter">
                    {inView ? (
                      <CountUp start={0} end={52} duration={1} suffix="+" />
                    ) : (
                      <span>0</span>
                    )}
                  </h2>
                </div>
                <p>Remaining Project</p>
              </div>
            </div>
          </div>

          {/* Single Counter Item 3 */}
          <div className="col-lg-3 col-md-6 mb-30">
            <div className="counter-item" ref={counterRef}>
              <div className="icon">
                <i className="far fa-gem"></i>
              </div>
              <div className="content">
                <div className="title">
                  <h2 className="counter">
                    {inView ? (
                      <CountUp start={0} end={80} duration={1} suffix="+" />
                    ) : (
                      <span>0</span>
                    )}
                  </h2>
                </div>
                <p>Business Start-up</p>
              </div>
            </div>
          </div>

          {/* Single Counter Item 4 */}
          <div className="col-lg-3 col-md-6 mb-30">
            <div className="counter-item" ref={counterRef}>
              <div className="icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <div className="content">
                <div className="title">
                  <h2 className="counter">
                    {inView ? (
                      <CountUp start={0} end={35} duration={1} suffix="+" />
                    ) : (
                      <span>0</span>
                    )}
                  </h2>
                </div>
                <p>Former Employer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
