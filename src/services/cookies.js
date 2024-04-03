export function setCookie(key, value) {
  document.cookie = `${key}=${value}`;
}

export function setLoginInfo(email, token) {
  setCookie("email", email);
  setCookie("token", token);
}

export function getLoginInfo() {
  const cookies = getCookies();
  return {
    email: cookies.email,
    token: cookies.token,
  };
}

export function clearoutLoginCookies(){
  clearCookie("email")
  clearCookie("token")
}

function clearCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export function getCookies() {
  const cookies = document.cookie;
  const map = {};
  const cookie_array = cookies.split(";");

  for (let cookie of cookie_array) {
    const [key, value] = cookie.trim().split("=");
    map[key] = value;
  }

  return map;
}

export function deleteCookie(cookieName) {
  // Set the cookie's expiration date to a date in the past
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
