‘use client’;

import { useEffect, useState } from ‘react’;
import Link from ‘next/link’;
import { usePathname } from ‘next/navigation’;
import { useInquiry } from ‘./InquiryContext’;
import { useMenu } from ‘./MenuContext’;

const links = [
{ label: ‘Home’,         href: ‘/’         },
{ label: ‘What We Do’,   href: ‘/services’ },
{ label: ‘India Market’, href: ‘/india’    },
{ label: ‘Insights’,     href: ‘/insights’ },
{ label: ‘About’,        href: ‘/about’    },
{ label: ‘Contact’,      href: ‘/contact’  },
];

export default function Navbar() {
const pathname = usePathname();
const { openInquiry } = useInquiry();
const { openMenu } = useMenu();
const [solid, setSolid] = useState(pathname !== ‘/’);

useEffect(() => {
if (pathname !== ‘/’) { setSolid(true); return; }
const onScroll = () => setSolid(window.scrollY > 40);
window.addEventListener(‘scroll’, onScroll, { passive: true });
return () => window.removeEventListener(‘scroll’, onScroll);
}, [pathname]);

return (
<nav className={`nav${solid ? ' sol' : ''}`}>
<Link href="/" className="logo">
<span className="logo-n">Yorkstn</span>
<span className="logo-s">Community Before Commerce</span>
</Link>

```
  <div className="nav-r">
    <ul className="nav-links">
      {links.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            className={pathname === l.href ? 'act' : ''}
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>

    <button className="nav-enq" onClick={openInquiry}>
      Brand Enquiry
    </button>

    <button className="nav-menu" onClick={openMenu} aria-label="Open menu">
      <div className="hbg">
        <span /><span /><span />
      </div>
      Menu
    </button>
  </div>
</nav>
```

);
}
