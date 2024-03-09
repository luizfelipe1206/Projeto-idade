function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('year')
    var idade = ano - Number(fano.value)
    var fsex = document.getElementsByName('gender')
    var genero = ''
    var res = document.getElementById('picture')
    var img = document.createElement('img')
    img.setAttribute('id' , 'picture')
    if (fano.value == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src' , 'CriançaMenino.jpg')
            }else if (idade >= 10 && idade < 21){
                //adolescente
                img.setAttribute('src' , 'AdolescenteMenino.jpg')
            }else if (idade >= 21 && idade < 50){
                //adulto
                img.setAttribute('src' , 'AdultoMenino.jpg')
            }else{
                //idoso
                img.setAttribute('src' , 'Veio.jpg')
            }
            
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src' , 'CriançaMenina.jpg')
            }else if (idade >= 10 && idade < 21){
                //adolescente
                img.setAttribute('src' , 'AdolescenteMenina.jpg')
            }else if (idade >= 21 && idade < 50){
                //adulto
                img.setAttribute('src' , 'AdultoMenina.jpg')
            }else{
                //idoso
                img.setAttribute('src' , 'Veia.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Seu gênero é ${genero} e sua idade é ${idade} anos.`
        res.appendChild(img)
    }
}