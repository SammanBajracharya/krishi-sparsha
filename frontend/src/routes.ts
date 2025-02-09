/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 * */
export const publicRoutes = [
    "/",
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /dashbaord
 * @type {string[]}
 * */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
];


/**
 * The prefix for API authentication routes
 * Routes that starts with this prefix are used for API authentication purpose
 * @type {string}
 * */
export const apiAuthPrefix = "api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 * */
export const DEFAULT_LOGIN_REDIRECT = "/marketplace";

/**
 * The default redirect path to logggin in
 * @type {string}
 * */
export const LOGIN_PATH = "/auth/login";

