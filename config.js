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
  homestayName: "Azli's Hinggap Homestay", // nama yang dipaparkan kepada customer
  location: "Bukit Katil, Melaka",     // boleh kosongkan ""
  rateWeekday: 220,                   // malam Isnin – Khamis (RM)
  rateWeekend: 250,                   // malam Jumaat, Sabtu, Ahad & cuti umum (RM)
  maxGuests: 14,                      // had bilangan tetamu
  maxNights: 30,                      // had malam bagi satu tempahan online
  whatsappNumber: "60133382348",      // nombor WhatsApp admin, format 60xxxxxxxxx (tanpa +)
  checkInTime: "2:00 petang",
  checkOutTime: "12:00 tengah hari",
};

// 3) Galeri gambar
//    Upload gambar ke folder "images/" dalam repo GitHub, kemudian senaraikan di sini.
//    Gambar pertama akan jadi gambar utama. Gambar yang tiada akan disembunyikan automatik.
export const GALLERY = [
  { src: "images/01-depan.jpg",       caption: "Car porch" },
  { src: "images/02-ruang-tamu.jpg",  caption: "Ruang tamu" },
  { src: "images/03-ruang-tamu-2.jpg",  caption: "Ruang tamu 2" },
  { src: "images/04-bilik-1.jpg",     caption: "Bilik tidur 1" },
  { src: "images/05-bilik-2.jpg",     caption: "Bilik tidur 2" },
  { src: "images/06-bilik-3.jpg",     caption: "Bilik tidur 3" },
  { src: "images/07-dapur.jpg",       caption: "Dapur" },
  { src: "images/08-bilik-air-1.jpg",   caption: "Bilik air 1" },
];

// 4) Kemudahan rumah — tambah / buang baris ikut keadaan sebenar
export const AMENITIES = [
  { icon: "❄️", text: "3 aircond — ruang tamu, bilik tidur 1 & bilik tidur 2" },
  { icon: "🛏️", text: "2 bilik tidur" },
  { icon: "📶", text: "WiFi berkelajuan tinggi" },
  // Contoh lain (buang // di depan untuk paparkan):
  { icon: "🚿", text: "2 bilik air dengan water heater" },
  { icon: "🍳", text: "Dapur lengkap (dapur gas, peti sejuk, periuk nasi)" },
  { icon: "📺", text: "Smart TV" },
  { icon: "🧺", text: "Mesin basuh" },
  { icon: "🚗", text: "Parking untuk 2 kereta" },
];

// 5) Lokasi
export const LOCATION = {
  lat: 2.2338538,
  lng: 102.3092728,
  googleMapsUrl: "https://maps.app.goo.gl/To8db2X8if5e9qobA",
};

// 6) Tempat menarik berdekatan
export const NEARBY = [
  { icon: "🛍️", name: "I Molek Commercial Area", distance: "2.6 km", note: "ZUS Coffee, Mixue, Keria Bangsawan, Family Store & banyak lagi", query: "I Molek Ayer Keroh Melaka" },
  { icon: "🏥", name: "Hospital Pantai Ayer Keroh", distance: "4 km", query: "Pantai Hospital Ayer Keroh" },
  { icon: "🛒", name: "AEON Ayer Keroh", distance: "5.9 km", query: "AEON Ayer Keroh Melaka" },
  { icon: "🛣️", name: "Tol Ayer Keroh (PLUS)", distance: "10 km", query: "Plaza Tol Ayer Keroh" },
];
