# Phoenix Gymnastics Academy Website

A premium, modern gymnastics academy website built with Next.js 14, React, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Premium Design**: Elegant, cinematic UI with soft pink accents and luxury aesthetics
- **Smooth Animations**: Framer Motion powered transitions and scroll animations
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Multiple Pages**: Home, About, Programs, Coaches, Gallery, and Contact
- **WhatsApp Integration**: Direct form submissions to WhatsApp
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Focused**: Fast loading times and optimized images

## 📁 Project Structure

```
phoenix-gymnastics/
├── app/
│   ├── layout.js           # Root layout with Navigation and Footer
│   ├── page.js             # Home page
│   ├── about/
│   │   └── page.js         # About page
│   ├── programs/
│   │   └── page.js         # Programs page
│   ├── coaches/
│   │   └── page.js         # Coaches page
│   ├── gallery/
│   │   └── page.js         # Gallery page
│   └── contact/
│       └── page.js         # Contact page
├── components/
│   ├── Navigation.js       # Navigation component
│   ├── Footer.js           # Footer component
│   ├── Hero.js             # Hero section component
│   ├── RifdaFeature.js     # Rifda Olympic feature section
│   └── ApplicationForm.js  # Trial application form
├── public/
│   └── images/             # Image assets (add your images here)
├── styles/
│   └── globals.css         # Global styles and Tailwind imports
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**

2. **Navigate to the project directory**
   ```bash
   cd phoenix-gymnastics
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

4. **Add your images**
   
   Place all your images in the `public/images/` directory with the following names:
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

5. **Run the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:3000`

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
npm start
```

or

```bash
yarn build
yarn start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repository-url
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure project settings (use default Next.js settings)
   - Click "Deploy"

3. **Your site will be live!**
   - Vercel provides a URL like: `your-project.vercel.app`
   - You can add a custom domain in Vercel settings

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `.next` folder to Netlify
   - Or connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `.next`

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  'phoenix-pink': {
    50: '#FFF5F7',
    100: '#FFE8ED',
    200: '#FFD4E5',
    300: '#FFB8D2',
    400: '#FF8FB9',
    500: '#FF6B9D',
    600: '#E85A8A',
  },
}
```

### Content

- **Navigation Links**: Edit in `components/Navigation.js`
- **Footer Content**: Edit in `components/Footer.js`
- **Page Content**: Edit individual page files in `app/`
- **Contact Info**: Update WhatsApp number in `components/ApplicationForm.js` and other components

### Fonts

The website uses:
- **Display Font**: Cormorant Garamond (serif)
- **Body Font**: Outfit (sans-serif)

To change fonts, update the imports in `styles/globals.css` and the font configuration in `tailwind.config.js`.

## 📱 WhatsApp Integration

The application form redirects to WhatsApp with a pre-filled message. To change the WhatsApp number:

1. Open `components/ApplicationForm.js`
2. Find the WhatsApp URL:
   ```javascript
   const whatsappUrl = `https://wa.me/6285943776945?text=${encodeURIComponent(message)}`;
   ```
3. Replace `6285943776945` with your WhatsApp number (include country code, no + or spaces)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Icons**: Heroicons (via SVG)
- **Fonts**: Google Fonts

## 📄 License

This project is created for Phoenix Gymnastics Academy.

## 🤝 Support

For issues or questions:
- Check the Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Check the Tailwind CSS documentation: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Check the Framer Motion documentation: [framer.com/motion](https://www.framer.com/motion/)

## 📝 Notes

- All images should be optimized before adding to the project
- The site is fully responsive and works on all screen sizes
- All animations are optimized for performance
- SEO meta tags are included in the layout
- The navigation is sticky and adapts to scroll position
- All external links open in new tabs
