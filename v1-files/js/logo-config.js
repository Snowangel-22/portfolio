// Central configuration for logo title
const LOGO_CONFIG = {
    title: "Angela",
    icon: "uil uil-user"
};

// Function to update logo on page load
function updateLogo() {
    const logoElements = document.querySelectorAll('.navbar-brand');
    logoElements.forEach(logo => {
        const icon = logo.querySelector('i');
        if (icon) {
            icon.className = LOGO_CONFIG.icon;
        }
        // Update text content (remove icon text and keep only the title)
        const textNodes = Array.from(logo.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
        textNodes.forEach(node => {
            if (node.textContent.trim()) {
                node.textContent = ' ' + LOGO_CONFIG.title;
            }
        });
    });
}

// Update logo when DOM is loaded
document.addEventListener('DOMContentLoaded', updateLogo);
