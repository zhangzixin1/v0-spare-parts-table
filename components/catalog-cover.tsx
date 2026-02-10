import Image from "next/image"

export default function CatalogCover() {
  return (
    <div className="w-[794px] h-[1123px] bg-[#ffffff] relative overflow-hidden font-sans">
      {/* ===== Top 55%: White background + Products banner + Title ===== */}
      <div className="relative h-[55%] bg-[#ffffff]">
        {/* Logo - top left */}
        <div className="absolute top-6 left-8 z-10">
          <Image
            src="/images/endotec-logo.png"
            alt="ENDOTEC PARTS logo"
            width={120}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Tagline - top right */}
        <p className="absolute top-8 right-8 text-[18px] italic text-[#1a365d] font-serif z-10">
          For trust we deliver
        </p>

        {/* Parts banner image - fills center area */}
        <div className="absolute inset-0 flex items-center justify-center pt-10">
          <div className="relative w-full h-[320px]">
            <Image
              src="/images/endoscope-parts.jpg"
              alt="Endoscope spare parts including valves, tubes, connectors, and accessories"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Main title - centered bottom of top section */}
        <div className="absolute bottom-6 left-0 right-0 text-center z-10">
          <h1 className="text-[56px] font-black text-[#1a365d] tracking-wide leading-none drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)]">
            COMPONENTS
          </h1>
          <p className="text-[16px] text-[#b8860b] font-medium mt-2 tracking-wide drop-shadow-[0_1px_4px_rgba(255,255,255,0.95)]">
            Supporting Your Standard of Care
          </p>
        </div>
      </div>

      {/* ===== Bottom 45%: Endoscope hero image ===== */}
      <div className="relative h-[45%]">
        {/* Gradient transition from white to image */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#ffffff] to-transparent z-10" />

        {/* Endoscope close-up image */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/images/medical-scene.jpg"
            alt="Endoscope control head close-up showing control knobs and insertion tube"
            fill
            className="object-cover object-center"
          />
          {/* Subtle dark blue overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/40 via-transparent to-transparent" />
        </div>

        {/* Bottom bar with website */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#1a365d]/80 flex items-center justify-center z-10">
          <p className="text-[11px] text-[#ffffff]/90 tracking-widest">
            www.endotecparts.com
          </p>
        </div>
      </div>
    </div>
  )
}
