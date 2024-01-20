const form = document.querySelector('.feedback-form');
const storage = localStorage.getItem('feedback-form-state');
const parsedStorage = JSON.parse(storage);

if (parsedStorage !== null && parsedStorage !== undefined) {
    if (parsedStorage.email !== null && parsedStorage.email !== undefined) { 
        form.elements.email.value = parsedStorage.email;
    }
    if (parsedStorage.message !== null && parsedStorage.message !== undefined) { 
        form.elements.message.value = parsedStorage.message;
    }
 }

form.addEventListener('input', onFormInput);

function onFormInput(event) { 
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) { 
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    if (email === '' || message === '') {
        return alert('Please fill in all the fields!');
    }
    localStorage.removeItem('feedback-form-state');
    form.reset();
    console.log({ email, message });
}