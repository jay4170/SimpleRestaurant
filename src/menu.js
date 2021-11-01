export var menuPageLoad = () => {
    var content = document.getElementById("content");
    content.replaceChildren()
    var bannerDiv = document.createElement("div")
    bannerDiv.className = "bannerSpace"
    var menuImg = document.createElement("img")
    menuImg.src = "/images/menu.jpg"
    menuImg.id = "menuImg"
    var title = document.createElement("h1")
    title.textContent = "Skaven's RatBurgers"
    title.className = "title"
    var blerb = document.createElement("h2")
  
    content.appendChild(bannerDiv)
    bannerDiv.appendChild(title)
    bannerDiv.appendChild(menuImg)

    var isActive = document.getElementsByClassName("active")
    for(var i = 0; i<isActive.length; i++){
        isActive[i].classList.remove("active")
    }

    var makeActive = document.getElementById("menuBtn");
    makeActive.classList.add("active");
}