// Language Toggle Functionality
// Buffet items
const lunchArabicCuisine = document.getElementById("lunch-arabic-cuisine");
const lunchArabicDesserts = document.getElementById("lunch-arabic-desserts");
const lunchInternationalDesserts = document.getElementById("lunch-international-desserts");
const lunchHotDrinks = document.getElementById("lunch-hot-drinks");
const lunchColdDrinks = document.getElementById("lunch-cold-drinks");
const dinnerArabicCuisine = document.getElementById("dinner-arabic-cuisine");
const dinnerArabicDesserts = document.getElementById("dinner-arabic-desserts");
const dinnerInternationalDesserts = document.getElementById("dinner-international-desserts");
const dinnerHotDrinks = document.getElementById("dinner-hot-drinks");
const dinnerColdDrinks = document.getElementById("dinner-cold-drinks");
// Kids activities section
const kidsTitle = document.getElementById("kidsTitle");
const kidsActivity1 = document.getElementById("kidsActivity1");
const kidsActivity2 = document.getElementById("kidsActivity2");
const kidsActivity3 = document.getElementById("kidsActivity3");
// Event details section
const eventTitle = document.getElementById("eventTitle");
const eventPrice = document.getElementById("eventPrice");
const eventDays = document.getElementById("eventDays");
const eventPeriod = document.getElementById("eventPeriod");
const eventTimesTitle = document.getElementById("eventTimesTitle");
const lunchTime = document.getElementById("lunchTime");
const dinnerTime = document.getElementById("dinnerTime");
const eventDuration = document.getElementById("eventDuration");
const eventSeats = document.getElementById("eventSeats");
// Booking form elements
const dateInfo = document.querySelector(".date-info");
const htmlElement = document.documentElement;

