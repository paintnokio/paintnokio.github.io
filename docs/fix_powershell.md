# Perbaiki PowerShell

Skrip mungkin menampilkan kesalahan terkait Powershell yang tidak berfungsi.

---

## Bahasa Terbatas

-  Jika skrip menampilkan `Bahasa Terbatas` dalam output kesalahan, buka command prompt sebagai admin dan masukkan,

```
reg delete "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v "__PSLockdownPolicy" /f
```

-  Coba lagi skripnya, kesalahan seharusnya sudah diperbaiki.

---

## Kesalahan Lainnya

Silakan terhubung dengan kami [disini](troubleshoot.md).
