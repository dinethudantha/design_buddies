import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong } from '@fortawesome/free-solid-svg-icons'
const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    visible && (
      <button className="scroll-top" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faUpLong} />
      </button>
    )
  );
};

export default ScrollTop;