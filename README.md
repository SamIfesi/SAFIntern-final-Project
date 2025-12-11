# GPA Calculator - SAFRecords

A sophisticated, web-based GPA calculation tool designed for university and college students to track their academic performance. The calculator computes GPA using a 5.0 scale and provides intelligent performance analysis with actionable recommendations.

![GPA Calculator](https://img.shields.io/badge/Status-Active-brightgreen)
![Version](https://img.shields.io/badge/Version-1.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🎯 Project Overview

**Project Description:**  
Students will develop a GPA computation tool where users can input courses, grades, and credits. The calculator computes GPA and displays the result, mimicking the SAFRecords grading module.

**Target Audience:**  
University and college students tracking academic performance.

**Core Goal:**  
Build a web-based GPA calculator that performs accurate mathematical operations using DOM manipulation.

---

## ✨ Features

### Core Functionality

- ✅ **Dynamic Course Input** - Add/remove courses on-the-fly with real-time validation
- ✅ **Accurate GPA Calculation** - Formula: Σ(grade × credit) / Σ(credit) on 5.0 scale
- ✅ **Results Display** - Comprehensive breakdown table with grade points
- ✅ **Print Functionality** - Clean, professional print layout (colors preserved)
- ✅ **Data Persistence** - Save and load courses using LocalStorage

### Advanced Features

- 🤖 **Performance Advisor** - AI-like recommendations for target GPAs
  - Analyzes current performance against classification standards
  - Suggests required grades for desired GPA targets
  - Encouragement for high achievers
- 🌓 **Dark Mode Support**

  - Auto-detects user's system preference
  - Manual toggle with persistent memory
  - Smooth transitions between themes

- 📱 **Responsive Design**
  - Mobile-first approach
  - Two breakpoints: Tablet (48rem/768px) & Desktop (64rem/1024px)
  - Optimized for all screen sizes

### User Interface

- 🎨 **Beautiful Orange Theme** - Custom color palette with CSS variables
- 🔄 **Smooth Animations** - Fade-in, slide-in transitions
- ⌨️ **Intuitive Controls** - Clear buttons and form validation
- ♿ **Accessible** - ARIA labels and semantic HTML

---

## 🛠️ Technologies Used

| Technology            | Purpose                                   |
| --------------------- | ----------------------------------------- |
| **HTML5**             | Structure and semantic markup             |
| **CSS3**              | Styling with CSS variables, Grid, Flexbox |
| **JavaScript (ES6+)** | Logic, DOM manipulation, data handling    |
| **LocalStorage**      | Data persistence (optional)               |
| **CSS Media Queries** | Responsive design & print styles          |

---

## 📋 Grade Scale

The calculator uses the standard 5.0 GPA scale:

| Grade | Points | Classification |
| ----- | ------ | -------------- |
| A     | 5.0    | Excellent      |
| B     | 4.0    | Very Good      |
| C     | 3.0    | Good           |
| D     | 2.0    | Fair           |
| E     | 1.0    | Pass           |
| F     | 0.0    | Fail           |

---

## 🎨 Color Palette

### Primary Colors (Orange)

- **Orange-500**: `#f97316` (Primary Action)
- **Orange-400**: `#fb923c` (Secondary)
- **Orange-300**: `#fdba74` (Light)
- **Orange-600**: `#ea580c` (Hover)

### Neutral Colors

- **Gray-900**: `#171717` (Text Primary)
- **Gray-600**: `#525252` (Text Secondary)
- **Gray-50**: `#fafafa` (Background Light)

### Semantic Colors

- **Accent (Success)**: `#10b981` (Green)
- **Danger**: `#ef4444` (Red)
- **Text Inverse**: `#ffffff` (White)

---

## 📦 Installation & Setup

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Optional: Local server (for development)

### Quick Start

1. **Clone/Download the Project**

   ```bash
   git clone https://github.com/SamIfesi/SAFIntern-final-Project.git
   cd SAFIntern-final-Project
   ```

2. **Open in Browser**

   ```bash
   # Option 1: Direct (file://)
   open index.html

   # Option 2: Local Server (recommended)
   npx http-server
   # or
   python -m http.server 8000
   ```

3. **Start Using**
   - Enter course details (name, grade, credit hours)
   - Click "Calculate GPA"
   - View results and performance recommendations

---

## 🚀 Usage Guide

### Adding Courses

1. Fill in Course Name (e.g., "Mathematics 101")
2. Select Grade (A-F)
3. Enter Credit Hours (1-10)
4. Click "Add Course" to add more courses

### Calculating GPA

1. Complete at least one course entry
2. Click "Calculate GPA" button
3. View results with:
   - Your GPA (out of 5.00)
   - Total courses and credit hours
   - Detailed course breakdown
   - Performance advisor recommendations

### Performance Advisor

The advisor suggests target grades for:

- **First Class**: GPA ≥ 4.5
- **Second Class Upper**: GPA ≥ 3.5
- **Second Class Lower**: GPA ≥ 2.5

Recommendations assume 3 future courses (9 credits total).

### Saving Data

- Click "Save Data" button to store courses to LocalStorage
- Data persists even after closing the browser
- Access saved data by checking your browser's local storage

### Printing Results

- Click "Print Results" to open print dialog
- Prints GPA summary, course breakdown, and performance advisor
- Colors are preserved in PDF/paper output
- Header and input form are hidden

### Theme Toggle

- Click the sun/moon icon in the header
- Toggle between light and dark modes
- Preference is saved automatically

---

## 📁 Project Structure

```
SAFIntern-final-Project/
├── index.html           # Main HTML file with form and results layout
├── README.md           # This file
├── src/
│   ├── main.js         # JavaScript logic (359+ lines)
│   │   ├── Theme Management
│   │   ├── Data Handling (LocalStorage)
│   │   ├── Course Management
│   │   ├── GPA Calculation
│   │   ├── Performance Advisor
│   │   ├── Results Display
│   │   └── Form Handlers
│   └── style.css       # CSS styling (963 lines)
│       ├── Root Variables (Light & Dark Mode)
│       ├── Base Styles
│       ├── Responsive Design (2 breakpoints)
│       ├── Print Styles
│       └── Animations & Transitions
└── assets/
    ├── sun-icon.svg
    └── moon-icon.svg
```

---

## 🔧 Code Architecture

### Object-Oriented Structure

The JavaScript is organized into modular objects:

```javascript
ThemeManager { getPreferredTheme(), setTheme(), toggleTheme(), init() }

DataManager { saveCourses(), loadCourses(), clearSavedData(), getLastSavedDate() }

CourseManager {
  createCourseRow(), addCourse(), removeCourse(),
  getCourses(), validateCourses()
}

GPACalculator { calculate(), getGradeLabel() }

PerformanceAdvisor {
  analyzePerformance(), calculateTargetGrades(),
  getClosestGrade(), displayAdvisor()
}

ResultsManager { displayResults(), showResults(), hideResults() }

FormHandlers {
  handleCalculate(), handleReset(), handlePrint(),
  handleNewCalculation(), handleSaveCourses()
}
```

### GPA Calculation Formula

```
GPA = Σ(Grade × Credit Hours) / Σ(Credit Hours)

Example:
- Course 1: A (5.0) × 3 credits = 15.0 points
- Course 2: B (4.0) × 3 credits = 12.0 points
- Course 3: C (3.0) × 2 credits = 6.0 points

GPA = (15.0 + 12.0 + 6.0) / (3 + 3 + 2) = 33.0 / 8 = 4.125
```

---

## 📱 Responsive Design

### Mobile First Approach

- **Default**: Optimized for small screens (< 48rem)
  - Stacked buttons
  - Single-column stats
  - Smaller fonts
- **Tablet (48rem / 768px)**

  - Two-column stats
  - Horizontal button layout
  - Increased padding and fonts

- **Desktop (64rem / 1024px)**
  - Auto-fit stats grid
  - Large hero fonts (4xl for GPA)
  - Enhanced hover effects

### Units Used

- **Padding/Margin**: rem (root-relative)
- **Font Sizes**: rem (root-relative)
- **Borders**: px (absolute)

---

## 🌙 Dark Mode Implementation

### How It Works

1. **System Detection**: Checks `prefers-color-scheme: dark`
2. **User Preference**: Overrides with `data-theme` attribute
3. **Persistence**: Saves choice to LocalStorage
4. **Smooth Transitions**: CSS transitions between themes (250ms)

### CSS Variables Strategy

```css
:root {
  /* Light Mode */
}
[data-theme="dark"] {
  /* Dark Mode */
}
@media (prefers-color-scheme: dark) {
  /* System Preference */
}
```

---

## 💾 Data Persistence

### LocalStorage Keys

```javascript
gpa_calculator_courses; // Array of course objects
gpa_calculator_last_saved; // ISO timestamp of last save
```

### Data Structure

```javascript
{
  courseName: "Mathematics 101",
  grade: 5,              // 0-5 scale
  credit: 3,             // Credit hours
  gradePoints: "15.00"   // Calculated
}
```

---

## 🖨️ Print Features

### What Prints

- ✅ GPA Results Summary (colors preserved)
- ✅ Performance Advisor Recommendations
- ✅ Course Breakdown Table

### What's Hidden

- ❌ Header (GPA Calculator title)
- ❌ Input Form
- ❌ Action Buttons
- ❌ Footer
- ❌ Theme Toggle

### Color Preservation

- Uses `print-color-adjust: exact` for color output
- Orange gradient on summary cards
- Color-coded advisor recommendations
- Professional, ready-to-print layout

---

## ✅ Validation

### Input Validation

- ✓ Course name required (non-empty string)
- ✓ Grade must be selected (0-5)
- ✓ Credit hours required (1-10 range)
- ✓ All rows must be complete before calculation

### Error Handling

- User-friendly alert messages
- Prevents incomplete data submission
- Minimum course requirement (at least 1)
- Maximum credit protection

---

## 🎓 Performance Advisor Logic

### Target GPA Analysis

The advisor automatically analyzes:

1. Current GPA vs. classification standards
2. Gap to next classification level
3. Required average grade for next 3 courses (9 credits)
4. Feasibility of target (if impossible, user is notified)

### Example Scenarios

```
Scenario 1: Current GPA = 3.2, Target = 4.5
→ "To reach First Class (4.5 GPA), aim for A grades in your next 3 courses"

Scenario 2: Current GPA = 4.8, Target = 4.5
→ "You've already exceeded this target! Keep up the great work! 🎉"

Scenario 3: Current GPA = 3.0, All targets = 4.5
→ Shows recommendations for Second Class Upper and Lower
```

---

## 🌐 Browser Support

| Browser         | Support |
| --------------- | ------- |
| Chrome 90+      | ✅ Full |
| Firefox 88+     | ✅ Full |
| Safari 14+      | ✅ Full |
| Edge 90+        | ✅ Full |
| Mobile Browsers | ✅ Full |

**Requirements:**

- ES6+ JavaScript support
- CSS Grid & Flexbox
- LocalStorage API
- CSS Variables (Custom Properties)

---

## 🔐 Data Privacy

- ✅ **Local Storage Only**: All data stored in user's browser
- ✅ **No Server Submission**: No data sent to any server
- ✅ **User Control**: Clear saved data anytime
- ✅ **GDPR Compliant**: No tracking or external APIs

---

## 🚀 Future Enhancements

Potential features for future versions:

- [ ] Multiple semester tracking
- [ ] GPA prediction based on current trajectory
- [ ] Export as PDF/CSV
- [ ] Course recommendations based on GPA targets
- [ ] Grade weighting for major/minor courses
- [ ] Cumulative GPA vs. semester GPA
- [ ] Study tips integrated with advisor
- [ ] Cloud sync (Firebase/Auth)
- [ ] Mobile app (React Native)

---

## 📝 Implementation Options

The GPA calculator uses a **Rule-Based Implementation**:

- Fixed logic based on grade-to-point mapping
- No AI/ML integration
- Deterministic calculations
- Transparent algorithms

**Alternative approaches could include:**

- API-Integrated: Connect to institutional GPA systems
- Dynamic Rules: Load grading rules from database

---

## 👨‍💼 Author

**Designed & Developed By:**  
**Eke, Ifesinachi Samrose**

### Connect

- 🔗 GitHub: [SamIfesi](https://github.com/SamIfesi)
- 💼 LinkedIn: [Sam Ifesi](https://www.linkedin.com/in/sam-ifesi)

---

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## Support

For issues, questions, or feedback:

1. Check the documentation above
2. Review the code comments in `src/main.js` and `src/style.css`
3. Open an issue on GitHub
4. Contact the author

---

## 🎉 Acknowledgments

- **SAFRecords** for grading module inspiration
- **Google Fonts** (Inter) for typography
- **FlexiSAF internship program**

---

## 📊 Project Statistics

| Metric           | Value  |
| ---------------- | ------ |
| HTML Lines       | 188    |
| CSS Lines        | 963    |
| JavaScript Lines | 480+   |
| Total Lines      | 1,600+ |
| Features         | 15+    |
| Color Variables  | 40+    |
| Breakpoints      | 2      |
| Animations       | 4+     |

---

**Last Updated:** December 11, 2025  
**Version:** 1.0.0  
**Status:** Production Ready ✅

---

_Built with LOVE for academic excellence_
