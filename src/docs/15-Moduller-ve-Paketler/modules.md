# Modüller ve Paketler

Kodlarınız binlerce satıra ulaştığında onları tek bir dosyada tutmak imkansızdır. Modüller, kodunuzu mantıklı parçalara bölmenizi; paketler ise bu modülleri bir klasör yapısında toplamanızı sağlar.

### 1. Kendi Modülünü Oluşturma

Python'da her `.py` dosyası aslında bir modüldür.

**Örnek:** `hesapla.py` adında bir dosyan olsun:

```python
def kdv_ekle(fiyat):
    return fiyat * 1.20

```

Bu modülü ana programında (`main.py`) şu şekilde kullanırsın:

```python
import hesapla

sonuc = hesapla.kdv_ekle(100)
print(f"KDV'li Fiyat: {sonuc}")

```

### 2. 'from' ve 'as' Kullanımı

Modülün tamamını değil de sadece belirli bir parçasını çağırmak veya modüle kısa bir isim vermek için kullanılır.

```python
from math import sqrt  # Sadece karekök fonksiyonunu al
import random as rastgele # Modüle takma ad ver

print(sqrt(25))
print(rastgele.randint(1, 10))

```

### 3. Hazır (Standart) Modüller

Python, içinde "pil dahil" felsefesiyle birçok hazır araçla gelir:

- **os:** Dosya ve klasör işlemleri.
- **datetime:** Tarih ve saat yönetimi.
- **sys:** Python sistem ayarları.

```python
import os

print(f"Su anki klasor: {os.getcwd()}")

```

### 4. Pip ve Harici Paketler

Eğer Python'ın içinde olmayan bir özelliği (örneğin yapay zeka veya gelişmiş grafik) kullanmak istersen, dünyadaki diğer yazılımcıların yazdığı paketleri **pip** ile indirirsin.

```bash
# Terminale yazilir:
pip install requests

```

### 5. **name** == "**main**" Kavramı

Bir dosyanın doğrudan mı çalıştırıldığını yoksa başka bir yerden mi çağrıldığını anlamak için kullanılır.

```python
def ana_islem():
    print("Bu dosya dogrudan calistirildi!")

if __name__ == "__main__":
    ana_islem()

```

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> Bir modülü <code>import</code> ettiğimizde içindeki kodlar ne zaman çalışır?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Modül ilk kez <code>import</code> edildiği anda yukarıdan aşağıya doğru bir kez çalıştırılır. Sonraki çağırmalarda tekrar çalışmaz, bellekten okunur.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> <code>pip</code> nedir?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Python'ın paket yönetim sistemidir. İnternet üzerindeki binlerce hazır kütüphaneyi bilgisayarınıza tek komutla kurmanızı sağlar.
</div>
</details>
</div>
