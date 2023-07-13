import fin from "./images/fin.png";
import ffb from "./images/ffacebook.png";
import finst from "./images/finstagram.png";
import pp from "./images/paperplane.png";

function Citata({ name }) {
    return (
      <div className="citata">© 2021 {name} All Rights Reserved by PNTEC-LTD</div>
    );
  }
  
  function FooterIn() {
    return (
      <button className="footerin">
        <img alt="in" src={fin} />
      </button>
    );
  }
  
  function FooterFacebook() {
    return (
      <button className="footerfacebook">
        <img alt="facebook" src={ffb} />
      </button>
    );
  }
  
  function FooterInstagram() {
    return (
      <button className="footerinstagram">
        <img alt="instagram" src={finst} />
      </button>
    );
  }
  
  function Line() {
    return <div className="line"></div>;
  }
  
  function Group90() {
    return (
      <div className="group90">
        <>
          <Newslater />
          <Group89 />
        </>
      </div>
    );
  }
  
  function Group89() {
    return (
      <div className="group89">
        <Rectangle50 />
      </div>
    );
  }
  
  function Rectangle50() {
    return (
      <div className="rectangle50">
        <>
          <EmailField />
          <Paperplane />
        </>
      </div>
    );
  }
  
  function EmailField() {
    return <div className="emailfield">Enter your email address</div>;
  }
  
  function Paperplane() {
    return (
      <button className="paperplane">
        <img alt="instagram" src={pp} />
      </button>
    );
  }
  
  function Newslater() {
    return <div className="newslater">Newsletter</div>;
  }
  
  function Group87() {
    return (
      <div className="group87">
        <>
          <Group85 />
          <ContactUs />
        </>
      </div>
    );
  }
  
  function Group85() {
    return (
      <div className="group85">
        <>
          <Country name="Some country" />
          <Adress name="Address: 0123 Some place" />
          <Email name="Email: fildineesoe@gmail.com" />
          <Call name="Call: (237) 681-812-255" />
        </>
      </div>
    );
  }
  
  function Country({ name }) {
    return <div className="country">{name}</div>;
  }
  
  function Adress({ name }) {
    return <div className="adress">{name}</div>;
  }
  
  function Email({ name }) {
    return <div className="email">{name}</div>;
  }
  
  function Call({ name }) {
    return <div className="call">{name}</div>;
  }
  
  function ContactUs() {
    return <div className="contactus">Contact Us</div>;
  }
  
  function Group84() {
    return (
      <div className="group84">
        <>
          <Group86 />
          <ImportantLinks />
        </>
      </div>
    );
  }
  
  function Group86() {
    return (
      <div className="group86">
        <>
          <AboutUs />
          <Services />
          <Doctors />
          <Apointment />
        </>
      </div>
    );
  }
  
  function AboutUs() {
    return <div className="aboutus">About Us</div>;
  }
  
  function Doctors() {
    return <div className="doctors">Doctors</div>;
  }
  
  function Services() {
    return <div className="services">Services</div>;
  }
  
  function Apointment() {
    return <div className="apointment">Apointment</div>;
  }
  
  function ImportantLinks() {
    return <div className="importantlinks">Important Links</div>;
  }
  
  function LeadingMedicial() {
    return (
      <div className="leadingmedicial">
        Leading the Way in Medical Execellence, Trusted Care.
      </div>
    );
  }
  
  function Medicial() {
    return <div className="medicial">Medicial</div>;
  }
  
  function Group88() {
    return (
      <div className="group88">
        <>
          <LeadingMedicial />
          <Medicial />
        </>
      </div>
    );
  }
  
  function Rectangle32() {
    return (
      <div className="rectangle32">
        <>
          <Citata name="Gachi Hospital" />
          <FooterIn />
          <FooterFacebook />
          <FooterInstagram />
          <Line />
          <Group90 />
          <Group87 />
          <Group84 />
          <Group88 />
        </>
      </div>
    );
  }
  
export default function Footer() {
    return (
      <div className="footer">
        <Rectangle32 />
      </div>
    );
  }