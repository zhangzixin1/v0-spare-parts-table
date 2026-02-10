import Image from "next/image"
import Watermark from "./watermark"

// Pentax data
const pentaxGastroscopeData = [
  { cat: "ISTP-1001050", od: "10.0", len: "1050", models: "EG-2930K" },
  { cat: "ISTP-0981050", od: "9.8", len: "1050", models: "EG-2990Zi, EG-29i10, EG29-i10N, EG-2990i, EG-2990K" },
  { cat: "ISTP-0901050", od: "9.0", len: "1050", models: "EG-27i10, EG-2790i, EG-2770K" },
]

const pentaxColonoscopeData = [
  { cat: "ISTP-0981300", od: "9.8", len: "1300", models: "EC-2990Mi" },
  { cat: "ISTP-0981500", od: "9.8", len: "1500", models: "EC-2990Fi" },
  { cat: "ISTP-0981700", od: "9.8", len: "1700", models: "EC-2990Li" },
  { cat: "ISTP-1161300", od: "11.6", len: "1300", models: "EC-3490Mi, EC34-i10M" },
  { cat: "ISTP-1161500", od: "11.6", len: "1500", models: "EC-3490Fi, EC34-I10f" },
  { cat: "ISTP-1161700", od: "11.6", len: "1700", models: "EC-3490Li, EC34-i10L" },
  { cat: "ISTP-1321300", od: "13.2", len: "1300", models: "EC-3890MZi, EC38-I10M2, EC38-i10M" },
  { cat: "ISTP-1321500", od: "13.2", len: "1500", models: "EC-3890FZi, EC38-i10F, EC38-I10f2" },
  { cat: "ISTP-1321700", od: "13.2", len: "1700", models: "EC-3890LZi, EC38-i10L, EC-3870K" },
]

// Fujifilm data
const fujiGastroscopeData = [
  { cat: "ISTF-1081100", od: "10.8", len: "1100", models: "EG-760CT, EG-530CT" },
  { cat: "ISTF-0981100", od: "9.8", len: "1100", models: "EG-600ZW, EG-580RD, EG-760Z" },
  { cat: "ISTF-0951100", od: "9.5", len: "1100", models: "EG-590WR, EG-250WR" },
  { cat: "ISTF-0931100", od: "9.3", len: "1100", models: "EG-600WR, EG-760R, EG-720R, EG-530WR" },
  { cat: "ISTF-0591100", od: "5.9", len: "1100", models: "EG-580NW2, EG-740N" },
]

const fujiColonoscopeData = [
  { cat: "ISTF-1281330", od: "12.8", len: "1330", models: "EC-600ZW/M, EC-760Z-V, EC-720R/M, EC-530WM3" },
  { cat: "ISTF-1281520", od: "12.8", len: "1520", models: "EC-720R/I, EC-530WI3" },
  { cat: "ISTF-1281690", od: "12.8", len: "1690", models: "EC-600ZW/L, EC-760S-V, EC-720R/L, EC-530WL3" },
  { cat: "ISTF-1201330", od: "12.0", len: "1330", models: "EC-600W/M, EC-760R-M" },
  { cat: "ISTF-1201520", od: "12.0", len: "1520", models: "EC-600W/I, EC-760R-I" },
  { cat: "ISTF-1201690", od: "12.0", len: "1690", models: "EC-600W/L, EC-760R-L" },
  { cat: "ISTF-1181330", od: "11.8", len: "1330", models: "EC-760ZP-V, EC-760ZP-M" },
  { cat: "ISTF-1181690", od: "11.8", len: "1690", models: "EC-760ZP-L" },
  { cat: "ISTF-1151330", od: "11.5", len: "1330", models: "EC-760P-V, EC-760P-M" },
  { cat: "ISTF-1151690", od: "11.5", len: "1690", models: "EC-760P-L" },
  { cat: "ISTF-1051330", od: "10.5", len: "1330", models: "EC-580RD/M" },
  { cat: "ISTF-1051690", od: "10.5", len: "1690", models: "EC-580RD/L" },
]

function TableHeader() {
  return (
    <div className="grid grid-cols-[1fr_0.5fr_0.6fr_1.2fr] bg-[#1a365d] text-[#ffffff] text-[8px] font-semibold">
      <div className="px-1.5 py-1 border-r border-[#3b6eaa]">
        Catalog<br />Number
      </div>
      <div className="px-1 py-1 border-r border-[#3b6eaa] text-center">
        OD<br />(mm)
      </div>
      <div className="px-1 py-1 border-r border-[#3b6eaa] text-center">
        Length<br />(mm)
      </div>
      <div className="px-1.5 py-1">
        Compatibility<br />(Model)
      </div>
    </div>
  )
}

