export type RecapCell = { text: string; positive?: string }

export type RecapCard = {
  eyebrow?: string
  summary?: string
  subjects?: {
    name: string
    metrics: {
      value: string
      label: string
      delta?: string
      change?: number
      topics?: string[]
    }[]
    callout?: { label: string; text: string }
  }[]
  footnote?: string
  closing?: { message: string; prompt: string; cta: string }
  columns?: string[]
  rows?: {
    cells: RecapCell[]
    pill?: "strong" | "soft"
  }[]
}

const t = (text: string, positive?: string): RecapCell => ({ text, positive })

export const weeklyRecap: RecapCard[] = [
  {
    eyebrow: "Effort",
    summary: "Grace is putting in consistent work in both subjects, especially in Maths.",
    subjects: [
      {
        name: "Maths",
        metrics: [
          { value: "6", label: "Practice sessions" },
          { value: "120", label: "Questions completed" },
          {
            value: "5",
            label: "Topics practised",
            topics: [
              "Fractions",
              "Percentages",
              "Word Problems",
              "Whole Numbers",
              "Volume",
            ],
          },
        ],
      },
      {
        name: "Science",
        metrics: [
          { value: "4", label: "Practice sessions" },
          { value: "80", label: "Questions completed" },
          {
            value: "3",
            label: "Topics practised",
            topics: ["Energy", "Electrical Systems", "Light"],
          },
        ],
      },
    ],
  },
  {
    eyebrow: "Improvement",
    summary:
      "Grace is improving in both Maths and Science, and Whole Numbers is now a strength worth celebrating.",
    subjects: [
      {
        name: "Maths",
        metrics: [
          { value: "105", delta: "+20", label: "Learning points*" },
          { value: "70%", change: 8, label: "Correct answers" },
        ],
        callout: { label: "Topic improved", text: "Whole Numbers" },
      },
      {
        name: "Science",
        metrics: [
          { value: "75", delta: "+10", label: "Learning points*" },
          { value: "80%", change: 5, label: "Correct answers" },
        ],
      },
    ],
    footnote:
      "*Learning points represents progress in learning specific skills and topics.",
  },
  {
    eyebrow: "Next focus",
    summary: "Next, Grace should tackle multi-step Maths word problems, her biggest challenge right now.",
    columns: ["Topic", "Subject", "Status"],
    rows: [
      {
        pill: "strong",
        cells: [t("Word Problems"), t("Maths"), t("Biggest struggle")],
      },
      {
        pill: "soft",
        cells: [t("Fractions"), t("Maths"), t("Needs practice")],
      },
      {
        pill: "soft",
        cells: [t("Energy"), t("Science"), t("Needs practice")],
      },
    ],
  },
  {
    closing: {
      message:
        "Grace’s hard work is paying off. Word problems are her next challenge.",
      prompt: "Have a question about her learning?",
      cta: "Ask Coach Kyu",
    },
  },
]
