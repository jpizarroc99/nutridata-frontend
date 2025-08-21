import { ArrowUpward } from "@mui/icons-material";
import { Zoom } from "@mui/material";
import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    function handleScroll() {
      const scrollLimit = 500;

      if (document.documentElement.scrollTop > scrollLimit) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Zoom in={isVisible}>
      <button
        onClick={scrollToTop}
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "#f7cfff80",
          border: 0,
          height: "4rem",
          width: "4rem",
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          cursor: "pointer"
        }}
      >
        <ArrowUpward color="secondary" />
      </button>
    </Zoom>
  );
}
