// Popup handling class
class PopupManager {
    constructor(popupId) {
        this.popup = document.getElementById(popupId);
        this.showClass = 'show';
        this.initialize();
    }

    initialize() {
        // Close popup when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target === this.popup) {
                this.hide();
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hide();
            }
        });
    }

    show() {
        // Force reflow to ensure animation starts
        this.popup.style.display = 'block';
        void this.popup.offsetWidth;
        this.popup.classList.add(this.showClass);
    }

    hide() {
        this.popup.classList.remove(this.showClass);
        // Wait for animation to complete before hiding
        setTimeout(() => {
            this.popup.style.display = 'none';
        }, 300);
    }

    toggle() {
        if (this.popup.classList.contains(this.showClass)) {
            this.hide();
        } else {
            this.show();
        }
    }
}

// Initialize popup manager
const betslipPopup = new PopupManager('pop_up_w');

// Export functions for HTML use
window.showPopup = () => betslipPopup.show();
window.hidePopup = () => betslipPopup.hide();
window.togglePopup = () => betslipPopup.toggle(); 