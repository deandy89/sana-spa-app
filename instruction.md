Berikut adalah **Final Prompt** yang telah diperbarui. Saya menambahkan instruksi spesifik mengenai penggunaan *placeholder assets* (aset visual gratis) sementara dan rekomendasi *modern tech stack* (teknologi terbaru) agar hasil *development* lebih canggih, cepat, dan mulus.

Silakan salin teks di bawah ini untuk diberikan kepada AI atau Web Developer Anda:

---

**[System Role & Objective]**
Bertindaklah sebagai Expert UI/UX Designer dan Web Developer. Rancang struktur tata letak (layout) dan desain website portofolio *single-page/multi-page* untuk seorang Freelance Spa Therapist berbasis di Bali. Website ini harus berfungsi sebagai *high-converting booking page* dengan estetika premium kelas atas.

**[Reference & Art Direction]**

* **Referensi Estetika:** auraurbanretreat.com
* **Gaya Desain:** Editorial, Ultra-Minimalis, Elegan, Clean, dan Eksklusif.
* **Palet Warna (Earth Tones):** Dominasi warna krem lembut/sand (sebagai *background* utama), cokelat hangat (untuk aksen dan tombol), dan warna *muted skin-tones* untuk memberikan kesan *calming* dan organik.
* **Tipografi:**
* **Heading (H1, H2):** Gunakan font Serif beraksen elegan (seperti Playfair Display, Lora, atau Cormorant Garamond), ukuran *oversized*, berbobot *Light* atau *Regular*.
* **Paragraph/Body (p):** Gunakan font Sans-serif yang sangat bersih dan geometris (seperti Montserrat, Inter, atau Satoshi), berbobot *Light*, dengan *line-height* yang lega untuk *readability*.



**[Development & Tech Stack Recommendations]**

* **Untuk Custom Development:** Gunakan *modern tech stack* terbaru. Bangun menggunakan **Next.js (React) 14+** untuk performa dan SEO maksimal. Gunakan **Tailwind CSS** untuk *styling* efisien, dan integrasikan **GSAP (GreenSock)** atau **Framer Motion** untuk menghadirkan animasi *scroll* yang sangat mulus (*buttery smooth*) dan *micro-interactions* tingkat lanjut.

**[Media & Asset Placeholder Instructions (Sementara)]**

* Untuk tahap desain awal, **gunakan aset visual gratis (*royalty-free*) beresolusi tinggi** dari Unsplash, Pexels, atau Pixabay.
* Pilih foto atau *stock video* yang estetik dan selaras dengan *vibe* Bali: dedaunan tropis, ruangan spa minimalis, tekstur organik (batu, kayu, kain linen), atau deburan ombak yang tenang. Hindari foto *stock* yang terlihat kaku atau terlalu terang (pilih yang bernuansa *moody* dan *relaxing*).

**[Structural UI/UX & Layout Specs]**

* **Global Header / Navbar:**
* Desain *transparent header* yang menyatu dengan bagian Hero. Tidak ada garis bawah atau bayangan tebal.
* **Primary CTA (Kanan Atas):** Letakkan tombol **"Reserve"** berbentuk *pill-shaped* (oval penuh, `border-radius: 9999px`). Gunakan warna solid yang kontras namun tetap *earth-tone* agar langsung memancing konversi.
* **Menu Navigasi (Hamburger):** Gunakan ikon hamburger bergaris tipis. Seluruh teks navigasi di-*hidden* di dalam ikon ini.


* **Active Hamburger Menu (Toggled State):**
* Saat ikon diklik, munculkan *full-screen overlay menu* atau *side drawer* yang sangat bersih.
* **Hanya** memuat tiga menu utama yang disusun vertikal dengan ukuran font Serif besar: **Home**, **About Me**, dan **Contact Us**.


* **Hero Section (Above the Fold - 100vh):**
* **Background Visual:** Gunakan foto resolusi tinggi atau *cinematic slow-motion video loop* (*full-bleed* dari *stock* gratis). Tambahkan *dark/warm overlay* tipis agar teks di atasnya terbaca sempurna.
* **Foreground:** Judul teks besar (H1) di tengah layar (*center-aligned*) dengan *copywriting* bergaya editorial.
* **Secondary CTA (Tengah Bawah):** Tambahkan sebuah tombol besar berbentuk lingkaran sempurna (*circular outline button* dengan garis tipis). Tuliskan **"Reserve"** di dalamnya. Wajib sertakan interaksi *hover effect* yang elegan (misalnya: area lingkaran terisi warna bumi secara perlahan saat di-hover, atau kursor magnetik).



**[Content Context & Social Proof Strategy]**

* **Profesi:** Certified Professional Massage Therapist (Bali based).
* **Trust Signal (Wajib):** Tepat di bawah *Hero Section* (saat di-*scroll*), tampilkan logo atau teks *Social Proof* dengan tipografi elegan yang menyatakan: *"Trusted & Regularly Commissioned at Tribe Hotel, Bali"*. Buat senatural mungkin, gunakan gaya *subtle logo strip* atau teks kutipan editorial.