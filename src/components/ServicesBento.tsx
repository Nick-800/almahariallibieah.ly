import React from "react";
import { GlassPanel } from "@/components/common/GlassPanel";
import { StatusPill } from "@/components/ui/StatusPill";
import { Global, Setting2, DocumentText, TickCircle, ArrowLeft } from "iconsax-reactjs";

export default function ServicesBento() {
  const services = [
    {
      id: "import",
      title: "الاستيراد الدولي للمركبات",
      subtitle: "سيارات ركوب ومركبات فاخرة من المنشأ",
      description:
        "نساعدك في اختيار وشراء سيارات الركوب من علامات عالمية موثوقة مثل Toyota وHyundai وLexus وMercedes-Benz مباشرة من المزادات والمعارض الكبرى في كوريا، اليابان، الخليج، وأوروبا، مع ضمان سلامة الفحص والتاريخ الفني.",
      icon: Global,
      features: [
        "شراء مباشر من مصادر معتمدة دون وسطاء متعدّدين",
        "تنسيق الشحن البحري بالحاويات أو سفن الدحرجة (Ro-Ro)",
        "متابعة بوليصة الشحن وإشعار العميل فور تحرك الناقلة",
      ],
      colSpan: "lg:col-span-7",
    },
    {
      id: "parts",
      title: "قطع الغيار الأصلية",
      subtitle: "صيانة موثوقة وتوافق تام",
      description:
        "نوفر قطع الغيار الأساسية والميكانيكية للصيانة والإصلاح الدوري، مع التركيز الصارم على الجودة الأصلية وتلبية احتياجات السوق الليبي والظروف التشغيلية المحلية.",
      icon: Setting2,
      features: [
        "قطع غيار منظومات المحرك ونواقل الحركة",
        "قطع الهيكل الخارجي والإلكترونيات الحساسة",
        "توفير القطع النادرة حسب رقم الهيكل (VIN)",
      ],
      colSpan: "lg:col-span-5",
    },
    {
      id: "licensing",
      title: "المساعدة في التسجيل والترخيص",
      subtitle: "إجراءات إدارية وقانونية مبسطة ببنغازي",
      description:
        "نبسط الإجراءات الإدارية المحلية لعملائنا داخل بنغازي. نقوم بإعداد الوثائق الرسمية المطلوبة من قبل قسم تراخيص المركبات الآلية، لضمان تسجيل وتقديم جميع أنواع المركبات، ومطابقة وتوثيق رقم الهيكل (VIN) ورقم المحرك بدقة وبشكل رسمي سليم.",
      icon: DocumentText,
      features: [
        "إعداد ملفات المطابقة الجمركية والفنية",
        "توثيق أرقام الهيكل والمحرك لدى قسم التراخيص",
        "تسليم المركبة جاهزة للتسيير القانوني الآمن",
      ],
      colSpan: "lg:col-span-12",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#1F1F1F] relative border-t border-[#D3D3D3]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-right">
          <div className="text-xs font-mono uppercase tracking-widest text-[#D3D3D3] mb-3">
            خدمات شركة المهاري الليبية
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F2F2F2] tracking-tight">
            حلول متكاملة لاستيراد وتجهيز المركبات
          </h2>
          <p className="mt-4 text-base text-[#D3D3D3] leading-relaxed">
            نجمع بين الخبرة الدولية في سلاسل التوريد والوجود الميداني في بنغازي لتوفير رحلة استيراد آمنة ومضمونة من الشراء وحتى قيادة السيارة على الطرقات.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <GlassPanel
                key={item.id}
                interactive
                className={`${item.colSpan} p-7 sm:p-8 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#181818] border border-[#D3D3D3]/20 flex items-center justify-center text-[#F2F2F2]">
                      <Icon size="24" variant="Bold" />
                    </div>
                    <StatusPill label={item.subtitle} tone="neutral" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F2F2F2] mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#D3D3D3] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#D3D3D3]/15 space-y-2.5">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#D3D3D3]">
                      <TickCircle size="18" className="text-[#F2F2F2] shrink-0" variant="Bold" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="#inquiry"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#F2F2F2] hover:text-white transition-colors group/link"
                  >
                    <span>طلب استشارة بخصوص الخدمة</span>
                    <ArrowLeft size="16" className="transition-transform group-hover/link:-translate-x-1" />
                  </a>
                </div>
              </GlassPanel>
            );
          })}
        </div>

      </div>
    </section>
  );
}
