import React from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Float, Environment, MeshTransmissionMaterial, OrbitControls } from "@react-three/drei";
import { ArrowDown, ArrowUpRight, Github, Mail, Menu, X } from "lucide-react";
import "./styles.css";

function Orb(){
  return <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1.2}>
    <mesh rotation={[0.2,0.4,0]}>
      <icosahedronGeometry args={[1.65,4]} />
      <MeshTransmissionMaterial backside thickness={1.2} roughness={0.12} chromaticAberration={0.08} anisotropy={0.3} distortion={0.25} distortionScale={0.4} temporalDistortion={0.12} />
    </mesh>
  </Float>
}
function Scene(){
  return <Canvas camera={{position:[0,0,5],fov:45}} dpr={[1,1.7]} gl={{antialias:true}}>
    <ambientLight intensity={0.7}/>
    <directionalLight position={[3,3,4]} intensity={4}/>
    <pointLight position={[-3,-2,2]} intensity={5}/>
    <Orb/>
    <Environment preset="city"/>
    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5}/>
  </Canvas>
}
const projects=[
 {n:"01",title:"CareerInnTech",tag:"AI / PLATFORM",text:"A career platform with AI interview experiences, analytics and production-ready Django architecture."},
 {n:"02",title:"AI Motion Lab",tag:"EXPERIMENTAL",text:"An interaction playground exploring generative visuals, WebGL and scroll-driven storytelling."},
 {n:"03",title:"Future Interface",tag:"CONCEPT",text:"A cinematic interface system designed around depth, motion and tactile micro-interactions."}
];
function App(){
 const [open,setOpen]=React.useState(false);
 return <main>
  <nav className="nav"><a className="brand" href="#top">SSV<span>.</span></a>
   <div className={open?"links open":"links"}><a href="#work" onClick={()=>setOpen(false)}>Work</a><a href="#about" onClick={()=>setOpen(false)}>About</a><a href="#contact" onClick={()=>setOpen(false)}>Contact</a></div>
   <button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
  </nav>
  <section id="top" className="hero">
   <div className="hero-copy"><p className="eyebrow">CREATIVE DEVELOPER · 2026</p><h1>Building digital<br/><em>worlds</em> in motion.</h1><p className="lede">I design and engineer immersive web experiences where code, 3D and motion feel like one medium.</p><a className="cta" href="#work">Explore work <ArrowDown size={17}/></a></div>
   <div className="orb"><Scene/><span className="orb-label">DRAG · ROTATE</span></div>
  </section>
  <section id="work" className="section work"><div className="section-head"><p className="eyebrow">SELECTED WORK</p><p>03 / 03</p></div>
   {projects.map(p=><article className="project" key={p.n}><div className="num">{p.n}</div><div><p className="tag">{p.tag}</p><h2>{p.title}</h2><p className="desc">{p.text}</p></div><ArrowUpRight className="arrow"/></article>)}
  </section>
  <section id="about" className="about section"><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Frontend meets<br/><em>imagination.</em></h2><p>From scalable Django systems to expressive interfaces, I like turning ambitious ideas into products people can feel.</p></section>
  <section id="contact" className="contact section"><p className="eyebrow">HAVE AN IDEA?</p><h2>Let's make it<br/><em>move.</em></h2><div className="contact-row"><a className="email" href="mailto:ssvprasad144@gmail.com">ssvprasad144@gmail.com <ArrowUpRight/></a><a href="https://github.com/ssvprasad144" target="_blank" rel="noreferrer"><Github/></a><a href="mailto:ssvprasad144@gmail.com"><Mail/></a></div></section>
  <footer><span>© 2026 SSV</span><span>CRAFTED WITH CODE + CURIOSITY</span></footer>
 </main>
}
createRoot(document.getElementById("root")).render(<App/>);