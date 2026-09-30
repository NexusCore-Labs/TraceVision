'use client'

import { AlertCircle, Loader2, XCircle, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AuditMatch, AnalysisProgress } from '@/types/audit'

interface AuditResultsProps {
  matches: AuditMatch[]
  isProcessing: boolean
  progress?: AnalysisProgress | null
  activeMatchId: string | null
  onSelect: (id: string, startSeconds: number) => void
  onCancel?: () => void
}

export function AuditResults({
  matches,
  isProcessing,
  progress,
  activeMatchId,
  onSelect,
  onCancel,
}: AuditResultsProps) {
  return (
    <div className="flex h-full flex-col rounded-md border border-border bg-card overflow-hidden shadow-sm">
      {/* Panel Header */}
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-border px-4 bg-white">
        <div className="flex items-center gap-2">
          <span className="text-primary">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </span>
          <span className="font-semibold tracking-wider text-sm">Audit Results</span>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          {`${matches.length} ${matches.length === 1 ? 'match' : 'matches'}`}
        </span>
      </div>

      {/* Panel Body */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-thin">
        {isProcessing ? (
          <div className="flex flex-col items-center justify-center p-6 space-y-4 rounded-md border border-primary/20 bg-secondary/60 my-auto text-center animate-in fade-in duration-300">
            <div className="relative flex size-12 items-center justify-center rounded-full bg-white border border-primary/25">
              <Loader2 className="size-6 text-primary animate-spin" />
            </div>

            <div className="space-y-1.5 w-full max-w-xs">
              <div className="flex items-center justify-between text-xs font-mono text-primary font-bold">
                <span>
                  {progress?.status === 'compressing'
                    ? 'COMPRESSING'
                    : progress?.status === 'uploading'
                    ? 'UPLOADING'
                    : progress?.status === 'extracting'
                      ? 'EXTRACTING'
                      : 'ANALYZING'}
                </span>
                <span>{progress?.progress ?? 35}%</span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 w-full rounded-full bg-secondary overflow-hidden border border-border/50">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${progress?.progress ?? 35}%` }}
                />
              </div>

              <p className="text-xs text-muted-foreground font-mono pt-1 leading-relaxed">
                {progress?.message || 'Processing video chunks & extracting keyframes...'}
              </p>
            </div>

            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="flex items-center gap-1.5 rounded px-2.5 py-1 font-mono text-[11px] text-destructive hover:bg-destructive/10 border border-destructive/20 transition-colors"
              >
                <XCircle className="size-3.5" />
                <span>Cancel Audit</span>
              </button>
            )}
          </div>
        ) : matches.length === 0 ? (
          /* Empty State */
          <div className="flex h-64 flex-col items-center justify-center p-6 text-center space-y-3">
            <div className="flex size-12 items-center justify-center rounded-xl bg-secondary/80 border border-border/80 text-muted-foreground">
              <AlertCircle className="size-6 text-muted-foreground" />
            </div>
            <div className="space-y-1 max-w-xs">
              <p className="text-xs font-medium text-foreground">
                No audit queries executed.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Upload footage and submit an analysis query.
              </p>
            </div>
          </div>
        ) : (
          /* Simplified Result Cards (Tags and Confidence Removed) */
          matches.map((match) => {
            const isSelected = activeMatchId === match.id

            return (
              <div
                key={match.id}
                role="button"
                tabIndex={0}
                onClick={() => onSelect(match.id, match.start_seconds)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onSelect(match.id, match.start_seconds)
                  }
                }}
                className={cn(
                  'group relative flex flex-col gap-2 p-3.5 rounded-md border transition-colors cursor-pointer select-none text-left',
                  isSelected
                    ? 'bg-secondary/70 border-primary/50 ring-1 ring-primary/15'
                    : 'bg-white border-border hover:border-primary/35 hover:bg-[#fbfdfb]'
                )}
              >
                {/* Header Row: Timestamp */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-xs font-bold tracking-wide text-primary">
                      {match.start_time} – {match.end_time}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground/60">
                      ({Math.round(match.start_seconds)}s)
                    </span>
                  </div>
                </div>

                {/* Event Description */}
                <p className="text-xs text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors">
                  {match.description}
                </p>

                {/* Footer Metadata & Seek Prompt */}
                <div className="flex items-center justify-between pt-1 border-t border-border/40 text-[10px] font-mono text-muted-foreground/70">
                  <span className="flex items-center gap-1">
                    {match.chunk_id && (
                      <span className="text-muted-foreground/40">{match.chunk_id}</span>
                    )}
                  </span>
                  <span className="flex items-center gap-0.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Seek to frame <ArrowUpRight className="size-3" />
                  </span>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}