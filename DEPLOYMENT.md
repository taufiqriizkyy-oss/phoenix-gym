# Quick Deployment Guide

## 🚀 Fast Track to Deployment

### Step 1: Add Your Images
Place all 17 images in the `public/images/` folder with these exact names:
- hero-phoenix.png
- coach-moment-1.png
- coach-moment-2.png
- team-coaches.png
- gym-atmosphere-1.png
- kids-action-1.png
- kids-action-2.png
- kids-action-3.png
- teamwork.png
- parent-watching.png
- achievement.png
- stretching.png
- focus-training.png
- chalk-moment.png
- happy-kids.png
- trust-moment.png
- rifda-olympic.png

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Test Locally
```bash
npm run dev
```
Visit http://localhost:3000

### Step 4: Deploy to Vercel (Easiest)

**Option A: Via GitHub**
1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com)
4. Click "Import Project"
5. Select your repository
6. Click "Deploy"
7. Done! Your site is live

**Option B: Via Vercel CLI**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Done!

### Step 5: Add Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Click "Domains"
3. Add your custom domain
4. Update your domain's DNS settings as instructed

## 📱 Update WhatsApp Number
Find and replace `6285943776945` with your WhatsApp number in:
- `components/ApplicationForm.js`

## 🎨 Customize Colors
Edit `tailwind.config.js` to change the pink color scheme.

## ✅ Pre-Deployment Checklist
- [ ] All images added to `public/images/`
- [ ] WhatsApp number updated
- [ ] Contact information updated in Footer
- [ ] Tested locally with `npm run dev`
- [ ] No console errors
- [ ] Mobile responsive checked
- [ ] Forms working correctly

## 🆘 Common Issues

**Issue**: Images not showing
**Solution**: Make sure images are in `public/images/` with exact filenames

**Issue**: Styles not loading
**Solution**: Run `npm install` again and restart dev server

**Issue**: Build fails on Vercel
**Solution**: Check that all imports are correct and no syntax errors

## 📞 Support
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Tailwind Docs: https://tailwindcss.com/docs
