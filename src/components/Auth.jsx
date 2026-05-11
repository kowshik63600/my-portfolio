import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/auth";
import "./Auth.css";

function Auth({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const ADMIN_EMAIL = "kowshik6360@gmail.com";

  const handleLogin = async (e) => {
    e.preventDefault();

    // 🔒 Restrict login
    if (email !== ADMIN_EMAIL) {
      alert("Demo login only. Access restricted.");
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful ✅");
      onClose();
    } catch (error) {
      alert("Invalid credentials ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-box">

        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>Demo Login</h2>

        <p className="auth-note">
          Only admin access is allowed
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

      </div>
    </div>
  );
}

export default Auth;