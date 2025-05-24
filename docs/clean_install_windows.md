# Instal Windows

Panduan tentang cara mencadangkan data dan menginstal ulang Windows.

---

## Prasyarat

- File ISO Windows asli, Anda dapat mengunduhnya dari https://paintnokio.github.io/microsoft-download-list/
- Versi terbaru Rufus dari https://rufus.ie/
- Drive USB minimal 8GB 
- Ikuti [panduan] ini(remove_malware.md) sebelum membuat USB yang dapat di-boot jika Anda merasa sistem tersebut terkena malware.

<details>
  <summary>Sistem bersih lainnya jika sistem Anda saat ini terinfeksi dengan malware File infector.</summary>

**Mengapa?** 
  Karena malware penginfeksi file dapat menyalin dirinya sendiri ke USB yang dapat di-boot yang akan Anda buat untuk melakukan instalasi bersih.
  Anda perlu menggunakan sistem bersih lain untuk membuat USB yang dapat di-boot dan mencolokkannya ke sistem yang terinfeksi saat ini hanya jika tidak menjalankan Windows secara langsung. 
**Bagaimana cara memeriksa apakah Anda memiliki malware penginfeksi file?** 
  Buka PowerShell sebagai admin dan masukkan
  `sc.exe start "sppsvc" > $null 2>&1; Write-Host "Error code: $LASTEXITCODE"`  
  If the output is 577 or 225, then most likely chances are that the system is infected with File infector malware. 
  
**Bagaimana jika Anda tidak memiliki sistem bersih lainnya?**
  Anda dapat mencoba Dr.Web https://free.drweb.com/download+cureit/gr untuk menghapus malware penginfeksi file. Namun dalam beberapa kasus, mungkin tidak dapat menghapus semuanya, oleh karena itu sebaiknya buat USB yang dapat di-boot pada sistem lain yang bersih.

</details>

---

## Cadangkan data Anda

Proses instalasi bersih akan memformat drive C tempat Windows diinstal; jika Anda memiliki data apa pun di drive C, Anda perlu mencadangkannya.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="multiple_partition" label=" Contoh, Seperti C:\ D:\ Dua Drive" default>
Anda dapat menyalin data dari drive C dan menempelkannya ke partisi lain.
Data Anda biasanya terletak di tempat berikut pada drive C.
Buka folder ini `C:\Users` lalu pilih akun pengguna yang Anda gunakan.
Data Anda disimpan di folder Desktop, Documents, Downloads, Music, Pictures, dan Videos.
Simpan folder ini di partisi lain untuk dicadangkan.
  </TabItem>
  <TabItem value="one_partition" label="Contoh, Seperti C:\ Satu Drive">
Data Anda biasanya terletak di tempat berikut pada drive C, 
Buka folder ini `C:\Users` lalu pilih akun pengguna yang Anda gunakan.
Data Anda disimpan di folder Desktop, Documents, Downloads, Music, Pictures, dan Videos.
Jika Anda memiliki **sedikit data** untuk dicadangkan, simpan di drive online yang tercantum di bawah ini atau drive USB setelah membuatnya dapat di-boot dengan Rufus.
Jika Anda memiliki **banyak data** yang tidak dapat disimpan di drive eksternal atau drive online, 
Buat partisi lain menggunakan panduan ini https://youtu.be/_HgjasKuOBw
Simpan data Anda ke partisi lain yang baru dibuat.
  </TabItem>
</Tabs>

---

:::tip

