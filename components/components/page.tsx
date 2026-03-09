‘use client’;

import { useEffect, useState } from ‘react’;
import Navbar from ‘@/components/Navbar’;
import Footer from ‘@/components/Footer’;
import Cursor from ‘@/components/Cursor’;
import Grain from ‘@/components/Grain’;
import InquiryModal from ‘@/components/InquiryModal’;
import MenuOverlay from ‘@/components/MenuOverlay’;
import { useInquiry } from ‘@/components/InquiryContext’;

const problems = [
{ n: ‘01’, t: ‘Regulatory Complexity’,       p: ‘BIS certifications, CAROTAR customs rules, GST registration, DPIIT approvals — India's compliance stack is layered and unforgiving for foreign brands.’, s: ‘We manage the complete regulatory roadmap before your first shipment’ },
{ n: ‘02’, t: ‘Wrong Retail Location’,        p: ‘Premium real estate in Delhi NCR requires local relationships and negotiation fluency. International brands often overpay or sign unfavorable lease terms.’, s: ‘We identify, evaluate, and negotiate retail spaces aligned to your brand tier’ },
{ n: ‘03’, t: ‘Store Identity Gets Lost’,     p: ‘Indian buildout vendors rarely understand premium brand aesthetics. Material compromises misrepresent your brand at its most critical moment.’, s: ‘We project-manage every detail of store setup against your brand guidelines’ },
{ n: ‘04’, t: ‘No Ground-Level Intelligence’, p: ‘Generic market reports can't answer whether your specific category and price point will resonate in Gurugram's premium consumer segment.’, s: ‘We deliver a tailored India feasibility report specific to your brand’ },
{ n: ‘05’, t: ‘Supply Chain Complexity’,      p: ‘Freight forwarding, customs clearance, GST-compliant invoicing, e-way bills — without a local expert this leads to stockouts, holds, and margin erosion.’, s: ‘We operate your India-side supply chain end-to-end’ },
{ n: ‘06’, t: ‘Speed Dilutes Premiumness’,    p: ‘Scaling too fast — multiple cities, wide SKU range, over-licensing — is the most common reason once-aspirational brands become commonplace within years.’, s: ‘We build community first; geography follows once the foundation is real’ },
];

const services = [
{ n: ‘01’, name: ‘India Feasibility & Market Intelligence’, tag: ‘Research’, desc: ‘Before a product is shipped, brands need ground-truth intelligence. We produce a tailored feasibility report covering consumer segment analysis, competitive landscape, pricing feasibility, and a recommended phased entry roadmap — built for your specific category and brand tier in Delhi NCR.’, items: [‘Consumer segment & spending profile for Delhi NCR’, ‘Competitive landscape & category white-space’, ‘Price positioning & import duty modelling’, ‘Recommended phased entry roadmap’, ‘Retail channel strategy (EBO vs. MBO)’] },
{ n: ‘02’, name: ‘Legal Entity Setup & Compliance’, tag: ‘Regulatory’, desc: ‘We handle the complete regulatory stack — entity incorporation, DPIIT approvals, BIS product certifications, CAROTAR customs documentation, import licensing, and GST registration. All of it in place before your first product enters India.’, items: [‘Indian entity incorporation (Pvt Ltd or LLP)’, ‘DPIIT single-brand retail FDI approval’, ‘BIS mandatory product certification’, ‘CAROTAR rules-of-origin documentation’, ‘GST registration & ongoing compliance’, ‘Import Export Code (IEC)’] },
{ n: ‘03’, name: ‘Retail Location & Lease Negotiation’, tag: ‘Real Estate’, desc: ‘We leverage our established retail network in Gurugram — including our association with Value Homz — to identify spaces that align with your brand positioning. We evaluate each location, negotiate lease terms, and ensure brand standards are protected in the agreement.’, items: [‘Shortlisted locations with scored comparison’, ‘Footfall & customer profile per site’, ‘Lease term negotiation & review’, ‘Brand standards written into lease’, ‘Mall / developer relationship management’] },
{ n: ‘04’, name: ‘Store Design, Buildout & Brand Fidelity’, tag: ‘Retail Experience’, desc: ‘We project-manage the entire store fit-out against your brand guidelines — sourcing vendors who can meet specification, overseeing materials and fixtures, managing lighting design, and ensuring every element from signage to visual merchandising reflects your identity precisely.’, items: [‘Brand guideline interpretation for Indian buildout’, ‘Vendor identification & quality management’, ‘Fixtures, lighting & materials sourcing’, ‘Visual merchandising & layout’, ‘Soft launch event management’, ‘Post-launch brand compliance audits’] },
{ n: ‘05’, name: ‘Supply Chain & Import Operations’, tag: ‘Operations’, desc: ‘We operate the full India-side supply chain: freight forwarding, customs clearance, warehousing, replenishment planning, and e-way bill compliance. From your factory in Japan to the shelf in Gurugram — managed without you needing to intervene.’, items: [‘Freight forwarding & customs clearance’, ‘Warehouse & storage management’, ‘GST-compliant invoicing & e-way bills’, ‘Inventory replenishment planning’, ‘Monthly inventory & sell-through reporting’] },
{ n: ‘06’, name: ‘Community Building & Brand Activation’, tag: ‘Marketing’, desc: ‘Commerce follows community. We identify early adopters and tastemakers in Delhi NCR, organise curated preview events, and deliberately seed the brand into the right lifestyle communities — building genuine loyalty before broad marketing spend begins.’, items: [‘Early adopter & tastemaker identification’, ‘Curated launch & preview events’, ‘Editorial & media relationship management’, ‘Community seeding strategy’, ‘Seasonal brand activation planning’] },
];

export default function ServicesPage() {
const { openInquiry } = useInquiry();
const [openIdx, setOpenIdx] = useState<number | null>(null);

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
  {/* Hero */}
  <div className="pgh">
    <div className="pgh-bg">SOLUTIONS</div>
    <span className="ey rv">What We Do</span>
    <h1 className="pgh-h1 rv d1">The Problems<br />We <em>Solve for You</em></h1>
    <p className="pgh-s rv d2">India's premium retail market is full of opportunity — and full of friction. Yorkstn removes the friction so brands stay focused on what they do best.</p>
  </div>

  {/* Problems */}
  <section style={{ padding: '96px 60px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', marginBottom: 64, alignItems: 'end' }}>
      <h2 className="rv" style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(34px,4.5vw,58px)', fontWeight: 300, lineHeight: 1.05, color: 'var(--b)' }}>
        Why brands struggle<br />in India — and <em style={{ fontStyle: 'italic', color: 'var(--bl)' }}>how we fix it</em>
      </h2>
      <p className="rv d2" style={{ fontSize: 13, lineHeight: 2.1, color: 'var(--tx)', fontWeight: 300 }}>
        Every problem below is real and recurring. We've built Yorkstn's model around solving each one before they become your problem.
      </p>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'rgba(55,24,37,.08)' }}>
      {problems.map((p, i) => (
        <article key={p.n} className={`pc rv${i % 3 !== 0 ? ` d${i % 3}` : ''}`} style={{ background: 'var(--c)', padding: '40px 34px', position: 'relative', overflow: 'hidden' }}>
          <span style={{ fontFamily: 'var(--fd)', fontSize: 76, fontWeight: 300, color: 'rgba(55,24,37,.055)', lineHeight: 1, position: 'absolute', top: 14, right: 18 }}>{p.n}</span>
          <h3 style={{ fontFamily: 'var(--fd)', fontSize: 21, fontWeight: 400, color: 'var(--b)', marginBottom: 12, lineHeight: 1.2 }}>{p.t}</h3>
          <p style={{ fontSize: 11.5, lineHeight: 1.95, color: 'var(--tx)', fontWeight: 300 }}>{p.p}</p>
          <p style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(55,24,37,.1)', fontSize: 10, color: 'var(--bl)', fontWeight: 400, display: 'flex', alignItems: 'flex-start', gap: 8, lineHeight: 1.7 }}>
            <span style={{ color: 'var(--g)' }}>→</span>{p.s}
          </p>
        </article>
      ))}
    </div>
  </section>

  <div className="rule" />

  {/* Services accordion */}
  <section style={{ background: 'var(--cd)', padding: '96px 60px' }}>
    <div style={{ marginBottom: 56 }}>
      <span className="ey rv">Our Services</span>
      <h2 className="rv d1" style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(34px,4.5vw,58px)', fontWeight: 300, color: 'var(--b)', marginTop: 18, lineHeight: 1.05 }}>
        Six things we do.<br />All of them completely.
      </h2>
    </div>
    <div>
      {services.map((s, i) => (
        <div key={s.n} style={{ borderTop: '1px solid rgba(55,24,37,.1)' }}>
          <button
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            style={{ width: '100%', display: 'grid', gridTemplateColumns: '48px 1fr auto auto', alignItems: 'center', gap: 24, padding: '26px 0', textAlign: 'left', background: 'none', border: 'none' }}
          >
            <span style={{ fontFamily: 'var(--fd)', fontSize: 13, color: 'var(--g)', fontWeight: 300 }}>{s.n}</span>
            <span style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(19px,2.5vw,29px)', fontWeight: 300, color: 'var(--b)', lineHeight: 1.1 }}>{s.name}</span>
            <span style={{ fontSize: 8, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--mt)', fontWeight: 400 }}>{s.tag}</span>
            <span style={{ width: 32, height: 32, border: '1px solid rgba(55,24,37,.18)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: openIdx === i ? 'var(--c)' : 'var(--b)', background: openIdx === i ? 'var(
```
