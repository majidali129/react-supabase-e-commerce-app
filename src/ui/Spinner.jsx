import { FadeLoader } from "react-spinners"

const Spinner = ({message}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[50vh]  backdrop-blur-sm">
      <FadeLoader
  color="#713f12"
  height={18}
  loading
  margin={1}
  radius={0}
  speedMultiplier={3}
  width={4}
/>
      <p className="mt-2 text-xl">Loading {message? message: 'please wait...'}</p>
    </div>
  )
}

export default Spinner