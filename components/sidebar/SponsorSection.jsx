export function SponsorSection({ title, imageUrl, altText }) {
  return (
    <section className="max-w-xs mx-auto">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="bg-white rounded-md shadow-sm border border-gray-200 p-2">
        <img src={imageUrl || "/placeholder.svg"} alt={altText} className="w-3/4 mx-auto" />
      </div>
    </section>
  );
}
