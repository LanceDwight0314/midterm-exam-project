import { CheckInTerminal } from "@/components/terminal/CheckInTerminal"
import { ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background relative overflow-hidden bg-grid-slate">
      {/* Decorative elements for a sophisticated academic feel */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full -mr-96 -mt-96 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400/5 rounded-full -ml-48 -mb-48 blur-[100px] pointer-events-none" />
      
      <header className="p-6 md:p-8 flex justify-between items-center z-10 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-4 group cursor-default">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-primary/20 transition-transform group-hover:scale-105">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-headline font-extrabold text-2xl leading-none tracking-tight text-primary">
              NEU<span className="text-foreground/80">LibraryGuard</span>
            </h1>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/70 mt-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Terminal Active
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/login" 
            className="text-sm font-bold text-muted-foreground hover:text-primary transition-all bg-white/50 backdrop-blur-md px-6 py-2.5 rounded-full border border-border/50 shadow-sm hover:shadow-md hover:bg-white active:scale-95"
          >
            Admin Portal
          </Link>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-6 z-10 -mt-12">
        <div className="max-w-2xl w-full text-center mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4 tracking-tight">
            Secure Library Entry
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
            Please authenticate using your Institutional ID or Email to access library services and resources.
          </p>
        </div>
        
        <CheckInTerminal />
      </div>

      <footer className="p-10 text-center z-10 border-t border-border/20 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="h-[1px] flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-border" />
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-muted-foreground/80">
              New Era University
            </span>
            <div className="h-[1px] flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-border" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4">
            <p className="text-[11px] text-muted-foreground/60 font-medium">
              © {new Date().getFullYear()} Library Services & Information Technology Office
            </p>
            <div className="flex gap-6">
              <span className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest">Version 1.2.0</span>
              <span className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest">System Stable</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
