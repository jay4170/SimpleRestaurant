import { homePageLoad } from "./homepage";
import { navgationBar } from "./navbar";
import "./style.css";



const topNavBar = document.createElement("div");
topNavBar.id = "topNavBar";

const content = document.createElement("div");
content.id = "content";

document.body.append(topNavBar);
document.body.append(content);

navgationBar();
homePageLoad();
