# Aktivasi Microsoft

Aktivator Windows dan Office open-source dengan berbagai metode aktivasi termasuk HWID, Ohook, TSforge, KMS38, dan Online KMS, dilengkapi fitur troubleshooting lanjutan.

---

## Cara Mengaktivasi Windows/Office

### Metode 1 - PowerShell (Windows 8 dan yang lebih baru) ❤️

:::info

1. **Buka PowerShell sebagai Administrator**
   - Tekan `Win + X`
   - Pilih "Windows PowerShell (Admin)"

2. **Jalankan perintah berikut:**
   ```powershell
   irm https://get.activated.win | iex

Atau alternatif (akan dihentikan di masa depan):
  ```powershell
    irm https://massgrave.dev/get | iex
  ```

3. Pilih metode aktivas  
    - Tekan [1] untuk aktivasi Windows (HWID).  
    - Tekan [2] untuk aktivasi Office (Ohook).

4. Tunggu proses selesai

:::

#### Metode 2 - Manual (Windows Vista dan yang lebih baru)

<details>
  <summary>Klik di sini untuk melihat</summary>
  
1. Unduh file aktivasi:
  - Pilih salah satu link:
`https://github.com/massgravel/Microsoft-Activation-Scripts/archive/refs/heads/master.zip`  
atau
`https://git.activated.win/massgrave/Microsoft-Activation-Scripts/archive/master.zip`
2. Extrak file ZIP yang di unduh.
  - Pada folder hasil ekstraksi, cari folder bernama `All-In-One-Version`.
4. Jalankan file `MAS_AIO.cmd`.
  - klik kanan → "Run as administrator".
5. Ikuti petunjuk di layar.

</details>

---

- **[Office untuk macOS](office_for_mac.md)**  
- Untuk menjalankan skrip dalam mode tanpa pengawasan, periksa [disini](command_line_switches.md).

---

## Tidak Berhasil? ❓

- Jika **tidak bisa menjalankan MAS** melalui metode PowerShell, gunakan **Metode 2** di atas
- Jika MAS terbuka tapi menampilkan error, ikuti langkah troubleshooting yang ditandai warna biru
- Jika masalah tetap ada, hubungi kami [di sini](troubleshoot.md)

---

:::note

- Perintah IRM di PowerShell mengunduh script dari URL tertentu, dan IEX menjalankannya
- Selalu periksa URL sebelum menjalankan perintah dan pastikan sumber terpercaya saat mengunduh file manual
- Waspadai malware yang menyamar sebagai MAS dengan mengubah URL di perintah IRM

:::

---

## Rilis Terbaru MAS

Versi Terakhir - v3.2 (6-Mei-2025)  
[GitHub](https://github.com/massgravel/Microsoft-Activation-Scripts) | [Azure DevOps](https://dev.azure.com/massgrave/_git/Microsoft-Activation-Scripts) | [Self-hosted Git](https://git.activated.win/massgrave/Microsoft-Activation-Scripts)

---

## Fitur Utama

- **HWID (Lisensi Digital)**: Aktivasi permanen Windows
- **Ohook**: Aktivasi permanen Office
- **TSforge**: Aktivasi permanen Windows/ESU/Office
- **KMS38**: Aktivasi Windows hingga tahun 2038
- **Online KMS**: Aktivasi Windows/Office selama 180 hari (dapat diperpanjang otomatis)
- Troubleshooting aktivasi lanjutan
- Folder $OEM$ untuk pra-aktivasi
- Ubah edisi Windows
- Ubah edisi Office
- Cek status aktivasi Windows/Office
- Tersedia dalam versi All-In-One dan terpisah
- Open source berbasis script Batch
- Minim deteksi antivirus

---

## Ringkasan Aktivasi

| Tipe Aktivasi | Produk Didukung | Masa Aktivasi | Butuh Internet? |
|--------------|----------------|--------------|----------------|
| HWID | Windows 10-11 | Permanen | Ya |
| Ohook | Office | Permanen | Tidak |
| TSforge | Windows/ESU/Office | Permanen | Tidak |
| KMS38 | Windows 10-11-Server | Hingga 2038 | Tidak |
| Online KMS | Windows/Office | 180 hari (dapat diperpanjang) | Ya |

Untuk detail lebih lanjut, lihat dokumentasi dan [tabel perbandingan](#).  
Untuk aktivasi produk tidak resmi seperti **Office di Mac**, lihat [di sini](#).

---

## Screenshot

![Antarmuka Utama MAS](/img/software/powershell/MAS_AIO.png)

![Aktivasi HWID](/img/software/powershell/MAS_HWID.png)

![Aktivasi Ohook](/img/software/powershell/MAS_Ohook.png)

![Aktivasi TSforge](/img/software/powershell/MAS_TSforge.png)

![Menu Troubleshooting](/img/software/powershell/MAS_Troubleshoot.png)

![Ubah Edisi Windows](/img/software/powershell/MAS_change_windows_edition.png)

![Ubah Edisi Office 1](/img/software/powershell/MAS_change_office_edition_1.png)

![Ubah Edisi Office 2](/img/software/powershell/MAS_change_office_edition_2.png)

![Ubah Edisi Office 3](/img/software/powershell/MAS_change_office_edition_3.png)

---

Dibuat dengan ❤️