Sangat disarankan untuk mencadangkan data penting Anda pada beberapa drive online juga, misalnya, 
[GoogleDrive](https://drive.google.com/) - 15GB Free  
[OneDrive](https://onedrive.live.com/) - 5GB Free  
[Mega](https://mega.io/) - 20GB Free  
[Filen](https://filen.io/) - 10GB Free  

:::

---

## Buat USB yang dapat di-boot dengan Rufus

- Hubungkan drive USB Anda ke sistem. (Datanya akan dihapus.)
- Luncurkan Rufus yang Anda unduh sebelumnya.
- Pada menu tarik-turun "Device", pilih flash drive USB Anda.
- Pemilihan Booting:
- Klik "SELECT" dan pilih berkas ISO Windows Anda. Rufus akan mengonfigurasi pengaturan optimal secara otomatis.
- Klik "START."
- Tunggu Rufus membuat USB yang dapat di-boot. Mungkin perlu waktu beberapa menit. Anda akan melihat "READY" setelah selesai.

---

## Windows 11 pada Perangkat Keras yang Tidak Didukung

<details>
  <summary>Klik di sini untuk melihat</summary>

- Rufus dapat membantu Anda menginstal Windows 11 pada perangkat keras yang tidak didukung, tetapi Anda akan mengalami masalah dengan pembaruan fitur di masa mendatang karena Microsoft tidak mengizinkannya pada perangkat keras tersebut.
- Untuk mengatasi masalah ini, Anda perlu menginstal IoT Enterprise 24H2 (2024) edition yang [didukung secara resmi](https://learn.microsoft.com/en-us/windows/iot/iot-enterprise/Hardware/System_Requirements?tabs=Windows11LTSC#optional-minimum-requirements) pada perangkat keras yang tidak didukung. Jangan khawatir karena ini adalah edisi yang tidak biasa; versi binernya identik dengan edisi lain, dengan perbedaan utama terletak pada lisensinya.
- Edisi IoT Enterprise ini hadir dalam 2 versi,
- IoT Enterprise (GAC, General Availability Channel)
- IoT Enterprise (LTSC, Long-Term Servicing Channel)
- Pertanyaan berikutnya, bagaimana cara menginstal edisi ini?
- Untuk versi GAC, Anda tidak memerlukan IoT Enterprise ISO, Anda cukup menggunakan Windows 11 24H2 consumer (tertaut di bagian atas) atau business ISO biasa.
- Untuk versi LTSC, Anda perlu mengunduh versi lengkap LTSC ISO (jangan gunakan eval), tidak harus IoT ISO, Anda dapat mengunduh LTSC ISO biasa dalam bahasa Anda.
  - Setelah mem-flash ISO yang diperlukan menggunakan Rufus, navigasikan ke `\sources\` 
folder pada drive USB dan buat file bernama `PID.txt` (pastikan ekstensi file sudah benar). Buka file ini dengan Notepad dan masukkan teks di bawah ini.

    - Untuk versi GAC  
	  ```
	  [PID]
	  Value=XQQYW-NFFMW-XJPBH-K8732-CKFFD
	  ```
    - Untuk versi LTSC 
	  ```
	  [PID]
	  Value=CGK42-GYN6Y-VD22B-BX98W-J8JXD
	  ```
- Saat menginstal Windows, pastikan untuk tidak menggunakan versi lama penginstal.
- Selesai. Pengaturan akan otomatis memilih edisi IoT Enterprise.

Atau, jika Anda tidak ingin melakukannya, Anda dapat menginstal Windows secara normal dan kemudian mengubah edisi ke IoT Enterprise.

</details>

---

## Daftar Edisi Selama Instalasi Windows

<details>
  <summary>CKlik di sini untuk melihat</summary>
  
- Jika sistem Anda memiliki lisensi OEM yang dipasang oleh produsen pada motherboard, maka pengaturan Windows tidak akan menampilkan daftar edisi dan akan secara otomatis memilih edisi berdasarkan lisensi pada motherboard.
- Jika Anda memiliki perangkat keras tersebut dan ingin melihat daftar edisi yang tersedia untuk instalasi Windows, ikuti langkah-langkah di bawah ini.
- Setelah mem-flash ISO yang diperlukan menggunakan Rufus, navigasikan ke `\sources\` 
folder pada drive USB dan buat file bernama `ei.cfg` (pastikan ekstensi file sudah benar). Buka file ini dengan Notepad dan masukkan teks di bawah ini.

```
[Channel]
NoKeyChannel
```
- Sekarang Anda dapat melihat daftar edisi dan memilih edisi yang Anda inginkan dari Windows Vista hingga Windows 11. Ini juga membantu Anda menghindari penginstalan kunci dalam pengaturan Windows 8/8.1 di mana penginstalan kunci tidak dapat dilewati.

**Catatan:** 
- Di Windows 11 24H2, penginstal baru tidak mendukung ini, jadi Anda perlu memilih opsi penginstal "lama" saat pengaturan dimulai.
- Jika Anda menggunakan PID.txt, harap perhatikan bahwa ini akan diutamakan daripada ei.cfg.

</details>

---

## Instal Bersih Windows

- Lepaskan semua drive eksternal atau internal yang tidak bisa di-boot untuk mengurangi risiko penginstalan.
- Nyalakan ulang PC Anda dan boot dari flash drive USB, biasanya diakses dengan menekan F11 atau F12 saat memulai. Jika tidak berhasil, cari di Google jenis perangkat yang Anda miliki diikuti dengan "tombol menu boot", misalnya, "tombol menu boot Asus Zephyrus G14" dan temukan hasil untuk nomor model Anda.
- Ikuti petunjuk di layar.
- Pilih "Kustom: Instal Windows saja (lanjutan)" untuk penginstalan bersih.
- Hapus semua partisi pada drive boot, atau jika Anda ingin menyimpan partisi data, hapus hanya drive C dan partisi sistem kecil lainnya, dan pilih ruang yang tidak terisi yang dibuat.
- Klik "Berikutnya" untuk memulai penginstalan. Windows akan secara otomatis membuat partisi yang diperlukan.

:::tip

- 
Anda dapat [terhubung dengan kami](troubleshoot.md) untuk bantuan jika Anda membutuhkan.

:::
