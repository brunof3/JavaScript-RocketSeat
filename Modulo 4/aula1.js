var xhr = new XMLHttpRequest()

xhr.open('GET', 'http://api.github.com/users/diego3g')
//teria que passar, mas agora fica nulo
xhr.send(null)

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText))
        
    }
}
