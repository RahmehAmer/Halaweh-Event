// Language Toggle Functionality
const langToggle = document.getElementById("langToggle");
const headline = document.getElementById("headline");
const subheadline = document.getElementById("subheadline");
const cta = document.getElementById("cta");
const benefitsSubtitle = document.getElementById("benefitsSubtitle");
const benefitsIntro = document.getElementById("benefitsIntro");
const benefit1 = document.getElementById("benefit1");
const benefit2 = document.getElementById("benefit2");
const benefit3 = document.getElementById("benefit3");
const benefit4 = document.getElementById("benefit4");
const benefit5 = document.getElementById("benefit5");
const benefit6 = document.getElementById("benefit6");
// Reviews section elements
const reviewsTitle = document.querySelector(".reviews-title");
// Buffet section elements
const lunchTitle = document.querySelector(".buffet-lunch .buffet-title");
const dinnerTitle = document.querySelector(".buffet-dinner .buffet-title");
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
const eventTitle = document.querySelector(".event-title");
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
  bookingTitle: "احجز مكانك في الفعالية",
  popupTitle: "شكراً لك!",
  popupMessage: "تم استلام طلب الحجز بنجاح. سيتم التواصل معك خلال 24 ساعة لتأكيد الحجز.",
  dateInfo: "الفعالية متاحة في أيام الخميس والجمعة والسبت من 20 يناير إلى 20 فبراير",
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
  bookingTitle: "Book Your Place at the Event",
  popupTitle: "Thank You!",
  popupMessage: "Your booking request has been received successfully. We will contact you within 24 hours to confirm your reservation.",
  dateInfo: "The event is available on Thursdays, Fridays, and Saturdays from January 20 to February 20",
};

let currentLang = "ar";

