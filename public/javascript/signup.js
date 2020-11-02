

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const first_name = document.querySelector('#first-name-signup').value.trim();
    const last_name = document.querySelector('#last-name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();

    if(username && password && first_name && last_name && email) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password,
                first_name,
                last_name,
                email
            }),
            headers: {'Content-Type': 'application/json'}
        });
        //check response status
        if(response.ok) {
            console.log('success');
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
        
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);