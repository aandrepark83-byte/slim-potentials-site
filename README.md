# Slim Potentials - Premium Natural Supplements

A modern, responsive marketing website built with Next.js and Tailwind CSS for Slim Potentials' plant-based wellness supplements.

## Features

- 🔸 Perfect for startups and indie hackers looking to showcase their SaaS
- 🔸 Fully customizable with local data structures
- 🔸 Comes with Dark/Light Mode, responsive design, and modern components
- 🔸 Built with Next.js, TypeScript, and Tailwind CSS
- 🔸 Optimized for performance and SEO
- 🔸 Mobile-first responsive design

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Radix UI Components

## 🚀 Quick Deployment

### Option 1: One-Click Vercel Deployment (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/aandrepark83-byte/slim-potentials-site)

### Option 2: Manual Deployment

1. **Clone the repository**
   ```bash
   git clone https://github.com/aandrepark83-byte/slim-potentials-site.git
   cd slim-potentials-site
   ```

2. **Run the deployment script**
   ```bash
   ./deploy.sh
   ```

3. **Deploy to your preferred platform:**
   - **Vercel**: `vercel --prod` (after installing Vercel CLI)
   - **Netlify**: Upload the built files to Netlify
   - **Other**: Use any static hosting service

### Option 3: Manual Setup

**Install dependencies**
```bash
npm install
# or
pnpm install
# or
yarn install
```

**Start the dev server**
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

**Build for production**
```bash
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌐 Deployment Platforms

This site is optimized for deployment on:

- **Vercel** (Recommended) - Zero configuration deployment
- **Netlify** - Static site hosting
- **Cloudflare Pages** - Fast global deployment
- **Railway** - Full-stack deployment
- **AWS Amplify** - Amazon's hosting solution

## Customization

The website uses local data structures defined in the components. You can customize:

- Site content in `app/page.tsx` and `app/layout.tsx`
- Component data in individual section files under `app/_sections/`
- Styling with Tailwind CSS classes
- Add your own images to the `public/` directory

## Environment Variables (Optional)

For full blog and changelog functionality, you can set up BaseHub:

```bash
# .env.local
BASEHUB_TOKEN=your_basehub_token_here
```

If `BASEHUB_TOKEN` is not provided, the blog and changelog pages will show placeholder content.

## 📁 Project Structure

```
├── app/
│   ├── _sections/          # Reusable section components
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx           # Homepage
│   ├── blog/              # Blog pages (with BaseHub fallback)
│   └── changelog/         # Changelog pages (with BaseHub fallback)
├── components/            # Shared components
├── common/               # Common UI components
├── data/                 # Static data and configuration
├── public/              # Static assets
├── deploy.sh            # Deployment script
└── vercel.json         # Vercel deployment configuration
```

## 🔧 Technical Notes

- **Build Optimizations**: Configured for production with static generation
- **Font Handling**: Uses system fonts as fallback for reliable builds
- **BaseHub Integration**: Optional CMS integration with graceful fallbacks
- **Image Optimization**: Automatic Next.js image optimization
- **SEO Ready**: Pre-configured meta tags and sitemap generation

## 🚀 Deployment Status

✅ **Production Ready**: This site is fully configured for deployment
✅ **Build Tested**: Successfully builds without external dependencies
✅ **Platform Optimized**: Works on Vercel, Netlify, and other static hosts
✅ **Performance Optimized**: Lighthouse score 90+ out of the box

## 📞 Support

For deployment assistance or customization:
- Create an issue in this repository
- Check the deployment logs for any error messages
- Ensure all dependencies are installed with `npm ci`

---

Built with ❤️ for Slim Potentials wellness community

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
