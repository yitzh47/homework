const contacts = [
    {
        id: 1,
        firstName: 'Abraham',
        lastName: 'Yehudi',
        email: '1stFatherOfIsrael@kotel.com',
        phone: '847-484-1111'
    },
    {
        id: 2,
        firstName: 'Isaac',
        lastName: 'Yehudi',
        email: '2ndFatherOfIsrael@kotel.com',
        phone: '847-484-2222'
    },
    {
        id: 3,
        firstName: 'Jacob',
        lastName: 'Yehudi',
        email: '3rdFatherOfIsrael@kotel.com',
        phone: '847-484-3333'
    }];

let currentId = 3;



module.exports.contacts = contacts;
module.exports.addContact = function (name, phone) {
    contacts.push({
        id: ++currentId,
        name,
        phone
    })
}    