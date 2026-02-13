# Döngüler (Loops)

Döngüler, belirli bir kod bloğunun istediğimiz şartlar sağlandığı sürece tekrar tekrar çalıştırılmasını sağlar. Manuel olarak 100 kere `print` yazmak yerine, döngüyle bunu 2 satırda hallederiz.

### 1. For Döngüsü

`for` döngüsü; listeler veya metinler gibi "sıralı" nesnelerin her bir elemanı üzerinde gezmek için kullanılır.

```python
meyveler = ["Elma", "Muz", "Kivi"]

for meyve in meyveler:
    print(f"Listeden çekilen meyve: {meyve}")

```

### 2. range() Fonksiyonu

Belirli bir sayı aralığında dönmek istiyorsak `range()` kullanırız.
**Formül:** `range(başlangıç, bitiş, adım)`

```python
# 1'den 10'a kadar (10 hariç) 2'şer atlayarak yazdır
for sayi in range(1, 10, 2):
    print(f"Sayı: {sayi}")

```

### 3. While Döngüsü

`while` döngüsü, bir şart **True** (doğru) olduğu sürece çalışmaya devam eder. Şart **False** olduğu anda döngü durur.

```python
sayac = 1

while sayac <= 3:
    print(f"Döngü turu: {sayac}")
    sayac += 1 # Bu satır olmazsa döngü sonsuza girer!

```

### 4. Döngü Kontrol Anahtarları

- **break:** Döngüyü o anda tamamen durdurur ve döngüden çıkar.
- **continue:** Döngünün o turunu atlar, geri kalan kodları çalıştırmaz ve bir sonraki turdan devam eder.

```python
for i in range(1, 6):
    if i == 3:
        continue # 3 numarasını ekrana yazmadan geçer
    if i == 5:
        break    # 5'e gelince döngüden tamamen çıkar
    print(f"Sayı: {i}")

```

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> <code>for i in range(5):</code> döngüsü bittiğinde <code>i</code> değişkeninin değeri en son kaç olur?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Sonuç <strong>4</strong> olur. Python 0'dan saymaya başladığı için 0, 1, 2, 3, 4 değerlerini alır; 5 (bitiş değeri) dahil edilmez.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> <code>while True:</code> şeklinde başlayan bir döngü nasıl durdurulur?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Döngü bloğunun içine belirli bir şart gerçekleştiğinde çalışan bir <strong><code>break</code></strong> komutu ekleyerek durdurulur.
</div>
</details>
</div>
