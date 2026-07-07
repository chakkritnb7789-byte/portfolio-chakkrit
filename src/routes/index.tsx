import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Mail, Phone, MapPin, Sparkles, Palette, Video, Code2, Bot, ArrowDown } from "lucide-react";
import { Scene3D } from "@/components/Scene3D";
import profileImg from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const skills = [
  { icon: Award, title: "ชนะเลิศระดับจังหวัด", desc: "อันดับ 1 ทำสื่อดิจิทัลคอนเทนต์ Motion Graphic & Info Graphic จังหวัดร้อยเอ็ด" },
  { icon: Sparkles, title: "V-NET ระดับดีเยี่ยม", desc: "การทดสอบระดับชาติสำหรับนักเรียนอาชีวศึกษา ระดับ ปวช. คะแนนดีเยี่ยม" },
  { icon: Palette, title: "Graphic Design", desc: "ออกแบบแบนเนอร์ โปสเตอร์ สื่อประชาสัมพันธ์ และงานกราฟิกหลากหลายรูปแบบ" },
  { icon: Video, title: "Motion & Video", desc: "ตัดต่อวิดีโอและสร้าง Motion Graphic สำหรับสื่อออนไลน์" },
  { icon: Code2, title: "Web & App", desc: "เคยพัฒนาโปรเจกต์เว็บไซต์และแอปพลิเคชันแอนดรอยด์" },
  { icon: Bot, title: "AI Prompting", desc: "มีทักษะการสร้าง Prompt และใช้ AI ช่วยเพิ่มประสิทธิภาพในการทำงาน" },
];

const experience = [
  {
    period: "ตุลาคม 2024 — มีนาคม 2025",
    place: "7-Eleven สาขาประชาร่วมมิตร",
    role: "พนักงานร้านสะดวกซื้อ (Internship)",
    points: [
      "เรียนรู้ทักษะการบริการและดูแลลูกค้า",
      "ฝึกการจัดเรียงสินค้า เติมสินค้า และตรวจสอบสต็อก",
      "พัฒนาการสื่อสารและการทำงานเป็นทีม",
      "ฝึกแก้ไขปัญหาเฉพาะหน้าและทำงานภายใต้ความกดดัน",
    ],
  },
  {
    period: "กุมภาพันธ์ 2024 — เมษายน 2024",
    place: "ยอกี หม่องนี่ล่ะ กริลล์บาร์",
    role: "พนักงานร้านอาหาร (Part-time)",
    points: [
      "ฝึกทักษะการบริการและต้อนรับลูกค้า",
      "พัฒนาการสื่อสารกับลูกค้าและเพื่อนร่วมงาน",
      "เรียนรู้การทำงานเป็นทีมและจัดการหลายงานพร้อมกัน",
    ],
  },
];

