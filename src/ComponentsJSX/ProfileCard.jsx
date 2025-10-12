
export default function ProfileCard({image, name, rol}) {
    return (
        <>
        <img src={image} alt="Image" width={120} height={100}/>
        <h1><i>Nombre: </i>{name}</h1>
        <h2><i>Rol: </i>{rol}</h2>
        
        </>
    )
}