# Aurelia - Premium Furniture & Lifestyle Website

A modern, professional website for Aurelia furniture and lifestyle company, built with cutting-edge web technologies and featuring interactive visuals.

## ✨ Features

- **Modern Design**: Clean, elegant interface with premium aesthetics
- **Interactive Animations**: Smooth animations powered by Framer Motion
- **Responsive Layout**: Mobile-first design that works on all devices
- **Product Showcase**: Beautiful product galleries with hover effects
- **Performance Optimized**: Fast loading times and optimized images
- **TypeScript**: Full type safety throughout the application
- **Accessible**: Built with accessibility best practices

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Next.js Image optimization

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd aurelia-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
aurelia-website/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── ProductShowcase.tsx # Product gallery
│   ├── About.tsx         # About section
│   └── Footer.tsx        # Footer component
├── public/               # Static assets
└── ...config files
```

## 🎨 Design System

### Colors

- **Primary**: Warm gold tones (#b0935c to #c0a97d)
- **Accent**: Complementary earth tones
- **Background**: Clean whites and subtle gradients

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Animations

- Smooth hover effects
- Scroll-triggered animations
- Interactive micro-interactions

## 📱 Sections

1. **Header**: Navigation with logo, menu, and cart
2. **Hero**: Compelling headline with call-to-action
3. **Product Showcase**: Featured collections with filtering
4. **About**: Company story and features
5. **Footer**: Contact info, links, and newsletter signup

## 🔧 Customization

### Adding New Products

Edit the `products` array in `components/ProductShowcase.tsx`:

```typescript
const products = [
  {
    id: 1,
    name: "Your Product Name",
    category: "Category",
    price: "$999",
    originalPrice: "$1,199",
    image: "your-image-url",
    isNew: true,
    discount: "17%",
  },
  // ... more products
];
```

### Modifying Colors

Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color shades
  },
  accent: {
    // Your accent color shades
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy to Vercel
```

### Other Platforms

```bash
npm run build
npm start
```

## 📧 Contact & Support

For questions or support regarding this website:

- Email: hello@aurelia.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

Built with ❤️ for Aurelia Furniture & Lifestyle
