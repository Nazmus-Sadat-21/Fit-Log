<div align="center">

  # 🏋️‍♂️ FitLog — Workout & Lift Tracker

  **A modern, performance-driven web app to curate daily lift targets, manage workout libraries, and track fitness stats.**

  [![Next.js](https://img.shields.io/badge/Next.js-14%2B-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![React Toastify](https://img.shields.io/badge/React_Toastify-FF6B6B?style=for-the-badge&logo=react&logoColor=white)](https://fkhadra.github.io/react-toastify/)

</div>

---

## 📌 Overview

**FitLog** is a dark-themed, ultra-responsive fitness planning platform designed for lifters and athletes. Built with Next.js and TypeScript, it empowers users to curate a focused list of daily exercises (capped for peak execution), store favorite routines, and evaluate session metrics like workout duration, estimated calorie burn, and exercise difficulty ratings.

---

## 🚀 Key Features

* 📅 **Dual-Tab Plan Management**: Seamlessly toggle between **Today's Plan** and **Saved Workouts** with live, dynamic item counters reflecting your current workload.
* ⚡ **Smart Multi-Metric Sorting**: Instantly sort exercise cards by **Duration**, **Calories Burned**, **Rating**, or **Alphabetical Name** using built-in unit-parsing logic (handles string values like `"8 min"` or `"70 kcal"` automatically).
* 🎯 **Context-Aware Card Actions**: Adaptive `Listcard` UI components that dynamically render primary controls—hiding redundant actions like *"Mark as Done"* when viewing saved routines.
* 📊 **Interactive Stats Summary Dashboard**: Integrated `<Summary />` tracking widget that calculates active metrics, daily limits, and fitness goals at a glance.
* 🔔 **Real-Time Toast Feedback**: Integrated toast notifications (`react-toastify`) providing immediate feedback whenever items are removed or updated across state context.

---

## 🛠️ Technologies Used

| Category | Technology | Usage |
| :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) | App Router, Server/Client components, dynamic routing (`/FitLogs/[id]`) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict type definitions (`Exercise`, `ExerciseCardProps`) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Custom dark aesthetic (`#07080a`, `#12141c`) with lime neon highlights (`#a3e635`) |
| **State Management** | React Context API | Global state provider (`FitLogContext`) managing `today` and `save` lists |
| **UI Components** | `next/image` & `next/link` | Optimized media loading and client-side page navigation |
| **Notifications** | [React Toastify](https://fkhadra.github.io/react-toastify/) | Non-intrusive UI alerts for user actions |

---

## 📂 Project Structure

```text
├── app/
│   ├── layout.tsx            # Root layout with Toastify & Context Providers
│   ├── page.tsx              # Main workout discovery landing page
│   └── my-plan/
│       └── page.tsx          # My Plan dashboard with tabs & sorting
├── components/
│   ├── MyPlan/
│   │   ├── Summary.tsx       # Daily statistics overview component
│   │   └── Listcard.tsx      # Reusable exercise list card with actions
├── context/
│   └── FitLogcontext.tsx     # Global context for active & saved lifts
├── types/
│   └── type.ts               # TypeScript interfaces (Exercise, etc.)
└── .env.local                # Environment configuration