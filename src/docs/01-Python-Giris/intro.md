# Python'a Giriş

Python; 1991 yılında Guido van Rossum tarafından "okunabilirlik" ve "sadelik" ilkeleriyle geliştirilmiş, yüksek seviyeli, nesne yönelimli ve çok amaçlı bir programlama dilidir. Günümüzde Google, NASA ve Netflix gibi devlerin sistemlerini ayakta tutan ana dildir.

### Python Nasıl Çalışır? (Arka Plan)

Python, **yorumlanan (interpreted)** bir dildir ancak bu süreç sanıldığından biraz daha derindir. Yazdığınız bir kod şu aşamalardan geçer:

1. **Kaynak Kod (.py):** Sizin yazdığınız okunabilir kodlar.
2. **Derleme (Compilation):** Python, kodu önce daha hızlı işlenebilen bir ara koda, yani **Bytecode**'a (`.pyc`) çevirir.
3. **Yorumlama:** Bu Bytecode, **Python Virtual Machine (PVM)** adı verilen sanal bir makine tarafından satır satır okunarak bilgisayarın anlayacağı makine diline dönüştürülür ve çalıştırılır.

### Neden Python Seçmelisiniz?

- **Sadelik:** Karmaşık parantezler yerine girintileme (indentation) kullanarak kodun temiz görünmesini sağlar.
- **Kütüphane Desteği:** Veri biliminden yapay zekaya, web geliştirmeden otomasyona kadar her alanda devasa hazır paketler sunar.
- **Taşınabilirlik:** Windows'ta yazdığınız kod, hiçbir değişiklik yapmadan macOS veya Linux'ta çalışabilir.

### İlk Kod ve print() Fonksiyonu

Python'da ekrana bir çıktı vermek veya bir veriyi görüntülemek için `print()` fonksiyonu kullanılır.

```python
# Bu bir yorum satırıdır, Python bu satırı görmezden gelir.
print("Merhaba Baris!")
print(50 + 100)

```

**Çıktı:**

```text
Merhaba Baris!
150

```

### Kurulum Kontrolü ve Terminal

Bilgisayarınızda Python'ın yüklü olup olmadığını anlamak için terminali (komut satırını) açın ve şu komutu yazın:

```bash
python3 --version

```

> Önemli: Eğer terminalde `python3` komutu çalışmıyor ama `python` çalışıyorsa, versiyon numarasının **3.x** ile başladığından emin olun. Python 2 artık emekli edilmiş eski bir sürümdür.

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> Python'da yazdığımız kodlar doğrudan işlemciye mi gider, yoksa bir ara aşamadan mı geçer?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Bir ara aşamadan geçer. Kodlar önce <strong>Bytecode</strong>'a çevrilir, ardından <strong>Python Sanal Makinesi (PVM)</strong> tarafından yorumlanarak çalıştırılır.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> Python'ın diğer dillerden en belirgin görsel farkı (kod bloklarını ayırma yöntemi) nedir?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Python'da kod blokları süslü parantezler <code>{}</code> yerine <strong>Girintileme (Indentation)</strong> yani satır başındaki boşluklar ile belirlenir.
</div>
</details>
</div>
