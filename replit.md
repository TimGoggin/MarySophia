# Mary Sophia Website - Spiritual Guidance Platform

## Overview

This is a full-stack web application for Mary Sophia, a spiritual teacher offering divine feminine guidance and teachings. The platform features a modern React frontend with Express.js backend, designed to provide information about spiritual services, readings, and sacred teachings.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: React Router v6 for client-side navigation
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **State Management**: React Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session store
- **API Pattern**: RESTful API with `/api` prefix

### Key Design Decisions

1. **Monorepo Structure**: Shared types and schemas between client and server via `/shared` directory
2. **Type Safety**: Full TypeScript implementation across the stack
3. **Database Choice**: PostgreSQL chosen for reliability and ACID compliance
4. **ORM Selection**: Drizzle ORM for type-safe database operations
5. **Styling Approach**: Tailwind CSS for consistent, responsive design
6. **Component Library**: Radix UI for accessible, unstyled components

## Key Components

### Frontend Components
- **Navigation**: Responsive navbar with mobile menu
- **Hero Section**: Full-screen landing with background imagery
- **Service Cards**: Grid layout showcasing spiritual offerings
- **Contact Forms**: Netlify Forms integration for contact and newsletter
- **SEO Optimization**: React Helmet for meta tags and structured data

### Backend Components
- **Route Registration**: Centralized route management in `/server/routes.ts`
- **Database Storage**: Abstract storage interface with in-memory fallback
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **Error Handling**: Centralized error middleware

### Shared Components
- **Database Schema**: Drizzle schema definitions in `/shared/schema.ts`
- **Type Definitions**: Shared TypeScript interfaces

## Data Flow

1. **Client Requests**: React components make API calls via React Query
2. **Server Processing**: Express routes handle requests and interact with storage
3. **Database Operations**: Drizzle ORM performs type-safe database queries
4. **Response Handling**: JSON responses with proper error handling
5. **State Updates**: React Query manages client-side cache updates

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **Forms**: Netlify Forms for contact submissions
- **Email**: Mailchimp for newsletter subscriptions
- **Fonts**: Google Fonts (Dancing Script, Open Sans, Playfair Display)
- **Images**: Netlify image optimization service

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **TypeScript**: Full type checking and compilation
- **Database Tools**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with HMR
- **Database**: Environment variable `DATABASE_URL` for connection
- **Session Storage**: In-memory fallback for development

### Production Build
- **Frontend**: Vite builds static assets to `/dist`
- **Backend**: esbuild bundles server code to `/dist/index.js`
- **Database**: PostgreSQL via Neon Database
- **Hosting**: Configured for Netlify deployment

### Build Process
1. `npm run build` - Builds both frontend and backend
2. Frontend assets generated in `/dist`
3. Server bundle created as `/dist/index.js`
4. Database migrations applied via `npm run db:push`

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```