"use client"

import Image from "next/image"

export default function BusinessCard() {
  return (
    <div className="flex flex-col gap-8 items-center p-8">
      {/* 名片正面 */}
      <div
        className="relative bg-white shadow-2xl overflow-hidden"
        style={{
          width: '90mm',
          height: '54mm',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
        }}
      >
        {/* 顶部深蓝色装饰条 */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1a365d]" />

        {/* 底部金色装饰线 - 调整位置到最底部 */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#b8860b] via-[#d4a84b] to-[#b8860b]" />

        <div className="absolute inset-0 p-5 flex">
          {/* 左侧：Logo + 姓名职位 */}
          <div className="flex flex-col justify-between flex-1">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/endotec-logo.png"
                alt="ENDOTEC PARTS"
                width={110}
                height={45}
                className="object-contain"
              />
            </div>

            {/* 姓名和职位 */}
            <div className="mb-1">
              <h1 className="text-[18px] font-semibold text-[#1a365d] tracking-[0.01em]">
                Nancy Zhang
              </h1>
              <p className="text-[11px] text-[#1a365d]/70 mt-0.5 tracking-[0.03em] font-medium">
                Sales Director
              </p>
            </div>
          </div>

          {/* 右侧：WhatsApp 二维码 */}
          <div className="flex flex-col items-center justify-center ml-4">
            <div className="bg-white p-1.5 rounded-lg shadow-sm border border-gray-100">
              <Image
                src="/images/whatsapp-qr.png"
                alt="WhatsApp QR Code"
                width={70}
                height={70}
                className="object-contain"
                style={{ objectPosition: 'center' }}
              />
            </div>
            <p className="text-[7px] text-[#1a365d]/60 mt-1 tracking-wide">
              Scan to WhatsApp
            </p>
          </div>
        </div>
      </div>

      {/* 名片背面 */}
      <div
        className="relative bg-[#1a365d] shadow-2xl overflow-hidden"
        style={{
          width: '90mm',
          height: '54mm',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
        }}
      >
        {/* 顶部金色装饰条 */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#b8860b] via-[#d4a84b] to-[#b8860b]" />

        <div className="absolute inset-0 p-5 flex flex-col justify-between">
          {/* 顶部：Tagline */}
          <div>
            <p className="text-[9px] text-white/60 tracking-[0.08em] uppercase font-medium">
              Endoscope Components & Repair Parts
            </p>
          </div>

          {/* 底部：联系方式 */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5 text-[10px] text-white">
              <svg className="w-3 h-3 text-[#d4a84b]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span className="tracking-[0.02em]">+86 182 1700 2600</span>
            </div>
            <div className="flex items-center gap-2.5 text-[10px] text-white">
              <svg className="w-3 h-3 text-[#d4a84b]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span className="tracking-[0.02em]">info@endotec-med.com</span>
            </div>
            <div className="flex items-center gap-2.5 text-[10px] text-white">
              <svg className="w-3 h-3 text-[#d4a84b]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"/>
              </svg>
              <span className="tracking-[0.02em]">www.endotec-med.com</span>
            </div>
            <div className="flex items-start gap-2.5 text-[10px] text-white mt-0.5">
              <svg className="w-3 h-3 text-[#d4a84b] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <span className="tracking-[0.02em] leading-relaxed">
                2050 Dingsheng Road, Songjiang District<br/>
                Shanghai, China
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[12px] text-gray-400 mt-4">Front (top) & Back (bottom)</p>
    </div>
  )
}
