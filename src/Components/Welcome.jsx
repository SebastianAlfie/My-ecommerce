import Imagen from "../assets/Ropa1.avif"

const Welcome = () => {
  return (
    <div className="welcome">
      <p>Bienvenidos a Ropa va Ropa viene</p>
      <img src={Imagen} alt="Imagen_ropa" width={600}/>
    </div>
  )
}

export default Welcome