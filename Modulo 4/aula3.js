axios.get('http://api.github.com/users/brunof3')
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.warn(error)
    })
