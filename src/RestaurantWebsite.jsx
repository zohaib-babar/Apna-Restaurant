// import { useState, useEffect } from "react";

// const menuData = {
//   Starters: [
//     { name: "Truffle Arancini", desc: "Crispy risotto balls with black truffle & mozzarella", price: 14, tag: "Chef's Pick" },
//     { name: "Burrata & Heirloom", desc: "Creamy burrata, heirloom tomatoes, aged balsamic", price: 16, tag: null },
//     { name: "Tuna Tataki", desc: "Seared yellowfin, ponzu, sesame oil, micro greens", price: 19, tag: "Popular" },
//     { name: "Roasted Bone Marrow", desc: "Herb gremolata, grilled sourdough, sea salt", price: 17, tag: null },
//   ],
//   Mains: [
//     { name: "Wagyu Beef Tenderloin", desc: "8oz A5 wagyu, truffle butter, roasted garlic jus", price: 68, tag: "Signature" },
//     { name: "Pan Seared Halibut", desc: "Saffron beurre blanc, fennel, caperberry salsa", price: 42, tag: null },
//     { name: "Rack of Lamb", desc: "Herb crust, pomegranate reduction, roasted root veg", price: 54, tag: "Popular" },
//     { name: "Wild Mushroom Risotto", desc: "Aged parmesan, porcini foam, truffle oil, chives", price: 32, tag: null },
//   ],
//   Desserts: [
//     { name: "Chocolate Fondant", desc: "Dark 72% chocolate, salted caramel ice cream", price: 13, tag: "Popular" },
//     { name: "Crème Brûlée", desc: "Classic vanilla, fresh berries, caramelized sugar", price: 11, tag: null },
//     { name: "Lemon Tart", desc: "Italian meringue, raspberry coulis, candied zest", price: 12, tag: null },
//     { name: "Cheese Board", desc: "Selection of 5 artisan cheeses, quince, crackers", price: 18, tag: "Chef's Pick" },
//   ],
// };

// const team = [
//   { name: "Marco Bellini", role: "Executive Chef", exp: "20 yrs · Rome & Paris" },
//   { name: "Aiko Tanaka", role: "Pastry Chef", exp: "12 yrs · Tokyo & NYC" },
//   { name: "Sofia Herrera", role: "Sommelier", desc: "800+ label cellar" },
// ];

// const navLinks = ["Home", "Menu", "About", "Reservations"];

