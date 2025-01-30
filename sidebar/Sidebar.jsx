import images from "../../assets/images"
import { SponsorSection } from "./SponsorSection"

SponsorSection

export function Sidebar() {
  return (
    <div className="lg:col-span-1 max-w-[300px] lg:ml-[100px] space-y-8">
      <SponsorSection title="Gold Sponsors" imageUrl={images.kpmg} />

      <SponsorSection title="Silver Sponsors" imageUrl={images.acca} altText="ACCA Logo" />

      <SponsorSection title="IAAER LinkedIn" imageUrl={images.linkedin} altText="LinkedIn" />
    </div>
  )
}

