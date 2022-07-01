// showFollowersInHtml()

showImgInHtml()

document.querySelector('button').addEventListener('click', () => {
  let changeColor = '#' + Math.floor(Math.random()*16727215).toString(16)

  document.querySelector('.imgs').style.backgroundColor = `${changeColor} `
})
