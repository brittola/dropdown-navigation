let features = document.getElementById('features');
let featuresList = document.getElementById('featuresList');
let company = document.getElementById('company');
let companyList = document.getElementById('companyList');

function showFeatures() {
    if(featuresList.style.display == '' || featuresList.style.display == 'none'){
        featuresList.style.display = 'block';
        document.getElementById('featuresArrow').setAttribute('src', './assets/icon-arrow-up.svg');
        companyList.style.display = 'none';
        document.getElementById('companyArrow').setAttribute('src', './assets/icon-arrow-down.svg');
    }else{
        featuresList.style.display = 'none';
        document.getElementById('featuresArrow').setAttribute('src', './assets/icon-arrow-down.svg');
    }
}

function showCompany() {
    if(companyList.style.display == '' || companyList.style.display == 'none'){
        companyList.style.display = 'block';
        document.getElementById('companyArrow').setAttribute('src', './assets/icon-arrow-up.svg');
        featuresList.style.display = 'none';
        document.getElementById('featuresArrow').setAttribute('src', './assets/icon-arrow-down.svg');
    }else{
        companyList.style.display = 'none';
        document.getElementById('companyArrow').setAttribute('src', './assets/icon-arrow-down.svg');
    }
}

function hideMenus(){
    featuresList.style.display = 'none';
    document.getElementById('featuresArrow').setAttribute('src', './assets/icon-arrow-down.svg');
    companyList.style.display = 'none';
    document.getElementById('companyArrow').setAttribute('src', './assets/icon-arrow-down.svg');
}

features.addEventListener('click', showFeatures);
company.addEventListener('click', showCompany);
document.body.addEventListener('click', (event) => {
    if(event.target.id != 'features' && event.target.id != 'company'){
        hideMenus();
    }
});

//-------------------------- MOBILE VERSION ------------------------------------

let menuScreen = document.querySelector('.menu-screen');
let mobileFeatures = document.getElementById('mobileFeatures');
let mobileFeaturesList = document.getElementById('mobileFeaturesList');
let mobileCompany = document.getElementById('mobileCompany');
let mobileCompanyList = document.getElementById('mobileCompanyList');
let openMenu = document.getElementById('openMenu');
let closeMenu = document.getElementById('closeMenu');

function showMenu(){
    menuScreen.style.display = 'flex';
}

function hideMenu(){
    menuScreen.style.display = 'none';
}

function showMobileFeatures(){
    if(mobileFeaturesList.style.display == '' || mobileFeaturesList.style.display == 'none'){
        mobileFeaturesList.style.display = 'flex';
        document.getElementById('mobileFeaturesArrow').setAttribute('src', './assets/icon-arrow-up.svg');
    }else{
        mobileFeaturesList.style.display = 'none';
        document.getElementById('mobileFeaturesArrow').setAttribute('src', './assets/icon-arrow-down.svg');
    }
}

function showMobileCompany(){
    if(mobileCompanyList.style.display == '' || mobileCompanyList.style.display == 'none'){
        mobileCompanyList.style.display = 'flex';
        document.getElementById('mobileCompanyArrow').setAttribute('src', './assets/icon-arrow-up.svg');
    }else{
        mobileCompanyList.style.display = 'none';
        document.getElementById('mobileCompanyArrow').setAttribute('src', './assets/icon-arrow-down.svg');
    }
}

openMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);
mobileFeatures.addEventListener('click', showMobileFeatures);
mobileCompany.addEventListener('click', showMobileCompany);
