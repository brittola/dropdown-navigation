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

//-------------------------- MOBILE VERSION ------------------------------------

let menuScreen = jQ('.menu-screen');
let mobileFeatures = jQ('#mobileFeatures');
let mobileFeaturesList = jQ('#mobileFeaturesList');
let mobileCompany = jQ('#mobileCompany');
let mobileCompanyList = jQ("#mobileCompanyList");
let mobileFeaturesArrow = jQ('#mobileFeaturesArrow');
let mobileCompanyArrow = jQ('#mobileCompanyArrow');
let openMenu = jQ('#openMenu');
let closeMenu = jQ('#closeMenu');

function showMenu(){
    menuScreen.css('display', 'flex').fadeOut(0).fadeIn(200);
}

function hideMenu(){
    menuScreen.fadeOut(0);
}

function showMobileFeatures(){
    if(mobileFeaturesList.css('display') == '' || mobileFeaturesList.css('display') == 'none'){
        mobileFeaturesList.slideDown(300);
        mobileFeaturesArrow.attr('src', './assets/icon-arrow-up.svg');
    }else{
        mobileFeaturesList.slideUp(300);
        mobileFeaturesArrow.attr('src', './assets/icon-arrow-down.svg');
    }
}

function showMobileCompany(){
    if(mobileCompanyList.css('display') == '' || mobileCompanyList.css('display') == 'none'){
        mobileCompanyList.slideDown(300);
        mobileCompanyArrow.attr('src', './assets/icon-arrow-up.svg');
    }else{
        mobileCompanyList.slideUp(300);
        mobileCompanyArrow.attr('src', './assets/icon-arrow-down.svg');
    }
}

openMenu.click(showMenu);
closeMenu.click(hideMenu);
mobileFeatures.click(showMobileFeatures);
mobileCompany.click(showMobileCompany);
