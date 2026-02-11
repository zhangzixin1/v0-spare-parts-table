import CatalogCover from "@/components/catalog-cover"
import SpareParts from "@/components/spare-parts"
import LightGuideBundleOlympus from "@/components/light-guide-bundle-olympus"
import LightGuideTube from "@/components/light-guide-tube"
import BendingSection from "@/components/bending-section"
import BendingRubber from "@/components/bending-rubber"
import BiopsyChannel from "@/components/biopsy-channel"
import InsertionTubeOlympus from "@/components/insertion-tube-olympus"
import InsertionTubePentaxFuji from "@/components/insertion-tube-pentax-fuji"
import CoilPipeAssembly from "@/components/coil-pipe-assembly"
import PdfDownloadButton from "@/components/pdf-download-button"

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[#e5e7eb] gap-8 p-8">
      <PdfDownloadButton />
      {/* P1 - Cover */}
      <CatalogCover />
      {/* P2 - Insertion Tube Olympus */}
      <InsertionTubeOlympus />
      {/* P4 - Insertion Tube Pentax & Fuji */}
      <InsertionTubePentaxFuji />
      {/* P5 - Light Guide Bundle */}
      <LightGuideBundleOlympus />
      {/* P7 - Light Guide Tube */}
      <LightGuideTube />
      {/* P8 - Biopsy Channel */}
      <BiopsyChannel />
      {/* P9 - Bending Section */}
      <BendingSection />
      {/* P11 - Coil Pipe Assembly */}
      <CoilPipeAssembly />
      {/* P12 - Bending Rubber */}
      <BendingRubber />
      {/* P13 - Spare Parts */}
      <SpareParts />
    </main>
  )
}
