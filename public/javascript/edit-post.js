async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#post-title').value; 
    const text = document.querySelector('#post-text').value;
    console.log(title +  ", " + text);
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
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
        } else {
            console.log(response.statusText);
            alert(response.statusText);
        }; 
};

document.querySelector('#submit').addEventListener('click', editFormHandler);