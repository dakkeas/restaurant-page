import './style.css';
import mainImage from "./siomaikingsmb_bg.jpg"
import siomaikingLogo from "./siomaiking_logo.png";
import menu from "./menu_icon.svg"
import siomai from "./siomai4.jpg"
import ricewdrink_dinein from "./wricedrink_dinein.jpg"
import closeIcon from "./close.svg"
// siopao images 
import asadoSiopao from "./menu/asado.png";
import bolaBolaSiopao from "./menu/bola_bola.png";
import chickenSiopao from "./menu/chicken.png";
import spicyAsadoSiopao from "./menu/spicy_asado.png";
import combiSiopao from "./menu/combi.png"

// shanghai images

import japaneseSiomai from "./menu/japanese_siomai.jpg"
import shanghaiSiomai from "./menu/shanghai_siomai.jpg"
import hongkongSiomai from "./menu/hongkong_siomai.jpg"
import chickenSiomai from "./menu/chicken_siomai.png"


const mainContent = document.createElement("div");
mainContent.classList.add('main-content')
mainContent.setAttribute("id", 'content')

const openNav = () => {
    console.log('open navigation .....')
    console.log(document.querySelector('#side-bar'))
    const sideBar = document.querySelector('#side-bar')
    
    // show side bar 
    sideBar.style.width = "200px"
    // add darkness to background
    
    document.querySelector('#content').classList.toggle('fade')
    document.querySelector('#header').classList.toggle('fade')
    
}

const closeNav = () => {
    console.log('close navigation .....')
    document.querySelector('#side-bar').style.width = '0px'
    document.querySelector('#content').classList.toggle('fade')
    document.querySelector('#header').classList.toggle('fade')
}


const sideBarNav = () => {

    // ref for main content
    const mainContent = document.querySelector('#content') 
    
    
    // side bar container
    const sideBarNav = document.createElement("div")
    sideBarNav.classList = 'flex-column side-bar-container'
    sideBarNav.setAttribute('id', 'side-bar')
    
    //  nav element
    const navElement = document.createElement('nav');
    navElement.classList = 'flex-column'
    
    // close button element
    const closeDrawerBtnContainer = document.createElement("div");
    closeDrawerBtnContainer.classList = 'close-drawer-btn-container'
    const closeDrawerBtn = new Image();
    closeDrawerBtn.src = closeIcon
    closeDrawerBtn.setAttribute("alt", "close");
    
    closeDrawerBtnContainer.appendChild(closeDrawerBtn);
    sideBarNav.appendChild(closeDrawerBtnContainer);

    
    // navigation links; href
    const homeBtn = document.createElement('a')
    const menuBtn = document.createElement('a')
    const contactBtn = document.createElement('a')
    
    homeBtn.innerHTML = 'Home'
    menuBtn.innerHTML = 'Menu'
    contactBtn.innerHTML = 'Contact'

    // hide initial screens first on startup

    const homePage = document.querySelector('#home')
    const contactPage = document.querySelector('#contact')
    const menuPage = document.querySelector('#menu')
    // on click, refresh 
    // on click of a nav button, we check if we're at that page
    // if not, then we remove contents on the screen
    // we add the contents of that page

    // toggle function, if you call it, it adds the class. 
    // calling it again if the class has been added, it will remove it!

    homeBtn.onclick = function () { 
        if (document.querySelector('#home').classList.contains('not-visible')) {
            // if it is not visible 
            console.log('navigating to home page .....')
            
            // set other screens to hidden by toggling visibility!
            // if a screen already contains a not visible class, then leave it, else add it
            document.querySelector("#menu").classList.contains('not-visible') 
            ? null : document.querySelector('#menu').classList.toggle('not-visible')
            
            
            document.querySelector("#contact").classList.contains('not-visible') 
            ? null : document.querySelector('#contact').classList.toggle('not-visible')

        
            document.querySelector('#home').classList.toggle("not-visible")
        }
        closeNav()

        

    };
    menuBtn.onclick = function () { 

        console.log('navigating to menu page .....')

        if (document.querySelector('#menu').classList.contains('not-visible')) {
            console.log('navigating to home page .....')
            // if currently not on this page
            
            
            // if a screen already contains a not visible class, then leave it, else add it
            document.querySelector("#home").classList.contains('not-visible') 
            ? null : document.querySelector('#home').classList.toggle('not-visible')

            
            document.querySelector("#contact").classList.contains('not-visible') 
            ? null : document.querySelector('#contact').classList.toggle('not-visible')

            document.querySelector('#menu').classList.toggle("not-visible")
        }
        closeNav()
    };
        
    contactBtn.onclick = function () { 

        console.log('navigating to contact page .....')
        
        
        if (document.querySelector('#contact').classList.contains('not-visible')) {
            console.log('navigating to home page .....')
            // if currently not on this page
            
            // if a screen already contains a not visible class, then leave it, else add it
            document.querySelector("#menu").classList.contains('not-visible') 
            ? null : document.querySelector('#menu').classList.toggle('not-visible')
            
            
            document.querySelector("#home").classList.contains('not-visible') 
            ? null : document.querySelector('#home').classList.toggle('not-visible')
            
            document.querySelector('#contact').classList.toggle("not-visible")
        }
        closeNav()
    };
            
    
    navElement.appendChild(homeBtn);
    navElement.appendChild(menuBtn);
    navElement.appendChild(contactBtn);

    
    sideBarNav.appendChild(navElement)
    document.body.appendChild(sideBarNav)


    closeDrawerBtn.addEventListener('click', ()=> {
        closeNav()
        
    })
}

