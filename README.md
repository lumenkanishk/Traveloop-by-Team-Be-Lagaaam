# Traveloop – Personalized Travel Planning Made Easy

![Traveloop Banner](./assets/banner.png)

## Overview

Traveloop is a personalized travel planning platform designed to simplify the process of organizing multi-city trips. The application enables users to create customized itineraries, manage travel budgets, explore cities and activities, organize travel notes, and share travel plans with others.

The platform combines an intuitive user experience with powerful trip management features to help travelers efficiently plan, visualize, and enjoy their journeys.

---

# Table of Contents

- [Features](#features)
- [Problem Statement](#problem-statement)
- [Project Vision](#project-vision)
- [Project Objectives](#project-objectives)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Database Design](#database-design)
- [Application Modules](#application-modules)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [UI Screens](#ui-screens)
- [Core Functionalities](#core-functionalities)
- [Budget Calculation Logic](#budget-calculation-logic)
- [Future Enhancements](#future-enhancements)
- [Challenges Faced](#challenges-faced)
- [Contributors](#contributors)
- [License](#license)

---

# Features

## User Authentication
- Secure Login & Signup
- Password validation
- Forgot password support
- User session management

## Trip Planning
- Create personalized trips
- Add multiple cities and stops
- Assign travel dates
- Reorder itinerary stops
- Manage travel schedules

## Itinerary Builder
- Day-wise itinerary generation
- Add activities for each city
- Organize trip flow visually
- Calendar and list views

## City & Activity Discovery
- Search cities by country or region
- Discover tourist attractions
- Filter activities by type, duration, and budget

## Budget Management
- Automatic cost estimation
- Expense breakdowns:
  - Transport
  - Accommodation
  - Activities
  - Food
- Budget alerts and analytics

## Packing Checklist
- Add and manage checklist items
- Categorize essentials
- Mark items as packed
- Reuse packing lists

## Travel Notes & Journal
- Save important reminders
- Add daily travel notes
- Store hotel and contact details

## Public Sharing
- Share itineraries publicly
- Read-only trip view
- Copy trip functionality
- Social media sharing support

## Admin Dashboard (Optional)
- User analytics
- Popular destinations tracking
- Platform usage insights
- Trip statistics

---

# Problem Statement

Travel planning is often fragmented across multiple platforms, spreadsheets, maps, and note-taking applications. Travelers face challenges in:

- Managing multi-city itineraries
- Tracking travel expenses
- Organizing activities and schedules
- Collaborating with friends or family
- Visualizing trip timelines effectively

Traveloop solves these challenges by providing a centralized platform that combines itinerary planning, budgeting, discovery, and sharing into one seamless experience.

Reference Document: fileciteturn0file0L1-L170

---

# Project Vision

The vision of Traveloop is to create an intelligent and collaborative travel planning ecosystem that transforms how users design and experience trips.

The platform aims to:

- Simplify complex travel planning
- Empower travelers with smart budgeting tools
- Encourage exploration of destinations
- Provide interactive itinerary visualization
- Enable social and collaborative travel experiences

---

# Project Objectives

- Build a responsive and user-friendly travel planner
- Design a scalable relational database
- Support personalized multi-city itineraries
- Enable real-time budget estimation
- Create visually engaging travel timelines
- Provide collaborative sharing functionality

---

# Tech Stack

## Frontend
- React.js / Next.js
- Tailwind CSS
- Redux / Context API
- Axios
- React Router

## Backend
- Node.js
- Express.js

## Database
- MySQL / PostgreSQL

## Authentication
- JWT Authentication
- bcrypt password hashing

## Deployment
- Vercel / Netlify (Frontend)
- Render / Railway / AWS (Backend)

## Additional Tools
- Chart.js / Recharts
- Cloudinary (Image Uploads)
- Git & GitHub

---

# System Architecture

```text
Frontend (React)
        |
        v
REST API Layer (Express.js)
        |
        v
Business Logic & Services
        |
        v
Relational Database (MySQL/PostgreSQL)
```

---

# Database Design

## Main Entities

### Users
| Field | Type |
|------|------|
| id | UUID |
| name | String |
| email | String |
| password | String |
| profile_photo | String |

### Trips
| Field | Type |
|------|------|
| id | UUID |
| user_id | Foreign Key |
| title | String |
| description | Text |
| start_date | Date |
| end_date | Date |

### Cities
| Field | Type |
|------|------|
| id | UUID |
| city_name | String |
| country | String |
| cost_index | Number |

### Activities
| Field | Type |
|------|------|
| id | UUID |
| city_id | Foreign Key |
| activity_name | String |
| category | String |
| cost | Number |

### Budget
| Field | Type |
|------|------|
| id | UUID |
| trip_id | Foreign Key |
| transport_cost | Number |
| accommodation_cost | Number |
| food_cost | Number |
| activity_cost | Number |

---

# Application Modules

## 1. Authentication Module
Handles:
- User registration
- User login
- Password encryption
- Session validation

## 2. Trip Management Module
Handles:
- Creating trips
- Updating itineraries
- Managing trip schedules
- Trip deletion

## 3. Itinerary Builder Module
Handles:
- Adding travel stops
- Organizing city sequence
- Scheduling activities

## 4. Budget Management Module
Handles:
- Expense calculations
- Budget insights
- Daily cost analytics

## 5. Sharing Module
Handles:
- Public itinerary links
- Shared access
- Copy trip functionality

---

# Folder Structure

```bash
traveloop/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── assets/
│   │   └── utils/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   ├── services/
│   └── utils/
│
├── database/
├── docs/
├── README.md
└── package.json
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-username/traveloop.git
```

## Navigate to Project Directory

```bash
cd traveloop
```

## Install Frontend Dependencies

```bash
cd client
npm install
```

## Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# Environment Variables

Create a `.env` file inside the server directory.

```env
PORT=5000
DB_URI=your_database_url
JWT_SECRET=your_jwt_secret
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
```

---

# Running the Project

## Start Backend Server

```bash
cd server
npm run dev
```

## Start Frontend Server

```bash
cd client
npm start
```

---

# API Endpoints

## Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |
| POST | /api/auth/forgot-password | Reset password |

## Trips

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/trips | Get all trips |
| POST | /api/trips | Create new trip |
| PUT | /api/trips/:id | Update trip |
| DELETE | /api/trips/:id | Delete trip |

## Activities

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/activities | Get activities |
| POST | /api/activities | Add activity |

---

# UI Screens

## Login / Signup Screen
- Email & password inputs
- Authentication validation
- Secure access management

## Dashboard Screen
- Welcome section
- Recent trips overview
- Recommended destinations
- Quick navigation

## Create Trip Screen
- Trip title
- Description
- Travel dates
- Cover image upload

## My Trips Screen
- Trip cards
- Edit/Delete/View actions
- Destination summaries

## Itinerary Builder
- Add city stops
- Add activities
- Reorder destinations
- Interactive scheduling

## Budget Breakdown Screen
- Charts and analytics
- Cost categorization
- Average daily expenses

## Packing Checklist Screen
- Item management
- Category organization
- Completion tracking

## Notes & Journal Screen
- Travel reminders
- Daily notes
- Personal journal entries

---

# Core Functionalities

## Smart Budget Calculation
Traveloop calculates estimated trip costs using:

- Accommodation prices
- Transportation expenses
- Food cost indexes
- Activity pricing

## Dynamic Itinerary Generation
Users can:

- Add unlimited cities
- Create flexible schedules
- Rearrange travel order
- Customize activities

## Real-Time Data Management
The application dynamically updates:

- Budgets
- Trip timelines
- Activity schedules
- Shared itineraries

---

# Budget Calculation Logic

The total trip budget is estimated using:

genui{"math_block_widget_always_prefetch_v2":{"content":"\\text{Total Budget} = \\text{Transport} + \\text{Stay} + \\text{Food} + \\text{Activities}"}}

Additional calculations include:

- Average daily spending
- Cost per destination
- Budget overflow alerts
- Expense category analysis

---

# Future Enhancements

- AI-powered trip recommendations
- Real-time weather integration
- Hotel and flight booking APIs
- Offline itinerary access
- Collaborative group planning
- Currency conversion support
- AI travel assistant chatbot
- Multi-language support
- Mobile application release

---

# Challenges Faced

- Managing dynamic itinerary structures
- Designing relational travel data models
- Handling real-time budget updates
- Optimizing frontend responsiveness
- Maintaining scalable API architecture

---

# Contributors

| Name | Role |
|---|---|
| Your Name | Full Stack Developer |
| Team Member 2 | Frontend Developer |
| Team Member 3 | Backend Developer |
| Team Member 4 | Database Engineer |

---

# License

This project is licensed under the MIT License.

```text
MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files.
```

---

# Acknowledgements

- Open-source community
- Travel data providers
- Hackathon organizers
- UI/UX inspiration platforms

---

# Conclusion

Traveloop is built to simplify and modernize the travel planning experience through intelligent itinerary management, budgeting tools, and collaborative sharing features. The platform demonstrates the integration of frontend design, backend architecture, and relational databases into a complete real-world travel solution.

