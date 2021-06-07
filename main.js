let filter = document.getElementById('filter-button');
let search = document.getElementById('search-button');
let profile = document.getElementById('profile-button');



filter.addEventListener("click", (e) => {
    alert('Test');
    let addFilters = document.getElementById('filters-wrapper');
    addFilters.setAttribute("style", "display:block;");
});

search.addEventListener("click", (e) => {
    alert('Test');
    let addFilters = document.getElementById('search-wrapper');
    addFilters.setAttribute("style", "display:block;");
});

profile.addEventListener("click", (e) => {
    alert('Test');
    let addFilters = document.getElementById('profile-wrapper');
    addFilters.setAttribute("style", "display:flex;");
});

