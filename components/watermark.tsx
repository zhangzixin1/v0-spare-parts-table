export default function Watermark() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 10 }}
      aria-hidden="true"
    >
      <div
        className="absolute"
        style={{
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          transform: "rotate(-30deg)",
          display: "flex",
          flexDirection: "column",
          gap: "80px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Array.from({ length: 12 }).map((_, rowIdx) => (
          <div
            key={rowIdx}
            className="flex gap-[100px] whitespace-nowrap"
          >
            {Array.from({ length: 8 }).map((_, colIdx) => (
              <span
                key={colIdx}
                className="text-[16px] font-semibold tracking-widest select-none"
                style={{
                  color: "rgba(180, 190, 210, 0.18)",
                }}
              >
                endotec-med.com
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
