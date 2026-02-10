import Image from "next/image"

const gastroscopeData = [
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

const colonoscopeData = [
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

const pcfData = [
  { cat: "LGB-PCF-140L", models: "PCF-140L" },
  { cat: "LGB-PCF-Q180AL", models: "PCF-Q180AL" },
  { cat: "LGB-PCF-H180AL", models: "PCF-H180AL" },
]

const duodenoscopeData = [
  { cat: "LGB-TJF-140R", models: "TJF-140R" },
  { cat: "LGB-TJF-160F", models: "TJF-160F" },
  { cat: "LGB-TJF-160R", models: "TJF-160R" },
  { cat: "LGB-TJF-160V", models: "TJF-160V" },
]

function TableHeader() {
  return (
    <div className="grid grid-cols-[1fr_1.2fr] bg-[#1a365d] text-[#ffffff] text-[10px] font-semibold">
      <div className="px-2 py-1.5 border-r border-[#3b6eaa]">
        Catalog
        <br />
        Number
      </div>
      <div className="px-2 py-1.5">
        Compatibility
        <br />
        (Model)
      </div>
    </div>
  )
}

function CategoryHeader({ label }: { label: string }) {
  return (
    <div className="bg-[#3b82f6] text-[#ffffff] text-[10px] font-semibold px-2 py-1 mt-1">
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
      className={`grid grid-cols-[1fr_1.2fr] text-[9px] ${
        index % 2 === 0 ? "bg-[#ffffff]" : "bg-[#f9fafb]"
      } border-b border-[#e5e7eb]`}
    >
      <div className="px-2 py-[3px] font-medium text-[#1f2937]">{row.cat}</div>
      <div className="px-2 py-[3px] text-[#4b5563]">{row.models}</div>
    </div>
  )
}

export default function LightGuideBundleOlympus() {
  return (
    <div className="w-[794px] h-[1123px] bg-[#ffffff] relative font-sans text-[11px]">
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

      {/* Main Content Area */}
      <div className="flex mt-3 px-6">
        {/* Left Column: Tables */}
        <div className="w-[58%] pr-3">
          <TableHeader />

          {/* Gastroscope */}
          <CategoryHeader label="GASTROSCOPE (GIF)" />
          {gastroscopeData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Colonoscope */}
          <CategoryHeader label="COLONOSCOPE (CF)" />
          {colonoscopeData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Pediatric Colonoscope */}
          <CategoryHeader label="PEDIATRIC COLONOSCOPE (PCF)" />
          {pcfData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Duodenoscope */}
          <CategoryHeader label="DUODENOSCOPE (TJF)" />
          {duodenoscopeData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}
        </div>

        {/* Right Column: Product Images */}
        <div className="w-[42%] pl-3 relative">
          {/* Light guide bundle image */}
          <div className="relative h-[450px]">
            <Image
              src="/images/light-guide-bundle-olympus.png"
              alt="Olympus light guide bundle fiber optic assembly"
              fill
              className="object-contain"
            />
          </div>

          {/* Product notes */}
          <div className="mt-6 space-y-2 text-[9px] text-[#4b5563] leading-relaxed">
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                <strong className="text-[#1f2937]">OEM-EQUIVALENT</strong> replacement
                part for endoscope repair. Fitment and optical performance verified
                against OEM specifications.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                High-quality fiber optic bundles ensure optimal light transmission
                for clear endoscopic imaging.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                Special models are available upon request. Contact us for custom
                specifications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[9px] text-[#9ca3af]">
        <span className="text-[#6b7280] font-medium">For Olympus</span>
        <span>www.endotec-med.com</span>
        <span className="text-[#6b7280] font-medium">5</span>
      </div>
    </div>
  )
}
