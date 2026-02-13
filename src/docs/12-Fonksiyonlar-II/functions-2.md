# Fonksiyonlar - Bölüm 2

Temel fonksiyonları öğrendik. Bu bölümde ise fonksiyonları daha esnek ve profesyonel hale getiren ileri seviye özellikleri inceleyeceğiz.

### 1. Parametre Türleri (\*args ve \*\*kwargs)

Bazen bir fonksiyona kaç tane veri göndereceğimizi önceden bilemeyiz.

- **\*args:** Fonksiyona sınırsız sayıda değer göndermemizi sağlar. Bu değerler fonksiyon içinde bir **Tuple** olarak tutulur.
- \***\*kwargs:** Fonksiyona sınırsız sayıda isimlendirilmiş değer (anahtar-değer) göndermemizi sağlar. Bunlar **Sözlük (Dict)** olarak tutulur.

```python
def toplam_al(*sayilar):
    toplam = 0
    for s in sayilar:
        toplam += s
    return toplam

print(toplam_al(5, 10, 20, 30, 40)) # Istedigimiz kadar sayi gönderebiliriz.

```

### 2. Kapsam (Scope) ve 'global' Kelimesi

Bir fonksiyonun içinden, dışarıdaki bir değişkeni sadece okuyabiliriz ama normalde değiştiremeyiz. Değiştirmek istiyorsak `global` anahtarını kullanmalıyız.

```python
puan = 0

def puan_artir():
    global puan
    puan += 10

puan_artir()
print(f"Guncel Puan: {puan}")

```

### 3. Lambda Fonksiyonları (İsimsiz Fonksiyonlar)

Tek satırlık, basit işlemler için isim vermeden hızlıca fonksiyon tanımlayabiliriz.
**Formül:** `lambda parametre: islem`

```python
karesini_al = lambda x: x * x
print(karesini_al(4)) # Sonuc: 16

topla = lambda a, b: a + b
print(topla(10, 20)) # Sonuc: 30

```

### 4. Fonksiyonu Değişken Olarak Kullanmak

Python'da fonksiyonlar da birer nesnedir. Başka değişkenlere atanabilirler.

```python
def merhaba():
    return "Selam!"

selam_ver = merhaba # Fonksiyonu degiskene atadik (parantez yok)
print(selam_ver())

```

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> <code>*args</code> ve <code>**kwargs</code> arasındaki fark nedir?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
<code>*args</code> sıralı değerleri bir <strong>Tuple</strong> olarak alır. <code>**kwargs</code> ise isimle gönderilen değerleri (ad="Baris" gibi) bir <strong>Sözlük</strong> olarak alır.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> Lambda fonksiyonlarını neden kullanırız?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Kodu kısaltmak ve sadece o anlık lazım olan basit işlemleri, ayrı bir <code>def</code> bloğu açıp kalabalık yapmadan çözmek için kullanılır.
</div>
</details>
</div>
