import { homePageLoad } from "./homepage";
import { aboutPageLoad} from "./aboutus"
import { menuPageLoad} from "./menu"
import {ourLocPageLoad} from "./ourloc"

var navgationBar = () => {
    var topNavBar = document.getElementById("topNavBar");
    var topNav = document.createElement("div")
    topNav.className = "topNav"

    var home = document.createElement("a")
    home.id = "homeBtn"
    home.textContent = "Home";

    var menu = document.createElement("a")
    menu.textContent = "Menu";
    menu.id = "menuBtn"

    var about = document.createElement("a")
    about.textContent = "About us";
    about.id = "aboutBtn"

    var ourLoc = document.createElement("a")
    ourLoc.textContent = "Our Location";
    ourLoc.id = "ourLocBtn"

    topNavBar.appendChild(topNav)
    topNav.appendChild(home)
    topNav.appendChild(menu)
    topNav.appendChild(about)
    topNav.appendChild(ourLoc)

    home.addEventListener("click", homePageLoad);
    menu.addEventListener("click", menuPageLoad);
    about.addEventListener("click", aboutPageLoad);
    ourLoc.addEventListener("click", ourLocPageLoad);
}

navgationBar()
homePageLoad();


