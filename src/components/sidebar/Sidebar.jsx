import images from "../../assets/images";
import { SponsorSection } from "./SponsorSection";

export function Sidebar() {
  return (
    <div className="lg:col-span-1 lg:ml-[100px] flex flex-wrap justify-center lg:justify-start gap-x-8 space-y-0">
      <SponsorSection title="Gold Sponsors" imageUrl={images.kpmg} />
      <SponsorSection title="Silver Sponsors" imageUrl={images.acca} altText="ACCA Logo" />
      <SponsorSection title="IAAER LinkedIn" imageUrl={images.linkedin} altText="LinkedIn" />
    </div>
  );
}
