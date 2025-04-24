#!/bin/bash

# Navigate to the project directory
cd pokerovy-slovnik

# Install dependencies
npm install

# Build the project
npm run build

echo "Build completed successfully!"
echo "The built files are in the pokerovy-slovnik/dist directory."
echo "You can deploy these files to any static hosting service."
