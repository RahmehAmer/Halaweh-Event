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
    // Language button
    languageBtn: document.getElementById("languageBtn"),

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

    // Update all text elements
    Object.keys(elements).forEach(key => {
      if (key !== "languageBtn" && elements[key] && content[key]) {
        elements[key].textContent = content[key];
      }
    });
  }

  // Initialize language on page load
  updateLanguage(currentLang);

  // Language button toggle functionality
  if (elements.languageBtn) {
    elements.languageBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      // Toggle between languages
      currentLang = currentLang === "ar" ? "en" : "ar";
      localStorage.setItem("halaweh-lang", currentLang);
      updateLanguage(currentLang);
    });
  }

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

  // Thank You Popup with Snowflakes
function showThankYouPopup() {
  const thankYouPopup = document.getElementById("thankYouPopup");
  if (thankYouPopup) {
    thankYouPopup.classList.add("show");
    
    // Create falling snowflakes
    createSnowflakes();
  }
}

function createSnowflakes() {
  const popupContent = document.querySelector(".popup-content");
  if (!popupContent) return;
  
  // Remove existing snowflakes
  const existingSnowflakes = popupContent.querySelectorAll(".snowflake");
  existingSnowflakes.forEach(flake => flake.remove());
  
  // Create new snowflakes
  for (let i = 0; i < 15; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.innerHTML = "❄";
    snowflake.style.cssText = `
      position: absolute;
      top: -20px;
      left: ${Math.random() * 100}%;
      font-size: ${Math.random() * 0.8 + 0.8}rem;
      color: rgba(255, 255, 255, 0.8);
      animation: snowfall ${Math.random() * 3 + 4}s linear infinite;
      animation-delay: ${Math.random() * 2}s;
      z-index: 1000;
      pointer-events: none;
    `;
    
    popupContent.appendChild(snowflake);
    
    // Remove snowflake after animation
    setTimeout(() => {
      if (snowflake.parentNode) {
        snowflake.remove();
      }
    }, 7000);
  }
}

