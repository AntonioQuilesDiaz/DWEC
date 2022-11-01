    
 

    function datos(filas,columnas){
        var datos =document.getElementById("datos");

        const colores =["negro", "blanco", "rojo", "azul","amarillo","morado","verde","violeta"]

        let tabla = '';
        for(let i=0;i<filas;i++){
            tabla += `<tr>`;
            for(let j=0;j<columnas;j++){
                let x = Math.floor(Math.random() * 8);
                tabla += `<td>` + colores[x] + `</td>`;
            }
            tabla += `</tr>`
        }

        datos.innerHTML += tabla;
    } 
    datos(4,5);
