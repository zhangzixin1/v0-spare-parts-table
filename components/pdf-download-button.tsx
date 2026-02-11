"use client"

import { useState } from "react"

export default function PdfDownloadButton() {
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleDownload = async () => {
    setLoading(true)
    setProgress(0)

    try {
      const html2canvas = (await import("html2canvas")).default
      const { jsPDF } = await import("jspdf")

      // Page pixel dimensions match our components (794 x 1123)
      const pagePixelWidth = 794
      const pagePixelHeight = 1123

      // Use the exact aspect ratio of our pages for the PDF page size
      // A4 width = 210mm, height = 210 * (1123/794) = 296.87mm
      const pdfPageWidth = 210
      const pdfPageHeight = pdfPageWidth * (pagePixelHeight / pagePixelWidth)

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [pdfPageWidth, pdfPageHeight],
      })

      const pages = document.querySelectorAll("[data-catalog-page]")
      const totalPages = pages.length

      for (let i = 0; i < totalPages; i++) {
        setProgress(Math.round(((i + 1) / totalPages) * 100))

        const page = pages[i] as HTMLElement

        const canvas = await html2canvas(page, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
          logging: false,
          width: pagePixelWidth,
          height: pagePixelHeight,
        })

        const imgData = canvas.toDataURL("image/jpeg", 0.95)

        if (i > 0) {
          pdf.addPage([pdfPageWidth, pdfPageHeight])
        }

        pdf.addImage(imgData, "JPEG", 0, 0, pdfPageWidth, pdfPageHeight)
      }

      pdf.save("ENDOTEC-Parts-Catalog.pdf")
    } catch (error) {
      console.error("PDF generation failed:", error)
    } finally {
      setLoading(false)
      setProgress(0)
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg bg-[#1e3a5f] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#2a4d7a] disabled:opacity-70"
      style={{ zIndex: 9999 }}
    >
      {loading ? (
        <>
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span>Generating PDF... {progress}%</span>
        </>
      ) : (
        <>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Download PDF</span>
        </>
      )}
    </button>
  )
}
