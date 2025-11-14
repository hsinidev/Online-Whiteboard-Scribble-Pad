import React, { useState } from 'react';
import Layout from './components/Layout';
import Whiteboard from './components/Whiteboard';
import SeoArticle from './components/SeoArticle';
import { MODAL_TYPE } from './types';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<MODAL_TYPE | null>(null);
  const [isArticleExpanded, setIsArticleExpanded] = useState(false);


  const renderModalContent = () => {
    switch (activeModal) {
      case MODAL_TYPE.ABOUT:
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-gray-100">About This Project</h2>
            <p className="text-gray-300">
              This Online Whiteboard is a modern, responsive web application built with React and TypeScript, designed for free-form drawing and brainstorming. It leverages the HTML Canvas API for all drawing functionalities, ensuring a smooth and native experience. The entire interface is styled with Tailwind CSS for a clean, minimalist aesthetic.
            </p>
          </>
        );
      case MODAL_TYPE.CONTACT:
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Contact</h2>
            <p className="text-gray-300">For inquiries, please visit <a href="http://doodax.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">doodax.com</a> or email <a href="mailto:hsini.web@gmail.com" className="text-cyan-400 hover:underline">hsini.web@gmail.com</a>.</p>
          </>
        );
      case MODAL_TYPE.GUIDE:
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-gray-100">User Guide</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Draw:</strong> Click and drag your mouse on the canvas to start drawing.</li>
              <li><strong>Change Color:</strong> Use the color picker in the toolbar to select a new brush color.</li>
              <li><strong>Adjust Brush Size:</strong> Use the slider to change the thickness of your brush strokes.</li>
              <li><strong>Undo:</strong> Click the 'Undo' button to revert the last stroke you made.</li>
              <li><strong>Clear Canvas:</strong> Click 'Clear' to erase everything on the canvas.</li>
              <li><strong>Download:</strong> Click 'Download' to save your creation as a PNG image.</li>
            </ul>
          </>
        );
      case MODAL_TYPE.PRIVACY:
         return <h2 className="text-2xl font-bold mb-4 text-gray-100">Privacy Policy</h2>;
      case MODAL_TYPE.TERMS:
         return <h2 className="text-2xl font-bold mb-4 text-gray-100">Terms of Service</h2>;
      case MODAL_TYPE.DMCA:
        return <h2 className="text-2xl font-bold mb-4 text-gray-100">DMCA Policy</h2>;
      default:
        return null;
    }
  };

  return (
    <Layout setActiveModal={setActiveModal} activeModal={activeModal}>
      {activeModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-gray-800 border border-cyan-500 rounded-lg p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl shadow-cyan-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {renderModalContent()}
            <button 
              onClick={() => setActiveModal(null)}
              className="mt-6 bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-cyan-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      <div className="w-full max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_2px_4px_rgba(6,182,212,0.5)]">
          Cosmic Canvas
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Your digital whiteboard for scribbling ideas across the galaxy. Click and drag to start.
        </p>
      </div>

      <div className="w-full h-[60vh] max-w-7xl mx-auto mt-8">
          <Whiteboard />
      </div>

      <div className="w-full max-w-4xl mx-auto mt-12 pb-12">
        <div className={`relative overflow-hidden transition-all duration-700 ease-in-out ${isArticleExpanded ? 'max-h-[5000px]' : 'max-h-24'}`}>
          <SeoArticle />
          {!isArticleExpanded && <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900 to-transparent"></div>}
        </div>
        <button
          onClick={() => setIsArticleExpanded(!isArticleExpanded)}
          className="mt-4 mx-auto flex items-center gap-2 px-6 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-400 rounded-full hover:bg-cyan-500/30 transition-all"
        >
          {isArticleExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </Layout>
  );
};

export default App;