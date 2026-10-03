import { useState, useEffect } from "react";
import { CallCalling, HamburgerMenu, CloseCircle, ArrowUp2, ArrowDown2 } from "iconsax-reactjs";
import { Button } from "@/components/ui/Button";
import { Popover } from "@/components/ui/Popover";
import { companyPhoneNumbers } from "@/components/LocationContact";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "خدماتنا", href: "#services" },
    { name: "مسار التوريد", href: "#logistics" },
    { name: "معرض العمليات", href: "#gallery" },
    { name: "كيف نعمل", href: "#workflow" },
    { name: "طلب استيراد", href: "#inquiry" },
    { name: "مقر بنغازي", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1F1F1F]/90 backdrop-blur-md border-b border-[#D3D3D3]/15 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#hero" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-8 rounded-lg overflow-hidden border border-[#D3D3D3]/20 bg-[#181818] p-0.5 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/almahariallibieah_logo.jpeg"
                alt="شعار شركة المهاري الليبية"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-right">
              <span className="text-lg font-bold tracking-tight text-[#F2F2F2] transition-colors">
                شركة المهاري الليبية
              </span>
              <span className="text-[11px] font-mono tracking-wider text-[#D3D3D3] uppercase">
                Al-Mahari Allibieah Co.
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#D3D3D3] hover:text-[#F2F2F2] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#F2F2F2] after:absolute after:bottom-0 after:right-0 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button & Hotline Popover */}
          <div className="hidden sm:flex items-center gap-3">
            <Popover
              className="w-64 left-0 right-auto"
              trigger={
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs font-mono text-[#D3D3D3] hover:text-[#F2F2F2] transition-colors px-3 py-1.5 rounded-lg border border-[#D3D3D3]/20 bg-[#181818] hover:border-[#D3D3D3]/40"
                >
                  <CallCalling size="14" className="text-[#D3D3D3]" />
                  <span dir="ltr">091 511 5020</span>
                  <ArrowDown2 size="10" className="text-[#D3D3D3]/70" />
                </button>
              }
            >
              <div className="space-y-1.5 text-right">
                <div className="text-[11px] font-bold text-[#F2F2F2] pb-1 border-b border-[#D3D3D3]/15 flex items-center justify-between">
                  <span>خطوط الاتصال المباشرة</span>
                  <span className="text-[10px] text-[#D3D3D3]/60 font-sans">المدار · ليبيانا</span>
                </div>
                <div className="grid grid-cols-1 gap-1 pt-0.5">
                  {companyPhoneNumbers.map((p, idx) => (
                    <a
                      key={idx}
                      href={`tel:${p.raw}`}
                      className="flex items-center justify-between px-2.5 py-1.5 rounded-md bg-[#222222] hover:bg-[#2c2c2c] text-xs text-[#F2F2F2] transition-colors"
                    >
                      <span className="font-mono font-bold" dir="ltr">{p.formatted}</span>
                      <span className="text-[10px] text-[#D3D3D3] px-1 rounded bg-[#181818] border border-[#D3D3D3]/10">
                        {p.operator}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Popover>

            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              طلب استيراد
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#D3D3D3] hover:text-[#F2F2F2] bg-[#181818] border border-[#D3D3D3]/20 focus:outline-none"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <CloseCircle size="22" /> : <HamburgerMenu size="22" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#1F1F1F]/98 border-b border-[#D3D3D3]/20 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl text-right">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-[#D3D3D3] hover:text-[#F2F2F2] hover:bg-[#262626] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-[#D3D3D3]/15 flex flex-col gap-3">
            <div className="text-xs font-bold text-[#D3D3D3] mb-0.5">
              خطوط الاتصال المباشرة:
            </div>
            <div className="grid grid-cols-2 gap-2">
              {companyPhoneNumbers.map((p, idx) => (
                <a
                  key={idx}
                  href={`tel:${p.raw}`}
                  className="flex items-center justify-between px-2.5 py-2 rounded-lg border border-[#D3D3D3]/20 bg-[#181818] text-xs font-mono text-[#F2F2F2]"
                >
                  <span dir="ltr">{p.formatted}</span>
                  <span className="text-[9px] text-[#D3D3D3] px-1 py-0.5 rounded bg-[#242424]">
                    {p.operator}
                  </span>
                </a>
              ))}
            </div>
            <Button
              variant="primary"
              size="md"
              className="w-full mt-1"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              طلب استيراد فوري
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
