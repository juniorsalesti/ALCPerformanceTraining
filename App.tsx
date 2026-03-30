import React from 'react';
import { Header, Footer, FloatingWhatsApp } from './components/Layout';
import { HomePage } from './components/Home';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark text-white selection:bg-primary selection:text-black font-sans">
      <Header />
      <main className="flex-grow">
        <HomePage />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default App;