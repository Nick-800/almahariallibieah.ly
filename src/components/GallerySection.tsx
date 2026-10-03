import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Gallery,
  Maximize4,
  ArrowLeft2,
  ArrowRight2,
  Location,
  DirectRight,
} from "iconsax-reactjs";
import { springPresets } from "@/lib/motion";
import { Dialog } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";

import { cn } from "@/lib/utils";

export interface GalleryItem {
  id: string;
  category: "maritime" | "port" | "fleet";
  num: string;
  title: string;
  description: string;
  location: string;
  image: string;
  aspect: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "ocean-vessel",
    category: "maritime",
    num: "01",
    title: "سفن شحن الحاويات في أعالي البحار",
    description:
      "أسطول سفن الحاويات العملاقة لنقل وتأمين المركبات والبضائع عبر المحيطات والمضايق الدولية بأعلى معايير السلامة والتتبع الملاحي الدقيق.",
    location: "خطوط الملاحة الدولية المباشرة",
    image: "/images/gallery/ocean-freight-vessel.jpeg",
    aspect: "aspect-video sm:aspect-[16/10]",
  },
  {
    id: "terminal-aerial",
    category: "port",
    num: "02",
    title: "محطات الحاويات والشبكات اللوجستية",
    description:
      "إدارة لوجستية متطورة لفرز وترتيب الحاويات وتنسيق عمليات التفريغ والنقل البري وفق جداول زمنية دقيقة لضمان سلاسة التوريد.",
    location: "موانئ الشحن والتجميع المركزية",
    image: "/images/gallery/container-terminal-aerial.jpeg",
    aspect: "aspect-[4/3] sm:aspect-square md:aspect-[4/3]",
  },
  {
    id: "port-cranes",
    category: "port",
    num: "03",
    title: "أرصفة الرسو والرافعات العملاقة",
    description:
      "رافعات جسرية ثقيلة تضمن كفاءة تفريغ الشحنات ومناولة الحاويات البحرية فور وصولها للأرصفة التجارية بأعلى درجات الأمان.",
    location: "أرصفة الموانئ التجارية والتخليص",
    image: "/images/gallery/port-cranes-berth.jpeg",
    aspect: "aspect-[4/3] sm:aspect-square md:aspect-[4/3]",
  },
  {
    id: "storage-yard",
    category: "fleet",
    num: "04",
    title: "ساحات الفحص وتخزين المركبات",
    description:
      "ساحات واسعة ومؤمنة مجهزة لاستقبال أفواج السيارات المستوردة، وإجراء الفحص الفني والمطابقة الدقيقة قبل التسليم النهائي للعملاء.",
    location: "ساحات الاستلام والتخزين — بنغازي",
    image: "/images/gallery/vehicle-storage-yard.jpeg",
    aspect: "aspect-video sm:aspect-[16/10]",
  },
];

type CategoryFilter = "all" | "maritime" | "port" | "fleet";

