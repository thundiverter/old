// HOLIDAYS
let date = new Date();
let date_day = date.getDate();
let date_month = date.getMonth();
let logo = document.querySelector('.logo');

function changeLogo() {
    // New Year
    if (date_month == 11 && date_day >= 20) {
        logo.src = 'img/nylogo.svg';
    }
    if (date_month == 0 && date_day <= 6) {
        logo.src = 'img/nylogo.svg';
    }

    // ~._.~
    if (date_month == 4 && date_day == 23) {
        logo.src = 'img/bdaylogo.svg';
    }
}
changeLogo();

// PROJECTS
let list_projects;
let projectTab = 0;

function load(link) {
    fetch(link)
    .then(response => response.json())
    .then(commits => {
        list_projects = commits.reverse();
    })
    .then(()=>{projectTabF(list_projects, projectTab)});
}
load('data/projects.json');



let ptbtn = document.querySelectorAll('.project-cats button');


ptbtn[projectTab].classList = 'current';
// get & change tab id
for (let i of ptbtn) {
    i.addEventListener('click', () => {
        projectTab = i.dataset.id;
        for (let j of ptbtn) {
            j.classList = '';
        }
        ptbtn[projectTab].classList = 'current';
        
        projectTabF(list_projects, projectTab);
    });
}

// generates a card
function projectBox(object) {
    let res;
    let obj = object;
    let title = obj.title;
    let img = obj.image;
    let desc = obj.desc;
    let link = obj.link;
    // tags
    let i_html = obj.html;
    let i_css = obj.css;
    let i_scss = obj.scss;
    let i_js = obj.js;
    let i_py = obj.py;
    let i_gdscript = obj.gdscript;
    let i_md = obj.md;
    let i_vue = obj.vue;

    res = '<a class="projectbox" href="' + link + '">';
    if (img) { res += '<div id="img" style="background-image: url(\'img/' + img + '\')"></div>' }
    else { res += '<h3>project3.png</h3>' }
    if (title) { res += '<h3>' + title + '</h3>' }
    if (desc) { res += '<p>' + desc + '</p>' }
    res += '<div class="tags">';

    if (i_html) { res += '<i-html/>' }
    if (i_css) { res += '<i-css/>' }
    if (i_scss) { res += '<i-scss/>' }
    if (i_js) { res += '<i-js/>' }
    if (i_py) { res += '<i-py/>' }
    if (i_gdscript) { res += '<i-gdscript/>' }
    if (i_md) { res += '<i-md/>' }
    if (i_vue) { res += '<i-vue/>' }

    res += '</div></a>';

    return res;
}
projectBox({1:'1', 2:'3', 3: 'na'});

let projectsListElem = document.querySelector('#projectsListElem');
// generates a tab
function projectTabF(objects) {
    let objsorted;

    projectsListElem.innerHTML = '';
    let objs = objects;
    for (let i of objs) {
        if (projectTab == 0 && !i.pin) { continue; }
        if (projectTab == 2 && !i.html) { continue; }
        if (projectTab == 3 && !i.py) { continue; }
        if (projectTab == 4 && (i.html || i.py)) { continue; }

        projectsListElem.innerHTML += projectBox(i);
    }
}