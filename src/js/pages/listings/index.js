import { getListings } from "../../api/Listings/getListing.js";
import { listingFilter } from "../../components/filter.js";
import { hamburger } from "../../components/hamburger.js";
import { hideSpinner, showSpinner } from "../../components/loadingSpinner.js";
import authForm from "../../components/loginRegisterForm.js";
import isLoggedIn from "../auth/functions/isLoggedIn.js";
import authentication from "../auth/index.js";
import { searchFunction } from "./functions/listingSearch.js";
import { renderListings } from "./functions/renderListings.js";

try {
    showSpinner();

    const response = await getListings();
    const data = response.data;

    renderListings(data);
    isLoggedIn();
    hamburger();
    authForm();
    authentication();
    listingFilter(data);
    searchFunction();

    setTimeout(() => {
        hideSpinner();
    }, 1000);
} catch (error) {
    console.log(error);
}
