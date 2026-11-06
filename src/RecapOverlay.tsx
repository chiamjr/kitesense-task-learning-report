import { useEffect, useRef, useState } from "react"
import { weeklyRecap, type RecapCard } from "./weeklyRecap"
import {
  AccuracyChangeBadge,
  WarningCircleIcon,
  WarningTriangleIcon,
} from "./AccuracyBadge"

type Props = { onClose: () => void; onAskCoach: () => void }

const FOCUSABLE = "button, [href], [tabindex]:not([tabindex='-1'])"

function ChatBubbleIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 3.5h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3.5v-3.5h-.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z" />
    </svg>
  )
}

function StairsUpIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="20"
      height="20"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 16.5h4v-4h4v-4h4v-4" />
      <path d="m12.5 3.5 2.5-2.5 2.5 2.5" transform="translate(0 2)" />
    </svg>
  )
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="20"
      height="20"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "left" ? (
        <path d="M16 10H4m6-6-6 6 6 6" />
      ) : (
        <path d="M4 10h12m-6-6 6 6-6 6" />
      )}
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="20"
      height="20"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 10.5 4 4 8-9" />
    </svg>
  )
}

function TopicBadges({ topics }: { topics: string[] }) {
  return (
    <div className="recap-topic-badges">
      {topics.map((topic) => (
        <span className="subject-topic" key={topic}>
          {topic}
        </span>
      ))}
    </div>
  )
}

function RecapCardContent({
  card,
  onAskCoach,
}: {
  card: RecapCard
  onAskCoach: () => void
}) {
  return (
    <>
      {card.eyebrow && <span className="recap-eyebrow">{card.eyebrow}</span>}
      {card.summary && <h2>{card.summary}</h2>}
      {card.closing && (
        <div className="recap-closing">
          <h2>{card.closing.message}</h2>
          <p>{card.closing.prompt}</p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onAskCoach()
            }}
          >
            <ChatBubbleIcon />
            {card.closing.cta}
          </button>
        </div>
      )}
      {card.subjects && (
        <div className="recap-subjects">
          {card.subjects.map((subject) => (
            <section className="subject-progress" key={subject.name}>
              <div className="subject-progress-heading">
                <h3>{subject.name}</h3>
              </div>
              <div className="progress-metrics">
                {subject.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="metric-value">
                      <strong>{m.value}</strong>
                      {m.delta && (
                        <span className="accuracy-badge is-strong">
                          {m.delta} vs last week
                        </span>
                      )}
                      {m.change !== undefined && (
                        <AccuracyChangeBadge change={m.change} />
                      )}
                    </div>
                    <span>{m.label}</span>
                    {m.topics && <TopicBadges topics={m.topics} />}
                  </div>
                ))}
              </div>
              {subject.callout && (
                <div className="recap-callout">
                  <StairsUpIcon />
                  <span>{subject.callout.label}</span>
                  <span className="recap-callout-badge">
                    {subject.callout.text}
                  </span>
                </div>
              )}
            </section>
          ))}
        </div>
      )}
      {card.footnote && <p className="recap-footnote">{card.footnote}</p>}
      {card.columns && card.rows && (
        <table className="recap-table">
          <thead>
            <tr>
              {card.columns.map((c, i) => (
                <th key={i} scope="col">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {card.rows.map((row, r) => (
              <tr key={r}>
                {row.cells.map((cell, c) =>
                  c === 0 ? (
                    <th key={c} scope="row">
                      {cell.text}
                    </th>
                  ) : (
                    <td key={c}>
                      {row.pill && c === row.cells.length - 1 ? (
                        <span
                          className={`accuracy-badge ${
                            row.pill === "strong" ? "is-low" : "is-room"
                          }`}
                        >
                          {row.pill === "strong" ? (
                            <WarningCircleIcon />
                          ) : (
                            <WarningTriangleIcon />
                          )}
                          <span className="badge-text">{cell.text}</span>
                        </span>
                      ) : (
                        <>
                          <strong>{cell.text}</strong>
                          {cell.positive && (
                            <em className="recap-positive">{cell.positive}</em>
                          )}
                        </>
                      )}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default function RecapOverlay({ onClose, onAskCoach }: Props) {
  const [index, setIndex] = useState(0)
  const dialogRef = useRef<HTMLDivElement>(null)
  const last = weeklyRecap.length - 1
  const card = weeklyRecap[index]

  const next = () => (index === last ? onClose() : setIndex(index + 1))
  const back = () => setIndex((i) => Math.max(0, i - 1))
  const nextRef = useRef(next)
  nextRef.current = next

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      else if (e.key === "ArrowRight") nextRef.current()
      else if (e.key === "ArrowLeft") back()
      else if (e.key === "Tab") {
        const els = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE)
        if (!els?.length) return
        const first = els[0]
        const lastEl = els[els.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          lastEl.focus()
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [last, onClose])

  useEffect(() => {
    dialogRef.current?.querySelector<HTMLElement>(".recap-next")?.focus()
  }, [])

  const tapZone = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    if (e.clientX - rect.left < rect.width / 2) back()
    else next()
  }

  return (
    <div className="recap-modal-backdrop" onClick={onClose}>
      <div
        ref={dialogRef}
        className={`recap-modal${card.closing ? " is-closing" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Weekly recap"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="recap-modal-top">
          <div className="recap-segments">
            {weeklyRecap.map((_, i) => (
              <span
                key={i}
                role="img"
                aria-label={`Card ${i + 1} of ${weeklyRecap.length}`}
                aria-current={i === index ? "step" : undefined}
                className={i <= index ? "is-filled" : undefined}
              />
            ))}
          </div>
          <button
            type="button"
            className="recap-close"
            aria-label="Close recap"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="recap-story" onClick={tapZone}>
          {weeklyRecap.map((c, i) => (
            <div
              key={i}
              className={`recap-slide${i === index ? "" : " is-hidden"}`}
              aria-hidden={i !== index}
              inert={i !== index}
            >
              <RecapCardContent card={c} onAskCoach={onAskCoach} />
            </div>
          ))}
        </div>

        <div className="recap-modal-nav">
          <button
            type="button"
            className="recap-back"
            aria-label="Back"
            onClick={back}
            disabled={index === 0}
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            className="recap-next"
            aria-label={index === last ? "Done" : "Next"}
            onClick={next}
          >
            {index === last ? <CheckIcon /> : <ArrowIcon direction="right" />}
          </button>
        </div>
      </div>
    </div>
  )
}
