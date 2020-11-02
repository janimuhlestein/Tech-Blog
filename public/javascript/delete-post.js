async function deleteFormHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1];
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });
    if(response.ok){
            console.log("every little thing, gonna be alright");
            document.location.replace ('/dashboard');
        } else {
            console.log(response.statusText);
            alert(response.statusText);
        }

};

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);