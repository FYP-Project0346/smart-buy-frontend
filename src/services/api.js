// PRODUCTS APIs
const BASE_URL = "http://localhost:5000"
// const BASE_URL = 'https://smart-buy-express-app.onrender.com'
export const GET_ALL_PRODUCTS_API = `${BASE_URL}/products/get`
export const RESET_PASSWORD_API = `${BASE_URL}/auth/request-forgot-password`
export const VERIFY_CODE_API = `${BASE_URL}/auth/verify-code-reset-password`
export const GET_PRODUCT_BY_ID = `${BASE_URL}/products/getById`

// Contactus
export const SAVE_CONTACT_MSG = `${BASE_URL}/contact/save`

// AUTH APIs
export const REGISTER_ENDPOINT = `${BASE_URL}/auth/register`
export const LOGIN_ENDPOINT = `${BASE_URL}/auth/login`
export const VERIFY_TOKEN = `${BASE_URL}/auth/verify_token`
export const GET_USER_DATA = `${BASE_URL}/user`

// PRICE TRACKER APIs
export const SUBSCRIBE_PRICE_TRACKER = `${BASE_URL}/price-track/subscribe`
export const VERIFY_SUBSCRIPTION = `${BASE_URL}/price-track/is-subscribed`
export const UNSUBSCRIBE_PRICE_TRACKER = `${BASE_URL}/price-track/unsubscribe`
export const TEST_PRICE_TRACKING = `${BASE_URL}/price-track/update-deal-status`
