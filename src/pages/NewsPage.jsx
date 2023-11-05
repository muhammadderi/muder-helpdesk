import React from "react";
import Navbar from "../components/Navbar";
import { News } from "../components/News";
import Footer from "../components/Footer";
import { useTheme } from "../components/ThemeContext";

function NewsPage() {
  const { theme } = useTheme();
  return (
    <div className="helpdesk-newspage" id={theme}>
      <Navbar />
      <News theme={theme} />
      <Footer />
    </div>
  );
}

export default NewsPage;
