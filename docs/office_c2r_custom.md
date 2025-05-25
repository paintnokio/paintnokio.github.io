# Office C2R Custom Install

## Catatan

- Jika panduan di bawah membingungkan, opsi termudah adalah menggunakan [Office C2R Installer](office_c2r_links.md).
- Office Retail (contoh: O365) memiliki pembaruan fitur terbaru sedangkan Office Volume (contoh: ProPlus 2024) tidak.
- Perlu diketahui bahwa dalam metode instalasi custom Office C2R resmi, tidak tersedia ISO atau solusi satu-klik. Berikut panduan paling sederhana untuk instalasi Office yang dikustomisasi.

- Pengguna Rusia perlu mengikuti [panduan ini](bypass-russian-geoblock.md) untuk melewati pemblokiran geografis saat mengunduh Office.

:::

---

## Panduan Instalasi Custom

- Jika Office pernah terinstal sebelumnya:
  - Uninstall Office melalui fitur Apps & Features di pengaturan Windows.
  - Jalankan file `OfficeScrubber.cmd` dari [Office Scrubber](https://github.com/abbodi1406/WHD/raw/master/scripts/OfficeScrubber_13.zip) oleh abbodi1406 dan pilih opsi `[R] Remove all Licenses`.
- Buat folder baru bernama `Office` di drive `C:\`, contoh: `C:\Office`
- Unduh [Office Deployment Tool](https://officecdn.microsoft.com/pr/wsus/setup.exe) (ODT)
- Salin file `setup.exe` yang diunduh ke folder Office tadi, contoh: `C:\Office\setup.exe`
- Kunjungi [config.office.com](https://config.office.com/deploymentsettings)
  - Untuk Office Retail, pilih `Microsoft 365 Apps for enterprise` di bagian office suites.
  - Untuk Office Volume, pilih `Office LTSC Professional Plus 2024 - Volume License` (jangan pilih versi SPLA).
- Anda bisa menambahkan Visio dan Project jika diperlukan, pastikan bahasa yang didukung untuk [Project](https://learn.microsoft.com/en-us/projectonline/supported-languages-for-project-online) dan [Visio](https://support.microsoft.com/en-us/office/display-languages-supported-in-the-visio-desktop-app-a921983e-fd5d-45ef-8af1-cedf70c53d75) dipilih.
- Jika ingin mengunduh file Office untuk diinstal nanti, pastikan memilih nomor versi spesifik (bukan 'latest') di opsi `Select the version`.
- Hanya perlu mengkonfigurasi hingga bagian "Language". Sisanya bisa dibiarkan default.
- Klik tombol export, pilih "Keep Current Settings" untuk mengunduh file `Configuration.xml` (jika namanya berbeda, ubah menjadi `Configuration.xml`).
- Salin file `Configuration.xml` ke folder Office tadi, contoh: `C:\Office\Configuration.xml`

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="direct_install" label="Instal Langsung" default>

📌 Buka **command prompt** (bukan Powershell) **sebagai admin** dan jalankan perintah:
  ```cmd
    cd /d C:\Office\
    setup.exe /configure Configuration.xml
  ```
⚠️ Sekarang akan menginstal Office.

</TabItem>

<TabItem value="download_and_install" label="Unduh lalu Instal" default>

💡 Pastikan Anda telah memilih nomor versi tertentu dalam konfigurasi sesuai langkah-langkah di atas.

📌 Buka **command prompt** (bukan Powershell) **sebagai admin** dan jalankan perintah di bawah ini Unduh file Office
  ```cmd
    cd /d C:\Office\
    setup.exe /download Configuration.xml
  ```

🔧 Untuk menginstal dari file yang telah diunduh (bisa dilakukan offline):
 ```cmd
 cd /d C:\Office\
 setup.exe /configure Configuration.xml
 ```

</TabItem>
</Tabs>

---

:::tip[Error umum] 
* Pastikan menjalankan perintah di command prompt (CMD) sebagai admin. 
* Ekstensi file sering tersembunyi di Windows, sehingga beberapa orang mungkin salah memberi nama `Configuration.xml.xml` karena `.xml` tidak terlihat. 
:::

------------------------------------------------------------------------

## Metode Alternatif

-   [YAOCTRU](https://github.com/abbodi1406/WHD/raw/master/scripts/YAOCTRU_v10.0.zip) (Pengunduh Office) & [YAOCTRI](https://github.com/abbodi1406/WHD/raw/master/scripts/YAOCTRI_v11.1.zip) (Pemasang Office)
-   [Office Tool Plus](http://otp.landian.vip/)

------------------------------------------------------------------------

## Butuh bantuan?

-   Cek [disini](troubleshoot.md).
