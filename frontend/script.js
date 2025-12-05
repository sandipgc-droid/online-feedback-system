document.getElementById('feedbackForm').addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display confirmation message
    document.getElementById('response').innerText = 
        `Thank you ${name}, your feedback has been received!`;

    // If backend is connected, you can use fetch to send data:
    /*
    fetch('/submit-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById('response').innerText = data.message;
    });
    */
});
