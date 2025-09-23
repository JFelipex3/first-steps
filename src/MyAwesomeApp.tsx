// Tarea
// Crear un componente de React dentro del src lladamo MyAwesomeApp
// El componente debe de retornar (cambiar el nombre)
// <h1>Fernando</h1>
// <h3>Herrera</h3>
// Hacer las configuraciones respectivas para poder ver el componente en pantalla.

// export function MyAwesomeApp() {
//     return (
//         <>
//             <h1>Jhonnatan</h1>
//             <h3>Machuca</h3>
//         </>
//     );
// }

// Se pueden definir las variables acá, si no se van a modificar
const firstName = 'Jhonnatan';
const lastName = 'Machuca';

const favoriteGames = ['Elder Ring', 'Smash', 'Metal Gear'];
const isActive = true;

const address = {
    zipCode: '255555040',
    country: 'Chile'
}

// Version como función de flecha
export const MyAwesomeApp = () => {

    // Definir variables que pueden cambiar acá
    let valor = 'Definido dentro de la función';

    valor = 'Valor actualizado dentro de la función';

    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>
            <p>{2 + 2}</p>

            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

            <p>{JSON.stringify(address)}</p>

            <p>{valor}</p>
        </>
    )
}