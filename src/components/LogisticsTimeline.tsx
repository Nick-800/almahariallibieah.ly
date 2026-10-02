import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { GlassPanel } from "@/components/common/GlassPanel";
import { Segmented } from "@/components/ui/Segmented";
import { ListRow } from "@/components/ui/ListRow";
import { Ship, Routing2, Buildings2, Location, ShieldSecurity, TickCircle } from "iconsax-reactjs";

export default function LogisticsTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStageId, setActiveStageId] = useState("origin");
  const [mouseTilt, setMouseTilt] = useState({ rotateX: 0, rotateY: 0 });

  const stages = [
    {
      id: "origin",
      index: "01",
      title: "موانئ الانطلاق العالمية",
      tag: "كوريا · اليابان · الخليج · أوروبا",
      icon: Routing2,
      summary: "فحص وشراء وتجهيز المركبات في موانئ الشحن الرئيسية قبل المغادرة.",
      details: [
        "مطابقة المواصفات المطلوبة وفحص حالة السيارة الميكانيكية والبدن",
        "التحقق من صحة وثائق الملكية وشهادات التصدير الدولية",
        "تغليف آمن وتحميل متخصص في حاويات مخصصة أو سفن الدحرجة (Ro-Ro)",
      ],
      hubs: ["ميناء إنتشون / بوسان (كوريا)", "ميناء يوكوهاما (اليابان)", "ميناء جبل علي (الإمارات)", "ميناء بريمرهافن (ألمانيا)"],
    },
    {
      id: "transit",
      index: "02",
      title: "المسار البحري الدولي",
      tag: "خطوط ملاحية معتمدة نحو البحر المتوسط",
      icon: Ship,
      summary: "نقل بحري منتظم ومؤمّن يربط المحيطات بالموانئ الليبية عبر خطوط ملاحية عالمية.",
      details: [
        "متابعة دقيقة لرقم بوليصة الشحن (Bill of Lading)",
        "تأمين شامل على الشحنة ضد مخاطر النقل البحري",
        "تحديث دوري لمواعيد الرسو المتوقعة في ميناء الوصول",
      ],
      hubs: ["مضيق باب المندب / قناة السويس", "مسارات البحر الأبيض المتوسط", "خطوط شحن مباشرة ومنتظمة"],
    },
    {
      id: "port",
      index: "03",
      title: "الوصول والتخليص بميناء بنغازي",
      tag: "المحطة البحرية المحلية",
      icon: Buildings2,
      summary: "رسو السفينة، إنزال المركبات والحاويات، وبدء إجراءات التخليص الجمركي الفوري.",
      details: [
        "معاينة تفريغ الشحنة في أرصفة ميناء بنغازي البحري",
        "تنسيق الإفراج الجمركي ومطابقة الأوراق الرسمية",
        "فحص أولي لسلامة المركبة أو قطع الغيار بعد الإنزال",
      ],
      hubs: ["أرصفة ميناء بنغازي التجاري", "المنطقة الجمركية المعتمدة"],
    },
    {
      id: "handover",
      index: "04",
      title: "مقر الهواري وإجراءات الترخيص",
      tag: "ساحة خالد بن الوليد · بنغازي",
      icon: Location,
      summary: "استقبال السيارة في ساحة الشركة بالهواري، استكمال مطابقة أرقام المحرك والهيكل، والتسليم للعميل.",
      details: [
        "تجهيز الوثائق لقسم تراخيص المركبات الآلية ببنغازي",
        "توثيق رقم الهيكل (VIN) ورقم المحرك رسمياً",
        "التسليم المباشر للمشتري أو التوصيل حسب الرغبة",
      ],
      hubs: ["ساحة خالد بن الوليد، الهواري", "قسم تراخيص المركبات الآلية"],
    },
  ];

  // Scroll Progress Listener to Switch Stages with Scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 140px", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // Hold stage 1 steady while card enters, only switch when fully showing
    if (progress < 0.32) {
      setActiveStageId("origin");
    } else if (progress < 0.58) {
      setActiveStageId("transit");
    } else if (progress < 0.84) {
      setActiveStageId("port");
    } else {
      setActiveStageId("handover");
    }
  });

  const handleTabChange = (stageId: string) => {
    setActiveStageId(stageId);
    const index = stages.findIndex((s) => s.id === stageId);
    if (containerRef.current && index !== -1) {
      const containerTop = containerRef.current.offsetTop;
      const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
      if (scrollableDistance > 0) {
        const stageProgressTargets = [0.15, 0.45, 0.70, 0.92];
        const targetScroll = containerTop + (scrollableDistance * stageProgressTargets[index]);
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMouseTilt({
      rotateX: -y / 40,
      rotateY: x / 40,
    });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ rotateX: 0, rotateY: 0 });
  };

  const currentStage = stages.find((s) => s.id === activeStageId) || stages[0];
  const StageIcon = currentStage.icon;

  return (
    <section
      id="logistics"
      ref={containerRef}
      className="relative min-h-[300vh] bg-[#1F1F1F] border-t border-[#D3D3D3]/15"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-20 sm:top-24 min-h-[calc(100vh-5rem)] flex flex-col justify-center py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-8 text-right">
            <div className="text-xs font-mono uppercase tracking-widest text-[#D3D3D3] mb-2">
              سلسلة التوريد والشحن المباشر
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F2F2F2] tracking-tight">
              مسار منظم وشفاف من الميناء العالمي إلى بنغازي
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#D3D3D3] leading-relaxed">
              مرر لأسفل لمتابعة تسلسل الشحنة عبر المراحل الأربع، أو اضغط على المرحلة للانتقال المباشر.
            </p>
          </div>

          {/* Segmented Stage Control: Numbers only on mobile (< md), Full text on desktop (md+) */}
          <div className="mb-6 flex justify-start overflow-x-auto pb-1">
            <Segmented
              value={activeStageId}
              onChange={handleTabChange}
              name="logistics-stage-pill"
              options={stages.map((s) => ({
                value: s.id,
                label: (
                  <span className="inline-flex items-center gap-1 font-bold">
                    <span className="font-mono text-xs sm:text-sm">{s.index}</span>
                    <span className="hidden md:inline">. {s.title}</span>
                  </span>
                ),
              }))}
            />
          </div>

          {/* Interactive Tilt Card Deck */}
          <div
            className="perspective-[1400px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStageId}
                initial={{ opacity: 0, y: 30, rotateX: 6, scale: 0.98 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: mouseTilt.rotateX,
                  rotateY: mouseTilt.rotateY,
                  scale: 1,
                }}
                exit={{ opacity: 0, y: -25, rotateX: -6, scale: 0.98 }}
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <GlassPanel className="p-6 sm:p-10 border border-[#D3D3D3]/20 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                  
                  {/* Subtle Background Glow Tile */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#D3D3D3]/10 to-transparent blur-3xl pointer-events-none" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                    
                    {/* Right Column: Stage Description & Verification Points */}
                    <div className="lg:col-span-7 space-y-4 text-right">
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#262626] border border-[#D3D3D3]/20 flex items-center justify-center text-[#F2F2F2] shadow-inner">
                          <StageIcon size="22" variant="Bold" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm font-bold text-[#D3D3D3] px-2 py-0.5 rounded bg-[#181818] border border-[#D3D3D3]/20">
                            {currentStage.index}
                          </span>
                          <span className="text-xs text-[#D3D3D3]">
                            {currentStage.tag}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[#F2F2F2] tracking-tight">
                        {currentStage.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[#D3D3D3] leading-relaxed">
                        {currentStage.summary}
                      </p>

                      <div className="space-y-2.5 pt-2">
                        {currentStage.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-sm text-[#D3D3D3]">
                            <TickCircle size="18" className="text-[#F2F2F2] shrink-0 mt-0.5" variant="Bold" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Left Column: Authorized Hubs in this Stage */}
                    <div className="lg:col-span-5 bg-[#181818] rounded-xl p-6 border border-[#D3D3D3]/15 space-y-3">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#D3D3D3] border-b border-[#D3D3D3]/15 pb-3">
                        الموانئ والمحطات المعتمدة في هذه المرحلة
                      </div>

                      <div className="space-y-2">
                        {currentStage.hubs.map((hub, idx) => (
                          <ListRow
                            key={idx}
                            title={hub}
                            leading={<ShieldSecurity size="18" className="text-[#D3D3D3]" />}
                          />
                        ))}
                      </div>

                      <p className="pt-2 text-xs text-[#D3D3D3] leading-relaxed">
                        تلتزم شركة المهاري الليبية بإبلاغ عملائها بكافة التحديثات التشغيلية والمواعيد المحدثة عبر التواصل المباشر.
                      </p>
                    </div>

                  </div>
                </GlassPanel>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
