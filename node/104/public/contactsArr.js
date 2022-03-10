const contacts = [
    {
        id: 1,
        name: 'Abraham',
        phone: '847-484-1111'
    },
    {
        id: 2,
        name: 'Isaac',
        phone: '847-484-2222'
    },
    {
        id: 3,
        name: 'Jacob',
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