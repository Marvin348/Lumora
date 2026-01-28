# ❇️ Lumora

Lumora is a modern polling platform where users can create polls, vote, bookmark interesting polls, and track their personal activity through real-time user statistics.


## 🚀 Live Demo
[Live Demo](https://home-5019494142.app-ionos.space/)


## 📌 Features
- 🗳️ Create different poll types
- 🔍 Search polls by title or author
- 🧩 Filter polls by type
- ⭐ Bookmark polls
- 📊 Live vote result calculations
- 🧠 Personalized User Stats
- 💾 LocalStorage persistence (simulated backend)
- 📱 Fully responsive (mobile & desktop)
- 🧭 Multi-page routing with layout system

## 🛠 Tech Stack
- **TypeScript**
- **React**
- **Zustand** – global state management
- **TanStack Query** – data fetching & caching
- **Tailwind CSS** – utility-first styling
- **shadcn/ui** – accessible UI components
- **React Router**
- **LocalStorage** – persistence layer
- **Lucide Icons**


## 📚 What I Learned
This project focused heavily on **real-world frontend thinking**, not just UI.

**🧠 Derived & Enriched Data**
- building **derived UI arrays** (pollsWithMeta, votesWithUser)
- enriching raw data with user info and vote data
This improved my understanding of data flow and how frontend apps often work with computed data rather than raw server responses.

**🧩 State Architecture & Separation**

Instead of creating separate stores for “my polls” or “my votes”, I:
- stored **all polls and votes globally**
- derived user-specific views inside components

**⚡ Temporary vs Submitted State**

I improved my understanding of handling:
- temporary UI state (form inputs, selections)
- separating it from committed state
- only persisting data on explicit actions like submitÏ

**🔄 Sorting & Data Transformation**

I gained deeper experience with:

- map, filter, reduce, find, some
- sorting by dynamic properties (poll date vs vote date)
- counting grouped values (poll type statistics)
- building result calculation utilities

**🧠 Realistic Data Handling**

I intentionally simulated backend behavior by:

- fetching users separately
- handling loading and error states
- combining server-like data with client state

This helped me better understand how frontend apps integrate multiple data sources.

**🧱 Component Architecture**
- Layout-based routing
- Shared layout with conditional UI (sticky user stats)
- Context for globally needed server data
- Reusable UI components with variant behavior


## Screenshots

### Desktop
![Dashboard](./screenshots/lumora-desktop.png)
![Create](./screenshots/lumora-desktop-create.png)

### Mobile
![Mobile Screenshot](./screenshots/lumora-mobile.png)


## 📝 Note
The project simulates real-world frontend architecture with derived UI data, global state, server-style data fetching, and user-focused features — all built with scalable patterns.