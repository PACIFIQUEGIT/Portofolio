const fetchUsers = async () =>{
    const res = await fetch('https://portofolio-express.onrender.com/api/v1/users')
    const users = await res.json()
    return users
}
fetch('url', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: {
        email: '',
        password: ''
    }
})
 fetchUsers().then(data => {
    const container1 = document.querySelector(".portfolio_container1")
    data[0].portfolio.map(p =>{
        const div = document.createElement("div")
        div.classList.add("project")
        div.innerHTML = 
        `<img src="${p.imageUrl || 'images/default.png'}" alt="${p.title} Screenshot">
        <p><strong>Title:</strong> ${p.title}</p>
        <p><strong>Description:</strong> ${p.description}</p>
        <p><strong>Technologies Used:</strong> ${p.skills}</p>
        <a href="${p.projectUrl}" target="_blank">View Project</a>`
        container1.appendChild(div)
    });
    const container2 = document.querySelector(".about_container2")
    data[1].about.map(a => {
        const div = document.createElement("div")
        div.classList.add("about-content")
        div.innerHTML =
        `<h1>${a.title}</h1>
        <p>${a.description}</p>`
        container2.appendChild(div)
    })
 })
