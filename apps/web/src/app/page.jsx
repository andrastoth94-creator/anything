"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Droplets,
  Car,
  Calendar,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const packages = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      name: "Flash Shine",
      subtitle: "Külső tisztítás",
      price: "20.000",
      features: [
        "Karcmentes mosás",
        "Felniket, karosszériaelemek és gumifelületek ápolása tisztítása",
        "Bogár/rovar maradványok takarítása",
        "Gyorswax a fényes, védett felületért",
      ],
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      name: "Inner Glow",
      subtitle: "Belső mosás",
      price: "25.000",
      features: [
        "Porszívózás, textil felületek tisztítása",
        "Bőr és Műanyag felületek tisztítása és ápolása",
        "Ablakok belső tisztítása",
      ],
    },
    {
      icon: <Car className="w-8 h-8" />,
      name: "Total Care",
      subtitle: "Külső & Belső",
      price: "40.000",
      features: [
        "Teljes külső mosás + wax + gumiápolás",
        "Belső bőrtisztítás, műanyagok ápolása",
        "Porszívózás, szőnyegek, ablakok tisztítása",
      ],
      popular: true,
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      name: "Maintenance Pass",
      subtitle: "Bérlet",
      price: "145.000",
      features: [
        "4 alkalmas autókozmetikai bérlet",
        "Külső/Belső takarítás",
        "60 napig felhasználható",
      ],
    },
  ];

  const faqs = [
    {
      question: "Kézi mosás – karcmentes tisztítás?",
      answer:
        "Minden autót alapvetően kézi, karcmentes technikával tisztítunk. Erősen szennyezett járművek esetén a tisztítás több időt és extra munkát igényelhet, ami feláras lehet. Ilyen esetekben kérjük, előre jelezd a foglaláskor.",
    },
    {
      question: "Mire van szükség a helyszíni mosáshoz?",
      answer:
        "A megfelelő munkavégzéshez az autónak körülbelül 1–1,5 méter szabad helyre van szüksége minden oldalon, hogy az ajtók kényelmesen nyithatók legyenek. Hideg időben és esőben is vállalunk mosást, de ilyen esetekben fedett beálló vagy garázs biztosítása szükséges.",
    },
    {
      question: "Kárpittisztítást is vállalsz?",
      answer:
        "Belső takarítás során a kárpitokat korlátozott mértékben tudjuk tisztítani, mivel nem ipari takarítógéppel dolgozunk. Erősebb szennyeződések esetén előzetes egyeztetés szükséges, hogy pontosan meg tudjuk mondani, mit tudunk vállalni. Bőrfelületek esetében nincs ilyen probléma.",
    },
    {
      question: "Hogyan tudok időpontot foglalni?",
      answer:
        'A „Időpontfoglalás" gombra kattintva VAGY e-mailben VAGY telefonon.',
    },
    {
      question: "Milyen területen dolgozol?",
      answer:
        "Elsősorban az alábbi területeken vállalunk mobil autókozmetikai szolgáltatást: Budapest: II., III., XI. kerület Budapesten kívül: Budaörs, Törökbálint, Budakeszi, Páty, Telki, Tatabánya, Tata, Oroszlány. Más helyszín esetén kérj egyedi egyeztetést.",
    },
  ];

  const galleryImages = [
    {
      id: 1,
      url: "/anything/images/exterior-before.jpg",
      alt: "Külső mosás előtt",
      label: "ELŐTTE",
    },
    {
      id: 2,
      url: "/anything/images/exterior-after.jpg",
      alt: "Külső mosás után",
      label: "UTÁNA",
    },
    {
      id: 3,
      url: "/anything/images/interior-before.jpg",
      alt: "Belső takarítás előtt",
      label: "ELŐTTE",
    },
    {
      id: 4,
      url: "/anything/images/interior-after.jpg",
      alt: "Belső takarítás után",
      label: "UTÁNA",
    },
    {
      id: 5,
      url: "/anything/images/roka.jpg",
      alt: "Külső mosás előtt",
      label: "ELŐTTE",
    },
     {
      id: 6,
      url: "/anything/images/roka.jpg",
      alt: "Külső mosás után",
      label: "UTÁNA",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-[system-ui,-apple-system,BlinkMacSystemFont,'SF_Pro_Display','Segoe_UI',Roboto,sans-serif]">
      {/* Large Logo in Top Right Corner - Fixed Position */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-6 right-6 z-50"
      >
        <img
          src="https://ucarecdn.com/c3b3882a-4a09-4260-b358-1e94e44cd635/-/format/auto/"
          alt="NDRS Logo"
          className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* Hero Section with Cinematic Background Image */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Cinematic Car Wash Background */}
        <div className="absolute inset-0">
          <img
            src="/anything/images/polishing.jpg"
            alt="Professional Car Detailing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.h1
            className="text-7xl md:text-9xl font-bold mb-6 tracking-tight"
            style={{
              background:
                "linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 50%, #E5E5E5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            ndrs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl md:text-3xl mb-4 font-light tracking-tight text-gray-100"
          >
            Prémium Mobil Autókozmetika
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light"
          >
            Professzionális autókozmetikai szolgáltatás ott, ahol neked a legkényelmesebb.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="https://calendly.com/andras-toth94/idopontok"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-white text-black font-semibold text-lg tracking-tight rounded-full hover:shadow-2xl transition-all duration-300"
            >
              Foglalj most
            </motion.a>
            <motion.a
              href="#csomagok"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg tracking-tight rounded-full border-2 border-white/30 hover:border-white hover:bg-white/20 transition-all duration-300"
            >
              Csomagok megtekintése
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2
              className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 tracking-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Rólunk
            </h2>
            <div className="w-20 h-1 bg-gray-300 mx-auto mb-12 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
              Mobil autókozmetika prémium színvonalon, a te idődhöz igazítva. 
              Amíg mi dolgozunk, te a számodra fontos dolgokra koncentrálhatsz.
              Autód tapasztalt, megbízható kezekben van – precízen, kompromisszumok nélkül.

            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="csomagok" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 tracking-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Csomagjaink
            </h2>
            <div className="w-20 h-1 bg-gray-300 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {pkg.popular && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-1.5 text-sm font-semibold rounded-full shadow-lg z-10 tracking-tight"
                  >
                    NÉPSZERŰ
                  </motion.div>
                )}
                <div
                  className={`bg-white p-8 rounded-3xl border-2 ${pkg.popular ? "border-gray-900 shadow-xl" : "border-gray-200"} hover:border-gray-400 hover:shadow-2xl transition-all duration-300 h-full flex flex-col`}
                >
                  <div className="text-gray-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-1 tracking-tight text-gray-900">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 font-light">
                    {pkg.subtitle}
                  </p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900 tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-lg text-gray-500 ml-2 font-light">
                      Ft
                    </span>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start text-gray-700 text-sm font-light leading-snug"
                      >
                        <span className="text-gray-900 mr-2 font-semibold">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 tracking-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Munkáink
            </h2>
            <div className="w-20 h-1 bg-gray-300 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 font-light">Előtte & utána</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full font-semibold text-sm shadow-lg tracking-tight">
                    {image.label}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow-lg tracking-tight">
                    {image.alt}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 tracking-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Gyakran Ismételt Kérdések
            </h2>
            <div className="w-20 h-1 bg-gray-300 mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-3xl overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold pr-4 text-gray-900 tracking-tight">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-900 flex-shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-gray-700 leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Készen állsz a prémium élményre?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
            Foglalj időpontot még ma és tapasztald meg a különbséget!
          </p>
          <motion.a
            href="https://calendly.com/andras-toth94/idopontok"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 bg-white text-black font-semibold text-xl tracking-tight rounded-full hover:shadow-2xl transition-all duration-300"
          >
            Foglalj most
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-black text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <img
              src="https://ucarecdn.com/c3b3882a-4a09-4260-b358-1e94e44cd635/-/format/auto/"
              alt="NDRS Logo"
              className="w-20 h-20 object-contain mb-4 opacity-90"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
            <div>
              <h3 className="text-gray-300 font-semibold mb-4 text-lg tracking-tight">
                Szolgáltatási Területek
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Budapest: II., III., XI. kerület
                <br />
                Budaörs, Törökbálint, Budakeszi
                <br />
                Páty, Telki, Tatabánya, Tata, Oroszlány
              </p>
            </div>

            <div>
              <h3 className="text-gray-300 font-semibold mb-4 text-lg tracking-tight">
                Gyors Linkek
              </h3>
              <ul className="space-y-2 text-gray-500 text-sm font-light">
                <li>
                  <a
                    href="#csomagok"
                    className="hover:text-white transition-colors"
                  >
                    Csomagok
                  </a>
                </li>
                <li>
                  <a
                    href="https://calendly.com/andras-toth94/idopontok"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Időpontfoglalás
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-300 font-semibold mb-4 text-lg tracking-tight">
                Kapcsolat
              </h3>
              <div className="space-y-2 text-gray-500 text-sm font-light">
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4" />
                  Budapest és környéke
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-600 text-sm font-light">
              © 2026 ndrs - Prémium Mobil Autókozmetika. Minden jog fenntartva.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