// Arabic content
const arabicContent = {
  headline: "تجربة شتوية دافئة في مطعم حلاوة",
  subheadline: "بوفيه غداء و بوفيه عشاء كل خميس و جمعة و سبت",
  cta: "جرب أجواء حلاوة الدافئة",
  benefitsSubtitle: "بتدور على فعالية شتوية تجمع العائلة وتقدّم تجربة طعام متكاملة في أجواء دافئة؟",
  benefitsIntro: "بتجربتنا رح تستمتعوا بـ:",
  benefit1: "مأكولات عربية",
  benefit2: "حلويات عربية",
  benefit3: "حلويات عالمية",
  benefit4: "مشروبات ساخنة",
  benefit5: "مشروبات باردة",
  benefit6: "أجواء شتوية عائلية",
  reviewsTitle: "شو قالوا ضيوفنا عن التجربة؟",
  reviewQuestion1: "ما رأيك بالأطباق الرئيسية؟",
  reviewCustomer1: "أحمد محمد",
  reviewAnswer1: "الأطباق كانت لذيذة جداً والنكهات الأصيلة للشرق الأوسط كانت واضحة في كل لقمة. خصوصاً المندي والكبسة كانوا متميزين!",
  reviewQuestion2: "كيف كانت الأجواء العائلية؟",
  reviewCustomer2: "فاطمة أحمد",
  reviewAnswer2: "الأجواء كانت دافئة ومريحة جداً، مثالية للعائلات. الأطفال استمتعوا بالألعاب والجو الشتوي الجميل، والكبار استمتعوا بالأحاديث الودية.",
  reviewQuestion3: "ما رأيك بالحلويات المقدمة؟",
  reviewCustomer3: "محمد علي",
  reviewAnswer3: "الحلويات كانت مذهلة! من الكنافة إلى البقلاوة، كل شيء كان طازجاً ولذيذاً. خصوصاً الكنافة بالقشطة كانت لا تُقاوم!",
  reviewQuestion4: "هل تُوصي بزيارة المطعم في الشتاء؟",
  reviewCustomer4: "سارة حسن",
  reviewAnswer4: "بالتأكيد! الجلسات الداخلية دافئة والديكور الشتوي جميل جداً. البوفيه الشتوي تجربة لا تُفوت، خصوصاً مع الأسعار المعقولة والخدمة الممتازة.",
  reviewQuestion5: "كيف وجدت جودة الخدمة؟",
  reviewCustomer5: "عمر خالد",
  reviewAnswer5: "الخدمة كانت ممتازة والموظفين كانوا ودودين جداً. كل ما نحتاجه كان متوفراً بسرعة والنظافة كانت في أعلى مستوياتها.",
  reviewQuestion6: "ما رأيك بالمشروبات المقدمة؟",
  reviewCustomer6: "لينا محمود",
  reviewAnswer6: "المشروبات كانت متنوعة ومناسبة للفصل الشتوي. الشاي والقهوة كانوا ساخنين ولذيذين، والعصائر الطازجة كانت منعشة جداً.",
  lunchTitle: "بوفيه الغداء – 3:00 عصرًا",
  dinnerTitle: "بوفيه العشاء – 8:00 مساءً",
  lunchArabicCuisine: "مأكولات عربية",
  lunchArabicDesserts: "حلويات عربية",
  lunchInternationalDesserts: "حلويات عالمية",
  lunchHotDrinks: "مشروبات ساخنة",
  lunchColdDrinks: "مشروبات باردة",
  dinnerArabicCuisine: "مأكولات عربية",
  dinnerArabicDesserts: "حلويات عربية",
  dinnerInternationalDesserts: "حلويات عالمية",
  dinnerHotDrinks: "مشروبات ساخنة",
  dinnerColdDrinks: "مشروبات باردة",
  kidsTitle: "🎨 اضغط لتعرف شو مجهزين لأطفالنا",
  kidsActivity1: "ركن تلوين وأعمال يدوية",
  kidsActivity2: "ألعاب تفاعلية خفيفة",
  kidsActivity3: "قصص وحكايات ممتعة",
  eventTitle: "تفاصيل الفعالية العائلية",
  eventPrice: "سعر المقعد: 20 دينار",
  eventDays: "الأيام: كل خميس، جمعة، وسبت",
  eventPeriod: "فترة الفعالية: من 20/1 ولمدة شهر",
  eventTimesTitle: "أوقات البوفيه:",
  lunchTime: "الغداء: 3:00 عصرًا",
  dinnerTime: "العشاء: 8:00 مساءً",
  eventDuration: "مدة الفعالية: 3 ساعات",
  eventSeats: " المقاعد محدودة:  200 مقعد",
  bookingTitle: "احجز مكانك في الفعالية",
  bookingBtn: "احجز الآن",
  fullNameLabel: "الاسم الكامل *",
  numPeopleLabel: "عدد الأشخاص *",
  mealTypeLabel: "نوع البوفيه *",
  mealTypeDefault: "اختر نوع البوفيه",
  mealTypeLunch: "غداء",
  mealTypeDinner: "عشاء",
  bookingDateLabel: "تاريخ الحجز *",
  dateInfo: "الفعالية متاحة في أيام الخميس والجمعة والسبت من 20 يناير إلى 20 فبراير",
  notesLabel: "ملاحظات إضافية",
  popupTitle: "شكراً لك!",
  popupMessage: "تم تأكيد الحجز بنجاح. شكرًا لاختياركم فعاليتنا.",
  policiesTitle: "السياسات والشروط",
  cancellationPolicy: "سياسة الإلغاء: يمكن إلغاء الحجز حتى 24 ساعة قبل موعد الفعالية مع استرداد كامل للمبلغ.",
  returnPolicy: "سياسة الإرجاع: لا يمكن إرجاع التذاكر بعد حضور الفعالية.",
  supportTitle: "الدعم والمساعدة",
  whatsappLink: "دعم واتساب",
  whatsappSupport: "دعم واتساب",
  shareEventTitle: "مشاركة الفعالية",
  shareEventText: "مشاركة",
  shareTitle: "مشاركة الفعالية",
  whatsappShareText: "واتساب",
  instagramShareText: "إنستغرام",
  youtubeShareText: "يوتيوب",
  copyrightText: "2026 مطعم حلاوة. جميع الحقوق محفوظة.",
  locationText: "عمان-خلدا",
};

