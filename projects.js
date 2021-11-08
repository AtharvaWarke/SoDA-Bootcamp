const GITHUB_USERNAME = "YasserDbeis"
fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`).then(response => response.json()).then(repos => {
    for(const repo of repos){
        const repoName = repo.name
        const repoDescription = repo.description
        const repoURL = repo.html_url
        const repoLanguage = repo.language

        const cardContainer = document.createElement('div')
        cardContainer.className = "card center"

        const cardImage = document.createElement('img')
        cardImage.src = "./assests/generic_code_bgrnd.jpg"
        cardImage.className = "project-image"

        cardContainer.appendChild(cardImage)

        const projectInfoContainer = document.createElement('div')
        projectInfoContainer.className = "project-info-container"

        const projectTitle = document.createElement('h3')
        projectTitle.textContent = repoName

        const projectDescrpition = document.createElement('p')
        projectDescrpition.textContent = repoDescription

        const projectURL = document.createElement('a')
        projectURL.href = repoURL
        projectURL.target = "_blank"
        projectURL.append(projectTitle)

        const projectLanguage = document.createElement('p')
        projectLanguage.textContent = repoLanguage

        projectInfoContainer.appendChild(projectURL)
        projectInfoContainer.appendChild(projectDescrpition)
        projectInfoContainer.appendChild(projectLanguage)
        
        cardContainer.appendChild(projectInfoContainer)

        const projectContainer = document.getElementById('projects_container')
        projectContainer.appendChild(cardContainer)
    }
})