function initAccordions() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    if(!accordionItems.length) {
        return;
    }

    function toggleAccordion(content, header) {
        const accordionType = header.getAttribute('data-accordion-type');

        if(!accordionType){
            const icon = header.querySelector('img')
            
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
            icon.classList.toggle('black-filter');
            header.classList.toggle('text-green');

        } else if(accordionType === 'filter') {
            const icon = header.querySelector('img')
            const headerClasses = ['!bg-green', '!text-white'];

            content.classList.toggle('hidden');
            icon.classList.toggle('!rotate-[-90deg]');
            icon.classList.toggle('white-filter');

            headerClasses.forEach(className => {
                header.classList.toggle(className);
            });
            

        }


    }

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');

        header.addEventListener('click', () => {
            toggleAccordion(content, header);
        });
    });
}

export { initAccordions };
