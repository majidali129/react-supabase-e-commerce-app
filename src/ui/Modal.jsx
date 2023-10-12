import { cloneElement, createContext, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "../hooks/useClickOutside";


export const ModalContext = createContext()


const Modal = ({ children }) => {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = setOpenName;
  

  return (
    <ModalContext.Provider value={{
      openName, open, close
    }} >
      {children}

    </ModalContext.Provider>
  )
}

  const Open = ({children, opens: openWindowName}) => {
    const {open} = useContext(ModalContext);

    return (
      cloneElement(children ,
      {onClick: () => open(openWindowName)}
      )
    )
  }

  const Window = ({children, name}) => {
    const {openName, close} = useContext(ModalContext);

    const ref = useClickOutside(close, true)
    
    if(name !== openName) return null;
    
    return createPortal(
      <div className="fixed top-0 left-0 w-full h-screen z-10 backdrop-blur-md transition-all duration-500 ">
          <div 
          ref={ref}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-stone-50 rounded-lg shadow-lg p-8 transition-all duration-500">
              <button 
              onClick={close}
              className=" border-none py-2 px-3 rounded-md transform translate-x-2 transition-all duration-200 absolute top-3 right-5 hover:bg-stone-200 cursor-pointer">
                   X
              </button>
              {cloneElement(children, {closeModal: close})}
          </div>
      </div>,
      document.body
    )

  }

  Modal.Open = Open;
  Modal.Window = Window;

  export default Modal

    
    {/* <HiXMark className='w-10 h-10 text-stone-500' /> */}