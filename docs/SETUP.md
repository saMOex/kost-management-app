# 🚀 Setup Guide - Aplikasi Management Kost

## Prasyarat
- Node.js v16 atau lebih tinggi
- MySQL Server
- npm atau yarn
- Twilio Account (untuk WhatsApp)

## 📦 Instalasi Backend

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Setup Database
```bash
# Buat database baru
mysql -u root -p
> CREATE DATABASE kost_management;
```

### 3. Konfigurasi Environment
```bash
cp .env.example .env
```

Edit `.env` dengan konfigurasi Anda:
```
DATABASE_URL="mysql://username:password@localhost:3306/kost_management"
JWT_SECRET=your_secret_key_here
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+1234567890
```

### 4. Generate Prisma & Migrasi
```bash
npm run prisma:generate
npm run migrate
```

### 5. Jalankan Backend
```bash
npm run dev
```
Server berjalan di `http://localhost:5000`

## 🎨 Instalasi Frontend

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Setup Environment
```bash
cp .env.example .env
```

### 3. Jalankan Frontend
```bash
npm run dev
```
Akses di `http://localhost:5173`

## 🔑 Default Login
- Email: `admin@kost.com`
- Password: `admin123`

## 📝 API Endpoints

### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Register
- `POST /api/auth/logout` - Logout

### Penghuni (Tenant)
- `GET /api/penghuni` - Get all tenants
- `GET /api/penghuni/:id` - Get tenant by ID
- `POST /api/penghuni` - Create tenant
- `PUT /api/penghuni/:id` - Update tenant
- `DELETE /api/penghuni/:id` - Delete tenant

### Pembayaran (Payment)
- `GET /api/pembayaran` - Get all payments
- `POST /api/pembayaran` - Create payment
- `PUT /api/pembayaran/:id` - Update payment
- `DELETE /api/pembayaran/:id` - Delete payment

### Laporan (Report)
- `GET /api/laporan/detail` - Detailed report
- `GET /api/laporan/harian` - Daily report
- `GET /api/laporan/bulanan` - Monthly report
- `GET /api/laporan/tahunan` - Yearly report

### Dashboard
- `GET /api/dashboard/summary` - Dashboard summary
- `GET /api/dashboard/grafik` - Payment graph

## 🐛 Troubleshooting

### MySQL Connection Error
Pastikan:
- MySQL server sudah running
- Username & password di `.env` benar
- Database sudah dibuat

### Twilio WhatsApp Error
Pastikan:
- Account SID dan Auth Token valid
- WhatsApp Sandbox sudah di-join
- Format nomor HP menggunakan +62

## 🚀 Production Build

### Backend
```bash
npm run start
```

### Frontend
```bash
npm run build
cd dist && serve
```

## 📖 Dokumentasi Lengkap
Lihat folder `docs/` untuk dokumentasi lebih detail.
