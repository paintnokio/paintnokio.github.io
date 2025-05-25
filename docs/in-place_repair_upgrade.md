# Perbaikan Sistem
*(Menyimpan file dan aplikasi)*

---

## 📌 Cara Melakukan In-Place Repair Upgrade
Metode ini menggunakan file ISO Windows untuk memperbaiki error sistem tanpa menghapus data pribadi.

### 🔧 Langkah-Langkah:

1. **Unduh ISO Windows**  
   - Rekomendasi sumber: [MSDL](https://msdl.devcomp.fun/)
   - Pastikan memilih:
     - **Versi bahasa** yang sama dengan sistem saat ini
     - **Arsitektur** (32-bit/64-bit) yang sesuai

2. **Cek Spesifikasi Sistem**  
   - **Arsitektur**: Buka PowerShell sebagai Admin, jalankan:
     ```powershell
     (Get-ItemProperty "HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\Environment").PROCESSOR_ARCHITECTURE
     ```
     - `AMD64/x64` = 64-bit | `x86` = 32-bit

   - **Bahasa Sistem**: Jalankan salah satu perintah:
     ```cmd
     dism /english /online /get-intl | find /i "Default system UI language"
     ```
     **ATAU**
     ```powershell
     [Globalization.CultureInfo]::GetCultureInfo([Convert::ToInt32((Get-ItemProperty "HKLM:\SYSTEM\CurrentControlSet\Control\Nls\Language").InstallLanguage, 16)).Name
     ```

   ⚠️ Catatan:  
   - Untuk edisi **Enterprise LTSC**, gunakan ISO khusus edisi tersebut
   - Hindari versi **Evaluation** (tidak bisa diaktivasi)

3. **Mount ISO**  
   - Klik kanan file ISO > **Open With** > Windows Explorer
   - Drive virtual DVD akan muncul jika berhasil

<details>
  <summary>🔧 Solusi untuk Windows 11 di Hardware Tidak Didukung</summary>

  Jika mengalami error karena hardware tidak memenuhi syarat:
  1. Gunakan edisi **IoT Enterprise 24H2 (2024)** yang [resmi didukung](https://learn.microsoft.com/en-us/windows/iot/iot-enterprise/Hardware/System_Requirements?tabs=Windows11LTSC#optional-minimum-requirements)
  2. Buka Command Prompt sebagai Admin
  3. Sesuaikan perintah dengan ISO yang digunakan:
     - Untuk Windows 11 24H2 biasa:
       ```cmd
       reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d IoTEnterprise /f
       ```
     - Untuk Windows 11 LTSC 2024:
       ```cmd
       reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d IoTEnterpriseS /f
       ```
  4. Segera jalankan setup.exe setelahnya
</details>

4. **Jalankan Setup**  
   - Buka drive virtual > jalankan **setup.exe**
   - Pastikan di layar konfirmasi terakhir tertulis:  
     **"Keep personal files and apps"**
   - Lanjutkan proses dan tunggu hingga selesai

---

:::tip 💡 Tips Penting
- Jika tidak ada opsi "Keep files and apps" atau muncul error,  
  [hubungi kami](troubleshoot.md) untuk bantuan
:::