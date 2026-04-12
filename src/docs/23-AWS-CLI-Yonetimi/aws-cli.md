# AWS CLI ile Bulut Yönetimi

AWS (Amazon Web Services), dünyanın en büyük bulut altyapısıdır. AWS CLI (Command Line Interface) ise bu altyapıyı terminal üzerinden yönetmeni sağlayan resmi araçtır. Python geliştiricileri için AWS CLI'ı bilmek; sunucu kurmak, dosya depolamak, veritabanı oluşturmak gibi işlemleri saniyeler içinde otomatize edebilmek demektir.

---

### 1. AWS CLI Nedir ve Neden Önemlidir?

AWS'nin web arayüzüne (Console) girip tıklayarak yapabileceğin her şeyi, AWS CLI ile tek bir komutla yapabilirsin. Bu, otomasyon ve DevOps dünyasının temelidir.

**Ne işe yarar?**

- S3 bucket oluştur, dosya yükle/indir
- EC2 sunucu başlat/durdur
- IAM kullanıcı ve yetki yönetimi
- Lambda fonksiyonu deploy et
- Tüm bu işlemleri Python scriptleriyle otomatize et

---

### 2. Kurulum

AWS CLI, Python ile yazılmıştır ve `pip` ile kurulabilir.

```bash
# pip ile kurulum
pip install awscli

# Kurulumu doğrula
aws --version

```

**Çıktı:**

```text
aws-cli/2.x.x Python/3.x.x Linux/... botocore/2.x.x

```

---

### 3. Kimlik Doğrulama – `aws configure`

AWS CLI kullanabilmek için AWS hesabındaki erişim anahtarlarını (Access Key) tanıtman gerekir. Bu bilgileri AWS Console → IAM → Kullanıcı → Güvenlik Bilgileri bölümünden alırsın.

```bash
aws configure

```

```text
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: eu-central-1
Default output format [None]: json

```

Bu bilgiler `~/.aws/credentials` dosyasına kaydedilir. Bir daha girmene gerek kalmaz.

---

### 4. S3 – Dosya Depolama Servisi

S3 (Simple Storage Service), AWS'nin dosya depolama hizmetidir. Klasörler yerine "bucket" (kova) adı verilen yapılar kullanılır.

**Bucket Oluşturma:**

```bash
aws s3 mb s3://benim-proje-bucket

```

**Dosya Yükleme:**

```bash
aws s3 cp rapor.pdf s3://benim-proje-bucket/

```

**Bucket İçeriğini Listeleme:**

```bash
aws s3 ls s3://benim-proje-bucket/

```

**Dosya İndirme:**

```bash
aws s3 cp s3://benim-proje-bucket/rapor.pdf ./indirilenler/

```

**Klasörü Tümüyle Senkronize Etme:**

```bash
aws s3 sync ./yerel-klasor/ s3://benim-proje-bucket/yedek/

```

---

### 5. EC2 – Sanal Sunucu Yönetimi

EC2 (Elastic Compute Cloud), AWS'deki sanal sunuculardır (instance). Terminal üzerinden sunucu başlatabilir, durdurabilir ve listeleyebilirsin.

**Çalışan Sunucuları Listeleme:**

```bash
aws ec2 describe-instances --query "Reservations[*].Instances[*].[InstanceId,State.Name,PublicIpAddress]" --output table

```

**Sunucu Başlatma:**

```bash
aws ec2 start-instances --instance-ids i-0abcd1234efgh5678

```

**Sunucu Durdurma:**

```bash
aws ec2 stop-instances --instance-ids i-0abcd1234efgh5678

```

---

### 6. Python'dan AWS CLI Çalıştırma – `subprocess`

Python scriptlerinin içinden AWS CLI komutlarını çalıştırmak için `subprocess` modülü kullanılır.

```python
import subprocess

# S3 bucket içeriğini listele
sonuc = subprocess.run(
    ["aws", "s3", "ls", "s3://benim-proje-bucket/"],
    capture_output=True,
    text=True
)

print(sonuc.stdout)

```

**Çıktı:**

```text
2026-04-10 14:23:11      45231 rapor.pdf
2026-04-11 09:05:44     102400 yedek.zip

```

Hata kontrolü de ekleyebilirsin:

```python
import subprocess

def s3_yukle(dosya_yolu, bucket_adi):
    sonuc = subprocess.run(
        ["aws", "s3", "cp", dosya_yolu, f"s3://{bucket_adi}/"],
        capture_output=True,
        text=True
    )

    if sonuc.returncode == 0:
        print(f"Başarılı: {dosya_yolu} yüklendi.")
    else:
        print(f"Hata: {sonuc.stderr}")

s3_yukle("rapor.pdf", "benim-proje-bucket")

```

---

### 7. boto3 – Python'un Resmi AWS Kütüphanesi

`subprocess` ile CLI çalıştırmak basit işler için yeterlidir. Ancak karmaşık işlemler için AWS'nin resmi Python kütüphanesi olan `boto3` kullanılır. `boto3`, AWS servislerini doğrudan Python nesneleri olarak yönetmeni sağlar.

