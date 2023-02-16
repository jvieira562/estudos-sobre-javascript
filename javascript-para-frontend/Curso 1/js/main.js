function TocaSom(seletorDeAudio)  
{
    const elemento = document.querySelector(seletorDeAudio)


    if((elemento != null) && (elemento.localName == 'audio'))
    {
        
        document.querySelector(seletorDeAudio).play();
    } 
    else 
    {
        console.log("Elemento invalido!")
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaDeTeclas.length; i++)
{
    let som = listaDeTeclas[i].classList[1];
    listaDeTeclas[i].onclick = 
    function () 
    { 
        TocaSom(`#som_${som}`); 
    }

    listaDeTeclas[i].onkeydown = function(event)
    {
        if(event.code === 'Space' || event.code === 'Enter') 
        {
            listaDeTeclas[i].classList.add('ativa');
        }        
    }

    listaDeTeclas[i].onkeyup = function()
    {
        listaDeTeclas[i].classList.remove('ativa');
    }
}