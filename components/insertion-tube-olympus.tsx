import Image from "next/image"
import Watermark from "./watermark"

const gastroscopeData = [
  { cat: "ISTO-1291030", od: "12.9", len: "1030", models: "GIF-XTQ160" },
  {
    cat: "ISTO-1261030",
    od: "12.6",
    len: "1030",
    models: "GIF-2TH180, GIF-2T160",
  },
  {
    cat: "ISTO-1091030",
    od: "10.9",
    len: "1030",
    models: "GIF-1TH190, GIF-Q160Z",
  },
  { cat: "ISTO-1051030", od: "10.5", len: "1030", models: "GIF-FQ260Z" },
  {
    cat: "ISTO-0991030",
    od: "9.9",
    len: "1030",
    models: "GIF-HQ190, GIF-H180J",
  },
  {
    cat: "ISTO-0981030",
    od: "9.8",
    len: "1030",
    models: "GIF-H180, GIF-Q160, GIF-140",
  },
  {
    cat: "ISTO-0961030",
    od: "9.6",
    len: "1030",
    models: "GIF-H290Z, GIF-H290EC",
  },
  {
    cat: "ISTO-0921030",
    od: "9.2",
    len: "1030",
    models: "GIF-H190, GIF-H185",
  },
  { cat: "ISTO-0901030", od: "9.0", len: "1030", models: "GIF-160" },
  { cat: "ISTO-0881030", od: "8.8", len: "1030", models: "GIF-Q180" },
  { cat: "ISTO-0581100", od: "5.8", len: "1100", models: "GIF-XP190N" },
  { cat: "ISTO-0491100", od: "4.9", len: "1100", models: "GIF-N180" },
]

const duodenoscopeData = [
  {
    cat: "ISTO-1131240",
    od: "11.3",
    len: "1240",
    models: "TJF-Q190V, TJF-Q180V",
  },
]

const colonoscopeData = [
  { cat: "ISTO-1371665", od: "13.7", len: "1665", models: "CF-2T160L" },
  { cat: "ISTO-1321330", od: "13.2", len: "1330", models: "CF-FH260AZI" },
  { cat: "ISTO-1321680", od: "13.2", len: "1680", models: "CF-FH260AZL" },
  {
    cat: "ISTO-1281330",
    od: "12.8",
    len: "1330",
    models: "CF-HQ190I, CF-H190I, CF-H185I",
  },
  {
    cat: "ISTO-1281680",
    od: "12.8",
    len: "1680",
    models: "CF-HQ190L, CF-H190L",
  },
  {
    cat: "ISTO-1181330",
    od: "11.8",
    len: "1330",
    models: "PCF-H190DI, PCF-H290ZI",
  },
  {
    cat: "ISTO-1181680",
    od: "11.8",
    len: "1680",
    models: "PCF-H190DL, PCF-H290ZL",
  },
  { cat: "ISTO-1151330", od: "11.5", len: "1330", models: "PCF-H190I" },
  { cat: "ISTO-1151680", od: "11.5", len: "1680", models: "PCF-H190L" },
  { cat: "ISTO-1051330", od: "10.5", len: "1330", models: "PCF-H190TI" },
  { cat: "ISTO-1051680", od: "10.5", len: "1680", models: "PCF-H190TL" },
  { cat: "ISTO-0951330", od: "9.5", len: "1330", models: "PCF-PH190I" },
  { cat: "ISTO-0951680", od: "9.5", len: "1680", models: "PCF-PH190L" },
]

const bronchoscopeData = [
  {
    cat: "ISTO-60600",
    od: "6.0",
    len: "600",
    models: "BF-1TH190, BF-1T180, BF-1TQ290, BF-1T260",
  },
  { cat: "ISTO-57600", od: "5.7", len: "600", models: "BF-H290" },
  {
    cat: "ISTO-51600",
    od: "5.1",
    len: "600",
    models: "BF-H190, BF-Q180",
  },
  {
    cat: "ISTO-49600",
    od: "4.9",
    len: "600",
    models: "BF-Q190, BF-Q290, BF-260",
  },
  { cat: "ISTO-41600", od: "4.1", len: "600", models: "BF-P290" },
  {
    cat: "ISTO-37600",
    od: "3.7",
    len: "600",
    models: "BF-MP190F, BF-MP290F",
  },
]

function TableHeader() {
  return (
    <div className="grid grid-cols-[1fr_0.6fr_0.8fr_1.2fr] bg-[#1a365d] text-[#ffffff] text-[10px] font-semibold">
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
      <div className="px-2 py-1.5 border-r border-[#3b6eaa] text-center">
        Working Length
        <br />
        (mm)
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
  row: { cat: string; od: string; len: string; models: string }
  index: number
}) {
  return (
    <div
      className={`grid grid-cols-[1fr_0.6fr_0.8fr_1.2fr] text-[9px] ${
        index % 2 === 0 ? "bg-[#ffffff]" : "bg-[#f9fafb]"
      } border-b border-[#e5e7eb]`}
    >
      <div className="px-2 py-[3px] font-medium text-[#1f2937]">{row.cat}</div>
      <div className="px-2 py-[3px] text-center text-[#374151]">{row.od}</div>
      <div className="px-2 py-[3px] text-center text-[#374151]">{row.len}</div>
      <div className="px-2 py-[3px] text-[8px] text-[#4b5563]">
        {row.models}
      </div>
    </div>
  )
}

export default function InsertionTubeOlympus() {
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
        <h1 className="text-[28px] font-bold text-[#2563eb]">Insertion Tube</h1>
        <div className="w-full h-[1px] bg-[#d1d5db] mt-2" />
      </div>

      {/* Main Content Area */}
      <div className="flex mt-3 px-6">
        {/* Left Column: Tables */}
        <div className="w-[58%] pr-3">
          <TableHeader />

          {/* Gastroscope */}
          <CategoryHeader label="GASTROSCOPE" />
          {gastroscopeData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Duodenoscope */}
          <CategoryHeader label="DUODENOSCOPE" />
          {duodenoscopeData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Colonoscope */}
          <CategoryHeader label="COLONOSCOPE" />
          {colonoscopeData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Bronchoscope */}
          <CategoryHeader label="BRONCHOSCOPE" />
          {bronchoscopeData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}
        </div>

        {/* Right Column: Product Images */}
        <div className="w-[42%] pl-3 relative">
          {/* Endoscope product image */}
          <div className="relative h-[700px]">
            <Image
              src="/images/endoscope-product.png"
              alt="Endoscope insertion tubes showing two complete flexible endoscopes with control bodies and insertion tube sections"
              fill
              className="object-contain"
            />
          </div>

          {/* Product notes */}
          <div className="mt-4 space-y-2 text-[9px] text-[#4b5563] leading-relaxed">
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                <strong className="text-[#1f2937]">PREMIUM TUBES</strong> has
                different production processes and can provide reports such as
                biocompatibility. It has better durability than ordinary models.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                Matching adapter rings could be ordered subject to conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Watermark />

      {/* Footer */}
      <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[9px] text-[#9ca3af]" style={{ zIndex: 11 }}>
        <span className="text-[#6b7280] font-medium">For Olympus</span>
        <span>www.endotec-med.com</span>
        <span className="text-[#6b7280] font-medium">2</span>
      </div>
    </div>
  )
}
