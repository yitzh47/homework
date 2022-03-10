/*global pcs*/
(function () {
  'use strict';

  const addContactForm = $('#addContactForm');
  const contactsTable = $('#contactsTable tbody');
  const firstNameInput = $('#first');
  const lastNameInput = $('#last');
  const emailInput = $('#email');
  const phoneInput = $('#phone');

  let contacts = [];

  $('#addContact').click(() => {
    addContactForm.slideDown('slow');//show();
  });

  async function addContact(newContact) {
    if (!contacts.length) {
      $(':first-child', contactsTable).remove();
    }

    contacts.push(newContact);

    const row = $(`
        <tr>
          <td>${newContact.firstName}</td>
          <td>${newContact.lastName}</td>
          <td>${newContact.email}</td>
          <td>${newContact.phone}</td>
          <td><button>delete</button></td>
        </tr>
    `).appendTo(contactsTable);
  

    row.find('button')
      .click(() => {
        row.remove();
        contacts = contacts.filter(c => c !== newContact);

        if (!contacts.length) {
          contactsTable.append(`<tr><td colspan="5">no contacts loaded</td></tr>`);
        }
      });
    }
  

  addContactForm.submit(async event => {
    event.preventDefault();

    const newContact = {
      firstName: firstNameInput.val(),
      lastName: lastNameInput.val(),
      email: emailInput.val(),
      phone: phoneInput.val()
    };

    

    // try{
    //   const r = await fetch('http://localhost:3000/api/contacts/addContact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'

    //     },
    //     body: JSON.stringify(newContact)
    //   });
    // }catch(err){
    //   console.log(err)
    // }

    //const existingContact = addContactForm.data('contact');
    //const url = existingContact ? `/api/contacts/${existingContact.id}` : '/api/contacts';

    try {
      const r = await fetch('http://localhost:3000/api/contacts', {
        method: 'POST',
        mode: 'no-cors', // no-cors, *cors, same-origin

        headers: {
          'Content-Type': 'application/json'

        },
        body: JSON.stringify(newContact)
      });

      if (!r.ok) {
        const errorText = await r.text();
        console.log(error)
        throw new Error(`Unable to add the contact - ${errorText}`);
      }

      if (existingContact) {
        Object.assign(existingContact, newContact);
        const tds = existingContact.row.find('td');
        tds[0].textContent = newContact.firstName;
        tds[1].textContent = newContact.lastName;
        tds[2].textContent = newContact.email;
        tds[3].textContent = newContact.phone;
      } else {
        const createdContact = await r.json();
        addContact(createdContact);
      }

      hideAndResetAddContactForm();
    } catch (e) {
      pcs.messageBox.show(`${e.message} hi`);
    }

    addContact(newContact); 
    hideAndResetAddContactForm();
  });

  $('#cancel').click(() => {
    hideAndResetAddContactForm();
  });

  function hideAndResetAddContactForm() {
    //addContactForm[0].reset();
    addContactForm.trigger('reset');

    addContactForm.slideUp('fast');//hide();
  }

  $('#load').click(async () => {
    /*fetch('people.json')
      .then(r => {
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        return r.json();
      })
      .then(newContacts => {
        newContacts.forEach(addContact);
      })
      .catch(err => {
        pcs.messageBox.show(err, true);
      });*/

      try {
        const r = await fetch('http://localhost:3000/api/contacts/contacts');
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText} `);
        }
        const newContacts = await r.json();
        console.log(newContacts)
        newContacts.forEach(addContact);
      } catch(err) {
        pcs.messageBox.show(err, true);
      }
  });
}());