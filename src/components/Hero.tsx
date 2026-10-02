import React from "react";
import { GlassPanel } from "@/components/common/GlassPanel";
import { Numeral } from "@/components/common/Numeral";
import { Button } from "@/components/ui/Button";
import { StatusPill } from "@/components/ui/StatusPill";
import { ArrowLeft, CallCalling, Setting2, ShieldTick, Verify } from "iconsax-reactjs";

export default function Hero({ onOpenInquiry }: { onOpenInquiry?: () => void }) {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-28 pb-20 overflow-hidden bg-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column: Lead Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-right">
            
            <StatusPill
              label="سيارات موثوقة · شحن آمن · خدمة محلية معتمدة"
              tone="neutral"
              pulse
            />

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F2F2F2] leading-[1.25] sm:leading-[1.2]">
              استيراد السيارات الفاخرة
              <span className="block text-[#D3D3D3]">
                وقطع الغيار الأصلية
              </span>
              من الأسواق العالمية إلى بنغازي
            </h1>

            <p className="text-base sm:text-lg text-[#D3D3D3] max-w-2xl leading-relaxed">
              نربطك مباشرة مع أكبر أسواق السيارات في كوريا، اليابان، الخليج، وأوروبا.
              نتولى كافة مراحل الشحن البحري، التخليص الجمركي، وإجراءات التسجيل واستخراج
              أرقام الهياكل والمحركات لدى قسم تراخيص المركبات الآلية في بنغازي.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenInquiry || (() => {
                  document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" });
                })}
                rightIcon={<ArrowLeft size="18" />}
              >
                طلب استيراد سيارة
              </Button>

              <Button
                variant="subtle"
                size="lg"
                onClick={() => {
                  document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" });
                }}
                leftIcon={<Setting2 size="18" />}
              >
                طلب قطع غيار
              </Button>

              <a
                href="tel:+218925115020"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-mono text-[#D3D3D3] hover:text-[#F2F2F2] transition-colors"
              >
                <CallCalling size="18" className="text-[#D3D3D3]" />
                <span dir="ltr">+218 92 511 5020</span>
              </a>
            </div>

            {/* Quantitative Trust Markers */}
            <div className="pt-8 border-t border-[#D3D3D3]/15 w-full grid grid-cols-3 gap-4">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#F2F2F2]">
                  <Numeral value={100} format="percent" />
                </div>
                <div className="text-xs text-[#D3D3D3] mt-0.5">
                  فحص وتوثيق أرقام الهيكل
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#F2F2F2]">
                  +4
                </div>
                <div className="text-xs text-[#D3D3D3] mt-0.5">
                  موانئ توريد عالمية
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#F2F2F2]">
                  بنغازي
                </div>
                <div className="text-xs text-[#D3D3D3] mt-0.5">
                  مقر رسمي بساحة خالد بن الوليد
                </div>
              </div>
            </div>

          </div>

          {/* Left Column: Metallic Emblem Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <GlassPanel className="p-2 w-full max-w-lg aspect-[16/10] relative group overflow-hidden">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#141414]">
                <img
                  src="/images/almahariallibieah_logo.jpeg"
                  alt="شعار شركة المهاري الليبية للسيارات الفاخرة"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1F1F1F]/95 border border-[#D3D3D3]/25 backdrop-blur-md">
                <ShieldTick size="18" className="text-[#D3D3D3]" variant="Bold" />
                <span className="text-xs font-medium text-[#F2F2F2]">
                  شركة مسجلة ومعتمدة رسمياً
                </span>
              </div>
            </GlassPanel>
          </div>

        </div>
      </div>
    </section>
  );
}
