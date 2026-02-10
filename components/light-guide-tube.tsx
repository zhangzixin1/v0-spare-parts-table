import Image from "next/image"
import Watermark from "./watermark"

const olympusData = [
  { cat: "LGOLY-13.0-1422", od: "13.0", len: "1422" },
  { cat: "LGOLY-7.2-457", od: "7.2", len: "457" },
  { cat: "LGOLY-7.2-1428", od: "7.2", len: "1428" },
  { cat: "LGOLY-7.2-2123", od: "7.2", len: "2123" },
  { cat: "LGOLY-7.2-2145", od: "7.2", len: "2145" },
  { cat: "LGOLY-7.2-2445", od: "7.2", len: "2445" },
]

const pentaxData = [
  { cat: "LGPTX-13.2-1306", od: "13.2", len: "1306" },
  { cat: "LGPTX-14.2-1445", od: "14.2", len: "1445" },
  { cat: "LGPTX-14.8-1445", od: "14.8", len: "1445" },
  { cat: "LGPTX-13.5-1445", od: "13.5", len: "1445" },
  { cat: "LGPTX-5.8-1755", od: "5.8", len: "1755" },
  { cat: "LGPTX-5.8-1395", od: "5.8", len: "1395" },
  { cat: "LGPTX-5.8-1433", od: "5.8", len: "1433" },
  { cat: "LGPTX-5.8-2035", od: "5.8", len: "2035" },
  { cat: "LGPTX-7.8-1395", od: "7.8", len: "1395" },
  { cat: "LGPTX-7.8-1725", od: "7.8", len: "1725" },
]

const fujifilmData = [
  { cat: "LGFUJI-13.0-1370", od: "13.0", len: "1370" },
  { cat: "LGFUJI-13.2-1305", od: "13.2", len: "1305" },
  { cat: "LGFUJI-Y-TYPE", od: "Y Type", len: "\u2014" },
  { cat: "LGFUJI-13.3-1377", od: "13.3", len: "1377" },
  { cat: "LGFUJI-13.3-1400", od: "13.3", len: "1400" },
  { cat: "LGFUJI-9.0-330", od: "9.0", len: "330" },
  { cat: "LGFUJI-13.7-1186", od: "13.7", len: "1186" },
  { cat: "LGFUJI-13.4-1403", od: "13.4", len: "1403" },
  { cat: "LGFUJI-13.8-1150", od: "13.8", len: "1150" },
]

function TableHeader() {
  return (
    <div className="grid grid-cols-[1.2fr_0.6fr_0.8fr] bg-[#1a365d] text-[#ffffff] text-[10px] font-semibold">
      <div className="px-2 py-1.5 border-r border-[#3b6eaa]">
        Catalog
        <br />
        Number
      </div>
      <div className="px-2 py-1.5 border-r border-[#3b6eaa] text-center">
        OD
        <br />
        (mm)
      </div>
      <div className="px-2 py-1.5 text-center">
        Length
        <br />
        (mm)
      </div>
    </div>
  )
}

function BrandHeader({ label }: { label: string }) {
  return (
    <div className="bg-[#1e40af] text-[#ffffff] text-[11px] font-bold px-2 py-1.5 mt-3">
      {label}
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
      className={`grid grid-cols-[1.2fr_0.6fr_0.8fr] text-[9px] ${
        index % 2 === 0 ? "bg-[#ffffff]" : "bg-[#f9fafb]"
      } border-b border-[#e5e7eb]`}
    >
      <div className="px-2 py-[3px] font-medium text-[#1f2937]">{row.cat}</div>
      <div className="px-2 py-[3px] text-center text-[#374151]">{row.od}</div>
      <div className="px-2 py-[3px] text-center text-[#374151]">{row.len}</div>
    </div>
  )
}

export default function LightGuideTube() {
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
        <h1 className="text-[28px] font-bold text-[#2563eb]">Light Guide Tube</h1>
        <div className="w-full h-[1px] bg-[#d1d5db] mt-2" />
      </div>

      {/* Main Content Area */}
      <div className="flex mt-3 px-6">
        {/* Left Column: Tables */}
        <div className="w-[58%] pr-3">
          {/* Olympus Section */}
          <BrandHeader label="For Olympus" />
          <TableHeader />
          {olympusData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Pentax Section */}
          <BrandHeader label="For Pentax" />
          <TableHeader />
          {pentaxData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Fujifilm Section */}
          <BrandHeader label="For Fujifilm" />
          <TableHeader />
          {fujifilmData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}
        </div>

        {/* Right Column: Product Images */}
        <div className="w-[42%] pl-3 relative">
          {/* Light guide tube image */}
          <div className="relative h-[400px]">
            <Image
              src="/images/light-guide-tube.png"
              alt="Light guide tube with protective sheath"
              fill
              className="object-contain"
            />
          </div>

          {/* Product notes */}
          <div className="mt-6 space-y-2 text-[9px] text-[#4b5563] leading-relaxed">
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                Built with <strong className="text-[#1f2937]">premium optical fibers</strong> and
                protective outer sheath for excellent light transmission.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                High flexibility allows smooth insertion and navigation during
                endoscopic procedures.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                Resistance to repeated sterilization cycles ensures long service
                life and cost efficiency.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                Special sizes are available upon request. Contact us for custom
                specifications.
              </p>
            </div>
          </div>

          {/* Summary Box */}
          <div className="mt-6 bg-[#f0f9ff] border border-[#bae6fd] rounded p-3">
            <h3 className="text-[10px] font-semibold text-[#0369a1] mb-2">
              Light Guide Tube Summary
            </h3>
            <div className="grid grid-cols-2 gap-1 text-[8px] text-[#4b5563]">
              <div>Olympus: 6 models</div>
              <div>Pentax: 10 models</div>
              <div>Fujifilm: 9 models</div>
              <div className="font-semibold text-[#1f2937]">Total: 25 models</div>
            </div>
          </div>
        </div>
      </div>

      <Watermark />

      {/* Footer */}
      <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[9px] text-[#9ca3af]" style={{ zIndex: 11 }}>
        <span className="text-[#6b7280] font-medium">All Brands</span>
        <span>www.endotec-med.com</span>
        <span className="text-[#6b7280] font-medium">7</span>
      </div>
    </div>
  )
}
