import { hamburger } from "../../components/hamburger.js";
import isLoggedIn from "../auth/functions/isLoggedIn.js";
import authentication from "../auth/index.js";
import { renderProfile } from "./functions/renderProfile.js";

renderProfile();
isLoggedIn();
hamburger();
authentication();