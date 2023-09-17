const libros = [
    {
        "id": 1,
        "autor": "J.K. Rowling",
        "nombreLibro": "Harry Potter y la piedra filosofal",
        "generoLibro": "Fantasía",
        "fechaPublicacion": "1997-06-26",
        "precio": 19.99,
        "imagenURL": "images/HP piedra filosofal.jpg"
    },
    {
        "id": 2,
        "autor": "George Orwell",
        "nombreLibro": "1984",
        "generoLibro": "Ciencia Ficción",
        "fechaPublicacion": "1949-06-08",
        "precio": 15.95,
        "imagenURL": "images/1984 - GO.jpg"
    },
    {
        "id": 3,
        "autor": "Harper Lee",
        "nombreLibro": "Matar a un ruiseñor",
        "generoLibro": "Ficción Clásica",
        "fechaPublicacion": "1960-07-11",
        "precio": 17.50,
        "imagenURL": "images/matar a un ruiseñor.jpg"
    },
    {
        "id": 4,
        "autor": "Gabriel García Márquez",
        "nombreLibro": "Cien años de soledad",
        "generoLibro": "Realismo Mágico",
        "fechaPublicacion": "1967-05-30",
        "precio": 21.99,
        "imagenURL": "images/cien años de soledad.jpg"
    },
    {
        "id": 5,
        "autor": "Agatha Christie",
        "nombreLibro": "Asesinato en el Orient Express",
        "generoLibro": "Misterio",
        "fechaPublicacion": "1934-01-01",
        "precio": 14.75,
        "imagenURL": "images/asesinato en el orient express.jpg"
    },
    {
        "id": 6,
        "autor": "J.R.R. Tolkien",
        "nombreLibro": "El Señor de los Anillos",
        "generoLibro": "Fantasía",
        "fechaPublicacion": "1954-07-29",
        "precio": 25.00,
        "imagenURL": "images/LOTR.jpg"
    },
    {
        "id": 7,
        "autor": "Jane Austen",
        "nombreLibro": "Orgullo y prejuicio",
        "generoLibro": "Novela Romántica",
        "fechaPublicacion": "1813-01-28",
        "precio": 12.99,
        "imagenURL": "images/orgullo y prejuicio.jpg"
    },
    {
        "id": 8,
        "autor": "Stephen King",
        "nombreLibro": "It",
        "generoLibro": "Terror",
        "fechaPublicacion": "1986-09-15",
        "precio": 18.50,
        "imagenURL": "images/IT.jpg"
    },
    {
        "id": 9,
        "autor": "F. Scott Fitzgerald",
        "nombreLibro": "El Gran Gatsby",
        "generoLibro": "Ficción Clásica",
        "fechaPublicacion": "1925-04-10",
        "precio": 16.75,
        "imagenURL": "images/el gran gatsby.jpg"
    },
    {
        "id": 10,
        "autor": "Mark Twain",
        "nombreLibro": "Las aventuras de Tom Sawyer",
        "generoLibro": "Aventuras",
        "fechaPublicacion": "1876-12-01",
        "precio": 14.99,
        "imagenURL": "images/tom sawyer.jpg"
    }
]

let listadoProductos = document.getElementById("listadoProductos");

function agregarProducto() {
    libros.forEach(l => {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = `Libro ID: ${l.id} Nombre ${l.nombreLibro}`;
        listadoProductos.appendChild(nuevoElemento);
    })
 }

let contenedorTarjetas = document.getElementsByClassName("contenedorPropuesta").item(0);

function agregarTarjetasProductos() {

    libros.forEach(libro => {
        const tarjetaProducto = document.createElement("div");
        tarjetaProducto.classList.add("card");
        tarjetaProducto.style.width = "16rem";

        tarjetaProducto.innerHTML = `
            <img src="${libro.imagenURL}" class="card-img-top" alt="Portada del libro">
            <div class="card-body">
                <h5 class="card-text">${libro.nombreLibro}</h5>
                <p class="card-text">Autor: ${libro.autor}</p>
                <a href="#" class="btn btn-primary btn-colores">Más detalle</a>
            </div>
        `;

        contenedorTarjetas.appendChild(tarjetaProducto);
    })
}

agregarTarjetasProductos()