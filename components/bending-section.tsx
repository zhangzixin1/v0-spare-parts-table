import Image from "next/image"

const olympusGastroData = [
  { cat: "BS-01", od: "Φ8.5", thickness: "0.3", id: "Φ4.9", len: "68", models: "GIF-XQ240" },
  { cat: "BS-02", od: "Φ8.5", thickness: "0.3", id: "Φ4.8", len: "68", models: "GIF-Q150, GIF-Q180, GIF-160" },
  { cat: "BS-03", od: "Φ8.5", thickness: "0.3", id: "Φ4.8", len: "73", models: "GIF-V70" },
  { cat: "BS-04", od: "Φ8.7", thickness: "0.25", id: "Φ5.3", len: "68", models: "GIF-Q260" },
  { cat: "BS-05", od: "Φ8.8", thickness: "0.25", id: "Φ5.1", len: "72", models: "GIF-H260" },
  { cat: "BS-06", od: "—", thickness: "—", id: "—", len: "—", models: "GIF-Q260J" },
  { cat: "BS-07", od: "Φ8.8", thickness: "0.3", id: "Φ5.0", len: "73", models: "GIF-Q160" },
  { cat: "BS-08", od: "Φ8.8", thickness: "0.3", id: "Φ5.0", len: "72", models: "GIF-140" },
  { cat: "BS-09", od: "Φ9.0", thickness: "0.3", id: "Φ5.1", len: "72", models: "GIF-Q145" },
  { cat: "BS-10", od: "Φ9.1", thickness: "0.3", id: "Φ5.1", len: "75", models: "GIF-H180" },
  { cat: "BS-11", od: "Φ8.9", thickness: "0.25", id: "Φ5.1", len: "65.6", models: "GIF-H190" },
  { cat: "BS-12", od: "Φ9.5", thickness: "0.3", id: "Φ5.5", len: "74.5", models: "GIF-HQ190" },
  { cat: "BS-13", od: "Φ9.5", thickness: "0.3", id: "Φ5.5", len: "75", models: "GIF-Q140" },
]

const olympusColonoData = [
  { cat: "BS-14", od: "Φ9.7", thickness: "0.3", id: "Φ5.7", len: "99", models: "PCF-160AL, PCF-Q180AL, PCF-240L" },
  { cat: "BS-15", od: "Φ9.7", thickness: "0.3", id: "Φ5.7", len: "98", models: "PCF-Q260AL" },
  { cat: "BS-16", od: "Φ10.2", thickness: "0.3", id: "Φ6.0", len: "99", models: "PCF-H180AL" },
  { cat: "BS-17", od: "Φ10.4", thickness: "0.3", id: "Φ6.2", len: "96", models: "PCF-H190L" },
  { cat: "BS-18", od: "Φ10.85", thickness: "0.3", id: "Φ6.6", len: "98", models: "PCF-H190DL" },
  { cat: "BS-19", od: "Φ10.9", thickness: "0.3", id: "Φ6.7", len: "111", models: "CF-Q260DL" },
  { cat: "BS-20", od: "Φ10.9", thickness: "0.4", id: "Φ6.5", len: "111", models: "CF-240L" },
  { cat: "BS-22", od: "Φ11.7", thickness: "0.4", id: "Φ7.3", len: "113", models: "CF-Q160AL, CF-Q180AL, CF-Q160I" },
  { cat: "BS-23", od: "Φ11.7", thickness: "0.4", id: "Φ7.3", len: "112", models: "CF-H180AL, CF-H260AL" },
  { cat: "BS-24", od: "—", thickness: "—", id: "—", len: "—", models: "CF-Q260AI" },
  { cat: "BS-25", od: "Φ11.7", thickness: "0.4", id: "Φ7.3", len: "109", models: "CF-HQ190" },
]

const olympusDuodenoData = [
  { cat: "BS-21", od: "Φ11.0", thickness: "0.3", id: "Φ6.4", len: "54", models: "TJF-260, TJF-240, TJF-160" },
]

