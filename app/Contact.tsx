‘use client’;

import { useEffect } from ‘react’;
import Navbar from ‘@/components/Navbar’;
import Footer from ‘@/components/Footer’;
import Cursor from ‘@/components/Cursor’;
import Grain from ‘@/components/Grain’;
import InquiryModal from ‘@/components/InquiryModal’;
import MenuOverlay from ‘@/components/MenuOverlay’;
import { useInquiry } from ‘@/components/InquiryContext’;

const details = [
{ l: ‘Operational Base’,   v: ‘Gurugram, Delhi NCR\nIndia’ },
{ l: ‘Current Focus’,      v: ‘Japanese Premium & Craft Brands’ },
{ l: ‘Partnership Models’, v: ‘Master Franchise · Joint Venture\nDistribution Partner’ },
{ l: ‘Launch Market’,      v: ‘Gurugram, Delhi NCR’ },
];

export default function ContactPage() {
const { openInquiry } = useInquiry();

useEffect(() => {
const els = document.querySelectorAll<HTMLElement>(’.rv’);
const io = new IntersectionObserver(
(entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add(‘in’); io.unobserve(e.target); } }),
{ threshold: 0.07, rootMargin: ‘0px 0px -40px 0px’ }
);
els.forEach((el) => io.observe(el));
return () => io.disconnect();
}, []);

return (
<>
<Cursor /><Grain /><Navbar /><MenuOverlay /><InquiryModal />

```
  <div style={{ minHeight: 'calc(100vh - 72px)', paddingTop: 72, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
    {/* Left */}
    <div style={{ background: 'var(--b)', padding: '72px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -20, bottom: -36, fontSize: 280, color: 'rgba(255,255,255,.022)', fontWeight: 100, lineHeight: 1, pointerEvents: 'none' }}>連絡</div>
      <span className="ey rv" style={{ color: 'var(--g)', marginBottom: 28, display: 'block' }}>
        <span style={{ width: 24, height: 1, background: 'var(--g)', display: 'inline-block', marginRight: 12, verticalAlign: 'middle' }} />
        Connect with Yorkstn
      </span>
      <h1 className="rv d1" style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(42px,5.5vw,76px)', fontWeight: 300, lineHeight: .95, color: 'var(--c)', marginBottom: 28 }}>
        Ready to Enter<br /><em style={{ fontStyle: 'italic', color: 'rgba(240,232,224,.42)' }}>India Right?</em>
      </h1>
      <p className="rv d2" style={{ fontSize: 13, lineHeight: 2.1, color: 'rgba(240,232,224,.52)', maxWidth: 420, fontWeight: 300, marginBottom: 44 }}>
        If you represent a brand built on craft and a long-term view — and you're seriously considering India — we'd like to hear from you. Every conversation starts with understanding your brand, not pitching ours.
      </p>
      <a className="rv d3" href="mailto:connect@yorkstn.com" style={{ fontFamily: 'var(--fd)', fontSize: 21, fontWeight: 300, color: 'var(--g)', display: 'flex', alignItems: 'center', gap: 12, transition: 'gap .3s' }}>
        connect@yorkstn.com →
      </a>
    </div>

    {/* Right */}
    <div className="rv d1" style={{ background: 'var(--cd)', padding: '72px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2 style={{ fontFamily: 'var(--fd)', fontSize: 26, fontWeight: 300, color: 'var(--b)', marginBottom: 32, paddingBottom: 22, borderBottom: '1px solid rgba(55,24,37,.1)' }}>
        Yorkstn at a Glance
      </h2>
      <div>
        {details.map((d, i) => (
          <div key={d.l} style={{ padding: '22px 0', borderBottom: '1px solid rgba(55,24,37,.07)', borderTop: i === 0 ? '1px solid rgba(55,24,37,.07)' : 'none' }}>
            <p style={{ fontSize: 8, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--g)', marginBottom: 7, fontWeight: 400 }}>{d.l}</p>
            <p style={{ fontFamily: 'var(--fd)', fontSize: 19, fontWeight: 300, color: 'var(--b)', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{d.v}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32, padding: '20px 22px', background: 'rgba(55,24,37,.05)', borderLeft: '2px solid rgba(192,154,98,.33)' }}>
        <p style={{ fontSize: 11, lineHeight: 1.9, color: 'var(--mt)', fontStyle: 'italic', fontWeight: 300 }}>
          "We are not a vendor. If we believe in a brand, we are willing to invest alongside it — capital, time, and presence on the ground."
        </p>
      </div>
      <button className="btn btn-d" onClick={openInquiry} style={{ marginTop: 28, width: '100%', justifyContent: 'center' }}>
        Submit Brand Enquiry →
      </button>
    </div>
  </div>

  <Footer />
</>
```

);
}
