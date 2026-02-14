# Python Rehberi – Temel ve İleri Seviye

Bu rehber Python öğrenmek ve profesyonel seviyeye ulaşmak için hazırlanmış eksiksiz bir referanstır.

---

## Temel Seviye (Fundamentals)

Python'un çekirdek yapılarını içerir. Tüm Python kullanıcıları için gereklidir.

---

### Değişken Tanımlama

Python'da veri tipini belirtmek gerekmez.

```python
isim = "Aylin"
yas = 20
boy = 1.75
ogrenci = True

print(isim, yas, boy, ogrenci)
```

---

### print() Kullanımı

Ekrana çıktı verir.

```python
print("Merhaba Dünya")

isim = "Baris"
print("Merhaba", isim)

print(f"Merhaba {isim}")
```

---

### if / elif / else Kullanımı

Koşul kontrolü için kullanılır.

```python
notu = 85

if notu >= 90:
    print("AA")
elif notu >= 70:
    print("BB")
else:
    print("CC")
```

---

### for Döngüsü

Liste veya sayı aralığında döner.

```python
for i in range(5):
    print(i)
```

Liste ile kullanım:

```python
isimler = ["Ali", "Veli", "Ayşe"]

for isim in isimler:
    print(isim)
```

---

### while Döngüsü

Koşul doğru olduğu sürece çalışır.

```python
i = 0

while i < 5:
    print(i)
    i += 1
```

---

### Fonksiyon Tanımlama

Tekrar kullanılabilir kod bloklarıdır.

```python
def selam_ver(isim):
    print(f"Merhaba {isim}")

selam_ver("Baris")
```

---

### List Kullanımı

En önemli veri yapılarından biridir.

```python
sayilar = [10, 20, 30]

# Listeye eleman ekleme
sayilar.append(40)

print(sayilar)

# Eleman erişimi
print(sayilar[0])
```

---

### Dictionary Kullanımı

Anahtar-değer yapısıdır.

```python
kisi = {
    "isim": "Baris",
    "yas": 30,
    "meslek": "IT Admin"
}

print(kisi["isim"])
```

---

### try / except Kullanımı

Hata yakalamak için kullanılır.

```python
try:
    sayi = int(input("Sayı gir: "))
    print(sayi)
except ValueError:
    print("Hatalı giriş")
```

---

### import Kullanımı

Modül yüklemek için kullanılır.

```python
import math

print(math.sqrt(16))
```

---

## Pratik Kullanım (Practical Usage)

Günlük kullanımda ve projelerde kullanılan teknikler.

---

### input() Kullanımı

Kullanıcıdan veri alır.

```python
isim = input("İsim gir: ")
print(isim)
```

---

### type() Kullanımı

Veri tipini gösterir.

```python
x = 10
print(type(x))
```

---

### Tip Dönüştürme

```python
x = "10"
y = int(x)

print(y)
```

---

### Yorum Satırı

```python
# Bu bir yorumdur
```

---

### Girinti (Indentation)

Python blokları girinti ile belirlenir.

```python
if True:
    print("Blok içinde")

print("Blok dışında")
```

---

## İleri Seviye (Advanced)

Bu bölüm profesyonel geliştirme, otomasyon ve büyük projeler için gereklidir.

---

### Class (OOP – Object Oriented Programming)

```python
class Kisi:

    def __init__(self, isim):
        self.isim = isim

    def selam(self):
        print(f"Merhaba {self.isim}")

k = Kisi("Baris")
k.selam()
```

---

### Dosya Okuma

```python
with open("log.txt", "r") as f:
    for line in f:
        print(line)
```

---

### Dosya Yazma

```python
with open("output.txt", "w") as f:
    f.write("Merhaba Dünya")
```

---

### Modül Kullanımı

Kodları bölmek için kullanılır.

```python
import math

print(math.pi)
```

---

### pip ile Kütüphane Kurulumu

```bash
pip install requests
```

---

### List Comprehension

