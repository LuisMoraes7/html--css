const botao = document.querySelector('button#mudar-tema')
console.log(botao)



function trocarEstilo(estilo){
    estilo = document.getElementById('estilo').href = estilo
}

let theme;

window.onload = () => {
    const changeThemeStorage = localStorage.getItem('changeTheme')
    if (changeThemeStorage === 'true'){
        theme = true
    } else{
        theme = false
    }

    if (theme){
        trocarEstilo('estilos/style-dark.css')
    } else{
        trocarEstilo('estilos/style.css')
    }
}

botao.addEventListener('click', (event) => {
    theme = !(theme)
    localStorage.setItem('changeTheme', theme)
    if (theme){
        trocarEstilo('estilos/style-dark.css')
    } else{
        trocarEstilo('estilos/style.css')
    }

})