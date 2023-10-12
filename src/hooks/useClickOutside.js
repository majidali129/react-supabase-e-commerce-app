import { useEffect, useRef } from "react"

export const useClickOutside = (handler, eventCapturing=true) => {
    // click outside the modal window
    const ref = useRef()
    useEffect(() => {
      function handleOutsideClick (e) {
        if(ref.current && !ref.current.contains(e.target)){
            handler()
        }
      }
      document.addEventListener('click', handleOutsideClick, eventCapturing)

      return () => document.removeEventListener('click', handleOutsideClick, eventCapturing)
    }, [handler, eventCapturing])
 

    return ref
}

