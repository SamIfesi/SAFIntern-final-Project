# GPA Calculator 🎓

A modern, responsive web application for calculating Grade Point Average (GPA) with dark mode support and data persistence.

![GPA Calculator Preview](screenshots/preview.png)

---

## ✨ Features

- 📊 **Calculate GPA** - Supports 5.0 grading scale (A-F)
- 💾 **Save & Load Data** - Your courses are saved in the browser
- 🌓 **Dark Mode** - Automatic theme detection + manual toggle
- 📱 **Responsive Design** - Works on mobile, tablet, and desktop
- 🎯 **Performance Advisor** - Get recommendations to reach target GPAs
- 🖨️ **Print Results** - Print-friendly layout with preserved colors

---

## 🚀 Quick Start

1. **Open the app**: Simply open `index.html` in your browser
2. **Enter courses**: Fill in course name, grade, and credit hours
3. **Calculate**: Click "Calculate GPA" to see your results
4. **Save**: Click "Save Data" to keep your courses for later

**No installation or setup required!** Just open and use.

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

## � Screenshots

<table>
  <tr>
    <td align="center">
      <img src="screenshots/light-mode.png" alt="Light Mode" width="400"/><br/>
      <b>Light Mode</b>
    </td>
    <td align="center">
      <img src="screenshots/dark-mode.png" alt="Dark Mode" width="400"/><br/>
      <b>Dark Mode</b>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="screenshots/mobile-view.png" alt="Mobile View" width="400"/><br/>
      <b>Mobile Responsive</b>
    </td>
    <td align="center">
      <img src="screenshots/results.png" alt="Results Display" width="400"/><br/>
      <b>GPA Results</b>
    </td>
  </tr>
</table>

📁 **See all screenshots in the [/screenshots](screenshots/) folder**

---

## 🎨 Color Palette

View the complete color palette: **[COLOR_PALETTE.md](COLOR_P
ALETTE.md)**

**Primary Colors:**

- Orange-500: `#f97316` (Primary)
- Orange-300: `#fdba74` (Secondary)
- Green-500: `#10b981` (Accent)

---

## 💻 Usage Guide

### How to Use

```
1. Enter course name → Select grade → Enter credit hours
2. Click "Add Course" for more courses
3. Click "Calculate GPA" to see results
4. Click "Save Data" to store your courses
5. Click "Load Saved Data" to retrieve them
```

### Grade Scale (5.0)

| Grade | Points          |
| ----- | --------------- |
| A     | 5.0 (Excellent) |
| B     | 4.0 (Very Good) |
| C     | 3.0 (Good)      |
| D     | 2.0 (Fair)      |
| E     | 1.0 (Pass)      |
| F     | 0.0 (Fail)      |

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
│       └── Responsive Design (2 breakpoints)
└── assets/
    ├── sun-icon.svg
    └── moon-icon.svg
```

---

## 📖 Documentation

- **[Full Documentation](DOCUMENTATION.md)** - Complete technical guide with detailed features
- **[Presentation Slides](GPA-Calculator-Presentation.pdf)** - Project overview, features, and technologies (PDF)

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **JavaScript ES6+** - Vanilla JS (no frameworks)
- **LocalStorage API** - Data persistence

---

## 📱 Browser Support

Works on all modern browsers:

- Chrome 90+ | Firefox 88+ | Safari 14+ | Edge 90+

---

## 👨‍💻 Developer

**Eke, Ifesinachi Samrose**

- GitHub: [@SamIfesi](https://github.com/SamIfesi)
- LinkedIn: [Sam Ifesi](https://www.linkedin.com/in/sam-ifesi)
- 🏆 **Certificates**: [View All Certificates](CERTIFICATES.md)

---

## 📄 License

This project is open source and available for educational purposes.

---

**Built with ❤️ for FlexiSAF Internship** | December 2025
