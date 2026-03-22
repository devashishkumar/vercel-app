# Ashish Kumar - Personal Portfolio

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Features a dynamic GitHub profile integration, skills showcase, project gallery, and contact information with dark/light mode toggle.

## 🚀 Features

- **Dynamic GitHub Integration**: Automatically fetches and displays GitHub profile information and top repositories
- **Dark/Light Mode Toggle**: Seamless theme switching with localStorage persistence
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Skills Showcase**: Grid layout displaying technical skills and technologies
- **Project Gallery**: Interactive repository cards with links to GitHub
- **Contact Section**: Professional contact information layout
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Animations**: Hover effects and transitions throughout

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Heroicons (SVG)
- **API**: GitHub REST API
- **Deployment**: Vercel

## 📁 Project Structure

```
vercel-app/
├── index.html      # Main HTML structure and layout
├── app.js          # Client-side logic and GitHub API integration
└── README.md       # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Internet connection (for GitHub API calls)

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd vercel-app
   ```

2. Open `index.html` in your browser:
   ```bash
   # Using Python (if available)
   python -m http.server 8000

   # Or simply open index.html in your browser
   ```

3. The website will load with the GitHub profile data for the configured user.

### Customization

#### Change GitHub Username

Edit the `username` variable in `app.js`:
```javascript
const username = "your-github-username";
```

#### Modify Skills

Update the skills grid in `index.html` within the `#skills` section.

#### Update Contact Information

Replace the placeholder content in the `#contact` section of `index.html` with your actual contact details.

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Access your live portfolio at the provided Vercel URL

### Other Platforms

This is a static website that can be deployed to:
- GitHub Pages
- Netlify
- Firebase Hosting
- Any static web host

## 📊 GitHub API Usage

- **Rate Limits**: 60 requests per hour for unauthenticated requests
- **Data Fetched**:
  - User profile (avatar, name, bio, stats)
  - Top 12 repositories (sorted by recent updates)
- **Error Handling**: Basic error handling included

## 🎨 Customization Options

- **Themes**: Modify Tailwind classes for custom color schemes
- **Layout**: Adjust grid layouts and spacing
- **Animations**: Customize hover effects and transitions
- **Content**: Update all text content and links

## 📝 Notes

- Built with modern web standards
- No build process required
- Lightweight and fast loading
- SEO-friendly structure
- Accessible design patterns

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## License

MIT
