# Demetler (Tuples) ve Kümeler (Sets)

Python'da listeler her işi yapabilir gibi görünse de, bazı durumlarda verinin değiştirilmemesi (güvenlik) veya benzersiz olması (matematiksel kümeler) gerekir. İşte burada Tuples ve Sets devreye girer.

### 1. Demetler (Tuples)

Tuples, listelere çok benzer ama en büyük farkı **Immutable** (değiştirilemez) olmalarıdır. Bir tuple oluşturulduktan sonra içine eleman eklenemez, silinemez veya bir elemanı güncellenemez.

- **Tanımlama:** Normal parantez `()` kullanılır.
- **Neden Kullanılır?** Veri güvenliği sağlamak için (örneğin bir koordinat veya tarih verisi) ve listelere göre bellekte daha az yer kapladıkları için.

```python
koordinat = (41.0082, 28.9784)
# koordinat[0] = 42.0  # Bu işlem HATA verir!

print(f"Enlem: {koordinat[0]}")
print(f"Boylam: {koordinat[1]}")

```

**Çıktı:**

```text
Enlem: 41.0082
Boylam: 28.9784

```

### 2. Kümeler (Sets)

Kümeler, matematikteki kümelerle aynı mantıkta çalışır. En büyük özellikleri **sırasız (unordered)** olmaları ve **asla tekrar eden eleman barındırmamalarıdır.**

- **Tanımlama:** Süslü parantez `{}` kullanılır.
- **Neden Kullanılır?** Bir veri grubundaki tekrarları temizlemek ve matematiksel kesişim/birleşim işlemleri yapmak için.

```python
sayilar = {1, 2, 2, 3, 3, 3}
print(f"Küme içeriği: {sayilar}") # Tekrarlar silindi

sayilar.add(4)
sayilar.remove(1)
print(f"Güncel Küme: {sayilar}")

```

**Çıktı:**

```text
Küme içeriği: {1, 2, 3}
Güncel Küme: {2, 3, 4}

```

### 3. Küme İşlemleri (Intersection & Union)

```python
yazilim = {"Python", "Java", "C++"}
veri_bilimi = {"Python", "R", "SQL"}

# Kesişim (İkisinde de olanlar)
ortak = yazilim.intersection(veri_bilimi)
# Birleşim (Hepsi)
hepsi = yazilim.union(veri_bilimi)

print(f"Ortak diller: {ortak}")
print(f"Tüm diller: {hepsi}")

```

**Çıktı:**

```text
Ortak diller: {'Python'}
Tüm diller: {'Python', 'R', 'C++', 'Java', 'SQL'}

```

### 4. Bellek ve Performans Karşılaştırması

Tuples, listelerden daha hızlıdır. Sets ise bir elemanın grubun içinde olup olmadığını kontrol etmekte (`in` operatörü) listelerden çok daha hızlı çalışır (Hash table yapısı sayesinde).

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> <code>tek_eleman = (5)</code> yazıldığında bu bir tuple mı olur?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Hayır, bu bir <strong>integer</strong> olur. Tek elemanlı bir tuple tanımlamak için mutlaka virgül kullanılmalıdır: <code>tek_eleman = (5,)</code>.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> Bir listenin içindeki tekrar eden elemanları en hızlı nasıl temizlersiniz?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Listeyi bir sete çevirerek: <code>liste = list(set(liste))</code>. Set yapısı otomatik olarak tüm tekrarları siler, sonra tekrar listeye çevirerek kullanabilirsiniz.
</div>
</details>
</div>