const footer = () => {
    // component for footer
    
    const textWrapper = document.createElement('div');
    const footer = document.createElement('footer')
    const text = document.createElement('p');
    textWrapper.classList = 'flex-column footer-text-wrapper'

    text.classList = 'footer-text'
    text.innerHTML = 'dakkeas'
    
    // footer > div > p
    footer.appendChild(textWrapper)
    textWrapper.appendChild(text)
    
    return footer
    
}

const header = () => {

    
    const header = document.createElement('header') ;
    header.classList.add('header')
    header.setAttribute('id', 'header')
    
    // container for logo 
    const logoImgContainer = document.createElement('div');
    logoImgContainer.classList.add('logo-img-cont')

    // image object for logo
    const logoImg = new Image()
    logoImg.src = siomaikingLogo
    logoImg.setAttribute('alt', 'logo header')

    // text below logo.
    const logoSubTxt = document.createElement('p');
    logoSubTxt.classList.add('logo-sub-txt')
    logoSubTxt.innerHTML = 'San Miguel, Bulacan';

    // drawer button for navigation
    const drawerButton= new Image();
    drawerButton.src = menu
    drawerButton.setAttribute("alt", "drawer");


    // append logo and sub text into image container
    logoImgContainer.appendChild(logoImg)
    logoImgContainer.appendChild(logoSubTxt);
    
    // header > logo image container & drawer button
    header.appendChild(logoImgContainer)
    header.appendChild(drawerButton);
    
    drawerButton.addEventListener('click', () => {
        // handles events of drawer click
        
        openNav()
        

    })
    return header
}

