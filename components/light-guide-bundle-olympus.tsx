import Image from "next/image"
import Watermark from "./watermark"

// Olympus Data
const olympusGastroscopeData = [
  { cat: "LGB-GIF-V70", models: "GIF-V70" },
  { cat: "LGB-GIF-V70I", models: "GIF-V70I" },
  { cat: "LGB-GIF-Q145", models: "GIF-Q145" },
  { cat: "LGB-GIF-Q150", models: "GIF-Q150" },
  { cat: "LGB-GIF-Q160/165", models: "GIF-Q160, GIF-165" },
  { cat: "LGB-GIF-H180", models: "GIF-H180" },
  { cat: "LGB-GIF-H190", models: "GIF-H190" },
  { cat: "LGB-GIF-HQ190", models: "GIF-HQ190" },
  { cat: "LGB-GIF-XQ240", models: "GIF-XQ240" },
  { cat: "LGB-GIF-H260", models: "GIF-H260" },
  { cat: "LGB-GIF-Q260", models: "GIF-Q260" },
  { cat: "LGB-GIF-Q260J", models: "GIF-Q260J" },
  { cat: "LGB-GIF-XQ260", models: "GIF-XQ260" },
]

const olympusColonoscopeData = [
  { cat: "LGB-CF-Q145L", models: "CF-Q145L" },
  { cat: "LGB-CF-Q150L", models: "CF-Q150L" },
  { cat: "LGB-CF-Q160AL", models: "CF-Q160AL" },
  { cat: "LGB-CF-Q160L", models: "CF-Q160L" },
  { cat: "LGB-CF-Q165L", models: "CF-Q165L" },
  { cat: "LGB-CF-Q180AL", models: "CF-Q180AL" },
  { cat: "LGB-CF-H180AL", models: "CF-H180AL" },
  { cat: "LGB-CF-240L", models: "CF-240L" },
  { cat: "LGB-CF-H260AL", models: "CF-H260AL" },
  { cat: "LGB-CF-Q260AL", models: "CF-Q260AL" },
]

const olympusPcfData = [
  { cat: "LGB-PCF-140L", models: "PCF-140L" },
  { cat: "LGB-PCF-Q180AL", models: "PCF-Q180AL" },
  { cat: "LGB-PCF-H180AL", models: "PCF-H180AL" },
]

const olympusDuodenoscopeData = [
  { cat: "LGB-TJF-140R", models: "TJF-140R" },
  { cat: "LGB-TJF-160F", models: "TJF-160F" },
  { cat: "LGB-TJF-160R", models: "TJF-160R" },
  { cat: "LGB-TJF-160V", models: "TJF-160V" },
]

// Pentax Data
const pentaxData = [
  { cat: "LGB-EG2970K", models: "EG-2970K" },
  { cat: "LGB-EG2990I", models: "EG-2990I" },
  { cat: "LGB-EG2990K", models: "EG-2990K" },
  { cat: "LGB-EG290KP", models: "EG-290KP" },
  { cat: "LGB-EG29i10", models: "EG-29i10" },
]

// Fujifilm Data
const fujifilmData = [
  { cat: "LGB-EG250WR5", models: "EG-250WR5" },
  { cat: "LGB-EG530WR5", models: "EG-530WR5" },
  { cat: "LGB-EC590WM", models: "EC-590WM" },
  { cat: "LGB-EC590WR", models: "EC-590WR" },
]

function TableHeader() {
  return (
    <div className="grid grid-cols-[1fr_1fr] bg-[#1a365d] text-[#ffffff] text-[8px] font-semibold">
      <div className="px-1.5 py-1 border-r border-[#3b6eaa]">Catalog No.</div>
      <div className="px-1.5 py-1">Compatibility</div>
    </div>
  )
}

function BrandHeader({ label }: { label: string }) {
  return (
    <div className="bg-[#1e40af] text-[#ffffff] text-[9px] font-bold px-1.5 py-1 mt-2">
      {label}
    </div>
  )
}

function CategoryHeader({ label }: { label: string }) {
  return (
    <div className="bg-[#3b82f6] text-[#ffffff] text-[8px] font-semibold px-1.5 py-0.5">
      {label}
    </div>
  )
}

function DataRow({
  row,
  index,
}: {
  row: { cat: string; models: string }
  index: number
}) {
  return (
    <div
      className={`grid grid-cols-[1fr_1fr] text-[7px] ${
        index % 2 === 0 ? "bg-[#ffffff]" : "bg-[#f9fafb]"
      } border-b border-[#e5e7eb]`}
    >
      <div className="px-1.5 py-[2px] font-medium text-[#1f2937]">{row.cat}</div>
      <div className="px-1.5 py-[2px] text-[#4b5563]">{row.models}</div>
    </div>
  )
}

export default function LightGuideBundleOlympus() {
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
        <h1 className="text-[28px] font-bold text-[#2563eb]">Light Guide Bundle</h1>
        <div className="w-full h-[1px] bg-[#d1d5db] mt-2" />
      </div>

      {/* Main Content Area - Two Column Layout */}
      <div className="flex mt-2 px-6 gap-3">
        {/* Left Column: Olympus */}
        <div className="w-[48%]">
          <BrandHeader label="For Olympus" />
          <TableHeader />

          <CategoryHeader label="GASTROSCOPE (GIF)" />
          {olympusGastroscopeData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          <CategoryHeader label="COLONOSCOPE (CF)" />
          {olympusColonoscopeData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          <CategoryHeader label="PEDIATRIC (PCF)" />
          {olympusPcfData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          <CategoryHeader label="DUODENOSCOPE (TJF)" />
          {olympusDuodenoscopeData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}
        </div>

        {/* Right Column: Pentax + Fujifilm + Image */}
        <div className="w-[52%]">
          {/* Pentax */}
          <BrandHeader label="For Pentax" />
          <TableHeader />
          {pentaxData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Fujifilm */}
          <BrandHeader label="For Fujifilm" />
          <TableHeader />
          {fujifilmData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Product Image */}
          <div className="relative h-[280px] mt-4">
            <Image
              src="/images/light-guide-bundle.png"
              alt="Light guide bundle fiber optic assembly"
              fill
              className="object-contain"
            />
          </div>

          {/* Product Notes */}
          <div className="mt-3 space-y-1.5 text-[8px] text-[#4b5563] leading-relaxed">
            <div className="flex items-start gap-1.5">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                <strong className="text-[#1f2937]">OEM-EQUIVALENT</strong> replacement
                part. Fitment and optical performance verified.
              </p>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                High-quality fiber optic bundles for optimal light transmission.
              </p>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                Special models available upon request.
              </p>
            </div>
          </div>

          {/* Summary Box */}
          <div className="mt-3 bg-[#f0f9ff] border border-[#bae6fd] rounded p-2">
            <h3 className="text-[9px] font-semibold text-[#0369a1] mb-1">
              Summary
            </h3>
            <div className="grid grid-cols-4 gap-1 text-[7px] text-[#4b5563]">
              <div>Olympus: 30</div>
              <div>Pentax: 5</div>
              <div>Fujifilm: 4</div>
              <div className="font-semibold text-[#1f2937]">Total: 39</div>
            </div>
          </div>
        </div>
      </div>

      <Watermark />

      {/* Footer */}
      <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[9px] text-[#9ca3af]" style={{ zIndex: 11 }}>
        <span className="text-[#6b7280] font-medium">All Brands</span>
        <span>www.endotec-med.com</span>
        <span className="text-[#6b7280] font-medium">4</span>
      </div>
    </div>
  )
}
