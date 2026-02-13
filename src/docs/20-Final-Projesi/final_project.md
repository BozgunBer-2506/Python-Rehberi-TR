# Sayfa 20: Final Projesi - Kütüphane Yönetim Sistemi

Bu sayfa, önceki 19 bölümde öğrendiğimiz tüm temel ve ileri seviye kavramları (Değişkenler, Döngüler, Hata Yönetimi, OOP ve Dosya İşlemleri) bir araya getiren final uygulamasıdır.

### 1. Projenin Amacı ve Yapısı

Amacımız, kullanıcının kitap ekleyebildiği, bunları listeleyebildiği ve verilerin program kapansa bile silinmediği bir sistem kurmaktır. Kodumuzu üç ana bölümde kurgulayacağız:

1. **Veri Modeli (`Kitap` sınıfı):** Bilginin şablonu.
2. **Yönetici Modeli (`Kütüphane` sınıfı):** İş mantığı ve dosya kayıtları.
3. **Kullanıcı Arayüzü (`menu` fonksiyonu):** İletişim katmanı.

---

### 2. Uygulamanın Tam Kodu

```python
import json

class Kitap:
    def __init__(self, ad, yazar, sayfa):
        self.ad = ad
        self.yazar = yazar
        self.sayfa = sayfa

    def __str__(self):
        return f"Kitap: {self.ad} | Yazar: {self.yazar} | Sayfa: {self.sayfa}"

class Kütüphane:
    def __init__(self):
        self.kitaplar = []
        self.dosya_adi = "kutuphane_verisi.json"
        self.verileri_yukle()

    def kitap_ekle(self, yeni_kitap):
        self.kitaplar.append(yeni_kitap)
        self.verileri_kaydet()
        print("\n=> Kitap basariyla kaydedildi.")

    def listele(self):
        print("\n--- Kayitli Kitaplar ---")
        if not self.kitaplar:
            print("Kütüphane su an bos.")
        else:
            for sira, kitap in enumerate(self.kitaplar, 1):
                print(f"{sira}. {kitap}")

    def verileri_kaydet(self):
        with open(self.dosya_adi, "w") as f:
            # Nesne listesini sözlük listesine cevirip JSON'a yaziyoruz
            veri_paketi = [k.__dict__ for k in self.kitaplar]
            json.dump(veri_paketi, f)

    def verileri_yukle(self):
        try:
            with open(self.dosya_adi, "r") as f:
                yuklenen_veri = json.load(f)
                for k in yuklenen_veri:
                    self.kitaplar.append(Kitap(k['ad'], k['yazar'], k['sayfa']))
        except FileNotFoundError:
            self.kitaplar = []

def menu():
    sistem = Kütüphane()

    while True:
        print("\n--- 2026 Kütüphane Sistemi ---")
        print("1. Kitap Ekle")
        print("2. Kitaplari Listele")
        print("3. Cikis")

        secim = input("Seciminiz: ")

        if secim == "1":
            try:
                ad = input("Kitap Adi: ")
                yazar = input("Yazar: ")
                sayfa = int(input("Sayfa Sayisi: "))
                yeni = Kitap(ad, yazar, sayfa)
                sistem.kitap_ekle(yeni)
            except ValueError:
                print("\nHata: Sayfa sayisi rakam olmalidir!")

        elif secim == "2":
            sistem.listele()

        elif secim == "3":
            print("Sistem kapatiliyor. Iyi günler!")
            break
        else:
            print("Gecersiz secim, lütfen tekrar deneyin.")

if __name__ == "__main__":
    menu()

```

---

### 3. Adım Adım Kod Açıklaması

- **`import json`:** Verileri düz metin yerine, programlama dillerinin ortak dili olan JSON formatında saklamak için bu kütüphaneyi dahil ettik.
- **`Kitap` Sınıfı:** Nesne yönelimli programlamanın (OOP) kalbidir. Her kitabı bir nesne olarak tanımlamamızı sağlar. `__str__` metodu ise `print(kitap)` dediğimizde ekranda ne göreceğimizi belirler.
- **`Kütüphane` Sınıfı:** \* **`__dict__` kullanımı:** Python nesnelerini doğrudan JSON dosyasına kaydedemezsiniz. `k.__dict__` komutu, nesnenin özelliklerini bir sözlüğe (dictionary) dönüştürerek kaydedilmesini sağlar.
- **`try-except` (Hata Yönetimi):** `verileri_yukle` metodunda dosya yoksa programın çökmesini engeller. Eğer `veriler.json` yoksa, Python hata vermek yerine boş bir listeyle devam eder.

- **`menu` Fonksiyonu:** Kullanıcıyla etkileşime geçtiğimiz döngüdür. `while True` sayesinde biz "3" tuşuna basana kadar program çalışmaya devam eder.

---

### 4. Örnek Çalışma Çıktısı

Programı çalıştırdığında terminalde şu akışı göreceksin:

```text
--- 2026 Kütüphane Sistemi ---
1. Kitap Ekle
2. Kitaplari Listele
3. Cikis
Seciminiz: 1
Kitap Adi: Python El Kitabi
Yazar: Yavuz Baris Özgün
Sayfa Sayisi: 200

=> Kitap basariyla kaydedildi.

--- 2026 Kütüphane Sistemi ---
1. Kitap Ekle | 2. Listele | 3. Cikis
Seciminiz: 1

Kitap Adi: Python El Kitabi
Yazar: Yavuz Baris Özgün
Sayfa Sayisi: 200

=> Kitap basariyla kaydedildi.

--- 2026 Kütüphane Sistemi ---
1. Kitap Ekle | 2. Listele | 3. Cikis
Seciminiz: 2

--- Kayitli Kitaplar ---
1. Kitap: Python El Kitabi | Yazar: Yavuz Baris Özgün | Sayfa: 200
```
