const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "p0": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "p1": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "p2": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "p3": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "p4": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "p0" : "123 Way 456 Street Somewhere, USA",
    "p1" : "1 (888) 888-8888",
    "p2" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let header = document.getElementById("cta-img");
header.setAttribute('src', siteContent["cta"]["img-src"])

let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let mulitAnchor = document.querySelectorAll('a');

for(let i = 0; i < mulitAnchor.length; i++){
  mulitAnchor[i].textContent = siteContent["nav"]["nav-item-"+(i+1)]
  mulitAnchor[i].style.color = "green";
}

//mulitAnchor[0].textContent = siteContent["nav"]["nav-item-1"]
//mulitAnchor[1].textContent = siteContent["nav"]["nav-item-2"]
//mulitAnchor[2].textContent = siteContent["nav"]["nav-item-3"]
//mulitAnchor[3].textContent = siteContent["nav"]["nav-item-4"]
//mulitAnchor[4].textContent = siteContent["nav"]["nav-item-5"]
//mulitAnchor[5].textContent = siteContent["nav"]["nav-item-6"]



let h4List = document.querySelectorAll('h4');

h4List[0].textContent = siteContent["main-content"]["features-h4"]
h4List[1].textContent = siteContent["main-content"]["about-h4"]
h4List[2].textContent = siteContent["main-content"]["services-h4"]
h4List[3].textContent = siteContent["main-content"]["product-h4"]
h4List[4].textContent = siteContent["main-content"]["vision-h4"]
h4List[5].textContent = siteContent["contact"]["contact-h4"]

let pList = document.querySelectorAll(".main-content p");

for (let i = 0 ; i< pList.length; i++ ){
  pList[i].textContent = siteContent["main-content"]["p"+(i)]
}

let pList2 = document.querySelectorAll(".contact p");

for(let i = 0; i < pList2.length; i++){
  pList2[i].textContent = siteContent["contact"]["p"+(i)]
}

let h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"]

let butt = document.querySelector("button");

butt.textContent = siteContent["cta"]["button"]