// export default function RestaurantWebsite() {
//   const [activeNav, setActiveNav] = useState("Home");
//   const [activeCategory, setActiveCategory] = useState("Starters");
//   const [scrolled, setScrolled] = useState(false);
//   const [form, setForm] = useState({ name: "", email: "", date: "", guests: "2", time: "19:00" });
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const scrollTo = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div style={{ fontFamily: "'Georgia', serif", background: "#0d0d0b", color: "#e8e0d0", minHeight: "100vh", overflowX: "hidden" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

//         * { margin: 0; padding: 0; box-sizing: border-box; }
//         body { background: #0d0d0b; }

//         .nav-link {
//           background: none; border: none; cursor: pointer;
//           font-family: 'Jost', sans-serif; font-size: 12px; font-weight: 400;
//           letter-spacing: 0.18em; text-transform: uppercase;
//           color: #b0a890; transition: color 0.3s;
//           padding: 4px 0;
//         }
//         .nav-link:hover, .nav-link.active { color: #e8e0d0; }
//         .nav-link.active { border-bottom: 1px solid #c9a96e; padding-bottom: 2px; }

//         .hero-text {
//           font-family: 'Cormorant Garamond', serif;
//           font-weight: 300; font-style: italic;
//           font-size: clamp(52px, 9vw, 110px);
//           line-height: 1.0;
//           color: #f0e8d8;
//           letter-spacing: -0.02em;
//         }

//         .gold-line {
//           width: 60px; height: 1px; background: #c9a96e; margin: 0 auto 24px;
//         }

//         .section-label {
//           font-family: 'Jost', sans-serif; font-size: 11px; font-weight: 400;
//           letter-spacing: 0.25em; text-transform: uppercase; color: #c9a96e;
//         }

//         .section-title {
//           font-family: 'Cormorant Garamond', serif; font-weight: 300;
//           font-size: clamp(32px, 5vw, 54px); color: #f0e8d8; margin-top: 12px;
//         }

//         .menu-card {
//           border-bottom: 1px solid #2a2820;
//           padding: 20px 0; transition: border-color 0.2s;
//         }
//         .menu-card:hover { border-color: #c9a96e44; }

//         .cat-btn {
//           font-family: 'Jost', sans-serif; font-size: 11px; font-weight: 400;
//           letter-spacing: 0.2em; text-transform: uppercase;
//           background: none; border: none; cursor: pointer;
//           color: #6a6458; transition: color 0.3s; padding: 8px 0;
//         }
//         .cat-btn.active { color: #c9a96e; }
//         .cat-btn:hover { color: #e8e0d0; }

//         .res-input {
//           width: 100%; background: #161610; border: 1px solid #2e2b24;
//           color: #e8e0d0; padding: 14px 16px; font-size: 14px;
//           font-family: 'Jost', sans-serif; outline: none;
//           border-radius: 2px; transition: border-color 0.3s;
//         }
//         .res-input:focus { border-color: #c9a96e; }
//         .res-input option { background: #161610; }

//         .cta-btn {
//           background: none; border: 1px solid #c9a96e;
//           color: #c9a96e; font-family: 'Jost', sans-serif;
//           font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase;
//           padding: 14px 36px; cursor: pointer; transition: all 0.3s;
//         }
//         .cta-btn:hover { background: #c9a96e; color: #0d0d0b; }

//         .tag-badge {
//           font-family: 'Jost', sans-serif; font-size: 10px; letter-spacing: 0.12em;
//           text-transform: uppercase; padding: 3px 10px;
//           border: 1px solid #c9a96e55; color: #c9a96e;
//           border-radius: 20px;
//         }

//         .team-card {
//           border: 1px solid #1e1c18; padding: 28px 24px;
//           border-radius: 2px; transition: border-color 0.3s; text-align: center;
//         }
//         .team-card:hover { border-color: #c9a96e44; }

//         .hero-overlay {
//           position: absolute; inset: 0;
//           background: radial-gradient(ellipse at 50% 60%, #1a160d88 0%, #0d0d0bcc 70%);
//         }

//         .scroll-indicator {
//           animation: bobble 2s ease-in-out infinite;
//         }
//         @keyframes bobble {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(8px); }
//         }

//         .fade-in { animation: fadeUp 0.8s ease both; }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>

//       {/* NAV */}
//       <nav style={{
//         position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
//         padding: "20px 48px", display: "flex", alignItems: "center", justifyContent: "space-between",
//         background: scrolled ? "#0d0d0bef" : "transparent",
//         borderBottom: scrolled ? "1px solid #1e1c18" : "none",
//         transition: "all 0.4s",
//         backdropFilter: scrolled ? "blur(8px)" : "none"
//       }}>
//         <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 300, fontStyle: "italic", color: "#f0e8d8", letterSpacing: "0.04em" }}>
//           Lumière
//         </div>
//         <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
//           {navLinks.map(l => (
//             <button key={l} className={`nav-link ${activeNav === l ? "active" : ""}`}
//               onClick={() => { setActiveNav(l); scrollTo(l.toLowerCase()); }}>
//               {l}
//             </button>
//           ))}
//         </div>
//       </nav>

//       {/* HERO */}
//       <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "80px 24px 60px" }}>
//         <div className="hero-overlay" />
//         {/* Subtle grain texture */}
//         <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")", opacity: 0.4, zIndex: 0 }} />

//         <div style={{ position: "relative", zIndex: 1 }}>
//           <p className="section-label fade-in" style={{ marginBottom: "24px" }}>Fine Dining · Paris-Inspired</p>
//           <h1 className="hero-text fade-in" style={{ animationDelay: "0.1s" }}>
//             Where Every Dish<br />
//             <em>Tells a Story</em>
//           </h1>
//           <p className="fade-in" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "16px", color: "#9a9080", maxWidth: "440px", margin: "28px auto 40px", lineHeight: "1.8", animationDelay: "0.2s" }}>
//             Elevated cuisine crafted from seasonal ingredients, paired with a world-class cellar — a sensory journey through every plate.
//           </p>
//           <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", animationDelay: "0.3s" }} className="fade-in">
//             <button className="cta-btn" onClick={() => { scrollTo("reservations"); setActiveNav("Reservations"); }}>Reserve a Table</button>
//             <button className="cta-btn" style={{ borderColor: "#3a3830", color: "#9a9080" }} onClick={() => { scrollTo("menu"); setActiveNav("Menu"); }}>View Menu</button>
//           </div>
//         </div>

//         <div className="scroll-indicator" style={{ position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)", zIndex: 1 }}>
//           <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
//             <rect x="1" y="1" width="18" height="30" rx="9" stroke="#3a3830" strokeWidth="1.5"/>
//             <rect x="9" y="7" width="2" height="8" rx="1" fill="#c9a96e"/>
//           </svg>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section id="about" style={{ maxWidth: "1100px", margin: "0 auto", padding: "100px 48px" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
//           <div>
//             <p className="section-label">Our Philosophy</p>
//             <h2 className="section-title" style={{ textAlign: "left", marginTop: "12px", marginBottom: "28px" }}>
//               Crafted with<br /><em>Intention</em>
//             </h2>
//             <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "15px", color: "#7a7268", lineHeight: "2", marginBottom: "20px" }}>
//               At Lumière, we believe dining is theatre. Every element — from the hand-thrown ceramics to the final garnish — is choreographed to delight.
//             </p>
//             <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "15px", color: "#7a7268", lineHeight: "2" }}>
//               Our kitchen sources from a network of small farms and artisan producers, changing the menu with the seasons to ensure what reaches your table is at its absolute peak.
//             </p>
//             <div style={{ marginTop: "40px", display: "flex", gap: "40px" }}>
//               {[["15+", "Years"], ["3", "Michelin Stars"], ["800+", "Wine Labels"]].map(([n, l]) => (
//                 <div key={l}>
//                   <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 300, color: "#c9a96e" }}>{n}</p>
//                   <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#5a5650", marginTop: "4px" }}>{l}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div style={{ position: "relative" }}>
//             <div style={{ background: "#161610", border: "1px solid #2a2820", borderRadius: "2px", aspectRatio: "3/4", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
//               {/* Abstract decorative element in place of image */}
//               <svg width="200" height="200" viewBox="0 0 200 200" style={{ opacity: 0.15 }}>
//                 <circle cx="100" cy="100" r="80" stroke="#c9a96e" strokeWidth="0.5" fill="none"/>
//                 <circle cx="100" cy="100" r="60" stroke="#c9a96e" strokeWidth="0.5" fill="none"/>
//                 <circle cx="100" cy="100" r="40" stroke="#c9a96e" strokeWidth="0.5" fill="none"/>
//                 <line x1="20" y1="100" x2="180" y2="100" stroke="#c9a96e" strokeWidth="0.5"/>
//                 <line x1="100" y1="20" x2="100" y2="180" stroke="#c9a96e" strokeWidth="0.5"/>
//                 <circle cx="100" cy="100" r="4" fill="#c9a96e"/>
//               </svg>
//               <p style={{ position: "absolute", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "18px", color: "#3a3830", bottom: "32px", left: 0, right: 0, textAlign: "center" }}>Est. 2009 · Paris</p>
//             </div>
//             <div style={{ position: "absolute", top: "-16px", right: "-16px", width: "80px", height: "80px", border: "1px solid #2a2820", borderRadius: "2px" }} />
//           </div>
//         </div>

//         {/* Team */}
//         <div style={{ marginTop: "80px" }}>
//           <div className="gold-line" style={{ margin: "0 0 16px" }} />
//           <p className="section-label" style={{ marginBottom: "8px" }}>The Team</p>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginTop: "40px" }}>
//             {team.map(m => (
//               <div key={m.name} className="team-card">
//                 <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#1e1c18", border: "1px solid #2e2b24", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "#c9a96e" }}>
//                   {m.name.split(" ").map(n => n[0]).join("")}
//                 </div>
//                 <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 400, color: "#e8e0d0" }}>{m.name}</p>
//                 <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a96e", marginTop: "6px" }}>{m.role}</p>
//                 <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", color: "#5a5650", marginTop: "10px" }}>{m.exp || m.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* MENU */}
//       <section id="menu" style={{ background: "#0a0a08", padding: "100px 0" }}>
//         <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 48px" }}>
//           <div style={{ textAlign: "center", marginBottom: "56px" }}>
//             <p className="section-label">Seasonal Selection</p>
//             <h2 className="section-title">Our Menu</h2>
//             <div className="gold-line" style={{ marginTop: "24px" }} />
//           </div>

//           {/* Category tabs */}
//           <div style={{ display: "flex", gap: "36px", borderBottom: "1px solid #1e1c18", marginBottom: "36px", justifyContent: "center" }}>
//             {Object.keys(menuData).map(cat => (
//               <button key={cat} className={`cat-btn ${activeCategory === cat ? "active" : ""}`}
//                 onClick={() => setActiveCategory(cat)}>
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Menu items */}
//           {menuData[activeCategory].map((item) => (
//             <div key={item.name} className="menu-card">
//               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
//                 <div style={{ flex: 1 }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
//                     <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#e8e0d0" }}>{item.name}</p>
//                     {item.tag && <span className="tag-badge">{item.tag}</span>}
//                   </div>
//                   <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", color: "#5a5650", fontWeight: 300 }}>{item.desc}</p>
//                 </div>
//                 <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#c9a96e", marginLeft: "24px", whiteSpace: "nowrap" }}>${item.price}</p>
//               </div>
//             </div>
//           ))}

//           <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", color: "#3a3830", textAlign: "center", marginTop: "40px", letterSpacing: "0.1em" }}>
//             All dishes prepared with seasonal, locally sourced ingredients. Please inform us of any dietary requirements.
//           </p>
//         </div>
//       </section>

//       {/* RESERVATIONS */}
//       <section id="reservations" style={{ maxWidth: "600px", margin: "0 auto", padding: "100px 48px" }}>
//         <div style={{ textAlign: "center", marginBottom: "56px" }}>
//           <p className="section-label">Book Your Evening</p>
//           <h2 className="section-title">Reservations</h2>
//           <div className="gold-line" style={{ marginTop: "24px" }} />
//         </div>

//         {submitted ? (
//           <div style={{ textAlign: "center", padding: "60px 0" }}>
//             <div style={{ width: "64px", height: "64px", border: "1px solid #c9a96e", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5">
//                 <polyline points="20 6 9 17 4 12"/>
//               </svg>
//             </div>
//             <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", color: "#e8e0d0", marginBottom: "16px" }}>Reservation Confirmed</h3>
//             <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "14px", color: "#5a5650", lineHeight: "1.8" }}>
//               We look forward to welcoming you, {form.name}.<br />
//               A confirmation will be sent to {form.email}.
//             </p>
//             <button className="cta-btn" style={{ marginTop: "36px" }} onClick={() => setSubmitted(false)}>Make Another</button>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} style={{ display: "grid", gap: "16px" }}>
//             {[
//               { label: "Full Name", key: "name", type: "text", placeholder: "Your name" },
//               { label: "Email Address", key: "email", type: "email", placeholder: "your@email.com" },
//               { label: "Date", key: "date", type: "date", placeholder: "" },
//             ].map(f => (
//               <div key={f.key}>
//                 <label style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5a5650", display: "block", marginBottom: "8px" }}>{f.label}</label>
//                 <input className="res-input" type={f.type} placeholder={f.placeholder} required
//                   value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} />
//               </div>
//             ))}
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
//               <div>
//                 <label style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5a5650", display: "block", marginBottom: "8px" }}>Guests</label>
//                 <select className="res-input" value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })}>
//                   {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
//                 </select>
//               </div>
//               <div>
//                 <label style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5a5650", display: "block", marginBottom: "8px" }}>Time</label>
//                 <select className="res-input" value={form.time} onChange={e => setForm({ ...form, time: e.target.value })}>
//                   {["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"].map(t => <option key={t} value={t}>{t}</option>)}
//                 </select>
//               </div>
//             </div>
//             <div style={{ textAlign: "center", marginTop: "12px" }}>
//               <button type="submit" className="cta-btn">Confirm Reservation</button>
//             </div>
//           </form>
//         )}
//       </section>

//       {/* FOOTER */}
//       <footer style={{ borderTop: "1px solid #1e1c18", padding: "48px", textAlign: "center" }}>
//         <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontStyle: "italic", fontWeight: 300, color: "#3a3830", marginBottom: "16px" }}>Lumière</p>
//         <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", color: "#3a3830", letterSpacing: "0.1em" }}>
//           12 Rue de la Paix · Open Tue–Sun, 18:00–23:00 · +33 1 42 65 00 00
//         </p>
//       </footer>
//     </div>
//   );
// }
import { useState, useEffect, } from "react";

const menuData = {
  Starters: [
    { name: "Truffle Arancini", desc: "Crispy risotto balls with black truffle & mozzarella", price: 14, tag: "Chef's Pick", emoji: "🧆" },
    { name: "Burrata & Heirloom", desc: "Creamy burrata, heirloom tomatoes, aged balsamic", price: 16, tag: null, emoji: "🥗" },
    { name: "Tuna Tataki", desc: "Seared yellowfin, ponzu, sesame oil, micro greens", price: 19, tag: "Popular", emoji: "🐟" },
    { name: "Roasted Bone Marrow", desc: "Herb gremolata, grilled sourdough, sea salt", price: 17, tag: null, emoji: "🍖" },
  ],
  Mains: [
    { name: "Wagyu Tenderloin", desc: "8oz A5 wagyu, truffle butter, roasted garlic jus", price: 68, tag: "Signature", emoji: "🥩" },
    { name: "Pan Seared Halibut", desc: "Saffron beurre blanc, fennel, caperberry salsa", price: 42, tag: null, emoji: "🐠" },
    { name: "Rack of Lamb", desc: "Herb crust, pomegranate reduction, roasted root veg", price: 54, tag: "Popular", emoji: "🍗" },
    { name: "Wild Mushroom Risotto", desc: "Aged parmesan, porcini foam, truffle oil, chives", price: 32, tag: "Veg", emoji: "🍄" },
  ],
  Desserts: [
    { name: "Chocolate Fondant", desc: "Dark 72% chocolate, salted caramel ice cream", price: 13, tag: "Popular", emoji: "🍫" },
    { name: "Creme Brulee", desc: "Classic vanilla, fresh berries, caramelized sugar", price: 11, tag: null, emoji: "🍮" },
    { name: "Lemon Tart", desc: "Italian meringue, raspberry coulis, candied zest", price: 12, tag: null, emoji: "🍋" },
    { name: "Cheese Board", desc: "5 artisan cheeses, quince paste, artisan crackers", price: 18, tag: "Chef's Pick", emoji: "🧀" },
  ],
};

const features = [
  { icon: "🌿", title: "Farm to Table", desc: "Sourced fresh daily from local farms and artisan producers." },
  { icon: "🍷", title: "800+ Wine Labels", desc: "A world-class cellar curated by our award-winning sommelier." },
  { icon: "⭐", title: "Michelin Starred", desc: "3 Michelin stars earned over 15 years of culinary excellence." },
  { icon: "👨‍🍳", title: "Expert Chefs", desc: "Our team trained in Rome, Paris, Tokyo and New York." },
];

const team = [
  { name: "Marco Bellini", role: "Executive Chef", exp: "20 yrs · Rome & Paris", initial: "MB", color: "#e8643a" },
  { name: "Aiko Tanaka", role: "Pastry Chef", exp: "12 yrs · Tokyo & NYC", initial: "AT", color: "#3a7ee8" },
  { name: "Sofia Herrera", role: "Sommelier", exp: "800+ label cellar", initial: "SH", color: "#3aab6e" },
];

const navLinks = ["Home", "About", "Menu", "Reservations"];

export default function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [activeCategory, setActiveCategory] = useState("Starters");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", date: "", guests: "2", time: "19:00", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
    setActiveNav(navLinks.find(n => n.toLowerCase() === id) || activeNav);
  };

  return (
    <div style={{ fontFamily: "sans-serif", background: "#faf9f6", color: "#1a1a1a", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cream: #faf9f6;
          --cream2: #f3f0ea;
          --cream3: #ede9e0;
          --accent: #d4622a;
          --accent2: #e8a24a;
          --dark: #1a1a1a;
          --mid: #5a5550;
          --light: #9a9590;
          --border: #e0dbd0;
          --white: #ffffff;
          --radius: 16px;
          --shadow: 0 4px 24px rgba(0,0,0,0.08);
          --shadow-lg: 0 12px 48px rgba(0,0,0,0.12);
        }

        body { background: var(--cream); }

        .font-display { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }

        /* NAV */
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          transition: all 0.4s ease;
          padding: 0 40px; height: 68px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .navbar.scrolled {
          background: rgba(250,249,246,0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
        }
        .navbar.top { background: transparent; }

        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 24px; font-weight: 700; font-style: italic;
          color: var(--dark); letter-spacing: -0.5px;
          text-decoration: none;
        }
        .logo span { color: var(--accent); }

        .nav-links { display: flex; gap: 8px; align-items: center; }
        .nav-btn {
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
          background: none; border: none; cursor: pointer;
          color: var(--mid); padding: 8px 14px; border-radius: 8px;
          transition: all 0.2s; letter-spacing: 0.01em;
        }
        .nav-btn:hover { background: var(--cream2); color: var(--dark); }
        .nav-btn.active { color: var(--accent); background: #d4622a14; }
        .reserve-btn {
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
          background: var(--accent); border: none; cursor: pointer;
          color: white; padding: 10px 20px; border-radius: 10px;
          transition: all 0.2s; letter-spacing: 0.01em; margin-left: 8px;
        }
        .reserve-btn:hover { background: #c0571f; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(212,98,42,0.3); }

        /* Hamburger */
        .ham { display: none; background: none; border: none; cursor: pointer; padding: 6px; flex-direction: column; gap: 5px; }
        .ham span { display: block; width: 24px; height: 2px; background: var(--dark); border-radius: 2px; transition: all 0.3s; }
        .ham.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .ham.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .ham.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile Drawer */
        .drawer {
          position: fixed; top: 68px; left: 0; right: 0; z-index: 999;
          background: var(--white); border-bottom: 1px solid var(--border);
          box-shadow: var(--shadow-lg);
          padding: 16px 24px 24px;
          transform: translateY(-110%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .drawer.open { transform: translateY(0); }
        .drawer-link {
          display: block; width: 100%; background: none; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 500;
          color: var(--dark); padding: 14px 0; text-align: left;
          border-bottom: 1px solid var(--border); transition: color 0.2s;
        }
        .drawer-link:last-of-type { border-bottom: none; }
        .drawer-link:hover { color: var(--accent); }

        /* HERO */
        .hero {
          min-height: 100vh; display: flex; align-items: center;
          background: linear-gradient(135deg, #faf9f6 0%, #f5f0e8 50%, #efe8d8 100%);
          position: relative; overflow: hidden; padding: 100px 40px 60px;
        }
        .hero::before {
          content: ''; position: absolute; top: -100px; right: -100px;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, #d4622a18 0%, transparent 70%);
        }
        .hero::after {
          content: ''; position: absolute; bottom: -150px; left: -80px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, #e8a24a14 0%, transparent 70%);
        }
        .hero-inner { max-width: 1200px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; position: relative; z-index: 1; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--white); border: 1px solid var(--border);
          border-radius: 100px; padding: 8px 16px; margin-bottom: 28px;
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: var(--mid);
          box-shadow: var(--shadow);
        }
        .hero-badge span { color: var(--accent); }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(42px, 5.5vw, 72px);
          font-weight: 900; line-height: 1.08;
          color: var(--dark); margin-bottom: 24px; letter-spacing: -1px;
        }
        .hero-title em { font-style: italic; color: var(--accent); }
        .hero-sub {
          font-family: 'DM Sans', sans-serif; font-size: 17px; font-weight: 300;
          color: var(--mid); line-height: 1.8; margin-bottom: 40px; max-width: 420px;
        }
        .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }
        .btn-primary {
          font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500;
          background: var(--accent); color: white; border: none; cursor: pointer;
          padding: 16px 32px; border-radius: 12px; transition: all 0.25s;
          box-shadow: 0 4px 20px rgba(212,98,42,0.25);
        }
        .btn-primary:hover { background: #c0571f; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(212,98,42,0.35); }
        .btn-outline {
          font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500;
          background: transparent; color: var(--dark); cursor: pointer;
          padding: 16px 32px; border-radius: 12px; transition: all 0.25s;
          border: 1.5px solid var(--border);
        }
        .btn-outline:hover { background: var(--cream2); border-color: #c8c0b0; }

        /* Hero visual card */
        .hero-card {
          background: var(--white); border-radius: 24px;
          box-shadow: var(--shadow-lg); padding: 32px;
          position: relative;
        }
        .hero-card-tag {
          position: absolute; top: -14px; left: 24px;
          background: var(--accent); color: white;
          font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500;
          padding: 6px 16px; border-radius: 100px;
        }
        .dish-showcase {
          background: var(--cream2); border-radius: 16px;
          aspect-ratio: 4/3; display: flex; align-items: center; justify-content: center;
          font-size: 80px; margin-bottom: 20px;
        }
        .dish-info { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
        .dish-name { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; color: var(--dark); }
        .dish-price { font-family: 'DM Sans', sans-serif; font-size: 22px; font-weight: 500; color: var(--accent); }
        .dish-desc { font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--light); line-height: 1.6; }
        .rating-row { display: flex; align-items: center; gap: 8px; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--border); }
        .stars { color: #f5c842; font-size: 14px; letter-spacing: 2px; }
        .rating-text { font-family: 'DM Sans', sans-serif; font-size: 13px; color: var(--mid); }

        /* FEATURES */
        .features-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
        }
        .feature-card {
          background: var(--white); border-radius: var(--radius);
          padding: 28px 24px; border: 1px solid var(--border);
          transition: all 0.3s; text-align: center;
        }
        .feature-card:hover { box-shadow: var(--shadow); transform: translateY(-4px); border-color: transparent; }
        .feature-icon { font-size: 36px; margin-bottom: 16px; display: block; }
        .feature-title { font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 700; color: var(--dark); margin-bottom: 8px; }
        .feature-desc { font-family: 'DM Sans', sans-serif; font-size: 13px; color: var(--light); line-height: 1.6; }

        /* SECTION */
        .section { max-width: 1200px; margin: 0 auto; padding: 100px 40px; }
        .section-sm { max-width: 800px; margin: 0 auto; padding: 100px 40px; }
        .section-tag {
          display: inline-block; background: #d4622a14; color: var(--accent);
          font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase; padding: 6px 14px;
          border-radius: 100px; margin-bottom: 16px;
        }
        .section-title {
          font-family: 'Playfair Display', serif; font-weight: 900;
          font-size: clamp(32px, 4vw, 52px); color: var(--dark);
          line-height: 1.1; letter-spacing: -0.5px;
        }
        .section-title em { font-style: italic; color: var(--accent); }
        .section-sub {
          font-family: 'DM Sans', sans-serif; font-size: 16px; color: var(--mid);
          line-height: 1.8; margin-top: 16px; max-width: 480px;
        }

        /* ABOUT */
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .stat-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 40px; }
        .stat-card {
          background: var(--cream2); border-radius: 14px; padding: 20px;
          border: 1px solid var(--border);
        }
        .stat-num { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 900; color: var(--accent); }
        .stat-label { font-family: 'DM Sans', sans-serif; font-size: 13px; color: var(--mid); margin-top: 4px; }
        .about-visual {
          background: linear-gradient(135deg, var(--cream2) 0%, var(--cream3) 100%);
          border-radius: 24px; aspect-ratio: 4/5;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          border: 1px solid var(--border);
        }
        .about-visual-emoji { font-size: 100px; opacity: 0.5; }
        .about-badge {
          position: absolute; bottom: 28px; left: 28px; right: 28px;
          background: white; border-radius: 14px; padding: 16px 20px;
          box-shadow: var(--shadow); display: flex; align-items: center; gap: 14px;
        }
        .badge-dot { width: 44px; height: 44px; border-radius: 12px; background: #d4622a18; display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; }
        .badge-text p:first-child { font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: var(--dark); }
        .badge-text p:last-child { font-family: 'DM Sans', sans-serif; font-size: 12px; color: var(--light); margin-top: 2px; }

        /* MENU */
        .menu-bg { background: var(--cream2); }
        .cat-tabs { display: flex; gap: 8px; margin-bottom: 40px; flex-wrap: wrap; }
        .cat-tab {
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500;
          background: var(--white); border: 1.5px solid var(--border);
          color: var(--mid); padding: 10px 22px; border-radius: 100px; cursor: pointer;
          transition: all 0.2s;
        }
        .cat-tab:hover { border-color: var(--accent); color: var(--accent); }
        .cat-tab.active { background: var(--accent); border-color: var(--accent); color: white; }
        .menu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .menu-item {
          background: var(--white); border-radius: var(--radius); padding: 24px;
          border: 1px solid var(--border); display: flex; gap: 16px;
          transition: all 0.25s; align-items: flex-start;
        }
        .menu-item:hover { box-shadow: var(--shadow); transform: translateY(-2px); border-color: transparent; }
        .menu-emoji { font-size: 40px; flex-shrink: 0; background: var(--cream2); border-radius: 12px; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; }
        .menu-body { flex: 1; min-width: 0; }
        .menu-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; margin-bottom: 6px; }
        .menu-name { font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 700; color: var(--dark); line-height: 1.2; }
        .menu-price { font-family: 'DM Sans', sans-serif; font-size: 17px; font-weight: 500; color: var(--accent); flex-shrink: 0; }
        .menu-desc { font-family: 'DM Sans', sans-serif; font-size: 13px; color: var(--light); line-height: 1.6; }
        .menu-tag { display: inline-block; font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 500; padding: 3px 10px; border-radius: 100px; margin-top: 10px; }
        .tag-chef { background: #d4622a14; color: var(--accent); }
        .tag-popular { background: #e8a24a18; color: #b87a1a; }
        .tag-sig { background: #3a7ee818; color: #2a5da8; }
        .tag-veg { background: #3aab6e18; color: #2a7a4e; }

        /* TEAM */
        .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-top: 48px; }
        .team-card {
          background: var(--white); border-radius: 20px; padding: 32px 24px;
          border: 1px solid var(--border); text-align: center; transition: all 0.3s;
        }
        .team-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-6px); border-color: transparent; }
        .team-avatar {
          width: 72px; height: 72px; border-radius: 20px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
          font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: white;
        }
        .team-name { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; color: var(--dark); margin-bottom: 6px; }
        .team-role { font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); margin-bottom: 12px; }
        .team-exp { font-family: 'DM Sans', sans-serif; font-size: 13px; color: var(--light); }

        /* RESERVATIONS */
        .res-bg { background: linear-gradient(135deg, #1a1a1a 0%, #2d2420 100%); }
        .res-inner { max-width: 1100px; margin: 0 auto; padding: 100px 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .res-left .section-title { color: white; }
        .res-left .section-sub { color: #9a9590; }
        .res-left .section-tag { background: #d4622a30; color: #e88a5a; }
        .res-perk { display: flex; align-items: center; gap: 12px; margin-top: 20px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #9a9590; }
        .res-perk span { color: var(--accent); font-size: 18px; }
        .res-form { background: white; border-radius: 24px; padding: 36px; box-shadow: var(--shadow-lg); }
        .form-field { margin-bottom: 18px; }
        .form-label { display: block; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--mid); margin-bottom: 8px; }
        .form-input {
          width: 100%; background: var(--cream); border: 1.5px solid var(--border);
          color: var(--dark); padding: 13px 16px; font-size: 14px;
          font-family: 'DM Sans', sans-serif; outline: none;
          border-radius: 10px; transition: border-color 0.2s;
          appearance: none;
        }
        .form-input:focus { border-color: var(--accent); background: white; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .submit-btn {
          width: 100%; background: var(--accent); color: white; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500;
          padding: 16px; border-radius: 12px; margin-top: 8px; transition: all 0.25s;
          box-shadow: 0 4px 20px rgba(212,98,42,0.3);
        }
        .submit-btn:hover { background: #c0571f; transform: translateY(-1px); box-shadow: 0 8px 32px rgba(212,98,42,0.4); }

        /* SUCCESS */
        .success-box { text-align: center; padding: 20px 0; }
        .success-icon { width: 72px; height: 72px; border-radius: 20px; background: #3aab6e18; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; font-size: 36px; }
        .success-title { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: var(--dark); margin-bottom: 12px; }
        .success-sub { font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--mid); line-height: 1.8; }

        /* FOOTER */
        .footer { background: #111; color: #888; padding: 48px 40px; text-align: center; }
        .footer-logo { font-family: 'Playfair Display', serif; font-size: 28px; font-style: italic; font-weight: 700; color: white; margin-bottom: 12px; }
        .footer-logo span { color: var(--accent); }
        .footer-text { font-family: 'DM Sans', sans-serif; font-size: 13px; line-height: 2; }
        .footer-divider { height: 1px; background: #222; margin: 24px auto; max-width: 200px; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; gap: 48px; text-align: center; }
          .hero-sub { margin-left: auto; margin-right: auto; }
          .hero-btns { justify-content: center; }
          .hero-card { max-width: 400px; margin: 0 auto; }
          .about-grid { grid-template-columns: 1fr; gap: 48px; }
          .about-visual { display: none; }
          .stat-cards { grid-template-columns: repeat(4, 1fr); }
          .res-inner { grid-template-columns: 1fr; gap: 48px; }
          .res-left { text-align: center; }
          .res-left .section-sub { margin: 16px auto 0; }
          .res-perk { justify-content: center; }
          .team-grid { grid-template-columns: 1fr 1fr; }
          .navbar { padding: 0 24px; }
          .nav-links { display: none; }
          .ham { display: flex; }
        }
        @media (max-width: 640px) {
          .hero { padding: 100px 24px 60px; }
          .section, .section-sm { padding: 72px 24px; }
          .res-inner { padding: 72px 24px; }
          .hero-title { font-size: 38px; }
          .menu-grid { grid-template-columns: 1fr; }
          .features-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .stat-cards { grid-template-columns: 1fr 1fr; }
          .team-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .hero-btns { flex-direction: column; align-items: center; }
          .btn-primary, .btn-outline { width: 100%; max-width: 300px; text-align: center; }
          .footer { padding: 40px 24px; }
          .res-form { padding: 24px; }
          .cat-tabs { gap: 6px; }
          .cat-tab { font-size: 13px; padding: 8px 16px; }
        }
        @media (max-width: 380px) {
          .features-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 34px; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`navbar ${scrolled ? "scrolled" : "top"}`}>
        <div className="logo">Zohaib<span>resturant</span></div>
        <div className="nav-links">
          {navLinks.map(l => (
            <button key={l} className={`nav-btn ${activeNav === l ? "active" : ""}`}
              onClick={() => go(l.toLowerCase())}>{l}</button>
          ))}
          <button className="reserve-btn" onClick={() => go("reservations")}>Book a Table</button>
        </div>
        <button className={`ham ${mobileOpen ? "open" : ""}`} onClick={() => setMobileOpen(!mobileOpen)}>
          <span/><span/><span/>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`drawer ${mobileOpen ? "open" : ""}`}>
        {navLinks.map(l => (
          <button key={l} className="drawer-link" onClick={() => go(l.toLowerCase())}>{l}</button>
        ))}
        <button className="btn-primary" style={{ marginTop: 16, width: "100%", textAlign: "center" }} onClick={() => go("reservations")}>
          Book a Table
        </button>
      </div>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-badge">
              <span>⭐⭐⭐</span> Michelin Starred Since 2012
            </div>
            <h1 className="hero-title">
              Fine Dining,<br /><em>Redefined</em><br />For You
            </h1>
            <p className="hero-sub">
              A celebration of seasonal ingredients, artisan craft, and the timeless joy of sharing extraordinary food with extraordinary people.
            </p>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => go("reservations")}>Reserve a Table →</button>
              <button className="btn-outline" onClick={() => go("menu")}>Explore Menu</button>
            </div>
          </div>
          <div>
            <div className="hero-card">
              <div className="hero-card-tag">Tonight's Special</div>
              <div className="dish-showcase">🥩</div>
              <div className="dish-info">
                <div className="dish-name">Wagyu Tenderloin</div>
                <div className="dish-price">$68</div>
              </div>
              <div className="dish-desc">A5 wagyu, truffle butter, roasted garlic jus, seasonal greens</div>
              <div className="rating-row">
                <div className="stars">★★★★★</div>
                <div className="rating-text">4.9 · 240 reviews this month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-tag">Why Lamia</div>
          <h2 className="section-title">An Experience Like<br /><em>No Other</em></h2>
        </div>
        <div className="features-grid">
          {features.map(f => (
            <div key={f.title} className="feature-card">
              <span className="feature-icon">{f.icon}</span>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <div style={{ background: "var(--cream2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div id="about" className="section">
          <div className="about-grid">
            <div>
              <div className="section-tag">Our Story</div>
              <h2 className="section-title">Crafted With<br /><em>Heart & Soul</em></h2>
              <p className="section-sub">
                Founded in 2009 by Chef Marco Bellini, Lamia was born from a simple belief — that every meal should feel like a celebration. We source the finest seasonal produce, work with local farmers, and let the ingredients speak for themselves.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "var(--mid)", lineHeight: 1.8, marginTop: 16 }}>
                Our kitchen is a place of passion and precision. From the first mise en place to the final garnish, every detail is tended to with care. We don't just cook food — we create memories.
              </p>
              <div className="stat-cards">
                {[["15+", "Years Open"], ["3", "Michelin Stars"], ["800+", "Wine Labels"], ["50k+", "Happy Guests"]].map(([n, l]) => (
                  <div key={l} className="stat-card">
                    <div className="stat-num">{n}</div>
                    <div className="stat-label">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-visual">
              <div className="about-visual-emoji">🍽️</div>
              <div className="about-badge">
                <div className="badge-dot">👨‍🍳</div>
                <div className="badge-text">
                  <p>Chef Marco Bellini</p>
                  <p>Executive Chef · 20 years experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team */}
          <div style={{ marginTop: 80 }}>
            <div style={{ textAlign: "center", marginBottom: 8 }}>
              <div className="section-tag">The Team</div>
              <h2 className="section-title" style={{ marginTop: 12 }}>Meet the <em>Artists</em></h2>
            </div>
            <div className="team-grid">
              {team.map(m => (
                <div key={m.name} className="team-card">
                  <div className="team-avatar" style={{ background: m.color }}>{m.initial}</div>
                  <div className="team-name">{m.name}</div>
                  <div className="team-role">{m.role}</div>
                  <div className="team-exp">{m.exp}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MENU */}
      <div className="menu-bg">
        <div id="menu" className="section">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-tag">Seasonal Menu</div>
            <h2 className="section-title">Our Signature <em>Dishes</em></h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "var(--mid)", marginTop: 12 }}>
              Crafted fresh daily. All dietary requirements accommodated.
            </p>
          </div>
          <div className="cat-tabs">
            {Object.keys(menuData).map(cat => (
              <button key={cat} className={`cat-tab ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}>{cat}</button>
            ))}
          </div>
          <div className="menu-grid">
            {menuData[activeCategory].map(item => {
              const tagClass = item.tag === "Chef's Pick" ? "tag-chef" : item.tag === "Popular" ? "tag-popular" : item.tag === "Signature" ? "tag-sig" : "tag-veg";
              return (
                <div key={item.name} className="menu-item">
                  <div className="menu-emoji">{item.emoji}</div>
                  <div className="menu-body">
                    <div className="menu-top">
                      <div className="menu-name">{item.name}</div>
                      <div className="menu-price">${item.price}</div>
                    </div>
                    <div className="menu-desc">{item.desc}</div>
                    {item.tag && <span className={`menu-tag ${tagClass}`}>{item.tag}</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* RESERVATIONS */}
      <div className="res-bg">
        <div id="reservations" className="res-inner">
          <div className="res-left">
            <div className="section-tag">Reservations</div>
            <h2 className="section-title">Book Your<br /><em>Perfect Evening</em></h2>
            <p className="section-sub">Reserve your table and let us take care of everything else. Unforgettable evenings start with a single click.</p>
            {[["🕐", "Open Tue–Sun, 6pm–11pm"], ["📍", "12 Rue de la Paix, Paris"], ["📞", "+33 1 42 65 00 00"]].map(([icon, text]) => (
              <div key={text} className="res-perk"><span>{icon}</span>{text}</div>
            ))}
          </div>
          <div>
            {submitted ? (
              <div className="res-form">
                <div className="success-box">
                  <div className="success-icon">✅</div>
                  <div className="success-title">You're Confirmed!</div>
                  <p className="success-sub">We're delighted to welcome you, <strong>{form.name}</strong>.<br />A confirmation has been sent to {form.email}.</p>
                  <button className="submit-btn" style={{ marginTop: 24 }} onClick={() => setSubmitted(false)}>Make Another Booking</button>
                </div>
              </div>
            ) : (
              <div className="res-form">
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="form-field">
                    <label className="form-label">Full Name</label>
                    <input className="form-input" type="text" placeholder="Your full name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Email Address</label>
                    <input className="form-input" type="email" placeholder="your@email.com" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                  </div>
                  <div className="form-row form-field">
                    <div>
                      <label className="form-label">Date</label>
                      <input className="form-input" type="date" required value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
                    </div>
                    <div>
                      <label className="form-label">Time</label>
                      <select className="form-input" value={form.time} onChange={e => setForm({...form, time: e.target.value})}>
                        {["18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30"].map(t => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Number of Guests</label>
                    <select className="form-input" value={form.guests} onChange={e => setForm({...form, guests: e.target.value})}>
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n===1?"Guest":"Guests"}</option>)}
                    </select>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Special Requests (optional)</label>
                    <textarea className="form-input" rows={3} placeholder="Dietary requirements, anniversaries, allergies..." value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} style={{ resize: "none" }} />
                  </div>
                  <button type="submit" className="submit-btn">Confirm Reservation →</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">La<span>mia</span></div>
        <div className="footer-divider" />
        <div className="footer-text">
          12 Rue de la Paix · Paris, France<br />
          Open Tuesday – Sunday · 18:00 – 23:00<br />
          +33 1 42 65 00 00 · hello@lamia.fr
        </div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, marginTop: 24, color: "#444" }}>© 2026 Lamia Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
}
