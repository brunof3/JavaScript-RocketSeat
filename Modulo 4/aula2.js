var minhaPromise = function(){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'http://api.github.com/users/brunof3')
        xhr.send(null)

        xhr.onreadystatechange = function(){
            if (xhr.readyState===4){
                if(xhr.status ==200){
                    resolve(JSON.parse(xhr.responseText))
                }else{
                    reject('erro na requisição')
                }
            }
        }
    })
}
minhaPromise()
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.warn(error)
    })
