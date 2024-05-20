import { hamburger } from "../../components/hamburger.js";
import authForm from "../../components/loginRegisterForm.js";
import isLoggedIn from "../auth/functions/isLoggedIn.js";
import authentication from "../auth/index.js";
import { renderSingleListing } from "./functions/renderSingleListing.js";


isLoggedIn();
renderSingleListing();
hamburger();
authForm();
authentication();