# Nini AI Web Application

A modern web application built with React and Vite, featuring AI-powered interactions.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone [your-repository-url]
   cd [repository-name]
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:

   ```bash
   npm run build
   # or
   yarn build
   ```

   This will generate a `dist` folder with the production-ready files.

## Deployment

You can deploy the `dist` folder to any static hosting service. Here are some popular options:

### Vercel

   ```bash
   npm install -g vercel
   vercel
   ```

### Netlify

   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

### GitHub Pages

1. Update `vite.config.js` to include your base URL:

   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   })
   ```

2. Deploy:

   ```bash
   npm run build
   npm run deploy
   ```

### 1&1 IONOS Hosting

1. **Build the Project**: Ensure your project is built for production.

   ```bash
   npm run build
   ```

2. **Upload Files**: Use an FTP client (like FileZilla) to upload the contents of the `dist` folder to the root directory of your 1&1 IONOS hosting space.

3. **Configure .htaccess**: If your application uses client-side routing, you may need to create a `.htaccess` file in the root directory to handle routing correctly. Add the following content to the `.htaccess` file:

   ```apache
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

4. **Access Your Site**: Once the files are uploaded, your site should be accessible via your domain.

## Tech Stack

- [React](https://reactjs.org/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool and Development Server
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) - Uses Babel for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - Uses SWC for Fast Refresh

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
