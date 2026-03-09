‘use client’;

import Link from ‘next/link’;
import { useMenu } from ‘./MenuContext’;
import { useInquiry } from ‘./InquiryContext’;

const links = [
{ n: ‘01’, label: ‘Home’,         href: ‘/’         },
{ n: ‘02’, label: ‘What We Do’,   href: ‘/services’ },
{ n: ‘03’, label: ‘India Market’, href: ‘/india’    },
{ n: ‘04’, label: ‘Insights’,     href: ‘/insights’ },
{ n: ‘05’, label: ‘About’,        href: ‘/about’    },
{ n: ‘06’, label: ‘Contact’,      href: ‘/contact’  },
];

export default function MenuOverlay() {
const { isOpen, closeMenu } = useMenu();
const { openInquiry } = useInquiry();

return (
<div className={`menu-overlay${isOpen ? ' open' : ''}`} role=“dialog” aria-modal=“true”>
<button className="mcls" onClick={closeMenu} aria-label="Close menu">
Close <span className="mcls-x">×</span>
</button>

```
  <div className="ml">
    <p className="ml-ey">Navigation</p>
    <ul className="mnav">
      {links.map((l) => (
        <li key={l.href}>
          <Link href={l.href} onClick={closeMenu}>
            <span className="mnum">{l.n}</span>{l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  <div className="mr">
    <p className="mr-tag">"Great brands don't fail in India because of product. They fail because of entry."</p>
    <div className="mr-det">
      <div><p className="mr-lbl">Location</p><p className="mr-val">Gurugram, Delhi NCR<br />India</p></div>
      <div><p className="mr-lbl">Focus</p><p className="mr-val">Japanese Premium Brands</p></div>
      <div><p className="mr-lbl">Contact</p><p className="mr-val">connect@yorkstn.com</p></div>
      <button className="btn btn-l" onClick={() => { closeMenu(); openInquiry(); }}>
        Submit Brand Enquiry →
      </button>
    </div>
  </div>
</div>
```

);
}
