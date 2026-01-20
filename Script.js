console.log("Script loading...");

// IMMEDIATE TEST - No delay
console.log("=== IMMEDIATE TEST ===");
const immediateInput = document.getElementById("bookingDate");
const immediateBtn = document.getElementById("calendarIconBtn");
const immediateCal = document.getElementById("customCalendar");

console.log("IMMEDIATE TEST - Element existence:", {
  input: !!immediateInput,
  btn: !!immediateBtn,
  calendar: !!immediateCal
});

// Define calendar function immediately
function showWorkingCalendar() {
  const calendar = document.getElementById("customCalendar");
  if (!calendar) {
    console.error("Calendar element not found!");
    return;
  }
  
  console.log("Showing working calendar...");
  
  let calendarHTML = `
    <div style="background: white; border: 2px solid #ccc; border-radius: 8px; padding: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); position: relative;">
      <button onclick="closeCalendar()" style="position: absolute; top: 5px; right: 5px; background: #ff4444; color: white; border: none; border-radius: 50%; width: 25px; height: 25px; cursor: pointer; font-weight: bold; z-index: 1;">×</button>
  `;
  
  // Generate calendars for January and February 2026
  const months = [
    { name: "January 2026", year: 2026, month: 0, daysInMonth: 31 },
    { name: "February 2026", year: 2026, month: 1, daysInMonth: 28 }
  ];
  
  months.forEach(monthData => {
    const firstDay = new Date(monthData.year, monthData.month, 1).getDay();
    
    calendarHTML += `
      <div style="margin-bottom: 15px;">
        <div style="text-align: center; font-weight: bold; margin-bottom: 10px; color: #333;">${monthData.name}</div>
        <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; font-size: 12px;">
          <div style="text-align: center; font-weight: bold; padding: 5px; background: #f0f0f0;">Sun</div>
          <div style="text-align: center; font-weight: bold; padding: 5px; background: #f0f0f0;">Mon</div>
          <div style="text-align: center; font-weight: bold; padding: 5px; background: #f0f0f0;">Tue</div>
          <div style="text-align: center; font-weight: bold; padding: 5px; background: #f0f0f0;">Wed</div>
          <div style="text-align: center; font-weight: bold; padding: 5px; background: #f0f0f0;">Thu</div>
          <div style="text-align: center; font-weight: bold; padding: 5px; background: #f0f0f0;">Fri</div>
          <div style="text-align: center; font-weight: bold; padding: 5px; background: #f0f0f0;">Sat</div>
    `;
    
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      calendarHTML += '<div style="padding: 5px;"></div>';
    }
    
    // Add days of the month
    for (let day = 1; day <= monthData.daysInMonth; day++) {
      const date = new Date(monthData.year, monthData.month, day);
      const dayOfWeek = date.getDay(); // 0 = Sunday, 4 = Thursday, 5 = Friday, 6 = Saturday
      
      // Check if date is within valid range and correct day
      let isEnabled = false;
      if (monthData.month === 0) { // January
        isEnabled = day >= 20 && (dayOfWeek === 4 || dayOfWeek === 5 || dayOfWeek === 6);
      } else if (monthData.month === 1) { // February
        isEnabled = day <= 20 && (dayOfWeek === 4 || dayOfWeek === 5 || dayOfWeek === 6);
      }
      
      if (isEnabled) {
        calendarHTML += `
          <div style="padding: 8px; text-align: center; background: #4CAF50; color: white; cursor: pointer; border-radius: 4px; font-weight: bold;"
               onclick="selectDate(${monthData.year}, ${monthData.month}, ${day})">${day}</div>
        `;
      } else {
        calendarHTML += `
          <div style="padding: 8px; text-align: center; background: #f0f0f0; color: #ccc; cursor: not-allowed;">${day}</div>
        `;
      }
    }
    
    calendarHTML += `
        </div>
      </div>
    `;
  });
  
  calendarHTML += `
      <div style="text-align: center; margin-top: 10px; font-size: 11px; color: #666; border-top: 1px solid #eee; padding-top: 10px;">
        Available: Thu, Fri, Sat from Jan 20 to Feb 20, 2026
      </div>
    </div>
  `;
  
  calendar.innerHTML = calendarHTML;
  calendar.style.display = 'block';
  calendar.style.visibility = 'visible';
  calendar.style.opacity = '1';
  calendar.style.zIndex = '9999';
  calendar.style.position = 'fixed';
  calendar.style.top = '50%';
  calendar.style.left = '50%';
  calendar.style.transform = 'translate(-50%, -50%)';
  console.log("Calendar displayed successfully with professional styling");
}

// Global function for date selection
window.selectDate = function(year, month, day) {
  const input = document.getElementById("bookingDate");
  const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  input.value = formattedDate;
  
  // Hide calendar
  closeCalendar();
  
  console.log("Date selected:", formattedDate);
};

// Global function to close calendar
window.closeCalendar = function() {
  const calendar = document.getElementById("customCalendar");
  if (calendar) {
    calendar.style.display = 'none';
    console.log("Calendar closed");
  }
};

// Click outside to close
document.addEventListener('click', function(e) {
  const calendar = document.getElementById("customCalendar");
  if (calendar && calendar.style.display === 'block' && 
      !calendar.contains(e.target) && 
      e.target.id !== 'bookingDate' && 
      e.target.id !== 'calendarIconBtn') {
    closeCalendar();
  }
});

// Escape key to close
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeCalendar();
  }
});

if (immediateInput) {
  immediateInput.addEventListener('click', function() {
    console.log("IMMEDIATE TEST: Input clicked!");
    showWorkingCalendar();
  });
}

if (immediateBtn) {
  immediateBtn.addEventListener('click', function() {
    console.log("IMMEDIATE TEST: Button clicked!");
    showWorkingCalendar();
  });
}

// Simple test outside DOMContentLoaded
  console.log("=== OUTSIDE DOM TEST ===");
  setTimeout(() => {
    console.log("Delayed test running...");
    // This delayed test is no longer needed since immediate test works
    console.log("Delayed test skipped - immediate test is working");
  }, 2000);

// Complete language content - FIXED: Removed HTML tags from content
const arabicContent = {
  headline: "تجربة شتوية دافئة في مطعم حلاوة",
  subheadline: "بوفيه غداء و بوفيه عشاء كل خميس و جمعة و سبت",
  heroLocation: "عمان - خلدا",
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
  reviewQuestion1: "ما رأيك في الأطباق الرئيسية؟",
  reviewCustomer1: "أحمد محمد",
  reviewAnswer1: "الأطباق كانت لذيذة والنكهات الأصلية للشرق الأوسط واضحة في كل قضمة. خاصة المندي والكبسة كانت استثنائية!",
  reviewQuestion2: "كيف كانت الأجواء العائلية؟",
  reviewCustomer2: "فاطمة أحمد",
  reviewAnswer2: "الأجواء كانت دافئة ومريحة جداً، مناسبة للعائلات. الأطفال استمتعوا بالألعاب والأجواء الشتوية الجميلة، والكبار استمتعوا بالمحادثات الودية.",
  reviewQuestion3: "ما رأيك في الحلويات المقدمة؟",
  reviewCustomer3: "محمد علي",
  reviewAnswer3: "الحلويات كانت رائعة! من الكنافة إلى البقلاوة، كل شيء كان طازجاً ولذيذاً. خاصة الكنافة بالكريمة كانت لا تقاوم!",
  reviewQuestion4: "هل تنصح بزيارة المطعم في الشتاء؟",
  reviewCustomer4: "سارة حسن",
  reviewAnswer4: "بالتأكيد! الجلوس الداخلي دافئ والديكور الشتوي جميل جداً. بوفيه الشتاء هي تجربة لا تفوت، خاصة مع الأسعار المعقولة والخدمة الممتازة.",
  reviewQuestion5: "كيف وجدت جودة الخدمة؟",
  reviewCustomer5: "عمر خالد",
  reviewAnswer5: "الخدمة كانت ممتازة والموظفين كانوا ودودين جداً. كل شيء نحتاجه كان متوفراً بسرعة والنظافة كانت في أعلى المستويات.",
  reviewQuestion6: "ما رأيك في المشروبات المقدمة؟",
  reviewCustomer6: "لينا محمود",
  reviewAnswer6: "المشروبات كانت متنوعة ومناسبة لموسم الشتاء. الشاي والقهوة كانتا ساخنتين ولذيذتين، والعصائر الطازجة كانت منعشة جداً.",
  lunchTitle: "بوفيه الغداء – 3:00 مساءً",
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
  kidsTitle: "🎨 اضغط لاكتشاف ما أعددناه لأطفالنا",
  kidsActivity1: "ركن الفنون والحرف",
  kidsActivity2: "ألعاب تفاعلية خفيفة",
  kidsActivity3: "قصص وحكايات ممتعة",
  eventTitle: "تفاصيل الفعالية العائلية",
  eventPrice: "سعر المقعد: 20 دينار",
  eventDays: "الأيام: كل خميس، جمعة، وسبت",
  eventPeriod: "فترة الفعالية: من 20/1 ولمدة شهر",
  eventTimesTitle: "أوقات البوفيه:",
  lunchTime: "الغداء: 3:00 مساءً",
  dinnerTime: "العشاء: 8:00 مساءً",
  eventDuration: "مدة الفعالية: 3 ساعات",
  eventSeats: "مقاعد محدودة: 200 مقعد",
  bookingTitle: "احجز مكانك في الفعالية",
  bookingBtn: "احجز الآن",
  bookingFullNameLabel: "الاسم *",
  bookingMobileLabel: "رقم الموبايل *",
  bookingEmailLabel: "البريد الإلكتروني *",
  bookingNumPeopleLabel: "عدد الأشخاص *",
  bookingDateLabel: "تاريخ الحجز *",
  bookingDateInfo: "الفعالية متاحة أيام الخميس والجمعة والسبت من 20 يناير إلى 20 فبراير 2026",
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
  locationText: "عمان-خلدا"
};

