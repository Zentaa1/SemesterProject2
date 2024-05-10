import { getListings } from "../../api/Listings/getListing.js";
import isLoggedIn from "../auth/functions/isLoggedIn.js";
import { renderListings } from "./functions/renderListings.js";

const data = await getListings();

renderListings(data);
isLoggedIn();