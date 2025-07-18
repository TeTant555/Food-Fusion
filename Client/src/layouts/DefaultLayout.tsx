import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from '@/components/Footer'
import Auth from '@/modules/auth/Auth'

const ANIMATION_DURATION = 350;

const DefaultLayout = () => {
  const [modal, setModal] = useState<{ open: boolean; mode: 'login' | 'signup' }>({ open: false, mode: 'login' });
  const [isClosing, setIsClosing] = useState(false);

  const openLogin = () => setModal({ open: true, mode: 'login' });
  const openSignUp = () => setModal({ open: true, mode: 'signup' });
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModal((m) => ({ ...m, open: false }));
      setIsClosing(false);
    }, ANIMATION_DURATION);
  };
  const handleAuthSuccess = () => handleClose();

  return (
    <main className='font-display'>
      <Navbar onLoginClick={openLogin} onSignUpClick={openSignUp} />
      {modal.open && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-sm bg-black/40"
          onClick={handleClose}
        >
          <div
            className={`relative z-50 modal-animate-in${isClosing ? ' animate-modal-exit' : ''}`}
            style={isClosing ? { animation: `modal-animate-in ${ANIMATION_DURATION}ms cubic-bezier(0.4,0,0.2,1) reverse` } : {}}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={handleClose}
              aria-label="Close Login"
            >
              ×
            </button>
            <Auth onAuthSuccess={handleAuthSuccess} initialView={modal.mode} />
          </div>
        </div>
      )}
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default DefaultLayout