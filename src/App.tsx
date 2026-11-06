import { useRef, useState, type ReactNode } from "react"
import RecapOverlay from "./RecapOverlay"

type IconProps = { className?: string }

function BookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11a2 2 0 0 1 2 2v15a2.5 2.5 0 0 0-2.5-2.5H4V5.5Z" />
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v17a2.5 2.5 0 0 1 2.5-2.5H20v-12Z" />
      <circle cx="18.2" cy="17.7" r="3.1" className="icon-accent" />
      <path d="m18.2 16.1.02 1.8 1.1.7" className="icon-detail" />
    </svg>
  )
}

function ChatIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 4h15A2.5 2.5 0 0 1 22 6.5v8a2.5 2.5 0 0 1-2.5 2.5h-7L7 21v-4H4.5A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4Z" />
      <circle cx="7" cy="10.5" r="1.1" className="icon-cutout" />
      <circle cx="12" cy="10.5" r="1.1" className="icon-cutout" />
      <circle cx="17" cy="10.5" r="1.1" className="icon-cutout" />
    </svg>
  )
}

function BellIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 18h14l-1.5-2.3V10a5.5 5.5 0 0 0-11 0v5.7L5 18Z" />
      <path d="M9.5 20a2.7 2.7 0 0 0 5 0H9.5Z" />
    </svg>
  )
}

function CrownIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 7 4.2 3.2L12 4l4.8 6.2L21 7l-1.8 10H4.8L3 7Z" />
      <path d="M5 20h14" className="icon-detail" />
    </svg>
  )
}

function UserIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0H4Z" />
    </svg>
  )
}

function CalendarIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M7 3v4M17 3v4M3 10h18" className="icon-detail" />
    </svg>
  )
}

function ChevronDown({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path d="m5.5 7.5 4.5 4.5 4.5-4.5" />
    </svg>
  )
}

function CheckBadgeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5Z" />
      <path d="m8.5 12.2 2.2 2.2 4.8-5" className="icon-detail" />
    </svg>
  )
}

function ReviewIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="3" width="12" height="17" rx="2.5" />
      <path d="M9 7h5M9 11h5M9 15h3M16.5 14.5 20 18" className="icon-detail" />
    </svg>
  )
}

function MedalIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 3 4 7 4-7h3l-4.2 8.2a5 5 0 1 1-5.6 0L5 3h3Z" />
      <circle cx="12" cy="16" r="2.2" className="icon-detail" />
    </svg>
  )
}

function RecapSparkIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="42" />
      <path d="M60 33v54M33 60h54M41 41l38 38M79 41 41 79" />
      <circle cx="60" cy="60" r="12" />
    </svg>
  )
}

const navigation: Array<{
  label: string
  icon: (props: IconProps) => ReactNode
}> = [
  { label: "Activity", icon: BookIcon },
  { label: "Ask Coach Kyu", icon: ChatIcon },
  { label: "Updates", icon: BellIcon },
  { label: "Upgrade", icon: CrownIcon },
  { label: "Account", icon: UserIcon },
]

const dates = [
  { day: "Sat", date: 29 },
  { day: "Sun", date: 30, selected: true },
  { day: "Mon", date: 31 },
  { day: "Tue", date: 1 },
  { day: "Wed", date: 2 },
  { day: "Thu", date: 3 },
  { day: "Fri", date: 4 },
]

