import Image from "next/image"

const valvesData = [
  { cat: "OLY-443", name: "Suction Valve MH-443", brand: "Olympus" },
  { cat: "OLY-438", name: "Air/Water Valve MH-438", brand: "Olympus" },
  { cat: "PT-120", name: "Air/Water Valve OF-120", brand: "Pentax" },
  { cat: "PT-188", name: "Air/Water Valve OF-188", brand: "Pentax" },
]

const waterBottlesData = [
  { cat: "OLY-901", name: "Water Bottle MAJ-901", brand: "Olympus" },
  { cat: "OLY-902", name: "Water Bottle MAJ-902", brand: "Olympus" },
  { cat: "WT-4", name: "Water Bottle WT-4", brand: "Fujifilm" },
]

const accessoriesData = [
  { cat: "OLY-553", name: "Resistant Soaking Cap MH-553", brand: "Olympus" },
]

function TableHeader() {
  return (
    <div className="grid grid-cols-[0.8fr_1.4fr_0.6fr] bg-[#1a365d] text-[#ffffff] text-[10px] font-semibold">
      <div className="px-2 py-1.5 border-r border-[#3b6eaa]">Catalog No.</div>
      <div className="px-2 py-1.5 border-r border-[#3b6eaa]">Product Name</div>
      <div className="px-2 py-1.5">Brand</div>
    </div>
  )
}

function CategoryHeader({ label }: { label: string }) {
  return (
    <div className="bg-[#3b82f6] text-[#ffffff] text-[10px] font-semibold px-2 py-1 mt-2">
      {label}
    </div>
  )
}

function DataRow({
  row,
  index,
}: {
  row: { cat: string; name: string; brand: string }
  index: number
}) {
  return (
    <div
      className={`grid grid-cols-[0.8fr_1.4fr_0.6fr] text-[9px] ${
        index % 2 === 0 ? "bg-[#ffffff]" : "bg-[#f9fafb]"
      } border-b border-[#e5e7eb]`}
    >
      <div className="px-2 py-[4px] font-medium text-[#1f2937]">{row.cat}</div>
      <div className="px-2 py-[4px] text-[#4b5563]">{row.name}</div>
      <div className="px-2 py-[4px] text-[#374151]">{row.brand}</div>
    </div>
  )
}

export default function SpareParts() {
  return (
    <div className="w-[794px] h-[1123px] bg-[#ffffff] relative font-sans text-[11px]">
      {/* Header - Logo */}
      <div className="absolute top-4 right-6">
        <Image
          src="/images/endotec-logo.jpg"
          alt="ENDOTEC PARTS logo"
          width={100}
          height={50}
          className="object-contain"
        />
      </div>

      {/* Page Title */}
      <div className="pt-6 pl-6 pr-[140px]">
        <h1 className="text-[28px] font-bold text-[#2563eb]">Spare Parts & Accessories</h1>
        <div className="w-full h-[1px] bg-[#d1d5db] mt-2" />
      </div>

      {/* Main Content Area */}
      <div className="flex mt-3 px-6">
        {/* Left Column: Tables */}
        <div className="w-[55%] pr-4">
          <TableHeader />

          {/* Valves */}
          <CategoryHeader label="VALVES" />
          {valvesData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Water Bottles */}
          <CategoryHeader label="WATER BOTTLES" />
          {waterBottlesData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Accessories */}
          <CategoryHeader label="ACCESSORIES" />
          {accessoriesData.map((row, i) => (
            <DataRow key={row.cat} row={row} index={i} />
          ))}

          {/* Repair Tools Section */}
          <CategoryHeader label="REPAIR TOOLS" />
          <div className="bg-[#ffffff] border-b border-[#e5e7eb] p-3">
            <div className="space-y-2 text-[9px] text-[#4b5563]">
              <div className="flex items-start gap-2">
                <span className="text-[#2563eb] font-bold">1.</span>
                <div>
                  <p className="font-medium text-[#1f2937]">
                    Precision Rigid Endoscope Repair Tool Set
                  </p>
                  <p className="text-[8px]">Complete tool kit for rigid endoscope maintenance</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#2563eb] font-bold">2.</span>
                <div>
                  <p className="font-medium text-[#1f2937]">
                    Universal Flexible Endoscope Repair Tool Kit
                  </p>
                  <p className="text-[8px]">Comprehensive toolkit for flexible endoscope repair</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Product Images */}
        <div className="w-[45%] pl-2 relative">
          {/* Valves Image */}
          <div className="relative h-[180px] bg-[#f8fafc] rounded-lg border border-[#e2e8f0] p-2">
            <p className="text-[9px] font-semibold text-[#475569] mb-1">Valves</p>
            <div className="relative h-[140px]">
              <Image
                src="/images/spare-parts-valves.jpg"
                alt="Endoscope valves - suction and air/water valves"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Water Bottles Image */}
          <div className="relative h-[180px] bg-[#f8fafc] rounded-lg border border-[#e2e8f0] p-2 mt-3">
            <p className="text-[9px] font-semibold text-[#475569] mb-1">Water Bottles</p>
            <div className="relative h-[140px]">
              <Image
                src="/images/spare-parts-bottles.jpg"
                alt="Water bottles for endoscope irrigation"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Notes */}
          <div className="mt-4 space-y-2 text-[9px] text-[#4b5563] leading-relaxed">
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                All spare parts are <strong className="text-[#1f2937]">OEM-equivalent</strong> replacement
                components.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                Compatible with major brands: <strong className="text-[#1f2937]">Olympus, Pentax, Fujifilm</strong>.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#e6a000] mt-0.5 shrink-0">&#x25C6;</span>
              <p>
                Additional models available upon request.
              </p>
            </div>
          </div>

          {/* Summary Box */}
          <div className="mt-4 bg-[#f0f9ff] border border-[#bae6fd] rounded p-2">
            <h3 className="text-[9px] font-semibold text-[#0369a1] mb-1.5">
              Spare Parts Summary
            </h3>
            <div className="grid grid-cols-2 gap-1 text-[8px] text-[#4b5563]">
              <div>Valves: 4</div>
              <div>Water Bottles: 3</div>
              <div>Accessories: 1</div>
              <div>Repair Tools: 2</div>
              <div className="col-span-2 font-semibold text-[#1f2937] border-t border-[#bae6fd] pt-1 mt-1">
                Total: 10 items
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[9px] text-[#9ca3af]">
        <span className="text-[#6b7280] font-medium">Multi-Brand Compatible</span>
        <span>www.endotec-med.com</span>
        <span className="text-[#6b7280] font-medium">13</span>
      </div>
    </div>
  )
}
