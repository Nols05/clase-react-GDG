


export function Contador() {

    let contador = 0;

    function sumar() {
        contador++
        console.log("Nuevo valor del contador:" + contador)
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <button onClick={sumar} className="cursor-pointer mb-6 border p-4 rounded">
                Sumar
            </button>

            <p>{contador}</p>
        </div>
    )
}  