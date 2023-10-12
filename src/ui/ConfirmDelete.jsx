import Button from "./Button"
import Modal from "./Modal"




const ConfirmDelete = ({resourceName, disabled, closeModal, onConfirm}) => {
    
  return (
    <div className="flex flex-col w-[23rem] gap-2">
        <h3>Delete {resourceName}</h3>

        <p className="text-stone-500 mt-6">
            Are you sure you want to delete this {resourceName} permanently? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-8 mt-2">
        <Button variation="secondary" disabled={disabled} onClick={closeModal}>
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={() => {
            onConfirm()
            closeModal()
            }}>
          Delete
        </Button>
        </div>

    </div>
  )
}

export default ConfirmDelete