# Kütüphaneler ve Paket Yönetimi (Library & Package)

Python'ın en büyük gücü, "tekerleği yeniden icat etmenize" gerek bırakmamasıdır. Dünyadaki milyonlarca yazılımcı, karmaşık işleri halleden hazır kod blokları (paketler) yazar ve biz bunları saniyeler içinde projemize dahil ederiz.

### 1. Standart Kütüphane (Built-in)

Python kurulduğunda bilgisayarına hazır gelen modüllerdir. Bunları yüklemene gerek yoktur, sadece `import` etmen yeterlidir.

```python
import math
import datetime

print(math.pi) # Pi sayısını hazır verir
print(datetime.datetime.now()) # Şu anki zamanı verir

```

### 2. Harici Paketler ve pip

Python'ın içinde olmayan (yapay zeka, veri analizi, web geliştirme gibi) paketleri indirmek için **pip** (Package Installer for Python) aracını kullanırız.

**Terminal Komutları:**

- `pip install paket_adi`: Paketi indirir.
- `pip uninstall paket_adi`: Paketi siler.
- `pip list`: Bilgisayarındaki tüm paketleri listeler.

### 3. Sanal Ortamlar (Virtual Environments - venv)

Farklı projelerde farklı paket versiyonlarına ihtiyaç duyabilirsin. Projelerin birbirine karışmaması için her projeye özel bir "izole oda" (sanal ortam) oluştururuz.

```bash
# Sanal ortam oluşturma
python -m venv proje_ortami

# Aktif etme (Windows)
proje_ortami\Scripts\activate

```

### 4. Requirements.txt Dosyası

Bir projenin çalışması için gereken tüm paketlerin listesini tutan dosyadır. Başka birine projeni verdiğinde, o kişi tek komutla her şeyi kurabilir.

```bash
# Listeyi oluşturma
pip freeze > requirements.txt

# Listeyi başka bilgisayarda kurma
pip install -r requirements.txt

```

### 5. Modül Arama Sırası

Python bir modülü içe aktardığında sırasıyla şuralara bakar:

1. Senin projenin bulunduğu klasör.
2. Python'ın kendi kurulu olduğu yer (Standart kütüphaneler).
3. `pip` ile indirdiğin paketlerin olduğu klasör (site-packages).

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> Neden her projede <code>venv</code> (sanal ortam) kullanmalıyız?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Çünkü bir projen eski bir kütüphaneyle çalışırken diğeri yenisiyle çalışabilir. Sanal ortam kullanmazsan paket versiyonları çakışır ve projelerin bozulabilir.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> <code>import random as r</code> yazımındaki <code>as</code> ne işe yarar?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Takma isim (alias) vermemizi sağlar. Uzun kütüphane isimlerini kod içinde sürekli yazmamak için kısa bir isim atamış oluruz.
</div>
</details>
</div>
