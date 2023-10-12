import { useState } from "react"
import Modal from "../../ui/Modal"
import Button from "../../ui/Button"
import { createPortal } from "react-dom"

const Confirm = () => {
    const [isShowModal, setIsShowModal] = useState(false)
    
    
   return (
    <>
    <Button variation='primary' onClick={() => setIsShowModal(true)} >Show Modal</Button>

{isShowModal &&
createPortal(
    <div>
        <Modal isOpen={isShowModal} onCloseModal={() => setIsShowModal(false)} />
    </div>,
    document.body
)
}
    </>
   )
  
}

export default Confirm