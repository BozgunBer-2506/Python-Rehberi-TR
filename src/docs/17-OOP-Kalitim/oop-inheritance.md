# Nesne Yönelimli Programlama - Kalıtım (Inheritance)

Kalıtım, bir sınıfın (alt sınıf) başka bir sınıfın (üst sınıf) tüm özelliklerini ve metotlarını miras almasıdır. Gerçek hayattaki baba-oğul ilişkisi gibi düşünebilirsin; babadaki özellikler oğula geçer ama oğul kendi yeni özelliklerini de ekleyebilir.

### 1. Neden Kalıtım Kullanırız?

Eğer birden fazla sınıfın (örneğin: Yazılımcı, Tasarımcı, Müdür) ortak özellikleri varsa (isim, maaş, şirket e-postası), bu özellikleri her sınıf için tek tek yazmak yerine bir "Üst Sınıf" (Personel) oluştururuz.

### 2. Temel Kalıtım Yapısı

Bir sınıfın başka bir sınıfı miras alması için, sınıf isminin yanındaki parantez içine miras alınacak sınıfın adı yazılır.

```python
class Personel:
    def __init__(self, ad, soyad):
        self.ad = ad
        self.soyad = soyad

    def tam_ad(self):
        return f"{self.ad} {self.soyad}"

class Yazilimci(Personel): # Personel sınıfından miras aldı
    pass

# Yazilimci sınıfının içi boş olsa da Personel'in özelliklerini kullanabilir
y1 = Yazilimci("Baris", "Pythoncu")
print(y1.tam_ad())

```

### 3. super() Fonksiyonu ve Genişletme

Alt sınıfın kendine has yeni özellikleri (örneğin yazılımcının bildiği programlama dili) olduğunda, üst sınıfın yapısını bozmadan üzerine ekleme yapmak için `super()` kullanılır.

```python
class Yazilimci(Personel):
    def __init__(self, ad, soyad, dil):
        # Üst sınıfın (Personel) init metodunu çalıştırır
        super().__init__(ad, soyad)
        self.dil = dil # Yazılımcıya özel yeni özellik

y2 = Yazilimci("Can", "Demir", "Python")
print(f"{y2.tam_ad()} - Bildiği Dil: {y2.dil}")

```

### 4. Metot Ezme (Method Overriding)

Miras alınan bir metodun, alt sınıfta farklı çalışmasını istiyorsak, o metodu alt sınıfta aynı isimle tekrar tanımlarız.

```python
class Mudur(Personel):
    def tam_ad(self): # Üst sınıftaki metodu eziyoruz
        return f"Sayın Müdür {self.ad} {self.soyad}"

m1 = Mudur("Ahmet", "Yılmaz")
print(m1.tam_ad()) # 'Sayın Müdür Ahmet Yılmaz' yazar

```

### 5. Çoklu Kalıtım (Multiple Inheritance)

Python'da bir sınıf birden fazla sınıftan aynı anda miras alabilir.

```python
class Calisan:
    def calis(self):
        print("Calisiliyor...")

class Sporcu:
    def kos(self):
        print("Kosuluyor...")

class YazilimciSporcu(Calisan, Sporcu):
    pass

y3 = YazilimciSporcu()
y3.calis()
y3.kos()

```

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> <code>super().**init**()</code> satırını yazmayı unutursak ne olur?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Üst sınıftaki özellikler (ad, soyad gibi) alt sınıfa aktarılmaz. Bu durumda nesne oluştururken hata alırsın çünkü miras aldığın özellikler tanımlanmamış kalır.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> Bir sınıfı miras aldığımızda, üst sınıftaki tüm metotları kullanmak zorunda mıyız?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Hayır, istediğini kullanabilirsin. Ama miras aldığın için hepsi zaten emrine amade bekler. Eğer işine yaramayan bir metot varsa onu "ezebilirsin" (override).
</div>
</details>
</div>
