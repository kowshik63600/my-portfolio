import "./Github.css";

function Github() {
  return (
    <section className="github section-mask" id="github">
      <h2 className="section-title">
        My <span>GitHub</span> Activity
      </h2>

      <div className="github-container">

        {/* LEFT CARD */}
        <div className="github-card stats-card">
          <h3>Stats</h3>
          <ul>
            <li>⭐ Total Stars: 0</li>
            <li>📊 Commits: 37</li>
            <li>📁 Repos: 6</li>
            <li>🐛 Issues: 0</li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="github-card streak-card">
          <div className="streak-box">
            <div>
              <h3>44</h3>
              <p>Total Contributions</p>
            </div>

            <div>
              <h3>0</h3>
              <p>Current Streak</p>
            </div>

            <div>
              <h3>3</h3>
              <p>Longest Streak</p>
            </div>
          </div>
        </div>

      </div>

      <div className="github-btn-wrap">
        <a
          href="https://github.com/kowshik63600"
          target="_blank"
          rel="noreferrer"
          className="github-btn"
        >
          View GitHub Profile
        </a>
      </div>
    </section>
  );
}

export default Github;