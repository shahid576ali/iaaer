const MissionStatement = ({ organization, mission, activities }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-6xl mx-auto border-t-4 border-blue-600">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Mission & Activity Statement</h1>

      <p className="text-gray-700 mb-4">
        {organization.name} ({organization.acronym}) is a {organization.type} organization.
      </p>

      <p className="text-gray-700 mb-6">{mission}</p>

      <p className="text-gray-700 mb-4">
        {organization.acronym} carries out the Association's mission by engaging in, inter alia, the following
        activities:
      </p>

      <ul className="list-disc pl-8 space-y-3 text-gray-700">
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  )
}

export default MissionStatement
