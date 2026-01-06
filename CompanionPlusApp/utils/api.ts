
// utils/api.ts


// for web site 


// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:5000/api', // ✅ only one /api
// });

// export default api;


import axios from "axios";

const api = axios.create({
  baseURL: "https://elderlycare-network-backend.onrender.com/api",
});

export default api;

// for android emulator

//  import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://10.0.2.2:5000/api', // ✅ Android Emulator localhost
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default api;
