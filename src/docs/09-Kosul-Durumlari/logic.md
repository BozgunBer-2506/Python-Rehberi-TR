# Karar Yapıları (If - Elif - Else)

Programlar her zaman düz bir çizgide ilerlemez. Belirli şartlara göre farklı yollara sapmaları gerekir. Python'da bu "karar anları" `if`, `elif` ve `else` anahtar kelimeleriyle yönetilir.

### 1. Temel Mantık ve Girintileme (Indentation)

Python'da diğer dillerdeki gibi süslü parantez `{}` yoktur. Bir kodun `if` bloğuna ait olduğunu anlatmak için **girinti (4 boşluk)** kullanılır.

```python
yas = 20

if yas >= 18:
    print("Ehliyet alabilirsin.")
else:
    print("Ehliyet almak için küçüksün.")

```

### 2. Çoklu Koşullar (if - elif - else)

Eğer ikiden fazla ihtimal varsa `elif` (else if) kullanılır. Program yukarıdan aşağıya doğru bakar, ilk doğru bulduğu şartın içindeki kodu çalıştırır ve geri kalanına bakmadan çıkar.

```python
notun = 75

if notun >= 85:
    print("Harika! Notun: A")
elif notun >= 70:
    print("Güzel! Notun: B")
elif notun >= 50:
    print("Geçtin! Notun: C")
else:
    print("Maalesef kaldın.")

```

**Çıktı:**

```text
Güzel! Notun: B

```

### 3. Mantıksal Operatörlerle Sorgulama

Birden fazla şartı aynı anda kontrol edebiliriz:

- **and:** Tüm şartlar doğru olmalı.
- **or:** Sadece bir tanesinin doğru olması yeterli.
- **not:** Şartı tersine çevirir.

```python
kullanici_adi = "admin"
sifre = "12345"

if kullanici_adi == "admin" and sifre == "12345":
    print("Giriş başarılı!")
else:
    print("Bilgiler hatalı.")

```

### 4. Tek Satırda If (Ternary Operator)

Basit kararları tek satırda yazarak kodu kısaltabiliriz.

```python
durum = "Gecti" if notun >= 50 else "Kaldi"
print(durum)

```

### 5. "in" ve "is" Kullanımı

- **in:** Bir elemanın liste veya metin içinde olup olmadığına bakar.
- **is:** İki değişkenin bellekteki adreslerinin (id) aynı olup olmadığına bakar.

```python
meyveler = ["elma", "muz", "kivi"]

if "muz" in meyveler:
    print("Muz listede var!")

```

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> Python'da bir <code>if</code> bloğunun bittiğini nasıl anlarız?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Kodun girintisi (başına eklenen boşluklar) sona erip tekrar eski hizasına döndüğünde <code>if</code> bloğu bitmiş demektir.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> <code>if</code> ve <code>elif</code> arasındaki temel fark nedir?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Program her <code>if</code> komutuna mutlaka bakar ve kontrol eder. <code>elif</code> ise sadece kendinden önceki <code>if</code> yanlışsa (False) kontrol edilir. Eğer önceki şart doğruysa <code>elif</code> atlanır.
</div>
</details>
</div>