const olympusBronchData = [
  { cat: "BS-26", od: "Φ4.65", thickness: "0.15", id: "Φ3.2", len: "49.5", models: "11272CU1" },
  { cat: "BS-27", od: "Φ3.7", thickness: "0.15", id: "Φ3.4", len: "35", models: "LF-GP" },
  { cat: "BS-28", od: "Φ3.2", thickness: "0.12", id: "Φ2.0", len: "32.5", models: "11292BD1" },
]

const pentaxGastroData = [
  { cat: "BS-29", od: "Φ9.1", thickness: "0.25", id: "Φ5.8", len: "72", models: "EG-2990I" },
  { cat: "BS-30", od: "Φ9.1", thickness: "0.25", id: "Φ5.8", len: "66", models: "EG-2990K" },
  { cat: "BS-31", od: "Φ9.1", thickness: "0.25", id: "Φ5.8", len: "70", models: "EG-29i10" },
  { cat: "BS-32", od: "Φ9.1", thickness: "0.25", id: "Φ5.8", len: "70", models: "EG-2990K, EG-29i10, EG-290KP" },
  { cat: "BS-33", od: "Φ9.1", thickness: "0.25", id: "Φ5.8", len: "68.6", models: "EG-290V" },
  { cat: "BS-34", od: "Φ8.3", thickness: "0.25", id: "Φ4.8", len: "64", models: "EG-2770K" },
  { cat: "BS-35", od: "Φ8.3", thickness: "0.25", id: "Φ4.8", len: "63", models: "EG-27i10" },
]

const pentaxColonoData = [
  { cat: "BS-36", od: "Φ11.6", thickness: "0.3", id: "Φ7.1", len: "102", models: "EC-3890FK, EC-3890FKP, EC-3890FKZP" },
  { cat: "BS-37", od: "Φ11.6", thickness: "0.3", id: "Φ7.1", len: "102", models: "EC-380LKP" },
  { cat: "BS-38", od: "Φ11.6", thickness: "0.3", id: "Φ7.1", len: "101", models: "EC-3890SI" },
]

const fujiGastroData = [
  { cat: "BS-39", od: "Φ7.6", thickness: "0.15", id: "Φ4.0", len: "70.7", models: "EG-530FP" },
  { cat: "BS-40", od: "Φ8.3", thickness: "0.25", id: "Φ4.7", len: "70.7", models: "EG-530WR, EG-250WR5" },
  { cat: "BS-41", od: "Φ9.6", thickness: "0.2", id: "Φ5.8", len: "72.5", models: "EG-590WR" },
]

const fujiColonoData = [
  { cat: "BS-42", od: "Φ11.9", thickness: "0.25", id: "Φ9.7", len: "97.8", models: "EC-530WI, EC-530WM, EC-530WL" },
  { cat: "BS-43", od: "Φ11.9", thickness: "0.25", id: "Φ9.7", len: "97.8", models: "EC-250WL5" },
  { cat: "BS-44", od: "Φ11.9", thickness: "0.25", id: "Φ9.7", len: "102.8", models: "EC-590WI4, EC-590WM4, EC-590WL4" },
]

function TableHeader() {
  return (
    <div className="grid grid-cols-[0.7fr_0.5fr_0.4fr_0.5fr_0.4fr_1.2fr] bg-[#1a365d] text-[#ffffff] text-[7px] font-semibold">
      <div className="px-1 py-0.5 border-r border-[#3b6eaa]">Cat. No.</div>
      <div className="px-1 py-0.5 border-r border-[#3b6eaa] text-center">OD</div>
      <div className="px-1 py-0.5 border-r border-[#3b6eaa] text-center">THK</div>
      <div className="px-1 py-0.5 border-r border-[#3b6eaa] text-center">ID</div>
      <div className="px-1 py-0.5 border-r border-[#3b6eaa] text-center">LEN</div>
      <div className="px-1 py-0.5 text-center">Compatibility</div>
    </div>
  )
}

function BrandHeader({ label }: { label: string }) {
  return (
    <div className="bg-[#1e40af] text-[#ffffff] text-[8px] font-bold px-2 py-0.5 mt-1">
      {label}
    </div>
  )
}

function CategoryHeader({ label }: { label: string }) {
  return (
    <div className="bg-[#3b82f6] text-[#ffffff] text-[7px] font-semibold px-2 py-[2px]">
      {label}
    </div>
  )
}

