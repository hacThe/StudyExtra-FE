import Cookies from 'universal-cookie';
export const cookiesUtil = {
    set,
    get,
    remove,
    getCurrentUser,
    setAccessToken,
    getAccessToken,
    logout


};

const cookies = new Cookies();

function set(key, value) {
    cookies.set(key, value, { path: '/' });
}

function get(key) {
    let value = cookies.get(key);
    if (value) {
        return value;
    }
    return null
}

function getCurrentUser() {
    return get('THIS IS USER IDENTIFY KEY');
}

function remove(key) {
    let value = cookies.get(key);
    if (value) {
        cookies.remove(key);
        return true;
    }
    return false;
}

function setAccessToken(value) {
    cookies.set("ACC_TOKEN_COOKIE_KEY", value);
}

function getAccessToken() {
    return cookies.get("ACC_TOKEN_COOKIE_KEY");
}
function logout() {
    cookies.remove("ACC_TOKEN_COOKIE_KEY")
    window.location.reload();
}

