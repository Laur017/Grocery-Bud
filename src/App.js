import {useState} from "react"

function App() {

  function capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }
  
  const [list, setList] = useState([])

  function getValue(event){
    event.preventDefault()
    setList([...list, capitalize(document.querySelector('input').value)])
    document.querySelector('input').value = ""
    document.querySelector('input').focus()
  }

  function deleteFromList(index){
    let array = list
    array = array.filter((item,i) => {if(i!==index){return item}})
    setList(array)

  }

  function editList(index){
    deleteFromList(index)
    document.querySelector('input').value = list[index]
    document.querySelector('input').focus()
  }

  
  const Lista = list.map((elemente,index) => (
      <article key={index}>{elemente} <div><img onClick={() => editList(index) } className="edit" src="edit.svg" alt="edit"/> <img onClick={() => deleteFromList(index)} className="trash" src="trash.svg" alt="trash"/> </div> </article>
  ))
  return (
    <div className="App">
      <h3>Grocery Bud</h3>
      <form>
        <input placeholder="e.g. eggs"></input>
        <button onClick={getValue} > Submit</button>
          {list.length > 0 && Lista}
        {list.length > 0 && <p onClick={() => setList([])}>Clear list</p>}
      </form>
    </div>
  );
}

export default App;
