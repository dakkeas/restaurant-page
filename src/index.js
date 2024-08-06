import './style.css';
import mainImage from "./siomai_king_bg.jpg"
import siomaikingLogo from "./siomaiking_logo.png";




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

   return header
}

const homePage = () => {
    
    // main content 
    const mainContent = document.querySelector('#content')

    const restaurantLogoContainer = document.createElement("div");
    restaurantLogoContainer.classList.add('restaurant-logo-container')

    // main bg image container
    const homeBackgroundImgContainer = document.createElement('div');
    homeBackgroundImgContainer.classList.add('home-background-img-cont')    

    // main bg image
    const homeBackgroundImg = new Image();
    homeBackgroundImg.src = mainImage
    homeBackgroundImg.setAttribute("alt", "home background");
    
    // image main text

    const imageMainText = document.createElement('p');
    imageMainText.classList.add('img-main-txt')
    // imageMainText.innerHTML = 'Ang Hari ng Siomai'


    
    
    // append all elements to main
    homeBackgroundImgContainer.appendChild(imageMainText)
    homeBackgroundImgContainer.appendChild(homeBackgroundImg)
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



