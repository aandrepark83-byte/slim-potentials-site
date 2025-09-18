# Marketing Website

A modern, responsive marketing website built with Next.js and Tailwind CSS.

## Features

- 🔸 Perfect for startups and indie hackers looking to showcase their SaaS
- 🔸 Fully customizable with local data structures
- 🔸 Comes with Dark/Light Mode, responsive design, and modern components
- 🔸 Built with Next.js, TypeScript, and Tailwind CSS

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Radix UI Components

## One Click Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/marketing-website)

## Local Development

**Install dependencies**
\`\`\`bash
npm install
# or
pnpm install
# or
yarn install
\`\`\`

**Start the dev server**
\`\`\`bash
npm run dev
# or
pnpm dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

The website uses local data structures defined in the components. You can customize:

- Site content in `app/page.tsx` and `app/layout.tsx`
- Component data in individual section files under `app/_sections/`
- Styling with Tailwind CSS classes
- Add your own images to the `public/` directory

## Project Structure

\`\`\`
├── app/
│   ├── _sections/          # Reusable section components
│   ├── layout.tsx          # Root layout with navigation
│   └── page.tsx           # Homepage
├── components/            # Shared components
├── common/               # Common UI components
└── public/              # Static assets
