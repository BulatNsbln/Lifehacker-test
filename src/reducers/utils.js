export default function arrToObject(data) {
    let obj = {};

    for(let item of data) {
        obj[item.id] = item;
    }

    return obj;
}