"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Award, CheckCircle, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeMediumTitles"
        background="floatingGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Inicio",
          id: "hero",
        },
        {
          name: "Nuestra Historia",
          id: "about",
        },
        {
          name: "Productos",
          id: "products",
        },
        {
          name: "Testimonios",
          id: "testimonials",
        },
        {
          name: "Contacto",
          id: "contact",
        },
      ]}
      brandName="El mercadito del abuelo"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "gradient-bars",
      }}
      logoText="Frescura de mercado, calidez de familia"
      description="Más de 25 años llevando productos seleccionados diariamente a tu mesa. Compra online la frescura y confianza que solo El mercadito del abuelo ofrece."
      buttons={[
        {
          text: "Explorar productos frescos",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/wicker-basket-fresh-leafy-vegetables-arranged-row-market-stall_23-2148209773.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Un cuarto de siglo con ustedes"
      metrics={[
        {
          icon: Award,
          label: "Años de tradición",
          value: "25+",
        },
        {
          icon: CheckCircle,
          label: "Productos locales",
          value: "100%",
        },
        {
          icon: Users,
          label: "Familias felices",
          value: "5000+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Tomates Orgánicos",
          price: "$2.50 / kg",
          imageSrc: "http://img.b2bpic.net/free-photo/healthy-ingredients-included-salad_23-2148173925.jpg",
        },
        {
          id: "2",
          name: "Aguacates Hass",
          price: "$3.00 / unidad",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-green-ripe-feijoas-bucket-with-chopped-slices-avocados-wooden-kitchen-board-with-parsley-isolated-wooden-background_141793-84502.jpg",
        },
        {
          id: "3",
          name: "Limones Frescos",
          price: "$1.20 / kg",
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-lemons-arrangement-top-view_23-2148668765.jpg",
        },
        {
          id: "4",
          name: "Fresas de Campo",
          price: "$4.50 / cesta",
          imageSrc: "http://img.b2bpic.net/free-photo/set-red-cloth-strawberries-coffee-cup-wooden-background-top-view_176474-3833.jpg",
        },
        {
          id: "5",
          name: "Zanahorias Baby",
          price: "$1.80 / kg",
          imageSrc: "http://img.b2bpic.net/free-photo/bunch-beautiful-organic-carrots_23-2148332282.jpg",
        },
        {
          id: "6",
          name: "Cebollas Rojas",
          price: "$1.50 / kg",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-different-types-onion-basket-sackcloth-red-table_141793-11046.jpg",
        },
      ]}
      title="Selección del día"
      description="Frescura absoluta seleccionada cada mañana."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "María G.",
          role: "Clienta",
          company: "Vecina",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-woman-standing-front-toys-amusement-park_23-2147910668.jpg",
        },
        {
          id: "2",
          name: "José L.",
          role: "Cliente",
          company: "Vecino",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-slavic-female-gardener-wearing-gardening-hat-holding-vegetable-basket-pumpkin-orange_141793-92831.jpg",
        },
        {
          id: "3",
          name: "Elena R.",
          role: "Clienta",
          company: "Vecina",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/brunette-woman-with-paper-bag-full-healthy-food_23-2148173305.jpg",
        },
        {
          id: "4",
          name: "Carlos M.",
          role: "Cliente",
          company: "Vecino",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-man-holding-fresh-vegetables-fruits-grocery-paper-bag_23-2147855409.jpg",
        },
        {
          id: "5",
          name: "Sofía T.",
          role: "Clienta",
          company: "Vecina",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/merchant-offering-bio-food-alternative_482257-76500.jpg",
        },
      ]}
      title="Lo que dicen nuestras familias"
      description="Confianza que se transmite de generación en generación."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "¿Tienen entregas a domicilio?",
          content: "Sí, entregamos en toda el área urbana cada mañana.",
        },
        {
          id: "2",
          title: "¿Cómo seleccionan los productos?",
          content: "Abuelo selecciona personalmente cada pieza cada madrugada.",
        },
        {
          id: "3",
          title: "¿Puedo hacer cambios?",
          content: "Tu satisfacción es nuestra prioridad; si algo no te convence, lo cambiamos.",
        },
      ]}
      sideTitle="Preguntas frecuentes"
      sideDescription="Todo lo que necesitas saber para tu compra."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Estamos aquí para ti"
      description="Contáctanos para pedidos especiales o consultas."
      inputs={[
        {
          name: "nombre",
          type: "text",
          placeholder: "Tu nombre",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Tu correo electrónico",
          required: true,
        },
      ]}
      textarea={{
        name: "mensaje",
        placeholder: "Tu mensaje",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/japanese-couple-spending-time-together_23-2149271907.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="El mercadito del abuelo"
      columns={[
        {
          title: "Navegación",
          items: [
            {
              label: "Productos",
              href: "#products",
            },
            {
              label: "Nosotros",
              href: "#about",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacidad",
              href: "#",
            },
            {
              label: "Términos",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
