const id = (id) => document.getElementById(id);
const qa = (s) => document.querySelectorAll(s);
let elements = {};
const STORAGE_KEYS = {
  COURSES: "gpa_calculator_courses",
  LAST_SAVED: "gpa_calculator_last_saved",
};

const ThemeManager = {
  getPreferredTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
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
    this.setTheme(currentTheme === "dark" ? "light" : "dark");
  },
  init() {
    this.setTheme(this.getPreferredTheme());
    elements.themeToggle.addEventListener("click", () => this.toggleTheme());
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem("theme"))
          this.setTheme(e.matches ? "dark" : "light");
      });
  },
};

const CourseManager = {
  createCourseRow() {
    const row = document.createElement("tr");
    row.className = "course-row";
    row.innerHTML = `
      <td><input type="text" class="course-name" placeholder="e.g., Mathematics" required></td>
      <td><select class="grade" required>
        <option value="">Select Grade</option>
        <option value="5">A (Excellent)</option>
        <option value="4">B (Very Good)</option>
        <option value="3">C (Good)</option>
        <option value="2">D (Fair)</option>
        <option value="1">E (Pass)</option>
        <option value="0">F (Fail)</option>
      </select></td>
      <td><input type="number" class="credit" min="1" max="10" placeholder="e.g., 3" required></td>
      <td><button type="button" class="btn-remove">Remove</button></td>`;
    row.querySelector(".btn-remove").addEventListener("click", function () {
      CourseManager.removeCourse(this);
    });
    return row;
  },
  addCourse() {
    if (elements.courseTableBody)
      elements.courseTableBody.appendChild(this.createCourseRow());
  },
  removeCourse(button) {
    const rows = qa(".course-row");
    if (rows.length > 1) button.closest("tr").remove();
    else alert("At least one course is required!");
  },
  getCourses() {
    const courses = [];
    qa(".course-row").forEach((row) => {
      const courseName = row.querySelector(".course-name").value.trim();
      const grade = parseFloat(row.querySelector(".grade").value);
      const credit = parseFloat(row.querySelector(".credit").value);
      if (courseName && !isNaN(grade) && !isNaN(credit))
        courses.push({ courseName, grade, credit });
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
  loadCoursesIntoForm(courses) {
    elements.courseTableBody.innerHTML = "";
    courses.forEach((course) => {
      const row = this.createCourseRow();
      row.querySelector(".course-name").value = course.courseName;
      row.querySelector(".grade").value = course.grade;
      row.querySelector(".credit").value = course.credit;
      elements.courseTableBody.appendChild(row);
    });
  },
};

const DataManager = {
  saveCourses(courses) {
    try {
      localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses));
      localStorage.setItem(STORAGE_KEYS.LAST_SAVED, new Date().toISOString());
      return true;
    } catch (error) {
      console.error("Error saving courses:", error);
      return false;
    }
  },
  loadCourses() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COURSES);
      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      console.error("Error loading courses:", error);
      return null;
    }
  },
  clearSavedData() {
    localStorage.removeItem(STORAGE_KEYS.COURSES);
    localStorage.removeItem(STORAGE_KEYS.LAST_SAVED);
  },
  getLastSavedDate() {
    return localStorage.getItem(STORAGE_KEYS.LAST_SAVED);
  },
};

const GPACalculator = {
  calculate(courses) {
    let totalGradePoints = 0,
      totalCredits = 0;
    courses.forEach((course) => {
      totalGradePoints += course.grade * course.credit;
      totalCredits += course.credit;
    });
    const gpa =
      totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0.0;
    return {
      gpa,
      totalCourses: courses.length,
      totalCredits,
      totalGradePoints,
      courses: courses.map((course) => ({
        ...course,
        gradePoints: (course.grade * course.credit).toFixed(2),
      })),
    };
  },
  getGradeLabel(gradeValue) {
    const gradeMap = { 5: "A", 4: "B", 3: "C", 2: "D", 1: "E", 0: "F" };
    return gradeMap[gradeValue] || "N/A";
  },
};

