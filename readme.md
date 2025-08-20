# Express.js Boilerplate (Repository Pattern)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Sebuah *boilerplate* atau *base code* yang kokoh dan terukur untuk memulai proyek backend menggunakan Express.js. Proyek ini dibangun dengan menerapkan arsitektur **Controller - Service - Repository** untuk memastikan kode yang bersih, mudah dipelihara, dan mudah dikembangkan.

---

## ✨ Fitur Utama

-   **Struktur Profesional**: Mengimplementasikan pola Controller-Service-Repository untuk pemisahan wewenang yang jelas.
-   **Manajemen Konfigurasi**: Menggunakan `dotenv` untuk mengelola variabel lingkungan (`.env`) dengan aman.
-   **Routing Terstruktur**: Sistem routing yang modular dan mudah untuk ditambahkan.
-   **Middleware Siap Pakai**: Termasuk *middleware* dasar untuk penanganan error, validasi, dan CORS.
-   **Konsistensi Respons API**: Dilengkapi *helper* untuk standardisasi format respons JSON.
-   **Siap untuk Database**: Struktur yang dirancang untuk mudah diintegrasikan dengan *Query Builder* seperti Knex.js atau ORM seperti Sequelize/Prisma.

---

## 📁 Struktur Proyek
```
├── src/
|   ├── api/
|   |   ├── controllers/    # Logika request & response
|   |   ├── middlewares/    # Fungsi penengah (auth, error, dsb)
|   |   ├── models/         # (Opsional) Definisi skema database
|   |   ├── repositories/   # Lapisan abstraksi untuk query database
|   |   ├── routes/         # Definisi semua endpoint API
|   |   └── services/       # Logika bisnis utama aplikasi
|   |
|   ├── config/             # Konfigurasi database, dll.
|   ├── templates/          # Template email, dsb.
|   └── utils/              # Fungsi helper/utilitas
|
├── .env.example            # Contoh file variabel lingkungan
├── .gitignore
├── app.js                  # Definisi dan konfigurasi aplikasi Express
├── server.js               # Titik masuk untuk menjalankan server
└── package.json
```
---

## 🚀 Panduan Memulai

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek secara lokal.

### Prasyarat

-   [Node.js](https://nodejs.org/en/) (v16 atau lebih baru direkomendasikan)
-   [npm](https://www.npmjs.com/) atau [Yarn](https://yarnpkg.com/)

### Instalasi

1.  **Clone repositori ini:**
    ```bash
    git clone [URL_REPOSITORI_ANDA]
    cd [NAMA_FOLDER_PROYEK]
    ```

2.  **Instal semua dependensi:**
    ```bash
    npm install
    ```

3.  **Siapkan variabel lingkungan:**
    Salin file `.env.example` menjadi `.env` dan sesuaikan nilainya.
    ```bash
    cp .env.example .env
    ```
    Buka file `.env` dan atur konfigurasinya, terutama untuk koneksi database.

4.  **Jalankan server:**
    Untuk mode pengembangan (dengan auto-reload menggunakan `nodemon`):
    ```bash
    npm run dev
    ```
    Untuk mode produksi:
    ```bash
    npm start
    ```

Server akan berjalan di `http://localhost:PORT` sesuai dengan yang Anda atur di file `.env`.

---

## 🔑 Variabel Lingkungan

Variabel berikut perlu didefinisikan di dalam file `.env` Anda.

| Variabel      | Deskripsi                               | Contoh                               |
| ------------- | --------------------------------------- | ------------------------------------ |
| `PORT`        | Port yang akan digunakan oleh server    | `5000`                               |
| `DB_CLIENT`   | Tipe klien database (untuk Knex.js)     | `mysql2` / `pg`                       |
| `DB_HOST`     | Host database                           | `127.0.0.1`                          |
| `DB_USER`     | Nama pengguna database                  | `root`                               |
| `DB_PASSWORD` | Kata sandi database                     | `password`                           |
| `DB_NAME`     | Nama database                           | `nama_database_anda`                 |
| `JWT_SECRET`  | Kunci rahasia untuk JSON Web Token      | `gantidenganyangbenaranacdanpanjang` |

---

## 📜 Skrip yang Tersedia

-   `npm start`: Menjalankan server dalam mode produksi.
-   `npm run dev`: Menjalankan server dalam mode pengembangan menggunakan `nodemon`.
-   `npm test`: (Opsional) Menjalankan skrip pengujian/testing.

---

## 📄 Lisensi

Proyek ini didistribusikan di bawah Lisensi MIT.
