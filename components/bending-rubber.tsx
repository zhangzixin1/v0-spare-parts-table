import Image from "next/image"
import Watermark from "./watermark"

const rubberData = [
  { cat: "VBR-OD13_4-L180", od: "13.4", len: "180" },
  { cat: "VBR-OD13_0-L190", od: "13.0", len: "190" },
  { cat: "VBR-OD13_0-L140", od: "13.0", len: "140" },
  { cat: "VBR-OD12_5-L190", od: "12.5", len: "190" },
  { cat: "VBR-OD12_2-L190", od: "12.2", len: "190" },
  { cat: "VBR-OD12_0-L140", od: "12.0", len: "140" },
  { cat: "VBR-OD11_8-L190", od: "11.8", len: "190" },
  { cat: "VBR-OD11_6-L190", od: "11.6", len: "190" },
  { cat: "VBR-OD11_1-L190", od: "11.1", len: "190" },
  { cat: "VBR-OD10_3-L110", od: "10.3", len: "110" },
  { cat: "VBR-OD10_2-L150", od: "10.2", len: "150" },
  { cat: "VBR-OD10_0-L110", od: "10.0", len: "110" },
  { cat: "VBR-OD9_8_9_2-L130", od: "9.8/9.2", len: "130" },
  { cat: "VBR-OD9_8-L110", od: "9.8", len: "110" },
  { cat: "VBR-OD9_6-L115", od: "9.6", len: "115" },
  { cat: "VBR-OD9_3-L190", od: "9.3", len: "190" },
  { cat: "VBR-OD9_3-L110", od: "9.3", len: "110" },
  { cat: "VBR-OD9_0-L115", od: "9.0", len: "115" },
  { cat: "VBR-OD8_6-L130", od: "8.6", len: "130" },
  { cat: "VBR-OD8_4-L100", od: "8.4", len: "100" },
  { cat: "VBR-OD8_2-L130", od: "8.2", len: "130" },
  { cat: "VBR-OD8_0-L150", od: "8.0", len: "150" },
  { cat: "VBR-OD7_5-L150", od: "7.5", len: "150" },
  { cat: "VBR-OD7_0-L150", od: "7.0", len: "150" },
  { cat: "VBR-OD6_2-L125", od: "6.2", len: "125" },
  { cat: "VBR-OD6_0-L108", od: "6.0", len: "108" },
  { cat: "VBR-OD5_9-L108", od: "5.9", len: "108" },
  { cat: "VBR-OD5_6-L108", od: "5.6", len: "108" },
  { cat: "VBR-OD5_3-L135", od: "5.3", len: "135" },
  { cat: "VBR-OD5_3-L105", od: "5.3", len: "105" },
  { cat: "VBR-OD5_2-L95", od: "5.2", len: "95" },
  { cat: "VBR-OD4_9-L80", od: "4.9", len: "80" },
  { cat: "VBR-OD4_6-L80", od: "4.6", len: "80" },
  { cat: "VBR-OD3_9-L80", od: "3.9", len: "80" },
  { cat: "VBR-OD3_4-L110", od: "3.4", len: "110" },
  { cat: "VBR-OD3_3-L110", od: "3.3", len: "110" },
  { cat: "VBR-OD3_3-L70", od: "3.3", len: "70" },
  { cat: "VBR-OD3_1-L90", od: "3.1", len: "90" },
  { cat: "VBR-OD2_8-L85", od: "2.8", len: "85" },
  { cat: "VBR-OD2_7-L90", od: "2.7", len: "90" },
  { cat: "VBR-OD2_6-L85", od: "2.6", len: "85" },
  { cat: "VBR-OD2_3-L90", od: "2.3", len: "90" },
]

const leftColumnData = rubberData.slice(0, 21)
const rightColumnData = rubberData.slice(21)

function TableHeader() {
  return (
    <div className="grid grid-cols-[1.2fr_0.5fr_0.5fr] bg-[#1a365d] text-[#ffffff] text-[9px] font-semibold">
      <div className="px-1.5 py-1 border-r border-[#3b6eaa]">Catalog No.</div>
      <div className="px-1.5 py-1 border-r border-[#3b6eaa] text-center">OD (mm)</div>
      <div className="px-1.5 py-1 text-center">Length (mm)</div>
    </div>
  )
}

