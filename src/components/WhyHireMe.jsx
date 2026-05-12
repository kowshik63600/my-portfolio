import "./WhyHireMe.css";

function WhyHireMe() {
  return (
    <section className="why section-mask" id="why">
      <h2 className="section-title">
        Why <span>Hire Me</span>
      </h2>

      <div className="why-container">

        <div className="why-card">
          <h3>🚀 Fast Learner</h3>
          <p>
            Quickly adapt to new technologies and build real-world projects efficiently.
          </p>
        </div>

        <div className="why-card">
          <h3>💻 Real Project Experience</h3>
          <p>
            Built full-stack apps with React, Firebase, and modern UI practices.
          </p>
        </div>

        <div className="why-card">
          <h3>🎯 Problem Solver</h3>
          <p>
            Focused on solving real user problems, not just building UI.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyHireMe;