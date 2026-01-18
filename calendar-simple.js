// Simple working calendar for Halaweh Event
// This replaces the problematic calendar section

document.addEventListener("DOMContentLoaded", function() {
  // Get elements
  const bookingDateInput = document.getElementById("bookingDate");
  const calendarToggle = document.getElementById("calendarToggle");
  const customCalendar = document.getElementById("customCalendar");
  const dateInfoElement = document.getElementById("dateInfo");
  
  if (!calendarToggle || !customCalendar || !bookingDateInput) {
    console.error("Calendar elements not found");
    return;
  }
  
  console.log("Calendar elements found, setting up...");
  
  // Event parameters
  const eventYear = 2026;
  const eventStart = new Date(eventYear, 0, 20); // January 20, 2026
  const eventEnd = new Date(eventYear, 1, 20); // February 20, 2026
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Calendar state
  let currentMonth = today.getMonth();
  let calendarYear = today.getFullYear();
  let selectedDate = null;
  
  // Check if valid date
  function isValidEventDate(date) {
    const dayOfWeek = date.getDay();
    const isValidDay = dayOfWeek === 4 || dayOfWeek === 5 || dayOfWeek === 6; // Thu, Fri, Sat
    const isWithinPeriod = date >= eventStart && date <= eventEnd;
    const isNotPast = date >= today;
    return isValidDay && isWithinPeriod && isNotPast;
  }
  
  // Get next valid date
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
  
  // Render calendar
  function renderCalendar() {
    console.log("Rendering calendar for:", calendarYear, currentMonth);
    
    const monthNames = currentLang === "ar" 
      ? ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
      : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const weekdayNames = currentLang === "ar"
      ? ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"]
      : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    const firstDay = new Date(calendarYear, currentMonth, 1);
    const lastDay = new Date(calendarYear, currentMonth + 1, 0);
    const firstDayIndex = firstDay.getDay();
    const daysInMonth = lastDay.getDate();
    
    let html = `
      <div class="calendar-header">
        <button class="calendar-nav" id="prevMonth">‹</button>
        <div class="calendar-title">${monthNames[currentMonth]} ${calendarYear}</div>
        <button class="calendar-nav" id="nextMonth">›</button>
      </div>
      <div class="calendar-grid">
    `;
    
    // Add weekday headers
    weekdayNames.forEach(day => {
      html += `<div class="calendar-weekday">${day}</div>`;
    });
    
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDayIndex; i++) {
      html += `<div class="calendar-day other-month"></div>`;
    }
    
    // Add days of month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(calendarYear, currentMonth, day);
      const isValid = isValidEventDate(date);
      const isSelected = selectedDate && 
        selectedDate.getDate() === day && 
        selectedDate.getMonth() === currentMonth && 
        selectedDate.getFullYear() === calendarYear;
      
      let classes = "calendar-day";
      if (isValid) {
        classes += " valid";
      } else {
        classes += " disabled";
      }
      if (isSelected) {
        classes += " selected";
      }
      
      html += `<div class="${classes}" data-date="${calendarYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}">${day}</div>`;
    }
    
    html += "</div>";
    customCalendar.innerHTML = html;
    
    // Add click handlers to valid days
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
        
        console.log("Date selected:", selectedDate);
      });
    });
    
    // Add navigation handlers
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
  
  // Toggle calendar
  calendarToggle.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Calendar button clicked!");
    customCalendar.classList.toggle("show");
    if (customCalendar.classList.contains("show")) {
      renderCalendar();
    }
  });
  
  // Close when clicking outside
  document.addEventListener("click", function(e) {
    if (!e.target.closest(".custom-date-picker")) {
      customCalendar.classList.remove("show");
    }
  });
  
  // Update info text
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
  
  console.log("Calendar setup complete!");
});