langToggle.addEventListener("click", () => {
  if (currentLang === "ar") {
    currentLang = "en";
    htmlElement.setAttribute("lang", "en");
    htmlElement.setAttribute("dir", "ltr");
    headline.textContent = englishContent.headline;
    subheadline.textContent = englishContent.subheadline;
    cta.textContent = englishContent.cta;
    benefitsSubtitle.textContent = englishContent.benefitsSubtitle;
    benefitsIntro.textContent = englishContent.benefitsIntro;
    benefit1.textContent = englishContent.benefit1;
    benefit2.textContent = englishContent.benefit2;
    benefit3.textContent = englishContent.benefit3;
    benefit4.textContent = englishContent.benefit4;
    benefit5.textContent = englishContent.benefit5;
    benefit6.textContent = englishContent.benefit6;
    if (reviewsTitle) reviewsTitle.textContent = englishContent.reviewsTitle;
    if (lunchTitle) lunchTitle.textContent = englishContent.lunchTitle;
    if (dinnerTitle) dinnerTitle.textContent = englishContent.dinnerTitle;
    if (lunchArabicCuisine) lunchArabicCuisine.textContent = englishContent.lunchArabicCuisine;
    if (lunchArabicDesserts) lunchArabicDesserts.textContent = englishContent.lunchArabicDesserts;
    if (lunchInternationalDesserts) lunchInternationalDesserts.textContent = englishContent.lunchInternationalDesserts;
    if (lunchHotDrinks) lunchHotDrinks.textContent = englishContent.lunchHotDrinks;
    if (lunchColdDrinks) lunchColdDrinks.textContent = englishContent.lunchColdDrinks;
    if (dinnerArabicCuisine) dinnerArabicCuisine.textContent = englishContent.dinnerArabicCuisine;
    if (dinnerArabicDesserts) dinnerArabicDesserts.textContent = englishContent.dinnerArabicDesserts;
    if (dinnerInternationalDesserts) dinnerInternationalDesserts.textContent = englishContent.dinnerInternationalDesserts;
    if (dinnerHotDrinks) dinnerHotDrinks.textContent = englishContent.dinnerHotDrinks;
    if (dinnerColdDrinks) dinnerColdDrinks.textContent = englishContent.dinnerColdDrinks;
    if (kidsTitle) kidsTitle.textContent = englishContent.kidsTitle;
    if (kidsActivity1) kidsActivity1.textContent = englishContent.kidsActivity1;
    if (kidsActivity2) kidsActivity2.textContent = englishContent.kidsActivity2;
    if (kidsActivity3) kidsActivity3.textContent = englishContent.kidsActivity3;
    if (eventTitle) eventTitle.textContent = englishContent.eventTitle;
    if (bookingTitle) bookingTitle.textContent = englishContent.bookingTitle;
    if (popupTitle) popupTitle.textContent = englishContent.popupTitle;
    if (popupMessage) popupMessage.textContent = englishContent.popupMessage;
    if (dateInfo) dateInfo.textContent = englishContent.dateInfo;
    langToggle.textContent = "AR";
  } else {
    currentLang = "ar";
    htmlElement.setAttribute("lang", "ar");
    htmlElement.setAttribute("dir", "rtl");
    headline.textContent = arabicContent.headline;
    subheadline.textContent = arabicContent.subheadline;
    cta.textContent = arabicContent.cta;
    benefitsSubtitle.textContent = arabicContent.benefitsSubtitle;
    benefitsIntro.textContent = arabicContent.benefitsIntro;
    benefit1.textContent = arabicContent.benefit1;
    benefit2.textContent = arabicContent.benefit2;
    benefit3.textContent = arabicContent.benefit3;
    benefit4.textContent = arabicContent.benefit4;
    benefit5.textContent = arabicContent.benefit5;
    benefit6.textContent = arabicContent.benefit6;
    if (reviewsTitle) reviewsTitle.textContent = arabicContent.reviewsTitle;
    if (lunchTitle) lunchTitle.textContent = arabicContent.lunchTitle;
    if (dinnerTitle) dinnerTitle.textContent = arabicContent.dinnerTitle;
    if (lunchArabicCuisine) lunchArabicCuisine.textContent = arabicContent.lunchArabicCuisine;
    if (lunchArabicDesserts) lunchArabicDesserts.textContent = arabicContent.lunchArabicDesserts;
    if (lunchInternationalDesserts) lunchInternationalDesserts.textContent = arabicContent.lunchInternationalDesserts;
    if (lunchHotDrinks) lunchHotDrinks.textContent = arabicContent.lunchHotDrinks;
    if (lunchColdDrinks) lunchColdDrinks.textContent = arabicContent.lunchColdDrinks;
    if (dinnerArabicCuisine) dinnerArabicCuisine.textContent = arabicContent.dinnerArabicCuisine;
    if (dinnerArabicDesserts) dinnerArabicDesserts.textContent = arabicContent.dinnerArabicDesserts;
    if (dinnerInternationalDesserts) dinnerInternationalDesserts.textContent = arabicContent.dinnerInternationalDesserts;
    if (dinnerHotDrinks) dinnerHotDrinks.textContent = arabicContent.dinnerHotDrinks;
    if (dinnerColdDrinks) dinnerColdDrinks.textContent = arabicContent.dinnerColdDrinks;
    if (kidsTitle) kidsTitle.textContent = arabicContent.kidsTitle;
    if (kidsActivity1) kidsActivity1.textContent = arabicContent.kidsActivity1;
    if (kidsActivity2) kidsActivity2.textContent = arabicContent.kidsActivity2;
    if (kidsActivity3) kidsActivity3.textContent = arabicContent.kidsActivity3;
    if (eventTitle) eventTitle.textContent = arabicContent.eventTitle;
    if (bookingTitle) bookingTitle.textContent = arabicContent.bookingTitle;
    if (popupTitle) popupTitle.textContent = arabicContent.popupTitle;
    if (popupMessage) popupMessage.textContent = arabicContent.popupMessage;
    if (dateInfo) dateInfo.textContent = arabicContent.dateInfo;
    langToggle.textContent = "EN";
  }
});

// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

const themes = ["sun", "moon", "auto"];
const themeIcons = ["☀️", "🌙", "🌓"];
let currentThemeIndex = 0;

themeToggle.addEventListener("click", () => {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  const newTheme = themes[currentThemeIndex];
  body.setAttribute("data-theme", newTheme);
  themeIcon.textContent = themeIcons[currentThemeIndex];
});

