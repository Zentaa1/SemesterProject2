import { getListings } from "../../api/Listings/getListing.js";
import authForm from "../../components/loginRegisterForm.js";
import authentication from "../auth/index.js";
import { newLastListings } from "./functions/NewLastListings.js";
import popularListing from "./functions/popularListing.js";

authForm();
authentication();
popularListing();
newLastListings();