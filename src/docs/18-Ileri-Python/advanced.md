# Nesne Yönelimli Programlama - Polimorfizm (Çok Biçimlilik)

Polimorfizm, farklı sınıflara ait nesnelerin aynı metod ismini kullanarak farklı davranışlar sergilemesidir. Bu sayede kodumuz daha esnek olur; nesnenin tam olarak ne olduğunu bilmesek bile ona "çalış" dediğimizde o nesne kendi işini bildiği gibi yapar.

### 1. Polimorfizm Nedir?

Aynı isimdeki bir eylemin (metodun), farklı nesneler tarafından farklı şekillerde icra edilmesidir.

**Örnek:** "Ses çıkar" komutu verildiğinde köpeğin havlaması, kedinin miyavlaması polimorfizmdir. Komut aynı, tepki farklıdır.

### 2. Kalıtım ile Polimorfizm

Farklı sınıflarda aynı isimli metotlar tanımlayarak polimorfizmi sağlarız.

```python
class Kedi:
    def ses_cikar(self):
        return "Miyav!"

class Kopek:
    def ses_cikar(self):
        return "Hav hav!"

# Farklı nesneleri bir listeye alalım
hayvanlar = [Kedi(), Kopek()]

for hayvan in hayvanlar:
    print(hayvan.ses_cikar())

```

**Çıktı:**

```text
Miyav!
Hav hav!

```

_Burada dikkat et: `hayvan` değişkeninin o an kedi mi köpek mi olduğuna bakmadık, sadece `ses_cikar()` dedik ve her nesne kendi doğasına göre cevap verdi._

### 3. Fonksiyonlarda Polimorfizm

Aynı fonksiyonu, içine farklı tipte nesneler göndererek kullanabiliriz.

```python
def hayvani_konustur(hayvan):
    print(hayvan.ses_cikar())

tekir = Kedi()
karabas = Kopek()

hayvani_konustur(tekir)   # Miyav!
hayvani_konustur(karabas) # Hav hav!

```

### 4. Neden Kullanırız?

Yeni bir hayvan türü (örneğin `Kus`) eklediğimizde, `hayvani_konustur` fonksiyonunu veya `for` döngüsünü değiştirmemize gerek kalmaz. Sadece yeni sınıfa `ses_cikar` metodunu eklememiz yeterlidir. Bu, kodun sürdürülebilirliğini sağlar.

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> Polimorfizm kullanmasaydık, yukarıdaki örnekte farklı hayvanları konuşturmak için nasıl bir kod yazmamız gerekirdi?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Sürekli <code>if-else</code> veya <code>type()</code> kontrolü yapmamız gerekirdi: "Eğer bu kediyse miyavlat, eğer köpekse havlat..." gibi. Polimorfizm bizi bu kalabalıktan kurtarır.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> Polimorfizm olması için mutlaka miras (inheritance) mı gerekir?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Python'da hayır! "Duck Typing" (Ördek Testi) prensibi sayesinde, nesneler aynı isimli metoda sahipse miras almasalar bile polimorfik olarak davranabilirler. Python için "Eğer bir kuş ördek gibi vakvaklıyorsa, o bir ördektir" mantığı geçerlidir.
</div>
</details>
</div>
