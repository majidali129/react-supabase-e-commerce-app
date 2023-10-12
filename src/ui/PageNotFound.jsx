import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
    const moveBack = useMoveBack();
  
    return (
      <div className="h-[95vh] flex items-center justify-center bg-stone-50 p-30 ">
        <div className="bg-white border-2 border-stone-300 rounded-md p-14 flex-[0 1 30rem] text-center">
          <h1 className="mb-16">
            The page you are looking for could not be found 😢
          </h1>
          <button onClick={moveBack} size="large">
            &larr; Go back
          </button>
        </div>
      </div>
    );
  }

export default PageNotFound