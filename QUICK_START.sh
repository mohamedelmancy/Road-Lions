#!/bin/bash

# Road Lions Website - Quick Start Script
# This script sets up and runs your website

echo "🦁 Road Lions Website Setup"
echo "=============================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"
echo ""

# Fix npm permissions if needed
echo "Checking npm permissions..."
if [ ! -w "$HOME/.npm" ]; then
    echo "Fixing npm permissions..."
    sudo chown -R $(whoami) "$HOME/.npm"
fi

echo "✅ NPM permissions OK"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install --no-fund --no-audit

if [ $? -ne 0 ]; then
    echo "❌ Installation failed. Please check the error above."
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully!"
echo ""

# Check for logo
if [ ! -f "public/logo.jpeg" ]; then
    echo "⚠️  Logo not found!"
    echo "   Please add your logo as: public/logo.jpeg"
    echo ""
else
    echo "✅ Logo found!"
    echo ""
fi

# Start the development server
echo "🚀 Starting development server..."
echo "   Your website will open at: http://localhost:3000"
echo ""
echo "   Press Ctrl+C to stop the server"
echo ""

npm run dev

