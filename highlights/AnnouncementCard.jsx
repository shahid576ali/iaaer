import React, { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function AnnouncementCard({ title, children, icon, gradient }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl">
      <div className={`p-3 text-white bg-gradient-to-r ${gradient}`}>
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-3">{icon}</div>
          <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className={`space-y-3 ${!isExpanded ? "line-clamp-3" : ""}`}>{children}</div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          {isExpanded ? (
            <>
              Show less
              <ChevronUp className="ml-1 w-4 h-4" />
            </>
          ) : (
            <>
              Read more
              <ChevronDown className="ml-1 w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  )
}

