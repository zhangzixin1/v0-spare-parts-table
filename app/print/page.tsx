"use client"

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

const pageStyle: React.CSSProperties = {
  width: '794px',
  height: '1123px',
  pageBreakAfter: 'always',
  pageBreakInside: 'avoid',
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: 'white',
}

const lastPageStyle: React.CSSProperties = {
  ...pageStyle,
  pageBreakAfter: 'auto',
}

export default function PrintPage() {
  return (
    <div style={{ width: '794px', margin: '0 auto', backgroundColor: 'white' }}>
      <div style={pageStyle}>
        <CatalogCover />
      </div>
      <div style={pageStyle}>
        <InsertionTubeOlympus />
      </div>
      <div style={pageStyle}>
        <InsertionTubePentaxFuji />
      </div>
      <div style={pageStyle}>
        <LightGuideBundleOlympus />
      </div>
      <div style={pageStyle}>
        <LightGuideTube />
      </div>
      <div style={pageStyle}>
        <BiopsyChannel />
      </div>
      <div style={pageStyle}>
        <BendingSection />
      </div>
      <div style={pageStyle}>
        <CoilPipeAssembly />
      </div>
      <div style={pageStyle}>
        <BendingRubber />
      </div>
      <div style={lastPageStyle}>
        <SpareParts />
      </div>
    </div>
  )
}