const PerformanceAdvisor = {
  analyzePerformance(currentGPA, totalCredits, totalGradePoints) {
    const gpa = parseFloat(currentGPA);
    const targets = [
      { gpa: 4.5, label: "First Class" },
      { gpa: 3.5, label: "Second Class Upper" },
      { gpa: 2.5, label: "Second Class Lower" },
    ];
    const recommendations = [];
    targets.forEach((target) => {
      if (gpa < target.gpa) {
        recommendations.push({
          target: target.label,
          targetGPA: target.gpa,
          advice: this.calculateTargetGrades(
            gpa,
            totalCredits,
            totalGradePoints,
            target.gpa
          ),
        });
      }
    });
    return recommendations;
  },
  calculateTargetGrades(
    currentGPA,
    currentCredits,
    currentGradePoints,
    targetGPA
  ) {
    const futureCredits = 9;
    const totalFutureCredits = currentCredits + futureCredits;
    const requiredTotalGradePoints = targetGPA * totalFutureCredits;
    const neededGradePoints = requiredTotalGradePoints - currentGradePoints;
    const neededAverageGrade = neededGradePoints / futureCredits;
    if (neededAverageGrade > 5)
      return `Target GPA of ${targetGPA.toFixed(
        2
      )} is not achievable with standard grading scale (max 5.0).`;
    if (neededAverageGrade < 0)
      return `You've already exceeded this target! Keep up the great work! 🎉`;
    return `To reach a ${targetGPA.toFixed(
      2
    )} GPA, aim for an average grade of ${this.getClosestGrade(
      neededAverageGrade
    )} (${neededAverageGrade.toFixed(2)}) in your next 3 courses (9 credits).`;
  },
  getClosestGrade(gradeValue) {
    if (gradeValue >= 4.5) return "A (5.0)";
    if (gradeValue >= 3.5) return "B (4.0)";
    if (gradeValue >= 2.5) return "C (3.0)";
    if (gradeValue >= 1.5) return "D (2.0)";
    if (gradeValue >= 0.5) return "E (1.0)";
    return "F (0.0)";
  },
  displayAdvisor(results) {
    const advisorSection = id("performanceAdvisor");
    const advisorText = id("advisorText");
    const advisorRecommendations = id("advisorRecommendations");
    const currentGPA = parseFloat(results.gpa);
    if (currentGPA >= 4.5) {
      advisorText.textContent =
        "🎓 Outstanding! You have a First Class GPA. Keep maintaining this excellent standard!";
      advisorRecommendations.innerHTML = "";
      advisorSection.style.display = "block";
      return;
    }
    const recommendations = this.analyzePerformance(
      results.gpa,
      results.totalCredits,
      results.totalGradePoints
    );
    if (recommendations.length > 0) {
      advisorText.textContent = "📊 Performance Analysis & Recommendations:";
      let html = '<ul class="advisor-list">';
      recommendations.forEach((rec) => {
        html += `<li class="advisor-item"><strong>${
          rec.target
        } (${rec.targetGPA.toFixed(2)} GPA):</strong><p>${rec.advice}</p></li>`;
      });
      html += "</ul>";
      advisorRecommendations.innerHTML = html;
      advisorSection.style.display = "block";
    }
  },
};

const ResultsManager = {
  displayResults(results) {
    elements.gpaValue.textContent = results.gpa;
    elements.totalCourses.textContent = results.totalCourses;
    elements.totalCredits.textContent = results.totalCredits;
    elements.resultsTableBody.innerHTML = "";
    results.courses.forEach((course) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${
        course.courseName
      }</td><td>${GPACalculator.getGradeLabel(course.grade)}</td><td>${
        course.credit
      }</td><td>${course.gradePoints}</td>`;
      elements.resultsTableBody.appendChild(row);
    });
    PerformanceAdvisor.displayAdvisor(results);
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

const FormHandlers = {
  handleCalculate(event) {
    event.preventDefault();
    if (!CourseManager.validateCourses()) return;
    ResultsManager.displayResults(
      GPACalculator.calculate(CourseManager.getCourses())
    );
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
  handleSaveCourses() {
    const courses = CourseManager.getCourses();
    if (courses.length === 0) {
      alert("No courses to save!");
      return;
    }
    if (DataManager.saveCourses(courses))
      alert(
        `✓ Successfully saved ${courses.length} course(s) to your browser!`
      );
    else alert("Failed to save courses. Please try again.");
  },
  handleLoadCourses() {
    const savedCourses = DataManager.loadCourses();
    if (!savedCourses || savedCourses.length === 0) {
      alert("No saved courses found!");
      return;
    }
    const lastSaved = DataManager.getLastSavedDate();
    const date = lastSaved ? new Date(lastSaved).toLocaleString() : "Unknown";
    if (
      confirm(
        `Load ${savedCourses.length} saved course(s)?\nLast saved: ${date}\n\nThis will replace your current data.`
      )
    ) {
      CourseManager.loadCoursesIntoForm(savedCourses);
      ResultsManager.hideResults();
      alert(`✓ Successfully loaded ${savedCourses.length} course(s)!`);
    }
  },
};

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
    loadCourseBtn: id("loadCourses"),
    resetFormBtn: id("resetForm"),
    printResultsBtn: id("printResults"),
    newCalculationBtn: id("newCalculation"),
    saveCourseBtn: id("saveCourses"),
  };
}

function init() {
  initElements();
  ThemeManager.init();
  elements.gpaForm.addEventListener("submit", (e) =>
    FormHandlers.handleCalculate(e)
  );
  elements.addCourseBtn.addEventListener("click", () =>
    CourseManager.addCourse()
  );
  elements.loadCourseBtn.addEventListener("click", () =>
    FormHandlers.handleLoadCourses()
  );
  elements.resetFormBtn.addEventListener("click", () =>
    FormHandlers.handleReset()
  );
  elements.printResultsBtn.addEventListener("click", () =>
    FormHandlers.handlePrint()
  );
  elements.newCalculationBtn.addEventListener("click", () =>
    FormHandlers.handleNewCalculation()
  );
  elements.saveCourseBtn.addEventListener("click", () =>
    FormHandlers.handleSaveCourses()
  );
  qa(".btn-remove").forEach((btn) =>
    btn.addEventListener("click", function () {
      CourseManager.removeCourse(this);
    })
  );
}

if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", init);
else init();
