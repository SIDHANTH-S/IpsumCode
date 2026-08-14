import { Tone, Difficulty } from "../types"

import {
  Bold,
  Italic,
  Underline,
  Code2,
  Heading1,
  Heading2,
  Quote,
  List,
  Link2,
  ListOrdered,
  Undo2,
  Redo2,
} from "lucide-react"

export const CARD_GRADIENTS = {
  purple:
    "linear-gradient(153.43deg, rgb(167,156,255) 8.33%, rgb(91,74,239) 91.67%)",

  blue: "linear-gradient(153.43deg, rgb(110,168,255) 8.33%, rgb(41,82,227) 91.67%)",

  orange:
    "linear-gradient(153.43deg, rgb(255,217,138) 8.33%, rgb(245,165,36) 91.67%)",

  pink: "linear-gradient(153.43deg, rgb(255,159,178) 8.33%, rgb(245,86,122) 91.67%)",
} as const

export const BADGE_GRADIENTS = {
  purple:
    "linear-gradient(137.8deg, rgb(124,108,245) 10%, rgb(91,74,239) 110%)",

  blue: "linear-gradient(137.8deg, rgb(110,168,255) 10%, rgb(41,82,227) 110%)",

  orange:
    "linear-gradient(137.8deg, rgb(255,217,138) 10%, rgb(245,165,36) 110%)",

  pink: "linear-gradient(137.8deg, rgb(255,159,178) 10%, rgb(245,86,122) 110%)",
} as const

export const ARROW_COLORS = {
  purple: "#6352F1",

  blue: "#2A53E3",

  orange: "#F5A524",

  pink: "#F76887",
} as const

export const BADGE_SHADOWS = {
  purple: "0px 6px 14px -4px rgba(91,74,239,0.35)",

  blue: "0px 6px 14px -4px rgba(41,82,227,0.35)",

  orange: "0px 6px 14px -4px rgba(245,165,36,0.35)",

  pink: "0px 6px 14px -4px rgba(245,86,122,0.35)",
} as const

export const GRADIENTS = BADGE_GRADIENTS

export const liveCards: {
  tone: Tone

  live?: boolean

  title: string

  lines: string[]

  time: string
}[] = [
  {
    tone: "purple",

    live: true,

    title: "LIVE NOW",

    lines: ["ARRAYS & SRINGS", "CSE - A", "IV YEAR"],

    time: "2:30 - 4:00 PM IST",
  },

  {
    tone: "blue",

    title: "Weekly Contest 360",

    lines: ["Sunday,  Aug 27", "2:30 - 4:00 AM UTC"],

    time: "2:30 - 4:00 PM IST",
  },

  {
    tone: "orange",

    title: "Weekly Contest 360",

    lines: ["Sunday,  Aug 27", "2:30 - 4:00 AM UTC"],

    time: "2:30 - 4:00 PM IST",
  },

  {
    tone: "pink",

    title: "Weekly Contest 360",

    lines: ["Sunday,  Aug 27", "2:30 - 4:00 AM UTC"],

    time: "2:30 - 4:00 PM IST",
  },

  {
    tone: "blue",

    title: "Weekly Contest 360",

    lines: ["Sunday,  Aug 27", "2:30 - 4:00 AM UTC"],

    time: "2:30 - 4:00 PM IST",
  },
]

export const upcoming: {
  tone: Tone

  day: number

  title: string

  cls: string

  time: string

  meta: string
}[] = [
  {
    tone: "purple",

    day: 25,

    title: "Top Interview 150",

    cls: "CSE - D",

    time: "07:00 PM",

    meta: "90 min · 25 Questions",
  },

  {
    tone: "blue",

    day: 26,

    title: "LeetCode 75",

    cls: "CSE - D",

    time: "11:00 AM",

    meta: "45 min · 15 Questions",
  },

  {
    tone: "orange",

    day: 27,

    title: "SQL 50",

    cls: "CSE - B",

    time: "10:00 AM",

    meta: "60 min · 20 Questions",
  },

  {
    tone: "pink",

    day: 28,

    title: "30 Days of JavaScript",

    cls: "CSE - A",

    time: "06:00 PM",

    meta: "60 min · 30 Questions",
  },

  {
    tone: "purple",

    day: 29,

    title: "Amazon Spring High",

    cls: "Public",

    time: "05:00 PM",

    meta: "75 min · 25 Questions",
  },

  {
    tone: "orange",

    day: 30,

    title: "Algorithms & Complexity",

    cls: "CSE - B",

    time: "09:00 AM",

    meta: "75 min · 20 Questions",
  },
]

