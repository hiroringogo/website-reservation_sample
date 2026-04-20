import Image from "next/image";

const SQUARE_BOOKING_URL =
  process.env.NEXT_PUBLIC_SQUARE_BOOKING_URL || "#booking";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-display text-primary text-xl tracking-[0.15em]"
        >
          HANA
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {["Services", "Gallery", "Access"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted text-sm hover:text-text transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href={SQUARE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary-hover transition-colors"
          >
            Reserve
          </a>
        </nav>
        <a
          href={SQUARE_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden bg-primary text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors"
        >
          予約
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[50vh] md:h-[70vh] rounded-b-2xl overflow-hidden mx-0">
        <Image
          src="/images/hero.webp"
          alt="HANA Beauty & Nail salon"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 -mt-16 md:-mt-20 relative z-10">
        <div className="bg-surface rounded-2xl shadow-lg p-8 md:p-12 max-w-lg">
          <p className="text-primary text-xs font-semibold tracking-[0.2em] mb-3">
            JAPANESE BEAUTY & NAIL
          </p>
          <h1 className="font-display text-3xl md:text-4xl mb-3 leading-tight text-text">
            美しさに、
            <br />
            花を添えて
          </h1>
          <p className="text-muted text-sm mb-6">
            Costa Mesa, Orange County
          </p>
          <a
            href={SQUARE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3.5 text-sm rounded-xl hover:bg-primary-hover transition-colors"
          >
            Reserve via Square →
          </a>
        </div>
      </div>
    </section>
  );
}

const hairMenu = [
  { name: "Cut", nameJa: "カット", price: "$45" },
  { name: "Color", nameJa: "カラー", price: "$85~" },
  { name: "Treatment", nameJa: "トリートメント", price: "$55" },
  { name: "Head Spa", nameJa: "ヘッドスパ", price: "$35" },
];

const nailMenu = [
  { name: "Gel Nail", nameJa: "ジェルネイル", price: "$60" },
  { name: "Nail Art", nameJa: "ネイルアート", price: "$80~" },
  { name: "Hand Care", nameJa: "ハンドケア", price: "$40" },
  { name: "Foot Care", nameJa: "フットケア", price: "$50" },
];

function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary text-xs font-semibold tracking-[0.2em] mb-4">
          MENU
        </p>
        <h2 className="font-display text-2xl md:text-4xl mb-12 text-text">
          Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="font-display text-lg text-primary mb-6">Hair</h3>
            {hairMenu.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center py-3.5 border-b border-border last:border-b-0"
              >
                <div>
                  <span className="text-text text-sm font-medium">
                    {item.name}
                  </span>
                  <span className="text-subtle text-xs ml-2">
                    {item.nameJa}
                  </span>
                </div>
                <span className="text-primary text-sm font-semibold">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="font-display text-lg text-primary mb-6">Nail</h3>
            {nailMenu.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center py-3.5 border-b border-border last:border-b-0"
              >
                <div>
                  <span className="text-text text-sm font-medium">
                    {item.name}
                  </span>
                  <span className="text-subtle text-xs ml-2">
                    {item.nameJa}
                  </span>
                </div>
                <span className="text-primary text-sm font-semibold">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const galleryImages = [
  { src: "/images/gallery-1.webp", alt: "Hair styling" },
  { src: "/images/gallery-2.webp", alt: "Nail art" },
  { src: "/images/gallery-3.webp", alt: "Head spa" },
  { src: "/images/gallery-4.webp", alt: "Bridal updo" },
];

function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary text-xs font-semibold tracking-[0.2em] mb-4">
          GALLERY
        </p>
        <h2 className="font-display text-2xl md:text-4xl mb-12 text-text">
          Our Work
        </h2>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingCTA() {
  return (
    <section id="booking" className="py-16 md:py-24 px-6">
      <div className="max-w-xl mx-auto bg-surface rounded-2xl shadow-sm p-8 md:p-12 text-center">
        <p className="text-primary text-xs font-semibold tracking-[0.2em] mb-4">
          RESERVATION
        </p>
        <h2 className="font-display text-2xl md:text-3xl mb-4 text-text">
          ご予約はこちら
        </h2>
        <p className="text-muted text-sm mb-8 leading-relaxed">
          Square Appointmentsで24時間いつでもオンライン予約が可能です。
        </p>
        <a
          href={SQUARE_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white font-semibold px-12 py-4 text-sm rounded-xl hover:bg-primary-hover transition-colors"
        >
          Reserve on Square
        </a>
        <p className="text-subtle text-xs mt-6">
          当日予約・お電話でのご予約も承ります
        </p>
      </div>
    </section>
  );
}

function Access() {
  return (
    <section id="access" className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary text-xs font-semibold tracking-[0.2em] mb-4">
          ACCESS
        </p>
        <h2 className="font-display text-2xl md:text-4xl mb-8 text-text">
          アクセス
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-video md:aspect-square bg-border rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53136.48585025456!2d-117.93554!3d33.6633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd12802d5539%3A0xd1451e04e778851e!2sCosta%20Mesa%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HANA Beauty & Nail location"
            />
          </div>

          <div className="flex flex-col justify-center gap-4">
            <h3 className="font-display text-lg text-text">
              HANA Beauty & Nail
            </h3>
            <div className="space-y-2 text-muted text-sm">
              <p>123 Baker St, Costa Mesa, CA 92626</p>
              <p>
                TEL:{" "}
                <a href="tel:+17145550182" className="hover:text-text">
                  (714) 555-0182
                </a>
              </p>
              <p>営業時間: 10:00 – 20:00（月曜定休）</p>
            </div>
            <a
              href={SQUARE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-semibold px-8 py-3 text-sm rounded-xl hover:bg-primary-hover transition-colors w-fit mt-4"
            >
              オンライン予約
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-surface py-10 px-6 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <a
          href="#"
          className="font-display text-primary text-xl tracking-[0.15em]"
        >
          HANA
        </a>
        <nav className="flex gap-6">
          {["Services", "Gallery", "Access"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted text-xs hover:text-text transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="w-full border-t border-border mt-4 pt-4">
          <p className="text-subtle text-xs text-center">
            © 2026 HANA Beauty & Nail. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <BookingCTA />
      <Access />
      <Footer />
    </main>
  );
}
