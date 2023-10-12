import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";
import PagenationButton from "./PagenationButton";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Pagenation = ({count}) => {
  
  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = !searchParams.get('page')? 1: Number(searchParams.get('page'));

  const pageCount = Math.ceil(count/PAGE_SIZE);

  function next() {
    const next = currentPage === pageCount? currentPage: currentPage + 1;
    searchParams.set('page', next)
    setSearchParams(searchParams);
  }


  function prev() {
    const prev = currentPage === 1? currentPage: currentPage -1;
    searchParams.set('page', prev);
    setSearchParams(searchParams);
  }


  return (
    <section 
    className="flex items-center justify-between px-4 py-3 bg-stone-50 mt-8"
    >
      <p className="text-stone-700">
        Showing <span className="font-semibold"> {(currentPage - 1) * PAGE_SIZE + 1} </span>
        to
        <span className="font-semibold">
          {" "}
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}{" "}
        </span>
        of
        <span className="font-semibold"> {count} </span> results
      </p>

      <div className="flex items-center gap-8">
        <PagenationButton 
        onClick={() => prev()} 
        disabled={currentPage === 1}
        >
          <HiChevronLeft /> <span>Prev</span>
        </PagenationButton>
        <PagenationButton 
        onClick={() => next()} 
        disabled={currentPage === pageCount}
        >
          <span>Next</span> <HiChevronRight />
        </PagenationButton>
      </div>
    </section>
  );
};

export default Pagenation;
