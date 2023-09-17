const libros = [
    {
        "id": 1,
        "autor": "J.K. Rowling",
        "nombreLibro": "Harry Potter y la piedra filosofal",
        "generoLibro": "Fantasía",
        "fechaPublicacion": "1997-06-26",
        "precio": 19.99,
        "imagenURL": "https://ejemplo.com/imagen/harry_potter.jpg"
    },
    {
        "id": 2,
        "autor": "George Orwell",
        "nombreLibro": "1984",
        "generoLibro": "Ciencia Ficción",
        "fechaPublicacion": "1949-06-08",
        "precio": 15.95,
        "imagenURL": "https://ejemplo.com/imagen/1984.jpg"
    },
    {
        "id": 3,
        "autor": "Harper Lee",
        "nombreLibro": "Matar a un ruiseñor",
        "generoLibro": "Ficción Clásica",
        "fechaPublicacion": "1960-07-11",
        "precio": 17.50,
        "imagenURL": "https://ejemplo.com/imagen/matar_a_un_ruisenor.jpg"
    },
    {
        "id": 4,
        "autor": "Gabriel García Márquez",
        "nombreLibro": "Cien años de soledad",
        "generoLibro": "Realismo Mágico",
        "fechaPublicacion": "1967-05-30",
        "precio": 21.99,
        "imagenURL": "https://ejemplo.com/imagen/cien_anos_de_soledad.jpg"
    },
    {
        "id": 5,
        "autor": "Agatha Christie",
        "nombreLibro": "Asesinato en el Orient Express",
        "generoLibro": "Misterio",
        "fechaPublicacion": "1934-01-01",
        "precio": 14.75,
        "imagenURL": "https://ejemplo.com/imagen/asesinato_en_el_orient_express.jpg"
    },
    {
        "id": 6,
        "autor": "J.R.R. Tolkien",
        "nombreLibro": "El Señor de los Anillos",
        "generoLibro": "Fantasía",
        "fechaPublicacion": "1954-07-29",
        "precio": 25.00,
        "imagenURL": "https://ejemplo.com/imagen/el_senor_de_los_anillos.jpg"
    },
    {
        "id": 7,
        "autor": "Jane Austen",
        "nombreLibro": "Orgullo y prejuicio",
        "generoLibro": "Novela Romántica",
        "fechaPublicacion": "1813-01-28",
        "precio": 12.99,
        "imagenURL": "https://ejemplo.com/imagen/orgullo_y_prejuicio.jpg"
    },
    {
        "id": 8,
        "autor": "Stephen King",
        "nombreLibro": "It",
        "generoLibro": "Terror",
        "fechaPublicacion": "1986-09-15",
        "precio": 18.50,
        "imagenURL": "https://ejemplo.com/imagen/it.jpg"
    },
    {
        "id": 9,
        "autor": "F. Scott Fitzgerald",
        "nombreLibro": "El Gran Gatsby",
        "generoLibro": "Ficción Clásica",
        "fechaPublicacion": "1925-04-10",
        "precio": 16.75,
        "imagenURL": "https://ejemplo.com/imagen/el_gran_gatsby.jpg"
    },
    {
        "id": 10,
        "autor": "Mark Twain",
        "nombreLibro": "Las aventuras de Tom Sawyer",
        "generoLibro": "Aventuras",
        "fechaPublicacion": "1876-12-01",
        "precio": 14.99,
        "imagenURL": "https://ejemplo.com/imagen/las_aventuras_de_tom_sawyer.jpg"
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

agregarProducto()