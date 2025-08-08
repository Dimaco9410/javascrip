// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = []; // aquí se almacenarán los nombres de la lista
let amigo =[];
function agregarAmigo()
{
            // 1.Obtener el valor del usuario
            const input = document.getElementById("amigo");
            const nombre = input.value.trim(); // eliminamos espacios al inicio/final

            //2.Validar la entrada
            if (nombre === "") {
                alert("Por favor, inserte un nombre.");
                return;
                }

            //3. Validar duplicados (ignorando mayúsculas)
                const existe = listaDeAmigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase());

                if (existe) {
                    alert("Ese amigo ya está en la lista.");
                    input.value = "";
                    return;
                }


            //4. Agregar al arreglo
            listaDeAmigos.push(nombre);
            console.log("Amigos actuales:", listaDeAmigos);
        
            // 5. Actualizar la lista visual
            actualizarListaAmigos();

            //6. Limpiar el input
            input.value = "";
    
        }




function actualizarListaAmigos()
 {
    // 1. Obtener el elemento de la lista en el HTML
    const lista = document.getElementById("listaAmigos");

    // 2. Limpiar la lista (esto borra los <li> anteriores)
    lista.innerHTML = "";

    // 3. Recorrer el arreglo 'amigos' y crear <li> por cada uno
    for (let i = 0; i < listaDeAmigos.length; i++) {
        const nombre = listaDeAmigos[i];

        // Crear un nuevo <li>
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre;

        // Agregar el <li> a la lista
        lista.appendChild(nuevoElemento);
    }
}

function sortearAmigo()  
{

 if (listaDeAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceAleatorio];


  // Mostrar el resultado en el HTML usando getElementById
    document.getElementById("resultado").textContent = "El amigo sorteado es: " + amigoSorteado;

    console.log("Amigo sorteado:", amigoSorteado);


    
}
