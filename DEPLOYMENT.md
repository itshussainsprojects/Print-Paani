# Deployment Guide

## Overview
This guide explains how to deploy this full-stack application using free hosting services.

## Frontend Deployment (Vercel)
1. Create a Vercel account at https://vercel.com
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Login to Vercel:
   ```bash
   vercel login
   ```
4. Deploy the application:
   ```bash
   vercel
   ```
5. Follow the prompts and select your project settings
6. Set up environment variables in Vercel dashboard:
   - NEXT_PUBLIC_FIREBASE_API_KEY
   - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
   - NEXT_PUBLIC_FIREBASE_PROJECT_ID
   - NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
   - NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
   - NEXT_PUBLIC_FIREBASE_APP_ID
   - MONGODB_URI
   - GEMINI_API_KEY
   - SUPABASE_URL
   - SUPABASE_ANON_KEY
   - NEXT_PUBLIC_SUPABASE_URL
   - SUPABASE_SERVICE_ROLE_KEY
   - NEXT_PUBLIC_SUPABASE_ANON_KEY

## Backend Deployment (Railway)
1. Create a Railway account at https://railway.app
2. Install Railway CLI:
   ```bash
   npm i -g @railway/cli
   ```
3. Login to Railway:
   ```bash
   railway login
   ```
4. Navigate to backend directory:
   ```bash
   cd backend
   ```
5. Initialize and deploy:
   ```bash
   railway init
   railway up
   ```
6. Set up environment variables in Railway dashboard

## Database
- MongoDB Atlas: Already configured and running
- Supabase: Already configured and running

## Additional Services
- Firebase: Already configured for authentication and storage
- Vercel: Handles serverless functions automatically

## Post-Deployment
1. Update frontend environment variables with new backend URL
2. Test all functionality in production environment
3. Monitor application performance and logs

## Domain and SSL Configuration
1. Custom Domain Setup (Vercel):
   ```bash
   vercel domains add your-domain.com
   ```
2. Configure DNS settings at your domain registrar:
   - Add A record pointing to Vercel's IP
   - Add CNAME record for www subdomain
3. SSL Certificate:
   - Vercel automatically provisions SSL certificates
   - Verify SSL status in Vercel dashboard

## Monitoring and Analytics
1. Set up monitoring tools:
   - Vercel Analytics for frontend performance
   - Railway logs for backend monitoring
   - MongoDB Atlas metrics for database performance
2. Configure alerts for:
   - Resource usage approaching free tier limits
   - Error rate spikes
   - Performance degradation
3. Regular maintenance:
   - Weekly review of logs and metrics
   - Monthly resource usage assessment
   - Quarterly security updates

## Free Tier Limitations
- Vercel: 
  - Serverless Function Execution: 100GB-Hrs/month
  - Bandwidth: 100GB/month
- Railway:
  - $5 worth of usage/month
  - Includes compute, storage, and bandwidth
- MongoDB Atlas:
  - 512MB storage
  - Shared RAM
- Supabase:
  - Database: 500MB
  - Auth: 50,000 MAU
  - Storage: 1GB

Note: Monitor usage to stay within free tier limits.