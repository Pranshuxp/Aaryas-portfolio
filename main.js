/**
 * AARYA BHUJADE // AI FILMMAKER & VFX SPECIALIST
 * Master Application Controller & Interactive Canvas Scrubber Engine
 * Synchronized with Lenis Smooth Scroll & GSAP ScrollTrigger
 */

(function () {
  'use strict';

  // ==========================================================================
  // MASTER CURATED ARCHIVE & PRODUCTION DATABASE
  // ==========================================================================
// === CLIENT CAMPAIGNS & REELS DATA ===
/**
 * Client campaigns supplied for the portfolio, with the descriptions
 * written for each Instagram reel.
 */

const pipeline = [
  { step: 'Environment Design', tool: 'AI-generated environments' },
  { step: 'Motion Design', tool: 'Cinematic motion graphics' },
  { step: 'Scene Extension', tool: 'Visual world-building' },
  { step: 'Delivery', tool: 'Campaign master' },
];

function runtime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

const CAMPAIGNS = [
  {
    code: 'DYm5WygtS4A',
    title: 'PAYAL GAMING × OWND!',
    reelTitle: 'Payal Gaming × OWND!',
    tag: 'COMMERCIAL',
    category: 'ads',
    reelCategory: 'COMMERCIAL',
    seconds: 28,
    description: 'AI-generated environments and cinematic motion graphics crafted to bring gaming-inspired brand storytelling to life.',
  },
  {
    code: 'DYxFR-jMMZV',
    title: 'VEEN DOGHANTALI HI TUTENA | ZEE MARATHI',
    reelTitle: 'Veen Doghantali Hi Tutena | Zee Marathi',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 70,
    description: 'AI-driven environment design and cinematic motion graphics, crafted to elevate visual storytelling for television.',
  },
  {
    code: 'DY1bOqcBs6J',
    title: 'TUM HO NAA | SONY ENTERTAINMENT TELEVISION',
    reelTitle: 'Tum Ho Naa | Sony Entertainment Television',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 130,
    description: 'AI-powered environment creation and cinematic motion graphics, bringing the visual world of television drama to life.',
  },
  {
    code: 'Dak8URtgh_o',
    title: 'KAUN BANEGA CROREPATI 18 | SONY TV',
    reelTitle: 'Kaun Banega Crorepati 18 | Sony Entertainment Television',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 60,
    description: 'A futuristic visual experience featuring AI-generated environments, immersive digital worlds, and precision-crafted motion graphics for a landmark television campaign.',
  },
  {
    code: 'DaNESJEDzsv',
    title: 'RAISONI EDUCATION × VARUN DHAWAN',
    reelTitle: 'Raisoni Education × Varun Dhawan',
    tag: 'COMMERCIAL',
    category: 'ads',
    reelCategory: 'COMMERCIAL',
    seconds: 80,
    description: 'AI-generated environments and cinematic motion graphics, transforming a campus campaign into an immersive visual experience.',
  },
  {
    code: 'Danle1FGl1O',
    title: '108 BASE HOSPITAL URI | COLORS TV',
    reelTitle: '108 Base Hospital Uri | Colors TV',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: null,
    description: 'AI-crafted landscapes and cinematic motion graphics, building an immersive visual world for a powerful story of courage, sacrifice, and patriotism.',
    unavailable: true,
  },
  {
    code: 'DblHbxXgegD',
    title: 'HOSA KATHEGALU | ZEE KANNADA',
    reelTitle: 'Hosa Kathegalu | Zee Kannada',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 25,
    description: 'AI-powered world-building and cinematic motion design, recreating a grand, heritage-inspired atmosphere for compelling Kannada television storytelling.',
  },
  {
    code: 'DbnxidxFdfV',
    title: 'AATA HOU DE DHINGANA | STAR PRAVAH',
    reelTitle: 'Aata Hou De Dhingana | Star Pravah',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 60,
    description: 'AI-driven environment creation and cinematic motion graphics, bringing breathtaking tropical visuals to life for an immersive Marathi television promo.',
  },
  {
    code: 'DcHVeznEzxV',
    title: 'MI KAAT TAKALI | STAR PRAVAH',
    reelTitle: 'Mi Kaat Takali | Star Pravah',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 10,
    description: 'From AI-generated landscapes to cinematic motion design, crafting an intense, atmospheric visual world that sets the stage for a gripping Marathi thriller.',
  },
  {
    code: 'DcIY1VJCDNO',
    title: 'L&T FINANCE × JASPRIT BUMRAH',
    reelTitle: 'L&T Finance × Jasprit Bumrah',
    tag: 'COMMERCIAL',
    category: 'ads',
    reelCategory: 'COMMERCIAL',
    seconds: 30,
    description: 'AI-crafted environments and cinematic motion graphics, blending authentic storytelling with dynamic visuals for a high-impact gold loan campaign.',
  },
  {
    code: 'DcQA-BHqlnY',
    title: 'JASPRIT BUMRAH × L&T FINANCE',
    reelTitle: 'Jasprit Bumrah × L&T Finance | Gold Loan Campaign',
    tag: 'COMMERCIAL',
    category: 'ads',
    reelCategory: 'COMMERCIAL',
    seconds: 30,
    description: 'Personally developed AI-generated environments and cinematic motion graphics, blending realistic visual storytelling with dynamic scene design to elevate the campaign’s overall impact.',
  },
  {
    code: 'DcTTHFJAuzQ',
    title: 'MI KAAT TAKALI | STAR PRAVAH — SUPERNATURAL',
    reelTitle: 'Mi Kaat Takali | Star Pravah — Supernatural',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 195,
    description: 'Created AI-generated environments and designed cinematic motion graphics, bringing the series’ supernatural atmosphere to life through immersive visual world-building.',
  },
  {
    code: 'DcbJCiUOuAz',
    title: 'BITCOIN SCAM | ZEE KANNADA',
    reelTitle: 'Bitcoin Scam | Zee Kannada',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 57,
    description: 'Built immersive AI-driven environments and cinematic visual sequences, blending realistic world-building with atmospheric motion design to shape the series’ on-screen identity.',
  },
  {
    code: 'Dcbg_McOfmU',
    title: 'AYYANA MANE 2 | ZEE KANNADA',
    reelTitle: 'Ayyana Mane 2 | Zee Kannada',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 97,
    description: 'Responsible for AI-generated environment creation, scene enhancement, and cinematic motion graphics, building atmospheric visual settings that support the series’ suspense-driven narrative.',
  },
  {
    code: 'DdQaDIKIptB',
    title: 'GANESH: DUST TO STARDUST | V2S PRODUCTIONS',
    reelTitle: 'Ganesh: Dust to Stardust | V2S Productions',
    tag: 'FILM',
    category: 'films',
    reelCategory: 'FILM',
    seconds: 21,
    description: 'Created AI-generated environments, designed detailed scene extensions, and developed cinematic motion graphics to bring the film’s grand-scale Ganesh Chaturthi visuals to life.',
  },
  {
    code: 'DdoXlJRjx39',
    title: 'MOOKUTHI AMMAN | ZEE TAMIL',
    reelTitle: 'Mookuthi Amman | Zee Tamil',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 150,
    description: 'Developed AI-generated environments and cinematic scene extensions, crafting detailed temple architecture and culturally rooted visual landscapes to enhance the promo’s cinematic scale and storytelling.',
  },
  {
    code: 'DdyMa5mMEHM',
    title: 'APSARA | STARPLUS × JIOHOTSTAR',
    reelTitle: 'Apsara | StarPlus × JioHotstar',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 30,
    description: 'Created AI-generated environments, enhanced scene composition, and developed cinematic motion graphics to build a visually immersive fantasy world for the promotional campaign.',
  },
  {
    code: 'DeV6TRbzWI0',
    title: 'GANESH: DUST TO STARDUST | ENVIRONMENT DESIGN',
    reelTitle: 'Ganesh: Dust to Stardust | Environment Design',
    tag: 'FILM',
    category: 'films',
    reelCategory: 'FILM',
    seconds: 160,
    description: 'Created AI-generated environments, architectural backdrops, and cinematic scene extensions, shaping the film’s visual world through AI-driven environment design.',
  },
];

const CLIENT_CAMPAIGNS = CAMPAIGNS.map((item) => {
  const media = item.unavailable ? {} : {
    videoFile: `./assets/videos/reel_${item.code}.mp4`,
    previewVideo: `./assets/videos/reel_${item.code}_preview.mp4`,
  };
  return {
    id: `campaign-${item.code}`,
    title: item.title,
    tag: item.tag,
    category: item.category,
    year: '2026',
    format: 'CLIENT FILM',
    runtime: item.seconds == null ? 'INSTAGRAM' : runtime(item.seconds),
    laurel: 'Client Campaign',
    image: `./assets/images/reels/reel_${item.code}_thumb.webp`,
    ...media,
    instagramUrl: `https://www.instagram.com/reel/${item.code}/`,
    logline: item.description,
    synopsis: item.description,
    pipeline,
    stats: {
      fps: 'Source reel',
      resolution: 'Source master',
      renderPasses: 'AI environment and motion pass',
      directorNote: item.description,
    },
  };
});

const CLIENT_CAMPAIGN_REELS = CAMPAIGNS.map((item) => {
  const media = item.unavailable ? {} : {
    videoFile: `./assets/videos/reel_${item.code}.mp4`,
    previewVideo: `./assets/videos/reel_${item.code}_preview.mp4`,
  };
  return {
    id: `reel-${item.code}`,
    code: item.code,
    title: item.reelTitle,
    category: item.reelCategory,
    runtime: item.seconds == null ? 'IG' : `${item.seconds}s`,
    thumbnail: `./assets/images/reels/reel_${item.code}_thumb.webp`,
    ...media,
    instagramUrl: `https://www.instagram.com/reel/${item.code}/`,
    caption: item.description,
  };
});


// === MASTER PROJECTS, REELS & COMICS ===
/**
 * Film Projects, Commercial Campaigns, Music Films, Instagram Reels & Comic Chronicles
 * Master database curated for Aarya Bhujade (@aarya_x_apertures).
 */

const PROJECTS = [
  ...CLIENT_CAMPAIGNS,
  // --- CLIENT COMMERCIALS & BRAND PRODUCTIONS ---
  {
    id: 'glamirk-commercial',
    title: 'GLAMIRK INDIA: LUXURY VISION',
    tag: 'COMMERCIAL',
    category: 'ads',
    year: '2025',
    format: 'LUXURY AI',
    runtime: '00:15',
    laurel: 'Commercial Client Production',
    image: './assets/images/reels/client_reel_glamirk_DcbKUe0TxpT_thumb.webp',
    videoFile: './assets/videos/client_reel_glamirk_DcbKUe0TxpT.mp4',
    previewVideo: './assets/videos/client_reel_glamirk_DcbKUe0TxpT_preview.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DcbKUe0TxpT/',
    logline: 'High-end beauty and luxury lifestyle commercial campaign crafted with generative realism and bespoke lighting.',
    synopsis: 'Official commercial reel for Glamirk India directed and composited by Aarya Bhujade. Exploring hyper-photorealistic skin textures, cinematic studio rim lighting, and elegant kinetic pacing to deliver an aspirational cosmetic brand identity.',
    pipeline: [
      { step: 'Brand Concept & Moodboard', tool: 'Midjourney v6.1 & Photoshop' },
      { step: 'Neural Motion Diffusion', tool: 'Kling AI & Runway Gen-3' },
      { step: 'Compositing & Grade', tool: 'After Effects & DaVinci Resolve' },
      { step: 'Master Delivery', tool: 'Premiere Pro Ultra-HD Rec.709' }
    ],
    stats: {
      fps: '30 FPS',
      resolution: '1080 × 1920',
      renderPasses: 'Luxury Studio Grade Pass',
      directorNote: 'Translating luxury aesthetics into generative video requires hyper-consistent specular lighting and velvety focal depth.'
    }
  },
  {
    id: 'mahindra-veero',
    title: 'MAHINDRA VEERO: RAW MOMENTUM',
    tag: 'COMMERCIAL',
    category: 'ads',
    year: '2025',
    format: 'AUTOMOTIVE',
    runtime: '00:23',
    laurel: 'Automotive Commercial Campaign',
    image: './assets/images/reels/client_reel_mahindra_DdJaiZThP8N_thumb.webp',
    videoFile: './assets/videos/client_reel_mahindra_DdJaiZThP8N.mp4',
    previewVideo: './assets/videos/client_reel_mahindra_DdJaiZThP8N_preview.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DdJaiZThP8N/',
    logline: 'Rugged capability meets high-torque urban precision in this high-energy automotive showcase for Mahindra Veero.',
    synopsis: 'Produced for Mahindra Veero commercial storytelling. Combines rhythmic editorial pacing, metallic chassis grading, dynamic camera sweeps, and impactful sound design designed to stop thumbs on social feeds.',
    pipeline: [
      { step: 'Vehicle Tracking Plates', tool: 'Automotive Motion Reference' },
      { step: 'Visual Dynamics & FX', tool: 'After Effects Lens Flare & Velocity' },
      { step: 'Color Science', tool: 'ACES Automotive Commercial LUT' },
      { step: 'Audio Impact', tool: 'Engine Rumble & Mechanical Foley' }
    ],
    stats: {
      fps: '30 FPS',
      resolution: '1080 × 1920',
      renderPasses: 'Multi-Camera Beat Match',
      directorNote: 'Automotive commercials demand rhythmic momentum. Every cut accentuates torque, metallic reflection, and sheer road presence.'
    }
  },
  {
    id: 'star-pravah-promo',
    title: 'STAR PRAVAH: NETWORK PROMO',
    tag: 'BROADCAST',
    category: 'ads',
    year: '2025',
    format: '9:16 BROADCAST // DIGITAL PROMO',
    runtime: '00:52',
    laurel: 'Star Network Broadcast Production',
    image: './assets/images/reels/client_reel_starpravah_DdDPCmmmHL2_thumb.webp',
    videoFile: './assets/videos/client_reel_starpravah_DdDPCmmmHL2.mp4',
    previewVideo: './assets/videos/client_reel_starpravah_DdDPCmmmHL2_preview.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DdDPCmmmHL2/',
    logline: 'Official television broadcast promotional sequence engineered for the premier Star Pravah television network.',
    synopsis: 'A high-drama television teaser highlighting marquee programming for Star Pravah. Created with dynamic title integration, cinematic narrative timing, emotional music escalation, and prime-time broadcast polish.',
    pipeline: [
      { step: 'Narrative Storyboarding', tool: 'Star Network Creative Brief' },
      { step: 'Kinetic Typography & Title VFX', tool: 'After Effects Typography Rig' },
      { step: 'Visual Color Grading', tool: 'DaVinci Resolve Television LUT' },
      { step: 'Broadcast Audio Mastering', tool: 'LUFS Broadcast Normalized Audio' }
    ],
    stats: {
      fps: '30 FPS',
      resolution: '1080 × 1920 Full HD',
      renderPasses: 'Broadcast Spec Standards',
      directorNote: 'Broadcast television promos require immediate emotional resonance and razor-sharp typographic hierarchy.'
    }
  },
  {
    id: 'swastik-visuals',
    title: 'SWASTIK PRODUCTIONS: MYTHOLOGICAL LORE',
    tag: 'MYTHOLOGICAL AI',
    category: 'films',
    year: '2025',
    format: '9:16 THEATRICAL // SACRED CINEMA',
    runtime: '00:26',
    laurel: 'Official Swastik Productions Visuals',
    image: './assets/images/reels/client_reel_swastik_DQDfgLFkxeJ_thumb.webp',
    videoFile: './assets/videos/client_reel_swastik_DQDfgLFkxeJ.mp4',
    previewVideo: './assets/videos/client_reel_swastik_DQDfgLFkxeJ_preview.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DQDfgLFkxeJ/',
    logline: 'Transcendent sacred visual sequences designed for epic television powerhouse Swastik Productions.',
    synopsis: 'Created by Aarya Bhujade as AI Artist at Swastik Productions. Visualizing eternal Vedic scriptures, divine aura fields, celestial weapons, and iconic deity iconography with cutting-edge synthetic cinema tools.',
    pipeline: [
      { step: 'Divine Character Design', tool: 'Midjourney Sacred Iconography' },
      { step: 'Aura & Particle Simulation', tool: 'ComfyUI & After Effects Particles' },
      { step: 'Celestial Cinematic Lighting', tool: 'Volumetric Rays & Golden Glow' },
      { step: 'Soundscape Direction', tool: 'Vedic Chants & Theatrical Hits' }
    ],
    stats: {
      fps: '30 FPS',
      resolution: '1080 × 1920',
      renderPasses: 'Sacred Iconography Pipeline',
      directorNote: 'Working with Indian television pioneer Swastik Productions has deepened my mastery in translating sacred mythological lore into modern visual epics.'
    }
  },

  // --- GEN-AI ORIGINAL FILMS ---
  {
    id: 'ashoka-gen-ai',
    title: 'ASHOKA: LEGACY OF PEACE',
    tag: 'AI FILM',
    category: 'films',
    year: '2025',
    format: '16:9 WIDESCREEN // 4K MASTER',
    runtime: '01:58',
    laurel: 'Gen-AI Competition Finalist',
    image: './assets/images/reels/reel_6_DAYbnEMITpG_thumb.webp',
    videoFile: './assets/videos/reel_6_DAYbnEMITpG.mp4',
    previewVideo: './assets/videos/reel_6_DAYbnEMITpG_preview.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DAYbnEMITpG/',
    logline: 'Uncovering the rich heritage and timeless wisdom of Emperor Ashoka where ancient history meets next-generation generative AI.',
    synopsis: 'An official Gen-AI competition short film conceived, directed, written, and edited by Aarya Bhujade. Exploring the spiritual transformation of Emperor Ashoka from bloodshed to peace through dramatic synthetic cinematography and original rap lyrics.',
    pipeline: [
      { step: 'Keyframe Ideation', tool: 'Midjourney & Ideogram AI' },
      { step: 'Kinetic Generation', tool: 'Leonardo AI & Krea AI' },
      { step: 'Visual Compositing', tool: 'Adobe After Effects & Photoshop' },
      { step: 'Sound & Direction', tool: 'Premiere Pro (MAAC Andheri)' }
    ],
    stats: {
      fps: '30 FPS',
      resolution: '980 × 554 Native Master',
      renderPasses: 'Multi-Prompt Narrative Pass',
      directorNote: 'Created with AI Edicts for the Gen-AI Competition. Guiding generative engines to honor Indian historical weight was a milestone in generative storytelling.'
    }
  },
  {
    id: 'stranger-things-ai',
    title: 'STRANGER THINGS: AI RE-IMAGINING',
    tag: 'AI FILM',
    category: 'films',
    year: '2025',
    format: '9:16 CINEMATIC // 1080P',
    runtime: '00:40',
    laurel: 'Trending AI Creative Sequence',
    image: './assets/images/reels/reel_3_DR7HSyHE4gY_thumb.webp',
    videoFile: './assets/videos/reel_3_DR7HSyHE4gY.mp4',
    previewVideo: './assets/videos/reel_3_DR7HSyHE4gY_preview.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DR7HSyHE4gY/',
    logline: 'Things just got stranger: a surreal digital breakdown where the Upside Down breaches the editor workstation.',
    synopsis: 'A stylized generative VFX sequence featuring Aarya at his grading desk being overtaken by the Mind Flayer. Engineered using multi-layer depth inpainting, synthetic tentacle dynamics, and retro synth-wave color grading.',
    pipeline: [
      { step: 'Subject Camera Plate', tool: 'Sony Alpha 4K Studio Plate' },
      { step: 'Neural Inpainting', tool: 'ComfyUI & Kling AI Diffusion' },
      { step: 'Atmospheric Smoke', tool: 'After Effects Volumetrics' },
      { step: 'Color Grade', tool: 'DaVinci Resolve Retro Neon Pass' }
    ],
    stats: {
      fps: '30 FPS',
      resolution: '720 × 1280',
      renderPasses: '12 Optical Composite Layers',
      directorNote: 'A playful yet technically rigorous exploration of blending practical desk plates with neural horror compositing.'
    }
  },

  // --- SACRED & DIVINE MUSICAL PRODUCTIONS (NETLIFY PORTFOLIO MASTERS) ---
  {
    id: 'bani-re-joganiya',
    title: 'BANI RE JOGANIYA: DIVINE JOURNEY',
    tag: 'MUSIC FILM',
    category: 'music_films',
    year: '2025',
    format: '16:9 WIDESCREEN // 4K SACRED CINEMA',
    runtime: '04:22',
    laurel: 'Featured Musical Film on YouTube',
    image: './assets/images/music_films/bani_re_joganiya.jpg',
    youtubeId: 'y2YgJ0lXWMQ',
    youtubeUrl: 'https://www.youtube.com/watch?v=y2YgJ0lXWMQ',
    logline: 'A divine musical voyage combining spiritual surrender, sacred poetry, and transcendent visual worldbuilding.',
    synopsis: 'Featured musical production directed and designed with generative AI. Takes the viewer on a deeply emotional pilgrim path celebrating eternal devotion, rich Rajasthani devotional palettes, and ethereal temple atmospheres.',
    pipeline: [
      { step: 'Sacred Worldbuilding', tool: 'Midjourney v6 & Flux Pro' },
      { step: 'Cinematic Motion Synthesis', tool: 'Runway Gen-3 Alpha & Kling' },
      { step: 'Atmospheric Grade', tool: 'DaVinci Resolve Golden Hour LUT' },
      { step: 'Audio Synchronization', tool: 'Premiere Pro Master' }
    ],
    stats: {
      fps: '24 FPS',
      resolution: '3840 × 2160 (4K Master)',
      renderPasses: 'Sacred Atmosphere Simulation',
      directorNote: 'Bani Re Joganiya is about pure spiritual surrender. Translating the longing of the soul into visual poetry with generative AI was a deeply moving experience.'
    }
  },
  {
    id: 'chalo-kumbh',
    title: 'CHALO KUMBH: SACRED CONFLUENCE',
    tag: 'MUSIC FILM',
    category: 'music_films',
    year: '2025',
    format: '16:9 WIDESCREEN // EPIC SCALE',
    runtime: '03:50',
    laurel: 'Official Mahakumbh 2025 Anthem',
    image: './assets/images/music_films/chalo_kumbh.jpg',
    youtubeId: 'YrJPZad6q0g',
    youtubeUrl: 'https://www.youtube.com/watch?v=YrJPZad6q0g',
    logline: 'An epic visual anthem honoring the sacred Mahakumbh pilgrimage: where millions unite at the divine Sangam.',
    synopsis: 'A grand-scale visual symphony celebrating the spiritual majesty of the Kumbh Mela. Featuring expansive aerial vistas, holy river rituals, sadhu processions, and twilight Ganga Aarti illumination crafted through cinematic AI rendering.',
    pipeline: [
      { step: 'Crowd & Landscape Synthesis', tool: 'Flux & Midjourney' },
      { step: 'Water & Fire Simulation', tool: 'Kling AI Fluid Dynamics' },
      { step: 'Divine Particle Compositing', tool: 'After Effects Ember & Smoke' },
      { step: 'Symphonic Master', tool: 'DaVinci Resolve 4K Theatrical' }
    ],
    stats: {
      fps: '24 FPS',
      resolution: '3840 × 2160 (4K Master)',
      renderPasses: 'Epic Scale Crowd Simulation',
      directorNote: 'Capturing the unprecedented human and divine magnitude of Mahakumbh required framing immense scale without losing the individual pilgrim intimacy.'
    }
  },
  {
    id: 'siya-ram-aaye',
    title: 'SIYA RAM AAYE: SOULFUL BHAKTI',
    tag: 'MUSIC FILM',
    category: 'music_films',
    year: '2025',
    format: '16:9 WIDESCREEN // BHAKTI CINEMA',
    runtime: '03:45',
    laurel: 'Soulful Bhakti Visual Production',
    image: './assets/images/music_films/siya_ram_aaye.jpg',
    youtubeId: 'JZYm-XgQas4',
    youtubeUrl: 'https://www.youtube.com/watch?v=JZYm-XgQas4',
    logline: 'A heartfelt devotional celebration visualizing the triumphant and loving return of Shri Ram and Sita to Ayodhya.',
    synopsis: 'Ethereal music film centered on the emotional reunion of Ayodhya with Prabhu Shri Ram. Crafted with warm terracotta architecture, celebratory flower showers, luminous diyas, and deeply expressive character portraiture.',
    pipeline: [
      { step: 'Ayodhya World Architecture', tool: 'Midjourney Sacred Geometry' },
      { step: 'Diya & Petal Dynamics', tool: 'After Effects Trapcode Particular' },
      { step: 'Expressive Motion Synthesis', tool: 'Runway Gen-3' },
      { step: 'Devotional Master', tool: 'DaVinci Resolve Warm Gold Grade' }
    ],
    stats: {
      fps: '24 FPS',
      resolution: '3840 × 2160 UHD',
      renderPasses: 'Golden Hour Lighting Rig',
      directorNote: 'The emotion of welcoming Bhagwan Ram back home is eternal in Indian consciousness. The visuals needed to radiate pure warmth, tears of joy, and spiritual peace.'
    }
  },
  {
    id: 'letter-from-krishna',
    title: 'A LETTER FROM KRISHNA: JANMASHTAMI SPECIAL',
    tag: 'MUSIC FILM',
    category: 'music_films',
    year: '2025',
    format: '16:9 WIDESCREEN // SACRED VISUAL POEM',
    runtime: '03:15',
    laurel: 'Janmashtami Special YouTube Feature',
    image: './assets/images/music_films/letter_from_krishna.jpg',
    youtubeId: 'nYwNLFrSWy8',
    youtubeUrl: 'https://www.youtube.com/watch?v=nYwNLFrSWy8',
    logline: 'An intimate cinematic letter addressed to humanity from Lord Krishna, rendered with gentle emotional resonance.',
    synopsis: 'A deeply meditative narrative poem visualizing the wisdom of the Bhagavad Gita and Krishna\'s timeless assurances. Lush Vrindavan forests, Yamuna riverbanks, peacock plumage, and compassionate divine gazes.',
    pipeline: [
      { step: 'Sacred Character Conceptualization', tool: 'Midjourney & Leonardo' },
      { step: 'Poetic Fluid Camera Moves', tool: 'Luma Dream Machine & Kling' },
      { step: 'Soft Celluloid Grading', tool: 'DaVinci Resolve 35mm Emulation' },
      { step: 'Narrative Soundscape', tool: 'Bansuri Flute & Ambient Nature' }
    ],
    stats: {
      fps: '24 FPS',
      resolution: '3840 × 2160 UHD',
      renderPasses: 'Poetic Narrative Timing',
      directorNote: 'This film was built as an intimate conversation. Krishna speaking not just as a deity, but as an eternal friend and guide through the struggles of life.'
    }
  },
  {
    id: 'parshuram-jayanti',
    title: 'PARSHURAM JAYANTI: THE WARRIOR SAGE',
    tag: 'MUSIC FILM',
    category: 'music_films',
    year: '2024',
    format: '16:9 WIDESCREEN // MYTHOLOGICAL ACTION',
    runtime: '02:48',
    laurel: 'Mythological Action Special',
    image: './assets/images/music_films/parshuram_jayanti.jpg',
    youtubeId: 'byYBJOo-bFk',
    youtubeUrl: 'https://www.youtube.com/watch?v=byYBJOo-bFk',
    logline: 'Dynamic action and unyielding righteous fury: capturing the legendary martial prowess of Bhagwan Parshuram.',
    synopsis: 'A high-octane mythological music video depicting the sixth avatar of Vishnu. Showcasing lightning-charged axe combat, stormy mountain peaks, fierce ascetic discipline, and the defense of Dharma.',
    pipeline: [
      { step: 'Axe & Combat Choreography', tool: 'Midjourney Action Sequences' },
      { step: 'Thunder & Lightning VFX', tool: 'After Effects Electrical Sim' },
      { step: 'High-Impact Grading', tool: 'High-Contrast Teal & Fiery Amber' },
      { step: 'War-Drum Score', tool: 'Tandav Drum Beat Sync' }
    ],
    stats: {
      fps: '24 FPS',
      resolution: '3840 × 2160 UHD',
      renderPasses: 'VFX Lightning Passes',
      directorNote: 'Parshuram represents warrior righteousness. The visual cadence had to strike like thunder with relentless impact.'
    }
  },

];

/**
 * All 16 Downloaded Instagram Reels for the Dedicated Reels Deck
 * Fully optimized with faststart and instant hover preview clips.
 */
const ALL_INSTAGRAM_REELS = [
  ...CLIENT_CAMPAIGN_REELS,
  // Commercial & Client Reels (Featured at the top)
  {
    id: 'client-reel-glamirk',
    code: 'DcbKUe0TxpT',
    title: 'Glamirk India: Luxury AI Campaign',
    category: 'COMMERCIAL',
    runtime: '15s',
    videoFile: './assets/videos/client_reel_glamirk_DcbKUe0TxpT.mp4',
    previewVideo: './assets/videos/client_reel_glamirk_DcbKUe0TxpT_preview.mp4',
    thumbnail: './assets/images/reels/client_reel_glamirk_DcbKUe0TxpT_thumb.webp',
    instagramUrl: 'https://www.instagram.com/reel/DcbKUe0TxpT/',
    caption: 'Cinematic commercial campaign for Glamirk India crafted with hyper-realistic AI lighting and luxury aesthetic.'
  },
  {
    id: 'client-reel-mahindra',
    code: 'DdJaiZThP8N',
    title: 'Mahindra Veero: Commercial Reel',
    category: 'COMMERCIAL',
    runtime: '23s',
    videoFile: './assets/videos/client_reel_mahindra_DdJaiZThP8N.mp4',
    previewVideo: './assets/videos/client_reel_mahindra_DdJaiZThP8N_preview.mp4',
    thumbnail: './assets/images/reels/client_reel_mahindra_DdJaiZThP8N_thumb.webp',
    instagramUrl: 'https://www.instagram.com/reel/DdJaiZThP8N/',
    caption: 'Automotive showcase for Mahindra Veero highlighting dynamic torque, precision studio grade, and kinetic pacing.'
  },
  {
    id: 'client-reel-starpravah',
    code: 'DdDPCmmmHL2',
    title: 'Star Pravah: Broadcast Promo',
    category: 'BROADCAST',
    runtime: '52s',
    videoFile: './assets/videos/client_reel_starpravah_DdDPCmmmHL2.mp4',
    previewVideo: './assets/videos/client_reel_starpravah_DdDPCmmmHL2_preview.mp4',
    thumbnail: './assets/images/reels/client_reel_starpravah_DdDPCmmmHL2_thumb.webp',
    instagramUrl: 'https://www.instagram.com/reel/DdDPCmmmHL2/',
    caption: 'Official television broadcast promotional sequence engineered for the premier Star Pravah television network.'
  },
  {
    id: 'client-reel-swastik',
    code: 'DQDfgLFkxeJ',
    title: 'Swastik Productions: Mythological Visuals',
    category: 'MYTHOLOGICAL',
    runtime: '26s',
    videoFile: './assets/videos/client_reel_swastik_DQDfgLFkxeJ.mp4',
    previewVideo: './assets/videos/client_reel_swastik_DQDfgLFkxeJ_preview.mp4',
    thumbnail: './assets/images/reels/client_reel_swastik_DQDfgLFkxeJ_thumb.webp',
    instagramUrl: 'https://www.instagram.com/reel/DQDfgLFkxeJ/',
    caption: 'Sacred visual sequence and epic aura storytelling produced for television producer Swastik Productions.'
  },

  // Core Film & VFX Portfolio Reels
  {
    id: 'reel-6',
    code: 'DAYbnEMITpG',
    title: 'Ashoka: The Gen-AI Epic Promo',
    category: 'GEN-AI FILM',
    runtime: '1m 58s',
    videoFile: './assets/videos/reel_6_DAYbnEMITpG.mp4',
    previewVideo: './assets/videos/reel_6_DAYbnEMITpG_preview.mp4',
    thumbnail: './assets/images/reels/reel_6_DAYbnEMITpG_thumb.webp',
    instagramUrl: 'https://www.instagram.com/reel/DAYbnEMITpG/',
    caption: 'Official Gen-AI Competition Promo exploring Emperor Ashoka. Directed & edited by Aarya Bhujade. Tools: Midjourney, Ideogram, Leonardo AI, Krea AI.'
  },
  {
    id: 'reel-3',
    code: 'DR7HSyHE4gY',
    title: 'Stranger Things: AI Re-Imagining',
    category: 'AI VFX',
    runtime: '40s',
    videoFile: './assets/videos/reel_3_DR7HSyHE4gY.mp4',
    previewVideo: './assets/videos/reel_3_DR7HSyHE4gY_preview.mp4',
    thumbnail: './assets/images/reels/reel_3_DR7HSyHE4gY_thumb.webp',
    instagramUrl: 'https://www.instagram.com/reel/DR7HSyHE4gY/',
    caption: 'Things just got stranger: Aarya workstation overtaken by the Mind Flayer in an AI creative VFX edit.'
  },
  {
    id: 'reel-4',
    code: 'DNwuSMfYnr7',
    title: 'Swastik Stories: Ganesh Chaturthi',
    category: 'COMMERCIAL',
    runtime: '54s',
    videoFile: './assets/videos/reel_4_DNwuSMfYnr7.mp4',
    previewVideo: './assets/videos/reel_4_DNwuSMfYnr7_preview.mp4',
    thumbnail: './assets/images/reels/reel_4_DNwuSMfYnr7_thumb.webp',
    instagramUrl: 'https://www.instagram.com/reel/DNwuSMfYnr7/',
    caption: 'Official promotional campaign produced at Swastik Stories featuring festive visual storytelling.'
  },
  {
    id: 'reel-5',
    code: 'DB90UpYo5R4',
    title: 'Ladakh: High-Altitude Solitude',
    category: 'TRAVEL & DOC',
    runtime: '21s',
    videoFile: './assets/videos/reel_5_DB90UpYo5R4.mp4',
    previewVideo: './assets/videos/reel_5_DB90UpYo5R4_preview.mp4',
    thumbnail: './assets/images/reels/reel_5_DB90UpYo5R4_thumb.webp',
    instagramUrl: 'https://www.instagram.com/reel/DB90UpYo5R4/',
    caption: 'On-location shoot in Leh-Ladakh. Finding peace and genuine human connection among the mountains.'
  },
  {
    id: 'reel-11',
    code: 'C2KYZ2wsWEc',
    title: 'Sunburn Goa 2023: Techno Festival',
    category: 'COMMERCIAL',
    runtime: '31s',
    videoFile: './assets/videos/reel_11_C2KYZ2wsWEc.mp4',
    previewVideo: './assets/videos/reel_11_C2KYZ2wsWEc_preview.mp4',
    thumbnail: './assets/images/reels/reel_11_C2KYZ2wsWEc_thumb.webp',
    instagramUrl: 'https://www.instagram.com/reel/C2KYZ2wsWEc/',
    caption: 'Sunburn Festival Goa electronic music coverage with high-energy laser and crowd cinematography.'
  },
  {
    id: 'reel-12',
    code: 'C2Ar8eDS3Lp',
    title: 'Indian Air Force: Mumbai Air Show',
    category: 'VFX & ACTION',
    runtime: '26s',
    videoFile: './assets/videos/reel_12_C2Ar8eDS3Lp.mp4',
    previewVideo: './assets/videos/reel_12_C2Ar8eDS3Lp_preview.mp4',
    thumbnail: './assets/images/reels/reel_12_C2Ar8eDS3Lp_thumb.webp',
    instagramUrl: 'https://www.instagram.com/reel/C2Ar8eDS3Lp/',
    caption: 'IAF aerial aerobatics display over Marine Drive Mumbai in 4K telephoto tracking.'
  },
  {
    id: 'reel-8',
    code: 'C-rMfPto3hr',
    title: 'Monochrome Photowalk 2.0',
    category: 'PHOTOGRAPHY',
    runtime: '20s',
    videoFile: './assets/videos/reel_8_C-rMfPto3hr.mp4',
    previewVideo: './assets/videos/reel_8_C-rMfPto3hr_preview.mp4',
    thumbnail: './assets/images/reels/reel_8_C-rMfPto3hr_thumb.webp',
    instagramUrl: 'https://www.instagram.com/reel/C-rMfPto3hr/',
    caption: 'Street photography study in Nagpur & Mumbai exploring sacred geometry, angles, and monochrome light.'
  },
  {
    id: 'reel-9',
    code: 'C7cB8-XoEFQ',
    title: 'Kala Ghoda Art Festival: Mumbai',
    category: 'DOCUMENTARY',
    runtime: '36s',
    videoFile: './assets/videos/reel_9_C7cB8-XoEFQ.mp4',
    previewVideo: './assets/videos/reel_9_C7cB8-XoEFQ_preview.mp4',
    thumbnail: './assets/images/reels/reel_9_C7cB8-XoEFQ_thumb.webp',
    instagramUrl: 'https://www.instagram.com/reel/C7cB8-XoEFQ/',
    caption: 'Appreciating the living street artists and portrait sketchers at Kala Ghoda Festival Mumbai.'
  },
  {
    id: 'reel-10',
    code: 'C31hpWSPiPm',
    title: 'Omkareshwar Temple: Sacred Jyotirlinga',
    category: 'DEVOTIONAL',
    runtime: '28s',
    videoFile: './assets/videos/reel_10_C31hpWSPiPm.mp4',
    previewVideo: './assets/videos/reel_10_C31hpWSPiPm_preview.mp4',
    thumbnail: './assets/images/reels/reel_10_C31hpWSPiPm_thumb.webp',
    instagramUrl: 'https://www.instagram.com/reel/C31hpWSPiPm/',
    caption: 'Spiritual visual journey across Omkareshwar Mandhata temple on the Narmada River.'
  },
  {
    id: 'reel-2',
    code: 'DT4sIS7iJXy',
    title: 'Cinematic Narrative: Pure Souls',
    category: 'NARRATIVE',
    runtime: '47s',
    videoFile: './assets/videos/reel_2_DT4sIS7iJXy.mp4',
    previewVideo: './assets/videos/reel_2_DT4sIS7iJXy_preview.mp4',
    thumbnail: './assets/images/reels/reel_2_DT4sIS7iJXy_thumb.webp',
    instagramUrl: 'https://www.instagram.com/reel/DT4sIS7iJXy/',
    caption: 'Philosophical visual meditation: because some souls are too pure for the noise of the world.'
  }
];

/**
 * All 6 Static Comic Carousel Lore Series
 * Complete multi-panel visual graphic novels created with generative AI.
 */
const COMIC_CAROUSELS = [
  {
    "id": "comic-dvnzo2dkrjc",
    "code": "DVNZO2DkRJC",
    "title": "THE ART OF HUMILITY",
    "tag": "MYTHOLOGICAL LORE",
    "teaser": "True greatness is not in rising above others, but in knowing when to bow.",
    "readTime": "2 MIN READ",
    "panelCount": 7,
    "cover": "./assets/comics/DVNZO2DkRJC/DVNZO2DkRJC_20260226_052435_DVNZO2DkRJC_1.webp",
    "panels": [
      "./assets/comics/DVNZO2DkRJC/DVNZO2DkRJC_20260226_052435_DVNZO2DkRJC_1.webp",
      "./assets/comics/DVNZO2DkRJC/DVNZO2DkRJC_20260226_052435_DVNZO2DkRJC_2.webp",
      "./assets/comics/DVNZO2DkRJC/DVNZO2DkRJC_20260226_052435_DVNZO2DkRJC_3.webp",
      "./assets/comics/DVNZO2DkRJC/DVNZO2DkRJC_20260226_052435_DVNZO2DkRJC_4.webp",
      "./assets/comics/DVNZO2DkRJC/DVNZO2DkRJC_20260226_052435_DVNZO2DkRJC_5.webp",
      "./assets/comics/DVNZO2DkRJC/DVNZO2DkRJC_20260226_052435_DVNZO2DkRJC_6.webp",
      "./assets/comics/DVNZO2DkRJC/DVNZO2DkRJC_20260226_052435_DVNZO2DkRJC_7.webp"
    ],
    "caption": "True greatness is not in rising above others, but in knowing when to bow.\n.\n.\n.\n.\n.\n.\n.\n\n#IndianMythology #HinduMythology #SanatanStories",
    "instagramUrl": "https://www.instagram.com/p/DVNZO2DkRJC/"
  },
  {
    "id": "comic-dvjhopljmwb",
    "code": "DVJHOpljMwb",
    "title": "LEGEND OF INNER STRENGTH",
    "tag": "SACRED SCRIPTURES",
    "teaser": "Strength is not always about sheer force — sometimes it is about divine intellect.",
    "readTime": "3 MIN READ",
    "panelCount": 11,
    "cover": "./assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_1.jpg",
    "panels": [
      "./assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_1.jpg",
      "./assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_2.jpg",
      "./assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_3.jpg",
      "./assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_4.jpg",
      "./assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_5.jpg",
      "./assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_6.jpg",
      "./assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_7.jpg",
      "./assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_8.jpg",
      "./assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_9.jpg",
      "./assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_10.jpg",
      "./assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_11.jpg"
    ],
    "caption": "This ancient legend shows—\nstrength is not always about power, sometimes it’s about intelligence.\n\n#indianmythology #hindumythology #mythologystories",
    "instagramUrl": "https://www.instagram.com/p/DVJHOpljMwb/"
  },
  {
    "id": "comic-dvdmz2_kdk7",
    "code": "DVDMZ2_kdK7",
    "title": "BRAJ & AYODHYA: THE ORIGINS OF HOLI",
    "tag": "CULTURAL CHRONICLE",
    "teaser": "Before colours touched the face, they touched the heart. Two traditions, one festival.",
    "readTime": "2 MIN READ",
    "panelCount": 8,
    "cover": "./assets/comics/DVDMZ2_kdK7/DVDMZ2_kdK7_20260222_062005_DVDMZ2_kdK7_1.jpg",
    "panels": [
      "./assets/comics/DVDMZ2_kdK7/DVDMZ2_kdK7_20260222_062005_DVDMZ2_kdK7_1.jpg",
      "./assets/comics/DVDMZ2_kdK7/DVDMZ2_kdK7_20260222_062005_DVDMZ2_kdK7_2.jpg",
      "./assets/comics/DVDMZ2_kdK7/DVDMZ2_kdK7_20260222_062005_DVDMZ2_kdK7_3.jpg",
      "./assets/comics/DVDMZ2_kdK7/DVDMZ2_kdK7_20260222_062005_DVDMZ2_kdK7_4.jpg",
      "./assets/comics/DVDMZ2_kdK7/DVDMZ2_kdK7_20260222_062005_DVDMZ2_kdK7_5.jpg",
      "./assets/comics/DVDMZ2_kdK7/DVDMZ2_kdK7_20260222_062005_DVDMZ2_kdK7_6.jpg",
      "./assets/comics/DVDMZ2_kdK7/DVDMZ2_kdK7_20260222_062005_DVDMZ2_kdK7_7.jpg",
      "./assets/comics/DVDMZ2_kdK7/DVDMZ2_kdK7_20260222_062005_DVDMZ2_kdK7_8.jpg"
    ],
    "caption": "Before colours touched the face,\nthey touched the heart.\n\nIn Braj, people follow Krishna so Holi is playful.\nIn Ayodhya, people follow Ram so Holi is graceful.\n\nTwo traditions. One festival.\n\nWhich Holi speaks to you? 🎨🌸\n.\n.\n.\n.\n.\n#SwastikStories #SarayuHoli #RamRajya #HoliWithMeaning #holi2026",
    "instagramUrl": "https://www.instagram.com/p/DVDMZ2_kdK7/"
  },
  {
    "id": "comic-duuf9jzkrnm",
    "code": "DUuf9jZkRNM",
    "title": "CHANDRA: THE CRESCENT IN SHIVA'S HAIR",
    "tag": "SHIVA VISUAL LORE",
    "teaser": "A promise made, a love that broke balance. Mahadev restored cosmic rhythm.",
    "readTime": "2 MIN READ",
    "panelCount": 8,
    "cover": "./assets/comics/DUuf9jZkRNM/DUuf9jZkRNM_20260214_052656_DUuf9jZkRNM_1.jpg",
    "panels": [
      "./assets/comics/DUuf9jZkRNM/DUuf9jZkRNM_20260214_052656_DUuf9jZkRNM_1.jpg",
      "./assets/comics/DUuf9jZkRNM/DUuf9jZkRNM_20260214_052656_DUuf9jZkRNM_2.jpg",
      "./assets/comics/DUuf9jZkRNM/DUuf9jZkRNM_20260214_052656_DUuf9jZkRNM_3.jpg",
      "./assets/comics/DUuf9jZkRNM/DUuf9jZkRNM_20260214_052656_DUuf9jZkRNM_4.jpg",
      "./assets/comics/DUuf9jZkRNM/DUuf9jZkRNM_20260214_052656_DUuf9jZkRNM_5.jpg",
      "./assets/comics/DUuf9jZkRNM/DUuf9jZkRNM_20260214_052656_DUuf9jZkRNM_6.jpg",
      "./assets/comics/DUuf9jZkRNM/DUuf9jZkRNM_20260214_052656_DUuf9jZkRNM_7.jpg",
      "./assets/comics/DUuf9jZkRNM/DUuf9jZkRNM_20260214_052656_DUuf9jZkRNM_8.jpg"
    ],
    "caption": "The moon in Shiva’s hair is Chandra himself. 🌙🔱\n\nA promise made.\nA love that broke balance.\nA curse that dimmed the heavens.\n\nMahadev didn’t just save the moon —\nHe restored cosmic rhythm.\nBecause love without responsibility…\nleads to chaos.\n\nSwipe through the story of Shiva’s crescent moon.\n.\n.\n.\n.\n.\n#SwastikStories #MahadevStory #ShivaMythology #ChandraDev #HinduMythology",
    "instagramUrl": "https://www.instagram.com/p/DUuf9jZkRNM/"
  },
  {
    "id": "comic-dupfgicksek",
    "code": "DUpfGIckSek",
    "title": "THE DEMON TIGER & MAHADEV'S LESSON",
    "tag": "SHIVA VISUAL LORE",
    "teaser": "True power isn't domination — it is mastery over the self. The lore of Shiva's tiger skin.",
    "readTime": "2 MIN READ",
    "panelCount": 9,
    "cover": "./assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_1.jpg",
    "panels": [
      "./assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_1.jpg",
      "./assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_2.jpg",
      "./assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_3.jpg",
      "./assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_4.jpg",
      "./assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_5.jpg",
      "./assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_6.jpg",
      "./assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_7.jpg",
      "./assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_8.jpg",
      "./assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_9.jpg"
    ],
    "caption": "A demon tiger.\nAngry sages.\nA lesson the world still needs.\n\nMahadev teaches us —\nTrue power isn’t domination,\nit’s mastery over the self. 🐅🔱\n\nSwipe through the story of Shiva’s tiger skin.\n.\n.\n.\n.\n.\n#SwastikStories #MahadevStory #ShivaMythology #HinduMythology #MythologyExplained",
    "instagramUrl": "https://www.instagram.com/p/DUpfGIckSek/"
  },
  {
    "id": "comic-dupmkg9ezun",
    "code": "DUPmkG9EZUn",
    "title": "WHERE EGO BURNS: SHIVA'S REALM",
    "tag": "SPIRITUAL AWAKENING",
    "teaser": "Where ego burns, where titles disappear, where only the eternal truth remains.",
    "readTime": "2 MIN READ",
    "panelCount": 7,
    "cover": "./assets/comics/DUPmkG9EZUn/DUPmkG9EZUn_20260202_052810_DUPmkG9EZUn_1.jpg",
    "panels": [
      "./assets/comics/DUPmkG9EZUn/DUPmkG9EZUn_20260202_052810_DUPmkG9EZUn_1.jpg",
      "./assets/comics/DUPmkG9EZUn/DUPmkG9EZUn_20260202_052810_DUPmkG9EZUn_2.jpg",
      "./assets/comics/DUPmkG9EZUn/DUPmkG9EZUn_20260202_052810_DUPmkG9EZUn_3.jpg",
      "./assets/comics/DUPmkG9EZUn/DUPmkG9EZUn_20260202_052810_DUPmkG9EZUn_4.jpg",
      "./assets/comics/DUPmkG9EZUn/DUPmkG9EZUn_20260202_052810_DUPmkG9EZUn_5.jpg",
      "./assets/comics/DUPmkG9EZUn/DUPmkG9EZUn_20260202_052810_DUPmkG9EZUn_6.jpg",
      "./assets/comics/DUPmkG9EZUn/DUPmkG9EZUn_20260202_052810_DUPmkG9EZUn_7.jpg"
    ],
    "caption": "Where ego burns\nWhere titles disappear\nWhere only truth remains\nThat’s Shiva’s home 🕉️\n\n#Mahadev #ShivaVibes #SpiritualAwakening #ReelsIndia #Sanatan",
    "instagramUrl": "https://www.instagram.com/p/DUPmkG9EZUn/"
  }
];


  // ==========================================================================
  // CONFIGURATION & STATE ENGINE
  // ==========================================================================
  const FRAME_COUNT = 115;
  const INITIAL_PRELOAD_COUNT = 20;
  const getFrameSrc = (index) => `./frames/frame_${String(index + 1).padStart(4, '0')}.webp`;

  // Preload & Canvas State
  const images = new Array(FRAME_COUNT);
  let currentFrameIndex = 0;
  let initialLoadedCount = 0;
  let allFramesLoaded = false;
  let isAudioEnabled = false;
  let audioCtx = null;
  let lenisInstance = null;

  // Active Comic Modal State
  let activeComic = null;
  let currentComicPanel = 0;

  // DOM Elements
  const preloader = document.getElementById('preloader');
  const progressBar = document.getElementById('progress-bar');
  const preloadPercentage = document.getElementById('preload-percentage');
  const preloadStatus = document.getElementById('preload-status');

  const canvas = document.getElementById('hero-canvas');
  const ctx = canvas ? canvas.getContext('2d', { alpha: false }) : null;

  const scrubProgressFill = document.getElementById('scrub-progress-fill');
  const telemetryFrame = document.getElementById('telemetry-frame');
  const telemetryPercent = document.getElementById('telemetry-percent');
  const telemetryPhase = document.getElementById('telemetry-phase');
  const timelineTicks = document.querySelectorAll('.timeline-ticks-hud .tick');

  const siteHeader = document.getElementById('header');
  const soundToggle = document.getElementById('sound-toggle');
  const backToTopBtn = document.getElementById('back-to-top');

  // Modals
  const projectModal = document.getElementById('project-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalClose = document.getElementById('modal-close');
  const modalContent = document.getElementById('modal-content');

  const comicModal = document.getElementById('comic-modal');
  const comicModalBackdrop = document.getElementById('comic-modal-backdrop');
  const comicModalClose = document.getElementById('comic-modal-close');
  const comicModalContent = document.getElementById('comic-modal-content');

  // Contact Form & Copy
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyStatus = document.getElementById('copy-status');
  const objChips = document.querySelectorAll('.obj-chip');

  // Custom Cursor
  const cursor = document.getElementById('cursor');
  const cursorFollower = document.getElementById('cursor-follower');

  // ==========================================================================
  // REQUIREMENT 1: LENIS SMOOTH SCROLL ENGINE & GSAP SYNC
  // ==========================================================================
  function initSmoothScroll() {
    if (typeof Lenis === 'undefined') {
      console.warn('Lenis library not detected, using native scroll.');
      return;
    }

    lenisInstance = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.8,
      infinite: false,
    });

    lenisInstance.on('scroll', (e) => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.update();
      }
      handleHeaderScroll(e.scroll);
    });

    if (typeof gsap !== 'undefined') {
      gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }

  function handleHeaderScroll(scrollY) {
    if (!siteHeader) return;
    if (scrollY > 50) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }

  // ==========================================================================
  // REQUIREMENT 2 & 4: INSTANT PRELOADING & ASYNC FRAME CACHING (0% TO 100%)
  // ==========================================================================
  function startPreloading() {
    if (!canvas) return;

    let initialCount = 0;

    for (let i = 0; i < INITIAL_PRELOAD_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        images[i] = img;
        initialCount++;
        const percent = Math.min(100, Math.round((initialCount / INITIAL_PRELOAD_COUNT) * 100));
        if (progressBar) progressBar.style.width = `${percent}%`;
        if (preloadPercentage) preloadPercentage.textContent = `${percent}%`;
        if (preloadStatus) preloadStatus.textContent = `CACHING PRIORITY FRAMES (${initialCount}/${INITIAL_PRELOAD_COUNT})...`;

        if (initialCount === 1) {
          renderFrame(0);
        }

        if (initialCount === INITIAL_PRELOAD_COUNT) {
          onInitialPreloadComplete();
        }
      };
      img.onerror = () => {
        initialCount++;
        if (initialCount === INITIAL_PRELOAD_COUNT) {
          onInitialPreloadComplete();
        }
      };
    }

    // Safety fallback: dismiss preloader after 2.8s regardless of network conditions
    setTimeout(() => {
      if (preloader && !preloader.classList.contains('fade-out')) {
        onInitialPreloadComplete();
      }
    }, 2800);
  }

  function onInitialPreloadComplete() {
    if (preloader && !preloader.classList.contains('fade-out')) {
      preloader.classList.add('fade-out');
      setTimeout(() => {
        if (preloader.parentNode) preloader.style.display = 'none';
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
        }
      }, 500);
    }
    renderFrame(0);
    loadRemainingFramesAsync();
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  }

  function loadRemainingFramesAsync() {
    let backgroundLoaded = INITIAL_PRELOAD_COUNT;
    let nextIndex = INITIAL_PRELOAD_COUNT;
    const concurrency = 6;

    function loadNext() {
      if (nextIndex >= FRAME_COUNT) {
        if (backgroundLoaded >= FRAME_COUNT) {
          allFramesLoaded = true;
        }
        return;
      }

      const idx = nextIndex++;
      const img = new Image();
      img.src = getFrameSrc(idx);
      img.onload = () => {
        images[idx] = img;
        backgroundLoaded++;
        if (currentFrameIndex === idx) {
          renderFrame(idx);
        }
        loadNext();
      };
      img.onerror = () => {
        backgroundLoaded++;
        loadNext();
      };
    }

    for (let c = 0; c < concurrency; c++) {
      loadNext();
    }
  }

  // ==========================================================================
  // REQUIREMENT 1 & 4: RETINA/DPR SCALING & RESPONSIVE 'COVER' FRAMING
  // ==========================================================================
  function renderFrame(index) {
    if (!canvas || !ctx) return;
    currentFrameIndex = index;

    let img = images[index];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < FRAME_COUNT; offset++) {
        if (index - offset >= 0 && images[index - offset] && images[index - offset].complete) {
          img = images[index - offset];
          break;
        }
        if (index + offset < FRAME_COUNT && images[index + offset] && images[index + offset].complete) {
          img = images[index + offset];
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const clientW = window.innerWidth;
    const clientH = window.innerHeight;

    if (canvas.width !== clientW * dpr || canvas.height !== clientH * dpr) {
      canvas.width = clientW * dpr;
      canvas.height = clientH * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, clientW, clientH);

    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;
    const imgRatio = imgW / imgH;
    const canvasRatio = clientW / clientH;

    let renderW, renderH, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      renderW = clientW;
      renderH = clientW / imgRatio;
      offsetX = 0;
      offsetY = (clientH - renderH) / 2;
    } else {
      renderH = clientH;
      renderW = clientH * imgRatio;
      offsetX = (clientW - renderW) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    ctx.restore();
  }

  // ==========================================================================
  // REQUIREMENT 1 & 4: GSAP SCROLLTRIGGER 300vh SCRUBBING & TELEMETRY
  // ==========================================================================
  function initScrollScrubber() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('GSAP or ScrollTrigger not available, falling back to window scroll.');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: '#hero-trigger',
      pin: '#hero-pin',
      start: 'top top',
      end: '+=300%',
      scrub: 0.6,
      onUpdate: (self) => {
        const progress = self.progress;
        const targetFrame = Math.min(
          FRAME_COUNT - 1,
          Math.max(0, Math.round(progress * (FRAME_COUNT - 1)))
        );

        renderFrame(targetFrame);
        updateTelemetryHUD(progress, targetFrame);
      }
    });

    window.addEventListener('resize', debounce(() => {
      renderFrame(currentFrameIndex);
      ScrollTrigger.refresh();
    }, 150));
  }

  function updateTelemetryHUD(progress, frameIndex) {
    if (scrubProgressFill) {
      scrubProgressFill.style.width = `${(progress * 100).toFixed(1)}%`;
    }
    if (telemetryFrame) {
      telemetryFrame.textContent = `${String(frameIndex + 1).padStart(3, '0')} / ${FRAME_COUNT}`;
    }
    if (telemetryPercent) {
      telemetryPercent.textContent = `${(progress * 100).toFixed(1)}%`;
    }
    if (telemetryPhase) {
      if (progress < 0.35) {
        telemetryPhase.textContent = '01: FOUNDATION / MONOCHROME';
        updateActiveTimelineTick(0);
      } else if (progress < 0.70) {
        telemetryPhase.textContent = '02: NEURAL LATENT SYNTHESIS';
        updateActiveTimelineTick(35);
      } else {
        telemetryPhase.textContent = '03: HOLOGRAPHIC CINEMA PROJECTION';
        updateActiveTimelineTick(progress >= 0.95 ? 100 : 70);
      }
    }
  }

  function updateActiveTimelineTick(targetPhase) {
    if (!timelineTicks) return;
    timelineTicks.forEach(tick => {
      const phase = parseInt(tick.getAttribute('data-phase'), 10);
      if (phase === targetPhase) {
        tick.classList.add('active');
      } else {
        tick.classList.remove('active');
      }
    });
  }

  // ==========================================================================
  // SECTION 01: THEATRICAL SHOWREEL 2026 ENGINE
  // ==========================================================================
  function initShowreelTrigger() {
    const playBtn = document.getElementById('play-showreel-btn');
    const showreelVid = document.getElementById('showreel-video-element');
    const audioStatus = document.getElementById('showreel-audio-status');

    if (showreelVid) {
      showreelVid.autoplay = true;
      showreelVid.muted = true;
      showreelVid.loop = true;
      showreelVid.playsInline = true;
      showreelVid.preload = 'auto';

      showreelVid.play().catch(() => {});

      if (playBtn) {
        playBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (showreelVid.muted) {
            showreelVid.muted = false;
            showreelVid.volume = 1.0;
            showreelVid.play().catch(() => {});
            if (audioStatus) {
              audioStatus.textContent = 'AUDIO: LIVE UNMUTED [4K 24 FPS]';
              audioStatus.style.color = 'var(--teal-primary)';
            }
            playSynthBeep(660, 0.1);
          } else if (showreelVid.paused) {
            showreelVid.play().catch(() => {});
            if (audioStatus) audioStatus.textContent = 'AUDIO: PLAYING';
          } else {
            showreelVid.pause();
            if (audioStatus) audioStatus.textContent = 'PLAYBACK PAUSED';
          }
        });
      }
    }
  }

  // ==========================================================================
  // SECTION 02: CURATED ARCHIVE // SELECTED WORKS (FILMS, MUSIC FILMS, ADS)
  // ==========================================================================
  const worksGrid = document.getElementById('works-grid');
  const filterBtns = document.querySelectorAll('.filter-tabs .filter-btn');

  function renderProjects(filter = 'all') {
    if (!worksGrid) return;
    worksGrid.innerHTML = '';

    const filtered = filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

    filtered.forEach((project) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-category', project.category || 'all');
      card.setAttribute('data-id', project.id);

      const previewClip = project.previewVideo || project.videoFile;

      card.innerHTML = `
        <div class="project-media-wrap">
          <img 
            src="${project.image}" 
            alt="${escapeHtml(project.title)}" 
            loading="lazy"
            decoding="async"
            class="project-thumb-img"
            onerror="if(this.src.endsWith('.webp')){this.src=this.src.replace('.webp','.jpg');}else{this.src='./assets/images/showreel_thumb.webp';}"
          />
          ${previewClip ? `
            <video 
              class="project-video-preview" 
              autoplay 
              muted 
              loop 
              playsinline 
              preload="auto"
              src="${previewClip}"
            ></video>
          ` : ''}
          <div class="visual-overlay"></div>
          
          <div class="project-badge mono-label">${project.tag || 'AI FILM'}</div>
          <div class="project-runtime-tag mono-sub">${project.runtime || '24 FPS'}</div>

          ${project.laurel ? `
            <div class="ribbon-indicator mono-sub">
              <span>✦ ${escapeHtml(project.laurel)}</span>
            </div>
          ` : ''}
        </div>

        <div class="project-info">
          <div class="project-meta">
            <span class="project-tag mono-label">${project.format || 'CINEMATIC AI'}</span>
            <span class="project-year mono-sub">${project.year || '2025–2026'}</span>
          </div>

          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          
          <p class="project-excerpt">
            ${escapeHtml(project.logline || project.synopsis || '')}
          </p>

          <div class="project-footer">
            <span class="mono-sub text-muted">${project.stats?.resolution || '4K UHD'}</span>
            <button type="button" class="project-btn mono-sub">
              <span>EXPLORE ARCHIVE</span>
              <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>
        </div>
      `;

      const vid = card.querySelector('.project-video-preview');
      if (vid) {
        card.addEventListener('mouseenter', () => {
          if (vid.paused) vid.play().catch(() => {});
        });
      }

      card.addEventListener('click', () => {
        openProjectModal(project);
      });

      worksGrid.appendChild(card);
    });

    if (typeof gsap !== 'undefined') {
      gsap.fromTo(
        worksGrid.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: 'power2.out' }
      );
    }
  }

  function initWorksFilter() {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        playSynthBeep(440, 0.05);

        const filter = btn.getAttribute('data-filter') || 'all';
        renderProjects(filter);

        if (typeof ScrollTrigger !== 'undefined') {
          setTimeout(() => ScrollTrigger.refresh(), 80);
        }
      });
    });
  }

  // ==========================================================================
  // PROJECT DETAILS MODAL (WITH INTERACTIVE VIDEO PLAYER)
  // ==========================================================================
  function openProjectModal(project) {
    if (!projectModal || !modalContent) return;
    playSynthBeep(580, 0.08);

    const videoSrc = project.videoFile || project.previewVideo;

    const pipelineSteps = project.pipeline || [
      { step: 'Environment Design', tool: 'Midjourney v6.1 & ComfyUI' },
      { step: 'Neural Motion Diffusion', tool: 'Kling AI & Runway Gen-3' },
      { step: 'Scene Extension & VFX', tool: 'After Effects & ComfyUI' },
      { step: 'Color Grading & Master', tool: 'DaVinci Resolve Studio ACEScg' }
    ];

    modalContent.innerHTML = `
      ${videoSrc ? `
        <div class="modal-video-container">
          <video 
            id="modal-video-player"
            src="${videoSrc}" 
            poster="${project.image}" 
            controls 
            autoplay 
            muted 
            playsinline 
            preload="auto"
            class="modal-video"
          ></video>
        </div>
      ` : `
        <div class="project-modal-header" style="position: relative; width: 100%; max-height: 380px; overflow: hidden; border-radius: 12px; margin-bottom: 2rem;">
          <img 
            src="${project.image}" 
            alt="${escapeHtml(project.title)}" 
            style="width: 100%; height: 100%; object-fit: cover;"
            onerror="if(this.src.endsWith('.webp')){this.src=this.src.replace('.webp','.jpg');}else{this.src='./assets/images/showreel_thumb.webp';}"
          />
          <div style="position: absolute; inset: 0; background: linear-gradient(0deg, rgba(7, 11, 16, 0.95) 0%, transparent 60%);"></div>
        </div>
      `}

      <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
        <div>
          <span class="mono-label" style="background: rgba(255, 170, 0, 0.15); border: 1px solid var(--amber-primary); color: var(--amber-primary); padding: 0.25rem 0.65rem; border-radius: 4px;">
            ${project.tag || 'AI FILM'}
          </span>
          <span class="mono-sub text-muted" style="margin-left: 0.75rem;">${project.runtime || '24 FPS'} // ${project.year || '2026'}</span>
        </div>
        ${project.instagramUrl ? `
          <a href="${project.instagramUrl}" target="_blank" rel="noopener noreferrer" class="hero-cta-btn secondary" style="font-size: 0.72rem; padding: 0.4rem 0.85rem;">
            <span>VIEW ON INSTAGRAM ➔</span>
          </a>
        ` : ''}
      </div>

      <h2 style="font-family: var(--font-display); font-size: 2rem; font-weight: 800; color: #fff; margin-bottom: 0.75rem;">
        ${escapeHtml(project.title)}
      </h2>

      ${project.laurel ? `
        <div class="mono-sub text-amber" style="margin-bottom: 1.25rem;">
          ✦ ${escapeHtml(project.laurel)}
        </div>
      ` : ''}

      <div style="background: rgba(255, 170, 0, 0.05); border-left: 3px solid var(--amber-primary); padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin-bottom: 1.75rem;">
        <p style="font-size: 1.05rem; font-style: italic; color: #fff; line-height: 1.6;">
          "${escapeHtml(project.logline || project.synopsis || '')}"
        </p>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 class="mono-label text-teal" style="margin-bottom: 0.75rem;">// SYNOPSIS & NARRATIVE VISION</h4>
        <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.95rem;">
          ${escapeHtml(project.synopsis || project.logline || '')}
        </p>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 class="mono-label text-amber" style="margin-bottom: 1rem;">// PRODUCTION PIPELINE & ENGINE SUITE</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
          ${pipelineSteps.map((p, idx) => `
            <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); padding: 1rem; border-radius: 8px;">
              <span class="mono-sub text-amber" style="font-weight: 700;">0${idx + 1}</span>
              <div class="mono-sub text-muted" style="margin-top: 0.25rem; font-size: 0.72rem;">${escapeHtml(p.step)}</div>
              <div style="font-weight: 600; color: #fff; margin-top: 0.2rem; font-size: 0.88rem;">${escapeHtml(p.tool)}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="background: rgba(8, 14, 22, 0.9); border: 1px solid var(--border-subtle); padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
        <div class="mono-label text-teal" style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.4rem;">
          <span>✦ DIRECTOR'S TECHNICAL SPECIFICATIONS</span>
        </div>
        <p style="font-size: 0.88rem; color: #cbd5e1; font-style: italic; line-height: 1.6; margin-bottom: 1.25rem;">
          "${escapeHtml(project.stats?.directorNote || project.logline || 'Precision-crafted with generative diffusion and cinematic ACEScg conform.')}"
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
          <div>
            <span class="mono-sub text-muted" style="font-size: 0.68rem; display: block;">FORMAT</span>
            <span class="mono-sub text-amber" style="font-weight: 600;">${project.format || 'CINEMATIC AI'}</span>
          </div>
          <div>
            <span class="mono-sub text-muted" style="font-size: 0.68rem; display: block;">FRAMERATE</span>
            <span class="mono-sub text-teal" style="font-weight: 600;">${project.stats?.fps || '24.000 FPS'}</span>
          </div>
          <div>
            <span class="mono-sub text-muted" style="font-size: 0.68rem; display: block;">RENDER PASSES</span>
            <span class="mono-sub" style="font-weight: 600; color: #fff;">${project.stats?.renderPasses || 'AI Environment & Grade'}</span>
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem;">
        <span class="mono-sub text-muted">Direct creative commissions & commercial licensing available.</span>
        <a href="#contact" id="modal-commission-cta" class="hero-cta-btn primary">
          <span>COMMISSION AARYA ➔</span>
        </a>
      </div>
    `;

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');

    // 1. Pause Lenis smooth page scroll
    if (lenisInstance) {
      lenisInstance.stop();
    }
    // 2. Prevent background body scroll leak
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    // 3. Reset modal dialog scroll to top
    const dialog = projectModal.querySelector('.modal-dialog');
    if (dialog) {
      dialog.scrollTop = 0;
    }

    const mvid = document.getElementById('modal-video-player');
    if (mvid) {
      mvid.play().catch(() => {});
    }

    const commissionCta = document.getElementById('modal-commission-cta');
    if (commissionCta) {
      commissionCta.addEventListener('click', () => {
        closeProjectModal();
      });
    }
  }

  function closeProjectModal() {
    if (!projectModal) return;
    const mvid = document.getElementById('modal-video-player');
    if (mvid) {
      mvid.pause();
      mvid.removeAttribute('src');
      mvid.load();
    }
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');

    // Guarantee clearing any overflow locks on html and body
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';

    // Guarantee resuming Lenis smooth page scroll
    if (lenisInstance) {
      lenisInstance.start();
    }

    // Refresh ScrollTrigger to sync coordinates
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
    const pDialog = projectModal.querySelector('.modal-dialog');
    if (pDialog) {
      pDialog.addEventListener('wheel', (e) => {
        e.stopPropagation();
      }, { passive: true });
    }
  }

  // ==========================================================================
  // SECTION 03: INSTAGRAM REELS DECK (16 REELS WITH AUTOPLAY PREVIEWS)
  // ==========================================================================
  const reelsContainer = document.getElementById('reels-deck-container');

  function renderReels() {
    if (!reelsContainer) return;
    reelsContainer.innerHTML = '';

    ALL_INSTAGRAM_REELS.forEach((reel) => {
      const card = document.createElement('div');
      card.className = 'reel-card';

      const reelPreview = reel.previewVideo || reel.videoFile;

      card.innerHTML = `
        <div class="reel-poster-box">
          <img 
            src="${reel.thumbnail}" 
            alt="${escapeHtml(reel.title)}" 
            loading="lazy" 
            decoding="async"
            class="reel-thumb-img"
            onerror="if(this.src.endsWith('.webp')){this.src=this.src.replace('.webp','.jpg');}else{this.src='./assets/images/showreel_thumb.webp';}"
          />
          ${reelPreview ? `
            <video 
              class="reel-video-preview" 
              autoplay 
              muted 
              loop 
              playsinline 
              preload="auto"
              src="${reelPreview}"
            ></video>
          ` : ''}
          <div class="reel-card-overlay"></div>
          
          <div class="reel-badge-top mono-sub">${reel.category || 'REEL'}</div>
          <div class="reel-runtime-top mono-sub">${reel.runtime || 'IG'}</div>

          <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; pointer-events: none; z-index: 3;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(255, 170, 0, 0.9); display: flex; align-items: center; justify-content: center; color: #030507; box-shadow: 0 0 20px var(--amber-glow);">
              <svg style="width: 20px; height: 20px; margin-left: 2px;" fill="currentColor" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
          </div>
        </div>

        <div class="reel-info-pad">
          <h4 class="reel-title">${escapeHtml(reel.title)}</h4>
          <p class="reel-caption">${escapeHtml(reel.caption || '')}</p>
          <a href="${reel.instagramUrl}" target="_blank" rel="noopener noreferrer" class="reel-link-btn mono-sub" onclick="event.stopPropagation();">
            <span>VIEW ON INSTAGRAM</span>
            <svg style="width: 12px; height: 12px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      `;

      const vid = card.querySelector('.reel-video-preview');
      if (vid) {
        card.addEventListener('mouseenter', () => {
          if (vid.paused) vid.play().catch(() => {});
        });
      }

      card.addEventListener('click', () => {
        openProjectModal({
          id: reel.id,
          title: reel.title,
          tag: reel.category || 'REEL',
          category: 'films',
          year: '2025–2026',
          format: 'VERTICAL CINEMA',
          runtime: reel.runtime || 'INSTAGRAM',
          image: reel.thumbnail,
          videoFile: reel.videoFile,
          previewVideo: reel.previewVideo,
          instagramUrl: reel.instagramUrl,
          logline: reel.caption || '',
          synopsis: reel.caption || '',
          pipeline: [
            { step: 'Visual Direction', tool: 'AI Generative Diffusion & VFX' },
            { step: 'Cinematography', tool: 'Vertical Mobile Master' },
            { step: 'Editorial Cut', tool: 'Premiere Pro & DaVinci Resolve' }
          ],
          stats: {
            fps: '30.000 FPS Vertical',
            resolution: '1080 x 1920 (9:16 Format)',
            renderPasses: 'Full Dynamic Grade',
            directorNote: reel.caption || 'Directed and produced by Aarya Bhujade.'
          }
        });
      });

      reelsContainer.appendChild(card);
    });
  }

  // ==========================================================================
  // SECTION 04: THE COMIC CHRONICLES & FULLSCREEN CAROUSEL READER
  // ==========================================================================
  const comicsContainer = document.getElementById('comics-container');

  function renderComics() {
    if (!comicsContainer) return;
    comicsContainer.innerHTML = '';

    COMIC_CAROUSELS.forEach((comic) => {
      const card = document.createElement('div');
      card.className = 'comic-card';

      card.innerHTML = `
        <div class="comic-cover-wrap">
          <img 
            src="${comic.cover}" 
            alt="${escapeHtml(comic.title)}" 
            loading="lazy" 
            decoding="async"
            class="comic-cover-img"
          />
          <div class="visual-overlay"></div>
          <div class="project-badge mono-label">${comic.tag || 'LORE'}</div>
          <div class="project-runtime-tag mono-sub" style="background: var(--amber-primary); color: #030507; font-weight: 700;">
            ${comic.panelCount} PANELS
          </div>
        </div>

        <div class="comic-info">
          <div class="comic-meta-row mono-sub">
            <span class="text-amber">GRAPHIC CHRONICLE</span>
            <span class="text-muted">${comic.readTime || '2 MIN READ'}</span>
          </div>

          <h3 class="comic-title">${escapeHtml(comic.title)}</h3>
          
          <p class="comic-teaser">
            "${escapeHtml(comic.teaser || '')}"
          </p>

          <button type="button" class="open-comic-btn mono-sub">
            <span>READ SERIES</span>
            <span>➔</span>
          </button>
        </div>
      `;

      card.addEventListener('click', () => {
        openComicModal(comic, 0);
      });

      comicsContainer.appendChild(card);
    });
  }

  function openComicModal(comic, panelIndex = 0) {
    if (!comicModal || !comicModalContent || !comic.panels || comic.panels.length === 0) return;
    playSynthBeep(620, 0.08);

    activeComic = comic;
    currentComicPanel = Math.max(0, Math.min(panelIndex, comic.panels.length - 1));

    renderComicModalView();

    comicModal.classList.add('active');
    comicModal.setAttribute('aria-hidden', 'false');

    if (lenisInstance) {
      lenisInstance.stop();
    }
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    const dialog = comicModal.querySelector('.comic-dialog');
    if (dialog) {
      dialog.scrollTop = 0;
    }
  }

  function renderComicModalView() {
    if (!activeComic || !comicModalContent) return;

    comicModalContent.innerHTML = `
      <div class="comic-reader-box">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span class="mono-label text-amber">${activeComic.tag || 'SACRED LORE'}</span>
            <h3 style="font-family: var(--font-display); font-size: 1.75rem; font-weight: 800; color: #fff; margin-top: 0.25rem;">
              ${escapeHtml(activeComic.title)}
            </h3>
          </div>
          <span class="mono-sub text-teal">${activeComic.readTime || '2 MIN READ'}</span>
        </div>

        <div class="comic-reader-viewport">
          <img 
            id="comic-active-img" 
            src="${activeComic.panels[currentComicPanel]}" 
            alt="${escapeHtml(activeComic.title)} Panel ${currentComicPanel + 1}" 
            class="comic-panel-active-img"
          />
          <button id="comic-nav-prev" class="comic-nav-arrow prev" aria-label="Previous Panel">
            <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button id="comic-nav-next" class="comic-nav-arrow next" aria-label="Next Panel">
            <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
          <div id="comic-panel-counter" class="comic-panel-counter mono-label">
            PANEL ${String(currentComicPanel + 1).padStart(2, '0')} / ${String(activeComic.panelCount).padStart(2, '0')}
          </div>
        </div>

        <div style="margin-top: 0.75rem;">
          <div class="mono-sub text-muted" style="font-size: 0.68rem; margin-bottom: 0.35rem;">ORIGINAL NARRATIVE CAPTION</div>
          <div class="comic-reader-caption font-mono">${escapeHtml(activeComic.caption || '')}</div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; flex-wrap: wrap; gap: 0.75rem;">
          <span class="mono-sub text-muted">Use ◀ ▶ Arrow Keys to Flip Through Panels</span>
          <a href="${activeComic.instagramUrl}" target="_blank" rel="noopener noreferrer" class="hero-link mono-sub text-amber" style="font-weight: 600;">
            VIEW ORIGINAL POST ON INSTAGRAM ➔
          </a>
        </div>
      </div>
    `;

    const prevBtn = document.getElementById('comic-nav-prev');
    const nextBtn = document.getElementById('comic-nav-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateComic(-1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateComic(1);
      });
    }
  }

  function navigateComic(direction) {
    if (!activeComic || !activeComic.panels) return;
    const total = activeComic.panels.length;
    currentComicPanel = (currentComicPanel + direction + total) % total;
    playSynthBeep(520, 0.04);

    const activeImg = document.getElementById('comic-active-img');
    const counter = document.getElementById('comic-panel-counter');

    if (activeImg) {
      activeImg.src = activeComic.panels[currentComicPanel];
      activeImg.alt = `${activeComic.title} Panel ${currentComicPanel + 1}`;
    }
    if (counter) {
      counter.textContent = `PANEL ${String(currentComicPanel + 1).padStart(2, '0')} / ${String(activeComic.panelCount).padStart(2, '0')}`;
    }
  }

  function closeComicModal() {
    if (!comicModal) return;
    comicModal.classList.remove('active');
    comicModal.setAttribute('aria-hidden', 'true');
    activeComic = null;

    // Guarantee clearing any overflow locks on html and body
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';

    if (lenisInstance) {
      lenisInstance.start();
    }

    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  }

  if (comicModalClose) comicModalClose.addEventListener('click', closeComicModal);
  if (comicModalBackdrop) comicModalBackdrop.addEventListener('click', closeComicModal);
  if (comicModal) {
    comicModal.addEventListener('click', (e) => {
      if (e.target === comicModal) {
        closeComicModal();
      }
    });
    const cDialog = comicModal.querySelector('.comic-dialog');
    if (cDialog) {
      cDialog.addEventListener('wheel', (e) => {
        e.stopPropagation();
      }, { passive: true });
    }
  }

  // Global Keydown (Esc & Arrow Keys)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal && projectModal.classList.contains('active')) closeProjectModal();
      if (comicModal && comicModal.classList.contains('active')) closeComicModal();
    }
    if (comicModal && comicModal.classList.contains('active')) {
      if (e.key === 'ArrowLeft') navigateComic(-1);
      if (e.key === 'ArrowRight') navigateComic(1);
    }
  });

  // ==========================================================================
  // SECTION 09: CONTACT TERMINAL & EMAIL CLIPBOARD
  // ==========================================================================
  function initContactTerminal() {
    objChips.forEach(chip => {
      chip.addEventListener('click', () => {
        objChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        playSynthBeep(520, 0.05);
      });
    });

    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = `<span>TRANSMITTING TO AARYA'S QUEUE...</span>`;
        }

        playSynthBeep(660, 0.1);

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<span>TRANSMISSION CONFIRMED ✓</span>`;
          }
          if (formFeedback) {
            formFeedback.textContent = "Thank you. Your brief has been transmitted to Aarya Bhujade's priority dispatch queue. Direct response within 24 hours.";
            formFeedback.style.color = "#00f5d4";
          }
          contactForm.reset();

          setTimeout(() => {
            if (submitBtn) {
              submitBtn.innerHTML = `
                <span class="btn-text">TRANSMIT BRIEF ➔</span>
              `;
            }
          }, 4500);
        }, 1200);
      });
    }

    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        const emailAddressEl = document.getElementById('email-address');
        const emailText = emailAddressEl ? emailAddressEl.textContent.trim() : 'aarya.bhujade.123@gmail.com';
        navigator.clipboard.writeText(emailText).then(() => {
          if (copyStatus) {
            copyStatus.textContent = 'COPIED!';
            copyStatus.style.color = '#00f5d4';
          }
          playSynthBeep(880, 0.06);

          setTimeout(() => {
            if (copyStatus) {
              copyStatus.textContent = 'COPY';
              copyStatus.style.color = '';
            }
          }, 2500);
        }).catch(() => {
          if (copyStatus) copyStatus.textContent = 'COPIED!';
        });
      });
    }
  }

  // ==========================================================================
  // SMOOTH ANCHOR NAVIGATION & BACK TO TOP
  // ==========================================================================
  function initAnchorNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href) return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          playSynthBeep(330, 0.04);
          if (lenisInstance) {
            lenisInstance.scrollTo(target, {
              offset: -40,
              duration: 1.4,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        playSynthBeep(600, 0.06);
        if (lenisInstance) {
          lenisInstance.scrollTo(0, { duration: 1.6 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  }

  // ==========================================================================
  // GSAP SCROLLTRIGGER ENTRANCE ANIMATIONS
  // ==========================================================================
  function initScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    // Staggered reveal of Arsenal cards
    gsap.from('.arsenal-card', {
      scrollTrigger: {
        trigger: '#arsenal',
        start: 'top 80%',
      },
      y: 35,
      opacity: 0,
      duration: 0.6,
      stagger: 0.06,
      ease: 'power2.out'
    });

    // Staggered reveal of Experience cards
    gsap.from('.experience-card', {
      scrollTrigger: {
        trigger: '#experience',
        start: 'top 80%',
      },
      x: -30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out'
    });

    // Staggered reveal of Pipeline Phase cards
    gsap.from('.pipeline-phase-card', {
      scrollTrigger: {
        trigger: '#pipeline',
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out'
    });

    // About Section reveal
    gsap.from('.portrait-wrap, .about-content', {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power2.out'
    });
  }

  // ==========================================================================
  // CUSTOM CURSOR & AUDIO SYNTHESIZER
  // ==========================================================================
  function initCustomCursor() {
    return; // Native system cursor active - custom cursor removed
    if (!cursor || !cursorFollower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function renderFollower() {
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;
      cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(renderFollower);
    }
    requestAnimationFrame(renderFollower);

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-card, .reel-card, .comic-card, .arsenal-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorFollower.style.width = '48px';
        cursorFollower.style.height = '48px';
        cursorFollower.style.borderColor = 'rgba(255, 170, 0, 0.7)';
      });
      el.addEventListener('mouseleave', () => {
        cursorFollower.style.width = '32px';
        cursorFollower.style.height = '32px';
        cursorFollower.style.borderColor = 'rgba(0, 245, 212, 0.45)';
      });
    });
  }

  function initAudioSynthesizer() {
    if (!soundToggle) return;

    soundToggle.addEventListener('click', () => {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
      }

      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      isAudioEnabled = !isAudioEnabled;
      soundToggle.classList.toggle('playing', isAudioEnabled);

      if (isAudioEnabled) {
        playSynthBeep(440, 0.12);
        playSynthBeep(880, 0.18);
      }
    });
  }

  function playSynthBeep(freq, duration = 0.08) {
    if (!isAudioEnabled || !audioCtx) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // AudioContext policy suppression gracefully handled
    }
  }

  // Helper utility functions
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  function escapeHtml(string) {
    if (typeof string !== 'string') return '';
    const div = document.createElement('div');
    div.textContent = string;
    return div.innerHTML;
  }

  // ==========================================================================
  // INITIALIZATION LIFECYCLE
  // ==========================================================================
  window.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initScrollScrubber();
    startPreloading();

    // Render Master Datasets
    renderProjects('all');
    initWorksFilter();
    renderReels();
    renderComics();

    // Features & Interactions
    initShowreelTrigger();
    initContactTerminal();
    initAnchorNavigation();
    initCustomCursor();
    initAudioSynthesizer();
    initScrollAnimations();

    // Refresh ScrollTrigger after DOM population
    if (typeof ScrollTrigger !== 'undefined') {
      setTimeout(() => ScrollTrigger.refresh(), 100);
    }
  });

  // Requirement 3: Refresh ScrollTrigger after all page assets/images/videos fully load
  window.addEventListener('load', () => {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
    if (lenisInstance) {
      lenisInstance.resize();
    }
  });

})();
