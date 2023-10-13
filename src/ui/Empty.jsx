import BackButton from "./BackButton"

const Empty = () => {
  return (
    <div className="w-full px-10 py-6 space-y-4 rounded-md bg-stone-50 mt-[3rem] text-center">
      <h3>Cart is empty yet</h3>
      <BackButton >&larr; Go back to store</BackButton>
    </div>
  )
}

export default Empty