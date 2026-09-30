'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Check,
  ChevronRight,
  Cpu,
  Eye,
  FileVideo,
  Layers3,
  LockKeyhole,
  Moon,
  ScanSearch,
  Scissors,
  Search,
  ShieldCheck,
  Sparkles,
  Video,
} from 'lucide-react'

const capabilities = [
  {
    icon: Search,
    number: '01',
    title: 'Search in plain language',
    description: 'Describe a person, vehicle, object, or action. Find relevant moments without scrubbing through the full recording.',
  },
  {
    icon: Moon,
    number: '02',
    title: 'Reveal low-light detail',
    description: 'Zero-DCE enhancement improves dark frames before analysis, helping surface useful visual detail in challenging footage.',
  },
  {
    icon: ScanSearch,
    number: '03',
    title: 'Analyze the full timeline',
    description: 'Adaptive frame extraction and motion scoring focus processing on meaningful moments across long recordings.',
  },
  {
    icon: BrainCircuit,
    number: '04',
    title: 'Validate visual matches',
    description: 'Multimodal Gemini analysis checks candidate clips for semantic relevance to the investigator’s query.',
  },
  {
    icon: Activity,
    number: '05',
    title: 'Keep events continuous',
    description: 'Temporal smoothing connects nearby detections and reduces isolated false positives in noisy footage.',
  },
  {
    icon: Scissors,
    number: '06',
    title: 'Extract precise clips',
    description: 'Jump to matched timestamps and cut relevant segments with FFmpeg stream copy, avoiding re-encoding.',
  },
  {
    icon: Layers3,
    number: '07',
    title: 'Follow analysis as it runs',
    description: 'See processing stages and progress in the workspace, then review matches on the video timeline.',
  },
  {
    icon: Cpu,
    number: '08',
    title: 'Work within hardware limits',
    description: 'CPU, memory, and VRAM monitoring help the processing pipeline operate on constrained systems.',
  },
  {
    icon: LockKeyhole,
    number: '09',
    title: 'Designed for controlled environments',
    description: 'Built for authorized police and forensic teams working in closed, internally managed investigation environments.',
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="brand-link group flex items-center gap-3" aria-label="TraceVision home">
          <Image src="/tracevision-icon.svg" alt="" width={38} height={38} priority className="brand-mark" />
          <span className="brand-wordmark">Trace<span>Vision</span></span>
        </Link>
        <nav className="flex items-center gap-5 sm:gap-8" aria-label="Main navigation">
          <a href="#capabilities" className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline">Capabilities</a>
          <a href="#workflow" className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline">Workflow</a>
          <Link href="/dashboard" className="inline-flex h-10 items-center gap-2 rounded-md bg-[#183d34] px-4 text-sm font-medium text-white transition-colors hover:bg-[#245447]">
            Open workspace <ArrowRight className="size-4" />
          </Link>
        </nav>
      </header>

      <main>
        <section className="relative bg-[#112720] text-white">
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(199,231,215,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(199,231,215,0.14)_1px,transparent_1px)] [background-size:52px_52px]" />
          <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-12 lg:py-24">
            <div className="hero-copy max-w-[590px]">
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a9d8bf]">
                <span className="h-px w-8 bg-[#a9d8bf]" />
                Forensic video intelligence
              </div>
              <h1 className="mt-6 text-[44px] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[56px] lg:text-[64px]">
                Hours of footage.<br />
                <span className="text-[#bce58c]">Find the moment.</span>
              </h1>
              <p className="mt-6 max-w-[470px] text-base leading-7 text-[#d0dbd5] sm:text-lg">
                Find the moment that matters in hours of CCTV footage. Describe what you’re looking for, then move directly to the matching evidence.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/dashboard" className="group inline-flex h-12 items-center gap-3 rounded-md bg-[#bce58c] px-5 text-sm font-semibold text-[#173228] transition-colors hover:bg-[#d0f0aa]">
                  Start an investigation
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a href="#capabilities" className="inline-flex h-12 items-center gap-2 px-2 text-sm font-medium text-white/75 transition-colors hover:text-white">
                  Explore capabilities <ArrowDown className="size-4" />
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-5 text-[11px] font-medium uppercase tracking-[0.1em] text-white/60">
                <span className="inline-flex items-center gap-2"><Check className="size-3.5 text-[#bce58c]" /> Plain-language search</span>
                <span className="inline-flex items-center gap-2"><Check className="size-3.5 text-[#bce58c]" /> Timestamp-level review</span>
              </div>
            </div>

            <div className="hero-preview relative mx-auto w-full max-w-[660px] lg:ml-auto">
              <div className="absolute -inset-4 border border-white/10 sm:-inset-5" />
              <div className="relative overflow-hidden border border-white/15 bg-[#0b1511] shadow-[0_28px_90px_-42px_rgba(0,0,0,0.9)]">
                <div className="flex h-12 items-center justify-between border-b border-white/10 px-4 sm:px-5">
                  <div className="flex items-center gap-2.5">
                    <span className="size-2 rounded-full bg-[#bce58c]" />
                    <span className="font-mono text-[10px] font-medium tracking-[0.12em] text-white/75">TRACEVISION / WORKSPACE</span>
                  </div>
                  <span className="font-mono text-[10px] text-white/35">SESSION 001</span>
                </div>
                <div className="relative flex aspect-[1.72/1] items-center justify-center overflow-hidden bg-[#101b16]">
                  <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(174,211,187,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(174,211,187,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />
                  <div className="absolute inset-x-8 top-8 flex justify-between font-mono text-[9px] tracking-[0.12em] text-white/35 sm:inset-x-10">
                    <span>VIDEO REVIEW</span><span>INPUT / READY</span>
                  </div>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="flex size-12 items-center justify-center border border-[#bce58c]/40 bg-[#bce58c]/10 text-[#bce58c]">
                      <Video className="size-5" />
                    </div>
                    <span className="mt-3 font-mono text-[10px] tracking-[0.12em] text-white/65">FOOTAGE PREVIEW</span>
                    <span className="mt-1 text-xs text-white/35">Upload a recording to begin</span>
                  </div>
                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between font-mono text-[9px] text-white/35 sm:left-7 sm:right-7">
                    <span>00:00:00</span><span>NO SOURCE LOADED</span><span>00:00:00</span>
                  </div>
                </div>
                <div className="border-t border-white/10 bg-[#111d17] p-3 sm:p-4">
                  <div className="flex min-h-11 items-center gap-3 border border-white/10 bg-[#0b1511] px-3 sm:px-4">
                    <Search className="size-4 shrink-0 text-[#bce58c]" />
                    <span className="min-w-0 flex-1 truncate text-xs text-white/45 sm:text-sm">Describe a person, vehicle, or event…</span>
                    <span className="inline-flex h-8 shrink-0 items-center gap-2 bg-[#bce58c] px-3 text-xs font-semibold text-[#173228]">
                      <Sparkles className="size-3.5" /> Search
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 font-mono text-[9px] tracking-[0.08em] text-white/40 sm:px-5">
                  <span className="inline-flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#bce58c]" /> ANALYSIS ENGINE READY</span>
                  <span>LOCAL REVIEW CONTROLS</span>
                </div>
              </div>
              <div className="absolute -bottom-7 -left-4 hidden items-center gap-3 border border-white/15 bg-[#1b3329] px-4 py-3 sm:flex">
                <div className="flex size-8 items-center justify-center bg-[#bce58c]/10 text-[#bce58c]"><Eye className="size-4" /></div>
                <div><p className="text-xs font-medium text-white">Review with context</p><p className="mt-0.5 font-mono text-[9px] text-white/45">MATCHED MOMENTS / TIMELINE</p></div>
                <ChevronRight className="ml-2 size-4 text-white/40" />
              </div>
            </div>
          </div>
          <div className="relative border-t border-white/10">
            <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-4 px-5 py-5 sm:grid-cols-4 sm:px-8 lg:px-12">
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-white/55"><ScanSearch className="size-4 text-[#bce58c]" /> Semantic search</div>
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-white/55"><Moon className="size-4 text-[#bce58c]" /> Low-light ready</div>
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-white/55"><Activity className="size-4 text-[#bce58c]" /> Temporal analysis</div>
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-white/55"><ShieldCheck className="size-4 text-[#bce58c]" /> Evidence review</div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div className="max-w-[390px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">Built for the hard footage</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">A sharper way to investigate.</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">A complete analysis pipeline turns raw surveillance video into moments your team can find, inspect, and act on.</p>
            </div>
            <div className="grid border-t border-border sm:grid-cols-2 sm:gap-x-10">
              {capabilities.map(({ icon: Icon, number, title, description }) => (
                <article key={number} className="grid grid-cols-[34px_1fr] gap-4 border-b border-border py-6 sm:py-7">
                  <span className="font-mono text-[10px] text-muted-foreground/70">{number}</span>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <Icon className="size-4 text-primary" strokeWidth={1.8} />
                      <h3 className="text-sm font-semibold">{title}</h3>
                    </div>
                    <p className="mt-2 text-[13px] leading-5 text-muted-foreground">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="border-y border-border bg-[#e9efea]">
          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">A clear path from footage to finding</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em]">Three steps. No manual scrubbing.</h2>
              </div>
              <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-[#0f5949]">
                Open the investigation workspace <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-8 border-t border-[#cbd8cf] pt-7 md:grid-cols-3 md:gap-10">
              <div>
                <span className="font-mono text-[11px] text-primary">01 / LOAD</span>
                <div className="mt-4 flex items-start gap-3"><FileVideo className="mt-0.5 size-5 text-primary" /><div><h3 className="text-base font-semibold">Add a recording</h3><p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">Upload MP4, AVI, WEBM, MOV, or MKV footage to the review workspace.</p></div></div>
              </div>
              <div>
                <span className="font-mono text-[11px] text-primary">02 / DESCRIBE</span>
                <div className="mt-4 flex items-start gap-3"><Search className="mt-0.5 size-5 text-primary" /><div><h3 className="text-base font-semibold">Search what you saw</h3><p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">Use a natural-language description of the person, vehicle, or event you need to locate.</p></div></div>
              </div>
              <div>
                <span className="font-mono text-[11px] text-primary">03 / REVIEW</span>
                <div className="mt-4 flex items-start gap-3"><Eye className="mt-0.5 size-5 text-primary" /><div><h3 className="text-base font-semibold">Inspect matched moments</h3><p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">Select a result to jump to its timestamp, play the footage, and inspect event markers.</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto flex max-w-[1440px] flex-col gap-7 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">TraceVision investigation workspace</p>
            <h2 className="mt-3 max-w-[680px] text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">Spend less time searching. More time understanding.</h2>
          </div>
          <Link href="/dashboard" className="group inline-flex h-12 shrink-0 items-center gap-3 self-start rounded-md bg-[#183d34] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#245447] md:self-auto">
            Start an investigation <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </section>
      </main>

      <footer className="border-t border-border bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <Link href="/" className="brand-link flex items-center gap-2.5" aria-label="TraceVision home">
            <Image src="/tracevision-icon.svg" alt="" width={28} height={28} className="brand-mark" />
            <span className="brand-wordmark">Trace<span>Vision</span></span>
          </Link>
          <span>AI-powered CCTV video search and forensic review.</span>
          <Link href="/dashboard" className="inline-flex items-center gap-1.5 transition-colors hover:text-primary">Open workspace <ArrowRight className="size-3.5" /></Link>
        </div>
      </footer>
    </div>
  )
}