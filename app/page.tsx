import SpareParts from "@/components/spare-parts"
import LightGuideBundleOlympus from "@/components/light-guide-bundle-olympus"
import LightGuideTube from "@/components/light-guide-tube"
import BendingSection from "@/components/bending-section"
import BendingRubber from "@/components/bending-rubber"
import BiopsyChannel from "@/components/biopsy-channel"

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[#e5e7eb] gap-8 p-8">
      <SpareParts />
      <LightGuideBundleOlympus />
      <LightGuideTube />
      <BendingSection />
      <BendingRubber />
      <BiopsyChannel />
    </main>
  )
}
