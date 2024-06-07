export function scrollToSection(event) {
    event.preventDefault();
    const sectionId = '#' + event.currentTarget.getAttribute('data-section');
    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
}