import isLoggedIn from "./functions/isLoggedIn.js";
import { logOut } from "./functions/logOut.js";
import handleLogin from "./functions/login.js";
import handleRegister from "./functions/register.js";

export default function authentication() {
    handleLogin();
    handleRegister();
    isLoggedIn();
    logOut();
}