# Cek Status Aktivasi

Sebuah skrip Windows Powershell yang kuat untuk menampilkan status lisensi Microsoft Windows dan Office.

**Pembuat:** [abbodi1406](https://github.com/abbodi1406)  
**Repositori Github:** https://github.com/paintnokio/CAS

---

Cara Menggunakan
---------------

1. Kunjungi [Repositori Github](https://devcomp.fun/CAS)
2. Unduh file ZIP dengan mengklik tombol "Code" lalu pilih "Download ZIP"
3. Ekstrak file ZIP ke lokasi yang diinginkan di komputer Anda
4. Jalankan file cmd_launcher.cmd yang ada di folder hasil ekstraksi

Produk yang Didukung
-------------------

- Windows Vista dan versi lebih baru / Windows Server 2008 dan versi lebih baru
- Office 2010 dan versi lebih baru (MSI atau C2R), terinstal di Windows XP dan versi lebih baru
- Aplikasi Office UWP di Windows 10/11
- Host KMS Windows dan Office (CSVLK), terinstal di Windows Server 2003 dan versi lebih baru

Fitur Utama
----------

- Memerlukan Windows Powershell 2.0 minimal
- Pengganti praktis untuk fungsi **slmgr.vbs** `/dli` `/dlv` `xpr`
- Menampilkan tanggal kedaluwarsa aktivasi untuk produk yang didukung
- Menampilkan `ProductKeyChannel` untuk kunci utama Windows Vista/7/8
- Menampilkan status lisensi tambahan (Extended Security Updates, APPXLOB, OCUR, dll)
- Menampilkan status Volume Activation Active Directory untuk Windows 8+
- Menampilkan status Automatic VM Activation untuk Windows Server 2012+
- Menampilkan status Subscription Activation untuk Windows 11 24H2+
- Mengimplementasikan fungsi **vNextDiag.ps1** untuk mendeteksi lisensi Office vNext
- Mengimplementasikan tool [Client Licensing Check](https://github.com/asdcorp/clic) untuk Windows 8+

Keunggulan Check-Activation-Status.ps1
--------------------------------------

- Lebih cepat dengan metode PInvoke native dari Software Licensing Client Dll
- Menampilkan lebih banyak info untuk semua versi Windows dan Office yang didukung
- Mendukung "Client Licensing Check" untuk Windows 7 dan Vista

Parameter
---------

|Switch |Fungsi|
|-------|------|
| -IID  | Tampilkan Offline Installation ID |
| -Dlv  | Tampilkan IID, hitungan Rearm, Trusted time, Product ID (jika tersedia) |
| -All  | Tampilkan status untuk semua ID |
| -Pass | Lewati prompt akhir atau pembersihan buffer window |

Tidak Didukung
-------------

Status Volume Licensing berbasis Token.

Lisensi
-------
Projek ini dilisensikan di bawah MIT License.