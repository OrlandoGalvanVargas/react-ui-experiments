export default function List({name, done, author = "NA"}) {
   return (
    <>
    <h3>{(author != "NA") && author}</h3>
    <h4>{done ? (<p style={{color:"green"}}>{name}</p>): (name) }</h4>
    </>
   )
}