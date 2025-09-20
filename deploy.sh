#!/bin/bash

# Slim Potentials Site Deployment Script
# This script prepares and deploys the Slim Potentials marketing website

set -e

echo "🚀 Starting Slim Potentials Site Deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run linting (if available)
if npm run lint --silent 2>/dev/null; then
    echo "🔍 Running linting..."
    npm run lint
else
    echo "⚠️  No linting script found, skipping..."
fi

# Build the project
echo "🏗️  Building production version..."
npm run build

echo "✅ Build completed successfully!"

# Check if Vercel CLI is available
if command -v vercel >/dev/null 2>&1; then
    echo "🌐 Vercel CLI detected. You can now deploy with: vercel --prod"
else
    echo "💡 To deploy to Vercel:"
    echo "   1. Install Vercel CLI: npm i -g vercel"
    echo "   2. Login to Vercel: vercel login"
    echo "   3. Deploy: vercel --prod"
fi

echo ""
echo "🎉 Deployment preparation complete!"
echo ""
echo "📋 Deployment options:"
echo "   • Vercel (recommended): Visit https://vercel.com/new and connect your repository"
echo "   • Netlify: Visit https://netlify.com and drag/drop the .next folder"
echo "   • Manual: Use 'npm start' to run the production server"
echo ""
echo "🔗 Your site will be available at the deployed URL"