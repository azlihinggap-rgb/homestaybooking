// =====================================================================
//  TETAPAN — ini sahaja fail yang anda perlu ubah
// =====================================================================

// 1) Tampal config Firebase anda di sini
//    (Firebase console → Project settings → Your apps → Web app → SDK setup and configuration → Config)
//    Nota: apiKey ini memang selamat didedahkan di laman awam. Keselamatan data
//    dikawal oleh firestore.rules, bukan oleh kunci ini.
export const firebaseConfig = {
  apiKey: "AIzaSyDJbAB9ghXqtYQxm0P2nPnEyANYWMmvNVM",
  authDomain: "azlihinggap-homestay.firebaseapp.com",
  projectId: "azlihinggap-homestay",
  storageBucket: "azlihinggap-homestay.firebasestorage.app",
  messagingSenderId: "813677672011",
  appId: "1:813677672011:web:3592682f50d28898e93fce",
};

// 2) Maklumat homestay
export const SETTINGS = {
  homestayName: "Azli Hinggap Homestay",      // nama yang dipaparkan kepada customer
  location: "Saujana Indah, Melaka",                 // boleh kosongkan ""
  rateWeekday: 220,                   // malam Isnin – Khamis (RM)
  rateWeekend: 250,                   // malam Jumaat, Sabtu, Ahad & cuti umum (RM)
  maxGuests: 10,                      // had bilangan tetamu
  maxNights: 30,                      // had malam bagi satu tempahan online
  whatsappNumber: "60133382348",      // nombor WhatsApp admin, format 60xxxxxxxxx (tanpa +)
  checkInTime: "2:00 petang",
  checkOutTime: "12:00 tengah hari",
};
