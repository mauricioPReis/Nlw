const linksSocialMedia = {
  github: 'mauricioPReis',
  youtube: 'UCyVXwPqCE58M2nackM9mcsw',
  facebook: 'akanomreiss',
  instagram: 'orion_mauricio',
  twitter: 'MauricioPaivaR2'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLinkGithub.href = data.url
      userPhoto.src = data.avatar_url
      userNickName.textContent = data.html_url
    })
}

getGitHubProfileInfos()
