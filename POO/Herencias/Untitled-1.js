const dittoP = fetch("https://pokeapi.co/api/v2/pokemon/ditto");

Promise.all([dittoP])
    .then(responses =>{
        responses.forEach(r => {
            
        })
    })