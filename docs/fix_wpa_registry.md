# Perbaiki Registry WPA

- Dalam beberapa kasus, sistem mungkin memiliki kunci registry WPA yang rusak di `HKEY_LOCAL_MACHINE\SYSTEM\WPA` yang dapat menyebabkan:
  - Layanan `sppsvc` tidak berfungsi
  - Gagal aktivasi Windows
  - Penggunaan CPU tinggi oleh layanan `sppsvc`
- Jika Anda tidak yakin perlu melakukan ini atau tidak, bisa minta bantuan [di sini](troubleshoot.md).
- Kunci registry ini dilindungi kernel dan tidak bisa dihapus secara normal, sehingga perlu langkah khusus berikut.

---

## Langkah Memperbaiki Registry WPA

1. **Unduh File Perbaikan**:  
   [https://github.com/asdcorp/rearm/archive/refs/heads/principalis.zip](https://github.com/asdcorp/rearm/archive/refs/heads/principalis.zip)

2. **Ekstrak file ZIP** yang telah diunduh.

3. **Salin file `rearm.cmd`** ke root drive C:  
   (Contoh: `C:\rearm.cmd`)

4. **Buka Command Prompt sebagai Admin**, lalu jalankan:  
   ```cmd
   Shutdown /f /r /o /t 0

5. **Setelah restart**, pilih Troubleshoot > Advanced Options > Command Prompt.

6. **Jalankan perintah**  
    `C:\rearm.cmd`
    - Jika muncul error "command is not recognized", cek drive OS dengan:
    `bcdedit | find "osdevice"`
    - Gunakan huruf drive yang ditampilkan Contoh,  
    `E:\rearm.cmd`

7. **Tunggu proses selesai**:
    - Jika command prompt bisa digunakan lagi, artinya proses selesai
    - Jika belum, tunggu beberapa saat

8. Keluar dan boot Windows seperti biasa

9. Jika masih bermasalah, [hubungi kami](troubleshoot.md) untuk bantuan lebih lanjut.

------------------------------------------------------------------------

## Video Tutorial

import ReactPlayer from 'react-player'

<ReactPlayer controls width='100%' height='auto' url='/Fix_WPA_Registry.mp4' />
