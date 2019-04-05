export default function getObject(data) {
    let obj = {};
    for(let item of data) {
        console.log(item.id, 11111111111111)
        obj[item.id] = item;
    }
    return obj;
}