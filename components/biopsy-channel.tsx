import Image from "next/image"

const olympusData = [
  { cat: "BC-ID1_2-OD1_6-L1000", id: "1.2", od: "1.6", len: "1000" },
  { cat: "BC-ID1_4-OD2_0-L1000", id: "1.4", od: "2.0", len: "1000" },
  { cat: "BC-ID1_6-OD2_2-L1000", id: "1.6", od: "2.2", len: "1000" },
  { cat: "BC-ID1_8-OD2_35-L1000", id: "1.8", od: "2.35", len: "1000" },
  { cat: "BC-ID2_0-OD2_55-L1000", id: "2.0", od: "2.55", len: "1000" },
  { cat: "BC-ID2_0-OD2_55-L1300", id: "2.0", od: "2.55", len: "1300" },
  { cat: "BC-ID2_0-OD2_55-L1854", id: "2.0", od: "2.55", len: "1854" },
  { cat: "BC-ID2_2-OD2_75-L1000", id: "2.2", od: "2.75", len: "1000" },
  { cat: "BC-ID2_2-OD2_75-L1300", id: "2.2", od: "2.75", len: "1300" },
  { cat: "BC-ID2_2-OD2_75-L1854", id: "2.2", od: "2.75", len: "1854" },
  { cat: "BC-ID2_4-OD3_0-L1000", id: "2.4", od: "3.0", len: "1000" },
  { cat: "BC-ID2_6-OD3_2-L1300", id: "2.6", od: "3.2", len: "1300" },
  { cat: "BC-ID2_6-OD3_2-L1854", id: "2.6", od: "3.2", len: "1854" },
  { cat: "BC-ID2_7-OD3_4-L1300", id: "2.7", od: "3.4", len: "1300" },
  { cat: "BC-ID2_8-OD3_55-L1300", id: "2.8", od: "3.55", len: "1300" },
  { cat: "BC-ID2_8-OD3_55-L1854", id: "2.8", od: "3.55", len: "1854" },
  { cat: "BC-ID2_8-OD3_55-L3500", id: "2.8", od: "3.55", len: "3500" },
  { cat: "BC-ID3_0-OD3_8-L1200", id: "3.0", od: "3.8", len: "1200" },
  { cat: "BC-ID3_2-OD4_2-L1854", id: "3.2", od: "4.2", len: "1854" },
  { cat: "BC-ID3_2-OD4_2-L3500", id: "3.2", od: "4.2", len: "3500" },
  { cat: "BC-ID3_7-OD4_7-L1854", id: "3.7", od: "4.7", len: "1854" },
  { cat: "BC-ID4_2-OD5_2-L1854", id: "4.2", od: "5.2", len: "1854" },
]

const pentaxData = [
  { cat: "BC-ID2_0-OD2_45-L1000", id: "2.0", od: "2.45", len: "1000" },
  { cat: "BC-ID2_8-OD3_45-L1854", id: "2.8", od: "3.45", len: "1854" },
  { cat: "BC-ID3_2-OD3_85-L1854", id: "3.2", od: "3.85", len: "1854" },
  { cat: "BC-ID3_2-OD4_0-L1854", id: "3.2", od: "4.0", len: "1854" },
  { cat: "BC-ID3_8-OD4_55-L1854", id: "3.8", od: "4.55", len: "1854" },
  { cat: "BC-ID4_2-OD5_05-L1854", id: "4.2", od: "5.05", len: "1854" },
]

function TableHeader() {
  return (
    <div className="grid grid-cols-[1.4fr_0.5fr_0.5fr_0.6fr] bg-[#1a365d] text-[#ffffff] text-[10px] font-semibold">
      <div className="px-2 py-1.5 border-r border-[#3b6eaa]">
        Catalog
        <br />
        Number
      </div>
      <div className="px-2 py-1.5 border-r border-[#3b6eaa] text-center">
        ID
        <br />
        (mm)
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
  row: { cat: string; id: string; od: string; len: string }
  index: number
}) {
  return (
    <div
      className={`grid grid-cols-[1.4fr_0.5fr_0.5fr_0.6fr] text-[9px] ${
        index % 2 === 0 ? "bg-[#ffffff]" : "bg-[#f9fafb]"
      } border-b border-[#e5e7eb]`}
    >
      <div className="px-2 py-[3px] font-medium text-[#1f2937]">{row.cat}</div>
      <div className="px-2 py-[3px] text-center text-[#374151]">{row.id}</div>
      <div className="px-2 py-[3px] text-center text-[#374151]">{row.od}</div>
      <div className="px-2 py-[3px] text-center text-[#374151]">{row.len}</div>
    </div>
  )
}

export default function BiopsyChannel() {
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
        <h1 className="text-[28px] font-bold text-[#2563eb]">Biopsy Channel</h1>
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
        </div>

        {/* Right Column: Product Images */}
        <div className="w-[42%] pl-3 relative">
          {/* Biopsy channel image */}
          <div className="relative h-[350px]">
            <Image
              src="/images/biopsy-channel.png"
              alt="PTFE biopsy channel tube"
              fill
              className="object-contain"
            />
          </div>

          {/* Product notes */}
          <div className="mt-6 space-y-2 text-[9px] text-[#4b5563] leading-relaxed">
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                Made from <strong className="text-[#1f2937]">medical-grade PTFE</strong> with
                excellent chemical resistance and low friction coefficient.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                Smooth inner surface facilitates easy passage of biopsy forceps
                and other accessories.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                Excellent durability ensures long service life under repeated
                sterilization cycles.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                Various sizes available to match the outside diameter of the
                accessory used.
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
          <div className="mt-5 bg-[#f0f9ff] border border-[#bae6fd] rounded p-3">
            <h3 className="text-[10px] font-semibold text-[#0369a1] mb-2">
              Biopsy Channel Summary
            </h3>
            <div className="grid grid-cols-2 gap-1 text-[8px] text-[#4b5563]">
              <div>Olympus: 22 models</div>
              <div>Pentax: 6 models</div>
              <div className="font-semibold text-[#1f2937]">Total: 28 models</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[9px] text-[#9ca3af]">
        <span className="text-[#6b7280] font-medium">All Brands</span>
        <span>www.endotec-med.com</span>
        <span className="text-[#6b7280] font-medium">8</span>
      </div>
    </div>
  )
}
