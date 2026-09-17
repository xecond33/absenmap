// ============================================================
// KONFIGURASI FIREBASE — GANTI DENGAN MILIK KAMU SENDIRI
// ============================================================
//
// Cara dapetin config ini (gratis, ±10 menit):
// 1. Buka https://console.firebase.google.com
// 2. Klik "Add project" → kasih nama bebas → lanjut sampai selesai
//    (boleh matiin Google Analytics, gak perlu)
// 3. Di dashboard project, klik ikon "</>" (Web app) → daftarkan app
//    → nanti muncul object firebaseConfig, copy semua isinya ke bawah ini
// 4. Di menu kiri, buka "Build" → "Realtime Database" → "Create Database"
//    → pilih lokasi server (misal Singapore/asia-southeast1) → mulai
//    dalam mode apapun dulu (rules bakal kita ganti manual di langkah 6)
// 5. Di menu kiri, buka "Build" → "Authentication" → "Get started"
//    → tab "Sign-in method" → aktifkan provider "Email/Password"
// 6. Di Realtime Database, buka tab "Rules", ganti isinya jadi ini
//    (supaya tiap akun CUMA bisa baca/tulis datanya sendiri):
//      {
//        "rules": {
//          "absensimap_items": {
//            "$uid": {
//              ".read": "$uid === auth.uid",
//              ".write": "$uid === auth.uid"
//            }
//          }
//        }
//      }
//    lalu klik "Publish".
// 7. Simpan file ini, upload ulang bareng index.html, style.css & script.js
//    ke hosting kamu (Netlify/Vercel/GitHub Pages/dll, atau cukup buka
//    index.html langsung di browser)
//
// Dengan rules di atas, tiap orang yang daftar/login akan punya data
// absensi sendiri-sendiri (per akun), tersinkron otomatis ke device
// manapun mereka login pakai akun yang sama — dan tidak bisa saling
// lihat/ubah data orang lain.

window.firebaseConfig = {
  apiKey: "AIzaSyBIVg4h60nVyUR86ZNnxblcHouSs9sBI2g",
  authDomain: "absenmap-8e424.firebaseapp.com",
  databaseURL: "https://absenmap-8e424-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "absenmap-8e424",
  storageBucket: "absenmap-8e424.firebasestorage.app",
  messagingSenderId: "558749668297",
  appId: "1:558749668297:web:5e068cb71772545a914e18"
};

// Selama config di atas belum diganti, aplikasi otomatis jalan pakai
// localStorage biasa (mode lokal, tanpa sync antar device) — jadi
// aplikasi tetap berfungsi normal sebelum kamu setup Firebase.
