
const PagenationButton = ({children, onClick, disabled}) => {
  return (
    <button
    onClick={onClick}
    className=" pagenation-btn "
    disabled={disabled}
    >
    {children}
    </button>
  )
}

export default PagenationButton