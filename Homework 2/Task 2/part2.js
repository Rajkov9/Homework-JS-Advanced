let button = document.getElementById("getUsersBtn");

button.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let user = data;  // Single user object
            let row = fillTable(user);

            document.querySelector("#dataTableUserInfo tbody").appendChild(row);
        })
        .catch(error => console.log("Error fetching data:", error));
});

function fillTable(user) {
    let row = document.createElement('tr');
    row.innerHTML = 
        `<td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
        <td>${user.address.street}</td>
        <td>${user.address.suite}</td>
        <td>${user.address.city}</td>
        <td>${user.address.zipcode}</td>
        <td>${user.address.geo.lat}</td>
        <td>${user.address.geo.lng}</td>
        <td>${user.company.name}</td>
        <td>${user.company.catchPhrase}</td>
        <td>${user.company.bs}</td>`
    ;
    return row;
}