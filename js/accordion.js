function initAccordions() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');

        header.addEventListener('click', () => {
            content.classList.toggle('hidden');
            header.querySelector('img').classList.toggle('rotate-180');
            header.querySelector('img').classList.toggle('black-filter');
            header.classList.toggle('text-green');
        });
    });
}

export { initAccordions };
