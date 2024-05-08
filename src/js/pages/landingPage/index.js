import authForm from "../../components/loginRegisterForm.js";
import authentication from "../auth/index.js";
import { newLastListings } from "./functions/NewLastListings.js";
import { createNewListing } from "./functions/createNewListing.js";
import popularListing from "./functions/popularListing.js";

authForm();
authentication();
popularListing();
newLastListings();
createNewListing();