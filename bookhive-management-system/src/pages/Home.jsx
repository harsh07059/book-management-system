import BookDashboard from "../components/BookDashboard";
import React, { useState } from "react";
import {
  BookOpen,
  Users,
  Star,
  ArrowRight,
  Search,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Menu,
  X,
  BookMarked,
  Layers,
  Mail,
  Lock,
  CheckCircle,
} from "lucide-react";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Modals state management
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setIsAuthOpen(false);
    setIsSuccessOpen(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#f9f9fe] overflow-x-hidden text-gray-900 font-sans selection:bg-violet-200 antialiased">

      {/* ================= BACKGROUND FLOATING SHAPES ================= */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-br from-violet-300 to-transparent opacity-25 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-tl from-pink-300 to-transparent opacity-25 blur-[130px] rounded-full pointer-events-none"></div>

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="w-full px-4 sm:px-6 lg:px-12 pt-5">
          <div className="w-full bg-white/75 backdrop-blur-2xl border border-white/40 shadow-[0_10px_40px_rgba(31,38,135,0.05)] rounded-[24px] sm:rounded-[28px] px-6 sm:px-8 h-20 flex items-center justify-between transition-all duration-300">

            {/* Premium Dynamic Logo */}
            <div className="flex items-center gap-4 cursor-pointer group relative select-none">
              {/* Box Icon Container */}
              <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-fuchsia-600 flex items-center justify-center shadow-[0_8px_25px_rgba(124,58,237,0.25)] group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_12px_30px_rgba(217,70,239,0.35)] transition-all duration-400 ease-out">
                <div className="absolute inset-[2px] rounded-[14px] bg-white/10 backdrop-blur-sm border border-white/20 pointer-events-none"></div>
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                </div>
                <span className="text-xl sm:text-2xl transform group-hover:scale-110 transition-transform duration-300 z-10 drop-shadow-sm">📚</span>
              </div>

              {/* Text Meta Container */}
              <div className="flex flex-col justify-center">
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-none bg-gradient-to-r from-violet-700 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent group-hover:bg-[length:200%_auto] group-hover:bg-right transition-all duration-500">
                  Book<span className="text-gray-900 group-hover:text-fuchsia-600 transition-colors duration-500">Hive</span>
                </h1>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 group-hover:bg-violet-600 group-hover:animate-ping transition-all duration-300"></span>
                  <p className="text-[8px] sm:text-[10px] uppercase tracking-[4px] text-gray-400 font-extrabold group-hover:text-violet-600 group-hover:tracking-[4.5px] transition-all duration-500 ease-out block">
                    SMART ENGINE
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden xl:flex items-center gap-10 font-semibold text-sm">
              <a href="#home" className="text-violet-700 relative py-1">
                Home
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-700 to-fuchsia-600 rounded-full"></span>
              </a>
              {["Books", "Authors", "Categories", "Dashboard"].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-violet-700 transition duration-200 relative py-1 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-700 to-fuchsia-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Navbar Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  setAuthMode("login");
                  setIsAuthOpen(true);
                }}
                className="hidden md:block text-gray-600 hover:text-violet-700 font-bold text-sm transition"
              >
                Login
              </button>

              <button
                onClick={() => {
                  setAuthMode("signup");
                  setIsAuthOpen(true);
                }}
                className="bg-gray-900 hover:bg-violet-700 hover:shadow-[0_10px_30px_rgba(124,58,237,0.3)] text-white px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl sm:rounded-2xl font-bold transition-all duration-300 text-sm sm:text-base hover:-translate-y-[1px]"
              >
                Get Started
              </button>

              {/* Mobile Trigger */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden p-2 text-gray-600 hover:text-violet-700 hover:bg-gray-50 rounded-xl transition"
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Container */}
        {isMenuOpen && (
          <div className="xl:hidden mx-4 mt-2 bg-white/95 backdrop-blur-xl border border-gray-100 p-5 rounded-2xl shadow-xl space-y-3 animate-fade-in">
            {["Home", "Books", "Authors", "Categories", "Dashboard"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-base font-bold text-gray-700 hover:text-violet-700 p-2.5 rounded-xl hover:bg-violet-50/60 transition"
                >
                  {item}
                </a>
              )
            )}
            <hr className="border-gray-100" />
            <button 
              onClick={() => { setIsMenuOpen(false); setAuthMode("login"); setIsAuthOpen(true); }}
              className="w-full text-left font-bold text-gray-700 p-2.5 rounded-xl hover:bg-gray-50 block"
            >
              Login
            </button>
          </div>
        )}
      </header>

      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-32 lg:pt-20"
      >
        <div className="w-full px-6 lg:px-12 py-12">
          <div className="grid xl:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT CONTENT */}
            <div className="relative z-10 max-w-3xl text-center xl:text-left mx-auto xl:mx-0">
              
              {/* Soft Pulsing Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-50 to-fuchsia-50 border border-violet-100 text-violet-700 px-4 py-2 sm:px-5 sm:py-3 rounded-full font-bold shadow-sm text-sm sm:text-base">
                <Sparkles size={16} className="text-violet-600 animate-spin duration-[4000ms]" />
                Modern Digital Library Experience
              </div>

              {/* Bold Premium Heading */}
              <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] text-gray-900 tracking-tight">
                Build Your{" "}
                <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Smart Library
                </span>
                With Style
              </h1>

              {/* Balanced Description */}
              <p className="mt-6 text-base sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto xl:mx-0 font-medium">
                Organize books, manage authors, explore categories, and create a beautiful modern reading dashboard with an elegant user experience.
              </p>

              {/* Interactive Search Console */}
              <form
                onSubmit={(e) => { e.preventDefault(); setIsSuccessOpen(true); }}
                className="mt-8 bg-white rounded-2xl sm:rounded-3xl shadow-[0_16px_40px_rgba(0,0,0,0.03)] border border-gray-100 p-2.5 sm:p-4 flex flex-col sm:flex-row items-center gap-3 w-full max-w-2xl mx-auto xl:mx-0 focus-within:border-violet-400 focus-within:ring-4 focus-within:ring-violet-50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 w-full px-3">
                  <Search className="text-gray-400 flex-shrink-0" size={22} />
                  <input
                    type="text"
                    placeholder="Search books, authors, categories..."
                    className="w-full outline-none bg-transparent text-gray-700 text-base sm:text-lg font-medium placeholder-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gray-950 hover:bg-violet-600 text-white px-8 py-3.5 rounded-xl sm:rounded-2xl font-bold transition w-full sm:w-auto shadow-md"
                >
                  Search
                </button>
              </form>

              {/* Primary Call-to-Action Buttons */}
              <div className="flex flex-wrap justify-center xl:justify-start gap-4 sm:gap-5 mt-8">
                <a
                  href="#categories"
                  className="bg-gradient-to-r from-violet-700 to-fuchsia-600 hover:shadow-lg text-white px-8 py-4 rounded-2xl font-bold text-base sm:text-lg flex items-center gap-3 transition-all duration-300 hover:scale-[1.01]"
                >
                  Explore Library
                  <ArrowRight size={20} />
                </a>

                <button
                  onClick={() => {
                    setAuthMode("signup");
                    setIsAuthOpen(true);
                  }}
                  className="bg-white border border-gray-200 text-violet-700 px-8 py-4 rounded-2xl font-bold text-base sm:text-lg shadow-sm hover:bg-violet-50/50 transition-all duration-200"
                >
                  Learn More
                </button>
              </div>

              {/* Counters / Stats Matrix */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-12 max-w-lg mx-auto xl:mx-0 border-t border-gray-100 pt-8">
                <div className="bg-white/40 border border-white/60 rounded-2xl p-4 shadow-sm backdrop-blur-md hover:bg-white hover:border-violet-100 transition-colors duration-300">
                  <h2 className="text-2xl sm:text-4xl font-black text-gray-900">10K+</h2>
                  <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold mt-1">Books Available</p>
                </div>
                <div className="bg-white/40 border border-white/60 rounded-2xl p-4 shadow-sm backdrop-blur-md hover:bg-white hover:border-pink-100 transition-colors duration-300">
                  <h2 className="text-2xl sm:text-4xl font-black text-gray-900">500+</h2>
                  <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold mt-1">Authors</p>
                </div>
                <div className="bg-white/40 border border-white/60 rounded-2xl p-4 shadow-sm backdrop-blur-md hover:bg-white hover:border-indigo-100 transition-colors duration-300">
                  <h2 className="text-2xl sm:text-4xl font-black text-gray-900">24/7</h2>
                  <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold mt-1">Access SLA</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (Dashboard Console Mockup) */}
            <div className="relative flex justify-center items-center lg:mt-0 mt-8">
              <div className="absolute w-[90%] h-[90%] bg-indigo-200 opacity-30 blur-3xl rounded-full pointer-events-none"></div>

              <div className="relative bg-white border border-gray-100 shadow-[0_24px_70px_rgba(0,0,0,0.05)] rounded-[32px] sm:rounded-[40px] p-5 sm:p-6 w-full max-w-[550px] hover:shadow-[0_30px_80px_rgba(124,58,237,0.08)] transition-all duration-500">
                
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-gray-900">Book Dashboard</h3>
                    <p className="text-xs text-gray-400 font-semibold mt-0.5">Smart Reading Experience</p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Live Cluster
                  </div>
                </div>

                {/* Central Visual Frame */}
                <div className="bg-gradient-to-tr from-violet-50 via-indigo-50/40 to-pink-50 rounded-[24px] sm:rounded-[30px] p-6 flex justify-center items-center min-h-[280px] sm:min-h-[350px] relative overflow-hidden border border-white/60">
                  <div className="absolute inset-0 bg-[radial-gradient(#e1e1fe_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2436/2436636.png"
                    alt="Books Illustration Vector"
                    className="w-40 h-40 sm:w-56 sm:h-56 object-contain animate-float drop-shadow-xl z-10"
                  />
                </div>

                {/* Dashboard Matrix Grid */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-5">
                  {[
                    { icon: <BookOpen className="text-violet-600" size={22} />, title: "Books" },
                    { icon: <Users className="text-pink-500" size={22} />, title: "Authors" },
                    { icon: <Star className="text-indigo-500" size={22} />, title: "Favorites" }
                  ].map((card, idx) => (
                    <div key={idx} className="bg-gray-50/60 border border-gray-100/80 rounded-xl sm:rounded-2xl p-4 text-center hover:bg-white hover:shadow-md hover:border-violet-100 transition-all duration-300 cursor-pointer group">
                      <div className="mx-auto w-9 h-9 bg-white rounded-xl shadow-sm flex items-center justify-center mb-2 group-hover:scale-105 transition duration-200">
                        {card.icon}
                      </div>
                      <h4 className="font-bold text-xs sm:text-sm text-gray-800">{card.title}</h4>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BOOK DASHBOARD COMPONENT ================= */}
      <div id="dashboard" className="relative z-10">
        <BookDashboard />
      </div>

      {/* ================= FEATURES SPECIFICATION SECTION ================= */}
      <section id="categories" className="py-24 bg-white border-y border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Powerful Features For Book Lovers
            </h2>
            <p className="mt-3 text-gray-500 font-medium text-base sm:text-lg">
              Explore absolute management freedom with tools designed to optimize your library dashboard perfectly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <ShieldCheck className="text-violet-600" size={28} />,
                title: "Secure Platform",
                desc: "Your collections and user records secured with industry-grade privacy measures.",
              },
              {
                icon: <TrendingUp className="text-pink-500" size={28} />,
                title: "Analytics Tracker",
                desc: "Keep dynamic track of your most read genres, statistics, and monthly progress parameters.",
              },
              {
                icon: <BookMarked className="text-indigo-500" size={28} />,
                title: "Easy Bookmarks",
                desc: "Never lose track of your workspace progress. Save digital notes and references directly inside cards.",
              },
              {
                icon: <Layers className="text-fuchsia-500" size={28} />,
                title: "Smart Categories",
                desc: "Automated high-scale genre parsing and customizable filtering options to look up records cleanly.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-50/50 border border-gray-100 p-8 rounded-[24px] shadow-sm hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-50 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm font-medium">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= POPUP AUTOMATED MODAL (LOGIN & REGISTER) ================= */}
      {isAuthOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm" onClick={() => setIsAuthOpen(false)}></div>
          
          <div className="bg-white w-full max-w-md rounded-[28px] border border-gray-100 shadow-2xl relative z-10 p-7 sm:p-8 animate-fade-in">
            <button onClick={() => setIsAuthOpen(false)} className="absolute top-5 right-5 p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition">
              <X size={18} />
            </button>

            <div className="flex gap-4 border-b border-gray-100 pb-2 mb-6 mt-2">
              <button 
                onClick={() => setAuthMode("login")} 
                className={`text-lg font-black pb-1 relative ${authMode === "login" ? "text-gray-900" : "text-gray-400"}`}
              >
                Sign In
                {authMode === "login" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-600 rounded-full"></span>}
              </button>
              <button 
                onClick={() => setAuthMode("signup")} 
                className={`text-lg font-black pb-1 relative ${authMode === "signup" ? "text-gray-900" : "text-gray-400"}`}
              >
                Register
                {authMode === "signup" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-600 rounded-full"></span>}
              </button>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {authMode === "signup" && (
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase block mb-1.5">Username</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-3 flex items-center gap-2 focus-within:bg-white focus-within:border-violet-500 transition">
                    <Users size={16} className="text-gray-400" />
                    <input type="text" placeholder="yourname" className="bg-transparent text-sm w-full outline-none text-gray-700 font-medium" required />
                  </div>
                </div>
              )}
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase block mb-1.5">Email</label>
                <div className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-3 flex items-center gap-2 focus-within:bg-white focus-within:border-violet-500 transition">
                  <Mail size={16} className="text-gray-400" />
                  <input type="email" placeholder="name@example.com" className="bg-transparent text-sm w-full outline-none text-gray-700 font-medium" required />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase block mb-1.5">Password</label>
                <div className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-3 flex items-center gap-2 focus-within:bg-white focus-within:border-violet-500 transition">
                  <Lock size={16} className="text-gray-400" />
                  <input type="password" placeholder="••••••••" className="bg-transparent text-sm w-full outline-none text-gray-700 font-medium" required />
                </div>
              </div>
              <button type="submit" className="w-full bg-gray-900 hover:bg-violet-600 text-white font-bold py-3.5 rounded-xl text-sm transition shadow-md mt-2">
                {authMode === "login" ? "Welcome Back" : "Create Account"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= POPUP SUCCESS NOTIFICATION MODAL ================= */}
      {isSuccessOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm" onClick={() => setIsSuccessOpen(false)}></div>
          <div className="bg-white w-full max-w-sm rounded-3xl p-6 text-center shadow-2xl border border-gray-50 relative z-10 animate-fade-in">
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-500 mb-4">
              <CheckCircle size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Action Successful</h3>
            <p className="text-sm text-gray-500 mt-2">Request completed smoothly. Sync metrics console initialized.</p>
            <button onClick={() => setIsSuccessOpen(false)} className="mt-5 w-full bg-gray-900 text-white font-bold py-2.5 rounded-xl text-sm hover:bg-gray-800 transition">
              Understood
            </button>
          </div>
        </div>
      )}

      {/* FLOATING & CUSTOM SHIMMER COMPONENT ANIMATIONS */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(1deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }

          .animate-float {
            animation: float 5s ease-in-out infinite;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95) translateY(-10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }

          .animate-fade-in {
            animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          @keyframes shimmer {
            100% { transform: translateX(100%); }
          }

          .group-hover\\:animate-shimmer {
            animation: shimmer 1.2s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Home;