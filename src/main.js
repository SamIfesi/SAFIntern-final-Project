const id = (id) => document.getElementById(id);
const qa = (s) => document.querySelectorAll(s);

// Elements will be initialized after DOM is ready
let elements = {};

// ==================== THEME MANAGEMENT ====================

const ThemeManager = {
  getPreferredTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  },

  setTheme(theme) {
    elements.html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  },

  toggleTheme() {
    const currentTheme = elements.html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    this.setTheme(newTheme);
  },

  init() {
    this.setTheme(this.getPreferredTheme());

    elements.themeToggle.addEventListener("click", () => {
      this.toggleTheme();
    });

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
          this.setTheme(e.matches ? "dark" : "light");
        }
      });
  },
};

// ==================== COURSE MANAGEMENT ====================

const CourseManager = {
  createCourseRow() {
    const row = document.createElement("tr");
    row.className = "course-row";
    row.innerHTML = `
      <td>
        <input 
          type="text" 
          class="course-name" 
          placeholder="e.g., Mathematics" 
          required
        >
      </td>
      <td>
        <select class="grade" required>
          <option value="">Select Grade</option>
          <option value="5">A (Excellent)</option>
          <option value="4">B (Very Good)</option>
          <option value="3">C (Good)</option>
          <option value="2">D (Fair)</option>
          <option value="1">E (Pass)</option>
          <option value="0">F (Fail)</option>
        </select>
      </td>
      <td>
        <input 
          type="number" 
          class="credit" 
          min="1" 
          max="10" 
          placeholder="e.g., 3" 
          required
        >
      </td>
      <td>
        <button type="button" class="btn-remove">Remove</button>
      </td>
    `;
    
    // Attach remove event listener
    const removeBtn = row.querySelector('.btn-remove');
    removeBtn.addEventListener('click', function() {
      CourseManager.removeCourse(this);
    });
    
    return row;
  },

  addCourse() {
    const newRow = this.createCourseRow();
    if (elements.courseTableBody) {
      elements.courseTableBody.appendChild(newRow);
    }
  },

  removeCourse(button) {
    const rows = qa(".course-row");
    if (rows.length > 1) {
      button.closest("tr").remove();
    } else {
      alert("At least one course is required!");
    }
  },

  getCourses() {
    const rows = qa(".course-row");
    const courses = [];

    rows.forEach((row) => {
      const courseName = row.querySelector(".course-name").value.trim();
      const grade = parseFloat(row.querySelector(".grade").value);
      const credit = parseFloat(row.querySelector(".credit").value);

      if (courseName && !isNaN(grade) && !isNaN(credit)) {
        courses.push({ courseName, grade, credit });
      }
    });

    return courses;
  },

  validateCourses() {
    const courses = this.getCourses();
    const totalRows = qa(".course-row").length;

    if (courses.length === 0) {
      alert("Please enter at least one course!");
      return false;
    }

    if (courses.length !== totalRows) {
      alert("Please fill in all course details!");
      return false;
    }

    return true;
  },
};

// ==================== GPA CALCULATION ====================

const GPACalculator = {
  calculate(courses) {
    let totalGradePoints = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      const gradePoints = course.grade * course.credit;
      totalGradePoints += gradePoints;
      totalCredits += course.credit;
    });

    const gpa =
      totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0.0;

    return {
      gpa,
      totalCourses: courses.length,
      totalCredits,
      courses: courses.map((course) => ({
        ...course,
        gradePoints: (course.grade * course.credit).toFixed(2),
      })),
    };
  },

  getGradeLabel(gradeValue) {
    const gradeMap = {
      5: "A",
      4: "B",
      3: "C",
      2: "D",
      1: "E",
      0: "F",
    };
    return gradeMap[gradeValue] || "N/A";
  },
};

// ==================== RESULTS DISPLAY ====================

const ResultsManager = {
  displayResults(results) {
    elements.gpaValue.textContent = results.gpa;
    elements.totalCourses.textContent = results.totalCourses;
    elements.totalCredits.textContent = results.totalCredits;

    elements.resultsTableBody.innerHTML = "";

    results.courses.forEach((course) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${course.courseName}</td>
        <td>${GPACalculator.getGradeLabel(course.grade)}</td>
        <td>${course.credit}</td>
        <td>${course.gradePoints}</td>
      `;
      elements.resultsTableBody.appendChild(row);
    });

    this.showResults();
  },

  showResults() {
    elements.resultsSection.style.display = "block";
    elements.resultsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  },

  hideResults() {
    elements.resultsSection.style.display = "none";
  },
};

// ==================== FORM HANDLERS ====================

const FormHandlers = {
  handleCalculate(event) {
    event.preventDefault();

    if (!CourseManager.validateCourses()) {
      return;
    }

    const courses = CourseManager.getCourses();
    const results = GPACalculator.calculate(courses);
    ResultsManager.displayResults(results);
  },

  handleReset() {
    if (confirm("Are you sure you want to reset the form?")) {
      elements.gpaForm.reset();
      elements.courseTableBody.innerHTML = "";
      elements.courseTableBody.appendChild(CourseManager.createCourseRow());
      ResultsManager.hideResults();
    }
  },

  handlePrint() {
    window.print();
  },

  handleNewCalculation() {
    elements.gpaForm.reset();
    elements.courseTableBody.innerHTML = "";
    elements.courseTableBody.appendChild(CourseManager.createCourseRow());
    ResultsManager.hideResults();
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
};

// ==================== INITIALIZATION ====================

function initElements() {
  elements = {
    html: document.documentElement,
    themeToggle: id("themeToggle"),
    gpaForm: id("gpaForm"),
    courseTableBody: id("courseTableBody"),
    resultsSection: id("resultsSection"),
    gpaValue: id("gpaValue"),
    totalCourses: id("totalCourses"),
    totalCredits: id("totalCredits"),
    resultsTableBody: id("resultsTableBody"),
    addCourseBtn: id("addCourse"),
    resetFormBtn: id("resetForm"),
    printResultsBtn: id("printResults"),
    newCalculationBtn: id("newCalculation"),
  };
}

function init() {
  initElements();
  ThemeManager.init();

  // Form submit
  elements.gpaForm.addEventListener("submit", (e) => {
    FormHandlers.handleCalculate(e);
  });

  // Add course button
  elements.addCourseBtn.addEventListener("click", () => {
    CourseManager.addCourse();
  });

  // Reset form button
  elements.resetFormBtn.addEventListener("click", () => {
    FormHandlers.handleReset();
  });

  // Print results button
  elements.printResultsBtn.addEventListener("click", () => {
    FormHandlers.handlePrint();
  });

  // New calculation button
  elements.newCalculationBtn.addEventListener("click", () => {
    FormHandlers.handleNewCalculation();
  });

  // Attach remove listeners to existing course rows
  qa('.btn-remove').forEach(btn => {
    btn.addEventListener('click', function() {
      CourseManager.removeCourse(this);
    });
  });
}

// Initialize app when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
