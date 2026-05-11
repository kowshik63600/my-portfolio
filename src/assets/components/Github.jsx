import "./Github.css";

function Github() {
  return (
  <section className="github">
  <h2 className="github-title">
    My <span>GitHub</span> Activity
  </h2>

  <div className="github-container">

   <img
  src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=kowshik63600&theme=tokyonight"
  alt="github stats"
/>

    <img
      src="https://github-readme-streak-stats.herokuapp.com/?user=kowshik63600&theme=tokyonight&hide_border=true"
      alt="github streak"
    />

  </div>

  {/* 🔥 NEW BUTTON */}
  <div className="github-btn-wrapper">
    <a 
      href="https://github.com/kowshik63600" 
      target="_blank" 
      rel="noreferrer"
      className="btn"
    >
      View GitHub Profile
    </a>
  </div>
</section>
  );
}

export default Github;