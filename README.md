# UniDream — MERN landing site

A responsive UniDream study-abroad consultancy website inspired by the current UniRely visual language: clean white/cream surfaces, deep teal, editorial serif accents, student-focused copy, roadmap/service sections, testimonials, and a lead-capture CTA. UniRely describes itself as a one-stop study-abroad platform with end-to-end support, mentors, university guidance, and admissions support.

## Pages
- `/` — Landing homepage
- `/contact` — Contact + consultation lead form
- `/testimonials` — Student testimonials

## Run locally
```bash
npm install
npm run install:all
npm run dev
```
Frontend: http://localhost:5173
API: http://localhost:5000

## MongoDB
Copy `server/.env.example` to `server/.env`, add your MongoDB Atlas connection string, then restart the server. Contact form submissions will be stored in the `leads` collection.

## Production
- Deploy `client` to Vercel/Netlify.
- Deploy `server` to Render/Railway/Fly.io.
- Set `MONGODB_URI` and `PORT` on the API host.
- Update the `fetch('http://localhost:5000/api/leads')` URL in `client/src/App.jsx` to your production API URL, or use a Vite environment variable.

## Brand note
This is a new UniDream implementation that takes visual inspiration from UniRely's publicly visible site rather than copying its proprietary code/assets. Replace placeholder testimonials and contact details with verified UniDream information before publishing.
# unidream