// English content
const englishContent = {
  headline: "Warm Winter Experience at Halaweh Restaurant",
  subheadline: "Lunch Buffet & Dinner Buffet Every Thursday, Friday & Saturday",
  cta: "Experience Halaweh's Warm Atmosphere",
  benefitsSubtitle: "Looking for a winter event that brings the family together and offers a complete food experience in a warm atmosphere?",
  benefitsIntro: "With our experience, you'll enjoy:",
  benefit1: "Arabic Cuisine",
  benefit2: "Arabic Desserts",
  benefit3: "International Desserts",
  benefit4: "Hot Drinks",
  benefit5: "Cold Drinks",
  benefit6: "Family Winter Atmosphere",
  reviewsTitle: "What Did Our Guests Say About The Experience?",
  reviewQuestion1: "What did you think of the main dishes?",
  reviewCustomer1: "Ahmed Mohamed",
  reviewAnswer1: "The dishes were absolutely delicious and the authentic flavors of the Middle East were evident in every bite. Especially the Mandi and Kabsa were exceptional!",
  reviewQuestion2: "How was the family atmosphere?",
  reviewCustomer2: "Fatima Ahmed",
  reviewAnswer2: "The atmosphere was very warm and comfortable, perfect for families. The children enjoyed the games and beautiful winter atmosphere, and the adults enjoyed the friendly conversations.",
  reviewQuestion3: "What did you think of the desserts served?",
  reviewCustomer3: "Mohamed Ali",
  reviewAnswer3: "The desserts were amazing! From Knafeh to Baklava, everything was fresh and delicious. Especially the Knafeh with cream was irresistible!",
  reviewQuestion4: "Do you recommend visiting the restaurant in winter?",
  reviewCustomer4: "Sarah Hassan",
  reviewAnswer4: "Absolutely! The indoor seating is warm and the winter decor is very beautiful. The winter buffet is an experience not to be missed, especially with reasonable prices and excellent service.",
  reviewQuestion5: "How did you find the quality of service?",
  reviewCustomer5: "Omar Khalid",
  reviewAnswer5: "The service was excellent and the staff were very friendly. Everything we needed was available quickly and cleanliness was at the highest levels.",
  reviewQuestion6: "What did you think of the drinks served?",
  reviewCustomer6: "Lina Mahmoud",
  reviewAnswer6: "The drinks were diverse and suitable for the winter season. The tea and coffee were hot and delicious, and the fresh juices were very refreshing.",
  lunchTitle: "Lunch Buffet – 3:00 PM",
  dinnerTitle: "Dinner Buffet – 8:00 PM",
  lunchArabicCuisine: "Arabic Cuisine",
  lunchArabicDesserts: "Arabic Desserts",
  lunchInternationalDesserts: "International Desserts",
  lunchHotDrinks: "Hot Drinks",
  lunchColdDrinks: "Cold Drinks",
  dinnerArabicCuisine: "Arabic Cuisine",
  dinnerArabicDesserts: "Arabic Desserts",
  dinnerInternationalDesserts: "International Desserts",
  dinnerHotDrinks: "Hot Drinks",
  dinnerColdDrinks: "Cold Drinks",
  kidsTitle: "🎨 Click to Discover What We Have Prepared for Our Children",
  kidsActivity1: "Art and Crafts Corner",
  kidsActivity2: "Interactive Light Games",
  kidsActivity3: "Fun Stories and Tales",
  eventTitle: "Family Event Details",
  eventPrice: "Seat Price: 20 Dinars",
  eventDays: "Days: Every Thursday, Friday, and Saturday",
  eventPeriod: "Event Period: From 1/20 for one month",
  eventTimesTitle: "Buffet Times:",
  lunchTime: "Lunch: 3:00 PM",
  dinnerTime: "Dinner: 8:00 PM",
  eventDuration: "Event Duration: 3 hours",
  eventSeats: " Limited Seats: 200 seats",
  bookingTitle: "Book Your Place at the Event",
  bookingBtn: "Book Now",
  fullNameLabel: "Full Name *",
  numPeopleLabel: "Number of People *",
  mealTypeLabel: "Buffet Type *",
  mealTypeDefault: "Select Buffet Type",
  mealTypeLunch: "Lunch",
  mealTypeDinner: "Dinner",
  bookingDateLabel: "Booking Date *",
  dateInfo: "The event is available on Thursdays, Fridays, and Saturdays from January 20 to February 20",
  notesLabel: "Additional Notes",
  popupTitle: "Thank You!",
  popupMessage: "Booking confirmed successfully. Thank you for choosing our event.",
  policiesTitle: "Policies & Terms",
  cancellationPolicy: "Cancellation Policy: Bookings can be cancelled up to 24 hours before the event with full refund.",
  returnPolicy: "Return Policy: Tickets cannot be returned after attending the event.",
  supportTitle: "Support & Help",
  whatsappLink: "WhatsApp Support",
  whatsappSupport: "WhatsApp Support",
  shareEventTitle: "Share Event",
  shareEventText: "Share",
  shareTitle: "Share Event",
  whatsappShareText: "WhatsApp",
  instagramShareText: "Instagram",
  youtubeShareText: "YouTube",
  copyrightText: "2026 Halaweh Restaurant. All rights reserved.",
  locationText: "Amman-Khalda",
};

