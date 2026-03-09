‘use client’;

import { useState, useEffect } from ‘react’;
import { useInquiry } from ‘./InquiryContext’;

export default function InquiryModal() {
const { isOpen, closeInquiry } = useInquiry();
const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(’’);
const [form, setForm] = useState({
name: ‘’, email: ‘’, brand: ‘’, category: ‘’, stage: ‘’, country: ‘’, message: ‘’,
});

useEffect(() => {
const onKey = (e: KeyboardEvent) => { if (e.key === ‘Escape’) closeInquiry(); };
window.addEventListener(‘keydown’, onKey);
return () => window.removeEventListener(‘keydown’, onKey);
}, [closeInquiry]);

const set = (k: string, v: string) => setForm((f) => ({ …f, [k]: v }));

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
if (!form.name || !form.email || !form.brand) {
setError(‘Please fill in your name, email, and brand name.’); return;
}
setError(’’); setLoading(true);
try {
const res = await fetch(‘https://formspree.io/f/YOUR_FORM_ID’, {
method: ‘POST’,
headers: { ‘Accept’: ‘application/json’, ‘Content-Type’: ‘application/json’ },
body: JSON.stringify(form),
});
if (res.ok) setSubmitted(true);
else throw new Error();
} catch {
setError(‘Something went wrong. Please email us at connect@yorkstn.com’);
} finally {
setLoading(false);
}
};

return (
<div className={`inq-overlay${isOpen ? ' open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) closeInquiry(); }}>
<div className="im">
{/* Header */}
<div className="ih">
<button className="icls" onClick={closeInquiry} aria-label="Close">×</button>
<span className=“ey” style={{ marginBottom: 14, display: ‘block’ }}>Brand Enquiry</span>
<h2 className="ih-h">Tell us about<br /><em>your brand</em></h2>
<p className="ih-s">Share some details and we’ll come back to you within 3 business days.</p>
</div>

```
    {/* Body */}
    <div className="ib">
      {!submitted ? (
        <form onSubmit={handleSubmit} noValidate>
          <div className="irow">
            <div className="ifield"><label className="ilbl">Your Name *</label><input className="iinput" value={form.name} onChange={e => set('name', e.target.value)} placeholder="Tanaka Hiroshi" /></div>
            <div className="ifield"><label className="ilbl">Email Address *</label><input className="iinput" type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="your@email.com" /></div>
          </div>
          <div className="irow">
            <div className="ifield"><label className="ilbl">Brand Name *</label><input className="iinput" value={form.brand} onChange={e => set('brand', e.target.value)} placeholder="Brand name" /></div>
            <div className="ifield">
              <label className="ilbl">Category</label>
              <select className="isel" value={form.category} onChange={e => set('category', e.target.value)}>
                <option value="">Select category</option>
                <option>Fashion &amp; Apparel</option>
                <option>Home &amp; Lifestyle</option>
                <option>Beauty &amp; Skincare</option>
                <option>Food &amp; Beverage</option>
                <option>Stationery &amp; Design</option>
                <option>Ceramics &amp; Craft</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="irow">
            <div className="ifield">
              <label className="ilbl">Entry Stage</label>
              <select className="isel" value={form.stage} onChange={e => set('stage', e.target.value)}>
                <option value="">Where are you now?</option>
                <option>Exploring — early research</option>
                <option>Considering — evaluating partners</option>
                <option>Ready — looking to move soon</option>
                <option>Already in India — need support</option>
              </select>
            </div>
            <div className="ifield"><label className="ilbl">Country of Origin</label><input className="iinput" value={form.country} onChange={e => set('country', e.target.value)} placeholder="Japan" /></div>
          </div>
          <div className="irow s1">
            <div className="ifield"><label className="ilbl">Tell us about your brand</label><textarea className="ita" value={form.message} onChange={e => set('message', e.target.value)} placeholder="A brief introduction..." /></div>
          </div>
          {error && <p className="ierr">{error}</p>}
          <div className="ifoot">
            <p className="inote">We review every enquiry personally. You'll hear from us within 3 business days.</p>
            <button className="isub" type="submit" disabled={loading}>{loading ? 'Sending…' : 'Send Enquiry →'}</button>
          </div>
        </form>
      ) : (
        <div className="iok show">
          <div className="iok-ic">✦</div>
          <h3 className="iok-h">Thank you</h3>
          <p className="iok-p">We've received your enquiry and will be in touch within 3 business days.</p>
        </div>
      )}
    </div>
  </div>
</div>
```

);
}
