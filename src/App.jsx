import React from 'react';
import { setPageTitle } from '@/utils/PageUtils';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HomePage from '@/components/pages/HomePage';

function App() {
  setPageTitle('Home | Project Anime');

  return (
    <div className="flex bg-gray-900 flex-col box-border p-2">
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
