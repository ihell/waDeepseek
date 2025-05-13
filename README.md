# WADeepseek

WADeepseek adalah bot WhatsApp yang menggunakan API untuk memberikan jawaban berbasis AI. Bot ini dibangun menggunakan `whatsapp-web.js`, `express`, dan `axios`.

## Fitur

- Menghubungkan bot ke WhatsApp menggunakan QR code.
- Menjawab pertanyaan pengguna dengan memanfaatkan API AI eksternal.
- Mudah dikonfigurasi melalui file `.env`.

## Persyaratan

- Node.js v14 atau lebih baru
- NPM atau Yarn
- Akun WhatsApp aktif

## Instalasi

1. Clone repositori ini:

   ```bash
   git clone https://github.com/ihell/waDeepseek.git
   cd waDeepseek
   ```

2. Instal dependensi:

   ```bash
   npm install
   ```

3. Buat file `.env` untuk menyimpan variabel lingkungan:

   ```env
   PORT=3000
   API_URL=url_ip_public_server
   ```

4. Jalankan proyek:

   ```bash
   npm start
   ```

## Cara Menggunakan

1. Jalankan aplikasi dan pindai QR code yang muncul di terminal menggunakan WhatsApp Anda.
2. Kirim pesan ke bot dengan format `ai:<pertanyaan>` untuk mendapatkan jawaban dari AI.

## Struktur Proyek

```
.gitignore
index.js
package.json
README.md
.wwebjs_auth/
```

- `index.js`: File utama aplikasi.
- `.wwebjs_auth/`: Direktori untuk menyimpan data autentikasi WhatsApp.

## Catatan

- Pastikan untuk menjaga keamanan file `.env` Anda dan jangan membagikannya secara publik.
- Direktori `.wwebjs_auth/` diabaikan oleh Git untuk melindungi data autentikasi Anda.
