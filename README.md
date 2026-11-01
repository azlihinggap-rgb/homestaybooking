# Sistem Tempahan Homestay (percuma)

Web app tempahan untuk satu unit homestay.
**Hosting:** GitHub Pages (percuma) · **Database + login:** Firebase (pelan Spark, percuma)

- `index.html`: halaman untuk customer (link yang anda kongsi)
- `admin.html`: halaman admin (login Google, hanya email yang diberi akses)
- `config.js`: **satu-satunya fail yang perlu anda ubah**
- `firestore.rules`: peraturan keselamatan database

## Apa yang sistem ini buat

**Customer**
1. Buka link → nampak kalendar (tarikh penuh tak boleh dipilih, tarikh RM250 diwarnakan)
2. Pilih check-in & check-out → nampak anggaran harga automatik
   - Malam Isnin–Khamis: RM220
   - Malam Jumaat, Sabtu, Ahad & cuti umum: RM250
3. Isi nama, no. telefon, bilangan tetamu → hantar (status **Pending**)
4. Boleh tekan butang WhatsApp untuk maklumkan anda

**Admin**
- Kalendar berwarna ikut status (Pending / Confirmed / Paid), dengan amaran jika booking bertindih
- Tukar status, isi **harga akhir**, tambah nota
- Bila status **Confirmed** atau **Paid**, tarikh itu terus "penuh" di kalendar customer. Bila **Batal**, tarikh dibuka semula.
- Tambah booking manual (untuk tempahan melalui WhatsApp/telefon)
- Urus senarai cuti umum (kadar RM250)
- **Owner** (anda) sahaja boleh tambah/buang admin lain

> Customer tidak boleh melihat nama atau nombor telefon customer lain. Mereka hanya nampak tarikh yang penuh.

---

## Langkah setup (~20 minit, lebih mudah guna laptop)

### A. Firebase

1. Pergi ke https://console.firebase.google.com → **Create a project** → beri nama (cth. `homestay-ayah`). Google Analytics boleh dimatikan.
2. Menu kiri **Build → Firestore Database → Create database**
   - Location: `asia-southeast1 (Singapore)`
   - Pilih **Start in production mode**
3. Dalam Firestore, buka tab **Rules** → padam semua → tampal isi `firestore.rules` → **Publish**.
4. Menu kiri **Build → Authentication → Get started** → tab **Sign-in method** → **Google** → Enable → Save.
5. Klik ⚙️ **Project settings** → bahagian **Your apps** → ikon **`</>`** (Web) → beri nama → **Register app**.
   Salin objek `firebaseConfig` yang dipaparkan dan tampal ke dalam `config.js`.
6. **Jadikan diri anda owner:** Firestore Database → tab **Data** → **Start collection**
   - Collection ID: `admins`
   - Document ID: email Google anda **huruf kecil semua** (cth. `radhi@gmail.com`)
   - Field: `role` · type `string` · value `owner` → **Save**

### B. Ubah `config.js`

Selain `firebaseConfig`, ubah juga:
- `homestayName`, `location`
- `whatsappNumber`: nombor WhatsApp anda/ayah, format `60123456789`
- `maxGuests`, masa check-in/out jika perlu

### C. GitHub Pages

1. Log masuk https://github.com → **New repository** → nama cth. `homestay` → **Public** → Create.
2. **Add file → Upload files** → seret semua fail (`index.html`, `admin.html`, `config.js`, `common.js`, `style.css`) → **Commit changes**.
   (`README.md` dan `firestore.rules` boleh diupload sekali, tak mengganggu.)
3. **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → **Save**.
4. Tunggu 1–2 minit. Link anda: `https://USERNAME.github.io/homestay/`

### D. Benarkan domain GitHub untuk login

Firebase → **Authentication → Settings → Authorized domains → Add domain** → `USERNAME.github.io`

### E. Siap!

- Link customer: `https://USERNAME.github.io/homestay/`
- Link admin: `https://USERNAME.github.io/homestay/admin.html`

---

## Tambah admin lain (cth. ayah)

Log masuk admin → **Tetapan → Akses admin** → masukkan email Google mereka → **Tambah**.
Mereka boleh log masuk di link admin dengan akaun Google itu. Email mesti akaun Google (Gmail atau Google Workspace).

## Cuti umum

Sistem tidak tahu cuti umum secara automatik. Tambah tarikh di **Tetapan → Cuti umum**.
Tarikh yang ditambah ialah tarikh **malam** yang dikira RM250.
Contoh: jika cuti umum jatuh hari Rabu dan anda mahu malam sebelum cuti dikira RM250, tambah tarikh **Selasa**. Jika malam hari cuti itu sendiri, tambah **Rabu**.

## Soalan lazim

**Adakah benar-benar percuma?**
Ya, untuk saiz satu homestay. GitHub Pages percuma untuk repo public. Firebase Spark beri kuota harian baca/tulis yang jauh melebihi keperluan satu unit.

**Repo public, data saya selamat ke?**
Kod sahaja yang public. Data booking disimpan di Firebase dan dilindungi oleh `firestore.rules`. `apiKey` dalam `config.js` memang direka untuk didedahkan.

**Kalau ada orang spam borang?**
Booking spam hanya masuk sebagai *Pending* dan tidak mengunci tarikh. Anda boleh padam. Jika jadi masalah, aktifkan **Firebase App Check** (reCAPTCHA) kemudian.

**Nak ubah harga?**
Tukar `rateWeekday` / `rateWeekend` dalam `config.js`, kemudian upload semula fail itu ke GitHub.
