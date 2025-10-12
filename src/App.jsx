import ProfileCard from "./ComponentsJSX/ProfileCard";
import Button from "./ComponentsJSX/Button";

function App() {
  return (
    <>
  <ProfileCard image="https://whiplash.net/imagens_promo_22/kiss_casablanca.jpg" name="Kiss" rol="Band" />
  <ProfileCard image="https://pm1.aminoapps.com/6510/8fe2908d903a8d5179cd732f2e92b9ce82fbe72c_hq.jpg" name="Angus Young" rol="Guitar" />
  <ProfileCard image="https://img2.rtve.es/n/373605" name="Jim Morrison" rol="Vocal" />

   <Button color="green" text="Hola" />
   <Button color="red" text="Buenas" />
   <Button color="blue" text="Noches" />
  </>
  )
 
}

export default App
