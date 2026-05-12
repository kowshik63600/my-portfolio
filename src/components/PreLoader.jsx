import { useEffect, useState } from "react";
import "./PreLoader.css";

function PreLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500); // faster

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="preloader">
      <div className="loader-content">

        <h1 className="loader-logo">KOWSHIK</h1>

        <div className="loader-line"></div>

      </div>
    </div>
  );
}

export default PreLoader;