import React from 'react';
import Navbar from '../components/Navbar';
import { News } from '../components/News';
import Footer from '../components/Footer';

function NewsPage() {
  return (
    <div className="helpdesk-newspage">
      <Navbar />
      <News />
      <Footer />
    </div>
  );
}

export default NewsPage;
