let button = document.getElementById("getDogPicturesBtn");
let url = "https://dog.ceo/api/breed/hound/images";
let box = document.getElementById("box");
button.addEventListener("click", () => {
    fetch(url).then(data => data.json())
        .then((data) => {
            if (data.status == "success") {
                box.insertAdjacentElement("beforeend",
                    `<img src="${data.message}">`);
            } else {
                alert("An error has occured!");
            }
        }).catch(err => console.log(err));
})