import { hamburger } from "../../components/hamburger.js";
import { hideSpinner, showSpinner } from "../../components/loadingSpinner.js";
import isLoggedIn from "../auth/functions/isLoggedIn.js";
import authentication from "../auth/index.js";
import { renderProfile } from "./functions/renderProfile.js";

try {
    showSpinner();

    renderProfile();
    isLoggedIn();
    hamburger();
    authentication();

    setTimeout(() => {
        hideSpinner();
    }, 1000);
} catch (error) {
    console.log(error);
}
