import images from "../../assets/images";
import { SponsorSection } from "./SponsorSection";

export function Sponsor() {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8">
      <SponsorSection title="Gold Sponsors" imageUrl={images.kpmg} />
      <SponsorSection title="Silver Sponsors" imageUrl={images.acca} altText="ACCA Logo" />
      <SponsorSection title="IAAER LinkedIn" imageUrl={images.linkedin} altText="LinkedIn" />
    </div>
  );
}
