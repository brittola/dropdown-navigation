let jQ = $.noConflict();

let features = jQ('#features');
let featuresList = jQ("#featuresList");
let company = jQ('#company');
let companyList = jQ("#companyList");
let featuresArrow = jQ('#featuresArrow');
let companyArrow = jQ('#companyArrow');

function showFeatures() {
    if(featuresList.css('display') == '' || featuresList.css('display') == 'none'){
        featuresList.slideDown(300);
        featuresArrow.attr('src', './assets/icon-arrow-up.svg');
        companyList.slideUp(1);
        companyArrow.attr('src', './assets/icon-arrow-down.svg');
    }else{
        featuresList.slideUp(300);
        featuresArrow.attr('src', './assets/icon-arrow-down.svg');
    }
}

function showCompany() {
    if(companyList.css('display') == '' || companyList.css('display') == 'none'){
        companyList.slideDown(300);
        companyArrow.attr('src', './assets/icon-arrow-up.svg');
        featuresList.slideUp(1);
        featuresArrow.attr('src', './assets/icon-arrow-down.svg');
    }else{
        companyList.slideUp(300);
        companyArrow.attr('src', './assets/icon-arrow-down.svg');
    }
}

function hideMenus(){
    featuresList.slideUp(1);
    featuresArrow.attr('src', './assets/icon-arrow-down.svg');
    companyList.slideUp(1);
    companyArrow.attr('src', './assets/icon-arrow-down.svg');
}

features.click(showFeatures);
company.click(showCompany);

document.body.addEventListener('click', (event) => {
    if(event.target.id != 'features' && event.target.id != 'company'){
        hideMenus();
    }
});
