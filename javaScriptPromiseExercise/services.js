function showImgInHtml() {
  Promise.all([
    axios.get("https://api.github.com/users/henriquesabonare")
  ])
  
    .then((res) => {
      const img = () => res[0].data.avatar_url;

      function showImg(img) {
        return (document.querySelector(
          ".imgs"
        ).innerHTML = `<img src='${img}'>`);
      }
      showImg(img());
    })
    .catch((error) => console.log(error));
}
function showFollowersInHtml(){
  Promise.all([
    axios.get('https://api.github.com/users/henriquesabonare/followers')
  ])

  .then(
    (res) => {
    const followers = () => res[0].data.length
      function showFollowers(followers){
        console.log()
        let dados = document.querySelector('.data')
        let h3 = document.createElement('h3')
        dados.appendChild(h3)
        return h3.textContent = `${followers} Seguidores`
      }
      showFollowers(followers())

    }
  )
}