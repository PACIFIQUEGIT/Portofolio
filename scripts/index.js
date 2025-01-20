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
        `<img src="images/2024-10-15 (3).png" alt="Project Title 2 Screenshot" >
        <p><strong>Title:</strong>${p.title}</p>
        <p><strong>Description:</strong>${p.description}</p>
        <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript.</p>
        <a href="https://linkedin-clone-sigma-ashen.vercel.app/" target="_blank">View Project</a>`
        container1.appendChild(div)
    })
 })