const education = [
  { year: "2012 — 2016", school: "วิทยาลัยอาชีวศึกษาร้อยเอ็ด", detail: "ระดับ ปวช. แผนกวิชาคอมพิวเตอร์ธุรกิจ" },
  { year: "2009 — 2012", school: "โรงเรียนบ้านเขวาทุ่ง", detail: "ระดับมัธยมต้น" },
  { year: "ปัจจุบัน", school: "วิทยาลัยอาชีวศึกษาร้อยเอ็ด", detail: "ระดับ ปวส. สาขาวิชาเทคโนโลยีสารสนเทศ" },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Scene3D />

      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-40">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-display font-bold text-lg tracking-tight">
            <span className="text-gradient">จักรกฤษณ์</span>
            <span className="text-muted-foreground">.dev</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">เกี่ยวกับ</a>
            <a href="#skills" className="hover:text-foreground transition">ทักษะ</a>
            <a href="#experience" className="hover:text-foreground transition">ประสบการณ์</a>
            <a href="#contact" className="hover:text-foreground transition">ติดต่อ</a>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary/90 text-primary-foreground px-4 py-2 text-sm font-medium gold-ring hover:opacity-90 transition"
          >
            <Mail className="w-4 h-4" /> ติดต่อ
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-center px-6 pt-24">
        <div className="mx-auto max-w-6xl w-full grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              พร้อมเรียนรู้และร่วมงาน
            </div>
            <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.05] tracking-tight">
              สวัสดี, ผม<br />
              <span className="text-gradient animate-gradient">จักรกฤษณ์ สุวรรณบาง</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
              นักออกแบบกราฟิกและ Motion Graphic — สร้างสรรค์งานภาพที่เล่าเรื่องได้ด้วยจังหวะและสีสัน
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#experience" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium gold-ring hover:opacity-90 transition">
                ดูผลงาน <ArrowDown className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium hover:bg-white/5 transition">
                ติดต่อผม
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> ร้อยเอ็ด, ไทย</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> 091-047-4405</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto"
          >
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent blur-2xl" />
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/40 to-accent/40 blur-xl opacity-70" />
              <div className="relative rounded-[2rem] overflow-hidden gold-ring glass p-2">
                <img
                  src={profileImg}
                  alt="จักรกฤษณ์ สุวรรณบาง"
                  className="w-64 md:w-80 h-auto rounded-[1.6rem] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 text-sm">
                <div className="text-xs text-muted-foreground">ตำแหน่งเป้าหมาย</div>
                <div className="font-semibold text-gradient">Graphic Designer</div>
              </div>
              <div className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-3 text-sm">
                <div className="text-xs text-muted-foreground">อายุ</div>
                <div className="font-semibold">20 ปี</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="เกี่ยวกับฉัน" title="ผู้เรียนที่หลงใหลการออกแบบ">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { k: "การศึกษา", v: "ปวส. สาขาเทคโนโลยีสารสนเทศ วิทยาลัยอาชีวศึกษาร้อยเอ็ด" },
            { k: "สายงานที่สนใจ", v: "Graphic Design, Motion Graphic, สื่อดิจิทัล" },
            { k: "จุดแข็ง", v: "การเรียนรู้ไว รับผิดชอบ และทำงานเป็นทีม" },
          ].map((c, i) => (
            <motion.div
              key={c.k}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp} transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="text-xs uppercase tracking-widest text-primary">{c.k}</div>
              <div className="mt-3 text-lg leading-relaxed">{c.v}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="ทักษะ & รางวัล" title="สิ่งที่ผมทำได้ดี">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp} transition={{ delay: i * 0.08 }}
              className="group glass rounded-2xl p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="w-11 h-11 rounded-xl grid place-items-center bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" eyebrow="ประสบการณ์ทำงาน" title="เส้นทางที่ผ่านมา">
        <div className="relative pl-6 md:pl-8">
          <div className="absolute left-1 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          <div className="space-y-8">
            {experience.map((e, i) => (
              <motion.div
                key={e.place}
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp} transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[22px] md:-left-[30px] top-6 w-3.5 h-3.5 rounded-full bg-primary gold-ring" />
                <div className="glass rounded-2xl p-6 md:p-7">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="rounded-full bg-primary/15 text-primary px-3 py-1 font-medium">{e.period}</span>
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{e.role}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{e.place}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" eyebrow="การศึกษา" title="เส้นทางการเรียนรู้">
        <div className="grid md:grid-cols-3 gap-5">
          {education.map((ed, i) => (
            <motion.div
              key={ed.school + i}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp} transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <GraduationCap className="w-6 h-6 text-primary" />
              <div className="mt-3 text-xs uppercase tracking-widest text-primary">{ed.year}</div>
              <div className="mt-2 font-semibold text-lg leading-tight">{ed.school}</div>
              <p className="mt-2 text-sm text-muted-foreground">{ed.detail}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" className="relative px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={fadeUp}
            className="glass rounded-3xl p-10 md:p-14 text-center gold-ring"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-primary">ติดต่อ</div>
            <h2 className="mt-3 font-display font-extrabold text-4xl md:text-5xl">
              พร้อมร่วมงาน<span className="text-gradient"> ไปด้วยกัน</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              สนใจร่วมงานหรือพูดคุยเกี่ยวกับโปรเจกต์ ทักมาได้เลยครับ ยินดีเสมอ
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="mailto:chakkritnb1123@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition">
                <Mail className="w-4 h-4" /> chakkritnb1123@gmail.com
              </a>
              <a href="tel:0910474405" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium hover:bg-white/5 transition">
                <Phone className="w-4 h-4 text-primary" /> 091-047-4405
              </a>
            </div>
            <div className="mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" /> จังหวัดร้อยเอ็ด, ประเทศไทย
            </div>
          </motion.div>

          <footer className="mt-12 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} จักรกฤษณ์ สุวรรณบาง — ออกแบบด้วยใจ ❤
          </footer>
        </div>
      </section>
    </div>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp} className="mb-12 max-w-2xl"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</div>
          <h2 className="mt-3 font-display font-extrabold text-4xl md:text-5xl leading-tight">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
