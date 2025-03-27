function navigateOnClick(elementClass, url) {
    if (window.innerWidth < 950) {
        console.log(`Screen width is less than 950px. Navigation disabled for class "${elementClass}".`);
        return;
    }

    const elements = document.getElementsByClassName(elementClass);
    if (elements.length > 0) {
        Array.from(elements).forEach((element) => {
            element.addEventListener('click', () => {
                window.open(url, '_blank');
            });
        });
    } else {
        console.error(`Elements with class "${elementClass}" not found.`);
    }
}

navigateOnClick('sales-hub', 'https://sales-hub.com/');
navigateOnClick('kavak-warranties', 'https://www.kavak.com/mx/lp/cuida-tu-auto/');
navigateOnClick('kavak', 'https://www.kavak.com/mx/');
navigateOnClick('widestudio', 'https://www.linkedin.com/company/widestudio-mx/about/');
navigateOnClick('macmillan', 'https://www.macmillanprofesional.com.mx/');
navigateOnClick('ixi', 'https://ixi.studio/');
navigateOnClick('loto-audio', 'https://lotoaudio.com.mx/index.html');
navigateOnClick('zombie', 'https://ricardo-maguz.github.io/I-AM-ZOMBIE/');
navigateOnClick('dental-macplan', 'https://www.dentalmacplan.com/');