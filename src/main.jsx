import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Float, Environment, MeshTransmissionMaterial, OrbitControls, ContactShadows } from "@react-three/drei";
import { ArrowDown, ArrowUpRight, Mail, Menu, X, Sparkles, Code2, Bot, Layers3 } from "lucide-react";
import "./styles.css";

const projects = [
  {
    n: "01",
    title: "CareerInnTech",
    tag: "FULL-STACK · AI",
    text: "A career platform combining Django, PostgreSQL and AI-powered interview workflows with authentication and production security.",
    stack: "Django · PostgreSQL · OpenAI",
    href: "https://github.com/ssvprasad144/CareerInnTech",
    live: "https://careerinntech.onrender.com"
  },
  {
    n: "02",
    title: "AI Interview",
    tag: "AI · DJANGO",
    text: "An AI mock-interview product with OpenAI integration, session-based interview flows and production deployment configuration.",
    stack: "Python · Django · OpenAI",
    href: "https://github.com/ssvprasad144/AI_interview"
  },
  {
    n: "03",
    title: "3D Motion Portfolio",
    tag: "REACT · WEBGL",
    text: "This portfolio itself: a bright, interactive 3D experience built with React, Three.js and React Three Fiber.",
    stack: "React · Three.js · Vite",
    href: "https://github.com/ssvprasad144/3d-motion-portfolio"
  }
];

function Orb() {
  return (
    <Float speed={1.4} rotationIntensity={0.75} floatIntensity={1.25}>
      <mesh rotation={[0.2, 0.45, 0]}>
        <icosahedronGeometry args={[1.65, 5]} />
        <MeshTransmissionMaterial
          backside
          thickness={1.1}
          roughness={0.08}
          transmission={1}
          chromaticAberration={0.12}
          anisotropy={0.45}
          distortion={0.35}
          distortionScale={0.45}
          temporalDistortion={0.16}
          color="#b9a7ff"
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 43 }} dpr={[1, 1.8]} gl={{ antialias: true }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 4, 5]} intensity={5} />
      <pointLight position={[-4, -2, 3]} intensity={8} color="#9b7cff" />
      <pointLight position={[3, -3, 1]} intensity={6} color="#55e7ff" />
      <Suspense fallback={null}>
        <Orb />
        <Environment preset="city" />
        <ContactShadows position={[0, -2.1, 0]} opacity={0.2} scale={6} blur={2.5} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.65} />
    </Canvas>
  );
}

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="nav">
        <a className="brand" href="#top">SSV<span>.</span></a>
        <div className={open ? "links open" : "links"}>
          <a href="#work" onClick={() => setOpen(false)}>Work</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={14} /></a>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <section id="top" className="hero">
        <div className="hero-copy">
          <div className="availability"><span /> AVAILABLE FOR FREELANCE</div>
          <p className="eyebrow">FULL-STACK · AI · CREATIVE WEB</p>
          <h1>I build digital <em>experiences</em> that move.</h1>
          <p className="lede">
            I'm SSV — a developer focused on full-stack products, AI integrations and immersive web experiences.
            I turn ideas into fast, polished and deployable software.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#work">View my work <ArrowDown size={16} /></a>
            <a className="secondary" href="#contact">Start a project <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-proof">
            <span><Code2 /> Full-stack</span>
            <span><Bot /> AI integration</span>
            <span><Sparkles /> 3D / motion</span>
          </div>
        </div>

        <div className="orb-wrap">
          <div className="orb">
            <Scene />
          </div>
          <div className="orb-ring ring-one" />
          <div className="orb-ring ring-two" />
          <span className="orb-label">INTERACTIVE 3D · DRAG TO ROTATE</span>
          <div className="orb-card">
            <span>BUILD / SHIP</span>
            <strong>01</strong>
          </div>
        </div>
      </section>

      <section id="work" className="section work">
        <div className="section-head">
          <div><p className="eyebrow">SELECTED WORK</p><h2>Projects with <em>purpose.</em></h2></div>
          <p className="count">03 PROJECTS</p>
        </div>
        <div className="project-grid">
          {projects.map((p) => (
            <article className="project" key={p.n}>
              <div className="project-top"><span>{p.n}</span><span>{p.tag}</span></div>
              <div className="project-icon"><Layers3 /></div>
              <h3>{p.title}</h3>
              <p className="desc">{p.text}</p>
              <p className="stack">{p.stack}</p>
              <div className="project-links">
                <a href={p.href} target="_blank" rel="noreferrer">Source <Code2 size={15} /></a>
                {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live <ArrowUpRight size={15} /></a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="services section">
        <div className="section-head"><div><p className="eyebrow">WHAT I CAN BUILD</p><h2>From idea to <em>launch.</em></h2></div></div>
        <div className="service-grid">
          <div><span>01</span><Code2 /><h3>Web Development</h3><p>Responsive websites and full-stack applications built around real business requirements.</p></div>
          <div><span>02</span><Bot /><h3>AI Integration</h3><p>AI-powered features, API integrations and intelligent workflows inside existing or new products.</p></div>
          <div><span>03</span><Layers3 /><h3>Interactive Experiences</h3><p>Modern React interfaces, motion systems and 3D/WebGL experiences that feel memorable.</p></div>
        </div>
      </section>

      <section id="about" className="about section">
        <div><p className="eyebrow">ABOUT SSV</p><h2>Code with a <em>creative edge.</em></h2></div>
        <div className="about-copy">
          <p>I enjoy working where engineering and design overlap. My projects span Django backends, PostgreSQL, AI APIs, React interfaces and 3D web experiences.</p>
          <p>I care about the details that make software feel finished: clear UX, secure sessions, responsive layouts, clean architecture and deployment that actually works.</p>
          <div className="mini-stats"><div><strong>3+</strong><span>featured builds</span></div><div><strong>AI</strong><span>product focus</span></div><div><strong>3D</strong><span>creative web</span></div></div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <p className="eyebrow">HAVE A PROJECT?</p>
        <h2>Let's build something <em>great.</em></h2>
        <p className="contact-sub">Tell me what you're building, what problem you want to solve, or what you want improved.</p>
        <div className="contact-row">
          <a className="email" href="mailto:ssvprasad144@gmail.com">ssvprasad144@gmail.com <ArrowUpRight /></a>
          <a className="social" href="https://github.com/ssvprasad144" target="_blank" rel="noreferrer"><Code2 /></a>
          <a className="social" href="mailto:ssvprasad144@gmail.com"><Mail /></a>
        </div>
      </section>

      <footer><span>© 2026 SSV</span><span>FULL-STACK · AI · CREATIVE WEB</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
