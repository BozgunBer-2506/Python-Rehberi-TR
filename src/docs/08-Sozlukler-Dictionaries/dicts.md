# Sözlükler (Dictionaries)

Sözlükler, verileri **Anahtar-Değer (Key-Value)** çiftleri halinde saklayan, sırasız (Python 3.7+ sonrası sıralı gibi görünse de anahtar odaklıdır) ve değiştirilebilir bir veri yapısıdır. Gerçek hayattaki bir sözlükte kelimeyi (anahtar) arayıp anlamını (değer) bulmanıza benzer.

### 1. Sözlük Tanımlama ve Veriye Erişim

Sözlükler süslü parantez `{}` ile tanımlanır. Her anahtar ve değer arasına `:` konur.

- **Anahtar (Key):** Benzersiz olmalıdır ve değiştirilemez (immutable) tiplerden (str, int) seçilir.
- **Değer (Value):** Herhangi bir veri tipi olabilir (liste, başka bir sözlük vb.).

```python
ogrenci = {
    "ad": "Baris",
    "numara": 105,
    "notlar": [85, 90, 100]
}

print(f"Öğrenci Adı: {ogrenci['ad']}")
print(f"Matematik Notu: {ogrenci['notlar'][0]}")

```

**Çıktı:**

```text
Öğrenci Adı: Baris
Matematik Notu: 85

```

### 2. Veri Ekleme, Güncelleme ve Silme

Sözlükler **Mutable** (değiştirilebilir) yapılardır.

```python
araba = {"marka": "Toyota", "yil": 2020}

# Güncelleme
araba["yil"] = 2026

# Yeni anahtar ekleme
araba["renk"] = "Mavi"

# Silme
del araba["marka"]
puan = araba.pop("yil") # Siler ve silinen değeri döndürür

print(f"Sözlük Son Hali: {araba}")

```

**Çıktı:**

```text
Sözlük Son Hali: {'renk': 'Mavi'}

```

### 3. Sözlük Metotları

Veriler üzerinde gezinmek veya kontrol yapmak için kullanılır:

| Metot       | Görevi                                                         |
| ----------- | -------------------------------------------------------------- |
| `.keys()`   | Sözlükteki tüm anahtarları bir liste gibi döndürür.            |
| `.values()` | Sözlükteki tüm değerleri döndürür.                             |
| `.items()`  | Anahtar ve değerleri çiftler (tuple) halinde döndürür.         |
| `.get(key)` | Anahtar yoksa hata vermek yerine `None` döndürür (Güvenlidir). |
| `.update()` | Bir sözlüğü başka bir sözlükle birleştirir.                    |

```python
sozluk = {"a": 1, "b": 2}

# Güvenli erişim
print(sozluk.get("c")) # Hata vermez, None döner
print(sozluk.get("c", "Bulunamadı")) # Varsayılan değer atanabilir

```

**Çıktı:**

```text
None
Bulunamadı

```

### 4. İç İçe (Nested) Sözlükler

Karmaşık verileri (örneğin bir kullanıcı veritabanı) saklamak için kullanılır.

```python
kullanicilar = {
    "user101": {"ad": "Ali", "yas": 30},
    "user102": {"ad": "Can", "yas": 25}
}

print(f"User 102'nin adı: {kullanicilar['user102']['ad']}")

```

**Çıktı:**

```text
User 102'nin adı: Can

```

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> Bir sözlükte aynı isimde iki tane anahtar (Key) bulunabilir mi?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Hayır, anahtarlar <strong>benzersiz</strong> olmalıdır. Eğer aynı anahtara ikinci kez bir değer atarsanız, eski değer silinir ve üzerine yeni değer yazılır.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> Sözlüklerde <code>ogrenci["yas"]</code> yerine neden <code>ogrenci.get("yas")</code> kullanmak daha profesyoneldir?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Eğer "yas" anahtarı sözlükte yoksa, köşeli parantez kullanımı <strong>KeyError</strong> hatası vererek programı durdurur. <code>.get()</code> ise hata vermez, <code>None</code> döndürerek programın devam etmesini sağlar.
</div>
</details>
</div>
