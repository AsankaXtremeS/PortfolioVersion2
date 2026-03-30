# Portfolio 2.0

A modern personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Set up environment variables:
   - Copy `env.example` to `.env.local`
   - Fill in your actual environment variables in `.env.local`
   - **Never commit `.env.local` to version control** (it's already in `.gitignore`)

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Environment Variables

### Local Development

Create a `.env.local` file in the root directory with your environment variables:

```env
# Public variables (exposed to browser)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Private variables (server-side only)
API_KEY=your_secret_key_here
```

### Vercel Deployment

1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add your environment variables there
4. Variables will be automatically available in your Next.js app

**Important Notes:**
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- Only use `NEXT_PUBLIC_` for values that are safe to expose publicly
- For sensitive keys (API secrets, tokens), use variables without the prefix

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── public/             # Static assets
├── .env.local          # Local environment variables (gitignored)
├── .env.local.example  # Environment variables template
├── next.config.js      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
└── tailwind.config.ts  # Tailwind CSS configuration
```

## 🚢 Deployment on Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables in Vercel project settings
4. Deploy!

Vercel will automatically:
- Detect Next.js
- Install dependencies
- Build and deploy your application

## 🔒 Security Best Practices

- ✅ Never commit `.env.local` to version control
- ✅ Use `NEXT_PUBLIC_` prefix only for public variables
- ✅ Store sensitive keys in Vercel environment variables
- ✅ Use server-side API routes for sensitive operations
- ✅ Validate and sanitize all user inputs

## 📝 License

This project is private and personal.

