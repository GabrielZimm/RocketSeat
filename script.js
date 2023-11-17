function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    //pegar a tag img
    const img= document.querySelector("#profile img")

    //substituir a imagem
    if(html.classList.contains('light')) {
        // se tiver light mode, adiconar a image light
        img.setAttribute('src,' './assets/avatar light.png')
      
     } else{
        html.classList.add('light')
     }
    
}

//pegar a tag img

// se tiver light mode, adiconar a image light
//substituir a imagem
//se tiver sem light mode, manter a imagem normal