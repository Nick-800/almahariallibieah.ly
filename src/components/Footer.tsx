import { ArrowUp, CallCalling, Sms, Location } from "iconsax-reactjs";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#141414] border-t border-[#D3D3D3]/15 text-[#D3D3D3] py-16 text-right pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#D3D3D3]/15">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-8 rounded-lg overflow-hidden border border-[#D3D3D3]/20 bg-[#1F1F1F]">
                <img
                  src="/images/almahariallibieah_logo.jpeg"
                  alt="شعار شركة المهاري الليبية"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-base font-bold text-[#F2F2F2] block">
                  شركة المهاري الليبية
                </span>
                <span className="text-[11px] font-mono text-[#D3D3D3] block tracking-wider uppercase">
                  Al-Mahari Allibieah Company
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#D3D3D3] leading-relaxed max-w-sm">
              استيراد السيارات الفاخرة وقطع الغيار الأصلية من الأسواق العالمية إلى بنغازي، مع خدمات متكاملة للشحن البحري، التخليص الجمركي، والمساعدة في التسجيل والترخيص.
            </p>

            <div className="pt-2 text-xs font-mono text-[#F2F2F2]">
              سيارات موثوقة · شحن آمن · خدمة محلية
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[#F2F2F2] mb-4">
              أقسام الموقع
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-[#F2F2F2] transition-colors">
                  خدمات الاستيراد والتراخيص
                </a>
              </li>
              <li>
                <a href="#logistics" className="hover:text-[#F2F2F2] transition-colors">
                  مسار وسلسلة التوريد
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-[#F2F2F2] transition-colors">
                  كيف نعمل (خطوات الطلب)
                </a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-[#F2F2F2] transition-colors">
                  طلب سيارة أو قطعة غيار
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F2F2F2] transition-colors">
                  مقر الشركة ببنغازي
                </a>
              </li>
            </ul>
          </div>

          {/* Core Marques */}
          <div>
            <h4 className="text-sm font-bold text-[#F2F2F2] mb-4">
              أبرز العلامات المستوردة
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>تويوتا (Toyota)</li>
              <li>هيونداي (Hyundai)</li>
              <li>لكزس (Lexus)</li>
              <li>مرسيدس-بنز (Mercedes-Benz)</li>
              <li>كيا (Kia)</li>
              <li>سيارات وطلبات استيراد خاصة</li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div>
            <h4 className="text-sm font-bold text-[#F2F2F2] mb-4">
              بيانات الاتصال
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <Location size="16" className="text-[#D3D3D3] shrink-0" />
                <span>المقر الرئيسي: بنغازي · ساحة الفحص: الهواري</span>
              </li>
              <li className="flex items-start gap-2">
                <CallCalling size="16" className="text-[#D3D3D3] shrink-0 mt-1" />
                <div className="flex flex-col gap-1 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-sans text-[#D3D3D3]/70">المدار:</span>
                    <a href="tel:+218915115020" className="hover:text-[#F2F2F2] transition-colors" dir="ltr">091 511 5020</a>
                    <span className="text-[#D3D3D3]/30">·</span>
                    <a href="tel:+218915100220" className="hover:text-[#F2F2F2] transition-colors" dir="ltr">091 510 0220</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-sans text-[#D3D3D3]/70">ليبيانا:</span>
                    <a href="tel:+218925115020" className="hover:text-[#F2F2F2] transition-colors" dir="ltr">092 511 5020</a>
                    <span className="text-[#D3D3D3]/30">·</span>
                    <a href="tel:+218925100220" className="hover:text-[#F2F2F2] transition-colors" dir="ltr">092 510 0220</a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2 font-mono">
                <Sms size="16" className="text-[#D3D3D3] shrink-0" />
                <a href="mailto:sharaf.alomami@gmail.com" className="hover:text-[#F2F2F2] transition-colors" dir="ltr">
                  sharaf.alomami@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D3D3D3]">
          <div>
            جميع الحقوق محفوظة لشركة المهاري الليبية © {new Date().getFullYear()} · بنغازي، ليبيا
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1F1F1F] border border-[#D3D3D3]/20 hover:border-[#D3D3D3]/50 hover:text-white transition-colors"
          >
            <span>العودة للأعلى</span>
            <ArrowUp size="16" className="text-[#D3D3D3]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