Daha kısa ve profesyonel list oluşturma yöntemidir.

```python
liste = [i for i in range(10)]

print(liste)
```

---

### Virtual Environment

Projeleri izole eder.

```bash
python -m venv venv
```

---

### JSON Kullanımı

API ve config işlemleri için kritik öneme sahiptir.

```python
import json

data = '{"isim":"Baris"}'

obj = json.loads(data)

print(obj["isim"])
```

---

### OS ve Sistem Komutları

```python
import os

os.system("ls")
```

---

### API Kullanımı

Modern otomasyonun temelidir.

```python
import requests

r = requests.get("https://api.github.com")

print(r.status_code)
```

---

# PROFESYONEL PYTHON İÇİN ÖNERİLEN ÖĞRENME SIRASI

1. Değişkenler
2. if / else
3. for / while
4. Fonksiyonlar
5. List ve Dictionary
6. Dosya işlemleri
7. JSON
8. API
9. Automation
10. OOP

---

# SONUÇ

Python kullanımı iki ana bölümden oluşur:

**Temel:**

- syntax
- loops
- functions
- list / dict
- import

**İleri:**

- OOP
- file handling
- JSON
- API
- automation

---

## Semboller ve Terimler (Glossary)

Bu bölüm Python'da kullanılan sembollerin ve terimlerin anlamlarını içerir.

---

### Temel Semboller

| Sembol   | Adı (EN)            | Adı (TR)               | Açıklama                    |
| -------- | ------------------- | ---------------------- | --------------------------- |
| =        | assignment operator | atama operatörü        | Değişkene değer atar        |
| ==       | equality operator   | eşitlik operatörü      | Eşit mi kontrol eder        |
| !=       | not equal operator  | eşit değil operatörü   | Eşit değil mi kontrol eder  |
| >        | greater than        | büyüktür               | Büyük mü kontrol eder       |
| <        | less than           | küçüktür               | Küçük mü kontrol eder       |
| >=       | greater or equal    | büyük eşit             | Büyük veya eşit mi          |
| <=       | less or equal       | küçük eşit             | Küçük veya eşit mi          |
| not      | logical NOT         | boolean tersi          | Tek başına `!` yerine geçer |
| !r,!s,!a | f-string conversion | f-string dönüşüm flags | f-string formatlama         |

---

### Matematik Operatörleri

| Sembol | Adı (EN)       | Açıklama |
| ------ | -------------- | -------- |
| +      | addition       | toplama  |
| -      | subtraction    | çıkarma  |
| \*     | multiplication | çarpma   |
| /      | division       | bölme    |
| %      | modulus        | kalan    |
| \*\*   | exponent       | üs alma  |

---

### Mantıksal Operatörler

| Kelime | Adı (EN)    | Açıklama |
| ------ | ----------- | -------- |
| and    | logical and | ve       |
| or     | logical or  | veya     |
| not    | logical not | değil    |

---

### Python Anahtar Kelimeleri

| Kelime | Adı (EN)            | Açıklama         |
| ------ | ------------------- | ---------------- |
| if     | if statement        | koşul            |
| elif   | else if             | alternatif koşul |
| else   | else statement      | aksi durumda     |
| for    | for loop            | döngü            |
| while  | while loop          | koşullu döngü    |
| def    | function definition | fonksiyon tanımı |
| class  | class definition    | sınıf tanımı     |
| import | import module       | modül yükleme    |
| try    | try block           | hata kontrol     |
| except | exception handler   | hata yakalama    |

---

### Özel Semboller

| Sembol | Adı          | Açıklama          |
| ------ | ------------ | ----------------- |
| :      | colon        | blok başlatır     |
| ()     | parentheses  | fonksiyon çağırma |
| []     | brackets     | liste             |
| {}     | braces       | dictionary        |
| ""     | double quote | string            |
| #      | comment      | yorum satırı      |

---

Bu rehber Python'da profesyonel seviyeye ulaşmak için eksiksiz bir temeldir.
