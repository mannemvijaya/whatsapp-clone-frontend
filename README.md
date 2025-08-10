# WhatsApp Clone - Frontend

This is the **frontend** of the WhatsApp Clone application, built using **React.js**.  
It provides the user interface for real-time messaging, integrating with the backend API and socket server.

---

## 🚀 Features
- User authentication (Login/Register)
- Real-time messaging with WebSockets (Socket.IO)
- Chat list & active conversation display
- Responsive UI for desktop and mobile
- Message timestamps & user avatars

---

## 🛠️ Tech Stack
- **React.js** - Frontend framework
- **React Router** - Page navigation
- **Socket.IO Client** - Real-time communication
- **Axios** - HTTP requests
- **CSS / Styled Components** - Styling

---

## 📂 Project Structure
whatsapp-clone-frontend/
│
├── public/ # Static files (index.html, icons)
├── src/ # Source code
│ ├── components/ # UI components
│ ├── pages/ # Application pages
│ ├── styles/ # CSS files
│ ├── utils/ # Helper functions (API calls)
│ ├── App.js # Main App component
│ └── index.js # Entry point
├── package.json # Dependencies & scripts
└── README.md # Project documentation

---

## ⚙️ Installation & Setup
1. **Clone the repository**
```bash
git clone https://github.com/your-username/whatsapp-clone-frontend.git
cd whatsapp-clone-frontend

2.Install dependencies

npm install

3.Update API URL
Open src/utils/api.js (or wherever backend calls are made)
Replace the BASE_URL with your backend's deployed link.
Run locally
npm start
The app will run at http://localhost:3000

📦 Build for Production

npm run build

This will generate a build/ folder ready for deployment.

🚀 Deployment
You can deploy the frontend using:
Netlify

Vercel
Example (Vercel):
npm run build
vercel
