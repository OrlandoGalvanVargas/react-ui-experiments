import { Profile } from "./Gallery"
import Gallery from "./Gallery"
import Message from "./Message";
import Children from "./Children";
import List from "./List";

function App() {
  return (
    <>
  <Message message="Hola mundo" author="orlando" date="today">
    <h1>Primer children con foto</h1>
      <Children />
    </Message>  
      <Message message="Hola mundo" author="orlando" date="today">
      <h1>Segundo Children sin foto</h1>
    </Message>  
    <List name="Laptop" done={true} />
    <List name="Telefono" done={true} />
    <List name="MP3" done={false} author="Yo"/>
  </>
  )
 
}

export default App
