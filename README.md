# 🌟 SkillSwap

### 🔗 Live Site: [https://skill-swap-1.netlify.app/](https://skill-swap-1.netlify.app/)

---

## 🧠 Overview

**SkillSwap** is a modern, community-driven platform designed to help people **learn, teach, and exchange skills** with others. Whether you’re a coder, designer, cook, or musician — SkillSwap connects you with learners and teachers around you.

---

## 🚀 Key Features

- 🔐 **User Authentication** with Firebase (Email/Password + Google Login)
- 🧑‍🎓 **Skill Sharing System** – Users can browse, learn, and teach skills
- 🏆 **Top Rated Skills Section** – Displays trending or highly rated skills
- 💬 **Dynamic User Profile** – Shows personalized information and skills
- 🎨 **Responsive & Modern UI** built with Tailwind CSS
- ✨ **Smooth Animations** using Framer Motion
- ⚡ **Protected Routes** – Only logged-in users can access certain pages
- 🔄 **Auto Image Banner Slider** – Auto transitions through featured skills
- 📱 **Fully Responsive** – Works perfectly on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Category       | Technology Used       |
| -------------- | --------------------- |
| Frontend       | React.js              |
| Routing        | React Router          |
| Styling        | Tailwind CSS, DaisyUI |
| Animations     | Framer Motion         |
| Authentication | Firebase Auth         |
| Notifications  | React Hot Toast       |
| Deployment     | Netlify               |

---

## 🧩 Project Structure

src/
┣ 📂 assets/ # Logo, images, icons
┣ 📂 components/ # Reusable components (Navbar, Banner, Cards, etc.)
┣ 📂 hooks/ # Custom hooks (e.g., useCard)
┣ 📂 pages/ # Page components (Home, About, Profile, Auth, etc.)
┣ 📂 Provider/ # AuthProvider context setup
┣ 📜 App.jsx # Main application component
┣ 📜 main.jsx # Entry point
┗ 📜 index.css # Global styles

````


---

## 🔧 Installation & Setup

If you want to run this project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-username/skillswap.git

# 2️⃣ Navigate to the project directory
cd skillswap

# 3️⃣ Install dependencies
npm install

# 4️⃣ Add your Firebase config in .env file
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
...

# 5️⃣ Run the project
npm run dev


````

Then open your browser at http://localhost:5173

🔥 Core Components

NavBar → Dynamic navigation with user info & login/logout handling

Banner → Auto-sliding hero banner with overlay text

TopRatedSkills → Animated cards showcasing trending skills

About Page → Animated sections with “Why Choose Us” highlights

Auth Pages (Login/Register) → Firebase authentication + validation

My Profile Page → Displays logged-in user details

🧑‍💻 Developer Info

Author: A H Arman Hussain
Project: SkillSwap
Live URL: https://skill-swap-1.netlify.app/

💬 Feedback & Support

Have feedback or want to contribute?
Open an issue or contact the developer directly.

“Learn. Teach. Grow — Together.” 🌱
