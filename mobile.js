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