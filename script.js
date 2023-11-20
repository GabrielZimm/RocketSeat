function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    //pegar a tag img
    const img= document.querySelector("#profile img")

    //substituir a imagem
    if(html.classList.contains('light')) {
        // se tiver light mode, adiconar a image light
        img.setAttribute('src', './assets/avatar light.png')
     } else{
        //se tiver sem light mode, manter a imagem normal
         img.setAttribute('src', './assets/avatar Gabriel.png')
     }


     
    if(html.classList.contains('light')){

        img.setAttribute('alt', "Foto do Gabriel em um parque em um dia ensolarado")
    } else{
        img.setAttribute('alt', "Foto do Gabriel em um parque, utilizando casado preto.")
    }

}

    