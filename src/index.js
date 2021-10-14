const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByID');

    // FROM CANVAS: What happens when you enter an invalid ID? In the console, you should see a 404 error. Something to think about as you continue to learn — what are some ways you might handle an invalid request?
    // create an if statement that provides the user with an alert that they need to enter a valid search ID to continue... 
    // if input.value === an ID in the HTML, run fetch statement
    // else return an alert() to user

    // if (!response.ok) {
    // make the promise be rejected if we didn't get a 2xx response
    //     throw new Error("Not 2xx response")
    // } else {
    //      // go the desired response

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => {
        if (!response.ok) { alert("Invalid request, enter a valid Search ID") }
        else { return response.json() }
      })
      .then(data => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
}

document.addEventListener('DOMContentLoaded', init);