<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Xx_9FFDD94SIDynnm5TAL7BdoNQvIOvn

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env.local` and set the `GEMINI_API_KEY` to your Gemini API key
3. Run the app:
   ```bash
   npm run dev
   ```

> **Note:** If you see TypeScript errors in your IDE after cloning, run `npm install` to install the required dependencies and type definitions.

## Deploy on Vercel

**Prerequisites:** Vercel Account

1. Install Vercel CLI (optional):
   `npm i -g vercel`
2. Build the project:
   `npm run build`
3. Deploy to Vercel:
   - Using Vercel CLI: `vercel`
   - Or connect your GitHub repository to Vercel dashboard for automatic deployments

### Environment Variables on Vercel

Add the following environment variables in your Vercel project settings:
- `GEMINI_API_KEY`: Your Gemini API key

The project is configured with `vercel.json` for optimal deployment settings including:
- Static asset caching
- SPA routing support
- Proper build configuration
