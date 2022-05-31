let jQ = $.noConflict();

let features = document.getElementById('features');
let featuresList = jQ("#featuresList");
let company = document.getElementById('company');
let companyList = jQ("#companyList");
let featuresArrow = document.getElementById('featuresArrow');
let companyArrow = document.getElementById('companyArrow');

function showFeatures() {
    if(featuresList.css('display') == '' || featuresList.css('display') == 'none'){
        featuresList.slideDown(300);
        featuresArrow.setAttribute('src', './assets/icon-arrow-up.svg');
        companyList.slideUp(1);
        companyArrow.setAttribute('src', './assets/icon-arrow-down.svg');
    }else{
        featuresList.slideUp(300);
        featuresArrow.setAttribute('src', './assets/icon-arrow-down.svg');
    }
}

function showCompany() {
    if(companyList.css('display') == '' || companyList.css('display') == 'none'){
        companyList.slideDown(300);
        companyArrow.setAttribute('src', './assets/icon-arrow-up.svg');
        featuresList.slideUp(1);
        featuresArrow.setAttribute('src', './assets/icon-arrow-down.svg');
    }else{
        companyList.slideUp(300);
        companyArrow.setAttribute('src', './assets/icon-arrow-down.svg');
    }
}

function hideMenus(){
    featuresList.slideUp(1);
    featuresArrow.setAttribute('src', './assets/icon-arrow-down.svg');
    companyList.slideUp(1);
    companyArrow.setAttribute('src', './assets/icon-arrow-down.svg');
}

features.addEventListener('click', showFeatures);
company.addEventListener('click', showCompany);
document.body.addEventListener('click', (event) => {
    if(event.target.id != 'features' && event.target.id != 'company'){
        hideMenus();
    }
});

//-------------------------- MOBILE VERSION ------------------------------------

let menuScreen = jQ('.menu-screen');
let mobileFeatures = document.getElementById('mobileFeatures');
let mobileFeaturesList = document.getElementById('mobileFeaturesList');
let mobileCompany = document.getElementById('mobileCompany');
let mobileCompanyList = document.getElementById('mobileCompanyList');
let mobileFeaturesArrow = document.getElementById('mobileFeaturesArrow');
let mobileCompanyArrow = document.getElementById('mobileCompanyArrow');
let openMenu = document.getElementById('openMenu');
let closeMenu = document.getElementById('closeMenu');

function showMenu(){
    menuScreen.css('display', 'flex').fadeOut(0).fadeIn(200);
}

function hideMenu(){
    menuScreen.fadeOut(0);
}

function showMobileFeatures(){
    if(mobileFeaturesList.style.display == '' || mobileFeaturesList.style.display == 'none'){
        mobileFeaturesList.style.display = 'flex';
        mobileFeaturesArrow.setAttribute('src', './assets/icon-arrow-up.svg');
    }else{
        mobileFeaturesList.style.display = 'none';
        mobileFeaturesArrow.setAttribute('src', './assets/icon-arrow-down.svg');
    }
}

function showMobileCompany(){
    if(mobileCompanyList.style.display == '' || mobileCompanyList.style.display == 'none'){
        mobileCompanyList.style.display = 'flex';
        mobileCompanyArrow.setAttribute('src', './assets/icon-arrow-up.svg');
    }else{
        mobileCompanyList.style.display = 'none';
        mobileCompanyArrow.setAttribute('src', './assets/icon-arrow-down.svg');
    }
}

openMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);
mobileFeatures.addEventListener('click', showMobileFeatures);
mobileCompany.addEventListener('click', showMobileCompany);
