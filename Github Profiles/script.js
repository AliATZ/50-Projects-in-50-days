const APIURL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(username) {
    try {

        const {data} = await axios(APIURL + username)

        createUserCard(data)
        getRepos(username)
    }catch (err){
        if(err.response.status == 404) {
        createErrorCard('there is no username')
        }
    }
}

async function getRepos(username) {
    try {

        const {data} = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
    }catch (err){
        if (err.response.status === 404) {
            createErrorCard('problem fetching repos')
        }
    }
}


function addReposToCard(repos){
    const reposEl = document.getElementById('repos')
    repos.slice(0,10).forEach( repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name
        reposEl.appendChild(repoEl)
    })
}

function createErrorCard(msg) {
    const cardHTML = `<div class="card">
            <h1>${msg}</h1>
        </div>`

        main.innerHTML = cardHTML
}
function createUserCard(user) {
    const userID = user.name || user.login
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `
    main.innerHTML = cardHTML

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user= search.value;
    if (user){
        getUser(user)

        search.value = ''
    }
})