function BrandHeader({ label, color }: { label: string; color: string }) {
  return (
    <div className={`${color} text-[#ffffff] text-[9px] font-bold px-2 py-1 mt-2`}>
      {label}
    </div>
  )
}

function CategoryHeader({ label }: { label: string }) {
  return (
    <div className="bg-[#3b82f6] text-[#ffffff] text-[8px] font-semibold px-1.5 py-0.5 mt-0.5">
      {label}
    </div>
  )
}

function DataRow({
  row,
  index,
}: {
  row: { cat: string; od: string; len: string; models: string }
  index: number
}) {
  return (
    <div
      className={`grid grid-cols-[1fr_0.5fr_0.6fr_1.2fr] text-[7.5px] ${
        index % 2 === 0 ? "bg-[#ffffff]" : "bg-[#f9fafb]"
      } border-b border-[#e5e7eb]`}
    >
      <div className="px-1.5 py-[2px] font-medium text-[#1f2937]">{row.cat}</div>
      <div className="px-1 py-[2px] text-center text-[#374151]">{row.od}</div>
      <div className="px-1 py-[2px] text-center text-[#374151]">{row.len}</div>
      <div className="px-1.5 py-[2px] text-[7px] text-[#4b5563]">{row.models}</div>
    </div>
  )
}

export default function InsertionTubePentaxFuji() {
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
        <h1 className="text-[28px] font-bold text-[#2563eb]">Insertion Tube</h1>
        <div className="w-full h-[1px] bg-[#d1d5db] mt-2" />
      </div>

      {/* Main Content Area - Two Columns */}
      <div className="flex mt-2 px-6 gap-4">
        {/* Left Column: Pentax */}
        <div className="w-[48%]">
          <BrandHeader label="PENTAX" color="bg-[#1e40af]" />
          <TableHeader />
          <CategoryHeader label="GASTROSCOPE" />
          {pentaxGastroscopeData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}
          <CategoryHeader label="COLONOSCOPE" />
          {pentaxColonoscopeData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Product Notes */}
          <div className="mt-4 space-y-1.5 text-[8px] text-[#4b5563] leading-relaxed">
            <div className="flex items-start gap-1.5">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                <strong className="text-[#1f2937]">PREMIUM TUBES</strong> has different production processes and can provide reports such as biocompatibility. It has better durability than ordinary models.
              </p>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>Matching adapter rings could be ordered subject to conditions.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Fujifilm */}
        <div className="w-[52%]">
          <BrandHeader label="FUJIFILM" color="bg-[#15803d]" />
          <TableHeader />
          <CategoryHeader label="GASTROSCOPE" />
          {fujiGastroscopeData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}
          <CategoryHeader label="COLONOSCOPE" />
          {fujiColonoscopeData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Product Image */}
          <div className="relative h-[200px] mt-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] p-2">
            <Image
              src="/images/insertion-tube-pentax-fuji.png"
              alt="Insertion tubes for Pentax and Fujifilm endoscopes"
              fill
              className="object-contain p-2"
            />
          </div>
        </div>
      </div>

      {/* Summary Box */}
      <div className="absolute bottom-16 left-6 right-6">
        <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-lg p-3">
          <p className="text-[9px] font-bold text-[#1e40af] mb-1.5">PRODUCT SUMMARY</p>
          <div className="grid grid-cols-3 gap-2 text-[8px] text-[#475569]">
            <div>Pentax Gastroscope: 3</div>
            <div>Pentax Colonoscope: 9</div>
            <div>Pentax Total: 12</div>
            <div>Fujifilm Gastroscope: 5</div>
            <div>Fujifilm Colonoscope: 12</div>
            <div>Fujifilm Total: 17</div>
            <div className="col-span-3 font-semibold text-[#1f2937] border-t border-[#bae6fd] pt-1 mt-0.5">
              Grand Total: 29 models
            </div>
          </div>
        </div>
      </div>

      <Watermark />

      {/* Footer */}
      <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[9px] text-[#9ca3af]" style={{ zIndex: 11 }}>
        <span className="text-[#6b7280] font-medium">Pentax & Fujifilm</span>
        <span>www.endotec-med.com</span>
        <span className="text-[#6b7280] font-medium">4</span>
      </div>
    </div>
  )
}
