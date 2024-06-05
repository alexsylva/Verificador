function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res= document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`//   
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.style.width = "350px"
    
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
        if (idade >=0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'img/bebemenino.png.png')
        } else if (idade >= 10 && idade < 21) {
            // jovem 
            img.setAttribute('src', 'img/homemjovem.png.png')
        } else if (idade < 50) {
            // adulto 
            img.setAttribute('src', 'img/homem.png.png')
        } else {
            // Idoso
            img.setAttribute('src', 'img/velho.png.png')
        } 


        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/bebemenina.png.png')
            } else if (idade >= 10 && idade < 21) {
                // jovem 
                img.setAttribute('src', 'img/mulherjovem.png.png')
            } else if (idade < 50) {
                // adulto 
                img.setAttribute('src', 'img/mulherjovem.png.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/venho.png.png')
            } 

        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}