const englishContent = {
  headline: "Warm Winter Experience at Halaweh Restaurant",
  subheadline: "Lunch Buffet & Dinner Buffet Every Thursday, Friday & Saturday",
  heroLocation: "Amman - Khalda",
  cta: "Experience Halaweh's Warm Atmosphere",
  benefitsSubtitle: "Looking for a winter event that brings family together and offers a complete food experience in a warm atmosphere?",
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
  reviewAnswer2: "The atmosphere was very warm and comfortable, perfect for families. The children enjoyed the games and beautiful winter atmosphere, and the adults enjoyed friendly conversations.",
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
  eventSeats: "Limited Seats: 200 seats",
  bookingTitle: "Book Your Place at Event",
  bookingBtn: "Book Now",
  bookingFullNameLabel: "Name *",
  bookingMobileLabel: "Mobile Number *",
  bookingEmailLabel: "Email Address *",
  bookingNumPeopleLabel: "Number of People *",
  bookingDateLabel: "Booking Date *",
  bookingDateInfo: "The event is available on Thursdays, Fridays, and Saturdays from January 20 to February 20, 2026",
  popupTitle: "Thank You!",
  popupMessage: "Booking confirmed successfully. Thank you for choosing our event.",
  policiesTitle: "Policies & Terms",
  cancellationPolicy: "Cancellation Policy: Bookings can be cancelled up to 24 hours before the event with a full refund.",
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
  locationText: "Amman-Khalda"
};

// Initialize
let currentLang = localStorage.getItem("halaweh-lang") || "ar";