const activityUpdates = [
  {
    type: "Mathematics · Primary 5",
    title: "Learning Path Lesson Completed",
    time: "4:08 PM",
    icon: CheckBadgeIcon,
    summary:
      "Grace completed a Learning Path lesson on Fractions and Percentages.",
    points: [
      "18 questions completed across 4 worksheets",
      "89% practice accuracy",
      "Grace converted fractions to percentages confidently. Multi-step percentage word problems remain an area to practise.",
    ],
  },
  {
    type: "Science · Primary 5",
    title: "Mistake Review Completed",
    time: "4:08 PM",
    icon: ReviewIcon,
    summary: "Grace completed a mistake review on Electrical Systems.",
    points: [
      "6 questions reviewed",
      "83% review accuracy",
      "Grace corrected an earlier mistake about how components behave in series and parallel circuits.",
    ],
  },
  {
    type: "Mathematics · Primary 5",
    title: "Mastery Point Improvement",
    time: "2:35 PM",
    icon: MedalIcon,
    summary: "Grace improved mastery in Volume.",
    points: [
      "11 Mathematics practice questions completed on Volume",
      "100% accuracy in the latest 5 questions",
      "Volume mastery improved from 4 to 5 points, reaching 120 Mastery Points in Primary 5 Mathematics.",
    ],
  },
  {
    type: "Science · Primary 5",
    title: "Learning Path Lesson Completed",
    time: "10:45 AM",
    icon: CheckBadgeIcon,
    summary: "Grace completed a Learning Path lesson on the Water Cycle.",
    points: [
      "16 questions completed across 4 worksheets",
      "88% practice accuracy",
      "Strong progress in explaining evaporation, condensation and how water moves through the environment.",
    ],
  },
  {
    type: "Mathematics · Primary 5",
    title: "Practice Goal Reached",
    time: "9:20 AM",
    icon: MedalIcon,
    summary: "Grace reached today's Mathematics practice goal.",
    points: [
      "A full practice session completed",
      "Daily learning streak maintained",
    ],
  },
]