export const completed: {
  title: string

  cls: string

  participation: string

  score: string

  completion: string

  action: "Results" | "Review"
}[] = [
  {
    title: "Python Programming Test",

    cls: "CSE-D",

    participation: "92 / 120",

    score: "76.8%",

    completion: "81%",

    action: "Results",
  },

  {
    title: "System Design Mock Test",

    cls: "CSE-A",

    participation: "110 / 150",

    score: "84.2%",

    completion: "91%",

    action: "Results",
  },

  {
    title: "DBMS Assessment",

    cls: "CSE-B",

    participation: "65 / 80",

    score: "72.5%",

    completion: "82%",

    action: "Review",
  },

  {
    title: "DSA Practice Test #23",

    cls: "CSE-D",

    participation: "76 / 100",

    score: "71.5%",

    completion: "76%",

    action: "Results",
  },

  {
    title: "Operating Systems Quiz",

    cls: "CSE-C",

    participation: "88 / 95",

    score: "80.1%",

    completion: "93%",

    action: "Results",
  },

  {
    title: "Data Structures Mid-Term",

    cls: "CSE-A",

    participation: "102 / 130",

    score: "68.4%",

    completion: "78%",

    action: "Review",
  },

  {
    title: "Computer Networks Test",

    cls: "CSE-B",

    participation: "58 / 75",

    score: "74.9%",

    completion: "77%",

    action: "Results",
  },
]

export const dayDots: Record<number, string[]> = {
  2: ["#7c6cf5"],

  3: ["#4680b6", "#ef4743"],

  4: ["#f5a524"],

  5: ["#ef4743"],

  6: ["#7c6cf5", "#f5567a"],

  8: ["#4680b6"],

  9: ["#ef4743"],

  10: ["#7c6cf5"],

  11: ["#f5a524"],
}

export const TODAY = 13

export const LEADING_BLANKS = 6

export const classrooms = [
  { name: "CSE-A", year: "IV Year", students: 120 },

  { name: "CSE-A", year: "IV Year", students: 120 },

  { name: "CSE-A", year: "IV Year", students: 120 },

  { name: "CSE-A", year: "IV Year", students: 120 },
]

export const students: {
  name: string

  email: string

  solved: number

  score: string

  cls: string
}[] = [
  {
    name: "Aarav Sharma",

    email: "aarav.s@college.edu",

    solved: 21,

    score: "78.2%",

    cls: "CSE-A",
  },

  {
    name: "Ananya Gupta",

    email: "ananya.g@college.edu",

    solved: 28,

    score: "84.5%",

    cls: "CSE-B",
  },

  {
    name: "Arjun Patel",

    email: "arjun.p@college.edu",

    solved: 19,

    score: "76.8%",

    cls: "CSE-A",
  },

  {
    name: "Diya Reddy",

    email: "diya.r@college.edu",

    solved: 25,

    score: "82.1%",

    cls: "CSE-C",
  },

  {
    name: "Ishaan Kumar",

    email: "ishaan.k@college.edu",

    solved: 18,

    score: "74.3%",

    cls: "CSE-A",
  },

  {
    name: "Kavya Singh",

    email: "kavya.s@college.edu",

    solved: 32,

    score: "86.7%",

    cls: "CSE-B",
  },

  {
    name: "Rohan Mehta",

    email: "rohan.m@college.edu",

    solved: 23,

    score: "79.4%",

    cls: "CSE-A",
  },

  {
    name: "Saanvi Joshi",

    email: "saanvi.j@college.edu",

    solved: 35,

    score: "89.2%",

    cls: "CSE-C",
  },
]

export const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  Easy: "#1cbaba",

  "Med.": "#ffb700",

  Hard: "#ef4743",
}

