import React from 'react';
import { MODAL_TYPE } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  setActiveModal: (modal: MODAL_TYPE | null) => void;
  activeModal: MODAL_TYPE | null;
}

const Star: React.FC<{ size: number; top: string; left: string; delay: string, duration: string }> = ({ size, top, left, delay, duration }) => {
  const style: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    top,
    left,
    animationDelay: delay,
    animationDuration: duration,
  };
  return <div className="absolute bg-white rounded-full star" style={style}></div>;
};

const GalaxyBackground: React.FC = () => {
    const stars = Array.from({ length: 150 }).map((_, i) => {
    const size = Math.random() * 2 + 1;
    return (
        <Star
            key={`s1-${i}`}
            size={size}
            top={`${Math.random() * 100}%`}
            left={`${Math.random() * 100}%`}
            delay={`${Math.random() * 150}s`}
            duration={`calc(150s / ${size})`}
        />
    );
    });
    
    const stars2 = Array.from({ length: 200 }).map((_, i) => {
    const size = Math.random() * 1.5 + 0.5; // Smaller stars
    return (
        <Star
            key={`s2-${i}`}
            size={size}
            top={`${Math.random() * 100}%`}
            left={`${Math.random() * 100}%`}
            delay={`${Math.random() * 100}s`}
            duration={`calc(100s / ${size})`} // Faster movement
        />
    );
    });

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-gray-900">
            <style>{`
                @keyframes move-stars {
                    from { transform: translateY(0px); }
                    to { transform: translateY(-2000px); }
                }
                .star {
                    animation: move-stars linear infinite;
                }
                .nebula {
                    background: radial-gradient(ellipse at center, rgba(10, 108, 163, 0.3) 0%, rgba(10, 108, 163, 0) 70%);
                    animation: pulse 12s infinite alternate;
                }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.3; }
                    100% { transform: scale(1.2); opacity: 0.5; }
                }
            `}</style>
            <div className="absolute inset-0 nebula"></div>
            {stars}
            {stars2}
        </div>
    );
};


const Layout: React.FC<LayoutProps> = ({ children, setActiveModal }) => {
    const navLinks = [
        { name: 'About', type: MODAL_TYPE.ABOUT },
        { name: 'Contact', type: MODAL_TYPE.CONTACT },
        { name: 'Guide', type: MODAL_TYPE.GUIDE },
        { name: 'Privacy Policy', type: MODAL_TYPE.PRIVACY },
        { name: 'Terms of Service', type: MODAL_TYPE.TERMS },
        { name: 'DMCA', type: MODAL_TYPE.DMCA },
    ];

  return (
    <div className="min-h-screen text-white flex flex-col relative">
      <GalaxyBackground />
      <header className="absolute top-0 left-0 right-0 z-10 p-4">
        <nav className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2">
            {navLinks.map(link => (
                <button 
                    key={link.name}
                    onClick={() => setActiveModal(link.type)}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                    {link.name}
                </button>
            ))}
        </nav>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center gap-8 py-24 px-4">
        {children}
      </main>

      <footer className="w-full text-center p-4 text-sm text-gray-400 z-10">
        Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-[#FFD700] hover:underline">HSINI MOHAMED</a>
        <span className="mx-2">|</span>
        <a href="http://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">doodax.com</a>
        <span className="mx-2">|</span>
        <a href="mailto:hsini.web@gmail.com" className="hover:text-cyan-400">hsini.web@gmail.com</a>
      </footer>
    </div>
  );
};

export default Layout;