import Image from "next/image"
import Watermark from "./watermark"

const gastroscopeData = [
  { cat: "CPASY-GIF100", models: "GIF-100" },
  { cat: "CPASY-GIF130", models: "GIF-130" },
  { cat: "CPASY-GIF140", models: "GIF-140" },
  { cat: "CPASY-GIFQ140", models: "GIF-Q140" },
  { cat: "CPASY-GIFXQ140", models: "GIF-XQ140" },
  { cat: "CPASY-GIFQ150", models: "GIF-Q150" },
  { cat: "CPASY-GIF160", models: "GIF-160" },
  { cat: "CPASY-GIFQ160", models: "GIF-Q160" },
  { cat: "CPASY-GIFV70", models: "GIF-V70" },
  { cat: "CPASY-GIFH180", models: "GIF-H180" },
  { cat: "CPASY-GIFQ180", models: "GIF-Q180" },
  { cat: "CPASY-GIFQ260", models: "GIF-Q260" },
  { cat: "CPASY-GIFQ260J", models: "GIF-Q260J" },
  { cat: "CPASY-GIFH260", models: "GIF-H260" },
  { cat: "CPASY-GIFH290", models: "GIF-H290" },
  { cat: "CPASY-GIFHQ290", models: "GIF-HQ290" },
]

const colonoscopeData = [
  { cat: "CPASY-CFV70I", models: "CF-V70I" },
  { cat: "CPASY-CF100L", models: "CF-100L" },
  { cat: "CPASY-CF100TL", models: "CF-100TL" },
  { cat: "CPASY-CF1T100L", models: "CF-1T100L" },
  { cat: "CPASY-CF140L", models: "CF-140L" },
  { cat: "CPASY-CF150I", models: "CF-150I" },
  { cat: "CPASY-CFQ150I", models: "CF-Q150I" },
  { cat: "CPASY-CFQ160AL", models: "CF-Q160AL" },
  { cat: "CPASY-CFQ160L", models: "CF-Q160L" },
  { cat: "CPASY-CFH180AL", models: "CF-H180AL" },
  { cat: "CPASY-CFQ180AL", models: "CF-Q180AL" },
  { cat: "CPASY-CF240I", models: "CF-240I" },
  { cat: "CPASY-CFH260AI", models: "CF-H260AI" },
  { cat: "CPASY-CFQ260AI", models: "CF-Q260AI" },
  { cat: "CPASY-CFH290I", models: "CF-H290I" },
  { cat: "CPASY-CFHQ290I", models: "CF-HQ290I" },
  { cat: "CPASY-CFHQ290L", models: "CF-HQ290L" },
]

const pcfData = [
  { cat: "CPASY-PCF140L", models: "PCF-140L" },
  { cat: "CPASY-PCF160AL", models: "PCF-160AL" },
  { cat: "CPASY-PCFH180AL", models: "PCF-H180AL" },
  { cat: "CPASY-PCFQ180AL", models: "PCF-Q180AL" },
  { cat: "CPASY-PCFQ260JI", models: "PCF-Q260JI" },
]

const duodenoscopeData = [
  { cat: "CPASY-JF130", models: "JF-130" },
  { cat: "CPASY-JF140", models: "JF-140" },
  { cat: "CPASY-JF160F", models: "JF-160F" },
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

export default function CoilPipeAssembly() {
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
        <h1 className="text-[28px] font-bold text-[#2563eb]">Coil Pipe Assembly</h1>
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
        </div>

        {/* Right Column: More tables + images */}
        <div className="w-[42%] pl-3 relative">
          <TableHeader />

          {/* Pediatric Colonoscope */}
          <CategoryHeader label="PEDIATRIC COLONOSCOPE (PCF)" />
          {pcfData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Duodenoscope */}
          <CategoryHeader label="DUODENOSCOPE (JF)" />
          {duodenoscopeData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Product image */}
          <div className="relative h-[280px] mt-4">
            <Image
              src="/images/coil-pipe-assembly.png"
              alt="Coil pipe assembly with stainless steel construction"
              fill
              className="object-contain"
            />
          </div>

          {/* Product notes */}
          <div className="mt-4 space-y-1.5 text-[8px] text-[#4b5563] leading-relaxed">
            <div className="flex items-start gap-1.5">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                High-quality <strong className="text-[#1f2937]">stainless steel</strong> coil pipes.
              </p>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                Excellent flexibility, durability, and smooth torque response.
              </p>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                Designed for reliable endoscope repair and repeated sterilization.
              </p>
            </div>
          </div>

          {/* Summary Box */}
          <div className="mt-3 bg-[#f0f9ff] border border-[#bae6fd] rounded p-2">
            <h3 className="text-[9px] font-semibold text-[#0369a1] mb-1">
              Coil Pipe Assembly Summary
            </h3>
            <div className="grid grid-cols-2 gap-1 text-[8px] text-[#4b5563]">
              <div>Gastroscope: 16</div>
              <div>Colonoscope: 17</div>
              <div>PCF: 5</div>
              <div>Duodenoscope: 3</div>
              <div className="col-span-2 font-semibold text-[#1f2937] border-t border-[#bae6fd] pt-1 mt-1">
                Total: 41 models (For Olympus)
              </div>
            </div>
          </div>
        </div>
      </div>

      <Watermark />

      {/* Footer */}
      <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[9px] text-[#9ca3af]" style={{ zIndex: 11 }}>
        <span className="text-[#6b7280] font-medium">For Olympus</span>
        <span>www.endotec-med.com</span>
        <span className="text-[#6b7280] font-medium">11</span>
      </div>
    </div>
  )
}
