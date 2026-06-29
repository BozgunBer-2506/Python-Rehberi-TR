# Dosya İşlemleri

Şu ana kadar yaptığımız her şey bilgisayarın geçici belleğinde (RAM) duruyordu. Dosya işlemleri sayesinde verileri sabit diske kaydedebilir ve daha sonra tekrar okuyabiliriz.

### 1. Dosya Açma ve Kapatma

Python'da bir dosyayı açmak için `open()` fonksiyonu kullanılır. Dosyayla işimiz bittiğinde `close()` ile kapatmamız gerekir (hafızayı yormamak için).

**Dosya Açma Modları:**

- `'r'`: Okuma (Read) - Dosya yoksa hata verir.
- `'w'`: Yazma (Write) - Dosya varsa içini siler, yoksa yeni oluşturur.
- `'a'`: Ekleme (Append) - Mevcut verinin sonuna ekleme yapar.

> **Not:** `open()` fonksiyonunda her zaman `encoding="utf-8"` belirtin. Belirtilmezse Python işletim sisteminin varsayılan kodlamasını kullanır; Windows'ta bu genellikle cp1252 veya cp1254 olur ve Türkçe karakterler (ş, ğ, ı, İ, ö, ü, ç) bozulur ya da `UnicodeDecodeError` alınır. Aynı kod Linux/Mac'te sorunsuz çalışsa da Windows'ta patlayabilir.

```python
dosya = open("notlar.txt", "w", encoding="utf-8")
dosya.write("Baris - Python Ogreniyor (2026)")
dosya.close()

```

### 2. 'with' Yapısı (En Güvenli Yol)

`close()` komutunu unutmak bazen dosyanın bozulmasına neden olabilir. `with` kullandığımızda, işlem bittiği an Python dosyayı bizim yerimize otomatik kapatır.

```python
with open("notlar.txt", "r", encoding="utf-8") as dosya:
    icerik = dosya.read()
    print(icerik)
# Burada dosya otomatik olarak kapandi bile!

```

### 3. Satır Satır Okuma

Büyük dosyalarda tüm içeriği bir anda okumak yerine satır satır okumak daha mantıklıdır.

```python
with open("ogrenciler.txt", "r", encoding="utf-8") as dosya:
    for satir in dosya:
        print(f"Sıradaki satır: {satir.strip()}")

```

### 4. Dosya Silme ve Kontrol (os Modülü)

Bir dosyanın var olup olmadığını kontrol etmek veya dosyayı silmek için `os` modülünü kullanırız.

```python
import os

if os.path.exists("eski_dosya.txt"):
    os.remove("eski_dosya.txt")
    print("Dosya silindi.")
else:
    print("Dosya bulunamadi.")

```

### 5. JSON Dosyalarıyla Çalışmak

Modern programlamada (ve 2026 standartlarında) veriler genellikle düz metin yerine JSON formatında saklanır.

```python
import json

kullanici = {"ad": "Barış", "puan": 100}

# Dosyaya yazma
# ensure_ascii=False: Türkçe karakterleri \uXXXX olarak escape etmez, okunabilir tutar.
# encoding="utf-8": ensure_ascii=False ile birlikte kullanılmalıdır.
with open("veri.json", "w", encoding="utf-8") as f:
    json.dump(kullanici, f, ensure_ascii=False, indent=2)

# Dosyadan okuma
with open("veri.json", "r", encoding="utf-8") as f:
    data = json.load(f)
    print(data["ad"])

```

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> <code>'w'</code> modu ile <code>'a'</code> modu arasındaki en kritik fark nedir?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
<code>'w'</code> (write) dosyayı her seferinde sıfırdan oluşturur, içindeki eski verileri siler. <code>'a'</code> (append) ise eski verilere dokunmaz, yeni veriyi en sona ekler.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> Neden <code>read()</code> yerine döngü ile okumayı tercih etmeliyiz?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Eğer dosya çok büyükse (örneğin 5 GB), <code>read()</code> tüm dosyayı RAM'e yüklemeye çalışır ve bilgisayarı kilitler. Döngü ise her seferinde sadece bir satırı belleğe aldığı için çok daha güvenlidir.
</div>
</details>
</div>
