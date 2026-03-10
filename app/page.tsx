'use client'
import Cursor from "@/components/Cursor";
import Grain from "@/components/Grain";
import InquiryModal from "@/components/InquiryModal";
import MenuOverlay from "@/components/MenuOverlay";
import Navbar from "@/components/Navbar";
import { useTransparency } from '../hooks/useTransparency';


export default function Home() {
  useTransparency();
  return (
    <>
      <Cursor /><Grain /><Navbar /><MenuOverlay /><InquiryModal />
      <div className="page active" id="pg-home">
        <section className="hero">
          <div className="hl">
            <span className="ey rv" style={{ marginBottom: '32px' }}>Delhi NCR · Japan · India Market Entry</span>
            <h1 className="h1 rv d1">Your Brand.<br /><em>India, Done Right.</em></h1>
            <p className="hp rv d2">Yorkstn is the structured market entry partner Japanese premium brands need to grow
              in India — handling every layer of compliance, operations, and retail so your identity stays intact.
            </p>
            <div className="ha rv d3">
              <button className="btn btn-d" data-pg="services">See What We Do →</button>
              <button className="btn btn-o" data-inq="1">Brand Enquiry</button>
            </div>
          </div>
          <div className="hr" aria-hidden="true">
            <div className="hr-bg">YORKSTN</div>
            <div className="hr-in">
              <div className="hstats">
                <div className="hstat">
                  <div className="hsn">3rd</div>
                  <div className="hsl">India's global rank by purchasing power parity</div>
                </div>
                <div className="hstat">
                  <div className="hsn">Delhi NCR</div>
                  <div className="hsl">Our launch market — highest premium consumer density</div>
                </div>
                <div className="hstat">
                  <div className="hsn">12%+</div>
                  <div className="hsl">Annual premium retail growth in India</div>
                </div>
              </div>
              <blockquote className="hq">
                <p>"Great brands don't fail in India because of product. They fail because of entry."</p>
                <cite>— Yorkstn, Founding Principle</cite>
              </blockquote>
            </div>
          </div>
          <div className="scrl" aria-hidden="true"><span>Scroll</span>
            <div className="scrl-l"></div>
          </div>
        </section>

        <div className="mq" aria-hidden="true">
          <div className="mq-t">
            <span className="mq-i">Community Before Commerce <span className="mq-d">✦</span></span>
            <span className="mq-i">Feasibility &amp; Market Research <span className="mq-d">✦</span></span>
            <span className="mq-i">BIS · CAROTAR · GST Compliance <span className="mq-d">✦</span></span>
            <span className="mq-i">Master Franchise &amp; Distribution <span className="mq-d">✦</span></span>
            <span className="mq-i">Japan → Delhi NCR <span className="mq-d">✦</span></span>
            <span className="mq-i">Store Setup &amp; Brand Aesthetics <span className="mq-d">✦</span></span>
            <span className="mq-i">Depth Before Scale <span className="mq-d">✦</span></span>
            <span className="mq-i">Community Before Commerce <span className="mq-d">✦</span></span>
            <span className="mq-i">Feasibility &amp; Market Research <span className="mq-d">✦</span></span>
            <span className="mq-i">BIS · CAROTAR · GST Compliance <span className="mq-d">✦</span></span>
            <span className="mq-i">Master Franchise &amp; Distribution <span className="mq-d">✦</span></span>
            <span className="mq-i">Japan → Delhi NCR <span className="mq-d">✦</span></span>
            <span className="mq-i">Store Setup &amp; Brand Aesthetics <span className="mq-d">✦</span></span>
            <span className="mq-i">Depth Before Scale <span className="mq-d">✦</span></span>
          </div>
        </div>

        <section className="hi">
          <div>
            <span className="ey rv" style={{ marginBottom: '20px', display: 'block' }}>What Yorkstn Does</span>
            <h2 className="hi-h rv d1">We handle India.<br /><em>You stay focused<br />on your craft.</em></h2>
            <p className="hi-p rv d2">From feasibility research to legal setup, retail location to store buildout —
              Yorkstn takes full operational responsibility so your brand can enter India without compromising its
              identity.</p>
            <button className="btn btn-d rv d3" data-pg="services">Explore Our Services →</button>
          </div>
          <div className="hg rv d2">
            <div className="hgb">
              <p className="hgn">01</p>
              <p className="hgl">Feasibility<br />&amp; Research</p>
            </div>
            <div className="hgb">
              <p className="hgn">02</p>
              <p className="hgl">Legal &amp;<br />Compliance</p>
            </div>
            <div className="hgb dk">
              <p className="hgn">03</p>
              <p className="hgl">Retail &amp;<br />Store Setup</p>
            </div>
            <div className="hgb">
              <p className="hgn">04</p>
              <p className="hgl">Operations<br />&amp; Community</p>
            </div>
          </div>
        </section>

        <div className="rule"></div>

        <section className="hcta">
          <div>
            <span className="ey rv" style={{ marginBottom: '14px', display: 'block' }}>Ready to explore?</span>
            <h2 className="hcta-h rv d1">Tell us about your brand.<br /><em>We'll tell you what's possible.</em></h2>
          </div>
          <button className="btn btn-d rv d2" data-inq="1" style={{ whiteSpace: 'nowrap' }}>Submit Brand Enquiry →</button>
        </section>

        <footer>
          <div className="ft">
            <div>
              <div className="fln">Yorkstn</div>
              <div className="fls">Community Before Commerce</div>
              <p className="fd2">A master franchise and distribution partner for Japanese premium brands entering
                India. Gurugram, Delhi NCR.</p>
            </div>
            <div>
              <p className="fct">Navigate</p>
              <ul className="fli">
                <li><button data-pg="home">Home</button></li>
                <li><button data-pg="services">What We Do</button></li>
                <li><button data-pg="india">India Market</button></li>
                <li><button data-pg="insights">Insights</button></li>
                <li><button data-pg="about">About</button></li>
              </ul>
            </div>
            <div>
              <p className="fct">Services</p>
              <ul className="fli">
                <li><button data-pg="services">Feasibility Report</button></li>
                <li><button data-pg="services">Legal &amp; Compliance</button></li>
                <li><button data-pg="services">Retail &amp; Store Setup</button></li>
                <li><button data-pg="services">Operations</button></li>
              </ul>
            </div>
            <div>
              <p className="fct">Connect</p>
              <ul className="fli">
                <li><a href="mailto:connect@yorkstn.com">connect@yorkstn.com</a></li>
                <li><button data-pg="contact">Contact Page</button></li>
              </ul><br />
              <p className="fct">Location</p>
              <p style={{ fontSize: '11px', color: 'rgba(240,232,224,.28)', fontWeight: 300, lineHeight: 2 }}>Gurugram,
                Haryana<br />Delhi NCR, India</p>
            </div>
          </div>
          <div className="fb">
            <p className="fcp">© 2025 Yorkstn. All rights reserved.</p>
            <p className="fcp">Founded by Madhav Sharma &amp; Vedika Bhardwaj</p>
          </div>
        </footer>
      </div>
    </>
  );
}