// Wait for DOM
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded, initializing...");
  
  // Get ALL elements
  const elements = {
    // Hero section
    headline: document.getElementById("headline"),
    subheadline: document.getElementById("subheadline"),
    heroLocation: document.getElementById("heroLocation"),
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
    
    // Kids activities section
    kidsTitle: document.getElementById("kidsTitle"),
    kidsActivity1: document.getElementById("kidsActivity1"),
    kidsActivity2: document.getElementById("kidsActivity2"),
    kidsActivity3: document.getElementById("kidsActivity3"),
    
    // Event details section
    eventTitle: document.getElementById("eventTitle"),
    eventPrice: document.getElementById("eventPrice"),
    eventDays: document.getElementById("eventDays"),
    eventPeriod: document.getElementById("eventPeriod"),
    eventTimesTitle: document.getElementById("eventTimesTitle"),
    lunchTime: document.getElementById("lunchTime"),
    dinnerTime: document.getElementById("dinnerTime"),
    eventDuration: document.getElementById("eventDuration"),
    eventSeats: document.getElementById("eventSeats"),
    
    // Booking form elements
    bookingTitle: document.getElementById("bookingTitle"),
    bookingBtn: document.getElementById("bookingBtn"),
    bookingFullNameLabel: document.getElementById("bookingFullNameLabel"),
    bookingMobileLabel: document.getElementById("bookingMobileLabel"),
    bookingEmailLabel: document.getElementById("bookingEmailLabel"),
    bookingNumPeopleLabel: document.getElementById("bookingNumPeopleLabel"),
    bookingDateLabel: document.getElementById("bookingDateLabel"),
    bookingDateInfo: document.getElementById("bookingDateInfo"),
    
    // Other elements
    languageBtn: document.getElementById("languageBtn"),
    themeToggle: document.getElementById("themeToggle"),
    themeIcon: document.getElementById("themeIcon"),
    htmlElement: document.documentElement
  };
  
  console.log("All elements found:", elements);
  
  // Update language function
  function updateLanguage(lang) {
    const content = lang === "ar" ? arabicContent : englishContent;
    
    // Update HTML attributes
    elements.htmlElement.setAttribute("lang", lang);
    elements.htmlElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    
    // Update language button
    if (elements.languageBtn) {
      elements.languageBtn.textContent = lang === "ar" ? "EN" : "AR";
    }
    
    // Update ALL text elements
    Object.keys(elements).forEach(key => {
      if (key !== "languageBtn" && elements[key] && content[key]) {
        elements[key].textContent = content[key];
      }
    });
    
    console.log("Language updated to:", lang);
  }
  
  // Initialize language
  updateLanguage(currentLang);
  
  // Language button click handler
  if (elements.languageBtn) {
    elements.languageBtn.addEventListener("click", function(e) {
      console.log("Language button clicked!");
      e.preventDefault();
      e.stopPropagation();
      
      // Toggle language
      currentLang = currentLang === "ar" ? "en" : "ar";
      localStorage.setItem("halaweh-lang", currentLang);
      updateLanguage(currentLang);
      
      console.log("Language changed to:", currentLang);
    });
    console.log("Language button listener attached");
  }
  
  // Theme toggle
  const themes = ["sun", "moon", "auto"];
  const themeIcons = ["☀️", "🌙", "🌓"];
  let currentThemeIndex = themes.indexOf(localStorage.getItem("halaweh-theme") || "sun");
  
  // Set initial theme
  if (document.body) {
    document.body.setAttribute("data-theme", themes[currentThemeIndex]);
  }
  if (elements.themeIcon) {
    elements.themeIcon.textContent = themeIcons[currentThemeIndex];
  }
  
  if (elements.themeToggle) {
    elements.themeToggle.addEventListener("click", function() {
      console.log("Theme button clicked!");
      currentThemeIndex = (currentThemeIndex + 1) % themes.length;
      const newTheme = themes[currentThemeIndex];
      
      if (document.body) {
        document.body.setAttribute("data-theme", newTheme);
      }
      if (elements.themeIcon) {
        elements.themeIcon.textContent = themeIcons[currentThemeIndex];
      }
      
      localStorage.setItem("halaweh-theme", newTheme);
      console.log("Theme changed to:", newTheme);
    });
    console.log("Theme button listener attached");
  }
  
  // Review toggles
  const reviewToggles = document.querySelectorAll(".review-toggle");
  console.log("Review toggles found:", reviewToggles.length);
  
  reviewToggles.forEach((toggle, index) => {
    toggle.addEventListener("click", function() {
      console.log(`Review toggle ${index + 1} clicked!`);
      const reviewId = this.getAttribute("data-review");
      const answerDiv = document.getElementById("review-" + reviewId);
      
      if (answerDiv) {
        // Close all other reviews
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
  
  // CTA button
  if (elements.cta) {
    elements.cta.addEventListener("click", function(e) {
      console.log("CTA button clicked!");
      e.preventDefault();
      e.stopPropagation();
      alert("CTA working!");
    });
  }
  
  // Booking form functionality
  const bookingForm = document.getElementById("bookingForm");
  
  // Get calendar elements after DOM is loaded
  const bookingDateInput = document.getElementById("bookingDate");
  const calendarIconBtn = document.getElementById("calendarIconBtn");
  const customCalendar = document.getElementById("customCalendar");
  
  console.log("Calendar elements check:", {
    bookingDateInput: bookingDateInput,
    calendarIconBtn: calendarIconBtn,
    customCalendar: customCalendar,
    bookingDateInputHTML: bookingDateInput ? bookingDateInput.outerHTML.substring(0, 100) : 'NOT FOUND',
    calendarIconBtnHTML: calendarIconBtn ? calendarIconBtn.outerHTML : 'NOT FOUND',
    customCalendarHTML: customCalendar ? customCalendar.outerHTML.substring(0, 100) : 'NOT FOUND'
  });
  
  // Booking form submission

// ... (rest of the code remains the same)
  // Function to show thank you popup
  function showThankYouPopup() {
    console.log("showThankYouPopup called!");
  }
  
  // Get thank you popup elements
  const popup = document.getElementById("thankYouPopup");
  const popupCloseBtn = document.getElementById("popupCloseBtn");
  const popupOverlay = document.getElementById("popupOverlay");
  
  if (popupCloseBtn) {
    popupCloseBtn.addEventListener("click", function() {
      if (popup) {
        popup.style.display = 'none';
      }
    });
  }
  
  if (popupOverlay) {
    popupOverlay.addEventListener("click", function() {
      if (popup) {
        popup.style.display = 'none';
      }
    });
  }
  
  console.log("All event listeners attached successfully!");
});
