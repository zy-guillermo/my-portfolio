You are an expert frontend developer. Help me build a modern, production-ready personal portfolio website.

## TECH STACK (STRICT)
- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Deployment target: Vercel
- Language: TypeScript
- Use clean, reusable components

## GENERAL REQUIREMENTS
- Fully responsive (mobile, tablet, desktop)
- Dark/Light mode toggle (default: system preference)
- Smooth scrolling and subtle modern animations
- Clean, minimal, sleek UI
- Professional and modern feel (inspired by high-end developer portfolios)
- Use a one-page layout with sections
- Add a sticky top navigation header with smooth scroll to sections

## DESIGN / THEME
- Light mode: white, dark blue, gray, subtle green accents
- Dark mode: deep navy/black background with soft contrast text and accents
- Style: minimal, clean, slightly futuristic
- Use rounded corners, soft shadows, and spacing
- Avoid clutter, prioritize readability

---

## WEBSITE STRUCTURE

### 1. HEADER (Sticky Navigation)
- Logo/Name on left: "Zy Guillermo"
- Nav links on right:
  - Home
  - SDET Projects
  - Web Projects
  - Skills
  - Contact
- Include Dark/Light toggle button

---

### 2. HERO SECTION
Layout:
- Left: 4:3 image placeholder (profile photo)
- Right:
  - Name: Zymon Miko D. Guillermo (Zy Guillermo)
  - Title: Software Development Engineer in Test (SDET)
  - Short intro:
    "SDET with 5 years of experience specializing in test automation frameworks, cross-platform testing, and modern web technologies. Also a web developer creating clean and functional digital experiences."
  - CTA buttons:
    - "View Projects"
    - "Contact Me"

---

### 3. SDET PROJECTS SECTION
Title: "Projects I worked on as an SDET"

Display as:
- Responsive cards or horizontal carousel

Each card should include:
- Logo placeholder
- Project name
- Short description (1–2 lines max)

Projects:
1. Axos Bank
   - Modernized automation by migrating Appium C# to Testim JS, expanded test coverage

2. Australian Taxation Office (ATO)
   - Functional & system testing + Selenium automation + AWS modernization support

3. Inland Revenue Authority of Singapore (IRAS)
   - Data preparation for UAT using SQL, Postman, automation tools

4. Ciergio App
   - End-to-end QA and introduced automation to reduce regression effort

5. Ahente App
   - Full QA testing for web & mobile, helped implement automation practices

IMPORTANT:
- Focus on impact and responsibilities
- DO NOT list tools/tech here

---

### 4. WEB DEVELOPER PROJECTS SECTION
Title: "Projects I created as a Web Developer"

Display as:
- Cards or carousel (same style as SDET section)

Projects:
1. 1st Look Publicity
   - Website: https://www.1stlookpublicity.com
   - Description: Professional website built for a client to showcase services and brand presence

---

### 5. SKILLS / TOOLS SECTION
Title: "Skills & Tools"

Display ideas (choose a modern approach):
- Grid with icons
- Grouped categories

Skills:
- Test Automation: Selenium, Cypress, Playwright, Appium
- Programming: JavaScript, TypeScript, Java, C#, SQL
- Frameworks/Tools: .NET, NUnit, Azure DevOps, BrowserStack, Git
- Practices: Agile, Cross-platform testing
- Others: AI tools, automation frameworks

Make it visually appealing and organized.

---

### 6. CONTACT SECTION
Title: "Contact Me"

Include:
- Email: zmn.guillermo@gmail.com
- Phone: +63 962 233 9810
- LinkedIn: https://www.linkedin.com/in/zyguillermo/

Add:
- Download CV button (placeholder link)
- Simple contact form:
  - Name
  - Email
  - Message
  - Submit button (no backend needed yet)

---

## ADDITIONAL REQUIREMENTS
- Use reusable components (Header, Section, Card, etc.)
- Use Tailwind properly (no messy inline styles beyond utility classes)
- Use Framer Motion for subtle animations (fade-in, slide-up)
- Ensure spacing and layout consistency
- Write clean and readable code

---

## OUTPUT EXPECTATION
- Generate the main page layout (app/page.tsx)
- Create reusable components where needed
- Include basic styling and structure
