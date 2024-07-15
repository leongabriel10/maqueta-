const apiKey = `6402a2ee28c24e9e96398eaf10712af5`;

const Llamarjuego = async () => {
    try {
        const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&page_size=10`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

const crearTarjetas = (juegos) => {
    let juegoRow = document.getElementById('juegoRow');

    juegos.map((juego) => {
        const { name, background_image, description } = juego;

        const divRow = document.createElement('div');
        divRow.classList.add('col-xl-3', 'col-lg-3', 'col-md-3', 'col-sm-12', 'col-xs-12', 'mt-2', 'mb-2');

        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = background_image;
        img.classList.add('card-img-top');

        const divBody = document.createElement('div');
        divBody.classList.add('card-body');

        const titulo = document.createElement('h5');
        titulo.classList.add('card-title');
        titulo.textContent = name;

        const subTitulo = document.createElement('p');
        subTitulo.classList.add('card-text');
        subTitulo.textContent = description || '';

        const btnMostrar = document.createElement('button');
        btnMostrar.classList.add('btn', 'btn-danger');
        btnMostrar.textContent = 'Ver detalles';

        divRow.appendChild(card);
        card.appendChild(img);
        card.appendChild(divBody);
        divBody.appendChild(titulo);
        divBody.appendChild(subTitulo);
        divBody.appendChild(btnMostrar);

        juegoRow.appendChild(divRow);
    });
};

Llamarjuego()
    .then((data) => {
        if (data && data.results) {
            crearTarjetas(data.results);
        }
    })
    .catch((error) => {
        console.log(error);
    });
