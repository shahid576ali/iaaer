import React from "react"
import { ArrowRight } from "lucide-react"

export function ReadMoreLink({ href, children, className }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center text-sm font-medium transition-colors duration-200 ${className}`}
    >
      {children}
      <ArrowRight className="ml-1 w-4 h-4" />
    </a>
  )
}

