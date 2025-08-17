# LeetCode Progress Tracker

A full-stack web application that tracks and visualizes LeetCode progress with charts, statistics, and analytics.

## Features

- **Username Search**: Search by any LeetCode username
- **Progress Tracking**: Overall completion percentage and difficulty breakdown
- **Contest Performance**: Rating, global rank, contests attended
- **Activity Charts**: Submission activity and tag analysis
- **Recent Problems**: Last 5 solved problems with links
- **Responsive Design**: Works on desktop, tablet, and mobile

## Tech Stack

- **Frontend**: React 18 + TypeScript, Tailwind CSS, Recharts
- **Backend**: Node.js + Express
- **Build Tool**: Vite

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development servers**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to http://localhost:5173

## Usage

1. Enter a LeetCode username in the search bar
2. View comprehensive analytics including:
   - Overall progress with completion percentage
   - Difficulty-wise breakdown (Easy/Medium/Hard)
   - Contest performance metrics
   - Activity charts and tag distribution
   - Recent solved problems with direct links

## API Endpoints

- `GET /api/user/:username` - Fetches user data from LeetCode GraphQL API

## Project Structure

```
src/
├── components/          # React components
├── App.tsx             # Main application
└── main.tsx            # Entry point
server/
└── server.js           # Express backend
```

## License

MIT License

