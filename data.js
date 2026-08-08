/* ==========================================================================
   TCOMIX by Yuva Enterprises — data.js
   Content data, following Shivratna's populateFromData() pattern.
   ⚠ PLACEHOLDER values are marked inline. Replace before launch —
   search this file for "PLACEHOLDER" to find every one.
   ========================================================================== */

var TX = {

  brand: {
    name: "TCOMIX",
    fullName: "TCOMIX by Yuva Enterprises",
    logoLetter: "T"
  },

  contact: {
    whatsappNumber: "910000000000",       // PLACEHOLDER — confirm WhatsApp number
    phoneDisplay: "+91 00000 00000",      // PLACEHOLDER
    email: "info@tcomix.example",         // PLACEHOLDER
    address: "Plot No. 00, MIDC Industrial Area, [City], Maharashtra 000000", // PLACEHOLDER
    hours: "Mon–Sat, 9:30 AM – 6:30 PM",  // PLACEHOLDER
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  },

  hero: {
    statValue: "50,000+",                 // PLACEHOLDER — headline business metric
    statLabel: "Cups Served Monthly",     // PLACEHOLDER
    statDesc: "Across hotels, cafés and offices we supply every month." // PLACEHOLDER
  },

  stats: {
    years: "8+",           // PLACEHOLDER — years in operation
    outlets: "300+",       // PLACEHOLDER — outlets/clients served
    flavors: "40+",        // PLACEHOLDER — flavors/SKUs offered
    cities: "12+"          // PLACEHOLDER — cities/regions covered
  },

  testimonials: [
    {
      hero: true,
      quote: "Consistent taste, every single batch — our staff never has to think twice.", // PLACEHOLDER
      name: "R. Deshmukh",           // PLACEHOLDER
      role: "Café Owner"             // PLACEHOLDER
    },
    {
      quote: "Their premix range let us standardise beverages across all our outlets.", // PLACEHOLDER
      name: "Ashok Patil",           // PLACEHOLDER
      role: "F&B Manager, Hotel Suvarna" // PLACEHOLDER
    },
    {
      quote: "Reliable delivery and great support whenever we scale up an order.", // PLACEHOLDER
      name: "Sunita More",           // PLACEHOLDER
      role: "Amruttulya Chain Operator" // PLACEHOLDER
    },
    {
      quote: "TCOMIX feels like a genuine business partner, not just a vendor.", // PLACEHOLDER
      name: "Vikram Shah",           // PLACEHOLDER
      role: "Procurement Head, Corporate Office" // PLACEHOLDER
    }
  ],

  whyTcomix: [
    {
      title: "Consistent Quality",       // PLACEHOLDER
      desc: "Every batch is quality-checked so your beverage tastes the same, cup after cup." // PLACEHOLDER
    },
    {
      title: "Bulk Manufacturing Capability", // PLACEHOLDER
      desc: "Manufacturing infrastructure built to reliably serve large, recurring orders." // PLACEHOLDER
    },
    {
      title: "On-Time Delivery",         // PLACEHOLDER
      desc: "A logistics process built around hospitality timelines, not the other way round." // PLACEHOLDER
    },
    {
      title: "Business Partnership Approach", // PLACEHOLDER
      desc: "We work with your team on flavors, packaging and pricing as your needs grow." // PLACEHOLDER
    }
  ],

  productCategories: [
    {
      id: "tea-premix",
      tag: "Tea Premix",
      title: "Tea Premix Range",
      desc: "Instant tea premixes formulated for consistent strength, color and aroma at scale.", // PLACEHOLDER
      stat1: { number: "12+", label: "Flavors" },   // PLACEHOLDER
      stat2: { number: "1kg–25kg", label: "Pack Sizes" }, // PLACEHOLDER
      stat3: { number: "6 mo", label: "Shelf Life" }, // PLACEHOLDER
      variants: ["Masala Tea", "Ginger Tea", "Elaichi Tea", "Kadak Tea", "Lemon Tea", "Green Tea", "Kesar Tea", "Tulsi Tea"] // PLACEHOLDER
    },
    {
      id: "coffee-premix",
      tag: "Coffee Premix",
      title: "Coffee Premix Range",
      desc: "Smooth, café-style instant coffee premixes for hotels, offices and QSR counters.", // PLACEHOLDER
      stat1: { number: "10+", label: "Flavors" },   // PLACEHOLDER
      stat2: { number: "1kg–25kg", label: "Pack Sizes" }, // PLACEHOLDER
      stat3: { number: "6 mo", label: "Shelf Life" }, // PLACEHOLDER
      variants: ["Classic Coffee", "Strong Coffee", "Cappuccino", "Cold Coffee Mix", "Hazelnut Coffee", "Mocha", "Sugar-Free Coffee"] // PLACEHOLDER
    },
    {
      id: "vending-premix",
      tag: "Vending Premix",
      title: "Vending Machine Premix",
      desc: "Purpose-built premixes engineered for compatibility across major vending machine brands.", // PLACEHOLDER
      stat1: { number: "8+", label: "Blends" },     // PLACEHOLDER
      stat2: { number: "500g–20kg", label: "Pack Sizes" }, // PLACEHOLDER
      stat3: { number: "1000+", label: "Cups/Kg Yield" }, // PLACEHOLDER
      variants: ["Tea Vending Mix", "Coffee Vending Mix", "3-in-1 Mix", "Sugar-Free Vending Mix", "Soup Premix", "Hot Chocolate Mix"] // PLACEHOLDER
    }
  ],

  howToOrder: [
    { index: "01", label: "Enquire" },     // PLACEHOLDER
    { index: "02", label: "Get Sample" },  // PLACEHOLDER
    { index: "03", label: "Confirm Quote" }, // PLACEHOLDER
    { index: "04", label: "Place Order" }, // PLACEHOLDER
    { index: "05", label: "Fast Delivery" } // PLACEHOLDER
  ],

  whoWeServe: [
    "Hotels", "Restaurants", "Cafés", "Corporate Offices",
    "Educational Institutions", "Caterers", "Distributors", "Wholesalers"
  ],

  certifications: [
    "FSSAI Certified"      // PLACEHOLDER — confirm exact certifications held
  ],

  faqs: [
    {
      q: "What is your minimum order quantity (MOQ)?",
      a: "MOQ varies by product category — reach out on WhatsApp and we'll confirm the right quantity for your business type." // PLACEHOLDER
    },
    {
      q: "Do you offer free samples before a bulk order?",
      a: "Yes, sample availability and turnaround time is confirmed per enquiry — details are being finalised." // PLACEHOLDER
    },
    {
      q: "What are your delivery timelines?",
      a: "Delivery timelines depend on order size and location — final policy pending confirmation." // PLACEHOLDER
    },
    {
      q: "Do you offer private labeling or custom packaging?",
      a: "Yes, private labeling and custom packaging options are available — details pending confirmation." // PLACEHOLDER
    }
  ],

  companyStory: {
    foundingYear: "20XX",   // PLACEHOLDER
    founderName: "[Founder Name]", // PLACEHOLDER
    story: "TCOMIX by Yuva Enterprises was founded to bring consistent, quality tea and coffee premixes to businesses that can't afford variation in taste at scale. [Full founding story pending client input.]" // PLACEHOLDER
  },

  qualityPromise: [
    { title: "Ingredient Sourcing", desc: "Sourced from vetted suppliers against defined quality standards." }, // PLACEHOLDER
    { title: "Manufacturing Hygiene", desc: "Production floor maintained to food-safety hygiene standards." }, // PLACEHOLDER
    { title: "Batch Consistency", desc: "Every batch tested against a fixed taste and strength benchmark." }, // PLACEHOLDER
    { title: "Supply Reliability", desc: "Built-in buffer stock and planning to avoid supply gaps." } // PLACEHOLDER
  ],

  capabilities: [
    { title: "Manufacturing Capacity", desc: "[Capacity figure] units/month across our facility." }, // PLACEHOLDER
    { title: "FSSAI Certification", desc: "Manufacturing compliant with food safety regulations." }, // PLACEHOLDER
    { title: "Custom Flavor Development", desc: "In-house R&D for client-specific flavor profiles." }, // PLACEHOLDER
    { title: "Private Labeling", desc: "Custom packaging and branding available for bulk clients." }, // PLACEHOLDER
    { title: "Bulk Logistics", desc: "Delivery network covering [regions] — details pending." }, // PLACEHOLDER
    { title: "After-Sales Support", desc: "Dedicated support for reorders and quality feedback." }, // PLACEHOLDER
    { title: "Vending Compatibility", desc: "Formulated for compatibility with major vending machine brands." }, // PLACEHOLDER
    { title: "Flexible Pack Sizes", desc: "From small trial packs to bulk industrial packaging." } // PLACEHOLDER
  ],

  team: [
    { name: "[Founder Name]", role: "Founder & Director", bio: "Bio pending client input." },   // PLACEHOLDER
    { name: "[Name]", role: "Operations Lead", bio: "Bio pending client input." },               // PLACEHOLDER
    { name: "[Name]", role: "Quality Control Lead", bio: "Bio pending client input." },          // PLACEHOLDER
    { name: "[Name]", role: "Business Development", bio: "Bio pending client input." }           // PLACEHOLDER
  ],

  journey: [
    { year: "20XX", title: "Company Founded", desc: "TCOMIX by Yuva Enterprises begins operations." },       // PLACEHOLDER
    { year: "20XX", title: "FSSAI Certification Achieved", desc: "Manufacturing formally certified." },       // PLACEHOLDER
    { year: "20XX", title: "Capacity Expansion", desc: "Production capacity scaled to meet growing demand." },// PLACEHOLDER
    { year: "20XX", title: "New Markets", desc: "Expanded distribution to additional cities/regions." }       // PLACEHOLDER
  ]

};