// Single source of truth for language state
let currentLang = localStorage.getItem("halaweh-lang") || "ar";

document.addEventListener("DOMContentLoaded", () => {
  // DOM Element References - All elements that need translation
  const elements = {
    // Language button and dropdown
    languageBtn: document.getElementById("languageBtn"),
    languageOptions: document.getElementById("languageOptions"),
    langOptionEN: document.getElementById("langOptionEN"),
    langOptionAR: document.getElementById("langOptionAR"),

    // Hero section
    headline: document.getElementById("headline"),
    subheadline: document.getElementById("subheadline"),
    cta: document.getElementById("cta"),

    // Benefits section
    benefitsSubtitle: document.getElementById("benefitsSubtitle"),
    benefitsIntro: document.getElementById("benefitsIntro"),
    benefit1: document.getElementById("benefit1"),
    benefit2: document.getElementById("benefit2"),
    benefit3: document.getElementById("benefit3"),
    benefit4: document.getElementById("benefit4"),
    benefit5: document.getElementById("benefit5"),
    benefit6: document.getElementById("benefit6"),

    // Reviews section
    reviewsTitle: document.getElementById("reviewsTitle"),
    reviewQuestion1: document.getElementById("reviewQuestion1"),
    reviewCustomer1: document.getElementById("reviewCustomer1"),
    reviewAnswer1: document.getElementById("reviewAnswer1"),
    reviewQuestion2: document.getElementById("reviewQuestion2"),
    reviewCustomer2: document.getElementById("reviewCustomer2"),
    reviewAnswer2: document.getElementById("reviewAnswer2"),
    reviewQuestion3: document.getElementById("reviewQuestion3"),
    reviewCustomer3: document.getElementById("reviewCustomer3"),
    reviewAnswer3: document.getElementById("reviewAnswer3"),
    reviewQuestion4: document.getElementById("reviewQuestion4"),
    reviewCustomer4: document.getElementById("reviewCustomer4"),
    reviewAnswer4: document.getElementById("reviewAnswer4"),
    reviewQuestion5: document.getElementById("reviewQuestion5"),
    reviewCustomer5: document.getElementById("reviewCustomer5"),
    reviewAnswer5: document.getElementById("reviewAnswer5"),
    reviewQuestion6: document.getElementById("reviewQuestion6"),
    reviewCustomer6: document.getElementById("reviewCustomer6"),
    reviewAnswer6: document.getElementById("reviewAnswer6"),

    // Buffet sections
    lunchTitle: document.querySelector(".buffet-lunch .buffet-title"),
    dinnerTitle: document.querySelector(".buffet-dinner .buffet-title"),
    lunchArabicCuisine: document.getElementById("lunch-arabic-cuisine"),
    lunchArabicDesserts: document.getElementById("lunch-arabic-desserts"),
    lunchInternationalDesserts: document.getElementById("lunch-international-desserts"),
    lunchHotDrinks: document.getElementById("lunch-hot-drinks"),
    lunchColdDrinks: document.getElementById("lunch-cold-drinks"),
    dinnerArabicCuisine: document.getElementById("dinner-arabic-cuisine"),
    dinnerArabicDesserts: document.getElementById("dinner-arabic-desserts"),
    dinnerInternationalDesserts: document.getElementById("dinner-international-desserts"),
    dinnerHotDrinks: document.getElementById("dinner-hot-drinks"),
    dinnerColdDrinks: document.getElementById("dinner-cold-drinks"),

    // Kids activities
    kidsTitle: document.getElementById("kidsTitle"),
    kidsActivity1: document.getElementById("kidsActivity1"),
    kidsActivity2: document.getElementById("kidsActivity2"),
    kidsActivity3: document.getElementById("kidsActivity3"),

    // Event details
    eventTitle: document.getElementById("eventTitle"),
    eventPrice: document.getElementById("eventPrice"),
    eventDays: document.getElementById("eventDays"),
    eventPeriod: document.getElementById("eventPeriod"),
    eventTimesTitle: document.getElementById("eventTimesTitle"),
    lunchTime: document.getElementById("lunchTime"),
    dinnerTime: document.getElementById("dinnerTime"),
    eventDuration: document.getElementById("eventDuration"),
    eventSeats: document.getElementById("eventSeats"),

    // Booking form
    bookingTitle: document.getElementById("bookingTitle"),
    bookingBtn: document.getElementById("bookingBtn"),
    fullNameLabel: document.getElementById("fullNameLabel"),
    numPeopleLabel: document.getElementById("numPeopleLabel"),
    mealTypeLabel: document.getElementById("mealTypeLabel"),
    mealTypeDefault: document.getElementById("mealTypeDefault"),
    mealTypeLunch: document.getElementById("mealTypeLunch"),
    mealTypeDinner: document.getElementById("mealTypeDinner"),
    bookingDateLabel: document.getElementById("bookingDateLabel"),
    dateInfo: document.getElementById("dateInfo"),
    notesLabel: document.getElementById("notesLabel"),

    // Popup
    popupTitle: document.getElementById("popupTitle"),
    popupMessage: document.getElementById("popupMessage"),

    // Footer
    policiesTitle: document.getElementById("policiesTitle"),
    cancellationPolicy: document.getElementById("cancellationPolicy"),
    returnPolicy: document.getElementById("returnPolicy"),
    supportTitle: document.getElementById("supportTitle"),
    whatsappLink: document.getElementById("whatsappLink"),
    whatsappSupport: document.getElementById("whatsappSupport"),
    shareEventTitle: document.getElementById("shareEventTitle"),
    shareEventText: document.getElementById("shareEventText"),
    shareTitle: document.getElementById("shareTitle"),
    whatsappShareText: document.getElementById("whatsappShareText"),
    instagramShareText: document.getElementById("instagramShareText"),
    youtubeShareText: document.getElementById("youtubeShareText"),
    copyrightText: document.getElementById("copyrightText"),
    locationText: document.getElementById("locationText")
  };

  // Single function to update all text based on current language
  function updateLanguage(lang) {
    const content = lang === "ar" ? arabicContent : englishContent;

    // Update HTML attributes
    htmlElement.setAttribute("lang", lang);
    htmlElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    // Update language button (show the language you can switch TO)
    if (elements.languageBtn) {
      elements.languageBtn.textContent = lang === "ar" ? "EN" : "AR";
    }

    // Update dropdown options visibility
    if (elements.langOptionEN) {
      elements.langOptionEN.style.display = lang === "ar" ? "block" : "none";
    }
    if (elements.langOptionAR) {
      elements.langOptionAR.style.display = lang === "en" ? "block" : "none";
    }

    // Update all text elements
    Object.keys(elements).forEach(key => {
      if (key !== "languageBtn" && key !== "languageOptions" && key !== "langOptionEN" && key !== "langOptionAR" && elements[key] && content[key]) {
        elements[key].textContent = content[key];
      }
    });
  }

  // Initialize language on page load
  updateLanguage(currentLang);

  // Language dropdown functionality
  let dropdownOpen = false;

  function toggleDropdown() {
    dropdownOpen = !dropdownOpen;
    const dropdown = elements.languageOptions;
    const btn = elements.languageBtn;

    if (dropdown && btn) {
      const dropdownEl = btn.parentElement;
      if (dropdownOpen) {
        dropdownEl.classList.add("open");
  } else {
        dropdownEl.classList.remove("open");
      }
    }
  }

  function closeDropdown() {
    dropdownOpen = false;
    const btn = elements.languageBtn;
    if (btn) {
      const dropdownEl = btn.parentElement;
      dropdownEl.classList.remove("open");
    }
  }

  // Language button click handler
  if (elements.languageBtn) {
    elements.languageBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      toggleDropdown();
    });
  }

  // Language option click handlers
  if (elements.languageOptions) {
    const options = elements.languageOptions.querySelectorAll(".language-option");
    options.forEach(option => {
      option.addEventListener("click", function() {
        const selectedLang = this.getAttribute("data-lang");
        if (selectedLang !== currentLang) {
          currentLang = selectedLang;
          localStorage.setItem("halaweh-lang", currentLang);
          updateLanguage(currentLang);
        }
        closeDropdown();
      });
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener("click", function(e) {
    const dropdown = elements.languageBtn?.parentElement;
    if (dropdown && !dropdown.contains(e.target)) {
      closeDropdown();
    }
  });

  // Booking Form Functionality
  const bookingForm = document.getElementById("bookingForm");
  const thankYouPopup = document.getElementById("thankYouPopup");
  const popupCloseBtn = document.getElementById("popupCloseBtn");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent default form submission

      // Validate form
      const isValid = validateForm();

      if (isValid) {
        console.log("Showing thank you popup");
        // Show thank you popup
        showThankYouPopup();
        // Do NOT reset form - preserve user data
      } else {
        console.log("Form validation failed");
      }
    });
  }

  // Popup functionality
  function showThankYouPopup() {
    if (thankYouPopup) {
      thankYouPopup.classList.add("show");
    }
  }

  function hideThankYouPopup() {
    if (thankYouPopup) {
      thankYouPopup.classList.remove("show");
    }
  }

  if (popupCloseBtn) {
    popupCloseBtn.addEventListener("click", hideThankYouPopup);
  }

  // Close popup when clicking outside
  if (thankYouPopup) {
    thankYouPopup.addEventListener("click", function(e) {
      if (e.target === thankYouPopup || e.target.classList.contains("popup-overlay")) {
        hideThankYouPopup();
      }
    });
  }

  // Reviews toggle functionality
  const reviewToggles = document.querySelectorAll(".review-toggle");
  reviewToggles.forEach(toggle => {
    toggle.addEventListener("click", function() {
      const reviewId = this.getAttribute("data-review");
      const answerDiv = document.getElementById("review-" + reviewId);

      if (answerDiv) {
        // Toggle active class on button
        this.classList.toggle("active");
        // Toggle show class on answer
        answerDiv.classList.toggle("show");
      }
    });
  });

  // Kids activities toggle functionality
  const kidsToggle = document.getElementById("kidsToggle");
  const kidsContent = document.getElementById("kidsContent");

  if (kidsToggle && kidsContent) {
    kidsToggle.addEventListener("click", function() {
      // Toggle active class on button
      kidsToggle.classList.toggle("active");

      // Toggle show class on content
      kidsContent.classList.toggle("show");
    });
  }

  // Hero CTA click handler - scroll to booking form
  const heroCta = document.getElementById("cta");
  if (heroCta) {
    heroCta.addEventListener("click", function(e) {
      e.preventDefault();
      const bookingSection = document.getElementById("bookingForm");
      if (bookingSection) {
        bookingSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }

// Form validation functions
function validateForm() {
  let isValid = true;

  // Validate full name
  const fullName = document.getElementById("fullName");
  if (!fullName.value.trim()) {
    showFieldError(fullName, currentLang === "ar" ? "الاسم الكامل مطلوب" : "Full name is required");
    isValid = false;
  }

  // Validate number of people
  const numPeople = document.getElementById("numPeople");
  if (!numPeople.value || numPeople.value < 1) {
    showFieldError(numPeople, currentLang === "ar" ? "عدد الأشخاص يجب أن يكون رقماً أكبر من صفر" : "Number of people must be greater than 0");
    isValid = false;
  }

  // Validate meal type
  const mealType = document.getElementById("mealType");
  if (!mealType.value) {
    showFieldError(mealType, currentLang === "ar" ? "يجب اختيار نوع البوفيه" : "Please select buffet type");
    isValid = false;
  }

  // Validate booking date
  const bookingDate = document.getElementById("bookingDate");
  if (!bookingDate.value) {
    showFieldError(bookingDate, currentLang === "ar" ? "تاريخ الحجز مطلوب" : "Booking date is required");
    isValid = false;
  } else if (!isValidDate(bookingDate.value)) {
    showFieldError(bookingDate, currentLang === "ar" ? "التاريخ يجب أن يكون خميس أو جمعة أو سبت خلال فترة الفعالية" : "Date must be Thursday, Friday, or Saturday during the event period");
    isValid = false;
  }

  return isValid;
}

function validateField(field) {
  clearFieldError(field);

  switch(field.id) {
    case "fullName":
      if (!field.value.trim()) {
        showFieldError(field, currentLang === "ar" ? "الاسم الكامل مطلوب" : "Full name is required");
      }
      break;
    case "numPeople":
      if (!field.value || field.value < 1) {
        showFieldError(field, currentLang === "ar" ? "عدد الأشخاص يجب أن يكون رقماً أكبر من صفر" : "Number of people must be greater than 0");
      }
      break;
    case "mealType":
      if (!field.value) {
        showFieldError(field, currentLang === "ar" ? "يجب اختيار نوع البوفيه" : "Please select buffet type");
      }
      break;
    case "bookingDate":
      if (!field.value) {
        showFieldError(field, currentLang === "ar" ? "تاريخ الحجز مطلوب" : "Booking date is required");
      } else if (!isValidDate(field.value)) {
        showFieldError(field, currentLang === "ar" ? "التاريخ يجب أن يكون خميس أو جمعة أو سبت خلال فترة الفعالية" : "Date must be Thursday, Friday, or Saturday during the event period");
      }
      break;
  }
}

function isValidDate(dateString) {
  const date = new Date(dateString);
  const dayOfWeek = date.getDay(); // 0 = Sunday, 4 = Thursday, 5 = Friday, 6 = Saturday

  // Check if it's Thursday (4), Friday (5), or Saturday (6)
  if (dayOfWeek !== 4 && dayOfWeek !== 5 && dayOfWeek !== 6) {
    return false;
  }

  // Check if it's within the event period (from Jan 20th for 1 month)
  const currentYear = new Date().getFullYear();
  const eventStart = new Date(currentYear, 0, 20); // January 20th
  const eventEnd = new Date(currentYear, 1, 20); // February 20th (1 month later)

  return date >= eventStart && date <= eventEnd;
}

function showFieldError(field, message) {
  const formGroup = field.closest(".form-group");
  formGroup.classList.add("error");

  let errorElement = formGroup.querySelector(".error-message");
  if (!errorElement) {
    errorElement = document.createElement("span");
    errorElement.className = "error-message";
    formGroup.appendChild(errorElement);
  }
  errorElement.textContent = message;
}

function clearFieldError(field) {
  const formGroup = field.closest(".form-group");
  formGroup.classList.remove("error");

  const errorElement = formGroup.querySelector(".error-message");
  if (errorElement) {
    errorElement.remove();
  }
}

function setupDateRestrictions() {
  const bookingDateInput = document.getElementById("bookingDate");
  const today = new Date();

  // Set minimum date to event start date (January 20th of current year)
  const currentYear = today.getFullYear();
  const eventStart = new Date(currentYear, 0, 20); // January 20th
  const eventEnd = new Date(currentYear, 1, 20); // February 20th

  // If today is before event start, set min to event start
  // If today is after event start but before event end, set min to today
  // If today is after event end, disable the input entirely
  let minDate;
  if (today < eventStart) {
    minDate = eventStart.toISOString().split('T')[0];
  } else if (today <= eventEnd) {
    minDate = today.toISOString().split('T')[0];
  } else {
    // Event has ended
    bookingDateInput.disabled = true;
    bookingDateInput.placeholder = currentLang === "ar" ? "الفعالية انتهت" : "Event has ended";
    return;
  }

  bookingDateInput.setAttribute("min", minDate);
  bookingDateInput.setAttribute("max", eventEnd.toISOString().split('T')[0]);

  // Add input event listener to restrict to valid days
  bookingDateInput.addEventListener("input", function() {
    if (this.value) {
      const selectedDate = new Date(this.value);
      const dayOfWeek = selectedDate.getDay();

      // Check if it's Thursday (4), Friday (5), or Saturday (6)
      if (dayOfWeek !== 4 && dayOfWeek !== 5 && dayOfWeek !== 6) {
        // Invalid day of week
        this.value = "";
        showFieldError(this, currentLang === "ar" ? "الفعالية متاحة فقط في أيام الخميس والجمعة والسبت" : "The event is only available on Thursdays, Fridays, and Saturdays");
        return;
      }

      // Check if it's within the event period
      if (selectedDate < eventStart || selectedDate > eventEnd) {
        this.value = "";
        showFieldError(this, currentLang === "ar" ? "التاريخ يجب أن يكون خلال فترة الفعالية (20 يناير - 20 فبراير)" : "The date must be during the event period (January 20 - February 20)");
        return;
      }

      // Clear any existing errors
      clearFieldError(this);
    }
  });

  // Add change event for additional validation
  bookingDateInput.addEventListener("change", function() {
    if (this.value && !isValidDate(this.value)) {
      this.value = "";
      showFieldError(this, currentLang === "ar" ? "يرجى اختيار تاريخ صحيح من أيام الفعالية المتاحة" : "Please select a valid date from the available event days");
    }
  });
}

// Initialize date restrictions
setupDateRestrictions();

// Share modal functionality
const shareBtn = document.getElementById("shareBtn");
const shareModal = document.getElementById("shareModal");
const shareModalClose = document.getElementById("shareModalClose");
const whatsappShare = document.getElementById("whatsappShare");
const instagramShare = document.getElementById("instagramShare");
const youtubeShare = document.getElementById("youtubeShare");

// Share button click handler
if (shareBtn && shareModal) {
  shareBtn.addEventListener("click", function(e) {
    e.preventDefault();
    shareModal.classList.add("show");
  });
}

// Close modal handlers
if (shareModalClose && shareModal) {
  shareModalClose.addEventListener("click", function() {
    shareModal.classList.remove("show");
  });
}

if (shareModal) {
  shareModal.addEventListener("click", function(e) {
    if (e.target === shareModal) {
      shareModal.classList.remove("show");
    }
  });
}

// Social media sharing handlers
const shareUrl = encodeURIComponent(window.location.href);
const shareTextAr = encodeURIComponent("تجربة شتوية دافئة في مطعم حلاوة - فعالية عائلية رائعة!");
const shareTextEn = encodeURIComponent("Warm Winter Experience at Halaweh Restaurant - Amazing Family Event!");

if (whatsappShare) {
  whatsappShare.addEventListener("click", function(e) {
    e.preventDefault();
    const text = currentLang === "ar" ? shareTextAr : shareTextEn;
    const whatsappUrl = `https://wa.me/?text=${text}%20${shareUrl}`;
    window.open(whatsappUrl, "_blank");
    shareModal.classList.remove("show");
  });
}

if (instagramShare) {
  instagramShare.addEventListener("click", function(e) {
    e.preventDefault();
    const text = currentLang === "ar" ? shareTextAr : shareTextEn;
    navigator.clipboard.writeText(`${text} ${window.location.href}`).then(() => {
      alert(currentLang === "ar" ? "تم نسخ الرابط إلى الحافظة. يمكنك مشاركته على إنستغرام." : "Link copied to clipboard. You can share it on Instagram.");
    });
    shareModal.classList.remove("show");
  });
}

if (youtubeShare) {
  youtubeShare.addEventListener("click", function(e) {
    e.preventDefault();
    const text = currentLang === "ar" ? shareTextAr : shareTextEn;
    navigator.clipboard.writeText(`${text} ${window.location.href}`).then(() => {
      alert(currentLang === "ar" ? "تم نسخ الرابط إلى الحافظة. يمكنك مشاركته على يوتيوب." : "Link copied to clipboard. You can share it on YouTube.");
    });
    shareModal.classList.remove("show");
  });
}

// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

const themes = ["sun", "moon", "auto"];
const themeIcons = ["☀️", "🌙", "🌓"];

// Get saved theme or default to sun
let currentThemeIndex = 0;
const savedTheme = localStorage.getItem("halaweh-theme");
if (savedTheme) {
  const savedIndex = themes.indexOf(savedTheme);
  if (savedIndex !== -1) {
    currentThemeIndex = savedIndex;
    body.setAttribute("data-theme", themes[currentThemeIndex]);
    if (themeIcon) {
      themeIcon.textContent = themeIcons[currentThemeIndex];
    }
  }
}

if (themeToggle && themeIcon) {
  themeToggle.addEventListener("click", () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const newTheme = themes[currentThemeIndex];
    body.setAttribute("data-theme", newTheme);
    themeIcon.textContent = themeIcons[currentThemeIndex];
    localStorage.setItem("halaweh-theme", newTheme);
  });
}
});

