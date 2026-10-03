import { useState } from "react";
import { GlassPanel } from "@/components/common/GlassPanel";
import { Button } from "@/components/ui/Button";
import { Sheet } from "@/components/ui/Sheet";
import { Popover } from "@/components/ui/Popover";
import { Location, CallCalling, Sms, Clock, ExportCircle, Messages2, Map1 } from "iconsax-reactjs";

export const companyPhoneNumbers = [
  { formatted: "091 511 5020", raw: "+218915115020", operator: "المدار" },
  { formatted: "092 511 5020", raw: "+218925115020", operator: "ليبيانا" },
  { formatted: "091 510 0220", raw: "+218915100220", operator: "المدار" },
  { formatted: "092 510 0220", raw: "+218925100220", operator: "ليبيانا" },
];

export default function LocationContact() {
  const [mapSheetOpen, setMapSheetOpen] = useState(false);

  const branchDetails = [
    {
      label: "المقر الإداري الرئيسي (المثبت على الخريطة)",
      value: "بنغازي — الإدارة العامة، توقيع العقود وفتح اعتمادات الاستيراد",
      icon: Location,
      action: {
        text: "الاتجاهات إلى المقر",
        onClick: () => window.open("https://www.google.com/maps?q=32.0897024,20.0966144", "_blank", "noopener,noreferrer"),
      },
    },
    {
      label: "الفرع الثاني (ساحة الفحص والمعاينة والتسليم)",
      value: "ساحة خالد بن الوليد، منطقة الهواري، بنغازي، ليبيا",
      icon: Location,
      action: {
        text: "عرض تفاصيل ساحة الهواري وإجراءات الاستلام",
        onClick: () => setMapSheetOpen(true),
      },
    },
  ];

  const generalDetails = [
    {
      label: "البريد الإلكتروني الرسمي",
      value: "sharaf.alomami@gmail.com",
      icon: Sms,
      isLtr: true,
      href: "mailto:sharaf.alomami@gmail.com",
    },
    {
      label: "ساعات العمل الرسمية",
      value: "السبت – الخميس: 9:00 صباحاً – 8:00 مساءً (الجمعة عطلة)",
      icon: Clock,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#1F1F1F] relative border-t border-[#D3D3D3]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Column: Office & Contact Info */}
          <div className="lg:col-span-6 space-y-6 text-right">
            <div className="text-xs font-mono uppercase tracking-widest text-[#D3D3D3]">
              المقر الرئيسي والتواصل
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F2F2F2] tracking-tight">
              تفضل بزيارتنا في بنغازي
            </h2>
            <p className="text-base text-[#D3D3D3] leading-relaxed">
              يسعدنا استقبالكم في مقرنا الإداري الرئيسي ببنغازي لمناقشة طلبات الاستيراد وتوقيع العقود، أو في ساحة الفحص والتسليم بالهواري لمعاينة واستلام السيارات الواردة.
            </p>

            <div className="space-y-4 pt-2">
              {/* Branch Locations */}
              {branchDetails.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#181818] border border-[#D3D3D3]/15 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#262626] border border-[#D3D3D3]/20 flex items-center justify-center text-[#F2F2F2] shrink-0 mt-0.5">
                      <Icon size="20" variant="Bold" />
                    </div>

                    <div className="flex-1">
                      <span className="block text-xs font-medium text-[#D3D3D3] mb-1">
                        {item.label}
                      </span>
                      <span className="block text-sm sm:text-base font-bold text-[#F2F2F2]">
                        {item.value}
                      </span>

                      {item.action && (
                        <button
                          type="button"
                          onClick={item.action.onClick}
                          className="inline-flex items-center gap-1 text-xs text-[#D3D3D3] hover:text-[#F2F2F2] transition-colors mt-2 font-bold"
                        >
                          <span>{item.action.text}</span>
                          <ExportCircle size="14" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Direct Multi-line Phone Directory Card (Uncrowded 2x2 Grid) */}
              <div className="p-5 rounded-xl bg-[#181818] border border-[#D3D3D3]/15 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#262626] border border-[#D3D3D3]/20 flex items-center justify-center text-[#F2F2F2] shrink-0 mt-0.5">
                  <CallCalling size="20" variant="Bold" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="block text-xs font-medium text-[#D3D3D3]">
                      أرقام الإدارة والمتابعة والمبيعات
                    </span>
                    <span className="text-[10px] text-[#D3D3D3]/70 font-mono">
                      المدار · ليبيانا
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {companyPhoneNumbers.map((p, idx) => (
                      <a
                        key={idx}
                        href={`tel:${p.raw}`}
                        className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#202020] hover:bg-[#282828] border border-[#D3D3D3]/20 hover:border-[#F2F2F2]/50 transition-all text-xs group"
                        title={`اتصال مباشر عبر شبكة ${p.operator}`}
                      >
                        <span className="font-mono font-bold text-[#F2F2F2] tracking-wider" dir="ltr">
                          {p.formatted}
                        </span>
                        <span className="text-[10px] text-[#D3D3D3] group-hover:text-[#F2F2F2] px-1.5 py-0.5 rounded bg-[#181818] border border-[#D3D3D3]/15">
                          {p.operator}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* General Details (Email & Hours) */}
              {generalDetails.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#181818] border border-[#D3D3D3]/15 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#262626] border border-[#D3D3D3]/20 flex items-center justify-center text-[#F2F2F2] shrink-0 mt-0.5">
                      <Icon size="20" variant="Bold" />
                    </div>

                    <div className="flex-1">
                      <span className="block text-xs font-medium text-[#D3D3D3] mb-1">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className={`block text-sm sm:text-base font-bold text-[#F2F2F2] hover:text-white transition-colors ${
                            item.isLtr ? "font-mono" : ""
                          }`}
                          dir={item.isLtr ? "ltr" : "rtl"}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span
                          className={`block text-sm sm:text-base font-semibold text-[#F2F2F2] ${
                            item.isLtr ? "font-mono" : ""
                          }`}
                          dir={item.isLtr ? "ltr" : "rtl"}
                        >
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Left Column: Interactive Location Glass Card */}
          <div className="lg:col-span-6">
            <GlassPanel className="p-6 sm:p-8 border border-[#D3D3D3]/20 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#D3D3D3]/15 pb-4 mb-6 gap-3">
                <div className="text-right">
                  <h3 className="text-lg font-bold text-[#F2F2F2]">
                    المقر الإداري الرئيسي
                  </h3>
                  <p className="text-xs text-[#D3D3D3]">
                    الإدارة العامة ومتابعة العقود والاعتمادات · بنغازي
                  </p>
                </div>
                <Button
                  variant="subtle"
                  size="sm"
                  onClick={() => window.open("https://www.google.com/maps?q=32.0897024,20.0966144", "_blank", "noopener,noreferrer")}
                  leftIcon={<Map1 size="14" />}
                >
                  الاتجاهات إلى الموقع
                </Button>
              </div>

              {/* Embedded Themed Google Map */}
              <div className="relative w-full aspect-[16/10] min-h-[340px] rounded-xl overflow-hidden bg-[#181818] border border-[#D3D3D3]/15 shadow-inner group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d281405.2764723673!2d20.0966144!3d32.0897024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sly!4v1790970207609!5m2!1sen!2sly"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "grayscale(100%) invert(92%) contrast(83%) brightness(0.9)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="موقع شركة المهاري الليبية على خرائط جوجل"
                  className="w-full h-full"
                />

                {/* Direct Map Floating Action Badge */}
                <a
                  href="https://www.google.com/maps?q=32.0897024,20.0966144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1F1F1F]/90 backdrop-blur-md border border-[#D3D3D3]/30 text-xs font-bold text-[#F2F2F2] hover:bg-[#F2F2F2] hover:text-[#1F1F1F] transition-all shadow-lg"
                >
                  <Map1 size="14" />
                  <span>فتح في Google Maps</span>
                </a>
              </div>

              {/* Quick Communication Bar */}
              <div className="mt-6 pt-4 border-t border-[#D3D3D3]/15 grid grid-cols-2 gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => window.open("https://wa.me/218925115020", "_blank")}
                  leftIcon={<Messages2 size="18" />}
                >
                  محادثة واتساب
                </Button>

                <Popover
                  className="w-72 left-0 right-auto sm:right-0 sm:left-auto"
                  trigger={
                    <Button
                      variant="subtle"
                      size="md"
                      className="w-full"
                      leftIcon={<CallCalling size="18" />}
                    >
                      <span>اتصال هاتفي</span>
                    </Button>
                  }
                >
                  <div className="space-y-2 text-right">
                    <div className="text-xs font-bold text-[#F2F2F2] pb-1.5 border-b border-[#D3D3D3]/15">
                      اختر الخط المباشر للاتصال:
                    </div>
                    <div className="grid grid-cols-1 gap-1.5 pt-1">
                      {companyPhoneNumbers.map((p, idx) => (
                        <a
                          key={idx}
                          href={`tel:${p.raw}`}
                          className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#222222] hover:bg-[#2d2d2d] border border-[#D3D3D3]/15 text-xs text-[#F2F2F2] transition-colors group"
                        >
                          <span className="font-mono font-bold" dir="ltr">{p.formatted}</span>
                          <span className="text-[10px] text-[#D3D3D3] px-1.5 py-0.5 rounded bg-[#181818] border border-[#D3D3D3]/10">
                            {p.operator}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover>
              </div>

            </GlassPanel>
          </div>

        </div>

      </div>

      {/* Sheet Modal for Al-Hawari Branch Details */}
      <Sheet
        open={mapSheetOpen}
        onClose={() => setMapSheetOpen(false)}
        title="الفرع الثاني: ساحة الفحص والتسليم — الهواري"
        description="تفاصيل الوصول وإجراءات استلام المركبات"
      >
        <div className="space-y-4 text-right">
          <p className="text-sm text-[#D3D3D3] leading-relaxed">
            يقع فرعنا الثاني في منطقة الهواري بساحة خالد بن الوليد في بنغازي، وهو مخصص لاستقبال ناقلات السيارات الواردة وشحنات قطع الغيار، وإجراء الفحص الفني والمطابقة قبل التسليم النهائي للعميل.
          </p>

          <div className="p-4 rounded-xl bg-[#262626] border border-[#D3D3D3]/15 space-y-2">
            <div className="text-xs font-bold text-[#F2F2F2]">الإجراءات المتوفرة في ساحة الهواري:</div>
            <ul className="text-xs text-[#D3D3D3] space-y-1.5 list-disc list-inside">
              <li>معاينة واستلام المركبات الواردة فور تفريغها</li>
              <li>استلام وتجهيز وثائق قسم تراخيص المركبات الآلية</li>
              <li>تأكيد ومطابقة أرقام الهيكل (VIN) ومحركات المركبات</li>
              <li>فحص قطع الغيار الأصلية والمحركات الموردة</li>
            </ul>
          </div>

          <Button
            variant="primary"
            size="md"
            className="w-full mt-4"
            onClick={() => window.open("https://maps.google.com/?q=Al+Hawari+Benghazi+Libya", "_blank", "noopener,noreferrer")}
            rightIcon={<Map1 size="18" />}
          >
            الاتجاهات إلى ساحة الهواري عبر Google Maps
          </Button>
        </div>
      </Sheet>
    </section>
  );
}
