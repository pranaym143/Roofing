import { Service, Project, Testimonial, ProcessStep, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'roof-replacement',
    title: 'Roof Replacement',
    subtitle: 'High-End Masterpieces',
    iconName: 'ShieldAlert',
    description: 'Complete visual and structural architectural redesigns utilizing the world\'s finest Slate, Copper, and Premium Standing-Seam alloys.',
    longDescription: 'Our replacement services redefine residential protection. We don\'t just replace shingles; we re-engineer your home\'s envelope. We incorporate advanced underlayment systems, active ridge ventilation, and custom-fabricated valley systems that guarantee a lifetime of performance.',
    benefits: [
      'Genuine Italian Slate & High-Grade Copper options',
      'Dual-layer synthetic self-sealing ice & water barriers',
      'Custom color-matched perimeter metal details',
      'Integrated active dynamic thermal under-roof airflow setup'
    ],
    priceRange: '$22,000 - $65,000+',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'residential-roofing',
    title: 'Residential Roofing',
    subtitle: 'Luxury Living Protection',
    iconName: 'Home',
    description: 'Impeccable architectural tiles, shake, and heavy composite slates crafted to complement state-of-the-art luxury design.',
    longDescription: 'Engineered specifically for custom architectural estates. We work hand-in-hand with luxury designers to deploy roofing lines that serve as the crown jewel of your home, blending seamless protection with world-class curb appeal.',
    benefits: [
      'Architectural visual alignment with home exterior design',
      'Class 4 impact-resistant ultra-luxury shingles',
      'Authentic certified cedar shake treatments',
      'Noise-insulating decoupling layer installation'
    ],
    priceRange: '$18,000 - $48,000+',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'commercial-roofing',
    title: 'Commercial Roofing',
    subtitle: 'Enterprise-Grade Scale',
    iconName: 'Building',
    description: 'High-performance flat roof systems & structural standing-seam metals built for modern commercial assets and durability.',
    longDescription: 'Top-tier roofing solutions designed for industrial buildings, retail complexes, and ultra-modern office structures. We specialize in robust, high-energy-efficiency TPO, EPDM, and thick-gauge metal structural panels.',
    benefits: [
      'TPO Cool-Roof technologies for 35% lower HVAC costs',
      'Thick-gauge architectural panel structural standing-seams',
      'Comprehensive high-load structural drainage design',
      'Certified commercial wind-safeguard installations'
    ],
    priceRange: '$35,000 - $150,000+',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'storm-damage',
    title: 'Storm Damage',
    subtitle: 'Elite Forensic Recovery',
    iconName: 'CloudLightning',
    description: 'Rapid forensic hail/wind structural diagnostics coupled with seamless insurance coordination to rebuild better.',
    longDescription: 'When extreme weather strikes, we treat your recovery with clinical precision. Our team conducts full forensic thermal and physical examinations of the compromised roof casing and files high-definition documentation for dynamic claims processing.',
    benefits: [
      'Digital drone damage density thermal reports',
      'Certified forensic roof inspectors',
      'Premium heavy protection during rebuilding',
      'Insurance claim mitigation and alignment'
    ],
    priceRange: 'Often 100% covered by primary insurance policies',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'roof-repair',
    title: 'Roof Repair',
    subtitle: 'Precision Leak Prevention',
    iconName: 'Droplets',
    description: 'Surgical repair of high-risk valleys, chimney flashes, and skylight transitions with guaranteed seal tech.',
    longDescription: 'A custom service aimed at resolving troublesome compromises without requiring a complete roof overhaul. We use thermographic imaging to isolate specific water entry routes, replacing old materials with premium commercial seals.',
    benefits: [
      'Thermal micro-leak vector profiling',
      'Replacement flashing in pure copper or architectural zinc',
      'Chemical-binding waterproof seal compounds',
      'Full 5-year guarantee on targeted repair locations'
    ],
    priceRange: '$1,500 - $6,500',
    image: 'https://images.unsplash.com/photo-1508333706533-1ec43ecb1606?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gutter-systems',
    title: 'Gutter Systems',
    subtitle: 'Custom Fascia Drainage',
    iconName: 'Wrench',
    description: 'Integrated seamless architectural copper and structural aluminum systems engineered to divert water elegantly.',
    longDescription: 'Gutters are the circulatory system of a premium roof. We design thick-gauge seamless gutter runs that integrate with your home fascia, using oversized flow troughs that match the style and clean lines of minimalist home design.',
    benefits: [
      'Heavy-duty copper that develops and maintains a natural patina',
      'Fascia-matching concealed brackets for an absolute clean profile',
      'Self-shedding debris leaf guards with micro-fine mesh',
      'Oversized downspouts preventing dynamic splash-back'
    ],
    priceRange: '$4,000 - $12,000+',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'The Obsidian Pavilion',
    category: 'modern',
    location: 'Aspen, Colorado',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80', // Shingle look
    specs: {
      material: 'Matte-Black Standing Seam Steel',
      area: '6,400 sq ft',
      duration: '11 Days',
      warranty: 'Lifetime Structural'
    },
    description: 'An architectural villa nestled in the mountains featuring sharp dynamic pitch transitions and hidden drainage. Replaced degraded dark cedar transitions with structural matte-black metal to withstand high snow loads.'
  },
  {
    id: 'project-2',
    title: 'The Slate Coastline Villa',
    category: 'residential',
    location: 'Malibu, California',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1508333706533-1ec43ecb1606?auto=format&fit=crop&w=1200&q=80',
    specs: {
      material: 'Fine-Grain Welsh Hand-Split Slate',
      area: '8,200 sq ft',
      duration: '18 Days',
      warranty: '100-Year Slate Warranty'
    },
    description: 'A coastal property with constant marine-layer exposure. Upgraded to natural slate with solid marine-grade stainless fasteners, copper counter-flashings, and high-wind structural underlayments.'
  },
  {
    id: 'project-3',
    title: 'The Kinetic Atrium Complex',
    category: 'commercial',
    location: 'Austin, Texas',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    specs: {
      material: 'Ultra-Cool TPO & Solar-Panels',
      area: '24,000 sq ft',
      duration: '24 Days',
      warranty: '35-Year Commercial'
    },
    description: 'A commercial tech headquarters featuring smart cool-roof membrane systems. Replaced old gravel-asphalt layers with insulated reflective multi-ply system, integrating structural solar frame brackets.'
  },
  {
    id: 'project-4',
    title: 'The Copper Crest Estate',
    category: 'drone',
    location: 'Greenwich, Connecticut',
    image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    specs: {
      material: 'Hand-Hammered Standing Seam Copper',
      area: '11,500 sq ft',
      duration: '29 Days',
      warranty: 'Lifetime Structural'
    },
    description: 'Drone footage highlights the breathtaking radius curves of this iconic residential crown. Custom fabricated on-site with hand-swaged counter seams, expanding step pans, and ornate custom scuppers.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Alessia Vandevelde',
    role: 'Principal Architect',
    location: 'Vandevelde & Co.',
    rating: 5,
    comment: 'Working with Roofing Redefined is a dream for modern architects. Their understanding of clean alignment details, gutter-free visual boundaries, and advanced under-roof temperature cooling systems is absolute world-class.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    projectType: 'Matte-Black Metal',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Harrison Sterling',
    role: 'Estate Owner',
    location: 'Amagansett Estate',
    rating: 5,
    comment: 'My slate roof replacement was handled with extreme care. The team set up complex debris nets, respected my landscaping perfectly, and treated my home with the discretion and precision of a true premium partner.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    projectType: 'Welsh Natural Slate',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Marcus Vance',
    role: 'Managing Director',
    location: 'Elysium Living Communities',
    rating: 5,
    comment: 'For our commercial assets, they delivered a flawless thermal profile and high-performance TPO installation in record time. Their documentation and safety protocols surpass all expectations. Highly recommended.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    projectType: 'Commercial TPO Membrane',
    verified: true
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Forensic Drone Inspection',
    subtitle: 'Thermal and Structural Diagnostics',
    description: 'We deploy thermal imaging drones and utilize certified structural engineers to create a complete digital mapping of your roof integrity, identifying micro-compromises before they spread.',
    detailPoints: [
      'High-zoom aerial 4K documentation',
      'Infrared thermal leak detection profiling',
      'Structural stress and decay measurements',
      'Detailed visual status and repair modeling report'
    ],
    image: 'https://images.unsplash.com/photo-1508333706533-1ec43ecb1606?auto=format&fit=crop&w=600&q=80'
  },
  {
    step: '02',
    title: 'Architectural Project Plan',
    subtitle: 'Immersive Costing and Material Pairings',
    description: 'We coordinate on materials, structural aesthetics, and timing. Our digital custom estimation system guarantees absolute cost transparency and exact timeline projections without a single hidden digit.',
    detailPoints: [
      'Sleek 3D visual roof renderings',
      'Material sample tactile evaluation consultations',
      'Fixed transparent pricing and timeline schedules',
      'Custom project scheduling matched to your lifestyle'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    step: '03',
    title: 'Precision Craft Installation',
    subtitle: 'White-Glove Construction Stewardship',
    description: 'Our proprietary certified master craftsmen initiate structural deployment. We install triple-layered weather guards, self-sealing membranes, and premium accents with extreme focus and safety standards.',
    detailPoints: [
      'Strict site perimeter protective safety netting',
      'Proprietary triple-layer extreme ice & water lining',
      'In-house expert metal smithing and valley styling',
      'Daily site sweep and landscape safety screening'
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80'
  },
  {
    step: '04',
    title: 'Elite Quality Assurance',
    subtitle: 'Lifetime Guarantee Certification',
    description: 'An independent Master Roofing Inspector validates every detail, fastener, and valley water flow path. Only after their rigorous check do we issue your lifetime warranty package.',
    detailPoints: [
      'Independent certified inspector walk-through',
      'High-pressure artificial water flow drainage testing',
      'Detailed registry of material warranties',
      'Handover of premium digital dashboard portfolio files'
    ],
    image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=600&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What makes Roofing Redefined different from a general roofing contractor?',
    answer: 'Unlike generic local roofers, we operate as a luxury design-and-build architectural roofing partner. We avoid standard shortcuts, employ absolute premium permanent metals/slates, use fully in-house certified craftsman crews, integrate forensic thermal drone analysis, and supply clean fixed-price bids upfront with standard multi-decade structural warranties.',
    category: 'The Standard'
  },
  {
    id: 'faq-2',
    question: 'How long does a premium metal or slate roof installation typically take?',
    answer: 'Most high-end residential projects (between 4,000 and 8,500 square feet) are completed within 10 to 18 operational days. We prepare a meticulous day-by-day plan to minimize client footprint, and our meticulous landscape protective netting keeps your driveways, gardens, and architecture pristine throughout construction.',
    category: 'Timeline'
  },
  {
    id: 'faq-3',
    question: 'Do you provide storm damage assistance, and can you interface with high-end insurers?',
    answer: 'Yes, absolutely. Our inspection leads are certified forensic investigators. We provide detailed digital 4K drone reports, visual thermal moisture mappings, and structural damage breakdowns that supply luxury insurance adjusted brokers with the absolute documentation required to process claims without delays.',
    category: 'Insurance'
  },
  {
    id: 'faq-4',
    question: 'What is your dynamic warranty guarantee?',
    answer: 'We provide an industry-leading 25-Year Master Craftsmanship Warranty alongside standard lifetime manufacturer material warranties. On premium materials like Welsh Slate and Custom Copper, the materials are certified to support high performance for 75 to 100+ years.',
    category: 'Warranty'
  }
];
