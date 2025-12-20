/*
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));


// Connect DB and Start Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => {
      console.log('Server running on port 5000');
      console.log('MongoDB connected');
    });
  })
  .catch(err => console.log(err));
*/










// // server.js

// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');

// const app = express();

// // ✅ Middleware


// app.use(cors({ origin: '*' })); // Allow all origins (you can restrict later)
// app.use(express.json());        // Parse JSON body

// // ✅ Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/elder', require('./routes/elderRoutes'));
// app.use('/api/caregiver', require('./routes/caregiverRoutes'));
// //app.use("/api/caregivers", require("./routes/caregiverRoutes"));
// app.use("/api/caregivers", require("./routes/caregiverRoutes"));
// app.use("/api/requests", require("./routes/requestRoutes"));
// //app.use("/api/requests", require("./routes/requestRoutes"));



// // ✅ Health check route (optional but useful)
// app.get('/', (req, res) => {
//   res.send('Companion+ Backend is running...');
// });

// // ✅ MongoDB + Server
// const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on port ${PORT}`);
//       console.log('✅ MongoDB connected');
//     });
//   })
//   .catch(err => {
//     console.error('❌ MongoDB connection error:', err);
//   });



// server.js

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const authRoutes = require("./routes/authRoutes");

const app = express();

/* ===================== MIDDLEWARE ===================== */

app.use(cors({ origin: "*" }));
app.use(express.json());

/* ===================== ROUTES ===================== */

app.use("/api/auth", authRoutes);
app.use("/api/elder", require("./routes/elderRoutes"));
app.use("/api/caregiver", require("./routes/caregiverRoutes"));
app.use("/api/caregivers", require("./routes/caregiverRoutes"));
app.use("/api/requests", require("./routes/requestRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/health", require("./routes/healthRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));
app.use("/api/reminders", require("./routes/reminderRoutes"));

/* ===================== HEALTH CHECK ===================== */

app.get("/", (req, res) => {
  res.send("Companion+ Backend is running...");
});

/* ===================== SOCKET.IO SETUP ===================== */

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Store connected users
const onlineUsers = {}; // { userId: socketId }

io.on("connection", (socket) => {
  console.log("🟢 Socket connected:", socket.id);

  // User joins with ID
  socket.on("join", (userId) => {
    onlineUsers[userId] = socket.id;
    console.log("User joined:", userId);
  });

  // Send message (real-time)
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const receiverSocketId = onlineUsers[receiverId];

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("receiveMessage", {
        senderId,
        text,
        createdAt: new Date(),
      });
    }
  });

  socket.on("disconnect", () => {
    console.log("🔴 Socket disconnected:", socket.id);

    for (const userId in onlineUsers) {
      if (onlineUsers[userId] === socket.id) {
        delete onlineUsers[userId];
      }
    }
  });
});

/* ===================== DATABASE + SERVER ===================== */

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log("✅ MongoDB connected");
      console.log("💬 Socket.IO enabled");
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
