// All - Websites - Tools - Design - Other
// Categories: cat_websites cat_tools cat_design cat_games cat_other

let cat_websites = document.getElementsByClassName('cat_websites');
let cat_tools = document.getElementsByClassName('cat_tools');
let cat_design = document.getElementsByClassName('cat_design');
let cat_other = document.getElementsByClassName('cat_other');

function show_all() { cat_websites.style.display = ''; cat_tools.style.display = ''; cat_design.style.display = ''; cat_other.style.display = ''; }
function hide_all() { cat_websites.style.display = 'none'; cat_tools.style.display = 'none'; cat_design.style.display = 'none'; cat_other.style.display = 'none'; }

hide_all()