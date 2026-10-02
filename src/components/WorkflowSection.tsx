import React from "react";
import { GlassPanel } from "@/components/common/GlassPanel";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { MessageQuestion, Calculator, TruckFast, Verify, ShieldTick, Hierarchy3, People } from "iconsax-reactjs";

export default function WorkflowSection() {
  const steps = [
    {
      num: 25,
      stepNumber: "01",
      title: "تحديد المواصفات المطلوبة",
      desc: "شاركنا تفاصيل السيارة، الفئة، سنة الصنع، أو مواصفات ورقم قطعة الغيار المطلوبة عبر استمارة الموقع أو رسالة مباشرة.",
      icon: MessageQuestion,
    },
    {
      num: 50,
      stepNumber: "02",
      title: "مراجعة الخيارات والتكلفة الواصلة",
      desc: "نبحث في الأسواق العالمية عن أفضل الخيارات المتاحة، ونقدم تقريراً شاملاً بحالة المركبة والتكلفة التقديرية حتى وصولها بنغازي.",
      icon: Calculator,
    },
    {
      num: 75,
      stepNumber: "03",
      title: "إتمام الشراء وتنسيق الشحن",
      desc: "نتولى إجراءات التعاقد والشراء الفوري، وحجز مسار الشحن البحري، وتأمين وثائق التصدير والجمارك الرسمية.",
      icon: TruckFast,
    },
    {
      num: 100,
      stepNumber: "04",
      title: "الاستلام والتسجيل في بنغازي",
      desc: "نتابع مسار الشحنة حتى رسوها، ونتولى التخليص ومطابقة أرقام الهيكل والمحرك وتسليم السيارة جاهزة للاستخدام.",
      icon: Verify,
    },
  ];

  const trustPillars = [
    {
      title: "خبرة متخصصة في الاستيراد",
      desc: "نربط بين كبرى الشركات والموردين العالميين والعملاء في ليبيا بخبرة فنية وتجارية تضمن سلامة كل صفقة.",
      icon: Hierarchy3,
    },
    {
      title: "سلسلة توريد واضحة وشفافة",
      desc: "متابعة منظمة ودقيقة للشحن من نقطة الانطلاق حتى الوصول، دون تكاليف خفية أو مفاجآت في المسار.",
      icon: ShieldTick,
    },
    {
      title: "خدمة محلية وتواصل مباشر",
      desc: "فريق إدارة محلي متواجد في بنغازي لمتابعة المخزون، الطلبات الخاصة، وقطع الغيار على مدار الساعة.",
      icon: People,
    },
  ];

  return (
    <section id="workflow" className="py-24 bg-[#1F1F1F] relative border-t border-[#D3D3D3]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* How We Work Section */}
        <div className="mb-20">
          <div className="max-w-3xl mb-14 text-right">
            <div className="text-xs font-mono uppercase tracking-widest text-[#D3D3D3] mb-3">
              خطوات العمل
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F2F2F2] tracking-tight">
              كيف نعمل من الطلب إلى التسليم
            </h2>
            <p className="mt-4 text-base text-[#D3D3D3] leading-relaxed">
              إجراءات متسلسلة وواضحة تضمن لك راحة البال ودقة التنفيذ خطوة بخطوة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <GlassPanel
                  key={step.stepNumber}
                  className="p-6 sm:p-7 relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <ProgressRing progress={step.num} size={48} strokeWidth={4}>
                      <span className="text-xs font-mono font-bold text-[#F2F2F2]">
                        {step.stepNumber}
                      </span>
                    </ProgressRing>

                    <div className="w-10 h-10 rounded-xl bg-[#262626] border border-[#D3D3D3]/15 flex items-center justify-center text-[#D3D3D3] group-hover:text-[#F2F2F2] transition-colors">
                      <Icon size="20" variant="Bold" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#F2F2F2] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D3D3D3] leading-relaxed">
                    {step.desc}
                  </p>
                </GlassPanel>
              );
            })}
          </div>
        </div>

        {/* Why Al-Mahari Trust Pillars */}
        <div className="pt-16 border-t border-[#D3D3D3]/15">
          <div className="max-w-3xl mb-12 text-right">
            <div className="text-xs font-mono uppercase tracking-widest text-[#D3D3D3] mb-3">
              المعايير والثقة
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F2F2F2] tracking-tight">
              لماذا يختار عملاؤنا شركة المهاري الليبية؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <GlassPanel
                  key={idx}
                  className="p-7 text-right flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#181818] border border-[#D3D3D3]/20 flex items-center justify-center text-[#F2F2F2] mb-6">
                      <Icon size="24" variant="Bold" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#F2F2F2] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#D3D3D3] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </GlassPanel>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
