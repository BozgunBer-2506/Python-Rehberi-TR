# Veri Tipleri ve Bellek Kategorileri

Python'da bir verinin tipi, o verinin bellekte (RAM) nasıl saklanacağını ve üzerinde hangi işlemlerin yapılabileceğini belirler. Python'daki en büyük sır, verilerin "değişebilirlik" durumudur.

### 1. Bellek Kategorileri: Değiştirilebilir (Mutable) ve Değiştirilemez (Immutable)

Bu ayrım, Python'ın performansını ve hataları anlamak için en kritik konudur.

- **Immutable (Değiştirilemez):** Bir kez oluşturulduğunda içeriği asla değişmez. Eğer değeri değiştirirseniz, Python bellekte **yepyeni bir adres** açar.
- **Tipler:** `int`, `float`, `str`, `bool`, `tuple`.

- **Mutable (Değiştirilebilir):** Nesne yaratıldıktan sonra içeriği güncellenebilir. Bellekteki **adresi (id) sabit kalır.**
- **Tipler:** `list`, `dict`, `set`.

```python
# Sayılar Immutable'dır (Değiştirilemez)
sayi = 100
print(f"İlk Adres: {id(sayi)}")

sayi = sayi + 1
print(f"Yeni Adres: {id(sayi)}") # Adres tamamen değişti!

```

**Çıktı:**

```text
İlk Adres: 140712345678
Yeni Adres: 140712345682

```

### 2. Sayısal Veri Tiplerinin Derinliği

- **Integer (int):** Python 3'te tam sayılar "Arbitrary Precision" (Sınırsız Hassasiyet) kullanır. Diğer dillerde (C veya Java gibi) sayılar belli bir basamaktan sonra hata verirken, Python'da RAM yettiği sürece milyarlarca basamaklı sayılarla işlem yapabilirsiniz.
- **Float (float):** Ondalıklı sayılardır. Bellekte 64-bitlik yer kaplarlar. Bilgisayar sistemleri sayıları 2'lik tabanda tuttuğu için `0.1 + 0.2` gibi işlemler bazen tam `0.3` çıkmayabilir (Hassasiyet hatası).
- **Boolean (bool):** Aslında arka planda birer sayıdır. `True` 1, `False` ise 0 olarak temsil edilir.

```python
print(f"True + 5 işleminin sonucu: {True + 5}")

```

**Çıktı:**

```text
True + 5 işleminin sonucu: 6

```

### 3. Tip Dönüşümü (Type Casting)

Verileri bir tipten diğerine dönüştürürken veri kaybı yaşanabilir. Buna dikkat edilmelidir.

```python
x = 15.99
y = int(x) # Ondalık kısmı yuvarlamaz, doğrudan kesip atar!
z = float(10) # Tam sayıyı ondalıklı yapar

print(f"Float'tan Int'e: {y}")
print(f"Int'ten Float'a: {z}")

```

**Çıktı:**

```text
Float'tan Int'e: 15
Int'ten Float'a: 10.0

```

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> Neden bir tam sayının (integer) değerini artırdığımızda bellekteki <code>id()</code> adresi değişir?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Çünkü tam sayılar <strong>Immutable (Değiştirilemez)</strong> nesnelerdir. Python, mevcut sayıyı değiştirmek yerine, yeni değer için bellekte tamamen farklı bir konum açar.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> <code>NoneType</code> ne için kullanılır?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Bir değişkenin henüz bir değerinin olmadığını (boş olduğunu) belirtmek için kullanılır. "Sıfır" veya "Boş metin"den farklı olarak, nesnenin var olmadığını temsil eder.
</div>
</details>
</div>
