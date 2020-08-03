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
    { title: 'JS Tabs', image: 'projectjs.png', html: true, scss: true, js: true, link: 'https://github.com/Thundiverter/js-tabs' },
    { title: 'Thundiverter.github.io', image: 'project3.png', desc: 'My website. The one you are currently watching', html: true, scss: true, js: true, vue: true,
        link: 'https://github.com/Thundiverter/thundiverter.github.io', pin: true },
    { title: 'Minecraft Quick Guide', image: 'project2.png', desc: 'All potion recipes and enchantments in a table', html: true, scss: true,
        link: 'https://github.com/Thundiverter/minecraft-quick-guide', pin: true },
    { title: 'Box-shadow Generator', image: 'project1.png', desc: 'Visual CSS box-shadow generator', html: true, scss: true, js: true,
        link: 'https://github.com/Thundiverter/box-shadow-generator', pin: true }
];

let app = new Vue ({
    el: '#projectsList',
    data: {
        projects: projectsList
    }
})


/* Project - categories */