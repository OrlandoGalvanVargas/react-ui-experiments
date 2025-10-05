import {getImageUrl} from './util.js';

const person = {
  name: "juand",
  base: "https://upload.wikimedia.org/wikipedia/",
  data: "commons/6/60/Doors_electra_publicity_photo"
}

export function Profile() {
     return (
    <img
      src={getImageUrl(person)}
      alt="Image The Doors"
      />
  );
}

export default function Gallery() {
   return (
    <>
     <Profile />
     <Profile />
     <Profile />
     </>
   )
}