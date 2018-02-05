export default function getAllCookiesToObject() {
  let allCookies = document.cookie.split("; ").reduce((prev, current) => {
    let [name, value] = current.split("=");
    prev[name] = value;
    return prev;
  }, {});
  return allCookies;
}
