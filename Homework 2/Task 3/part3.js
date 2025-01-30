let button = document.getElementById("getDogPicturesBtn");
let url = "https://dog.ceo/api/breed/hound/images";
let box = document.getElementById("box");

button.addEventListener("click", () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                box.innerHTML += `<img src="${data.message}">`;
            } else {
                alert("An error has occurred!");
            }
        })
        .catch(err => console.error(err));
});