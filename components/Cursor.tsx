"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    let mx = -300, my = -300, rx = -300, ry = -300;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };

    const loop = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      raf = requestAnimationFrame(loop);
    };

    const addHover = () => document.body.classList.add('lh');
    const remHover = () => document.body.classList.remove('lh');

    const attachHover = () => {
      document.querySelectorAll('a,button,.pc,.sb2,.ic,.fc').forEach((el) => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', remHover);
      });
    };

    document.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);
    attachHover();

    const obs = new MutationObserver(attachHover);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      obs.disconnect();
    };

  }, []);

  useEffect(() => {
    (function () {
      const d = document.getElementById('cur-d'), r = document.getElementById('cur-r');
      if (!d || !r) return;
      let mx = -300, my = -300, rx = -300, ry = -300;
      document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; d.style.left = mx + 'px'; d.style.top = my + 'px'; });
      (function loop() { rx += (mx - rx) * .11; ry += (my - ry) * .11; r.style.left = rx + 'px'; r.style.top = ry + 'px'; requestAnimationFrame(loop); })();
      const add = () => document.body.classList.add('lh');
      const rem = () => document.body.classList.remove('lh');
      function attach() { document.querySelectorAll('a,button,.pc,.sb2,.ic,.fc').forEach(el => { el.addEventListener('mouseenter', add); el.addEventListener('mouseleave', rem); }); }
      attach();
      new MutationObserver(attach).observe(document.body, { childList: true, subtree: true });
    })();

    return () => {

    }
  }, [])


  return (
    <>
      <div ref={dotRef} className="cur-d" aria-hidden="true" id="cur-d" />
      <div ref={ringRef} className="cur-r" aria-hidden="true" id="cur-r" />
    </>
  );
}
