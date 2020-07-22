// Funcion auto invocada
(function () {
    let name = "hola";
    name = "Rafa ARevalo";
    console.log(name)

    let objeto = {
        nombre: "July",
        apellido: "Castañeda"
    }

    console.log(objeto)


    //Encadenar Templates Literales
    // ALT 96 https://elcodigoascii.com.ar/codigos-ascii/acento-grave-codigo-ascii-96.html
    const NOMBRE = "July",
        APELLIDO = "Castañeda",
        EDAD = 35;

    console.log(`
    ${NOMBRE} 
    ${APELLIDO} 
    ${EDAD}`)


    const sumarN = (a: number, b: number) => {
        console.log(a + b)
    }
    sumarN(5, 10);


    let x = 10;
    const p = new Promise((resolve, reject) => {
        if (x == 10) {
            resolve('Es correcto');
        } else {
            reject('Es falso');
        }
    })

    p.then(res => {
        console.log(`Susses ${res} `)
    });
    p.catch(error => {
        console.log(`Error ${error} `)

    })

})();
