import { Profile } from "./Gallery"
import Gallery from "./Gallery"
import Message from "./Message";
import Children from "./Children";

function App() {
  return (
  <Message message="Hola mundo" author="orlando" date="today">
      <Children />
    </Message>  
  
  )
 
}

export default App
