export function SponsorSection({ title, imageUrl, altText }) {
  return (
    <section className="max-w-xs mx-auto">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="bg-white rounded-md shadow-sm border border-gray-200 p-2 flex justify-center">
        <img 
          src={imageUrl || "/placeholder.svg"} 
          alt={altText} 
          className="w-10 h-12 sm:w-32 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain"
        />
      </div>
    </section>
  );
}
