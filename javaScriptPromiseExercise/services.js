function showImgInHtml() {
  Promise.all([
    axios.get("https://api.github.com/users/henriquesabonare"),
    axios.get('https://api.github.com/users/henriquesabonare/followers'),
    axios.get('https://api.github.com/users/henriquesabonare/following'),
    axios.get('https://api.github.com/users/henriquesabonare/repos')
  ])
  
    .then((res) => {
      function showImg() {
        const img = res[0].data.avatar_url;
        return (document.querySelector(
          ".imgs"
        ).innerHTML = `<img src='${img}'>`);
      }
      
      function showFollowers(){
        const followers = res[1].data.length
        let dados = document.querySelector('.data')
        let h3 = document.createElement('h3')
        dados.appendChild(h3)
        return h3.textContent = `${followers} Seguidores`
      }
      function showFollowing(){
        const following = res[2].data.length
        let dados = document.querySelector('.data')
        let h3 = document.createElement('h3')
        dados.appendChild(h3)
        return h3.textContent = `${following} Seguindo`
      }
      function showRepos(){
        const repos = res[3].data.length
        let dados = document.querySelector('.data')
        let h3 = document.createElement('h3')
        dados.appendChild(h3)
        return h3.textContent = `${repos} Repositórios`
      }
      function showCompany(){
        const company = res[0].data.company
        let dados = document.querySelector('.data')
        let h3 = document.createElement('h3')
        dados.appendChild(h3)
        return h3.textContent = `${company}`
      }
      function showLocation(){
        const location = res[0].data.location.replace(', São Bernardo do Campo ', ' - ')
        let dados = document.querySelector('.data')
        let h3 = document.createElement('h3')
        dados.appendChild(h3)
        return h3.textContent = `${location}`
      }
      showImg()
      showFollowers()
      showFollowing()
      showRepos()
      showCompany()
      showLocation()
    })
    .catch((error) => console.log(error));
}
// function showFollowersInHtml(){
//   Promise.all([
//     axios.get('https://api.github.com/users/henriquesabonare/followers')
//   ])

//   .then(
//     (res) => {
//     const followers = () => res[0].data.length
//       function showFollowers(followers){
//         console.log()
//         let dados = document.querySelector('.data')
//         let h3 = document.createElement('h3')
//         dados.appendChild(h3)
//         return h3.textContent = `${followers} Seguidores`
//       }
//       showFollowers(followers())

//     }
//   )
// }