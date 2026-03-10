"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Grain from "@/components/Grain";
import InquiryModal from "@/components/InquiryModal";
import MenuOverlay from "@/components/MenuOverlay";
import { useTransparency } from "@/hooks/useTransparency";

const stats = [
  { n: "3rd", l: "Global rank by purchasing\npower parity", dk: false },
  { n: "~80M", l: "Affluent urban households\nprojected by 2030", dk: false },
  { n: "12%+", l: "Annual premium retail\ngrowth rate", dk: false },
  {
    n: "NCR First", l: "Highest premium consumer concentration in India", dk: true,
    sub: "Gurugram hosts the deepest pool of globally-oriented, quality-conscious consumers in the country."
  },
];

const pillars = [
  { n: "I", t: "Philosophical Alignment", d: `Japanese brands build for longevity. So does India"s premium consumer. The fit is cultural, not just commercial.` },
  { n: "II", t: "Category White Space", d: "Japanese craft categories — ceramics, stationery, lifestyle goods, fashion — have very limited authentic representation in India's premium retail." },
  { n: "III", t: "First-Mover Advantage", d: "Brands that establish presence now will define what Japanese premium means to the Indian consumer for years ahead." },
];

export default function IndiaPage() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".rv");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useTransparency();


  return (
    <>
      <Cursor /><Grain /><Navbar /><MenuOverlay /><InquiryModal />


      <div className="pgh">
        <div className="pgh-bg">INDIA</div>
        <span className="ey rv">India Market</span>
        <h1 className="pgh-h1 rv d1">The Opportunity<br />is <em>Right Now</em></h1>
        <p className="pgh-s rv d2">India ranks third globally in purchasing power parity and its premium consumer base is shifting — toward quality, provenance, and long-term value. Delhi NCR is where this shift is most concentrated.</p>
      </div>

      <div style={{ padding: '96px 60px' }}>
        {/* Intro */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, marginBottom: 72, alignItems: 'start' }}>
          <div>
            <span className="ey rv" style={{ marginBottom: 18, display: 'block' }}>Why India, Why Now</span>
            <h2 className="rv d1" style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(34px,4.5vw,62px)', fontWeight: 300, lineHeight: 1.05, color: 'var(--b)', marginTop: 18 }}>
              India doesn't need<br />more brands.<br /><em style={{ fontStyle: 'italic', color: 'var(--bl)' }}>It needs the right ones.</em>
            </h2>
          </div>
          <div style={{ paddingTop: 56 }}>
            <p className="rv d2" style={{ fontSize: 13.5, lineHeight: 2.2, color: 'var(--tx)', fontWeight: 300, marginBottom: 18 }}>
              The Indian consumer right for a Japanese craft brand is well-travelled, globally informed, and actively seeking products with genuine provenance and long-term value. They've experienced these brands abroad. They're waiting for an authentic, well-presented access point at home.
            </p>
            <p className="rv d3" style={{ fontSize: 13.5, lineHeight: 2.2, color: 'var(--tx)', fontWeight: 300 }}>
              The challenge isn't demand — it's the absence of a disciplined entry partner who protects brand identity while navigating India's structural complexity. That gap is exactly what Yorkstn fills.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="rv" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2, background: 'rgba(55,24,37,.08)', marginBottom: 72 }}>
          {stats.map((s) => (
            <div key={s.n} style={{ background: s.dk ? 'var(--b)' : 'var(--c)', padding: '40px 32px' }}>
              <div style={{ fontFamily: 'var(--fd)', fontSize: s.dk ? 'clamp(16px,1.8vw,24px)' : 'clamp(32px,4vw,52px)', fontWeight: 300, color: s.dk ? 'var(--c)' : 'var(--b)', lineHeight: 1, marginBottom: 7 }}>{s.n}</div>
              <div style={{ fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: s.dk ? 'var(--g)' : 'var(--mt)', fontWeight: 400, lineHeight: 1.7, whiteSpace: 'pre-line' }}>{s.l}</div>
              {s.sub && <p style={{ fontSize: 11.5, color: 'rgba(240,232,224,.42)', marginTop: 9, lineHeight: 1.8, fontWeight: 300 }}>{s.sub}</p>}
            </div>
          ))}
        </div>

        {/* Why Japan */}
        <div className="rv" style={{ background: 'var(--b)', padding: '72px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center', position: 'relative', overflow: 'hidden', margin: '0 -60px' }}>
          <div style={{ position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)', fontSize: 300, color: 'rgba(255,255,255,.022)', fontWeight: 100, lineHeight: 1, pointerEvents: 'none' }}>日本</div>
          <div>
            <span className="ey" style={{ color: 'var(--g)', marginBottom: 18, display: 'block' }}>
              <span style={{ width: 24, height: 1, background: 'var(--g)', display: 'inline-block', marginRight: 12, verticalAlign: 'middle' }} />
              Why Japan Specifically
            </span>
            <h2 style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(34px,4.5vw,58px)', fontWeight: 300, lineHeight: 1.05, color: 'var(--c)', marginTop: 18, marginBottom: 24 }}>
              A shared philosophy<br />of <em style={{ fontStyle: 'italic', color: 'rgba(240,232,224,.42)' }}>craft &amp; patience</em>
            </h2>
            <p style={{ fontSize: 13, lineHeight: 2.2, color: 'rgba(240,232,224,.58)', fontWeight: 300, marginBottom: 16 }}>
              Japan's brand-building philosophy — discipline, patience, and respect for craft — closely mirrors how we see the right way to enter India. Community comes before commerce. The product comes before scale.
            </p>
            <p style={{ fontSize: 13, lineHeight: 2.2, color: 'rgba(240,232,224,.58)', fontWeight: 300 }}>
              This connects deeply with India's own cultural emphasis on relationships and long-term trust. We understand markets where reputation matters more than advertising reach.
            </p>
          </div>
          <div>
            {pillars.map((p, i) => (
              <div key={p.n} style={{ padding: '26px 0', borderBottom: '1px solid rgba(240,232,224,.07)', borderTop: i === 0 ? '1px solid rgba(240,232,224,.07)' : 'none', display: 'flex', gap: 22 }}>
                <div style={{ fontFamily: 'var(--fd)', fontSize: 30, fontWeight: 300, color: 'var(--g)', lineHeight: 1, flexShrink: 0, width: 34 }}>{p.n}</div>
                <div>
                  <p style={{ fontFamily: 'var(--fd)', fontSize: 17, fontWeight: 400, color: 'rgba(240,232,224,.78)', marginBottom: 5 }}>{p.t}</p>
                  <p style={{ fontSize: 12, lineHeight: 1.9, color: 'rgba(240,232,224,.52)', fontWeight: 300 }}>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>


  );
}
