async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#post-title').value;
    const text = document.querySelector('#post-text').value;
    
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        console.log("every little thing, gonna be alright");
        document.location.replace ('/dashboard');
    } else alert(response.statusText);
};

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);