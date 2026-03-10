"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Grain from "@/components/Grain";
import InquiryModal from "@/components/InquiryModal";
import MenuOverlay from "@/components/MenuOverlay";

const founders = [
  {
    init: "V",
    role: "Co-Founder · Creative Direction & Brand Strategy",
    name: "Vedika\nBhardwaj",
    bio: "Fashion Design graduate from NIFT Delhi, where a garment she designed was selected for Bharat Tex. She worked with designers and export houses across India, gaining firsthand insight into production, branding, and the tension between creative vision and commercial reality. A minor in business crystallised a pivotal shift — from being a designer to becoming a builder of brand ecosystems.",
    creds: ["NIFT Delhi — Fashion Design", "Garment presented at Bharat Tex", "Experience with designers & export houses"],
  },
  {
    init: "M",
    role: "Co-Founder · Operations & Structural Systems",
    name: "Madhav\nSharma",
    bio: "Operational Research and Economics graduate from the University of Delhi. His foundation in statistics and systems optimisation gives him the ability to design backend structures built for long-term efficiency and scale. His understanding of Indian consumer economics lets him translate creative brand vision into functional operating infrastructure that can carry real growth.",
    creds: ["University of Delhi — Operational Research & Economics", "Systems optimisation & scalable infrastructure", "Indian consumer economics & retail behaviour"],
  },
];

const philosophy = [
  { n: "I", t: "Community Before Commerce", d: "We build trust and loyal community before pushing growth. Every partnership is taken seriously. Every launch is a statement." },
  { n: "II", t: "Depth Before Scale", d: "We start with Gurugram, build something real, then grow. Scale follows a strong foundation — never the other way around." },
  { n: "III", t: "Identity Is Non-Negotiable", d: `We don"t alter brand identity for local convenience. We cultivate understanding and loyalty around what the brand truly is.` },
];

export default function AboutPage() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".rv");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Cursor /><Grain /><Navbar /><MenuOverlay /><InquiryModal />


      <div className="pgh">
        <div className="pgh-bg">ABOUT</div>
        <span className="ey rv">About Yorkstn</span>
        <h1 className="pgh-h1 rv d1">Where Creativity<br /><em>Met Structure</em></h1>
        <p className="pgh-s rv d1">Yorkstn was built on a shared frustration: watching brands with real identity enter India without the structural backing to protect it.</p>
      </div>

      <div style={{ padding: '96px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, marginBottom: 72, alignItems: 'end', paddingBottom: 56, borderBottom: '1px solid rgba(55,24,37,.1)' }}>
          <h2 className="rv" style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(34px,4.5vw,62px)', fontWeight: 300, lineHeight: 1.05, color: 'var(--b)', marginTop: 18 }}>
            The <em style={{ fontStyle: 'italic', color: 'var(--bl)' }}>Founding</em><br />Idea
          </h2>
          <p className="rv d2" style={{ fontSize: 13.5, lineHeight: 2.2, color: 'var(--tx)', fontWeight: 300 }}>
            India doesn't need more brands — it needs finer curation and a more disciplined approach to entry. Yorkstn was conceived as the answer to that problem. Not a consulting firm. An operational partner that steps in and executes.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'rgba(55,24,37,.08)' }}>
          {founders.map((f) => (
            <article key={f.init} className="rv" style={{ background: 'var(--c)', padding: '52px 44px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 22, right: 22, fontFamily: 'var(--fd)', fontSize: 130, fontWeight: 300, color: 'rgba(55,24,37,.047)', lineHeight: 1 }}>{f.init}</div>
              <p style={{ fontSize: 8, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--g)', marginBottom: 14, fontWeight: 400 }}>{f.role}</p>
              <h2 style={{ fontFamily: 'var(--fd)', fontSize: 42, fontWeight: 300, color: 'var(--b)', lineHeight: 1.1, marginBottom: 24, whiteSpace: 'pre-line' }}>{f.name}</h2>
              <p style={{ fontSize: 12, lineHeight: 2.1, color: 'var(--tx)', fontWeight: 300, marginBottom: 24 }}>{f.bio}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9, paddingTop: 22, borderTop: '1px solid rgba(55,24,37,.1)' }}>
                {f.creds.map((c) => (
                  <div key={c} style={{ fontSize: 10, letterSpacing: '.1em', color: 'var(--mt)', fontWeight: 400, display: 'flex', alignItems: 'center', gap: 9 }}>
                    <span style={{ color: 'var(--g)', opacity: .6, fontSize: 8.5 }}>—</span>{c}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--b)', padding: '60px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 36 }}>
        {philosophy.map((p, i) => (
          <div key={p.n} className="rv" style={{ padding: '0 18px', borderRight: i < 2 ? '1px solid rgba(240,232,224,.06)' : 'none' }}>
            <div style={{ fontFamily: 'var(--fd)', fontSize: 44, fontWeight: 300, color: 'rgba(240,232,224,.1)', lineHeight: 1, marginBottom: 10 }}>{p.n}</div>
            <p style={{ fontFamily: 'var(--fd)', fontSize: 19, fontWeight: 400, color: 'rgba(240,232,224,.78)', marginBottom: 10 }}>{p.t}</p>
            <p style={{ fontSize: 11.5, lineHeight: 1.9, color: 'rgba(240,232,224,.42)', fontWeight: 300 }}>{p.d}</p>
          </div>
        ))}
      </div>

      <Footer />
    </>


  );
}
