# SimFrii - eSIM Management Platform

![SimFrii Logo](./public/logo.png)

SimFrii is a modern, user-friendly eSIM management platform that allows users to purchase, activate, and manage eSIMs for global connectivity. Built with React and Vite, this application provides a seamless experience for travelers and digital nomads who need reliable internet access worldwide.

## Features

- **User Authentication**: Secure login, registration, and password recovery
- **eSIM Marketplace**: Browse and purchase eSIMs by country or region
- **Multiple Installation Methods**: QR code, direct, and manual installation options
- **Account Management**: View and manage personal information and preferences
- **eSIM Management**: Track data usage, top-up, and archive eSIMs
- **Multi-language Support**: Interface available in multiple languages
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Admin Dashboard**: Comprehensive tools for administrators to manage users, payments, and eSIM inventory

## Technology Stack

- **Frontend**: React 18, React Router v7
- **State Management**: React Context API, React Query
- **Styling**: Tailwind CSS, DaisyUI
- **Form Handling**: React Hook Form
- **UI Components**: Lucide React, React Icons
- **Data Visualization**: Chart.js, Recharts
- **Build Tools**: Vite, ESLint
- **Notifications**: SweetAlert2
- **Animation**: Framer Motion

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/simfrii.git
cd simfrii
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
simfrii/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, icons, and other assets
│   ├── components/       # Reusable UI components
│   ├── Layouts/          # Layout components (Main, Dashboard)
│   ├── Pages/            # Page components organized by feature
│   │   ├── AccountSettings/
│   │   ├── AdminPages/
│   │   ├── Authentication/
│   │   ├── HomePage/
│   │   ├── MyEsim/
│   │   ├── OrderPreview/
│   │   ├── Shared/
│   │   ├── Support/
│   │   ├── TopUp/
│   │   └── WorldWideESim/
│   ├── Routers/          # Routing configuration
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   ├── index.css         # CSS reset and base styles
│   └── main.jsx          # Application entry point
├── .gitignore
├── eslint.config.js      # ESLint configuration
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check for code quality issues
- `npm run preview` - Preview the production build locally

## Deployment

The application is configured for easy deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - Tailwind CSS components
