import { useState } from 'react';
import { Terminal, Trophy, Code2, Play, CheckCircle2, Calendar, ArrowRight, Layers } from 'lucide-react';

export default function CodewarLanding() {
  const [codeExecuted, setCodeExecuted] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const handleRunCode = () => {
    setIsRunning(true);
    setCodeExecuted(false);
    setTimeout(() => {
      setIsRunning(false);
      setCodeExecuted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-gray-200 font-sans antialiased overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* GLOBAL CUSTOM ANIMATIONS */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.08); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 0 40px; }
        }
        .animate-glow { animation: pulseGlow 7s ease-in-out infinite; }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-grid { animation: gridMove 10s linear infinite; }
      `}</style>

      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-glow" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none animate-glow" style={{ animationDelay: '-3.5s' }} />

      {/* BACKGROUND MOVING GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none animate-grid" />

      {/* 1. NAVIGATION BAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#08080a]/80 border-b border-gray-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-white transition-transform duration-300 hover:scale-105">
              <span className="text-indigo-500 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]">⚔️</span> Codewar
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
              <a href="#problems" className="hover:text-white transition-colors duration-200">Problems</a>
              <a href="#contests" className="hover:text-white transition-colors duration-200">Contests</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Leaderboard</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Login
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-indigo-600/20">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 grid lg:grid-cols-12 gap-12 items-center z-10">
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-bold text-indigo-400 tracking-wide uppercase">
            🚀 Code, Submit, & Compete
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            CRUSH PROBLEMS.<br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              WIN CONTESTS.
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
            Solve curated algorithmic challenges, submit your code for immediate grading, and test your speed in timed community contests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <a href="#problems" className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-center font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] active:translate-y-0">
              Browse Problems
            </a>
            <a href="#contests" className="border border-gray-800 hover:border-gray-700 bg-gray-900/40 text-gray-300 text-center font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-gray-900/60">
              Join Next Contest
            </a>
          </div>
        </div>

        {/* INTERACTIVE COMPILER MOCK */}
        <div className="lg:col-span-7 bg-[#0e0f12] border border-gray-800/80 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-gray-700 animate-float">
          <div className="bg-[#13151a] border-b border-gray-800/80 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="text-xs text-gray-400 font-mono ml-2">fizz_buzz.py</span>
            </div>
            <button 
              onClick={handleRunCode}
              disabled={isRunning}
              className={`flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg transition-all border ${
                isRunning 
                  ? 'bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed' 
                  : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20'
              }`}
            >
              <Play size={12} fill={!isRunning ? 'currentColor' : 'none'} />
              {isRunning ? 'RUNNING SUBMISSION...' : 'SUBMIT CODE'}
            </button>
          </div>
          
          <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-gray-300 bg-[#0a0b0d]/80 min-h-[200px]">
            <p><span className="text-purple-400">def</span> <span className="text-blue-400">fizzBuzz</span>(n: int) -&gt; List[str]:</p>
            <p className="pl-4 text-gray-500"># Submit code to the evaluation server</p>
            <p className="pl-4">res = []</p>
            <p className="pl-4"><span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> <span class="text-indigo-400">range</span>(1, n + 1):</p>
            <p className="pl-8"><span className="text-purple-400">if</span> i % 3 == 0 <span className="text-purple-400">and</span> i % 5 == 0:</p>
            <p className="pl-12 text-emerald-400">res.append(<span className="text-amber-400">"FizzBuzz"</span>)</p>
            <p className="pl-8"><span className="text-purple-400">else</span>:</p>
            <p className="pl-12 text-emerald-400">res.append(<span className="text-indigo-400">str</span>(i))</p>
            <p className="pl-4"><span className="text-purple-400">return</span> res</p>
          </div>
          
          <div className="bg-[#07080a] border-t border-gray-800/80 p-4 font-mono text-xs">
            <div className="text-gray-500 mb-1.5">Online Judge Terminal:</div>
            {isRunning && (
              <div className="text-indigo-400 flex items-center gap-2 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" /> Evaluating solution vectors across 60 input suites...
              </div>
            )}
            {codeExecuted && !isRunning && (
              <div className="text-emerald-400 flex items-center gap-2 transition-all duration-300">
                <CheckCircle2 size={14} /> 
                <span>Accepted • Runtime: 24ms • Memory Beats 96.7% of Python submissions</span>
              </div>
            )}
            {!isRunning && !codeExecuted && (
              <div className="text-gray-600">Hit "Submit Code" to run your function against the automated test parameters.</div>
            )}
          </div>
        </div>
      </section>

      {/* 3. PROBLEMS FOCUS SECTION */}
      <section id="problems" className="relative bg-[#0b0c0f] border-y border-gray-900/60 py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-xs font-bold text-indigo-500 tracking-widest uppercase mb-2">Problem Bank</h2>
              <p className="text-3xl font-black text-white">Sharpen your analytical focus</p>
            </div>
            <a href="#" className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold flex items-center gap-1 group">
              View all problems <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { id: "01", name: "Two Sum Matrix Lookup", diff: "Easy", rate: "48.2%", icon: <Code2 size={20} /> },
              { id: "42", name: "Binary Tree Validations", diff: "Medium", rate: "31.5%", icon: <Layers size={20} /> },
              { id: "89", name: "LRU Cache Memory Nodes", diff: "Hard", rate: "14.9%", icon: <Terminal size={20} /> }
            ].map((prob) => (
              <div key={prob.id} className="bg-[#0e0f13] border border-gray-800/60 p-6 rounded-2xl hover:border-indigo-500/30 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-gray-600">#00{prob.id}</span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                    prob.diff === 'Easy' ? 'bg-emerald-500/10 text-emerald-400' :
                    prob.diff === 'Medium' ? 'bg-amber-500/10 text-amber-400' : 'bg-rose-500/10 text-rose-400'
                  }`}>{prob.diff}</span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors duration-200 mb-6">{prob.name}</h4>
                <div className="flex items-center justify-between text-xs text-gray-500 font-mono border-t border-gray-900 pt-4">
                  <span className="flex items-center gap-1.5">{prob.icon} Python / JS / Go</span>
                  <span>AC Rate: {prob.rate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTESTS SECTION */}
      <section id="contests" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs font-bold text-indigo-500 tracking-widest uppercase mb-2">Timed Competitions</h2>
          <p className="text-3xl font-black text-white sm:text-4xl">Weekly Live Coding Tournaments</p>
          <p className="text-gray-400 mt-2 text-sm">Race the clock against the global community to secure points and standings.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Active / Upcoming Contest */}
          <div className="bg-gradient-to-b from-[#111218] to-[#0e0f13] border border-indigo-500/20 p-8 rounded-2xl relative overflow-hidden shadow-lg shadow-indigo-950/10 group">
            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-black tracking-wider uppercase px-4 py-1 rounded-bl-xl animate-pulse">
              Registering
            </div>
            <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center mb-6">
              <Trophy size={22} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Codewar Biweekly Round 12</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">4 Algorithmic challenges structured over a compact 90-minute limit block.</p>
            
            <div className="space-y-3 font-mono text-xs text-gray-400 border-t border-gray-800/80 pt-6">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-indigo-400" /> <span>Starts: Saturday, 8:00 PM UTC</span>
              </div>
            </div>
            <button className="mt-8 w-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold py-3 rounded-xl transition-all duration-200">
              Register Now
            </button>
          </div>

          {/* Practice Contest Mock */}
          <div className="bg-[#0e0f13] border border-gray-800/60 p-8 rounded-2xl flex flex-col justify-between hover:border-gray-700 transition-all duration-300">
            <div>
              <div className="w-12 h-12 bg-gray-900 border border-gray-800 text-gray-400 rounded-xl flex items-center justify-center mb-6">
                <Terminal size={22} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Past Contests Archive</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Missed a scheduled event window? Enter virtual testing modes using previous tournament parameters to track performance indicators mockingly.</p>
            </div>
            <button className="mt-8 w-full border border-gray-800 hover:border-gray-700 bg-gray-900/20 text-gray-300 text-sm font-bold py-3 rounded-xl transition-all duration-200">
              Virtual Practice
            </button>
          </div>
        </div>
      </section>

      {/* 5. SIMPLE FOOTER */}
      <footer className="border-t border-gray-900/60 bg-[#050608] py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs text-gray-600 font-mono">
            © 2026 Codewar Online Judge. Built for scalability.
          </div>
          <div className="flex gap-6 text-xs text-gray-500 font-medium">
            <a href="#problems" className="hover:text-white transition-colors">Problems</a>
            <a href="#contests" className="hover:text-white transition-colors">Contests</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}