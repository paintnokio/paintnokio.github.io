# Parameter Command Line

## Daftar Parameter

- Parameter di bawah ini dapat digunakan dalam MAS AIO, versi file terpisah, dan one-liner Powershell untuk menjalankan dalam mode unattended.
- Untuk pre-activate Windows menggunakan MAS, lihat halaman [ini](oem_folder.md) untuk detail lebih lanjut.

### HWID

| Parameter                | Keterangan                                                                                                                                                                                   |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/HWID`                 | Aktivasi dengan HWID                                                                                                                                                                       |
| `/HWID-NoEditionChange` | Beberapa edisi tidak mendukung HWID, sehingga secara default script akan mengubah edisi ke edisi terdekat yang tersedia. Parameter ini menjalankan HWID tanpa mengubah edisi.             |

### Ohook

| Parameter           | Keterangan                          |
|--------------------|------------------------------------|
| `/Ohook`           | Instal Ohook untuk aktivasi Office |
| `/Ohook-Uninstall` | Uninstall Ohook                    |

### TSforge

| Parameter                     | Keterangan                                                                                                                                                                                 |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/Z-Windows`                 | Aktivasi hanya Windows dengan TSforge                                                                                                                                                     |
| `/Z-ESU`                     | Aktivasi hanya ESU dengan TSforge                                                                                                                                                         |
| `/Z-Office`                  | Aktivasi hanya Office dengan TSforge                                                                                                                                                      |
| `/Z-ProjectVisio`            | Aktivasi hanya Project/Visio dengan TSforge                                                                                                                                               |
| `/Z-WindowsESUOffice`        | Aktivasi semua (Windows/ESU/Office) dengan TSforge                                                                                                                                        |
| `/Z-WinHost`                 | Aktivasi hanya Windows KMS Host dengan TSforge                                                                                                                                            |
| `/Z-OffHost`                 | Aktivasi hanya Office KMS Host dengan TSforge                                                                                                                                             |
| `/Z-APPX`                    | Aktivasi hanya 8/8.1 APPXLOB dengan TSforge                                                                                                                                               |
| `/Z-ID-ActivationIdGoesHere` | Menentukan Activation ID untuk aktivasi (ganti 'ActivationIdGoesHere' dengan ID yang sesuai). Untuk multiple ID, gunakan parameter terpisah untuk masing-masing ID                        |
| `/Z-Reset`                   | Reset counter rearm, periode evaluasi dan bersihkan tamper state, key lock                                                                                                               |

### KMS38

| Parameter                  | Keterangan                                                                                                                                                                               |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/KMS38`                  | Aktivasi dengan KMS38                                                                                                                                                                  |
| `/KMS38-NoEditionChange`  | Beberapa edisi tidak mendukung KMS38. Parameter ini menjalankan KMS38 tanpa mengubah edisi.                                                                                            |
| `/KMS38-RemoveProtection` | Hapus proteksi KMS38                                                                                                                                                                   |

### Online KMS

| Parameter                      | Keterangan                                                                                                                                                                             |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/K-Windows`                  | Aktivasi hanya Windows dengan Online KMS                                                                                                                                              |
| `/K-Office`                   | Aktivasi hanya Office dengan Online KMS                                                                                                                                               |
| `/K-ProjectVisio`             | Aktivasi hanya Project/Visio dengan Online KMS                                                                                                                                        |
| `/K-WindowsOffice`            | Aktivasi semua (Windows dan Office) dengan Online KMS                                                                                                                                 |
| `/K-NoEditionChange`          | Mencegah perubahan edisi otomatis untuk aktivasi KMS                                                                                                                                  |
| `/K-NoRenewalTask`            | Tidak menginstal task auto-renewal secara otomatis                                                                                                                                   |
| `/K-Uninstall`                | Uninstall Online KMS termasuk renewal tasks                                                                                                                                           |
| `/K-Server-YOURKMSSERVERNAME` | Menentukan alamat server KMS (ganti 'YOURKMSSERVERNAME' dengan nama server)                                                                                                          |
| `/K-Port-YOURPORTNAME`        | Menentukan port untuk aktivasi (ganti 'YOURPORTNAME' dengan nomor port)                                                                                                              |

```
/S
Jalankan operasi dalam mode silent (tanpa output tetapi jendela CMD tetap muncul)
```


------------------------------------------------------------------------

## Penggunaan dalam Powershell One-Liner

`& ([ScriptBlock]::Create((irm https://get.activated.win))) /parameter`

- Ganti `/parameter` dengan parameter dari tabel di atas. Dapat menggunakan multiple parameter, contoh: `/HWID /Ohook`
- One-liner Powershell ini hanya bekerja pada Windows 8.1 dan versi lebih baru.
- Untuk mengubah edisi melalui command line, lihat [di sini](#). Tidak diotomatisasi dalam MAS karena memerlukan reboot dalam beberapa kasus.

------------------------------------------------------------------------

## Aturan Penggunaan

- Script akan berjalan dalam mode unattended jika ada parameter yang digunakan.
- Parameter `/S` tidak berlaku untuk versi file terpisah MAS.
- Semua parameter tidak case-sensitive dan bisa dalam urutan apapun, tetapi harus dipisahkan dengan spasi.
- Parameter uninstall KMS akan diutamakan daripada parameter KMS lainnya.
- Parameter remove protection KMS38 akan diutamakan daripada parameter aktivasi KMS38.

------------------------------------------------------------------------

## Butuh Bantuan?

- Cek [di sini](troubleshoot.md).