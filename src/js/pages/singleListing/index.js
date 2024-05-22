import { hamburger } from "../../components/hamburger.js";
import { hideSpinner, showSpinner } from "../../components/loadingSpinner.js";
import authForm from "../../components/loginRegisterForm.js";
import isLoggedIn from "../auth/functions/isLoggedIn.js";
import authentication from "../auth/index.js";
import { renderSingleListing } from "./functions/renderSingleListing.js";

try {
    showSpinner();

    isLoggedIn();
    renderSingleListing();
    hamburger();
    authForm();
    authentication();

    setTimeout(() => {
        hideSpinner();
    }, 1000);
} catch (error) {
    console.log(error);
}