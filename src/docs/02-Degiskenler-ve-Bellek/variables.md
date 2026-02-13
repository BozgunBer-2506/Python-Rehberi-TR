# Değişkenler ve Bellek Yönetimi

Python'da değişkenler, diğer dillerde olduğu gibi verileri içine koyduğumuz "kutular" değildir. Python'da her şey bir nesnedir ve değişkenler bu nesnelere takılan birer **etiket** (label) veya **referans** (reference) görevi görür.

### Nesne Referansı ve Atama Mantığı

Bir atama işlemi yaptığınızda (`x = 500`), Python arka planda şu üç adımı gerçekleştirir:

1. Bellekte (RAM) `500` değerini tutan bir tam sayı (integer) nesnesi oluşturur.
2. Bu nesneye benzersiz bir kimlik numarası (id) verir.
3. Sizin belirlediğiniz `x` ismini bu nesnenin adresiyle ilişkilendirir.

```python
x = 500
y = x

print(f"x'in adresi: {id(x)}")
print(f"y'in adresi: {id(y)}")
print(f"x ve y aynı nesne mi? {x is y}")

```

**Çıktı:**

```text
x'in adresi: 140234567890
y'in adresi: 140234567890
x ve y aynı nesne mi? True

```

### Referans Sayımı (Reference Counting)

Python, belleği yönetmek için her nesnenin bir "referans sayacı" tutar.

- `x = 500` dendiğinde 500 nesnesinin referans sayısı **1** olur.
- `y = x` dendiğinde referans sayısı **2** olur.
- `x = "Baris"` diyerek x'in bağını koparırsanız sayı **1**'e düşer.

### Çöp Toplayıcı (Garbage Collector)

Bir nesnenin referans sayısı **0**'a düştüğünde, yani artık o nesneyi işaret eden hiçbir değişken kalmadığında, Python'ın **Garbage Collector** mekanizması devreye girer. Bu sahipsiz nesneyi bellekten otomatik olarak siler ve RAM'de yer açar. Bu işleme "Otomatik Bellek Yönetimi" denir.

### Dinamik Tiplendirme (Dynamic Typing)

Python'da değişkenlerin tipini önceden bildirmek zorunda değilsiniz. Bir değişken, hayatı boyunca farklı tipteki nesneleri işaret edebilir.

```python
deger = 10       # Şu an bir integer
print(f"Tip 1: {type(deger)}")

deger = "Baris"  # Artık bir string
print(f"Tip 2: {type(deger)}")

```

**Çıktı:**

```text
Tip 1: <class 'int'>
Tip 2: <class 'str'>

```

### PEP 8 Standartları ve İsimlendirme

Kodunuzun dünya standartlarında olması için şu kurallara uymalısınız:

- **snake_case:** Değişken isimleri küçük harfle yazılır, kelimeler alt çizgi ile ayrılır (`kullanici_adi`).
- **Anlamlılık:** `a = 5` yerine `hatali_giris_sayisi = 5` kullanın.
- **Sabitler:** Değeri hiç değişmeyecek değişkenler (örneğin `PI_SAYISI`) tamamen büyük harfle yazılır.

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> <code>is</code> operatörü ile <code>==</code> operatörü arasındaki temel fark nedir?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
<code>==</code> operatörü nesnelerin içindeki <strong>değerlerin</strong> aynı olup olmadığına bakar. <code>is</code> operatörü ise iki değişkenin bellekteki <strong>id (kimlik/adres)</strong> bilgilerinin aynı olup olmadığına, yani gerçekten aynı nesne olup olmadıklarına bakar.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> Python'da bir nesnenin bellekten silinmesi için ne olması gerekir?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
O nesneye bağlı olan tüm referansların kopması (referans sayısının 0 olması) gerekir. Bu durumda <strong>Garbage Collector</strong> nesneyi imha eder.
</div>
</details>
</div>
