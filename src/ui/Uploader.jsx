import { storeProducts } from "../data/data";
import { useUpload } from "../hooks/useUpload";

const Uploader = () => {
  const { uploader, insertingProducts } = useUpload();

  return (
    <button
      className="text-yellow-50 cursor-pointer disabled:cursor-wait"
      onClick={() => uploader(storeProducts)}
      disabled={insertingProducts}
    >
      Uplaod Products
    </button>
  );
};

export default Uploader;
