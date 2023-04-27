import Card from './Card';

export default function Cards( {characters, onClose} ) {
   
   return (<div>

      {
         // props.characters.map
         characters.map(({id, name, species, status, gender, origin, image}) => {
            return <Card 
               key = {id} //La key la usa react
               id = {id} //El id lo usamos nosotros
               name = {name}
               status = {status}
               species = {species}
               gender = {gender}
               origin = {origin.name}
               image = {image}
               onClose = {onClose}
            />
         })
      }

   </div>)
}