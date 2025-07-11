#!/bin/bash
echo "Setting up Cypress tests..."
# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Install dependencies
npm install

# Run tests
npm test