// Add snowfall animation to CSS
const snowfallStyle = document.createElement("style");
snowfallStyle.textContent = `
  @keyframes snowfall {
    0% {
      transform: translateY(-20px) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(400px) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(snowfallStyle);

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

  // Reviews toggle functionality - FIXED to only open clicked review
  const reviewToggles = document.querySelectorAll(".review-toggle");
  reviewToggles.forEach(toggle => {
    toggle.addEventListener("click", function() {
      const reviewId = this.getAttribute("data-review");
      const answerDiv = document.getElementById("review-" + reviewId);
      
      if (answerDiv) {
        // Close all other reviews first
        reviewToggles.forEach(otherToggle => {
          if (otherToggle !== this) {
            otherToggle.classList.remove("active");
            const otherId = otherToggle.getAttribute("data-review");
            const otherAnswer = document.getElementById("review-" + otherId);
            if (otherAnswer) {
              otherAnswer.classList.remove("show");
            }
          }
        });
        
        // Toggle current review
        this.classList.toggle("active");
        answerDiv.classList.toggle("show");
      }
    });
  });

  // Booking Popup functionality
  const ctaButton = document.getElementById("cta");
  const bookingPopup = document.getElementById("bookingPopup");
  const bookingPopupOverlay = document.getElementById("bookingPopupOverlay");
  const bookingPopupClose = document.getElementById("bookingPopupClose");
  const bookingFormPopup = document.getElementById("bookingFormPopup");

  // Open popup when CTA is clicked
  if (ctaButton) {
    ctaButton.addEventListener("click", function(e) {
      e.preventDefault();
      bookingPopup.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  }

  // Close popup when close button is clicked
  if (bookingPopupClose) {
    bookingPopupClose.addEventListener("click", function() {
      bookingPopup.classList.remove("show");
      document.body.style.overflow = "auto";
    });
  }

  // Close popup when overlay is clicked
  if (bookingPopupOverlay) {
    bookingPopupOverlay.addEventListener("click", function() {
      bookingPopup.classList.remove("show");
      document.body.style.overflow = "auto";
    });
  }

  // Handle popup form submission
  if (bookingFormPopup) {
    bookingFormPopup.addEventListener("submit", function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(bookingFormPopup);
      const name = formData.get("popupName");
      const phone = formData.get("popupPhone");
      const email = formData.get("popupEmail");
      const guests = formData.get("popupGuests");
      const date = formData.get("popupBookingDate");
      const message = formData.get("popupMessage");
      
      // Show thank you popup with snow
      showThankYouPopup();
      
      // Close booking popup
      bookingPopup.classList.remove("show");
      document.body.style.overflow = "auto";
      
      // Reset form
      bookingFormPopup.reset();
    });
  }

  // Initialize Flatpickr for popup calendar
  const popupBookingDateInput = document.getElementById("popupBookingDate");
  if (popupBookingDateInput) {
    flatpickr(popupBookingDateInput, {
      locale: currentLang === "ar" ? "ar" : "default",
      minDate: new Date(2026, 0, 20), // January 20, 2026
      maxDate: new Date(2026, 1, 20), // February 20, 2026
      disable: [
        function(date) {
          const dayOfWeek = date.getDay();
          return dayOfWeek !== 4 && dayOfWeek !== 5 && dayOfWeek !== 6; // Only Thu, Fri, Sat
        }
      ],
      dateFormat: currentLang === "ar" ? "Y-m-d" : "Y-m-d",
      animate: true,
      position: "auto center",
      theme: "light",
      inline: false,
      static: false
    });
  }

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

  // Custom Calendar Functionality
  function setupDateRestrictions() {
    const bookingDateInput = document.getElementById("bookingDate");
    const calendarToggle = document.getElementById("calendarToggle");
    const customCalendar = document.getElementById("customCalendar");
    const dateInfoElement = document.getElementById("dateInfo");
    
    console.log("Setting up calendar restrictions..."); // Debug log
    
    // Event date parameters
    const eventYear = new Date().getFullYear();
    const eventStart = new Date(eventYear, 0, 20); // January 20th
    const eventEnd = new Date(eventYear, 1, 20); // February 20th
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if event has ended
    if (today > eventEnd) {
      bookingDateInput.disabled = true;
      calendarToggle.disabled = true;
      bookingDateInput.placeholder = currentLang === "ar" ? "الفعالية انتهت" : "Event has ended";
      return;
    }

    // Calendar state
    let currentMonth = new Date().getMonth();
    let calendarYear = new Date().getFullYear();
    let selectedDate = null;

    // Function to check if a date is valid (Thursday, Friday, or Saturday within event period)
    function isValidEventDate(date) {
      const dayOfWeek = date.getDay(); // 0 = Sunday, 4 = Thursday, 5 = Friday, 6 = Saturday
      const isValidDay = dayOfWeek === 4 || dayOfWeek === 5 || dayOfWeek === 6;
      const isWithinPeriod = date >= eventStart && date <= eventEnd;
      return isValidDay && isWithinPeriod;
    }

    // Function to get next valid event date
    function getNextValidEventDate(fromDate = today) {
      let currentDate = new Date(fromDate);
      currentDate.setHours(0, 0, 0, 0);
      
      // Start from event start if before it
      if (currentDate < eventStart) {
        currentDate = new Date(eventStart);
      }
      
      // Find the next Thursday, Friday, or Saturday
      while (currentDate <= eventEnd) {
        const dayOfWeek = currentDate.getDay();
        if (dayOfWeek === 4 || dayOfWeek === 5 || dayOfWeek === 6) {
          return currentDate;
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      
      return null; // No valid dates found
    }

    // Function to render calendar
    function renderCalendar() {
      console.log("Rendering calendar for:", calendarYear, currentMonth); // Debug log
      const firstDay = new Date(calendarYear, currentMonth, 1);
      const lastDay = new Date(calendarYear, currentMonth + 1, 0);
      const prevLastDay = new Date(calendarYear, currentMonth, 0);
      
      const firstDayIndex = firstDay.getDay();
      const lastDayIndex = lastDay.getDay();
      const nextDays = 7 - lastDayIndex - 1;

      // Update calendar title
      const monthNames = currentLang === "ar" 
        ? ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
        : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      
      const weekdayNames = currentLang === "ar"
        ? ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"]
        : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      let calendarHTML = `
        <div class="calendar-header">
          <button class="calendar-nav" id="prevMonth">‹</button>
          <div class="calendar-title">${monthNames[currentMonth]} ${calendarYear}</div>
          <button class="calendar-nav" id="nextMonth">›</button>
        </div>
        <div class="calendar-grid">
      `;

      // Add weekday headers
      weekdayNames.forEach(day => {
        calendarHTML += `<div class="calendar-weekday">${day}</div>`;
      });

      // Add previous month's trailing days
      for (let x = firstDayIndex; x > 0; x--) {
        calendarHTML += `<div class="calendar-day other-month">${prevLastDay.getDate() - x + 1}</div>`;
      }

      // Add current month's days
      for (let i = 1; i <= lastDay.getDate(); i++) {
        const currentDateObj = new Date(calendarYear, currentMonth, i);
        const isValid = isValidEventDate(currentDateObj);
        const isPast = currentDateObj < today;
        const isSelected = selectedDate && 
          selectedDate.getDate() === i && 
          selectedDate.getMonth() === currentMonth && 
          selectedDate.getFullYear() === calendarYear;

        let classes = "calendar-day";
        if (isValid && !isPast) {
          classes += " valid";
        } else if (isPast || currentDateObj > eventEnd || currentDateObj < eventStart) {
          classes += " disabled";
        }
        if (isSelected) {
          classes += " selected";
        }

        calendarHTML += `<div class="${classes}" data-date="${calendarYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}">${i}</div>`;
      }

      // Add next month's leading days
      for (let j = 1; j <= nextDays; j++) {
        calendarHTML += `<div class="calendar-day other-month">${j}</div>`;
      }

      calendarHTML += `</div>`;
      customCalendar.innerHTML = calendarHTML;

      // Add event listeners to calendar days
      document.querySelectorAll(".calendar-day.valid").forEach(day => {
        day.addEventListener("click", function() {
          const dateStr = this.getAttribute("data-date");
          selectedDate = new Date(dateStr);
          bookingDateInput.value = selectedDate.toLocaleDateString(currentLang === "ar" ? "ar-JO" : "en-US");
          
          // Update selected state
          document.querySelectorAll(".calendar-day").forEach(d => d.classList.remove("selected"));
          this.classList.add("selected");
          
          // Close calendar
          customCalendar.classList.remove("show");
          
          // Clear any validation errors
          clearFieldError(bookingDateInput);
          bookingDateInput.classList.add('date-valid');
          bookingDateInput.classList.remove('date-invalid');
        });
      });

      // Add navigation event listeners
      document.getElementById("prevMonth").addEventListener("click", () => {
        currentMonth--;
        if (currentMonth < 0) {
          currentMonth = 11;
          calendarYear--;
        }
        renderCalendar();
      });

      document.getElementById("nextMonth").addEventListener("click", () => {
        currentMonth++;
        if (currentMonth > 11) {
          currentMonth = 0;
          calendarYear++;
        }
        renderCalendar();
      });
    }

    // Toggle calendar visibility
    if (calendarToggle) {
      calendarToggle.addEventListener("click", function(e) {
        e.preventDefault();
        console.log("Calendar toggle clicked"); // Debug log
        customCalendar.classList.toggle("show");
        if (customCalendar.classList.contains("show")) {
          renderCalendar();
        }
      });
    } else {
      console.error("Calendar toggle button not found"); // Debug log
    }

    // Close calendar when clicking outside
    document.addEventListener("click", function(e) {
      if (!e.target.closest(".custom-date-picker")) {
        customCalendar.classList.remove("show");
      }
    });

    // Update date info text
    const nextValidDate = getNextValidEventDate();
    const nextValidDateStr = nextValidDate ? 
      nextValidDate.toLocaleDateString(currentLang === "ar" ? "ar-JO" : "en-US", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : '';
    
    // Initial info text update
    updateDateInfo();
    
    // Add custom styles for Flatpickr to match our theme
    const style = document.createElement('style');
    style.textContent = `
      .flatpickr-calendar {
        background: white;
        border: 2px solid var(--primary-cta);
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        font-family: "Tajawal", sans-serif;
      }
      
      .flatpickr-day.selected {
        background: var(--primary-cta) !important;
        color: white !important;
        border-color: var(--primary-cta) !important;
      }
      
      .flatpickr-day.startRange,
      .flatpickr-day.endRange {
        background: var(--primary-cta) !important;
        color: white !important;
      }
      
      .flatpickr-day.inRange {
        background: rgba(196, 90, 46, 0.1) !important;
        color: var(--primary-cta) !important;
        border-color: var(--primary-cta) !important;
      }
      
      .flatpickr-day.disabled {
        color: #ccc !important;
        background: rgba(0, 0, 0, 0.05) !important;
        cursor: not-allowed !important;
      }
      
      .flatpickr-day:hover:not(.disabled) {
        background: var(--primary-cta) !important;
        color: white !important;
      }
      
      .flatpickr-months,
      .flatpickr-weekdays {
        background: var(--primary-cta);
        color: white;
      }
      
      .flatpickr-weekday {
        color: white;
        font-weight: 600;
      }
      
      .flatpickr-month {
        color: white;
        font-weight: 700;
      }
      
      [data-theme="moon"] .flatpickr-calendar {
        background: #2a2a2a;
        border-color: var(--primary-cta);
      }
      
      [data-theme="auto"] .flatpickr-calendar {
        background: #f5f5f5;
        border-color: var(--primary-cta);
      }
    `;
    document.head.appendChild(style);
    
    console.log("Flatpickr calendar initialized successfully");
  }

  // Flatpickr Calendar Initialization - Fixed version
  function initializeFlatpickrCalendar() {
    const bookingDateInput = document.getElementById("bookingDate");
    const calendarToggle = document.getElementById("calendarToggle");
    const customCalendar = document.getElementById("customCalendar");
    const dateInfoElement = document.getElementById("dateInfo");
    
    if (!bookingDateInput || !calendarToggle || !dateInfoElement) {
      console.error("Calendar elements not found");
      return;
    }
    
    console.log("Calendar elements found, setting up...");
    
    // Event date parameters
    const eventYear = 2026;
    const eventStart = new Date(eventYear, 0, 20); // January 20, 2026
    const eventEnd = new Date(eventYear, 1, 20); // February 20, 2026
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Function to check if date is valid (Thursday, Friday, Saturday within event period)
    function isValidEventDate(date) {
      const dayOfWeek = date.getDay();
      const isValidDay = dayOfWeek === 4 || dayOfWeek === 5 || dayOfWeek === 6; // Thu, Fri, Sat
      const isWithinPeriod = date >= eventStart && date <= eventEnd;
      const isNotPast = date >= today;
      return isValidDay && isWithinPeriod && isNotPast;
    }
    
    // Get next valid date for info text
    function getNextValidDate() {
      let currentDate = new Date(today);
      if (currentDate < eventStart) {
        currentDate = new Date(eventStart);
      }
      
      while (currentDate <= eventEnd) {
        if (isValidEventDate(currentDate)) {
          return currentDate;
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      return null;
    }
    
    // Update date info text
    function updateDateInfo() {
      const nextValidDate = getNextValidDate();
      const nextValidDateStr = nextValidDate 
        ? nextValidDate.toLocaleDateString(currentLang === "ar" ? "ar-JO" : "en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          })
        : "";
      
      const infoText = currentLang === "ar"
        ? `الفعالية متاحة في أيام الخميس والجمعة والسبت من 20 يناير إلى 20 فبراير${nextValidDateStr ? `<br>التاريخ المتاح القادم: <strong>${nextValidDateStr}</strong>` : ""}`
        : `The event is available on Thursdays, Fridays, and Saturdays from January 20 to February 20${nextValidDateStr ? `<br>Next available date: <strong>${nextValidDateStr}</strong>` : ""}`;
      
      if (dateInfoElement) {
        dateInfoElement.innerHTML = infoText;
      }
    }
    
    // Initialize Flatpickr
    try {
      const fp = flatpickr(bookingDateInput, {
        locale: currentLang === "ar" ? "ar" : "default",
        minDate: eventStart > today ? eventStart : today,
        maxDate: eventEnd,
        disable: [
          function(date) {
            return !isValidEventDate(date);
          }
        ],
        dateFormat: currentLang === "ar" ? "Y-m-d" : "Y-m-d",
        animate: true,
        position: "auto center",
        theme: "light",
        inline: false,
        static: false,
        onChange: function(selectedDates, dateStr, instance) {
          console.log("Date selected:", selectedDates[0]);
          updateDateInfo();
        },
        onReady: function(selectedDates, dateStr, instance) {
          console.log("Flatpickr calendar ready");
          updateDateInfo();
        }
      });
      
      // Add custom styles for Flatpickr to match our theme
      const style = document.createElement('style');
      style.textContent = `
        .flatpickr-calendar {
          background: white;
          border: 2px solid var(--primary-cta);
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          font-family: "Tajawal", sans-serif;
          width: 100%;
          max-width: 400px;
        }
        
        .flatpickr-day.selected {
          background: var(--primary-cta) !important;
          color: white !important;
          border-color: var(--primary-cta) !important;
        }
        
        .flatpickr-day.startRange,
        .flatpickr-day.endRange {
          background: var(--primary-cta) !important;
          color: white !important;
        }
        
        .flatpickr-day.inRange {
          background: rgba(196, 90, 46, 0.1) !important;
          color: var(--primary-cta) !important;
          border-color: var(--primary-cta) !important;
        }
        
        .flatpickr-day.disabled {
          color: #ccc !important;
          background: rgba(0, 0, 0, 0.05) !important;
          cursor: not-allowed !important;
        }
        
        .flatpickr-day:hover:not(.disabled) {
          background: var(--primary-cta) !important;
          color: white !important;
        }
        
        .flatpickr-months,
        .flatpickr-weekdays {
          background: var(--primary-cta);
          color: white;
        }
        
        .flatpickr-weekday {
          color: white;
          font-weight: 600;
        }
        
        .flatpickr-month {
          color: white;
          font-weight: 700;
        }
        
        [data-theme="moon"] .flatpickr-calendar {
          background: #2a2a2a;
          border-color: var(--primary-cta);
        }
        
        [data-theme="auto"] .flatpickr-calendar {
          background: #f5f5f5;
          border-color: var(--primary-cta);
        }
      `;
      document.head.appendChild(style);
      
      console.log("Flatpickr calendar initialized successfully");
      
    } catch (error) {
      console.error("Error initializing Flatpickr:", error);
    }
  }

  // Mobile Responsive Navigation
  function setupMobileNavigation() {
    const header = document.querySelector('.site-header');
    const headerInner = document.querySelector('.header-inner');
    const navItems = document.querySelector('.header-actions');
    
    if (window.innerWidth <= 768) {
      // Convert to sidebar navigation for mobile
      header.style.position = 'relative';
      headerInner.style.flexDirection = 'column';
      headerInner.style.alignItems = 'stretch';
      navItems.style.position = 'absolute';
      navItems.style.top = '100%';
      navItems.style.right = '1rem';
      navItems.style.flexDirection = 'column';
      navItems.style.gap = '1rem';
      navItems.style.background = 'var(--bg-color)';
      navItems.style.padding = '1rem';
      navItems.style.borderRadius = '0 0 12px 12px 0';
      navItems.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    } else {
      // Desktop navigation
      header.style.position = 'sticky';
      headerInner.style.flexDirection = 'row';
      headerInner.style.alignItems = 'center';
      navItems.style.position = 'static';
      navItems.style.top = 'auto';
      navItems.style.right = 'auto';
      navItems.style.flexDirection = 'row';
      navItems.style.gap = '1rem';
      navItems.style.background = 'transparent';
      navItems.style.padding = '0';
      navItems.style.borderRadius = '0';
      navItems.style.boxShadow = 'none';
    }
  }

  // Initialize everything after DOM is ready
  initializeFlatpickrCalendar();
  setupMobileNavigation();

  // Handle window resize
  window.addEventListener('resize', setupMobileNavigation);

// Theme Toggle Functionality
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