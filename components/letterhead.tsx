"use client"

import Image from "next/image"

export default function Letterhead() {
  return (
    <div className="flex flex-col gap-8 items-center p-8 bg-[#f5f5f7]">
      {/* A4 信纸 */}
      <div
        className="relative bg-white shadow-2xl"
        style={{
          width: '210mm',
          height: '297mm',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
        }}
      >
        {/* 顶部装饰条 */}
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#1a365d]" />
        <div className="absolute top-[4px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#b8860b] via-[#d4a84b] to-[#b8860b]" />

        {/* 页眉 */}
        <div className="absolute top-8 left-10 right-10 flex justify-between items-start">
          {/* Logo */}
          <Image
            src="/images/endotec-logo.png"
            alt="ENDOTEC PARTS"
            width={140}
            height={60}
            className="object-contain"
          />

          {/* 联系信息 */}
          <div className="text-right text-[9px] text-[#1a365d]/70 leading-relaxed">
            <p className="font-medium text-[#1a365d]">ENDOTEC Medical Parts Co., Ltd.</p>
            <p className="mt-1">2050 Dingsheng Road, Songjiang District</p>
            <p>Shanghai, China</p>
            <p className="mt-1">T: +86 182 1700 2600</p>
            <p>E: info@endotec-med.com</p>
            <p>W: www.endotec-med.com</p>
          </div>
        </div>

        {/* 页眉下方分隔线 */}
        <div className="absolute top-[100px] left-10 right-10 h-[1px] bg-[#e5e7eb]" />

        {/* 内容区域（示意） */}
        <div className="absolute top-[130px] left-10 right-10 bottom-[80px]">
          <div className="text-[11px] text-[#9ca3af] italic">
            [Letter content area]
          </div>
        </div>

        {/* 页脚 */}
        <div className="absolute bottom-8 left-10 right-10">
          {/* 分隔线 */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d4a84b] to-transparent mb-4" />

          {/* 页脚内容 */}
          <div className="flex justify-between items-center text-[8px] text-[#1a365d]/50">
            <p>Endoscope Components & Repair Parts</p>
            <p className="italic">"For Trust We Deliver"</p>
            <p>www.endotec-med.com</p>
          </div>
        </div>

        {/* 左侧装饰线 */}
        <div className="absolute top-[120px] bottom-[100px] left-0 w-[3px] bg-gradient-to-b from-[#1a365d] via-[#1a365d]/20 to-transparent" />
      </div>

      <p className="text-[12px] text-gray-400">A4 Letterhead (210mm × 297mm)</p>
    </div>
  )
}
