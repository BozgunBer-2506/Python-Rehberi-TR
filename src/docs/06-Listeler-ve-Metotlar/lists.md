# Listeler (Lists)

Listeler, birden fazla veriyi tek bir değişken altında toplamak için kullanılır. Python'daki listeler **sıralıdır (ordered)**, **değiştirilebilir (mutable)** ve farklı veri tiplerini (int, str, float) aynı anda içinde barındırabilir.

### 1. Liste Oluşturma ve İndeksleme

Listeler köşeli parantez `[]` kullanılarak tanımlanır. Karakter dizilerinde olduğu gibi, elemanlara 0'dan başlayan indekslerle ulaşılır.

```python
meyveler = ["Elma", "Muz", "Çilek", "Kivi"]

print(f"İlk eleman: {meyveler[0]}")
print(f"Son eleman: {meyveler[-1]}")
print(f"Dilimleme (İlk 2): {meyveler[:2]}")

```

**Çıktı:**

```text
İlk eleman: Elma
Son eleman: Kivi
Dilimleme (İlk 2): ['Elma', 'Muz']

```

### 2. Listeyi Değiştirmek (Mutable Karakter)

Listeler **Mutable** olduğu için, bir elemanı doğrudan güncelleyebiliriz. Bu işlem bellekteki adresi değiştirmez.

```python
sayilar = [10, 20, 30]
sayilar[1] = 99 # 20 değerini 99 ile değiştir
print(f"Güncel Liste: {sayilar}")

```

**Çıktı:**

```text
Güncel Liste: [10, 99, 30]

```

### 3. Temel Liste Metotları

Bir listeye eleman eklemek veya çıkarmak için profesyonel metotlar kullanılır:

| Metot                     | Görevi                                                          |
| ------------------------- | --------------------------------------------------------------- |
| `.append(eleman)`         | Listenin en sonuna yeni bir eleman ekler.                       |
| `.insert(indeks, eleman)` | Belirtilen indekse eleman yerleştirir (diğerlerini kaydırır).   |
| `.remove(deger)`          | Liste içindeki belirli bir değeri bulur ve siler.               |
| `.pop(indeks)`            | Belirtilen indeksteki elemanı siler ve size o elemanı döndürür. |
| `.sort()`                 | Elemanları küçükten büyüğe veya alfabetik olarak sıralar.       |
| `.clear()`                | Listenin içindeki tüm elemanları siler, boş liste bırakır.      |

```python
donanim = ["SSD", "RAM"]
donanim.append("GPU")
donanim.insert(0, "CPU")
silinen = donanim.pop(2) # RAM'i siler ve 'silinen' değişkenine atar

print(f"Liste: {donanim}")
print(f"Sistemden çıkarılan: {silinen}")

```

**Çıktı:**

```text
Liste: ['CPU', 'SSD', 'GPU']
Sistemden çıkarılan: RAM

```

### 4. Kritik Konu: Kopyalama Hataları (Reference vs Copy)

Listeleri kopyalarken `=` operatörünü kullanmak tehlikelidir. Çünkü bu işlem yeni bir liste oluşturmaz, sadece aynı listeye ikinci bir isim takar.

```python
liste_a = [1, 2, 3]
liste_b = liste_a        # Hatalı Kopyalama (Aynı nesneyi işaret ederler)
liste_c = liste_a.copy() # Doğru Kopyalama (Yeni bir nesne oluşturur)

liste_b.append(99)
print(f"Liste A: {liste_a}")
print(f"Liste C: {liste_c}")

```

**Çıktı:**

```text
Liste A: [1, 2, 3, 99]
Liste C: [1, 2, 3]

```

> **Not:** `liste_b` üzerinde yapılan değişiklik `liste_a`'yı da etkiledi çünkü ikisi de bellekteki aynı kutuya bakıyor. `copy()` ise bağımsız bir kutu oluşturdu.

### 5. İç İçe Listeler (Nested Lists)

Listelerin içine başka listeler koyarak matrisler veya tablolar oluşturabiliriz.

```python
matris = [
    [1, 2, 3],
    [4, 5, 6]
]
print(f"İkinci satırın ilk elemanı: {matris[1][0]}")

```

**Çıktı:**

```text
İkinci satırın ilk elemanı: 4

```

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> <code>sayilar = [1, 2, 3]</code> listesinde <code>sayilar.append([4, 5])</code> komutu çalıştırılırsa listenin son hali ve eleman sayısı ne olur?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Liste <strong>[1, 2, 3, [4, 5]]</strong> haline gelir ve eleman sayısı <strong>4</strong> olur. <code>append</code> metodu içeriği değil, nesneyi olduğu gibi tek bir eleman olarak ekler.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> Bir listenin elemanlarını kalıcı olarak tersten sıralamak için hangi metot kullanılır?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
<strong><code>.reverse()</code></strong> metodu kullanılır. Dilimleme yöntemi (<code>[::-1]</code>) ise orijinal listeyi değiştirmez, sadece bir kopyasını ters döndürür.
</div>
</details>
</div>