```bash
pip install boto3

```

**S3'e Dosya Yükleme (boto3 ile):**

```python
import boto3

s3 = boto3.client("s3")

s3.upload_file(
    Filename="rapor.pdf",
    Bucket="benim-proje-bucket",
    Key="raporlar/rapor.pdf"
)

print("Dosya yüklendi.")

```

**S3'ten Dosya Listeleme:**

```python
import boto3

s3 = boto3.client("s3")

yanit = s3.list_objects_v2(Bucket="benim-proje-bucket")

for nesne in yanit.get("Contents", []):
    print(nesne["Key"], "-", nesne["Size"], "byte")

```

**EC2 Sunucu Listesi (boto3 ile):**

```python
import boto3

ec2 = boto3.client("ec2", region_name="eu-central-1")

yanit = ec2.describe_instances()

for rezervasyon in yanit["Reservations"]:
    for instance in rezervasyon["Instances"]:
        print(instance["InstanceId"], "-", instance["State"]["Name"])

```

---

### 8. Pratik Örnek – Otomatik Yedekleme Scripti

Aşağıdaki script, belirtilen bir klasördeki dosyaları otomatik olarak S3'e yedekler. Bir IT veya DevOps ortamında hemen kullanılabilir.

```python
import boto3
import os
from datetime import datetime

BUCKET = "benim-proje-bucket"
KLASOR = "./yedeklenecek-klasor"

s3 = boto3.client("s3")

tarih = datetime.now().strftime("%Y-%m-%d")

for dosya_adi in os.listdir(KLASOR):
    tam_yol = os.path.join(KLASOR, dosya_adi)

    if os.path.isfile(tam_yol):
        s3_yolu = f"yedekler/{tarih}/{dosya_adi}"

        s3.upload_file(tam_yol, BUCKET, s3_yolu)
        print(f"Yüklendi: {dosya_adi} → s3://{BUCKET}/{s3_yolu}")

print("Yedekleme tamamlandı.")

```

**Çıktı:**

```text
Yüklendi: rapor.pdf → s3://benim-proje-bucket/yedekler/2026-04-12/rapor.pdf
Yüklendi: veriler.csv → s3://benim-proje-bucket/yedekler/2026-04-12/veriler.csv
Yedekleme tamamlandı.

```

---

### 9. AWS CLI vs boto3 – Hangisini Kullanmalıyım?

| Durum | Tavsiye |
|---|---|
| Hızlı tek seferlik işlem | `aws` CLI komutu |
| Python scripti içinde basit komut | `subprocess` |
| Karmaşık iş mantığı, döngü, koşul | `boto3` |
| CI/CD pipeline, otomasyon | `boto3` |
| Bash scripti içinde | `aws` CLI komutu |

---

### 10. Resmi Dokümantasyon

AWS CLI komutlarının tamamına (tüm servisler, parametreler, örnekler) aşağıdaki resmi kaynaktan ulaşabilirsin:

- [AWS CLI Komut Referansı](https://docs.aws.amazon.com/cli/latest/) – Tüm `aws` komutlarının tam listesi
- [boto3 Dokümantasyonu](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html) – Python SDK referansı

---

## Ne Öğrendik?

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 1:</strong> <code>aws configure</code> komutunu çalıştırdıktan sonra bu bilgiler nerede saklanır?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Bilgiler <code>~/.aws/credentials</code> (anahtarlar) ve <code>~/.aws/config</code> (bölge ve format) dosyalarına kaydedilir. Bu dosyalar düz metin formatındadır, bu yüzden bu dosyaları asla GitHub'a veya halka açık yerlere yüklememelisin.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 2:</strong> <code>subprocess</code> ile AWS CLI çalıştırmak yerine neden <code>boto3</code> tercih edilir?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
<code>boto3</code> ile gelen yanıt doğrudan Python sözlüğü (dict) olarak gelir, metin ayrıştırma (parse) yapman gerekmez. Ayrıca hata yönetimi, pagination ve AWS'ye özgü özellikler çok daha kolay kontrol edilir. <code>subprocess</code> metin çıktısını elle ayrıştırmak zorunda kalırsın, bu da hata yapma olasılığını artırır.
</div>
</details>
</div>

<div style="margin-bottom: 25px; border: 1px solid #334155; padding: 15px; border-radius: 10px;">
<strong>Soru 3:</strong> Otomatik yedekleme scriptini her gün gece yarısı çalışacak şekilde nasıl ayarlarsın?
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #ffd43b; font-weight: bold;">Çözümü Gör</summary>
<div style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 10px; color: #cbd5e1;">
Linux/Mac'te <code>crontab -e</code> ile cron job oluşturulur: <code>0 0 * * * python3 /yol/yedekleme.py</code>. Windows'ta ise Görev Zamanlayıcı (Task Scheduler) kullanılır. Daha modern yaklaşım olarak AWS Lambda + EventBridge (CloudWatch Events) ile bu scripti bulut üzerinde zamanlanmış şekilde de çalıştırabilirsin.
</div>
</details>
</div>
