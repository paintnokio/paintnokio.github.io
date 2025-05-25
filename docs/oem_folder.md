# OEM Folders

To create a pre-activated Windows installation ISO, do the following:
-   Extract the `$OEM$` folder to the desktop using the MAS script.
-   Copy the `$OEM$` folder to the `sources` folder in the Windows installation media (ISO or USB).
-   The directory will appear like this: `\sources\$OEM$` in your altered ISO or on your bootable USB drive.
-   Now use this ISO or bootable USB drive to install Windows, it will either already be activated (KMS38) as soon as it boots or will self-a# Folder OEM

Untuk membuat ISO instalasi Windows yang sudah di-pre-activate, lakukan hal berikut:
- Ekstrak folder `$OEM$` ke desktop menggunakan script MAS.
- Salin folder `$OEM$` ke folder `sources` di media instalasi Windows (ISO atau USB).
- Direktori akan terlihat seperti ini: `\sources\$OEM$` di ISO yang telah dimodifikasi atau di USB drive bootable.
- Gunakan ISO atau USB drive bootable ini untuk menginstal Windows, sistem akan langsung teraktivasi (KMS38) saat booting pertama kali atau akan mengaktivasi diri sendiri (HWID atau Online KMS) saat pertama kali terhubung internet.
- Anda dapat memeriksa detail metode aktivasi [di sini](intro.md).

:::warning

- Pada Windows 8 dan yang lebih baru, [**menjalankan setupcomplete.cmd dinonaktifkan**](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/add-a-custom-script-to-windows-setup?view=windows-11#windows-setup-scripts) jika kunci default yang terinstal untuk edisi tersebut berasal dari channel OEM, kecuali untuk edisi Enterprise dan Windows Server.
- Namun, di Windows 10, edisi IoT Enterprise tidak termasuk dalam daftar kategori Enterprise selama proses instalasi. Akibatnya, Enterprise dengan kunci OEM dapat menangani setupcomplete.cmd, tetapi IoT Enterprise (LTSC) tidak bisa. Ini diperbaiki di versi Windows 11 yang lebih baru.
- Di Windows 10 IoT Enterprise (LTSC), Anda dapat mengatasi masalah ini dengan menggunakan ISO Windows 10 Enterprise LTSC Non-IoT. Dalam kasus ini, metode HWID dalam preactivation akan menginstal kunci IoT LTSC untuk mengubah edisi dan mengaktifkan aktivasi HWID.  
- Di Windows 11 IoT Enterprise (LTSC), ini berfungsi dengan baik seperti yang diharapkan secara default.

:::

------------------------------------------------------------------------

## Edit File ISO

- Seperti yang disebutkan di atas, Anda dapat menyalin folder `$OEM$` ke USB bootable sehingga Anda tidak perlu mengedit file ISO. Namun, jika Anda perlu melakukannya, ikuti langkah-langkah di bawah ini.
- Unduh [AnyBurn Free Portable](https://www.anyburn.com/download.php) dan ekstrak file zip.
- Jalankan file bernama `AnyBurn(64-bit)\AnyBurn.exe`.
- Pilih opsi bernama `Edit image file`.
- Ikuti instruksi di layar dan tambahkan folder `$OEM$` ke folder `sources` sehingga direktori akan terlihat seperti ini: `\sources\$OEM$`.
- Simpan ISO, selesai.

------------------------------------------------------------------------

## KMS38 - Server Cor/Acor

- Edisi Windows Server Cor/Acor (No GUI) tidak memiliki file `clipup.exe`.
- Untuk mengaktifkan KMS38, Anda perlu mengunduh file `ClipUp.exe` yang hilang dari [tautan ini](https://app.box.com/s/cwoxub9tqyowhnyva6ign6qnogb6vk0o).  
  `File: ClipUp.exe`  
  `SHA-256: 0d6e9f6bbd0321eda149658d96040cb4f79e0bd93ba60061f25b28fecbf4d4ef`  
  File ini memiliki tanda tangan digital yang dapat diverifikasi. Anda juga bisa mendapatkan file ini dari [Windows Server 2016 x64 RTM ISO resmi](https://download.microsoft.com/download/1/6/F/16FA20E6-4662-482A-920B-1A45CF5AAE3C/14393.0.160715-1616.RS1_RELEASE_SERVER_EVAL_X64FRE_EN-US.ISO).
- Letakkan `ClipUp.exe` di sebelah script aktivasi KMS38. Ini bisa berupa `MAS_AIO.cmd` atau `KMS38_Activation.cmd`.
- Script aktivasi akan memeriksa `ClipUp.exe` di folder saat ini (dari mana script dijalankan) dan akan menggunakannya sesuai kebutuhan.

------------------------------------------------------------------------

## Preinstall Office

- Ikuti [panduan ini](https://gravesoft.dev/office_c2r_custom) dan unduh file Office.
- Salin folder `Office` yang telah diunduh, file `setup.exe` dan `Configuration.xml`, lalu tempelkan ke dalam folder $OEM$, di sebelah file `setupcomplete.cmd`.
- Buka file `setupcomplete.cmd` dengan notepad dan tambahkan baris berikut setelah baris `fltmc >nul || exit /b`.
	```
	cd /d "%~dp0"
	setup.exe /configure Configuration.xml
	```
- Simpan folder $OEM$ ke dalam ISO sesuai petunjuk di atas, selesai.## HWID

- Saat menggunakan aktivasi HWID, tidak ada file yang disimpan di sistem, dan Windows 10-11 akan diaktifkan saat terhubung ke internet untuk pertama kalinya.

------------------------------------------------------------------------

## Ohook

- Jika Office telah di-preinstal, metode Ohook akan mengaktifkan Office segera tanpa internet. Aktivasi ini menggunakan file sppc.dll khusus untuk aktivasi.

------------------------------------------------------------------------

## TSforge

- Saat menggunakan aktivasi TSforge, tidak ada file yang disimpan di sistem, dan Windows / ESU / Office (yang telah di-preinstal) akan diaktifkan segera tanpa internet.

------------------------------------------------------------------------

## KMS38

- Saat menggunakan aktivasi KMS38, tidak ada file yang disimpan di sistem, dan Windows 10-11-Server akan diaktifkan segera tanpa internet.

------------------------------------------------------------------------

## Online KMS

- Saat menggunakan aktivasi Online KMS, Windows-Server dan Office (yang telah di-preinstal) keduanya akan diaktifkan saat terhubung ke internet untuk pertama kalinya. Opsi ini menggunakan task renewal untuk aktivasi seumur hidup.

------------------------------------------------------------------------

## HWID + Ohook

- Dalam metode ini, Windows 10-11 akan diaktifkan dengan HWID, dan **Office** (yang telah di-preinstal) akan diaktifkan menggunakan Ohook.

------------------------------------------------------------------------

## HWID + Ohook + TSforge

- Dalam metode ini, Windows 10-11 akan diaktifkan dengan HWID, **Office** (yang telah di-preinstal) akan diaktifkan menggunakan Ohook, dan Windows ESU akan diaktifkan dengan TSforge.

------------------------------------------------------------------------

## TSforge + Online KMS

- Dalam metode ini, Windows akan diaktifkan dengan TSforge, dan **Office** (yang telah di-preinstal) akan diaktifkan menggunakan Online KMS.

------------------------------------------------------------------------