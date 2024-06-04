const games = ( ) => {
    return new Promise ((resolve,reject) =>{
        fetch (`https://api.rawg.io/docs/?format=openapi`)
        .then((juegos) =>{
            if (!juegos.ok) { 
                throw new Error ("error") 
                
            }
            return juegos.json();
        })
        .then ( (data) =>{
            resolve(data);
        })
        .catch((error) =>{
            console.log(error);
        })
    })
}

Llamarjuego()
    .then((juegos) =>{
        juegos.map((juego) =>{
            console.log(juego);
        })
    })
    .catch((error) =>{
        console.log(error);
    })

