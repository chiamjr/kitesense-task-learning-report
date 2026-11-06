export function WarningTriangleIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2 14.5 13.5h-13Z" />
      <path d="M8 6.5v3.2M8 11.7v.1" />
    </svg>
  )
}

export function WarningCircleIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6.5" />
      <path d="M8 4.8v3.8M8 11v.1" />
    </svg>
  )
}

function ArrowIcon({ up }: { up: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      role="img"
      aria-label={up ? "Up" : "Down"}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {up ? <path d="M8 13V3m-4 4 4-4 4 4" /> : <path d="M8 3v10m-4-4 4 4 4-4" />}
    </svg>
  )
}

/** Change in accuracy (percentage points) vs the previous week. */
export function AccuracyChangeBadge({ change }: { change: number }) {
  const up = change >= 0
  return (
    <span className="accuracy-badge is-strong">
      <ArrowIcon up={up} />
      {Math.abs(change)}% vs last week
    </span>
  )
}
