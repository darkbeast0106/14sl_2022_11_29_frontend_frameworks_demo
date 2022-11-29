const people = [{
        name: "Gipsz Jakab",
        email: "gipsz@example.com",
        age: 42
    },
    {
        name: "Gipsz Jakab",
        email: "gipsz@example.com",
        age: 42
    },
    {
        name: "Gipsz Jakab",
        email: "gipsz@example.com",
        age: 42
    },
    {
        name: "Gipsz Jakab",
        email: "gipsz@example.com",
        age: 42
    },
    {
        name: "Gipsz Jakab",
        email: "gipsz@example.com",
        age: 42
    },
];

document.addEventListener("DOMContentLoaded", () => {
    list_people();
});

function list_people() {
    let html = "";
    people.forEach(person => {
        html += `<div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    ${person.name}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${person.email}</li>
                    <li class="list-group-item">${person.age}</li>
                </ul>
            </div>
        </div>
        `;
    });
    document.getElementById("people").innerHTML = html;
}

function add_person(e) {
    e.preventDefault();
    const name = document.getElementById('name_input').value;
    const email = document.getElementById('email_input').value;
    const age = parseInt(
        document.getElementById('age_input').value
    );
    const person = {
        name: name,
        email: email,
        age: age
    };
    people.push(person);
    list_people();
}