export default function App() {
  const [active, setActive] = useState("Activity")
  const [profileOpen, setProfileOpen] = useState(false)
  const [recapOpen, setRecapOpen] = useState(false)
  const recapButtonRef = useRef<HTMLButtonElement>(null)

  return (
    <div className="min-h-dvh bg-[#f3f6ff] text-[#111831]">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Luminee Learning home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <i />
          </span>
          <span className="brand-copy">
            <strong>LUMINEE</strong>
            <small>LEARNING</small>
          </span>
        </a>

        <div className="account-wrap">
          <button
            className="account-button"
            type="button"
            aria-expanded={profileOpen}
            onClick={() => setProfileOpen((open) => !open)}
          >
            <span className="account-avatar">
              <UserIcon />
            </span>
            <span className="account-copy">
              <small>Parent Portal</small>
              <strong>Sarah</strong>
            </span>
            <span className="account-details">See details</span>
            <ChevronDown className={`chevron ${profileOpen ? "rotate" : ""}`} />
          </button>
          {profileOpen && (
            <div className="profile-menu">
              <strong>Sarah</strong>
              <span>Parent account</span>
              <button type="button">View account</button>
            </div>
          )}
        </div>
      </header>

      <aside
        className="sidebar"
        aria-label="Primary navigation"
        style={{ height: "fit-content" }}
      >
        <nav style={{ height: "min(100%, 620px)" }}>
          {navigation.map((item) => {
            const selected = item.label === active
            const Icon = item.icon
            return (
              <button
                key={item.label}
                className={`nav-item ${selected ? "selected" : ""}`}
                style={{ flexGrow: 0, flexBasis: "auto", height: "100px" }}
                type="button"
                aria-current={selected ? "page" : undefined}
                onClick={() => setActive(item.label)}
              >
                <span className="nav-icon">
                  <Icon />
                </span>
                <span>
                  {item.label === "Ask Coach Kyu" ? (
                    <>
                      Ask Coach
                      <br />
                      Kyu
                    </>
                  ) : (
                    item.label
                  )}
                </span>
              </button>
            )
          })}
        </nav>
      </aside>

      <main className="main">
        <div className="activity-layout">
          <div className="left-pane">
            <section className="page-header" aria-labelledby="page-title">
              <div className="heading-row">
                <div>
                  <p className="eyebrow">Learning activity</p>
                  <h1 id="page-title">Sun, 30 August 26</h1>
                </div>
                <div className="header-actions">
                  <button type="button" className="date-control">
                    August
                    <CalendarIcon />
                  </button>
                  <button type="button" className="today-button">
                    Today
                  </button>
                </div>
              </div>

              <div className="week-picker" aria-label="Select a date">
                <button
                  className="week-arrow"
                  type="button"
                  aria-label="Previous week"
                >
                  ‹
                </button>
                <div className="days">
                  {dates.map((item) => (
                    <button
                      key={`${item.day}-${item.date}`}
                      className={`day ${item.selected ? "selected" : ""}`}
                      type="button"
                      aria-pressed={item.selected}
                    >
                      <span>{item.day}</span>
                      <strong>{item.date}</strong>
                      <i />
                    </button>
                  ))}
                </div>
                <button
                  className="week-arrow"
                  type="button"
                  aria-label="Next week"
                >
                  ›
                </button>
              </div>
            </section>

            <section className="empty-content" aria-label="Weekly recap">
              <article className="recap-widget">
                <div className="recap-art" aria-hidden="true">
                  <RecapSparkIcon />
                  <span className="recap-orbit orbit-one" />
                  <span className="recap-orbit orbit-two" />
                </div>
                <div className="recap-widget-top">
                  <div className="recap-label">
                    <span>Weekly recap</span>
                    <time dateTime="2026-08-29/2026-09-04">
                      29 Aug – 4 Sep 2026
                    </time>
                  </div>
                  <span className="recap-ready">
                    <i />
                    Ready
                  </span>
                </div>
                <div className="recap-widget-copy">
                  <h2>Grace’s weekly learning recap</h2>
                  <p>
                    She’s improving in both subjects. See what to focus on next.
                  </p>
                  <button
                    ref={recapButtonRef}
                    type="button"
                    aria-haspopup="dialog"
                    onClick={() => setRecapOpen(true)}
                  >
                    View recap
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>

              <article className="daily-progress-card">
                <header className="daily-progress-header">
                  <div>
                    <span className="daily-progress-kicker">
                      Daily activity
                    </span>
                    <h2>Today’s progress</h2>
                  </div>
                  <time dateTime="2026-11-04">Wed, 4 Nov</time>
                </header>

                <section
                  className="subject-progress"
                  aria-labelledby="maths-progress"
                >
                  <div className="subject-progress-heading">
                    <h3 id="maths-progress">Maths</h3>
                    <div className="subject-topics">
                      <span className="subject-topics-label">Topics</span>
                      <span className="subject-topic">Fractions</span>
                      <span className="subject-topic">Word problems</span>
                    </div>
                  </div>
                  <div className="progress-metrics">
                    <div>
                      <strong>1</strong>
                      <span>Practice sessions</span>
                    </div>
                    <div>
                      <strong>20</strong>
                      <span>Questions completed</span>
                    </div>
                    <div>
                      <strong>70%</strong>
                      <span>Correct answers</span>
                    </div>
                  </div>
                </section>

                <section
                  className="subject-progress"
                  aria-labelledby="science-progress"
                >
                  <div className="subject-progress-heading">
                    <h3 id="science-progress">Science</h3>
                    <div className="subject-topics">
                      <span className="subject-topics-label">Topics</span>
                      <span className="subject-topic">Energy</span>
                    </div>
                  </div>
                  <div className="progress-metrics">
                    <div>
                      <strong>1</strong>
                      <span>Practice sessions</span>
                    </div>
                    <div>
                      <strong>20</strong>
                      <span>Questions completed</span>
                    </div>
                    <div>
                      <strong>80%</strong>
                      <span>Correct answers</span>
                    </div>
                  </div>
                </section>
              </article>
            </section>
          </div>

          <aside className="activity-log" aria-labelledby="activity-log-title">
            <div className="activity-log-heading">
              <h2 id="activity-log-title">Activity</h2>
              <span>{activityUpdates.length} updates</span>
            </div>

            <div className="activity-list">
              {activityUpdates.map((update, index) => {
                const UpdateIcon = update.icon
                return (
                  <article
                    className="activity-card"
                    key={`${update.title}-${index}`}
                  >
                    <div className="activity-card-icon">
                      <UpdateIcon />
                    </div>
                    <div className="activity-card-body">
                      <div className="activity-card-top">
                        <div>
                          <span className="activity-type">{update.type}</span>
                          <h3>{update.title}</h3>
                        </div>
                        <time>{update.time}</time>
                      </div>
                      <p>{update.summary}</p>
                      <ul>
                        {update.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                )
              })}
            </div>
          </aside>
        </div>
      </main>
      {recapOpen && (
        <RecapOverlay
          onAskCoach={() => {
            setRecapOpen(false)
            setActive("Ask Coach Kyu")
          }}
          onClose={() => {
            setRecapOpen(false)
            recapButtonRef.current?.focus()
          }}
        />
      )}
    </div>
  )
}
