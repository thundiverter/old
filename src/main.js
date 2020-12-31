/* logo */
let d = new Date();
let logo = document.querySelector('.logo');
// New Year
if ((d.getMonth() == 11 && d.getDate() >= 20) || (d.getMonth() == 0 && d.getDate() <= 6)) {
    logo.src = 'img/nylogo.svg';
}
// ~._.~
if (d.getMonth() == 4 && d.getDate() == 23) {
    logo.src = 'img/bdaylogo.svg';
}


/* projects */
let list_projects;
let projectTab = 0;

/* tab buttons */
// nodelist of buttons
let ptbtn = document.querySelectorAll('.project-cats button');
projectTab = ptbtn[0].dataset.id;
ptbtn[0].classList = 'current';

// get & change tab id
for (let i of ptbtn) {
    i.addEventListener('click', () => {
        projectTab = i.dataset.id;

        for (let j of ptbtn) {
            j.classList = '';
        }

        i.classList = 'current';
        updateTabs();
        //genTab(list_projects, 0);
    })
}

// loads json
function loadData(link) {
    fetch(link)
    .then(response => response.json())
    .then(commits => {
        list_projects = commits.reverse();
        //console.log(list_projects);
    })
    .then(() => {
        genAllTabs();
    });
}
loadData('data/projects.json');

/* generates tabs */
// generates a card
function genCard(obj) {
    let res = '<a class="projectbox" href="' + obj.url + '">';
    res += '<div id="img" style="background-image: url(\'img/' + obj.img + '\')"></div>';
    res += '<h3>' + obj.t + '</h3>';
    if (obj.desc) { res += '<p>' + obj.desc + '</p>' }

    // tags
    res += '<div class="tags">';
    if (obj.html) { res += '<i-html/>' }
    if (obj.css) { res += '<i-css/>' }
    if (obj.scss) { res += '<i-scss/>' }
    if (obj.js) { res += '<i-js/>' }
    if (obj.py) { res += '<i-py/>' }
    if (obj.gdscript) { res += '<i-gdscript/>' }
    if (obj.md) { res += '<i-md/>' }
    if (obj.vue) { res += '<i-vue/>' }
    res += '</div>';

    return res;
}

// // // // //
// list of all tabs
let plist = document.querySelectorAll('#projectsListElem');
//console.log(plist);
plist[projectTab].style.display = 'flex';

// hides all tabs and shows the chosen one
function updateTabs() {
	for (let i of plist) {
		i.style.display = 'none';
	}
	plist[projectTab].style.display = 'flex';
	//console.log(projectTab);
}

// generates a tab
function genTab(objs, id) {
	let res = '';
	for (let j of objs) {
        if (id == 0 && !j.pin) { continue; }
        if (id == 2 && !j.html) { continue; }
        if (id == 3 && !j.py) { continue; }
        if (id == 4 && (j.html || j.py)) { continue; }
        res += genCard(j);
    }
    return res;
}

// generates all tabs
function genAllTabs() {
    let index = 0;
    for (let i of plist) {
        i.innerHTML = genTab(list_projects, index);
        //console.log(i.innerHTML);
        index++;
    }
}