function DataRow({
  row,
  index,
}: {
  row: { cat: string; od: string; thickness: string; id: string; len: string; models: string }
  index: number
}) {
  return (
    <div
      className={`grid grid-cols-[0.7fr_0.5fr_0.4fr_0.5fr_0.4fr_1.2fr] text-[6.5px] ${
        index % 2 === 0 ? "bg-[#ffffff]" : "bg-[#f9fafb]"
      } border-b border-[#e5e7eb]`}
    >
      <div className="px-1 py-[1px] font-medium text-[#1f2937]">{row.cat}</div>
      <div className="px-1 py-[1px] text-center text-[#374151]">{row.od}</div>
      <div className="px-1 py-[1px] text-center text-[#374151]">{row.thickness}</div>
      <div className="px-1 py-[1px] text-center text-[#374151]">{row.id}</div>
      <div className="px-1 py-[1px] text-center text-[#374151]">{row.len}</div>
      <div className="px-1 py-[1px] text-[6px] text-[#4b5563]">{row.models}</div>
    </div>
  )
}

export default function BendingSection() {
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
      <div className="pt-5 pl-6 pr-[140px]">
        <h1 className="text-[28px] font-bold text-[#2563eb]">Bending Section</h1>
        <div className="w-full h-[1px] bg-[#d1d5db] mt-1" />
      </div>

      {/* Main Content Area */}
      <div className="flex mt-1 px-6">
        {/* Left Column: Olympus */}
        <div className="w-[50%] pr-1.5">
          <BrandHeader label="For Olympus" />
          <TableHeader />
          <CategoryHeader label="GASTROSCOPE (GIF)" />
          {olympusGastroData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}
          <CategoryHeader label="COLONOSCOPE (CF / PCF)" />
          {olympusColonoData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}
          <CategoryHeader label="DUODENOSCOPE (TJF)" />
          {olympusDuodenoData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}
          <CategoryHeader label="BRONCHOSCOPE / OTHER" />
          {olympusBronchData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}
        </div>

        {/* Right Column: Pentax + Fujifilm + Image */}
        <div className="w-[50%] pl-1.5">
          {/* Pentax */}
          <BrandHeader label="For Pentax" />
          <TableHeader />
          <CategoryHeader label="GASTROSCOPE" />
          {pentaxGastroData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}
          <CategoryHeader label="COLONOSCOPE" />
          {pentaxColonoData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Fujifilm */}
          <BrandHeader label="For Fujifilm" />
          <TableHeader />
          <CategoryHeader label="GASTROSCOPE" />
          {fujiGastroData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}
          <CategoryHeader label="COLONOSCOPE" />
          {fujiColonoData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Product Image */}
          <div className="relative h-[200px] mt-2">
            <Image
              src="/images/bending-section.png"
              alt="Bending section metal mesh assembly"
              fill
              className="object-contain"
            />
          </div>

          {/* Summary Box */}
          <div className="mt-1 bg-[#f0f9ff] border border-[#bae6fd] rounded p-1.5">
            <h3 className="text-[8px] font-semibold text-[#0369a1] mb-1">
              Bending Section Summary
            </h3>
            <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[7px] text-[#4b5563]">
              <div>Olympus: 28 models</div>
              <div>Pentax: 10 models</div>
              <div>Fujifilm: 6 models</div>
              <div className="font-semibold text-[#1f2937]">Total: 44 models</div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-1 bg-[#f8fafc] border border-[#e2e8f0] rounded p-1.5">
            <h4 className="text-[7px] font-semibold text-[#475569] mb-0.5">Column Legend</h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[6px] text-[#64748b]">
              <div>OD = Outer Diameter (mm)</div>
              <div>ID = Inner Diameter (mm)</div>
              <div>THK = Thickness (mm)</div>
              <div>LEN = Length (mm)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[9px] text-[#9ca3af]">
        <span className="text-[#6b7280] font-medium">All Brands</span>
        <span>www.endotec-med.com</span>
        <span className="text-[#6b7280] font-medium">9</span>
      </div>
    </div>
  )
}
