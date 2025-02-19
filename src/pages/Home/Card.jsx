function Card({ children, className = "" }) {
    return (
      <div
        className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-shadow hover:shadow-md ${className}`}
      >
        {children}
      </div>
    )
  }
  
  export default Card;
  