const categories: { key: CategoryFilter; label: string }[] = [
  { key: "all", label: "كافة العمليات" },
  { key: "maritime", label: "الملاحة والشحن البحري" },
  { key: "port", label: "الموانئ والتفريغ" },
  { key: "fleet", label: "ساحات التخزين والأسطول" },
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const activeItem = lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % galleryItems.length);
  }, [lightboxIndex]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + galleryItems.length) % galleryItems.length);
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") handleNext();
      if (e.key === "ArrowRight") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-24 sm:py-32 relative bg-[#1F1F1F] overflow-hidden">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D3D3D3]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D3D3D3]/20 bg-[#181818]/80 text-[#D3D3D3] text-xs mb-4 shadow-sm">
            <Gallery size="14" className="text-[#F2F2F2]" />
            <span className="font-mono tracking-wider uppercase">OPERATIONAL SHOWCASE</span>
            <span>·</span>
            <span className="font-amiri font-bold">معرض العمليات</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F2F2] mb-6 font-amiri leading-tight">
            معرض العمليات والأسطول الميداني
          </h2>

          <p className="text-base sm:text-lg text-[#D3D3D3]/85 leading-relaxed font-amiri max-w-2xl">
            توثيق ميداني يجسد تكامل منظومة الشحن؛ من مسارات السفن العملاقة في أعالي البحار، مروراً
            بأرصفة الموانئ وعمليات المناولة، وصولاً إلى ساحات التخزين والتسليم في بنغازي.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-[#181818]/90 border border-[#D3D3D3]/15">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer select-none font-amiri ${
                    isSelected ? "text-[#1F1F1F] font-bold" : "text-[#D3D3D3] hover:text-[#F2F2F2]"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="gallery-category-pill"
                      className="absolute inset-0 bg-[#F2F2F2] rounded-xl -z-10 shadow-sm"
                      transition={springPresets.smooth}
                    />
                  )}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const fullListIdx = galleryItems.findIndex((g) => g.id === item.id);
              const isWide = idx === 0 || idx === 3;
              const gridSpan = isWide ? "lg:col-span-7" : "lg:col-span-5";

              return (
                <motion.article
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 15 }}
                  transition={springPresets.smooth}
                  className={`group relative rounded-3xl overflow-hidden border border-[#D3D3D3]/15 bg-[#181818] flex flex-col justify-end min-h-[360px] sm:min-h-[420px] transition-all duration-500 hover:border-[#D3D3D3]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-pointer ${gridSpan}`}
                  onClick={() => setLightboxIndex(fullListIdx)}
                >
                  {/* Photo Layer */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    {/* Multi-layer Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/55 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />
                  </div>

                  {/* Top Bar Badges */}
                  <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
                    <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#F2F2F2] px-2.5 py-1 rounded-lg bg-[#1F1F1F]/80 backdrop-blur-md border border-[#D3D3D3]/20 shadow-sm">
                      {item.num}
                    </span>

                    <button
                      type="button"
                      aria-label="عرض الصورة بحجم كامل"
                      className="w-9 h-9 rounded-xl bg-[#1F1F1F]/80 backdrop-blur-md border border-[#D3D3D3]/20 flex items-center justify-center text-[#F2F2F2] opacity-80 group-hover:opacity-100 group-hover:bg-[#F2F2F2] group-hover:text-[#1F1F1F] transition-all duration-300"
                    >
                      <Maximize4 size="16" />
                    </button>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="relative z-10 p-5 sm:p-7 flex flex-col gap-2.5 mt-auto">
                    <div className="inline-flex items-center gap-1.5 text-xs font-amiri text-[#D3D3D3] px-2.5 py-0.5 rounded-md bg-[#1F1F1F]/70 backdrop-blur-sm border border-[#D3D3D3]/15 w-fit">
                      <Location size="13" className="text-[#D3D3D3]" />
                      <span>{item.location}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#F2F2F2] font-amiri tracking-tight group-hover:text-white transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#D3D3D3]/80 leading-relaxed font-amiri line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                      {item.description}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#F2F2F2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-amiri">
                      <span>عرض التفاصيل والصورة الكاملة</span>
                      <DirectRight size="14" className="rotate-180" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <Dialog
        open={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        title={
          activeItem ? (
            <div className="flex flex-wrap items-center justify-between gap-3 pl-8">
              <span className="font-amiri text-xl sm:text-2xl font-bold text-[#F2F2F2]">
                {activeItem.title}
              </span>
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-amiri text-[#D3D3D3] px-3 py-1 rounded-lg bg-[#1F1F1F] border border-[#D3D3D3]/20">
                <Location size="14" className="text-[#D3D3D3]" />
                <span>{activeItem.location}</span>
              </div>
            </div>
          ) : undefined
        }
        maxWidth="6xl"
        className="p-4 sm:p-6 max-w-[96vw] lg:max-w-6xl"
      >
        {activeItem && (
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Expansive Theater Media Stage */}
            <div className="relative w-full bg-black/95 rounded-2xl overflow-hidden border border-[#D3D3D3]/20 flex items-center justify-center min-h-[380px] sm:min-h-[520px] lg:min-h-[620px] max-h-[72vh] p-2 sm:p-4 select-none">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeItem.id}
                  src={activeItem.image}
                  alt={activeItem.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={springPresets.snappy}
                  className="max-h-[66vh] w-auto max-w-full object-contain mx-auto rounded-lg shadow-2xl"
                />
              </AnimatePresence>

              {/* Prev / Next Chevrons */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#1F1F1F]/85 hover:bg-[#F2F2F2] hover:text-[#1F1F1F] text-[#F2F2F2] border border-[#D3D3D3]/30 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-2xl z-20 group"
                aria-label="الصورة السابقة"
              >
                <ArrowRight2 size="22" className="group-hover:scale-110 transition-transform" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#1F1F1F]/85 hover:bg-[#F2F2F2] hover:text-[#1F1F1F] text-[#F2F2F2] border border-[#D3D3D3]/30 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-2xl z-20 group"
                aria-label="الصورة التالية"
              >
                <ArrowLeft2 size="22" className="group-hover:scale-110 transition-transform" />
              </button>

              {/* Numeric Counter Badge */}
              <div className="absolute bottom-4 left-4 font-mono text-xs sm:text-sm font-bold text-[#F2F2F2] px-3.5 py-1.5 rounded-xl bg-[#1F1F1F]/85 border border-[#D3D3D3]/20 backdrop-blur-md z-20 shadow-lg">
                {activeItem.num} / 04
              </div>
            </div>

            {/* Bottom Strip: Description, Interactive Thumbnails & Actions */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-5 pt-1">
              {/* Description */}
              <p className="text-xs sm:text-sm text-[#D3D3D3]/90 leading-relaxed font-amiri text-right max-w-xl flex-1">
                {activeItem.description}
              </p>

              {/* Interactive Thumbnail Selector */}
              <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 p-1.5 rounded-xl bg-[#181818] border border-[#D3D3D3]/15">
                {galleryItems.map((item, idx) => {
                  const isCurrent = idx === lightboxIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      className={cn(
                        "relative w-14 sm:w-20 aspect-video rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0",
                        isCurrent
                          ? "border-[#F2F2F2] ring-2 ring-[#F2F2F2]/30 scale-105"
                          : "border-transparent opacity-60 hover:opacity-100 hover:border-[#D3D3D3]/40"
                      )}
                      aria-label={`عرض ${item.title}`}
                    >
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto justify-end">
                <Button
                  variant="primary"
                  className="font-amiri text-xs sm:text-sm px-4 sm:px-5 py-2.5 flex-1 sm:flex-initial justify-center"
                  onClick={() => {
                    setLightboxIndex(null);
                    const el = document.getElementById("inquiry");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  طلب شحن أو استيراد فوري
                </Button>

                <Button
                  variant="subtle"
                  className="font-amiri text-xs px-3 sm:px-4 py-2.5 justify-center"
                  onClick={() => setLightboxIndex(null)}
                >
                  إغلاق
                </Button>
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
}
