# 🌍 Traveloop — Smart Collaborative Travel Planner

Traveloop is an offline-first intelligent travel planning platform designed for seamless itinerary creation, budget optimization, and personalized trip management.

Built during a high-intensity virtual hackathon, Traveloop focuses on solving real-world travel planning problems through a scalable relational backend architecture and dynamic budget intelligence engine.

---

# 🚀 Problem Statement

Modern travel planning applications are often:

* overly dependent on internet connectivity
* fragmented across multiple apps
* poor at real-time expense tracking
* lacking collaborative itinerary management
* inefficient for budget-conscious travelers

Traveloop addresses these issues by combining:

* intelligent itinerary planning
* dynamic expense aggregation
* offline-capable local database architecture
* personalized travel recommendations
* structured travel datasets for Indian destinations

---

# ✨ Core Features

## 🔐 Authentication System

* User registration
* Secure login
* JWT-based authentication
* Password hashing using bcrypt

---

## 🧳 Trip Management

* Create personalized trips
* Define travel dates
* Set trip budgets
* Organize multiple itineraries

---

## 🗺️ Dynamic Itinerary Builder

* Add day-wise travel plans
* Attach activities to itinerary days
* Manage schedules and planning flow
* Relational activity mapping

---

## 💰 Real-Time Budget Delta Engine (Killer MVP Feature)

Traveloop continuously calculates:

* total expenses
* remaining budget
* budget overruns
* trip cost aggregation

The backend dynamically computes expense rollups using indexed relational queries for optimized performance.

### Budget Formula

Remaining Budget:

$$
\text{Remaining Budget} =
\text{Total Budget} -
\text{Total Expenses}
$$

Budget Delta Complexity:

\mathcal{O}(\log n)

This ensures scalable query performance even with growing itinerary and expense data.

---

## 🏙️ Travel Intelligence Dataset

Traveloop uses locally stored structured datasets for:

* Indian cities
* activities
* stays
* transport routes
* food costs

The application avoids dependency on external APIs by maintaining a local travel intelligence engine.

---

## 🔎 Smart Search System

* Search cities
* Filter activities
* Explore destination categories
* Budget-aware activity selection

---

## 📊 Dashboard Overview

Users can monitor:

* upcoming trips
* ongoing trips
* total expenses
* remaining budgets
* itinerary summaries

---

# 🧠 System Architecture

Traveloop follows a modular backend architecture:

```txt
Routes
   ↓
Controllers
   ↓
Services
   ↓
Prisma ORM
   ↓
SQLite Database
```

This separation improves:

* maintainability
* scalability
* debugging
* modularity
* clean code practices

---

# 🛠️ Tech Stack

## Frontend

* React
* TypeScript
* Responsive UI Architecture

## Backend

* Node.js
* Express.js
* TypeScript
* Prisma ORM
* SQLite

## Authentication

* JWT
* bcryptjs

## Validation

* Zod

## Database

* SQLite
* Relational schema
* Indexed query optimization

---

# 🗃️ Database Design

## Core Models

* User
* Trip
* City
* Activity
* ItineraryDay
* ItineraryItem
* Expense
* ChecklistItem
* Note
* Invoice
* CommunityPost
* Stay
* Transport
* FoodCost

---

# ⚡ Performance Optimizations

Traveloop implements:

* indexed relational queries
* optimized foreign key relations
* offline-first local database operations
* modular service architecture

Prisma indexes:

```prisma
@@index([userId])
@@index([tripId])
@@index([cityId])
@@index([activityId])
```

These improve lookup efficiency and reduce query latency.

---

# 📂 Project Structure

```txt
traveloop/
│
├── frontend/
│
└── backend/
    │
    ├── prisma/
    │   ├── migrations/
    │   ├── seed/
    │   ├── schema.prisma
    │   ├── seed.ts
    │   └── dev.db
    │
    ├── src/
    │   ├── config/
    │   ├── controllers/
    │   ├── routes/
    │   ├── services/
    │   ├── middleware/
    │   ├── validators/
    │   ├── utils/
    │   ├── app.ts
    │   └── server.ts
    │
    ├── package.json
    ├── tsconfig.json
    └── .env
```

---

# 🌐 API Endpoints

## Authentication

* POST `/api/auth/register`
* POST `/api/auth/login`

## Trips

* POST `/api/trips`
* GET `/api/trips/user/:userId`

## Cities

* GET `/api/cities`

## Activities

* GET `/api/activities/:cityId`

## Expenses

* POST `/api/expenses`

## Itinerary

* POST `/api/itinerary/day`
* POST `/api/itinerary/item`

## Dashboard

* GET `/api/dashboard/:userId`

---

# 📦 Local Dataset Seeding

Traveloop uses CSV-based local data ingestion:

* cities.csv
* activities.csv
* stays.csv
* transport.csv
* food_costs.csv

Data is seeded into SQLite using Prisma seed pipelines.

---

# 🔒 Security Features

* JWT authentication
* Password hashing
* Request validation
* Structured API layers
* Controlled database relations

---

# 📈 Scalability Considerations

Although built for a hackathon MVP, Traveloop is architected for scalability through:

* modular backend services
* relational database normalization
* indexed queries
* reusable API structure
* local-first architecture

---

# 🇮🇳 Indian Travel Focus

The platform currently focuses on:

* Indian tourism datasets
* Indian travel budgeting
* Indian cities and transport systems
* realistic INR-based cost estimations

---

# 🏁 Future Improvements

* AI itinerary recommendations
* collaborative trip editing
* invoice PDF export
* advanced analytics dashboard
* real-time sync
* map integration
* offline caching engine

---

# ⭐ Key Highlights

✅ Offline-first architecture
✅ Dynamic budget intelligence
✅ Indexed relational database
✅ Modular backend structure
✅ Local travel intelligence datasets
✅ Real-time expense aggregation
✅ Scalable Prisma schema
✅ Fast hackathon MVP implementation
