# Al-Mahari Allibieah Company (شركة المهاري الليبية) - Website Specification

## 1. Executive Summary & Brand Identity
- **Client**: Al-Mahari Allibieah Company (شركة المهاري الليبية)
- **Domain/Location**: Hawari, Khalid Ibn Al-Walid Square, Benghazi, Libya
- **Core Business**: Sourcing and importing luxury motor vehicles (Toyota, Hyundai, and premium marques) and genuine spare parts from global markets directly to Benghazi, backed by local administrative vehicle licensing and registration assistance.
- **Language & Orientation**: Arabic (RTL) tailored specifically for Libyan car buyers, corporate fleet managers, and private importers.
- **Aesthetic Direction**: Executive Automotive Dark (`#0B0F17` obsidian base, brushed titanium chrome accents, cold cyan/ice-blue LED highlights derived from the brand's metallic emblem).

---

## 2. Information Architecture & Content Mapping

### 2.1 Hero Section
- **Brand Title**: شركة المهاري الليبية | Al‑Mahari Allibieah Company
- **Positioning**: استيراد السيارات الفاخرة وقطع الغيار — من الأسواق العالمية إلى بنغازي
- **Core Value Pillar**: سيارات موثوقة. شحن آمن. خدمة محلية.
- **Visual Centerpiece**: Master metallic vehicle emblem with dynamic backlighting.
- **Primary CTAs**:
  - "طلب استيراد سيارة" (Launches Smart Inquiry Builder)
  - "طلب قطع غيار أصلية" (Jumps directly to parts inquiry)
  - Direct Phone Action: `+218 92 511 5020`

### 2.2 Core Services (Bento Grid)
1. **الاستيراد الدولي للمركبات (Global Vehicle Sourcing)**:
   - Dedicated vehicle acquisition from leading worldwide hubs (South Korea, Japan, UAE/Gulf, Germany).
   - Core brands highlighted: Toyota, Hyundai, Lexus, Mercedes-Benz, Genesis.
2. **قطع الغيار الأصلية (Genuine Auto Spare Parts)**:
   - Essential maintenance and repair components, drivetrain parts, and consumables with guaranteed authenticity and compatibility with the Libyan environment.
3. **التسجيل والترخيص وتوثيق المحركات (Vehicle Registration & Licensing Assistance)**:
   - Direct handling of regulatory paperwork with the local vehicle licensing department (قسم تراخيص المركبات الآلية).
   - Accurate certification of chassis numbers (VIN) and engine serial numbers for compliant registration.

### 2.3 Interactive Logistics & Transit Visualizer
- **Stage 1: التوريد والاعتماد (Global Sourcing & Origin Inspection)** - Inspection and purchase verification in origin ports.
- **Stage 2: الشحن البحري الآمن (Secure Ocean Transit)** - Containerized and Ro-Ro shipping across verified maritime lines.
- **Stage 3: الوصول لميناء بنغازي (Benghazi Seaport Clearance)** - Port arrival and customs processing.
- **Stage 4: التسليم بمقر الهواري (Hawari Facility Delivery & Handover)** - Final yard inspection, client handover, or doorstep delivery.

### 2.4 Why Al-Mahari (لماذا المهاري؟) & Process (كيف نعمل)
- **لماذا المهاري؟**:
  - خبرة متخصصة في الاستيراد الدولي.
  - سلسلة توريد واضحة ومسار شحن آمن ومُتابع خطوة بخطوة.
  - خدمة محلية مباشرة ومكتب إداري معتمد في بنغازي.
- **كيف نعمل (4 خطوات واضحة)**:
  1. شاركنا مواصفات السيارة أو قطعة الغيار المطلوبة.
  2. نراجع الخيارات، التوفر، والتكلفة الإجمالية الواصلة لبنغازي.
  3. ننسّق الشراء، الشحن البحري، والإجراءات اللوجستية.
  4. نتابع الشحنة بدقة حتى وصولها وتسليمها بالهواري.

### 2.5 Smart Inquiry Builder (نموذج الطلب الذكي)
- Interactive tabs: **طلب سيارة** / **طلب قطعة غيار**.
- Fields:
  - Vehicle Type & Brand (Toyota, Hyundai, Mercedes, Lexus, Other).
  - Model & Year range (e.g. 2020 - 2025).
  - Part Name / Chassis number (VIN) if applicable.
  - Client Full Name & Mobile Number.
  - Additional Notes / Specifications.
- Execution: Compiles an organized, professional Arabic message and dispatches it directly to WhatsApp (+218 92 511 5020) with a one-click button, plus alternative direct hotline dialing.

### 2.6 Benghazi Headquarters & Contact Hub
- **Physical Address**: ساحة خالد بن الوليد، منطقة الهواري، بنغازي، ليبيا.
- **Direct Phone**: `+218 92 511 5020`
- **Official Email**: `sharaf.alomami@gmail.com`
- **Operating Hours**: السبت - الخميس: 9:00 صباحاً - 8:00 مساءً.

---

## 3. Technical Architecture & Component Tree

```
al-mahari-web/
├── public/
│   ├── images/
│   │   └── almahariallibieah_logo.jpeg
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx         (RTL root layout, Cairo Arabic font, SEO metadata)
│   │   ├── page.tsx           (Main single-page orchestrator)
│   │   └── globals.css        (Tailwind, liquid glass refraction, dark obsidian theme)
│   └── components/
│       ├── Navbar.tsx         (Frosted glass sticky header with logo & anchors)
│       ├── Hero.tsx           (Asymmetric luxury automotive hero with emblem)
│       ├── ServicesBento.tsx  (Interactive 3-card bento grid)
│       ├── LogisticsFlow.tsx  (Visual step-by-step shipping route from ports to Benghazi)
│       ├── WorkflowSection.tsx(4-step ordering process & Why Us differentiators)
│       ├── InquiryBuilder.tsx (Interactive vehicle & spare parts WhatsApp form)
│       ├── LocationCard.tsx   (Hawari branch details, hours, contact info, interactive map link)
│       └── Footer.tsx         (Brand footer, registration info, copyright)
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

---

## 4. Design Engineering & Anti-Slop Safeguards
- **Font Stack**: `Cairo` via `next/font/google` for Arabic headings and body copy, with `Geist Mono` / `Outfit` for numbers, chassis specs, and telephone formats.
- **Color Discipline**: Obsidian (`#070A10`), Titanium Slate (`#0F172A`, `#1E293B`), Brushed Silver (`#94A3B8`, `#E2E8F0`), and Ice-Blue LED glow (`#38BDF8`). No saturated purple or generic SaaS gradients.
- **Motion & Physics**: Spring transitions (`type: 'spring', stiffness: 120, damping: 20`) on buttons and cards using Framer Motion. Zero CPU layout thrashing.
- **Responsive Guarantee**: Mobile-first collapse with `min-h-[100dvh]` hero handling for mobile Safari/Chrome.
