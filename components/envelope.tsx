"use client"

import Image from "next/image"

export default function Envelope() {
  return (
    <div className="flex flex-col gap-8 items-center p-8 bg-[#f5f5f7]">
      {/* DL 信封 (220mm x 110mm) */}
      <div
        className="relative bg-white shadow-2xl"
        style={{
          width: '220mm',
          height: '110mm',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
        }}
      >
        {/* 顶部装饰条 */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1a365d]" />
        <div className="absolute top-[3px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#b8860b] via-[#d4a84b] to-[#b8860b]" />

        {/* 左上角：Logo + 回邮地址 */}
        <div className="absolute top-6 left-6">
          <Image
            src="/images/endotec-logo.png"
            alt="ENDOTEC PARTS"
            width={100}
            height={42}
            className="object-contain"
          />
          <div className="mt-2 text-[8px] text-[#1a365d]/70 leading-relaxed">
            <p className="font-medium text-[#1a365d] text-[9px]">ENDOTEC Medical Parts Co., Ltd.</p>
            <p>2050 Dingsheng Road, Songjiang District</p>
            <p>Shanghai, China 201600</p>
          </div>
        </div>

        {/* 右侧：收件人区域（示意） */}
        <div className="absolute top-1/2 right-16 transform -translate-y-1/2">
          <div className="border-2 border-dashed border-[#e5e7eb] rounded-lg p-4 w-[200px] h-[60px] flex items-center justify-center">
            <p className="text-[10px] text-[#9ca3af] italic">Recipient Address</p>
          </div>
        </div>

        {/* 左侧装饰线 */}
        <div className="absolute top-[20px] bottom-[20px] left-0 w-[2px] bg-gradient-to-b from-[#1a365d] via-[#1a365d]/30 to-transparent" />

        {/* 底部网站 */}
        <div className="absolute bottom-3 left-6 text-[7px] text-[#1a365d]/40">
          www.endotec-med.com
        </div>
      </div>

      <p className="text-[12px] text-gray-400">DL Envelope (220mm × 110mm)</p>

      {/* C5 信封 (229mm x 162mm) */}
      <div
        className="relative bg-white shadow-2xl"
        style={{
          width: '229mm',
          height: '162mm',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
        }}
      >
        {/* 顶部装饰条 */}
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#1a365d]" />
        <div className="absolute top-[4px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#b8860b] via-[#d4a84b] to-[#b8860b]" />

        {/* 左上角：Logo + 回邮地址 */}
        <div className="absolute top-8 left-8">
          <Image
            src="/images/endotec-logo.png"
            alt="ENDOTEC PARTS"
            width={120}
            height={50}
            className="object-contain"
          />
          <div className="mt-3 text-[9px] text-[#1a365d]/70 leading-relaxed">
            <p className="font-medium text-[#1a365d] text-[10px]">ENDOTEC Medical Parts Co., Ltd.</p>
            <p className="mt-1">2050 Dingsheng Road, Songjiang District</p>
            <p>Shanghai, China 201600</p>
            <p className="mt-1">T: +86 182 1700 2600</p>
            <p>E: info@endotec-med.com</p>
          </div>
        </div>

        {/* 中间：收件人区域（示意） */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/4">
          <div className="border-2 border-dashed border-[#e5e7eb] rounded-lg p-6 w-[240px] h-[80px] flex items-center justify-center">
            <p className="text-[11px] text-[#9ca3af] italic">Recipient Address</p>
          </div>
        </div>

        {/* 左侧装饰线 */}
        <div className="absolute top-[25px] bottom-[25px] left-0 w-[3px] bg-gradient-to-b from-[#1a365d] via-[#1a365d]/30 to-transparent" />

        {/* 底部 */}
        <div className="absolute bottom-4 left-8 right-8 flex justify-between items-center text-[8px] text-[#1a365d]/40">
          <p>Endoscope Components & Repair Parts</p>
          <p>www.endotec-med.com</p>
        </div>
      </div>

      <p className="text-[12px] text-gray-400">C5 Envelope (229mm × 162mm)</p>
    </div>
  )
}
