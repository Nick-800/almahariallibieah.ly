import React, { useState } from "react";
import { GlassPanel } from "@/components/common/GlassPanel";
import { Segmented } from "@/components/ui/Segmented";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/providers/ToastProvider";
import { Car, Setting2, Send, CallCalling, MessageQuestion } from "iconsax-reactjs";

export default function InquiryBuilder() {
  const { toast } = useToast();
  const [inquiryType, setInquiryType] = useState<string>("car");
  const [brand, setBrand] = useState("Toyota");
  const [customBrand, setCustomBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("2024");
  const [specs, setSpecs] = useState("");
  const [partName, setPartName] = useState("");
  const [vinNumber, setVinNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const carBrands = [
    { value: "Toyota", label: "تويوتا (Toyota)" },
    { value: "Hyundai", label: "هيونداي (Hyundai)" },
    { value: "Lexus", label: "لكزس (Lexus)" },
    { value: "Mercedes", label: "مرسيدس (Mercedes-Benz)" },
    { value: "Kia", label: "كيا (Kia)" },
    { value: "Other", label: "علامة تجارية أخرى" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const selectedBrand = brand === "Other" && customBrand ? customBrand : brand;
    let message = "";

    if (inquiryType === "car") {
      message = `السلام عليكم ورحمة الله،
أود الاستفسار من شركة المهاري الليبية بخصوص طلب استيراد سيارة:
- الفئة والمصنّع: ${selectedBrand}
- الموديل المطلوب: ${model || "غير محدد"}
- سنة الصنع المتوقعة: ${year}
- المواصفات المطلوبة: ${specs || "مواصفات قياسية"}
- الاسم: ${fullName || "عميل المهاري"}
- رقم الهاتف: ${phone || "تواصل عبر واتساب"}

أرجو تزويدي بالخيارات المتاحة والتكلفة المتوقعة حتى الوصول إلى بنغازي. شكراً لكم.`;
    } else {
      message = `السلام عليكم ورحمة الله،
أود الاستفسار من شركة المهاري الليبية بخصوص طلب قطعة غيار:
- نوع السيارة: ${selectedBrand}
- الموديل والسنة: ${model} (${year})
- اسم القطعة المطلوبة: ${partName}
- رقم الهيكل (VIN إن وجد): ${vinNumber || "غير متوفر حالياً"}
- الاسم: ${fullName || "عميل المهاري"}
- رقم الهاتف: ${phone || "تواصل عبر واتساب"}

أرجو تأكيد التوفر وسعر القطعة والشحن. شكراً لكم.`;
    }

    setTimeout(() => {
      const whatsappUrl = `https://wa.me/218925115020?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      setLoading(false);
      toast({
        title: "تم تجهيز وتوجيه الطلب",
        description: "تم فتح محادثة واتساب الرسمية مع إدارة شركة المهاري بنغازي.",
        variant: "success",
      });
    }, 400);
  };

  return (
    <section id="inquiry" className="py-24 bg-[#1F1F1F] relative border-t border-[#D3D3D3]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D3D3D3]/20 bg-[#181818] text-xs font-mono text-[#D3D3D3] mb-4">
            <MessageQuestion size="16" className="text-[#F2F2F2]" />
            <span>نموذج الاستفسار وطلب التوريد المباشر</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F2F2F2] tracking-tight">
            هل تبحث عن سيارة أو قطعة غيار؟
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D3D3D3] leading-relaxed">
            حدد طلبك وسيقوم فريق الإدارة في بنغازي بالرد عليك بالخيارات المتاحة، التكلفة الواصلة، ومواعيد الشحن عبر واتساب أو الهاتف مباشرة.
          </p>
        </div>

        {/* Form Container */}
        <GlassPanel className="p-6 sm:p-10 border border-[#D3D3D3]/20 shadow-2xl relative">
          
          {/* Segmented Type Toggle */}
          <div className="flex justify-center mb-8">
            <Segmented
              value={inquiryType}
              onChange={setInquiryType}
              name="inquiry-type-toggle"
              options={[
                {
                  value: "car",
                  label: "طلب استيراد سيارة",
                  icon: <Car size="18" />,
                },
                {
                  value: "part",
                  label: "طلب قطع غيار أصلية",
                  icon: <Setting2 size="18" />,
                },
              ]}
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 text-right">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Select
                label="الشركة المصنعة / العلامة التجارية *"
                value={brand}
                onChange={setBrand}
                options={carBrands}
              />

              {brand === "Other" ? (
                <Input
                  label="اذكر اسم العلامة التجارية *"
                  value={customBrand}
                  onChange={(e) => setCustomBrand(e.target.value)}
                  placeholder="مثال: Land Rover, Audi, Ford..."
                  required
                />
              ) : (
                <Input
                  label="الموديل أو الطراز المطلوب *"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder={inquiryType === "car" ? "مثال: Land Cruiser, Santa Fe, Elantra..." : "موديل السيارة"}
                  required
                />
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input
                label="سنة الصنع (الموديل)"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="مثال: 2023 - 2025"
              />

              {inquiryType === "car" ? (
                <Input
                  label="المواصفات المرغوبة أو اللون"
                  value={specs}
                  onChange={(e) => setSpecs(e.target.value)}
                  placeholder="مثال: كاملة المواصفات، فتحة سقف، دفع رباعي..."
                />
              ) : (
                <Input
                  label="اسم قطعة الغيار المطلوبة *"
                  value={partName}
                  onChange={(e) => setPartName(e.target.value)}
                  placeholder="مثال: ممتصات صدمات، كمبريسور، فحمات..."
                  required
                />
              )}
            </div>

            {inquiryType === "part" && (
              <Input
                label="رقم الهيكل (VIN) — اختياري لضمان دقة وتطابق القطعة 100%"
                value={vinNumber}
                onChange={(e) => setVinNumber(e.target.value)}
                placeholder="أدخل رقم الشاسي المكون من 17 رمزاً إن وجد"
                className="font-mono uppercase text-left"
                dir="ltr"
              />
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <Input
                label="الاسم الكريم *"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="اسمك الكامل"
                required
              />

              <Input
                label="رقم الهاتف للتواصل *"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="091XXXXXXX / 092XXXXXXX"
                className="font-mono text-left"
                dir="ltr"
                required
              />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={loading}
                className="w-full sm:flex-1"
                leftIcon={<Send size="18" />}
              >
                إرسال الطلب مباشرة عبر واتساب
              </Button>

              <a
                href="tel:+218925115020"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-mono text-sm text-[#F2F2F2] border border-[#D3D3D3]/30 bg-[#181818] hover:border-[#F2F2F2] transition-all"
              >
                <CallCalling size="18" className="text-[#D3D3D3]" />
                <span dir="ltr">+218 92 511 5020</span>
              </a>
            </div>

          </form>

        </GlassPanel>

      </div>
    </section>
  );
}
