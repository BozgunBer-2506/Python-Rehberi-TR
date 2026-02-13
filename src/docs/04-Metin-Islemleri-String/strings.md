# Metin İşlemleri (Strings)

Python'da metinler (String), karakterlerden oluşan bir dizidir. Metinler üzerinde yapacağınız her işlem, metnin **Immutable** (değiştirilemez) doğası gereği size yeni bir metin nesnesi sunar.

### 1. İndeksleme (Indexing) ve Erişim

Metnin her bir karakterine bir sayı (indeks) ile ulaşılır. Python'da sayma **0**'dan başlar.

- **Pozitif İndeks:** Baştan sona doğru gider (0, 1, 2...).
- **Negatif İndeks:** Sondan başa doğru gelir (-1, -2, -3...).

```python
mesaj = "Python"
# P:0, y:1, t:2, h:3, o:4, n:5
# n:-1, o:-2, h:-3, t:-4, y:-5, P:-6

print(f"İlk harf: {mesaj[0]}")
print(f"Son harf: {mesaj[-1]}")

```

**Çıktı:**

```text
İlk harf: P
Son harf: n

```

### 2. İleri Seviye Dilimleme (Slicing)

Metnin bir parçasını almak için kullanılır.
**Formül:** `[başlangıç : bitiş : adım]`
_(Not: Bitiş indeksi dahil edilmez!)_

```python
kurs = "Python Programlama"

print(f"İlk 6 karakter: {kurs[:6]}")       # 0'dan 6'ya kadar
print(f"7. indeksten sonrası: {kurs[7:]}")  # 7'den sona kadar
print(f"İkişer atla: {kurs[::2]}")          # Baştan sona 2 şer adımla
print(f"Metni ters çevir: {kurs[::-1]}")     # Tersten yazdırır

```

**Çıktı:**

```text
İlk 6 karakter: Python
7. indeksten sonrası: Programlama
İkişer atla: Pto rgalm
Metni ters çevir: amalmargorP nohtyP

```

### 3. Kaçış Dizileri ve Çok Satırlı Metinler

Metin içinde özel komutlar vermek için `\` (backslash) kullanılır.

- `\n`: Alt satıra geçer.
- `\t`: Bir TAB kadar boşluk bırakır.
- `"""`: Üç tırnak kullanarak alt satıra geçen uzun metinler yazılabilir.

```python
notlar = """1. Ders: Python
2. Ders: Algoritmalar"""

print("Baris'in Notlari:\n" + notlar)

```

**Çıktı:**

```text
Baris'in Notlari:
1. Ders: Python
2. Ders: Algoritmalar

```

### 4. En Çok Kullanılan String Metotları

Python'da metinleri yönetmek için düzinelerce hazır metot vardır. En kritikleri şunlardır:

| Metot                   | Açıklama                                                           |
| ----------------------- | ------------------------------------------------------------------ |
| `.upper()` / `.lower()` | Tüm harfleri büyük veya küçük yapar.                               |
| `.strip()`              | Metnin başındaki ve sonundaki gereksiz boşlukları siler.           |
| `.replace(eski, yeni)`  | Belirli karakterleri başkalarıyla değiştirir.                      |
| `.split(ayirici)`       | Metni belirtilen karakterden bölüp bir **liste** döndürür.         |
| `.startswith(deger)`    | Metnin o değerle başlayıp başlamadığını kontrol eder (True/False). |

```python
ham_veri = "  elma,armut,muz  "
temiz_veri = ham_veri.strip()
meyveler = temiz_veri.split(",")

print(f"Temizlenmiş liste: {meyveler}")
print(f"Meyve sayısı: {len(meyveler)}")

```

**Çıktı:**

```text
Temizlenmiş liste: ['elma', 'armut', 'muz']
Meyve sayısı: 3

```

### 5. Metin Birleştirme (f-strings)

Modern Python'da metinleri birleştirmenin en profesyonel yolu f-string kullanmaktır.

```python
ad = "Baris"
puan = 95
print(f"Öğrenci: {ad} | Puan: {puan} | Durum: {'Başarılı' if puan >= 50 else 'Kaldı'}")

```

**Çıktı:**

```text
Öğrenci: Baris | Puan: 95 | Durum: Başarılı

```

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> <code>metin = "Kodlama"</code> değişkeninde <code>metin[1:6:2]</code> çıktısı nedir?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Sonuç <strong>"oda"</strong> olur.

- 1. indeks 'o'

- 2 atla -> 3. indeks 'd'

- 2 atla -> 5. indeks 'a'

6. indekse geldiğinde durur.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> <code>.split()</code> metodu her zaman hangi veri tipini döndürür?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Her zaman bir <strong>Liste (List)</strong> döndürür. Parçalanan her bir kelime bu listenin bir elemanı olur.
</div>
</details>
</div>
