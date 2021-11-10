export var ourLocPageLoad = () => {
    var content = document.getElementById("content"); 
    content.replaceChildren()
    var aboutUsText = "Altdorf: Undercity"
    var bannerDiv = document.createElement("div")
    bannerDiv.className = "bannerSpace"
    var title = document.createElement("h1")
    title.textContent = "Skaven's RatBurgers"
    title.className = "title"
    var blerb = document.createElement("h2")
    blerb.textContent = aboutUsText
    blerb.className = "blerb"
    
    var locMap = document.createElement("IFRAME")
    var mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304520.16923598404!2d-1.7796348563667086!3d53.395798208012025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48790aa9fae8be15%3A0x3e2827f5af06b078!2sSheffield!5e0!3m2!1sen!2suk!4v1636360866064!5m2!1sen!2suk"'
    locMap.setAttribute("src", mapSrc)
    locMap.setAttribute("height", "450");
    locMap.setAttribute("width", "650");
    locMap.setAttribute("height", "450");
    locMap.setAttribute("style","border:0");
    locMap.setAttribute("allowfullscreen","");
    locMap.setAttribute("loading","lazy");
    locMap.setAttribute("id","map");

    content.appendChild(bannerDiv)
    bannerDiv.appendChild(title)
    bannerDiv.appendChild(blerb)
    bannerDiv.appendChild(locMap)

    var isActive = document.getElementsByClassName("active")
    for(var i = 0; i<isActive.length; i++){
        isActive[i].classList.remove("active")
    }

    var makeActive = document.getElementById("ourLocBtn");
    makeActive.classList.add("active");
}