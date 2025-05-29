
# Alfrexco Website

This is the official website for **Alfrexco (Pty) Ltd**, developed by NexGenix Technologies. It delivers fast performance, scalability, and security using modern frontend tools and best practices.

---

## 🔧 Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) – Lightning-fast build tool optimized for modern JavaScript projects
- **Language**: TypeScript – Ensures code quality and future maintainability
- **Styling**: Tailwind CSS – Utility-first CSS for a clean and responsive UI
- **Deployment-Ready**: Compatible with static hosting platforms (e.g., Vercel, Netlify) and self-hosted environments
- **CI/CD Ready**: Easily integrated with GitHub for seamless version control and deployments

---

## 🚀 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/nexgenix-tech/alfrexco-data-insights.git
cd alfrexco-data-insights
```

---

### 2. Install Dependencies

Ensure Node.js (v18+) and npm are installed.

```bash
npm install
```

---

### 3. Start Local Development Server

```bash
npm run dev
```

Preview on:  
`http://localhost:5173`

---

### 4. Build for Production

```bash
npm run build
```

This generates the production files in the `dist/` directory.

---

### 5. Preview Production Build Locally

```bash
npm run preview
```

---

## 📦 Deployment

This project is fully static and can be hosted using any platform that serves static files. Recommended methods:

---

### ✅ Option A: Hosting on Vercel (Recommended)

- Automatically deploys on code push
- Custom domain setup and HTTPS included
- Built-in CI/CD and rollback support

Steps:
1. Create a [Vercel](https://vercel.com) account
2. Connect this GitHub repository
3. Configure the build command: `npm run build`
4. Set the output directory: `dist`

---

### 🖥 Option B: Self-Hosting on Your Own Server

You can host the website manually using Apache, NGINX, or any static file server.

Example NGINX setup:

```nginx
server {
  listen 80;
  server_name alfrexco.com;

  root /var/www/alfrexco/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

Be sure to enable GZIP and caching headers for performance.

---

## 🧠 Additional Resources

- [Vite Docs](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Deploy a Static Site (DigitalOcean)](https://www.digitalocean.com/community/tutorials/how-to-deploy-a-static-website)
- [Node.js Downloads](https://nodejs.org/)

---

## 🤝 Original Developer

This project was developed and maintained by:

**NexGenix Technologies**  
_“Innovate. Elevate. Repeat.”_

📍 Centurion, Gauteng  
🌐 [www.nexgenix.co.za](https://www.nexgenix.co.za)  
📧 hello@nexgx.co.za  
📞 +27 79 454 0989  
🔗 [GitHub](https://github.com/nexgenix-tech)

---

## 🔐 License

This codebase is proprietary and intended for use by Alfrexco (Pty) Ltd. Redistribution or reuse without written permission is prohibited.
