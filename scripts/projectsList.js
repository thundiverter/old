'use strict';

// List of projects

/*
    - title
    - image
    - desc
    - tags: html, css, scss, js, vue, cpp, gdscript, py
    - link
    - pin ('true' to show on the main page; 'false' to show on the projects page only)
*/

let projectsList = [
    { title: 'Box-shadow Generator', image: 'project1.png', desc: 'Visual CSS box-shadow generator', html: true, scss: true, js: true,
        link: 'https://github.com/Thundiverter/box-shadow-generator', pin: true,
        desc_ru: 'Визуальный генератор CSS-свойства "box shadow"' },
    { title: 'Minecraft Quick Guide', image: 'project2.png', desc: 'All potion recipes in a table', html: true, scss: true,
        link: 'https://github.com/Thundiverter/minecraft-quick-guide', pin: true,
        desc_ru: 'Все рецепты зелий в виде таблицы' },
    { title: 'Thundiverter.github.io', image: 'project3.png', desc: 'My website. The one you are currently watching', html: true, scss: true, js: true, vue: true,
        link: 'https://github.com/Thundiverter/thundiverter.github.io', pin: true,
        desc_ru: 'Мой сайт. Тот, на который вы сейчас смотрите.' },
    { title: 'JS Tabs', image: 'projectjs.png', html: true, scss: true, js: true, link: 'https://github.com/Thundiverter/js-tabs', },
    { title: 'JS Get Key Info', image: 'js-get-key-info.png', html: true, scss: true, js: true, link: 'https://github.com/Thundiverter/js-get-key-info' },
    { title: 'JS Animated Menu', image: 'js-animated-menu.png', html: true, scss: true, js: true, link: 'https://github.com/Thundiverter/js-animated-menu' },
    { title: 'GetSym', image: 'py-getsym.png', py: true, link: 'https://github.com/Thundiverter/GetSym' },
];

let app = new Vue ({
    el: '#projectsList',
    data: {
        projects: projectsList.reverse()
    }
})


/* Project - categories */