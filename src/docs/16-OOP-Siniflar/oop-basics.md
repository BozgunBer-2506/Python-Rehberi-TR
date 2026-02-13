# Nesne Yönelimli Programlama - Sınıflar (Tam Rehber)

Nesne Yönelimli Programlama (OOP), kod yazarken her şeyi gerçek dünyadaki nesnelere benzeterek tasarlama sanatıdır. Bu bölüm, sınıfların temel yapısını, verileri nasıl sakladığını ve davranışlarını nasıl belirlediğini kapsar.

### 1. Sınıf (Class) Nedir?

Sınıf, bir nesnenin sahip olacağı özellikleri (verileri) ve yetenekleri (fonksiyonları) tanımlayan bir **şablondur**.

```python
class Oyuncu:
    pass # Bos bir sinif tanimi

```

### 2. Nesne (Object / Instance) Oluşturma

Bir sınıftan gerçek bir örnek çıkardığımızda buna nesne denir.

```python
oyuncu1 = Oyuncu()
oyuncu2 = Oyuncu()

```

### 3. `__init__` Metodu (Yapıcı Metot)

Bir nesne oluşturulduğu anda (yani `oyuncu1 = Oyuncu()` dediğimiz an) otomatik olarak çalışan özel bir metottur. Nesnenin ilk özelliklerini burada belirleriz.

```python
class Oyuncu:
    def __init__(self, isim, enerji):
        self.isim = isim       # Nesnenin ismi
        self.enerji = enerji   # Nesnenin enerjisi

```

### 4. `self` Parametresi Nedir?

`self`, o an hangi nesne üzerinde işlem yapıyorsak onu temsil eder.

- Eğer `oyuncu1` için işlem yapılıyorsa, `self` oyuncu1'dir.
- Eğer `oyuncu2` için işlem yapılıyorsa, `self` oyuncu2'dir.
- Sınıf içindeki her metodun **ilk parametresi** olmak zorundadır.

### 5. Örnek Metotları (Instance Methods)

Sınıfın içindeki nesneye özel fonksiyonlardır. Nesnenin bir eylemi gerçekleştirmesini sağlar.

```python
class Oyuncu:
    def __init__(self, isim, enerji):
        self.isim = isim
        self.enerji = enerji

    def hareket_et(self):
        self.enerji -= 10
        print(f"{self.isim} hareket etti. Yeni enerji: {self.enerji}")

    def dinlen(self):
        self.enerji += 20
        print(f"{self.isim} dinlendi. Yeni enerji: {self.enerji}")

# Uygulama:
p1 = Oyuncu("Baris", 100)
p1.hareket_et() # Baris hareket etti. Yeni enerji: 90
p1.dinlen()     # Baris dinlendi. Yeni enerji: 110

```

### 6. Sınıf Özellikleri vs. Nesne Özellikleri

- **Nesne Özelliği (Instance Attribute):** Sadece o nesneye özeldir (`self.isim`).
- **Sınıf Özelliği (Class Attribute):** O sınıftan üretilen tüm nesneler için ortaktır. Sınıfın en başında, metodun dışında tanımlanır.

```python
class Oyuncu:
    platform = "PC" # Tum oyuncular PC platformundadir.

    def __init__(self, isim):
        self.isim = isim

p1 = Oyuncu("Baris")
p2 = Oyuncu("Can")

print(p1.platform) # PC
print(p2.platform) # PC

```

### 7. String Metodu (`__str__`)

Bir nesneyi `print(p1)` diyerek yazdırmak istediğimizde ekranda ne görüneceğini belirler.

```python
class Oyuncu:
    def __init__(self, isim):
        self.isim = isim

    def __str__(self):
        return f"Oyuncu Adi: {self.isim}"

p1 = Oyuncu("Baris")
print(p1) # Ekrana 'Oyuncu Adi: Baris' yazar.

```

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> <code>**init**</code> metodu yazmazsak ne olur?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Python arka planda gizli ve boş bir <code>**init**</code> çalıştırır. Nesne oluşur ama nesneye ait özellikleri (isim, yaş gibi) baştan atayamazsınız.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> Bir metot içinde <code>self</code> kullanmadan nesnenin bir özelliğine ulaşabilir miyiz?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Hayır. <code>self</code> kullanmazsanız Python o değişkeni yerel bir değişken zanneder ve hata verir ya da nesneye ait olan veriye ulaşamaz.
</div>
</details>
</div>
