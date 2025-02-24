function Card({ children, className = "" }) {
    return (
      <div
        className={`bg-white rounded-lg shadow-sm border flex flex-row-reverse border-gray-200 overflow-hidden transition-shadow hover:shadow-md ${className}`}
      >
        {children}
      </div>
    )
  }
  
  export default Card;
  