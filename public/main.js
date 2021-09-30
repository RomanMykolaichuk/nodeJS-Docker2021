const button = document.getElementById('b1');
const message = document.getElementById('mes');
const f1 = document.getElementById("f1");


button.addEventListener('click', () => {
    fetch("/notes").then(r => r.json())
        .then(r => {
            message.innerHTML = JSON.stringify(r);
            console.log(r)
        })
})

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    fetch("/notes/new", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
    }).then(console.log({ value }));
    button.click;
}


f1.addEventListener("submit", handleSubmit);