const homePage = () => {
    // components under home page screen 
    // sections of content is numbered 
    
    // reference for main content 
    const mainContent = document.querySelector('#content')

    // content 1

    const homeContentContainer1 = document.createElement('div');
    homeContentContainer1.classList = 'home-bg-cont-1'

    // siomai image object
    const siomaiBackgroundImage = new Image()
    siomaiBackgroundImage.src = siomai;
    siomaiBackgroundImage.setAttribute("alt", "siomai background");

    
    // sets an absolute position for hook text wrapper
    const hookPosition = document.createElement('div');
    hookPosition.setAttribute('id', "hook-pos")


    // hook text wrapper
    const hookContainer = document.createElement('div');
    hookContainer.classList.add("hook-container")
    
    // text elements 
    const mainHookText = document.createElement('p');
    mainHookText.innerHTML = 'Home of the famous'
    mainHookText.classList.add('main-hook-text')
    
    const productHookText = document.createElement('p');
    productHookText.innerHTML = 'Savory Siomai & Siopao'
    productHookText.classList.add("product-hook-text")

    // order now button
    const orderNowBtn = document.createElement("button");
    orderNowBtn.innerHTML = 'Order Now'
    orderNowBtn.classList.add('button-template') 
    orderNowBtn.setAttribute('id', 'order-now')

    hookContainer.appendChild(mainHookText)
    hookContainer.appendChild(productHookText)
    hookContainer.appendChild(orderNowBtn)
    
    
    // append elements to content 1
    hookPosition.appendChild(hookContainer)
    homeContentContainer1.appendChild(siomaiBackgroundImage);
    homeContentContainer1.appendChild(hookPosition);
    
    // content 2

    const homeContentContainer2= document.createElement('div');
    homeContentContainer2.classList.add('home-bg-cont-2')   

    const promoImg = new Image()
    promoImg.src = ricewdrink_dinein
    promoImg.setAttribute('alt', 'promo-1')


    const specialPromoBoxContainer = document.createElement('div');
    specialPromoBoxContainer.classList = ("special-promo-cont")

    const promoHeaderText = document.createElement('p');
    promoHeaderText.innerHTML = 'SPECIAL PROMO'
    promoHeaderText.classList.add('promo-header-text')


    const promoSubText = document.createElement('p');
    const promoSubTextSpan = document.createElement('span');
    promoSubTextSpan.innerHTML = 'P25'


    promoSubText.classList.add('promo-sub-text')
    promoSubText.innerHTML = 'ADD P20 FOR RICE AND DRINK'

    homeContentContainer2.appendChild(specialPromoBoxContainer)

    
    // content 3
    
    const homeContentContainer3 = document.createElement('div');
    homeContentContainer3.classList = 'home-bg-cont-3 flex-column'
    

    const homeBackgroundImg = new Image();
    homeBackgroundImg.src = mainImage
    homeBackgroundImg.setAttribute("alt", "home background");
    
    const mainHookText2 = document.createElement("p");

    mainHookText2.innerHTML = 'We serve fresh, everyday.'
    mainHookText2.classList.add('main-hook-text-2')


    // append child elements of content 3
    homeContentContainer3.appendChild(mainHookText2)
    homeContentContainer3.appendChild(homeBackgroundImg)
    
    specialPromoBoxContainer.appendChild(promoHeaderText)
    specialPromoBoxContainer.appendChild(promoImg)
    specialPromoBoxContainer.appendChild(promoSubText)
    

    // set main container for the home page (where child => content containers)
    const homePage= document.createElement('div');
    homePage.setAttribute('id', 'home');
    
    
    
    // // append all content to main content
    
    homePage.appendChild(homeContentContainer1)
    homePage.appendChild(homeContentContainer2)
    homePage.appendChild(homeContentContainer3)
    

    // add to main content whenever homepage() is called!
    mainContent.appendChild(homePage)
}


const contactPage = () => {
    const mainContent = document.querySelector('#content')

    const contactPage = document.createElement('div');
    contactPage.setAttribute('id', 'contact')
    
    const test_element = document.createElement('div');
    test_element.innerHTML = 'This is the contact page'
    
    
    contactPage.appendChild(test_element)
    
    mainContent.appendChild(contactPage);
}

function capitalizeFirstLetters(string) {
    let splitArray = string.split(' ')
    let upperCase = []
    splitArray.forEach(element=> {
        upperCase.push(element[0].toUpperCase() + element.substring(1))
    })
    
    return upperCase.join(' ')
    
}

