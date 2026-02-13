# Fonksiyonlar (Functions)

Fonksiyonlar, belirli bir görevi yerine getirmek için hazırlanan ve ihtiyaç duyulduğunda adı ile çağrılan kod bloklarıdır. Kodun tekrar kullanılabilirliğini sağlar ve karmaşıklığı azaltır.

### 1. Fonksiyon Tanımlama ve Çağırma

Bir fonksiyon `def` anahtar kelimesiyle tanımlanır. Tanımlanan fonksiyon, biz onu çağırmadan çalışmaz.

```python
def selamla():
    print("Merhaba Baris! 2026 yilinda Python ogrenmeye devam ediyoruz.")

# Fonksiyonu cagirma
selamla()

```

### 2. Parametre ve Argüman Kullanımı

Fonksiyonların içine dışarıdan veri göndererek onları daha esnek hale getirebiliriz.

```python
def toplama(sayi1, sayi2):
    print(f"Iki sayinin toplami: {sayi1 + sayi2}")

toplama(15, 25)
toplama(100, 200)

```

**Çıktı:**

```text
Iki sayinin toplami: 400
Iki sayinin toplami: 300

```

### 3. Değer Döndürme (Return)

Bir fonksiyon sadece ekrana bir şey yazmak zorunda değildir; yaptığı işlemin sonucunu bize "teslim" edebilir. Bu sayede sonucu bir değişkende saklayabiliriz.

```python
def karesini_al(sayi):
    return sayi * sayi

sonuc = karesini_al(5)
print(f"Hesaplanan deger: {sonuc}")

```

### 4. Varsayılan Parametreler

Eğer kullanıcı bir değer göndermezse kullanılacak "yedek" bir değer belirleyebiliriz.

```python
def hosgeldin(isim="Misafir"):
    print(f"Sisteme hos geldin, {isim}!")

hosgeldin("Baris")
hosgeldin() # Isim verilmedigi icin 'Misafir' yazar

```

### 5. Yerel (Local) ve Küresel (Global) Değişkenler

Fonksiyonun içinde yaratılan bir değişken, fonksiyon bittiğinde bellekten silinir ve dışarıdan ulaşılamaz.

```python
x = 50 # Kuresel degisken

def test():
    x = 10 # Yerel degisken
    print(f"Fonksiyon icindeki x: {x}")

test()
print(f"Fonksiyon disindaki x: {x}")

```

**Çıktı:**

```text
Fonksiyon icindeki x: 10
Fonksiyon disindaki x: 50

```

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> Bir fonksiyonda <code>return</code> satırından sonra yazılan kodlar neden çalışmaz?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Çünkü <code>return</code> komutu fonksiyonu o anda bitirir, sonucu dışarı fırlatır ve fonksiyondan çıkar. Altındaki kodlar Python tarafından okunmaz.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> Fonksiyon kullanmanın en büyük avantajı nedir?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
<strong>DRY (Don't Repeat Yourself)</strong> yani "Kendini Tekrar Etme" prensibini uygulamaktır. Bir kodu bir kez yazıp binlerce kez farklı yerlerde kullanmamızı sağlar.
</div>
</details>
</div>
