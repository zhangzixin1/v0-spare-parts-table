import SpareParts from "@/components/spare-parts"
import LightGuideBundleOlympus from "@/components/light-guide-bundle-olympus"

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[#e5e7eb] gap-8 p-8">
      <SpareParts />
      <LightGuideBundleOlympus />
    </main>
  )
}
