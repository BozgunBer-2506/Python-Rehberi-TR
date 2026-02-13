# Sayılar ve Operatörler

Python'da sayılar, yüksek hassasiyetli nesnelerdir. Bu bölümde sadece temel matematiği değil, programlama dillerine özgü olan "tam bölme", "mod alma" ve "mantıksal karşılaştırma" gibi hayati operatörleri inceleyeceğiz.

### 1. Sayı Tipleri ve Özellikleri

- **Integer (int):** Tam sayılardır. Bellek yettiği sürece sınırsız büyüklükte olabilir.
- **Float (float):** Ondalıklı sayılardır. `3.14` gibi.
- **Complex:** Mühendislik ve bilimsel hesaplamalar için `2 + 3j` formatında kullanılır.

### 2. Aritmetik Operatörler

Standart işlemlerin ötesinde, Python'da veri işleme için kullanılan özel operatörler vardır:

| Operatör           | İsim           | Görevi                                                            |
| ------------------ | -------------- | ----------------------------------------------------------------- |
| `+`, `-`, `*`, `/` | Temel İşlemler | Toplama, Çıkarma, Çarpma, Bölme (Bölme her zaman **float** döner) |
| `//`               | Tam Bölme      | Bölme sonucundaki ondalık kısmı atar, tam sayıyı verir.           |
| `%`                | Mod Alma       | Bölme işleminden kalan sonucu verir.                              |
| `**`               | Üs Alma        | Bir sayının kuvvetini hesaplar.                                   |

```python
x = 17
y = 3

print(f"Normal Bölme: {x / y}")
print(f"Tam Bölme: {x // y}")
print(f"Kalan (Mod): {x % y}")
print(f"Üs (2**3): {2 ** 3}")

```

**Çıktı:**

```text
Normal Bölme: 5.666666666666667
Tam Bölme: 5
Kalan (Mod): 2
Üs (2**3): 8

```

### 3. İşlem Önceliği (PEMDAS)

Python matematiksel ifadeleri soldan sağa okumaz; matematik kurallarına (işlem önceliğine) göre çözer.

1. **Parantezler** `()`
2. **Üs Alma** `**`
3. **Çarpma, Bölme, Tam Bölme, Mod** `*`, `/`, `//`, `%`
4. **Toplama, Çıkarma** `+`, `-`

```python
hesap = 10 + 2 * 3 ** 2
print(f"Sonuç: {hesap}")

```

**Çıktı:**

```text
Sonuç: 28

```

> **Adımlar:** Önce `3**2 = 9`, sonra `2*9 = 18`, en son `10+18 = 28`.

### 4. Karşılaştırma ve Mantıksal Operatörler

Bu operatörler, programın karar verme (if-else) aşamalarında kullanılır ve sonuç her zaman **True** veya **False** döner.

- **Karşılaştırma:** `==` (Eşit mi?), `!=` (Eşit değil mi?), `>`, `<`, `>=`, `<=`
- **Mantıksal:**
- `and`: Her iki koşul da doğruysa True.
- `or`: En az bir koşul doğruysa True.
- `not`: Mevcut durumu tersine çevirir.

```python
yas = 20
ehliyet = True

# Hem yaş 18'den büyük olmalı HEM DE ehliyet olmalı
print(f"Araba kullanabilir mi? {yas >= 18 and ehliyet}")

# Sayı 0 ile 100 arasında mı?
sayi = 150
print(f"Aralıkta mı? {0 <= sayi <= 100}")

```

**Çıktı:**

```text
Araba kullanabilir mi? True
Aralıkta mı? False

```

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> Bir sayının "tek" mi yoksa "çift" mi olduğunu programlama ile nasıl anlarız?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Mod operatörünü (<code>%</code>) kullanırız. Eğer <code>sayi % 2 == 0</code> ise o sayı çifttir, kalan 1 ise tektir.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> <code>x = (5 + 5) * 2 / 2</code> işleminin sonucu ve veri tipi nedir?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Sonuç <strong>10.0</strong> olur ve tipi <strong>float</strong>'tır. İşlem önceliği parantezden başlar (10), sonra 2 ile çarpar (20) ve 2'ye böler (10). Bölme (<code>/</code>) işlemi sonucu daima float yapar.
</div>
</details>
</div>
