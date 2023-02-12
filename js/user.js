const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=500')
    .then(res => res.json())
    .then(data => displayUser(data.results));
}

const displayUser = users => {
    const userContainer = document.getElementById('user-container')
    for (const user of users){
        console.log(user)
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML = `
        <img class="img-container" src="${user.picture.large}" alt="" />
        <h2 class="name">Hi, My name is...</h2>
        <h1>${user.name.title} ${user.name.first} ${user.name.last}</h1>
        <h4>Gender: ${user.gender}</h4>
        <h4>Phone: ${user.phone}</h4>
        <p>User Location: ${user.location.state}, ${user.location.city}, ${user.location.country}</p>
        <p>User Email: ${user.email}</p>
        <p>Date of Birth: Age-${user.registered.age}, Date-${user.registered.date}</p>
        
        `;
        userContainer.appendChild(userDiv)
    }
}


loadUsers();