export const questions: {
  num: number

  title: string

  acceptance: string

  difficulty: Difficulty

  solved: boolean
}[] = [
  {
    num: 2,

    title: "Add Two Numbers",

    acceptance: "49.1%",

    difficulty: "Med.",

    solved: true,
  },

  {
    num: 1,

    title: "Two Sum",

    acceptance: "58.0%",

    difficulty: "Easy",

    solved: true,
  },

  {
    num: 12,

    title: "Integer to Roman",

    acceptance: "71.5%",

    difficulty: "Med.",

    solved: false,
  },

  {
    num: 3,

    title: "Longest Substring Without Repeating Characters",

    acceptance: "39.7%",

    difficulty: "Med.",

    solved: true,
  },

  {
    num: 4,

    title: "Median of Two Sorted Arrays",

    acceptance: "47.3%",

    difficulty: "Hard",

    solved: true,
  },

  {
    num: 5,

    title: "Longest Palindromic Substring",

    acceptance: "38.4%",

    difficulty: "Med.",

    solved: true,
  },

  {
    num: 6,

    title: "Zigzag Conversion",

    acceptance: "54.9%",

    difficulty: "Med.",

    solved: true,
  },

  {
    num: 7,

    title: "Reverse Integer",

    acceptance: "32.3%",

    difficulty: "Med.",

    solved: true,
  },

  {
    num: 13,

    title: "Roman to Integer",

    acceptance: "67.0%",

    difficulty: "Easy",

    solved: false,
  },

  {
    num: 9,

    title: "Palindrome Number",

    acceptance: "60.9%",

    difficulty: "Easy",

    solved: true,
  },

  {
    num: 10,

    title: "Regular Expression Matching",

    acceptance: "31.6%",

    difficulty: "Hard",

    solved: false,
  },

  {
    num: 11,

    title: "Container With Most Water",

    acceptance: "60.6%",

    difficulty: "Med.",

    solved: false,
  },
]

export const difficultyFilters = ["Easy", "Medium", "Hard"] as const

export const tagChips = ["Array", "Math", "Two Pointers"]

export const previewTags = ["Array", "Hash Table", "Two Pointers"]

export const editorTools = [
  { icon: Bold, label: "Bold" },

  { icon: Italic, label: "Italic" },

  { icon: Underline, label: "Underline" },

  { icon: Code2, label: "Code" },

  { icon: Heading1, label: "H1" },

  { icon: Heading2, label: "H2" },

  { icon: Quote, label: "Quote" },

  { icon: List, label: "Bullet list" },

  { icon: Link2, label: "Link" },

  { icon: ListOrdered, label: "Numbered list" },

  { icon: Code2, label: "Code block" },

  { icon: Undo2, label: "Undo" },

  { icon: Redo2, label: "Redo" },
]

export const problemStatement = `You are given an array of integers nums and an integer target.

Return the indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.`

export const problemSections: {
  heading: string

  body?: string

  bullets?: string[]
}[] = [
  {
    heading: "Input Format",

    bullets: [
      "The first line contains an integer n — the number of elements in the array.",

      "The second line contains n space-separated integers nums[i].",

      "The third line contains an integer target.",
    ],
  },

  {
    heading: "Output Format",

    body: "Return two space-separated integers representing the indices of the two numbers.",
  },

  {
    heading: "Constraints",

    bullets: [
      "2 ≤ n ≤ 10⁵",

      "−10⁹ ≤ nums[i] ≤ 10⁹",

      "−10⁹ ≤ target ≤ 10⁹",

      "Only one valid answer exists.",
    ],
  },
]

export const executionLanguages: {
  name: string

  actions: ("View" | "Edit" | "Add solution")[]
}[] = [
  { name: "C++", actions: ["View", "Edit"] },

  { name: "Java", actions: ["Add solution"] },

  { name: "Python", actions: ["View", "Edit"] },

  { name: "JavaScript", actions: ["Add solution"] },
]

export const metadata: { label: string value: string }[] = [
  { label: "Created by", value: "admin@ipsumcode.com" },

  { label: "Last updated", value: "Aug 12, 2026 · 3:42 PM" },

  { label: "Question ID", value: "1" },
]