function DataRow({
  row,
  index,
}: {
  row: { cat: string; od: string; len: string }
  index: number
}) {
  return (
    <div
      className={`grid grid-cols-[1.2fr_0.5fr_0.5fr] text-[8px] ${
        index % 2 === 0 ? "bg-[#ffffff]" : "bg-[#f9fafb]"
      } border-b border-[#e5e7eb]`}
    >
      <div className="px-1.5 py-[2px] font-medium text-[#1f2937]">{row.cat}</div>
      <div className="px-1.5 py-[2px] text-center text-[#374151]">{row.od}</div>
      <div className="px-1.5 py-[2px] text-center text-[#374151]">{row.len}</div>
    </div>
  )
}

export default function BendingRubber() {
  return (
    <div data-catalog-page className="w-[794px] h-[1123px] bg-[#ffffff] relative font-sans text-[11px]">
      {/* Header - Logo */}
      <div className="absolute top-4 right-6">
        <Image
          src="/images/endotec-logo.png"
          alt="ENDOTEC PARTS logo"
          width={100}
          height={50}
          className="object-contain"
        />
      </div>

      {/* Page Title */}
      <div className="pt-6 pl-6 pr-[140px]">
        <h1 className="text-[28px] font-bold text-[#2563eb]">Bending Rubber (Viton)</h1>
        <div className="w-full h-[1px] bg-[#d1d5db] mt-2" />
      </div>

      {/* Material Info Banner */}
      <div className="mx-6 mt-3 bg-[#fef3c7] border border-[#f59e0b] rounded px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="text-[#d97706] text-[12px]">&#9733;</span>
          <p className="text-[10px] text-[#92400e]">
            <strong>Material: Viton (FKM)</strong> — High-performance fluoroelastomer with excellent chemical resistance and durability
          </p>
        </div>
      </div>

      {/* Main Content Area - Two Column Layout */}
      <div className="flex mt-3 px-6 gap-4">
        {/* Left Column */}
        <div className="w-[48%]">
          <TableHeader />
          {leftColumnData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}
        </div>

        {/* Right Column */}
        <div className="w-[48%]">
          <TableHeader />
          {rightColumnData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom Section: Image + Notes */}
      <div className="flex mt-4 px-6 gap-4">
        {/* Product Image */}
        <div className="w-[40%] relative h-[200px]">
          <Image
            src="/images/bending-rubber.png"
            alt="Viton bending rubber sleeves"
            fill
            className="object-contain"
          />
        </div>

        {/* Product Notes */}
        <div className="w-[60%]">
          <div className="space-y-2 text-[9px] text-[#4b5563] leading-relaxed">
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                <strong className="text-[#1f2937]">Chemical Resistance:</strong> Excellent resistance
                to oils, fuels, and chemicals used in medical sterilization.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                <strong className="text-[#1f2937]">Durability:</strong> Designed for repeated
                sterilization cycles without degradation.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                <strong className="text-[#1f2937]">Quality:</strong> OEM-equivalent replacement part
                for endoscope bending section repair.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                Special sizes are available upon request. Contact us for custom specifications.
              </p>
            </div>
          </div>

          {/* Summary Box */}
          <div className="mt-4 bg-[#f0f9ff] border border-[#bae6fd] rounded p-2">
            <h3 className="text-[9px] font-semibold text-[#0369a1] mb-1.5">
              Bending Rubber Summary
            </h3>
            <div className="grid grid-cols-3 gap-2 text-[8px] text-[#4b5563]">
              <div>
                <span className="font-medium">OD Range:</span>
                <br />2.3 - 13.4 mm
              </div>
              <div>
                <span className="font-medium">Length Range:</span>
                <br />70 - 190 mm
              </div>
              <div>
                <span className="font-semibold text-[#1f2937]">Total:</span>
                <br />42 models
              </div>
            </div>
          </div>
        </div>
      </div>

      <Watermark />

      {/* Footer */}
      <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[9px] text-[#9ca3af]" style={{ zIndex: 11 }}>
        <span className="text-[#6b7280] font-medium">Universal Sizes</span>
        <span>www.endotec-med.com</span>
        <span className="text-[#6b7280] font-medium">9</span>
      </div>
    </div>
  )
}
