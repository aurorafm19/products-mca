export function setItemInStorage(key, data, time) {
    const dateNow = new Date();

    const item = {
        value: data,
        expiration: dateNow.getTime() + time
    };

    localStorage.setItem(key, JSON.stringify(item));
}

export function getItemInStorage(key) {
    const item = localStorage.getItem(key);

    if(!item) {
        return null;
    }

    const data = JSON.parse(item);
    const dateNow = new Date();

    if (dateNow.getTime() > data.expiration ) {
        localStorage.removeItem(key);
        return null;
    }

    return data.value;
}