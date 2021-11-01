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
    
    content.appendChild(bannerDiv)
    bannerDiv.appendChild(title)
    bannerDiv.appendChild(blerb)

    var isActive = document.getElementsByClassName("active")
    for(var i = 0; i<isActive.length; i++){
        isActive[i].classList.remove("active")
    }

    var makeActive = document.getElementById("ourLocBtn");
    makeActive.classList.add("active");
}