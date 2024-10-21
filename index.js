function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert() {
        alert('I was clicked!');
    }

    input.addEventListener('click', clickAlert);
}

// Call the function to add the event listener when the DOM is loaded
addingEventListener();
