"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Grain from "@/components/Grain";
import InquiryModal from "@/components/InquiryModal";
import MenuOverlay from "@/components/MenuOverlay";

const reports = [
  { featured: true, cat: "Featured Report · March 2025", title: "The Premium Indian Consumer in 2025: What Japanese Brands Need to Know", excerpt: "Shifting purchase behaviour, the rise of authenticity-seeking consumers in Delhi NCR, and why the window for first-mover positioning is narrowing.", meta: "15 min · Yorkstn Research" },
  { featured: false, cat: "Retail Brief · Q1 2025", title: "Gurugram Premium Retail: Location Tier Analysis", excerpt: "Which corridors are performing and where early-stage premium brands should position for 2025–26.", meta: "8 min" },
  { featured: false, cat: "Regulatory Update · 2025", title: "BIS Certification Changes Affecting Japanese Imports in 2025", excerpt: "Recent changes to mandatory BIS categories and what they mean for Japanese brands planning India entry.", meta: "6 min" },
];

export default function InsightsPage() {
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
        <div className="pgh-bg">INSIGHTS</div>
        <span className="ey rv">Market Intelligence</span>
        <h1 className="pgh-h1 rv d1">India Retail<br /><em>Insights</em></h1>
        <p className="pgh-s rv d2">We publish ongoing reports on the Indian premium retail market — for Japanese brands evaluating or actively pursuing an India entry.</p>
      </div>

      <div style={{ padding: '96px 60px' }}>
        <span className="ey rv" style={{ marginBottom: 14, display: 'block' }}>Latest Reports</span>
        <h2 className="rv d1" style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(34px,4.5vw,62px)', fontWeight: 300, lineHeight: 1.05, color: 'var(--b)', marginTop: 18 }}>
          Current thinking<br />on <em style={{ fontStyle: 'italic', color: 'var(--bl)' }}>India's market</em>
        </h2>
        <p className="rv d2" style={{ fontSize: 13, lineHeight: 2, color: 'var(--tx)', fontWeight: 300, maxWidth: 520, marginTop: 18, marginBottom: 56 }}>
          Updated as the market evolves. Write to connect@yorkstn.com to receive new reports directly.
        </p>

        <div className="rv d2" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 2, background: 'rgba(55,24,37,.08)' }}>
          {reports.map((r, i) => (
            <article key={i} style={{ background: r.featured ? 'var(--b)' : 'var(--c)', padding: '40px 34px', display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontSize: 8, letterSpacing: '.28em', textTransform: 'uppercase', color: r.featured ? 'var(--g)' : 'var(--mt)', marginBottom: 14, fontWeight: 400 }}>{r.cat}</p>
              <h3 style={{ fontFamily: 'var(--fd)', fontSize: r.featured ? 28 : 21, fontWeight: 400, color: r.featured ? 'var(--c)' : 'var(--b)', lineHeight: 1.25, flex: 1, marginBottom: 12 }}>{r.title}</h3>
              <p style={{ fontSize: 11.5, lineHeight: 1.9, color: r.featured ? 'rgba(240,232,224,.48)' : 'var(--mt)', fontWeight: 300, marginBottom: 18 }}>{r.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 8, letterSpacing: '.18em', textTransform: 'uppercase', color: r.featured ? 'rgba(240,232,224,.22)' : 'var(--mt)', fontWeight: 400, borderTop: `1px solid ${r.featured ? 'rgba(240,232,224,.06)' : 'rgba(55,24,37,.08)'}`, paddingTop: 14 }}>
                <span>{r.meta}</span>
                <span style={{ color: 'var(--g)' }}>Read →</span>
              </div>
            </article>
          ))}
        </div>

        <p className="rv" style={{ marginTop: 44, padding: '24px 32px', background: 'rgba(55,24,37,.05)', borderLeft: '2px solid rgba(192,154,98,.38)', fontSize: 11, lineHeight: 1.9, color: 'var(--mt)', fontWeight: 300, fontStyle: 'italic' }}>
          New reports are published quarterly. To be notified when a new report is released, write to{' '}
          <a href="mailto:connect@yorkstn.com" style={{ color: 'var(--bl)' }}>connect@yorkstn.com</a>
        </p>
      </div>

      <Footer />
    </>


  );
}