const menuPage = () => {
    const mainContent = document.querySelector('#content')
    
    // menu page main container
    const menuPage= document.createElement('div');

    menuPage.setAttribute('id', "menu")
    
    // content container 1
    const menuContentContainer1 = document.createElement("div");
    menuContentContainer1.classList = 'menu-bg-cont-1' 
    
    const siomaiMenuTitleWrapper = document.createElement('div');
    siomaiMenuTitleWrapper.classList = 'siomai-menu-title-wrapper'
    const siomaiMenuText = document.createElement('p');
    siomaiMenuText.innerHTML = 'Menu'
    siomaiMenuText.classList = 'siomai-menu-text'
    siomaiMenuText.style.fontFamily = 'CinzelBold'
    siomaiMenuText.style.textShadow = '2px 2px #ff0000;'

    siomaiMenuTitleWrapper.appendChild(siomaiMenuText)
    

    
    const siopaoMenuTitleWrapper = document.createElement('div');
    const siopaoMenuText = document.createElement('p');
    siopaoMenuText.innerHTML = 'Siopao'
    
    // wrapper for text of main title
    // const menuTitleTextWrapper = document.createElement("div");
    // menuTitleTextWrapper.classList = 'menu-title-text-wrapper'

    // title
    // const menuTitleText = document.createElement('p');
    // menuTitleText.innerHTML = 'Our Menu'
    // menuTitleText.classList = 'menu-title-text'

    // append them to main content 1 
    menuContentContainer1.appendChild(siomaiMenuTitleWrapper)
    

    const menuContainerSiomai = document.createElement("div");
    menuContainerSiomai.classList = 'menu-siomai-container'
    

    const shanghaiSiomaiImg = new Image();
    shanghaiSiomaiImg.src = shanghaiSiomai
    shanghaiSiomaiImg.setAttribute("alt", "shanghai siomai");
    const japaneseSiomaiImg = new Image();
    japaneseSiomaiImg.src = japaneseSiomai
    japaneseSiomaiImg.setAttribute("alt", "japanese siomai");
    const hongkongSiomaiImg = new Image();
    hongkongSiomaiImg.src = hongkongSiomai
    hongkongSiomaiImg.setAttribute("alt", "hongkong siomai");
    const chickenSiomaiImg = new Image();
    chickenSiomaiImg.src = chickenSiomai
    chickenSiomaiImg.setAttribute("alt", "chicken siomai");

    const asadoSiopaoImg = new Image();
    asadoSiopaoImg.src = asadoSiopao
    asadoSiopaoImg.setAttribute("alt", "asado siopao");
    const bolaBolaSiopaoImg = new Image();
    bolaBolaSiopaoImg.src = bolaBolaSiopao
    bolaBolaSiopaoImg.setAttribute("alt", "bola bola siopao");
    const chickenSiopaoImg = new Image();
    chickenSiopaoImg.src = chickenSiomai
    chickenSiopaoImg.setAttribute("alt", "chicken siopao");
    const spicyAsadoSiopaoImg = new Image();
    spicyAsadoSiopaoImg.src = spicyAsadoSiopao
    spicyAsadoSiopaoImg.setAttribute("alt", "spicy asado siopao");
    const combiSiopaoImg = new Image();
    combiSiopaoImg.src = combiSiopao
    combiSiopaoImg.setAttribute("alt", "combi asado");
    
    
    
    [shanghaiSiomaiImg, japaneseSiomaiImg, hongkongSiomaiImg, chickenSiomaiImg, 
        asadoSiopaoImg, bolaBolaSiopaoImg, chickenSiopaoImg, spicyAsadoSiopaoImg, combiSiopaoImg].forEach(element => {
        // make a wrapper

        element.style.height = '150px'
        element.style.borderRadius = '3px'
        const menuImageWrapper = document.createElement('div');
        // append image inside wrapper
        menuImageWrapper.appendChild(element)
        // set id of each wrapper as alt of image
        menuImageWrapper.setAttribute('id', `${element.alt}`)
        menuImageWrapper.classList = 'menu-img-wrapper'
        // console.log(`${element.alt}`)
        const nameText = document.createElement('p');
        nameText.classList = 'menu-name-text'
        nameText.innerHTML = `${capitalizeFirstLetters(element.alt)}`
        nameText.style.textAlign = 'center'
        nameText.style.fontSize = '11px'
        nameText.style.fontFamily = 'CinzelSemiBold'
            

        const priceText = document.createElement('p');
        
        const orderText = document.createElement('p')
        orderText.classList = 'menu-order-text'
        orderText.innerHTML = 'Order Now'
        orderText.style.color = 'maroon';
        orderText.style.fontSize = '10px'
        orderText.style.textAlign = 'center'
        orderText.style.fontFamily = 'CinzelSemiBold'
        orderText.style.paddingBottom = '5px'
        
            
        menuImageWrapper.addEventListener('mouseover', (event) => {
            nameText.style.color = 'maroon'
            
            
        })

        menuImageWrapper.addEventListener('mouseleave', (event) => {
            nameText.style.color = 'black'
            
        })

        
        menuImageWrapper.appendChild(nameText);
        menuImageWrapper.appendChild(orderText);

        menuContainerSiomai.appendChild(menuImageWrapper)
    });

    


    menuContentContainer1.appendChild(menuContainerSiomai)
    menuPage.appendChild(menuContentContainer1)    
    mainContent.appendChild(menuPage)
}

// changes depending on where the screen is 
let pageToShow = 'home'
// add main container elements to body 
sideBarNav()
document.body.appendChild(header())
document.body.appendChild(mainContent)
document.body.appendChild(footer())

homePage()
contactPage()
menuPage()

document.querySelector("#contact").classList.toggle('not-visible')

document.querySelector("#home").classList.toggle('not-visible')
// MODIFY TO DISPLAY ON FIRST LOAD

// document.querySelector("#home").classList.toggle('not-visible')

switch (pageToShow) {
    case "home":
        console.log('screen to show is home!')

        // homePage()
        break
    
    case "menu":
        console.log('screen to show is home!')
        break

    case "about":
        console.log('screen to show is home!')
        break
}



