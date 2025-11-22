let contact = document.querySelector('#footer');
function scrollContact(contact) {
    const itemHeader = document.querySelector('a[href="#footer"]');
    itemHeader.addEventListener('click', (e) => {
        e.preventDefault();
        contact.scrollIntoView({ behavior: 'smooth' });
    });
};
scrollContact(contact);