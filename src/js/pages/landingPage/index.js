import { hamburger } from "../../components/hamburger.js";
import authForm from "../../components/loginRegisterForm.js";
import authentication from "../auth/index.js";
import { newLastListings } from "./functions/NewLastListings.js";
import { createNewListing } from "./functions/createNewListing.js";
import { initializeSearch } from "./functions/landingPageSearch.js";
import popularListing from "./functions/popularListing.js";

hamburger();
authForm();
authentication();
popularListing();
newLastListings();
createNewListing();
initializeSearch();