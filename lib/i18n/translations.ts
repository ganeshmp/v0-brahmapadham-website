export type Language = {
  code: string
  name: string
  nativeName: string
  fontClass?: string // For language-specific font styling
}

export const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", fontClass: "font-telugu" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", fontClass: "font-hindi" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", fontClass: "font-tamil" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", fontClass: "font-kannada" },
]

// Common translations used across the site
export const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    teachings: "Teachings",
    events: "Events",
    schedule: "Schedule",
    contact: "Contact",
    donate: "Donate",

    // Hero section
    heroTitle: "Brahmapadham Bhagavad Gita Adhyātmika Kṣetram",
    heroSubtitle:
      "Discover the timeless wisdom of the Bhagavad Gita and embark on a journey of spiritual transformation and self-realization.",
    exploreTeachings: "Explore Teachings",
    learnAboutUs: "Learn About Us",

    // Mission section
    ourMission: "Our Mission",
    missionTitle: "Spiritual Enlightenment Through Ancient Wisdom",
    missionText:
      "Brahmapadham Bhagavad Gita Adhyātmika Kṣetram is dedicated to spreading the timeless wisdom of the Bhagavad Gita, guiding seekers on their spiritual journey toward self-realization and inner peace.",
    learnMore: "Learn More",

    // Daily schedule
    dailySchedule: "Daily Schedule",
    ourDailyRoutine: "Our Daily Routine",
    dailyScheduleText: "Join us for our daily spiritual activities and programs at the temple.",
    viewFullSchedule: "View Full Schedule",

    // Offerings
    ourOfferings: "Our Offerings",
    offeringsTitle: "Spiritual Growth & Learning",
    offeringsText:
      "Discover our comprehensive programs designed to deepen your understanding of the Bhagavad Gita and ancient wisdom.",
    gitaClasses: "Gita Classes",
    inDepthStudy: "In-depth study of sacred texts",
    verseByVerse: "Verse-by-verse explanation",
    exploreClasses: "Explore Classes",
    meditationRetreats: "Meditation Retreats",
    immersiveExperiences: "Immersive spiritual experiences",
    guidedByTeachers: "Guided by experienced teachers",
    viewRetreats: "View Retreats",
    communityEvents: "Community Events",
    connectWithSeekers: "Connect with fellow seekers",
    regularGatherings: "Regular gatherings and celebrations",
    seeCalendar: "See Calendar",

    // Teachings section
    featuredTeachings: "Featured Teachings",
    wisdomFromGita: "Wisdom from the Bhagavad Gita",
    teachingsText: "Explore our collection of teachings that illuminate the profound wisdom of the Bhagavad Gita.",
    karmaYoga: "Karma Yoga: The Path of Action",
    karmaYogaDesc: "Chapter 3 of the Bhagavad Gita",
    karmaYogaText:
      "Learn how to perform your duties with detachment, understanding that action performed without attachment leads to spiritual liberation.",
    bhaktiYoga: "Bhakti Yoga: The Path of Devotion",
    bhaktiYogaDesc: "Chapter 12 of the Bhagavad Gita",
    bhaktiYogaText:
      "Discover the power of devotion and love as a means to connect with the divine and achieve spiritual fulfillment.",
    jnanaYoga: "Jnana Yoga: The Path of Knowledge",
    jnanaYogaDesc: "Chapters 13-18 of the Bhagavad Gita",
    jnanaYogaText:
      "Explore the path of knowledge and wisdom, understanding the nature of reality and the self through spiritual insight.",
    dhyanaYoga: "Dhyana Yoga: The Path of Meditation",
    dhyanaYogaDesc: "Chapter 6 of the Bhagavad Gita",
    dhyanaYogaText:
      "Learn the techniques of meditation and concentration that lead to inner peace and spiritual awakening.",
    readMore: "Read More",
    viewAllTeachings: "View All Teachings",

    // Events section
    upcomingEvents: "Upcoming Events",
    eventsSubtitle: "Join us for these transformative gatherings and deepen your spiritual practice.",
    gitaJayanti: "Gita Jayanti Celebration",
    gitaJayantiDesc: "Annual celebration of the Bhagavad Gita",
    gitaJayantiDate: "December 15, 2025",
    gitaJayantiTime: "9:00 AM - 6:00 PM",
    gitaJayantiLocation: "Main Hall, Brahmapadham Center",
    gitaJayantiText:
      "A full day of chanting, discourses, and cultural programs celebrating the divine wisdom of the Bhagavad Gita.",
    register: "Register",
    meditationRetreat: "Weekend Meditation Retreat",
    meditationRetreatDesc: "Intensive meditation practice",
    meditationRetreatDate: "November 10-12, 2025",
    meditationRetreatTime: "Residential Program",
    meditationRetreatLocation: "Retreat Center, Peaceful Valley",
    meditationRetreatText:
      "Immerse yourself in a weekend of guided meditation, silence, and spiritual teachings to deepen your practice.",
    studyCircle: "Weekly Gita Study Circle",
    studyCircleDesc: "Chapter-by-chapter study",
    studyCircleDate: "Every Sunday",
    studyCircleTime: "10:00 AM - 12:00 PM",
    studyCircleLocation: "Study Hall, Brahmapadham Center",
    studyCircleText:
      "Join our ongoing study circle where we explore the Bhagavad Gita verse by verse with detailed explanations.",
    joinNextSession: "Join Next Session",
    viewAllEvents: "View All Events",

    // Location section
    visitUs: "Visit Us",
    ourCenter: "Our Spiritual Center",
    centerText:
      "Experience the serene atmosphere of our center, designed to facilitate spiritual growth and inner peace.",
    contactUs: "Contact Us",
    getDirections: "Get Directions",

    // Newsletter section
    joinCommunity: "Join Our Spiritual Community",
    newsletterText: "Subscribe to receive updates on classes, events, and spiritual insights.",
    subscribe: "Subscribe",
    privacyNote: "We respect your privacy. Unsubscribe at any time.",

    // Testimonials
    testimonials: "Testimonials",
    transformativeExperiences: "Transformative Experiences",
    testimonialsText: "Hear from those whose lives have been touched by the teachings at Brahmapadham.",

    // Footer
    quickLinks: "Quick Links",
    programs: "Programs",
    copyright: "© 2024 Brahmapadham Bhagavad Gita Adhyātmika Kṣetram. All rights reserved.",
  },

  te: {
    // Navigation
    home: "హోమ్",
    about: "మా గురించి",
    teachings: "బోధనలు",
    events: "కార్యక్రమాలు",
    schedule: "షెడ్యూల్",
    contact: "సంప్రదించండి",
    donate: "విరాళం ఇవ్వండి",

    // Hero section
    heroTitle: "బ్రహ్మపదం భగవద్గీత ఆధ్యాత్మిక క్షేత్రం",
    heroSubtitle: "భగవద్గీత యొక్క శాశ్వత జ్ఞానాన్ని కనుగొనండి మరియు ఆధ్యాత్మిక పరివర్తన మరియు స్వీయ-సాక్షాత్కారం ప్రయాణంలో పాల్గొనండి.",
    exploreTeachings: "బోధనలను అన్వేషించండి",
    learnAboutUs: "మా గురించి తెలుసుకోండి",

    // Mission section
    ourMission: "మా లక్ష్యం",
    missionTitle: "ప్రాచీన జ్ఞానం ద్వారా ఆధ్యాత్మిక జ్ఞానోదయం",
    missionText:
      "బ్రహ్మపదం భగవద్గీత ఆధ్యాత్మిక క్షేత్రం భగవద్గీత యొక్క శాశ్వత జ్ఞానాన్ని వ్యాప్తి చేయడానికి, స్వీయ-సాక్షాత్కారం మరియు అంతర్గత శాంతి వైపు వారి ఆధ్యాత్మిక ప్రయాణంలో అన్వేషకులకు మార్గదర్శకత్వం వహించడానికి అంకితం చేయబడింది.",
    learnMore: "మరింత తెలుసుకోండి",

    // Daily schedule
    dailySchedule: "రోజువారీ షెడ్యూల్",
    ourDailyRoutine: "మా రోజువారీ కార్యక్రమం",
    dailyScheduleText: "ఆలయంలో మా రోజువారీ ఆధ్యాత్మిక కార్యకలాపాలు మరియు కార్యక్రమాలలో పాల్గొనండి.",
    viewFullSchedule: "పూర్తి షెడ్యూల్ చూడండి",

    // Offerings
    ourOfferings: "మా కార్యక్రమాలు",
    offeringsTitle: "ఆధ్యాత్మిక వృద్ధి & అభ్యాసం",
    offeringsText: "భగవద్గీత మరియు ప్రాచీన జ్ఞానం గురించి మీ అవగాహనను లోతుగా చేయడానికి రూపొందించబడిన మా సమగ్ర కార్యక్రమాలను కనుగొనండి.",
    gitaClasses: "గీత తరగతులు",
    inDepthStudy: "పవిత్ర గ్రంథాల లోతైన అధ్యయనం",
    verseByVerse: "శ్లోకం వారీగా వివరణ",
    exploreClasses: "తరగతులను అన్వేషించండి",
    meditationRetreats: "ధ్యాన రిట్రీట్లు",
    immersiveExperiences: "ఆధ్యాత్మిక అనుభవాలు",
    guidedByTeachers: "అనుభవజ్ఞులైన గురువులచే మార్గదర్శకత్వం",
    viewRetreats: "రిట్రీట్లను చూడండి",
    communityEvents: "సామూహిక కార్యక్రమాలు",
    connectWithSeekers: "సహ అన్వేషకులతో కలవండి",
    regularGatherings: "క్రమం తప్పని సమావేశాలు మరియు వేడుకలు",
    seeCalendar: "క్యాలెండర్ చూడండి",

    // Teachings section
    featuredTeachings: "ప్రత్యేక బోధనలు",
    wisdomFromGita: "భగవద్గీత నుండి జ్ఞానం",
    teachingsText: "భగవద్గీత యొక్క లోతైన జ్ఞానాన్ని ప్రకాశింపజేసే మా బోధనల సేకరణను అన్వేషించండి.",
    karmaYoga: "కర్మ యోగం: కర్మ మార్గం",
    karmaYogaDesc: "భగవద్గీత 3వ అధ్యాయం",
    karmaYogaText: "అనాసక్తితో మీ విధులను ఎలా నిర్వర్తించాలో నేర్చుకోండి, అనాసక్తితో చేసిన చర్య ఆధ్యాత్మిక విముక్తికి దారితీస్తుందని అర్థం చేసుకోండి.",
    bhaktiYoga: "భక్తి యోగం: భక్తి మార్గం",
    bhaktiYogaDesc: "భగవద్గీత 12వ అధ్యాయం",
    bhaktiYogaText: "దైవంతో సంబంధాన్ని ఏర్పరచుకోవడానికి మరియు ఆధ్యాత్మిక సంతృప్తిని సాధించడానికి ఒక మార్గంగా భక్తి మరియు ప్రేమ యొక్క శక్తిని కనుగొనండి.",
    jnanaYoga: "జ్ఞాన యోగం: జ్ఞాన మార్గం",
    jnanaYogaDesc: "భగవద్గీత 13-18 అధ్యాయాలు",
    jnanaYogaText: "ఆధ్యాత్మిక అంతర్దృష్టి ద్వారా వాస్తవికత మరియు స్వీయ స్వభావాన్ని అర్థం చేసుకుంటూ, జ్ఞానం మరియు వివేకం మార్గాన్ని అన్వేషించండి.",
    dhyanaYoga: "ధ్యాన యోగం: ధ్యాన మార్గం",
    dhyanaYogaDesc: "భగవద్గీత 6వ అధ్యాయం",
    dhyanaYogaText: "అంతర్గత శాంతి మరియు ఆధ్యాత్మిక మేల్కొలుపుకు దారితీసే ధ్యానం మరియు ఏకాగ్రత పద్ధతులను నేర్చుకోండి.",
    readMore: "మరింత చదవండి",
    viewAllTeachings: "అన్ని బోధనలను చూడండి",

    // Events section
    upcomingEvents: "రాబోయే కార్యక్రమాలు",
    eventsSubtitle: "ఈ పరివర్తనాత్మక సమావేశాలలో పాల్గొనండి మరియు మీ ఆధ్యాత్మిక అభ్యాసాన్ని లోతు చేసుకోండి.",
    gitaJayanti: "గీతా జయంతి వేడుకలు",
    gitaJayantiDesc: "భగవద్గీత వార్షిక వేడుక",
    gitaJayantiDate: "డిసెంబర్ 15, 2025",
    gitaJayantiTime: "ఉదయం 9:00 - సాయంత్రం 6:00",
    gitaJayantiLocation: "ప్రధాన హాలు, బ్రహ్మపదం కేంద్రం",
    gitaJayantiText: "భగవద్గీత దివ్య జ్ఞానాన్ని జరుపుకునే పారాయణం, ప్రసంగాలు మరియు సాంస్కృతిక కార్యక్రమాలతో కూడిన రోజు.",
    register: "నమోదు చేసుకోండి",
    meditationRetreat: "వీకెండ్ ధ్యాన రిట్రీట్",
    meditationRetreatDesc: "తీవ్రమైన ధ్యాన అభ్యాసం",
    meditationRetreatDate: "నవంబర్ 10-12, 2025",
    meditationRetreatTime: "నివాస కార్యక్రమం",
    meditationRetreatLocation: "రిట్రీట్ సెంటర్, పీస్‌ఫుల్ వ్యాలీ",
    meditationRetreatText: "మీ అభ్యాసాన్ని లోతు చేసుకోవడానికి మార్గదర్శక ధ్యానం, నిశ్శబ్దం మరియు ఆధ్యాత్మిక బోధనలతో కూడిన వారాంతంలో మునిగిపోండి.",
    studyCircle: "వారపు గీతా అధ్యయన వృత్తం",
    studyCircleDesc: "అధ్యాయం-వారీగా అధ్యయనం",
    studyCircleDate: "ప్రతి ఆదివారం",
    studyCircleTime: "ఉదయం 10:00 - మధ్యాహ్నం 12:00",
    studyCircleLocation: "అధ్యయన హాలు, బ్రహ్మపదం కేంద్రం",
    studyCircleText: "భగవద్గీతను శ్లోకం వారీగా వివరణాత్మక వివరణలతో అన్వేషించే మా కొనసాగుతున్న అధ్యయన వృత్తంలో చేరండి.",
    joinNextSession: "తదుపరి సెషన్‌లో చేరండి",
    viewAllEvents: "అన్ని కార్యక్రమాలను చూడండి",

    // Location section
    visitUs: "మమ్మల్ని సందర్శించండి",
    ourCenter: "మా ఆధ్యాత్మిక కేంద్రం",
    centerText: "ఆధ్యాత్మిక వృద్ధి మరియు అంతర్గత శాంతిని సులభతరం చేయడానికి రూపొందించబడిన మా కేంద్రం యొక్క ప్రశాంతమైన వాతావరణాన్ని అనుభవించండి.",
    contactUs: "మమ్మల్ని సంప్రదించండి",
    getDirections: "దిశలను పొందండి",

    // Newsletter section
    joinCommunity: "మా ఆధ్యాత్మిక సమాజంలో చేరండి",
    newsletterText: "తరగతులు, కార్యక్రమాలు మరియు ఆధ్యాత్మిక అంతర్దృష్టులపై నవీకరణలను పొందడానికి సబ్‌స్క్రైబ్ చేసుకోండి.",
    subscribe: "సబ్‌స్క్రైబ్ చేయండి",
    privacyNote: "మేము మీ గోప్యతను గౌరవిస్తాము. ఎప్పుడైనా సబ్‌స్క్రిప్షన్ రద్దు చేసుకోవచ్చు.",

    // Testimonials
    testimonials: "వ్యక్తిగత అనుభవాలు",
    transformativeExperiences: "పరివర్తనాత్మక అనుభవాలు",
    testimonialsText: "బ్రహ్మపదం వద్ద బోధనల ద్వారా జీవితాలు ప్రభావితమైన వారి నుండి వినండి.",

    // Footer
    quickLinks: "త్వరిత లింక్‌లు",
    programs: "కార్యక్రమాలు",
    copyright: "© 2024 బ్రహ్మపదం భగవద్గీత ఆధ్యాత్మిక క్షేత్రం. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
  },

  hi: {
    // Navigation
    home: "होम",
    about: "हमारे बारे में",
    teachings: "शिक्षाएँ",
    events: "कार्यक्रम",
    schedule: "समय-सारिणी",
    contact: "संपर्क करें",
    donate: "दान करें",

    // Hero section
    heroTitle: "ब्रह्मपदम भगवद्गीता आध्यात्मिक क्षेत्रम्",
    heroSubtitle: "भगवद्गीता के अमर ज्ञान की खोज करें और आध्यात्मिक परिवर्तन और आत्म-साक्षात्कार की यात्रा पर निकलें।",
    exploreTeachings: "शिक्षाएँ देखें",
    learnAboutUs: "हमारे बारे में जानें",

    // Mission section
    ourMission: "हमारा मिशन",
    missionTitle: "प्राचीन ज्ञान के माध्यम से आध्यात्मिक ज्ञानोदय",
    missionText:
      "ब्रह्मपदम भगवद्गीता आध्यात्मिक क्षेत्रम् भगवद्गीता के अमर ज्ञान को फैलाने, साधकों को आत्म-साक्षात्कार और आंतरिक शांति की ओर उनकी आध्यात्मिक यात्रा में मार्गदर्शन करने के लिए समर्पित है।",
    learnMore: "अधिक जानें",

    // Daily schedule
    dailySchedule: "दैनिक समय-सारिणी",
    ourDailyRoutine: "हमारी दैनिक दिनचर्या",
    dailyScheduleText: "मंदिर में हमारी दैनिक आध्यात्मिक गतिविधियों और कार्यक्रमों में शामिल हों।",
    viewFullSchedule: "पूरी समय-सारिणी देखें",

    // Offerings
    ourOfferings: "हमारी सेवाएँ",
    offeringsTitle: "आध्यात्मिक विकास और शिक्षा",
    offeringsText: "भगवद्गीता और प्राचीन ज्ञान की आपकी समझ को गहरा करने के लिए डिज़ाइन किए गए हमारे व्यापक कार्यक्रमों की खोज करें।",
    gitaClasses: "गीता कक्षाएँ",
    inDepthStudy: "पवित्र ग्रंथों का गहन अध्ययन",
    verseByVerse: "श्लोक-दर-श्लोक व्याख्या",
    exploreClasses: "कक्षाएँ देखें",
    meditationRetreats: "ध्यान रिट्रीट",
    immersiveExperiences: "आध्यात्मिक अनुभव",
    guidedByTeachers: "अनुभवी शिक्षकों द्वारा मार्गदर्शित",
    viewRetreats: "रिट्रीट देखें",
    communityEvents: "सामुदायिक कार्यक्रम",
    connectWithSeekers: "साथी साधकों से जुड़ें",
    regularGatherings: "नियमित सभाएँ और उत्सव",
    seeCalendar: "कैलेंडर देखें",

    // Teachings section
    featuredTeachings: "विशेष शिक्षाएँ",
    wisdomFromGita: "भगवद्गीता से ज्ञान",
    teachingsText: "भगवद्गीता के गहन ज्ञान को प्रकाशित करने वाली हमारी शिक्षाओं का अन्वेषण करें।",
    karmaYoga: "कर्म योग: कर्म का मार्ग",
    karmaYogaDesc: "भगवद्गीता का अध्याय 3",
    karmaYogaText:
      "अनासक्ति के साथ अपने कर्तव्यों को कैसे निभाएं, यह समझते हुए कि अनासक्ति के साथ किया गया कर्म आध्यात्मिक मुक्ति की ओर ले जाता है।",
    bhaktiYoga: "भक्ति योग: भक्ति का मार्ग",
    bhaktiYogaDesc: "भगवद्गीता का अध्याय 12",
    bhaktiYogaText: "दिव्य से जुड़ने और आध्यात्मिक संतुष्टि प्राप्त करने के साधन के रूप में भक्ति और प्रेम की शक्ति की खोज करें।",
    jnanaYoga: "ज्ञान योग: ज्ञान का मार्ग",
    jnanaYogaDesc: "भगवद्गीता के अध्याय 13-18",
    jnanaYogaText: "आध्यात्मिक अंतर्दृष्टि के माध्यम से वास्तविकता और स्वयं की प्रकृति को समझते हुए, ज्ञान और विवेक के मार्ग का अन्वेषण करें।",
    dhyanaYoga: "ध्यान योग: ध्यान का मार्ग",
    dhyanaYogaDesc: "भगवद्गीता का अध्याय 6",
    dhyanaYogaText: "आंतरिक शांति और आध्यात्मिक जागृति की ओर ले जाने वाली ध्यान और एकाग्रता की तकनीकों को सीखें।",
    readMore: "और पढ़ें",
    viewAllTeachings: "सभी शिक्षाएँ देखें",

    // Events section
    upcomingEvents: "आगामी कार्यक्रम",
    eventsSubtitle: "इन परिवर्तनकारी सभाओं में शामिल हों और अपने आध्यात्मिक अभ्यास को गहरा करें।",
    gitaJayanti: "गीता जयंती समारोह",
    gitaJayantiDesc: "भगवद्गीता का वार्षिक उत्सव",
    gitaJayantiDate: "15 दिसंबर, 2025",
    gitaJayantiTime: "सुबह 9:00 - शाम 6:00",
    gitaJayantiLocation: "मुख्य हॉल, ब्रह्मपदम केंद्र",
    gitaJayantiText: "भगवद्गीता के दिव्य ज्ञान का जश्न मनाने के लिए पूरे दिन का जाप, प्रवचन और सांस्कृतिक कार्यक्रम।",
    register: "पंजीकरण करें",
    meditationRetreat: "वीकेंड ध्यान रिट्रीट",
    meditationRetreatDesc: "गहन ध्यान अभ्यास",
    meditationRetreatDate: "10-12 नवंबर, 2025",
    meditationRetreatTime: "आवासीय कार्यक्रम",
    meditationRetreatLocation: "रिट्रीट सेंटर, शांतिपूर्ण घाटी",
    meditationRetreatText: "अपने अभ्यास को गहरा करने के लिए मार्गदर्शित ध्यान, मौन और आध्यात्मिक शिक्षाओं के सप्ताहांत में डूबें।",
    studyCircle: "साप्ताहिक गीता अध्ययन मंडल",
    studyCircleDesc: "अध्याय-दर-अध्याय अध्ययन",
    studyCircleDate: "हर रविवार",
    studyCircleTime: "सुबह 10:00 - दोपहर 12:00",
    studyCircleLocation: "अध्ययन हॉल, ब्रह्मपदम केंद्र",
    studyCircleText: "हमारे चल रहे अध्ययन मंडल में शामिल हों जहां हम विस्तृत व्याख्याओं के साथ भगवद्गीता का श्लोक-दर-श्लोक अन्वेषण करते हैं।",
    joinNextSession: "अगले सत्र में शामिल हों",
    viewAllEvents: "सभी कार्यक्रम देखें",

    // Location section
    visitUs: "हमसे मिलें",
    ourCenter: "हमारा आध्यात्मिक केंद्र",
    centerText:
      "हमारे केंद्र के शांत वातावरण का अनुभव करें, जो आध्यात्मिक विकास और आंतरिक शांति को सुगम बनाने के लिए डिज़ाइन किया गया है।",
    contactUs: "संपर्क करें",
    getDirections: "दिशा-निर्देश प्राप्त करें",

    // Newsletter section
    joinCommunity: "हमारे आध्यात्मिक समुदाय में शामिल हों",
    newsletterText: "कक्षाओं, कार्यक्रमों और आध्यात्मिक अंतर्दृष्टि पर अपडेट प्राप्त करने के लिए सदस्यता लें।",
    subscribe: "सदस्यता लें",
    privacyNote: "हम आपकी गोपनीयता का सम्मान करते हैं। किसी भी समय सदस्यता रद्द करें।",

    // Testimonials
    testimonials: "प्रशंसापत्र",
    transformativeExperiences: "परिवर्तनकारी अनुभव",
    testimonialsText: "उन लोगों से सुनें जिनके जीवन ब्रह्मपदम में शिक्षाओं से प्रभावित हुए हैं।",

    // Footer
    quickLinks: "त्वरित लिंक",
    programs: "कार्यक्रम",
    copyright: "© 2024 ब्रह्मपदम भगवद्गीता आध्यात्मिक क्षेत्रम्। सर्वाधिकार सुरक्षित।",
  },

  ta: {
    // Navigation
    home: "முகப்பு",
    about: "எங்களைப் பற்றி",
    teachings: "போதனைகள்",
    events: "நிகழ்வுகள்",
    schedule: "அட்டவணை",
    contact: "தொடர்பு கொள்ளவும்",
    donate: "நன்கொடை",

    // Hero section
    heroTitle: "பிரம்மபதம் பகவத்கீதை ஆத்யாத்மிக க்ஷேத்ரம்",
    heroSubtitle: "பகவத்கீதையின் காலத்தால் அழியாத ஞானத்தைக் கண்டறிந்து, ஆன்மீக மாற்றம் மற்றும் சுய உணர்தலின் பயணத்தில் ஈடுபடுங்கள்.",
    exploreTeachings: "போதனைகளை ஆராயுங்கள்",
    learnAboutUs: "எங்களைப் பற்றி அறியுங்கள்",

    // Mission section
    ourMission: "எங்கள் நோக்கம்",
    missionTitle: "பண்டைய ஞானத்தின் மூலம் ஆன்மீக ஒளியூட்டல்",
    missionText:
      "பிரம்மபதம் பகவத்கீதை ஆத்யாத்மிக க்ஷேத்ரம் பகவத்கீதையின் காலத்தால் அழியாத ஞானத்தைப் பரப்புவதற்கும், தேடுபவர்களை சுய உணர்தல் மற்றும் உள் அமைதி நோக்கிய அவர்களின் ஆன்மீக பயணத்தில் வழிநடத்துவதற்கும் அர்ப்பணிக்கப்பட்டுள்ளது.",
    learnMore: "மேலும் அறிக",

    // Daily schedule
    dailySchedule: "தினசரி அட்டவணை",
    ourDailyRoutine: "எங்கள் தினசரி வழக்கம்",
    dailyScheduleText: "கோயிலில் எங்கள் தினசரி ஆன்மீக செயல்பாடுகள் மற்றும் நிகழ்ச்சிகளில் சேருங்கள்.",
    viewFullSchedule: "முழு அட்டவணையைக் காண",

    // Offerings
    ourOfferings: "எங்கள் சேவைகள்",
    offeringsTitle: "ஆன்மீக வளர்ச்சி & கற்றல்",
    offeringsText:
      "பகவத்கீதை மற்றும் பண்டைய ஞானத்தைப் பற்றிய உங்கள் புரிதலை ஆழப்படுத்த வடிவமைக்கப்பட்ட எங்கள் விரிவான திட்டங்களைக் கண்டறியுங்கள்.",
    gitaClasses: "கீதை வகுப்புகள்",
    inDepthStudy: "புனித நூல்களின் ஆழ்ந்த ஆய்வு",
    verseByVerse: "வரி வரியாக விளக்கம்",
    exploreClasses: "வகுப்புகளை ஆராயுங்கள்",
    meditationRetreats: "தியான முகாம்கள்",
    immersiveExperiences: "ஆன்மீக அனுபவங்கள்",
    guidedByTeachers: "அனுபவம் வாய்ந்த ஆசிரியர்களால் வழிநடத்தப்படுகிறது",
    viewRetreats: "முகாம்களைக் காண",
    communityEvents: "சமூக நிகழ்வுகள்",
    connectWithSeekers: "சக தேடுபவர்களுடன் இணையுங்கள்",
    regularGatherings: "வழக்கமான கூட்டங்கள் மற்றும் கொண்டாட்டங்கள்",
    seeCalendar: "காலண்டரைப் பார்க்க",

    // Teachings section
    featuredTeachings: "சிறப்பு போதனைகள்",
    wisdomFromGita: "பகவத்கீதையிலிருந்து ஞானம்",
    teachingsText: "பகவத்கீதையின் ஆழ்ந்த ஞானத்தை விளக்கும் எங்கள் போதனைகளின் தொகுப்பை ஆராயுங்கள்.",
    karmaYoga: "கர்ம யோகா: செயல் பாதை",
    karmaYogaDesc: "பகவத்கீதை அத்தியாயம் 3",
    karmaYogaText:
      "பற்றின்றி செய்யப்படும் செயல் ஆன்மீக விடுதலைக்கு வழிவகுக்கும் என்பதை புரிந்துகொண்டு, பற்றின்றி உங்கள் கடமைகளை எவ்வாறு செய்வது என்பதைக் கற்றுக்கொள்ளுங்கள்.",
    bhaktiYoga: "பக்தி யோகா: பக்தி பாதை",
    bhaktiYogaDesc: "பகவத்கீதை அத்தியாயம் 12",
    bhaktiYogaText: "தெய்வத்துடன் இணைந்து ஆன்மீக நிறைவை அடைவதற்கான வழியாக பக்தி மற்றும் அன்பின் சக்தியைக் கண்டறியுங்கள்.",
    jnanaYoga: "ஞான யோகா: அறிவு பாதை",
    jnanaYogaDesc: "பகவத்கீதை அத்தியாயங்கள் 13-18",
    jnanaYogaText: "ஆன்மீக நுண்ணறிவு மூலம் யதார்த்தத்தின் இயல்பையும் சுயத்தையும் புரிந்துகொண்டு, அறிவு மற்றும் ஞானத்தின் பாதையை ஆராயுங்கள்.",
    dhyanaYoga: "தியான யோகா: தியான பாதை",
    dhyanaYogaDesc: "பகவத்கீதை அத்தியாயம் 6",
    dhyanaYogaText: "உள் அமைதி மற்றும் ஆன்மீக விழிப்புணர்வுக்கு வழிவகுக்கும் தியானம் மற்றும் ஒருமுகப்படுத்தல் நுட்பங்களைக் கற்றுக்கொள்ளுங்கள்.",
    readMore: "மேலும் படிக்க",
    viewAllTeachings: "அனைத்து போதனைகளையும் காண",

    // Events section
    upcomingEvents: "வரவிருக்கும் நிகழ்வுகள்",
    eventsSubtitle: "இந்த மாற்றம் தரும் கூட்டங்களில் சேர்ந்து உங்கள் ஆன்மீக பயிற்சியை ஆழப்படுத்துங்கள்.",
    gitaJayanti: "கீதா ஜெயந்தி கொண்டாட்டம்",
    gitaJayantiDesc: "பகவத்கீதையின் வருடாந்திர கொண்டாட்டம்",
    gitaJayantiDate: "டிசம்பர் 15, 2025",
    gitaJayantiTime: "காலை 9:00 - மாலை 6:00",
    gitaJayantiLocation: "முக்கிய மண்டபம், பிரம்மபதம் மையம்",
    gitaJayantiText: "பகவத்கீதையின் தெய்வீக ஞானத்தைக் கொண்டாடும் முழு நாள் பாராயணம், சொற்பொழிவுகள் மற்றும் கலாச்சார நிகழ்ச்சிகள்.",
    register: "பதிவு செய்யுங்கள்",
    meditationRetreat: "வார இறுதி தியான முகாம்",
    meditationRetreatDesc: "தீவிர தியான பயிற்சி",
    meditationRetreatDate: "நவம்பர் 10-12, 2025",
    meditationRetreatTime: "தங்குமிட திட்டம்",
    meditationRetreatLocation: "முகாம் மையம், அமைதியான பள்ளத்தாக்கு",
    meditationRetreatText: "உங்கள் பயிற்சியை ஆழப்படுத்த வழிகாட்டப்பட்ட தியானம், அமைதி மற்றும் ஆன்மீக போதனைகளின் வார இறுதியில் மூழ்குங்கள்.",
    studyCircle: "வாராந்திர கீதா ஆய்வு வட்டம்",
    studyCircleDesc: "அத்தியாயம்-அத்தியாயமாக ஆய்வு",
    studyCircleDate: "ஒவ்வொரு ஞாயிற்றுக்கிழமையும்",
    studyCircleTime: "காலை 10:00 - மதியம் 12:00",
    studyCircleLocation: "ஆய்வு மண்டபம், பிரம்மபதம் மையம்",
    studyCircleText: "விரிவான விளக்கங்களுடன் பகவத்கீதையை வரி வரியாக ஆராயும் எங்கள் தொடர்ச்சியான ஆய்வு வட்டத்தில் சேருங்கள்.",
    joinNextSession: "அடுத்த அமர்வில் சேருங்கள்",
    viewAllEvents: "அனைத்து நிகழ்வுகளையும் காண",

    // Location section
    visitUs: "எங்களை சந்திக்க வாருங்கள்",
    ourCenter: "எங்கள் ஆன்மீக மையம்",
    centerText: "ஆன்மீக வளர்ச்சி மற்றும் உள் அமைதியை எளிதாக்க வடிவமைக்கப்பட்ட எங்கள் மையத்தின் அமைதியான சூழலை அனுபவியுங்கள்.",
    contactUs: "எங்களை தொடர்பு கொள்ள",
    getDirections: "வழிகளைப் பெறுங்கள்",

    // Newsletter section
    joinCommunity: "எங்கள் ஆன்மீக சமூகத்தில் சேருங்கள்",
    newsletterText: "வகுப்புகள், நிகழ்வுகள் மற்றும் ஆன்மீக நுண்ணறிவுகள் பற்றிய புதுப்பிப்புகளைப் பெற பதிவு செய்யுங்கள்.",
    subscribe: "பதிவு செய்யுங்கள்",
    privacyNote: "நாங்கள் உங்கள் தனியுரிமையை மதிக்கிறோம். எந்த நேரத்திலும் குழுவிலிருந்து விலகலாம்.",

    // Testimonials
    testimonials: "சான்றுகள்",
    transformativeExperiences: "மாற்றம் தரும் அனுபவங்கள்",
    testimonialsText: "பிரம்மபதத்தில் போதனைகளால் வாழ்க்கை தொட்டவர்களிடமிருந்து கேளுங்கள்.",

    // Footer
    quickLinks: "விரைவு இணைப்புகள்",
    programs: "நிகழ்ச்சிகள்",
    copyright: "© 2024 பிரம்மபதம் பகவத்கீதை ஆத்யாத்மிக க்ஷேத்ரம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  },

  kn: {
    // Navigation
    home: "ಮುಖಪುಟ",
    about: "ನಮ್ಮ ಬಗ್ಗೆ",
    teachings: "ಬೋಧನೆಗಳು",
    events: "ಕಾರ್ಯಕ್ರಮಗಳು",
    schedule: "ವೇಳಾಪಟ್ಟಿ",
    contact: "ಸಂಪರ್ಕಿಸಿ",
    donate: "ದಾನ ಮಾಡಿ",

    // Hero section
    heroTitle: "ಬ್ರಹ್ಮಪದಂ ಭಗವದ್ಗೀತಾ ಆಧ್ಯಾತ್ಮಿಕ ಕ್ಷೇತ್ರಂ",
    heroSubtitle: "ಭಗವದ್ಗೀತೆಯ ಶಾಶ್ವತ ಜ್ಞಾನವನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಪರಿವರ್ತನೆ ಮತ್ತು ಸ್ವಯಂ-ಸಾಕ್ಷಾತ್ಕಾರದ ಪಯಣದಲ್ಲಿ ತೊಡಗಿಸಿಕೊಳ್ಳಿ.",
    exploreTeachings: "ಬೋಧನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    learnAboutUs: "ನಮ್ಮ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ",

    // Mission section
    ourMission: "ನಮ್ಮ ಧ್ಯೇಯ",
    missionTitle: "ಪ್ರಾಚೀನ ಜ್ಞಾನದ ಮೂಲಕ ಆಧ್ಯಾತ್ಮಿಕ ಜ್ಞಾನೋದಯ",
    missionText:
      "ಬ್ರಹ್ಮಪದಂ ಭಗವದ್ಗೀತಾ ಆಧ್ಯಾತ್ಮಿಕ ಕ್ಷೇತ್ರಂ ಭಗವದ್ಗೀತೆಯ ಶಾಶ್ವತ ಜ್ಞಾನವನ್ನು ಹರಡಲು, ಹುಡುಕುವವರಿಗೆ ಸ್ವಯಂ-ಸಾಕ್ಷಾತ್ಕಾರ ಮತ್ತು ಆಂತರಿಕ ಶಾಂತಿಯ ಕಡೆಗೆ ಅವರ ಆಧ್ಯಾತ್ಮಿಕ ಪಯಣದಲ್ಲಿ ಮಾರ್ಗದರ್ಶನ ನೀಡಲು ಸಮರ್ಪಿತವಾಗಿದೆ.",
    learnMore: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",

    // Daily schedule
    dailySchedule: "ದೈನಂದಿನ ವೇಳಾಪಟ್ಟಿ",
    ourDailyRoutine: "ನಮ್ಮ ದೈನಂದಿನ ದಿನಚರಿ",
    dailyScheduleText: "ದೇವಾಲಯದಲ್ಲಿ ನಮ್ಮ ದೈನಂದಿನ ಆಧ್ಯಾತ್ಮಿಕ ಚಟುವಟಿಕೆಗಳು ಮತ್ತು ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ.",
    viewFullSchedule: "ಪೂರ್ಣ ವೇಳಾಪಟ್ಟಿಯನ್ನು ವೀಕ್ಷಿಸಿ",

    // Offerings
    ourOfferings: "ನಮ್ಮ ಸೇವೆಗಳು",
    offeringsTitle: "ಆಧ್ಯಾತ್ಮಿಕ ಬೆಳವಣಿಗೆ & ಕಲಿಕೆ",
    offeringsText: "ಭಗವದ್ಗೀತೆ ಮತ್ತು ಪ್ರಾಚೀನ ಜ್ಞಾನದ ಬಗ್ಗೆ ನಿಮ್ಮ ತಿಳುವಳಿಕೆಯನ್ನು ಆಳವಾಗಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ನಮ್ಮ ಸಮಗ್ರ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
    gitaClasses: "ಗೀತಾ ತರಗತಿಗಳು",
    inDepthStudy: "ಪವಿತ್ರ ಗ್ರಂಥಗಳ ಆಳವಾದ ಅಧ್ಯಯನ",
    verseByVerse: "ಶ್ಲೋಕ-ದರ-ಶ್ಲೋಕ ವಿವರಣೆ",
    exploreClasses: "ತರಗತಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    meditationRetreats: "ಧ್ಯಾನ ಶಿಬಿರಗಳು",
    immersiveExperiences: "ಆಧ್ಯಾತ್ಮಿಕ ಅನುಭವಗಳು",
    guidedByTeachers: "ಅನುಭವಿ ಶಿಕ್ಷಕರಿಂದ ಮಾರ್ಗದರ್ಶನ",
    viewRetreats: "ಶಿಬಿರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    communityEvents: "ಸಮುದಾಯ ಕಾರ್ಯಕ್ರಮಗಳು",
    connectWithSeekers: "ಸಹ ಹುಡುಕುವವರೊಂದಿಗೆ ಸಂಪರ್ಕ ಹೊಂದಿ",
    regularGatherings: "ನಿಯಮಿತ ಸಭೆಗಳು ಮತ್ತು ಆಚರಣೆಗಳು",
    seeCalendar: "ಕ್ಯಾಲೆಂಡರ್ ನೋಡಿ",

    // Teachings section
    featuredTeachings: "ವಿಶೇಷ ಬೋಧನೆಗಳು",
    wisdomFromGita: "ಭಗವದ್ಗೀತೆಯಿಂದ ಜ್ಞಾನ",
    teachingsText: "ಭಗವದ್ಗೀತೆಯ ಆಳವಾದ ಜ್ಞಾನವನ್ನು ಬೆಳಗಿಸುವ ನಮ್ಮ ಬೋಧನೆಗಳ ಸಂಗ್ರಹವನ್ನು ಅನ್ವೇಷಿಸಿ.",
    karmaYoga: "ಕರ್ಮ ಯೋಗ: ಕ್ರಿಯೆಯ ಮಾರ್ಗ",
    karmaYogaDesc: "ಭಗವದ್ಗೀತೆಯ ಅಧ್ಯಾಯ 3",
    karmaYogaText:
      "ಅನಾಸಕ್ತಿಯಿಂದ ಮಾಡಿದ ಕ್ರಿಯೆಯು ಆಧ್ಯಾತ್ಮಿಕ ಮುಕ್ತಿಗೆ ಕಾರಣವಾಗುತ್ತದೆ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡು, ನಿಮ್ಮ ಕರ್ತವ್ಯಗಳನ್ನು ಅನಾಸಕ್ತಿಯಿಂದ ಹೇಗೆ ನಿರ್ವಹಿಸಬೇಕೆಂದು ಕಲಿಯಿರಿ.",
    bhaktiYoga: "ಭಕ್ತಿ ಯೋಗ: ಭಕ್ತಿಯ ಮಾರ್ಗ",
    bhaktiYogaDesc: "ಭಗವದ್ಗೀತೆಯ ಅಧ್ಯಾಯ 12",
    bhaktiYogaText: "ದೈವಿಕತೆಯೊಂದಿಗೆ ಸಂಪರ್ಕ ಹೊಂದಲು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಪೂರ್ಣತೆಯನ್ನು ಸಾಧಿಸಲು ಭಕ್ತಿ ಮತ್ತು ಪ್ರೀತಿಯ ಶಕ್ತಿಯನ್ನು ಅನ್ವೇಷಿಸಿ.",
    jnanaYoga: "ಜ್ಞಾನ ಯೋಗ: ಜ್ಞಾನದ ಮಾರ್ಗ",
    jnanaYogaDesc: "ಭಗವದ್ಗೀತೆಯ ಅಧ್ಯಾಯಗಳು 13-18",
    jnanaYogaText: "ಆಧ್ಯಾತ್ಮಿಕ ಅಂತರ್ದೃಷ್ಟಿಯ ಮೂಲಕ ವಾಸ್ತವಿಕತೆ ಮತ್ತು ಸ್ವಯಂ ಸ್ವರೂಪವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ಮೂಲಕ, ಜ್ಞಾನ ಮತ್ತು ವಿವೇಕದ ಮಾರ್ಗವನ್ನು ಅನ್ವೇಷಿಸಿ.",
    dhyanaYoga: "ಧ್ಯಾನ ಯೋಗ: ಧ್ಯಾನದ ಮಾರ್ಗ",
    dhyanaYogaDesc: "ಭಗವದ್ಗೀತೆಯ ಅಧ್ಯಾಯ 6",
    dhyanaYogaText: "ಆಂತರಿಕ ಶಾಂತಿ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಜಾಗೃತಿಗೆ ಕಾರಣವಾಗುವ ಧ್ಯಾನ ಮತ್ತು ಏಕಾಗ್ರತೆಯ ತಂತ್ರಗಳನ್ನು ಕಲಿಯಿರಿ.",
    readMore: "ಇನ್ನಷ್ಟು ಓದಿ",
    viewAllTeachings: "ಎಲ್ಲಾ ಬೋಧನೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ",

    // Events section
    upcomingEvents: "ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು",
    eventsSubtitle: "ಈ ಪರಿವರ್ತನಾತ್ಮಕ ಸಭೆಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಅಭ್ಯಾಸವನ್ನು ಆಳಗೊಳಿಸಿ.",
    gitaJayanti: "ಗೀತಾ ಜಯಂತಿ ಆಚರಣೆ",
    gitaJayantiDesc: "ಭಗವದ್ಗೀತೆಯ ವಾರ್ಷಿಕ ಆಚರಣೆ",
    gitaJayantiDate: "ಡಿಸೆಂಬರ್ 15, 2025",
    gitaJayantiTime: "ಬೆಳಗ್ಗೆ 9:00 - ಸಂಜೆ 6:00",
    gitaJayantiLocation: "ಮುಖ್ಯ ಹಾಲ್, ಬ್ರಹ್ಮಪದಂ ಕೇಂದ್ರ",
    gitaJayantiText: "ಭಗವದ್ಗೀತೆಯ ದಿವ್ಯ ಜ್ಞಾನವನ್ನು ಆಚರಿಸುವ ಪಾರಾಯಣ, ಉಪನ್ಯಾಸಗಳು ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳ ಪೂರ್ಣ ದಿನ.",
    register: "ನೋಂದಾಯಿಸಿ",
    meditationRetreat: "ವಾರಾಂತ್ಯದ ಧ್ಯಾನ ಶಿಬಿರ",
    meditationRetreatDesc: "ತೀವ್ರ ಧ್ಯಾನ ಅಭ್ಯಾಸ",
    meditationRetreatDate: "ನವೆಂಬರ್ 10-12, 2025",
    meditationRetreatTime: "ವಸತಿ ಕಾರ್ಯಕ್ರಮ",
    meditationRetreatLocation: "ಶಿಬಿರ ಕೇಂದ್ರ, ಶಾಂತಿಯುತ ಕಣಿವೆ",
    meditationRetreatText: "ನಿಮ್ಮ ಅಭ್ಯಾಸವನ್ನು ಆಳಗೊಳಿಸಲು ಮಾರ್ಗದರ್ಶಿತ ಧ್ಯಾನ, ಮೌನ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಬೋಧನೆಗಳ ವಾರಾಂತ್ಯದಲ್ಲಿ ಮುಳುಗಿರಿ.",
    studyCircle: "ಸಾಪ್ತಾಹಿಕ ಗೀತಾ ಅಧ್ಯಯನ ವೃತ್ತ",
    studyCircleDesc: "ಅಧ್ಯಾಯ-ದರ-ಅಧ್ಯಾಯ ಅಧ್ಯಯನ",
    studyCircleDate: "ಪ್ರತಿ ಭಾನುವಾರ",
    studyCircleTime: "ಬೆಳಗ್ಗೆ 10:00 - ಮಧ್ಯಾಹ್ನ 12:00",
    studyCircleLocation: "ಅಧ್ಯಯನ ಹಾಲ್, ಬ್ರಹ್ಮಪದಂ ಕೇಂದ್ರ",
    studyCircleText: "ವಿವರವಾದ ವಿವರಣೆಗಳೊಂದಿಗೆ ಭಗವದ್ಗೀತೆಯನ್ನು ಶ್ಲೋಕ-ದರ-ಶ್ಲೋಕ ಅನ್ವೇಷಿಸುವ ನಮ್ಮ ನಿರಂತರ ಅಧ್ಯಯನ ವೃತ್ತದಲ್ಲಿ ಸೇರಿಕೊಳ್ಳಿ.",
    joinNextSession: "ಮುಂದಿನ ಸೆಷನ್‌ಗೆ ಸೇರಿ",
    viewAllEvents: "ಎಲ್ಲಾ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ವೀಕ್ಷಿಸಿ",

    // Location section
    visitUs: "ನಮ್ಮನ್ನು ಭೇಟಿ ಮಾಡಿ",
    ourCenter: "ನಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಕೇಂದ್ರ",
    centerText: "ಆಧ್ಯಾತ್ಮಿಕ ಬೆಳವಣಿಗೆ ಮತ್ತು ಆಂತರಿಕ ಶಾಂತಿಯನ್ನು ಸುಲಭಗೊಳಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ನಮ್ಮ ಕೇಂದ್ರದ ಶಾಂತ ವಾತಾವರಣವನ್ನು ಅನುಭವಿಸಿ.",
    contactUs: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    getDirections: "ದಿಕ್ಕುಗಳನ್ನು ಪಡೆಯಿರಿ",

    // Newsletter section
    joinCommunity: "ನಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಸಮುದಾಯದಲ್ಲಿ ಸೇರಿ",
    newsletterText: "ತರಗತಿಗಳು, ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಅಂತರ್ದೃಷ್ಟಿಗಳ ಬಗ್ಗೆ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಲು ಚಂದಾದಾರರಾಗಿ.",
    subscribe: "ಚಂದಾದಾರರಾಗಿ",
    privacyNote: "ನಾವು ನಿಮ್ಮ ಗೌಪ್ಯತೆಯನ್ನು ಗೌರವಿಸುತ್ತೇವೆ. ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ಚಂದಾದಾರಿಕೆಯನ್ನು ರದ್ದುಗೊಳಿಸಿ.",

    // Testimonials
    testimonials: "ಪ್ರಶಂಸಾಪತ್ರಗಳು",
    transformativeExperiences: "ಪರಿವರ್ತನಾತ್ಮಕ ಅನುಭವಗಳು",
    testimonialsText: "ಬ್ರಹ್ಮಪದಂನಲ್ಲಿ ಬೋಧನೆಗಳಿಂದ ಜೀವನವನ್ನು ಸ್ಪರ್ಶಿಸಿದವರಿಂದ ಕೇಳಿ.",

    // Footer
    quickLinks: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
    programs: "ಕಾರ್ಯಕ್ರಮಗಳು",
    copyright: "© 2024 ಬ್ರಹ್ಮಪದಂ ಭಗವದ್ಗೀತಾ ಆಧ್ಯಾತ್ಮಿಕ ಕ್ಷೇತ್ರಂ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
  },
}
