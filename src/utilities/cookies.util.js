import Cookies from 'universal-cookie';
export const cookiesUtil = {
    set,
    get,
    remove,
    getCurrentUser,
    setAccessToken,
    getAccessToken,


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
    cookies.set("THIS IS USER IDENTIFY KEY", value);
}

function getAccessToken() {
    return cookies.get("THIS IS USER IDENTIFY KEY");
}

