import './style.css';
import mainImage from "./siomaikingsmb_bg.jpg"
import siomaikingLogo from "./siomaiking_logo.png";
import menu from "./menu_icon.svg"
import siomai from "./siomai4.jpg"
import ricewdrink_dinein from "./wricedrink_dinein.jpg"

const mainContent = () => {
    
    // contains main content of the page
    // gets altered within tab change
    const element = document.createElement("div");
    // element.innerHTML = 'Restaurant Page'
    element.classList.add('main-content')
    element.setAttribute("id", 'content')

    return element
}

const header = () => {
    
    const header = document.createElement('header') ;
    header.classList.add('header')
    
    const logoText = document.createElement('h1');
    // logoText.innerHTML = "Siomai King"
    logoText.classList.add('logo-text') 
    
    const logoImgContainer = document.createElement('div');
    logoImgContainer.classList.add('logo-img-cont')

    const drawerButton= new Image();
    drawerButton.src = menu
    drawerButton.setAttribute("alt", "drawer");


    const logoImg = new Image()
    logoImg.src = siomaikingLogo
    logoImg.setAttribute('alt','logo header')
    
    const logoSubTxt = document.createElement('p');
    logoSubTxt.classList.add('logo-sub-txt')
    logoSubTxt.innerHTML = 'San Miguel, Bulacan';
    
    logoImgContainer.appendChild(logoImg)
    logoImgContainer.appendChild(logoSubTxt);
    header.appendChild(logoImgContainer)
    header.appendChild(logoText)
    header.appendChild(drawerButton);

    return header
}

const homePage = () => {
    
    // main content 
    const mainContent = document.querySelector('#content')

    const restaurantLogoContainer = document.createElement("div");
    restaurantLogoContainer.classList.add('restaurant-logo-container')

    const homePageMainContainer = document.createElement('div');
    // main bg image container
    const homeBackgroundImgContainer = document.createElement('div');
    homeBackgroundImgContainer.classList.add('home-background-img-cont')    

    // main bg image
    const homeImgContainer = document.createElement('div');
    homeImgContainer.classList = 'home-img-cont'
    
    const homeBackgroundImg = new Image();
    homeBackgroundImg.src = mainImage
    homeBackgroundImg.setAttribute("alt", "home background");
    
    const mainHookText2 = document.createElement("p");

    mainHookText2.innerHTML = 'We serve fresh, everyday.'
    mainHookText2.classList.add('main-hook-text-2')


    // 
    homeImgContainer.appendChild(homeBackgroundImg)
    
    
    // image main text
    const hookPosition = document.createElement('div');
    hookPosition.classList = 'hook-pos'

    const hookContainer = document.createElement('div');
    hookContainer.classList.add("hook-container")
    
    
    const mainHookText = document.createElement('p');
    mainHookText.innerHTML = 'Home of the famous'
    mainHookText.classList.add('main-hook-text')
    
    const productHookText = document.createElement('p');
    productHookText.innerHTML = 'Savory Siomai & Siopao'
    productHookText.classList.add("product-hook-text")

    const orderNowBtn = document.createElement("button");
    orderNowBtn.innerHTML = 'Order Now'
    orderNowBtn.classList.add('button-template') 
    orderNowBtn.setAttribute('id', 'order-now')
    
    

    hookPosition.appendChild(hookContainer)


    const siomaiBackgroundImageContainer = document.createElement('div');
    siomaiBackgroundImageContainer.classList = 'siomai-bg-img-cont'
    
    
    const siomaiBackgroundImage = new Image()
    siomaiBackgroundImage.src = siomai;
    siomaiBackgroundImage.setAttribute("alt", "siomai background");
    
    siomaiBackgroundImageContainer.appendChild(siomaiBackgroundImage);
    siomaiBackgroundImageContainer.appendChild(hookPosition);
    

    
    mainContent.appendChild(siomaiBackgroundImageContainer)
    
    
    // special promo box 
    
    const promoImg = new Image()
    promoImg.src = ricewdrink_dinein
    promoImg.setAttribute('alt','promo-1')
    

    const specialPromoBoxContainer = document.createElement('div');
    specialPromoBoxContainer.classList = ("special-promo-cont")

    const promoHeaderText = document.createElement('p');
    promoHeaderText.innerHTML = 'SPECIAL PROMO'
    promoHeaderText.classList.add('promo-header-text')
    
    
    const promoSubText = document.createElement('p');
    const promoSubTextSpan = document.createElement('span');
    promoSubTextSpan.innerHTML = 'P25'
    

    promoSubText.classList.add('promo-sub-text')
    
    promoSubText.innerHTML = 'ADD P25 FOR RICE AND DRINK'
    
    // imageMainText.innerHTML = 'Ang Hari ng Siomai'
    
    // append all elements to main
    
    hookContainer.appendChild(mainHookText)
    hookContainer.appendChild(productHookText)
    hookContainer.appendChild(orderNowBtn)
    
    specialPromoBoxContainer.appendChild(promoHeaderText)
    specialPromoBoxContainer.appendChild(promoImg)
    specialPromoBoxContainer.appendChild(promoSubText)
    

    
    
    
    // homeBackgroundImgContainer.appendChild(hookContainer)
    homeBackgroundImgContainer.appendChild(specialPromoBoxContainer)
    homeBackgroundImgContainer.appendChild(homeImgContainer)


    homePageMainContainer.appendChild(homeBackgroundImgContainer)
    mainContent.appendChild(homeBackgroundImgContainer)
}

let pageToShow = 'home'



document.body.appendChild(header())
document.body.appendChild(mainContent())

switch (pageToShow) {
    case "home":
        console.log('screen to show is home!')

        homePage()
        break
    
    case "menu":
        console.log('screen to show is home!')
        break

    case "about":
        console.log('screen to show is home!')
        break
}



// document.mainContent.appendChild(homePage)



