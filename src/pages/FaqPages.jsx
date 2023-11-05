import React from "react";
import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import { useTheme } from "../components/ThemeContext";

function FaqPages() {
  const { theme } = useTheme();
  return (
    <div className="faq-pages" id={theme}>
      <Navbar />
      <Faq theme={theme} />
      <Footer />
    </div>
  );
}

export default FaqPages;
