# FitAI

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```

## If you see `npm ERR! Missing script: "dev"`

This project **does** define a `dev` script in `package.json`.
That error usually means your terminal is not currently inside the project root.

From your terminal, run:

```bash
pwd
npm run
```

You should see `dev`, `build`, and `start` scripts. If not, `cd` into the folder that contains this repository's `package.json`, then run `npm run dev` again.

## Environment variables

Create a `.env.local` file with:

```bash
GROQ_API_KEY=your_groq_api_key
MONGO_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

Without `GROQ_API_KEY`, AI meal swap/chat endpoints will fail.
