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
    const subText= document.createElement('p');
    textWrapper.classList = 'flex-column footer-text-wrapper'

    text.classList = 'footer-text'
    text.innerHTML = 'Siomai King'
    subText.classList = 'footer-sub-text'
    subText.innerHTML = 'San Miguel, Bulacan'
    
    // footer > div > p
    footer.appendChild(textWrapper)
    textWrapper.appendChild(text)
    textWrapper.appendChild(subText)
    
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
    mainHookText2.style.textAlign = 'center'


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


    // BUG FIX: Extra padding when rearranging cont 3 to position 2
    homePage.appendChild(homeContentContainer2)
    homePage.appendChild(homeContentContainer3)
    

    // add to main content whenever homepage() is called!
    mainContent.appendChild(homePage)
}


const contactPage = () => {
    const mainContent = document.querySelector('#content')
    // content page
    const contactContentContainer1 = document.createElement('div');
    contactContentContainer1.classList = 'contact-bg-cont-1'
    
    const contactPage = document.createElement('div');
    contactPage.setAttribute('id', 'contact')

    // main flex wrapper  
    const textMainWrapper = document.createElement('div');
    textMainWrapper.style.display= 'flex';
    textMainWrapper.style.flexDirection = 'column';
    textMainWrapper.style.rowGap = '10px';
    
    // wrapper left side for hours and location
    const locationTextWrapper = document.createElement('div');

    const titleText = document.createElement('p');
    titleText.innerHTML = 'Hours & Location'
    titleText.style.fontSize = '24px' 
    titleText.style.color = 'white' 
    titleText.style.fontFamily = 'CinzelSemiBold' 
    titleText.style.textAlign = 'center' 

    
    
    const addressText = document.createElement('p')
    addressText.innerHTML = '(In front of St. Paul) 4XJ7+P27, Cagayan Valley Rd, San Miguel, Bulacan'
    addressText.style.fontSize = '12px' 
    addressText.style.color = 'white' 
    addressText.style.fontFamily = 'CinzelRegular' 
    addressText.style.textAlign= 'center' 
    const openHoursText = document.createElement('p')
    openHoursText.innerHTML =  'Monday - Saturday : 7 AM to 6 PM'
    openHoursText.style.fontSize = '12px' 
    openHoursText.style.color = 'white' 
    openHoursText.style.fontFamily = 'CinzelRegular' 
    openHoursText.style.textAlign= 'center' 

    // append text elements to wrapper
    locationTextWrapper.appendChild(titleText)
    locationTextWrapper.appendChild(addressText)
    locationTextWrapper.appendChild(openHoursText)
    

    // wrapper right side for directions
    const directionsTextWrapper = document.createElement('div');

    const directionsSubText = document.createElement('p');
    directionsSubText.innerHTML = 'We hope to see you soon! Click on the link below for directions.'
    directionsSubText.style.fontSize = '12px' 
    directionsSubText.style.color = 'white' 
    directionsSubText.style.fontFamily = 'CinzelRegular' 
    directionsSubText.style.textAlign = 'center'
    
    
    
    const directionsText = document.createElement('p');
    directionsText.innerHTML = 'Directions'
    
    
    directionsText.style.fontSize = '24px' 
    directionsText.style.color = 'white' 
    directionsText.style.fontFamily = 'CinzelSemiBold' 
    directionsText.style.textAlign = 'center' 

    const directionsLink = document.createElement('a') 
    directionsLink.setAttribute('href','https://www.google.com/maps/place/4XJ7%2BP27,+Cagayan+Valley+Rd,+San+Miguel,+Bulacan/@15.1318222,120.9623845,20z/data=!4m14!1m7!3m6!1s0x33971c94073928c5:0x1020f43ada3fd3c3!2sSt.+Paul+University+at+San+Miguel!8m2!3d15.1315644!4d120.963131!16s%2Fg%2F125_hxmj5!3m5!1s0x33971cc025fd446b:0xfe383026c130e089!8m2!3d15.1317837!4d120.9625689!16s%2Fg%2F11thq8snkw?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D')
    const directionsLinkText = document.createElement('p')
    directionsLinkText.innerHTML = 'Get Directions'
    directionsLink.appendChild(directionsLinkText)
    directionsLinkText.style.fontSize = '12px' 
    directionsLinkText.style.color = 'white' 
    directionsLinkText.style.fontFamily = 'CinzelRegular' 
    directionsLinkText.style.textAlign = 'center' 
    directionsLinkText.style.marginTop = '12px' 
    directionsLinkText.style.textDecoration= 'underline' 
    

    
    directionsTextWrapper.appendChild(directionsText);
    directionsTextWrapper.appendChild(directionsSubText)
    directionsTextWrapper.appendChild(directionsLink)

    
    
    textMainWrapper.appendChild(locationTextWrapper)
    textMainWrapper.appendChild(directionsTextWrapper);

    // Create an iframe element
    const iframeWrapper = document.createElement('div')
    iframeWrapper.style.display = 'flex'
    iframeWrapper.style.justifyContent = 'center'
    iframeWrapper.style.alignContent = 'center'

    const iframe = document.createElement('iframe');
    iframeWrapper.appendChild(iframe)

    // Set attributes for the iframe
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470.43929001263524!2d120.96238448575282!3d15.13182218400265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33971cc025fd446b%3A0xfe383026c130e089!2s4XJ7%2BP27%2C%20Cagayan%20Valley%20Rd%2C%20San%20Miguel%2C%20Bulacan!5e0!3m2!1sen!2sph!4v1724587576863!5m2!1sen!2sph";
    iframe.width = "500";
    iframe.height = "300";
    iframe.style.border = "0";
    iframe.style.borderRadius = "5px";
    iframe.style.marginTop= "15px";
    iframe.allowFullscreen = "";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    
    
    contactContentContainer1.appendChild(textMainWrapper)
    contactContentContainer1.appendChild(iframeWrapper)

    contactPage.appendChild(contactContentContainer1)

    
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


const priceTag = (price) => {
    
    const mainWrapper = document.createElement('div');
    const border = document.createElement('div');
    
    border.style.border = '1px solid white'
    border.style.padding = '3px'
    mainWrapper.appendChild(border)
    
    
    const priceText = document.createElement('p');
    
    priceText.innerHTML = '₱ ' + price 
    priceText.style.color = "white";
    priceText.style.fontSize = "12px";
    priceText.style.padding = '0px 10px 0px 10px'
    priceText.style.fontFamily = "CinzelSemiBold";

    border.appendChild(priceText)
    
    
    mainWrapper.style.position = "absolute";
    mainWrapper.style.backgroundColor = 'maroon';
    mainWrapper.style.borderRadius = '3px';
    mainWrapper.style.padding = '3px';
    
    mainWrapper.style.top = '10px'
    mainWrapper.style.right = '10px'
    // mainWrapper.style.boxShadow = '0px 10px -14px 14px #FFF'


    return mainWrapper

}

const menuPage = () => {
    const mainContent = document.querySelector('#content')
    
    // menu page main container
    const menuPage= document.createElement('div');

    menuPage.setAttribute('id', "menu")
    
    // content container 1
    const menuContentContainer1 = document.createElement("div");
    menuContentContainer1.classList = 'menu-bg-cont-1' 

    const menuSectionTitle = (title) => {
        
        const wrapper = document.createElement('div');
        wrapper.classList = 'menu-section-title-wrapper'
        const text = document.createElement('p');
        text.innerHTML = title 
        text.classList = 'siomai-menu-text'
        text.style.fontFamily = 'CinzelSemiBold'
        text.style.textShadow = '2px 2px #ff0000;'
        text.style.color = 'black'
        
        wrapper.appendChild(text)
        
        return wrapper
    }

    // add title
    menuContentContainer1.appendChild(menuSectionTitle('Siomai'))
    

    const menuContainerSiomai = document.createElement("div");
    menuContainerSiomai.classList = 'menu-siomai-container'
    menuContainerSiomai.style.marginBottom = '20px';
    

    const menuContainerSiopao = document.createElement("div");
    menuContainerSiopao.classList = 'menu-siopao-container'
    menuContainerSiopao.style.marginBottom = '20px';

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
    chickenSiopaoImg.src = chickenSiopao
    chickenSiopaoImg.setAttribute("alt", "chicken siopao");
    const spicyAsadoSiopaoImg = new Image();
    spicyAsadoSiopaoImg.src = spicyAsadoSiopao
    spicyAsadoSiopaoImg.setAttribute("alt", "spicy asado siopao");
    const combiSiopaoImg = new Image();
    combiSiopaoImg.src = combiSiopao
    combiSiopaoImg.setAttribute("alt", "combi asado");
    
    const menuImageWrapper = (id) => {
        const menuImageWrapper = document.createElement('div');
        menuImageWrapper.setAttribute('id', `${id.alt}`)
        menuImageWrapper.classList = 'menu-img-wrapper'
        menuImageWrapper.style.position = 'relative'

        return menuImageWrapper
    }
    
    const nameText = (innerHTML) => {
        const nameText = document.createElement('p');
        nameText.classList = 'menu-name-text'
        nameText.innerHTML = `${capitalizeFirstLetters(innerHTML.alt)}`
        nameText.style.textAlign = 'center'
        nameText.style.fontSize = '11px'
        nameText.style.fontFamily = 'CinzelSemiBold'

        return nameText
    }

    const orderText = () => {
        const orderText = document.createElement('p')
        orderText.classList = 'menu-order-text'
        orderText.innerHTML = 'Order Now'
        orderText.style.color = 'maroon';
        orderText.style.fontSize = '10px'
        orderText.style.textAlign = 'center'
        orderText.style.fontFamily = 'CinzelSemiBold'
        orderText.style.paddingBottom = '5px'

        return orderText
    }

    
    [[shanghaiSiomaiImg, 1, 47], [japaneseSiomaiImg, 1, 56], [hongkongSiomaiImg, 1, 50], [chickenSiomaiImg, 1, 47], 
        [asadoSiopaoImg, 2, 60], [bolaBolaSiopaoImg, 2, ], [chickenSiopaoImg, 2, ], [spicyAsadoSiopaoImg, 2], , [combiSiopaoImg, 2, ]].forEach(element => {
            
        element[0].style.height = '200px'
        element[0].style.borderRadius = '3px'


        const wrapper = menuImageWrapper(element[0])
        wrapper.appendChild(element[0])
        const name = nameText(element[0])

            
        wrapper.addEventListener('mouseover', (event) => {
            name.style.color = 'maroon'
            
            
        })

        wrapper.addEventListener('mouseleave', (event) => {
            name.style.color = 'black'
            
        })

        
        wrapper.appendChild(name);
        wrapper.appendChild(orderText());
        wrapper.appendChild(priceTag(element[2]))

        element[1] === 1 ? menuContainerSiomai.appendChild(wrapper) : menuContainerSiopao.appendChild(wrapper)
    });

    


    menuContentContainer1.appendChild(menuContainerSiomai)
    menuContentContainer1.appendChild(menuSectionTitle('Siopao'))
    menuContentContainer1.appendChild(menuContainerSiopao)
    // [[shanghaiSiomaiImg], [japaneseSiomaiImg], [hongkongSiomaiImg], [chickenSiomaiImg],
    // [asadoSiopaoImg], [bolaBolaSiopaoImg], [chickenSiopaoImg], [spicyAsadoSiopaoImg], [combiSiopaoImg]].forEach(element => {

    //     element[0].style.height = '150px'
    //     element[0].style.borderRadius = '3px'


    //     const wrapper = menuImageWrapper(element[0])
    //     wrapper.appendChild(element[0])
    //     const name = nameText(element[0])


    //     wrapper.addEventListener('mouseover', (event) => {
    //         name.style.color = 'maroon'


    //     })

    //     wrapper.addEventListener('mouseleave', (event) => {
    //         name.style.color = 'black'

    //     })


    //     wrapper.appendChild(name);
    //     wrapper.appendChild(orderText());
    //     wrapper.appendChild(priceTag())

    //     menuContainerSiopao.appendChild(wrapper)
    // });



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

document.querySelector("#menu").classList.toggle('not-visible')
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