// Reviews Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
  const reviewToggles = document.querySelectorAll(".review-toggle");

  reviewToggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const reviewId = toggle.getAttribute("data-review");
      const answerElement = document.getElementById(`review-${reviewId}`);

      // Toggle active class on button
      toggle.classList.toggle("active");

      // Toggle show class on answer
      answerElement.classList.toggle("show");
    });
  });

  // Kids Activities Accordion Functionality
  const kidsToggle = document.getElementById("kidsToggle");
  const kidsContent = document.getElementById("kidsContent");

  if (kidsToggle && kidsContent) {
    kidsToggle.addEventListener("click", () => {
      // Toggle active class on button
      kidsToggle.classList.toggle("active");

      // Toggle show class on content
      kidsContent.classList.toggle("show");
    });
  }

  // Booking Form Validation and Functionality
  const bookingForm = document.getElementById("bookingForm");
  const bookingTitle = document.getElementById("bookingTitle");
  const thankYouPopup = document.getElementById("thankYouPopup");
  const popupCloseBtn = document.getElementById("popupCloseBtn");
  const popupTitle = document.getElementById("popupTitle");
  const popupMessage = document.getElementById("popupMessage");

  if (bookingForm) {
    // Set minimum date to today and restrict to event days
    setupDateRestrictions();

    bookingForm.addEventListener("submit", function(e) {
      e.preventDefault();

      if (validateForm()) {
        // Form is valid, show thank you popup
        showThankYouPopup();
        bookingForm.reset();
      }
    });

    // Real-time validation
    const inputs = bookingForm.querySelectorAll("input, select, textarea");
    inputs.forEach(input => {
      input.addEventListener("blur", function() {
        validateField(this);
      });

      input.addEventListener("input", function() {
        clearFieldError(this);
      });
    });
  }

  function validateForm() {
    let isValid = true;

    // Validate full name
    const fullName = document.getElementById("fullName");
    if (!fullName.value.trim()) {
      showFieldError(fullName, "الاسم الكامل مطلوب");
      isValid = false;
    }

    // Validate number of people
    const numPeople = document.getElementById("numPeople");
    if (!numPeople.value || numPeople.value < 1) {
      showFieldError(numPeople, "عدد الأشخاص يجب أن يكون رقماً أكبر من صفر");
      isValid = false;
    }

    // Validate meal type
    const mealType = document.getElementById("mealType");
    if (!mealType.value) {
      showFieldError(mealType, "يجب اختيار نوع البوفيه");
      isValid = false;
    }

    // Validate booking date
    const bookingDate = document.getElementById("bookingDate");
    if (!bookingDate.value) {
      showFieldError(bookingDate, "تاريخ الحجز مطلوب");
      isValid = false;
    } else if (!isValidDate(bookingDate.value)) {
      showFieldError(bookingDate, "التاريخ يجب أن يكون خميس أو جمعة أو سبت خلال فترة الفعالية");
      isValid = false;
    }

    return isValid;
  }

  function validateField(field) {
    clearFieldError(field);

    switch(field.id) {
      case "fullName":
        if (!field.value.trim()) {
          showFieldError(field, "الاسم الكامل مطلوب");
        }
        break;
      case "numPeople":
        if (!field.value || field.value < 1) {
          showFieldError(field, "عدد الأشخاص يجب أن يكون رقماً أكبر من صفر");
        }
        break;
      case "mealType":
        if (!field.value) {
          showFieldError(field, "يجب اختيار نوع البوفيه");
        }
        break;
      case "bookingDate":
        if (!field.value) {
          showFieldError(field, "تاريخ الحجز مطلوب");
        } else if (!isValidDate(field.value)) {
          showFieldError(field, "التاريخ يجب أن يكون خميس أو جمعة أو سبت خلال فترة الفعالية");
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
      bookingDateInput.placeholder = "الفعالية انتهت";
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
          showFieldError(this, "الفعالية متاحة فقط في أيام الخميس والجمعة والسبت");
          return;
        }

        // Check if it's within the event period
        if (selectedDate < eventStart || selectedDate > eventEnd) {
          this.value = "";
          showFieldError(this, "التاريخ يجب أن يكون خلال فترة الفعالية (20 يناير - 20 فبراير)");
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
        showFieldError(this, "يرجى اختيار تاريخ صحيح من أيام الفعالية المتاحة");
      }
    });
  }

  function showThankYouPopup() {
    if (thankYouPopup) {
      thankYouPopup.classList.add("show");
      document.body.style.overflow = "hidden"; // Prevent scrolling when popup is open
    }
  }

  function hideThankYouPopup() {
    if (thankYouPopup) {
      thankYouPopup.classList.remove("show");
      document.body.style.overflow = ""; // Restore scrolling
    }
  }

  // Close popup when close button is clicked
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
});

