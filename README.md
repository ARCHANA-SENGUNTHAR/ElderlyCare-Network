# A UNIFIED MERN APPLICATION FOR HOLISTIC ELDERLY ASSISTANCE-COMPANION+

ElderCare Network is a modern, compassionate platform designed to support elderly individuals by connecting them with caregivers, family members, and essential services — all in one place.

A secure and user-friendly digital companion for elderly care management, communication, and well-being.

🌐 Website: 👉[Live Here](https://companionplus.netlify.app)

---

## 📁 Project Structure

```bash
ElderlyCare-Network/
│
├── CompanionPlusApp/                 # Frontend (React Native + Expo Web)
│   ├── assets/                       # Images, icons, fonts
│   ├── components/                  # Reusable UI components
│   ├── navigation/                  # React Navigation setup
│   ├── screens/                     # App screens (Auth, Chat, Profile, etc.)
│   ├── utils/                       # API config & helpers
│   ├── App.tsx                      # App entry point
│   ├── index.css                    # Web-specific styles
│   └── package.json                 # Frontend dependencies
│
├── Companionplus-backend/            # Backend (Node.js + Express)
│   ├── config/                      # Database & environment config
│   ├── controllers/                # Route controllers (Auth, Chat, etc.)
│   ├── middleware/                 # Auth & error middleware
│   ├── models/                     # MongoDB schemas
│   ├── routes/                     # API routes
│   ├── utils/                      # Mailer, OTP, helpers
│   ├── server.js                   # Backend entry point
│   └── package.json                # Backend dependencies
│
└── README.md                        # Project documentation

```

---

## ⚙️ Installation & Setup

## 🔹*Frontend Setup*

### Clone the repository:

```bash
git clone https://github.com/Anisa-barvin/ElderlyCare-Network.git
```

### Navigate to frontend:

```bash
cd ElderlyCare-Network/CompanionPlusApp
```

### Install dependencies:

```bash
npm install
```

Run locally:
  
```bash
npx expo start
```

### Build for web:

```bash
npx expo export -p web
```

---

## 🔹*Backend Setup*

- Navigate to backend:
 ```bash
 cd ElderlyCare-Network/Companionplus-backend
 ```

- Install dependencies:
 ```bash
 npm install
 ```

- Start server:
```bash
  node server.js
```

## 🔐 Environment Variables (Backend)

```bash
Set these in Render Dashboard → Environment Variables:
MONGO_URI=YOUR_MONGODB_URL
JWT_SECRET=YOUR_JWT_SECRET_KEY
GROQ_API_KEY=YOUR_GROQ_API_KEY_KEY
ASSEMBLYAI_API_KEY=YOUR_ASSEMBLYAI_API_KEY
BREVO_SENDER_EMAIL=YOUR_BREVO_SENDER_EMAIL
BREVO_API_KEY=YOUR_BREVO_API_KEY
```

## ✨ Key Features

### 👴 Elder Module

- Elder registration & secure login

- Email OTP verification

- Profile management

- Chat with caregivers & family

### 🧑‍⚕️ Caregiver Module

- Caregiver registration

- OTP-based verification

- Elder interaction & communication

### 💬 Real-Time Chat

- Secure messaging using Socket.IO

- Auto-scroll & live updates

### 🔐 Authentication

- JWT-based authentication

- Role-based navigation (Elder / Caregiver)

### 📧 Email Services

- OTP email verification using Brevo

- Secure transactional email delivery

### 🌐 Cross-Platform

- Mobile (Android / iOS)

- Web (Expo Web + Netlify)

### 🚀 Deployment

- Frontend: Netlify
- Backend: Render
- Database: MongoDB Atlas
- Email: Brevo

---

## 🔮 Future Enhancements

- Emergency alert system 

- Appointment scheduling with doctors

- Health monitoring dashboard

- Push notifications

- AI-powered caregiver recommendations

- Multi-language support

---

## GUIDANCE:

## Dr. S. Prakash
#### *Head of Department-Information Technology,Sri Shakthi Institute of Engineering and Technology-Coimbatore*

*I would like to thank our guide for his support throughout the development of this project, that we can finally bring our webiste live. It was very crucial time period where we came across many 
knowledgable insights.
Thank you sir!*

---

## 👩‍💻 Author

## Anisa Barvin

📧 [Email](barvinanisa@gmail.com)

🔗 [GitHub](https://github.com/Anisa-barvin)

## Anika V

📧 [Email](anikavadivel@gmail.com)

🔗 [GitHub](https://github.com/Anika02023)

## Archana gurusamy

📧 [Email](archanagurusamy648@gmail.com)

🔗 [GitHub](https://github.com/ARCHANA-SENGUNTHAR)

## Hemalatha P N

📧 [Email](hemalathanatarajan28@gmail.com)

🔗 [GitHub](https://github.com/hemalatha2005)

---

## ⭐ Support

I hope it will be useful to many elders, and peers review and feedback is supported to improve our project.
If you like this project, don’t forget to ⭐ the repository!
Your support helps improve and expand ElderCare Network 💚
