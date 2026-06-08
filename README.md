# 🏠 Aplikasi Management Kost

Aplikasi management kost yang sederhana dan lengkap dengan fitur:
- 📝 Manajemen data penghuni kost
- 💰 Pencatatan pembayaran sewa
- 📱 Pengingat pembayaran via WhatsApp
- 📊 Laporan keuangan lengkap
- 📈 Dashboard analytics

## 🛠️ Tech Stack

### Backend
- Node.js + Express
- MySQL Database
- Prisma ORM
- Twilio WhatsApp API

### Frontend
- React + Vite
- Tailwind CSS
- Axios

## 📋 Struktur Project

```
kost-management-app/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── database/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
└── docs/
    └── DATABASE.md
```

## 🚀 Instalasi & Setup

### Backend Setup

```bash
cd backend
npm install

# Copy .env.example ke .env dan isi konfigurasi
cp .env.example .env

# Jalankan migrasi database
npm run migrate

# Start server
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 📱 Fitur Utama

### 1. Manajemen Penghuni
- Tambah/Edit/Hapus penghuni
- Data identitas dan kontak
- Status aktif/tidak aktif

### 2. Pencatatan Pembayaran
- Catat pembayaran sewa
- Tracking status pembayaran
- Riwayat pembayaran per penghuni

### 3. Pengingat WhatsApp
- Pengingat otomatis pembayaran
- Konfirmasi pembayaran via WhatsApp
- Customizable jadwal pengingat

### 4. Laporan Keuangan
- Laporan harian, bulanan, tahunan
- Export PDF
- Analisis pendapatan

### 5. Dashboard
- Summary keuangan
- Grafik pembayaran
- Kamar kosong
- Pembayaran terlambat

## 🔐 Keamanan

- JWT Authentication
- Password hashing dengan bcryptjs
- CORS protection
- Input validation

## 📞 Kontak & Support

Untuk bantuan, silakan buat issue di repository ini.
