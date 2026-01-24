function adjustSVGWidth(){
    const svgElement = document.querySelector('.svg-nav');
    if(!svgElement) return;
    if(window.innerWidth < 468){
        svgElement.setAttribute('width', '322');
    }
    else {
        svgElement.setAttribute('width', '430');
    }
}

// Запускаем при загрузке страницы
window.addEventListener('load', adjustSVGWidth);

// Запускаем при изменении размера окна
window.addEventListener('resize', adjustSVGWidth);