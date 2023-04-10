import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="h-screen dark:bg-black dark:text-white">
      <Layout />
      <Home />
    </div>
  );
};

export default App;
