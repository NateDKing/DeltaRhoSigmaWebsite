# Delta Rho Sigma Website

This repository contains the source code for the Delta Rho Sigma website, hosted using Firebase Hosting.

## Project Information
- **Firebase Project Console:** [deltarhosigmawebsite](https://console.firebase.google.com/project/deltarhosigmawebsite/overview)
- **Hosting URL:** [https://deltarhosigmawebsite.web.app](https://deltarhosigmawebsite.web.app)

## Prerequisites

1. **Install Firebase CLI**  
   Ensure that the Firebase CLI is installed on your local machine.
   ```bash
   npm install -g firebase-tools
   ```

2. **Authenticate Firebase**
   Log in to your Firebase account using the CLI.
   ```bash
   firebase login
   ```

## Pull the Project

1. **Clone the Repository**  
   If you don't have the project locally, clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install Dependencies**
   If the project has dependencies (like Node.js packages), install them:
   ```bash
   npm install
   ```

## Deploy Changes

1. **Run Local Development Server**  
   Before deploying, test your changes locally by running:
   ```bash
   firebase serve
   ```
   This will serve the website locally on http://localhost:5000. Review your changes before making them live.

2. **Deploy to Firebase Hosting**  
   Once you're ready to make your edits live, deploy the changes using:
   ```bash
   firebase deploy
   ```

3. **Verify Deployment**  
   After deployment, visit https://deltarhosigmawebsite.web.app to verify the live website has been updated.
