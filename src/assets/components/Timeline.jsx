import "./Timeline.css";

function Timeline() {
  return (
    <section className="timeline">
      <h2 className="timeline-title">
        My <span>Journey</span>
      </h2>

      <div className="timeline-container">

        <div className="timeline-item">
          <h3>Frontend Developer (Self Learning)</h3>
          <span>2025 - Present</span>
          <p>
            Building responsive web applications using React, JavaScript,
            and modern UI practices. Created real-world projects like
            Expense Tracker and Portfolio.
          </p>
        </div>

        <div className="timeline-item">
          <h3>Front Desk Executive - Nano Hospital</h3>
          <span>2024</span>
          <p>
            Managed patient handling, scheduling, and front desk operations.
            Developed communication and problem-solving skills in a real environment.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Timeline;