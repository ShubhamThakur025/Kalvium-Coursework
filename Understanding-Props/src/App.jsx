import './App.css';

function App(props) {
  
  return (
    <div>
      <h1>Kalvium Gallery</h1>
      <div className = 'row'>
        {
          props.Data.map((element) => {
            return (
              <div className='column' key = {element.id}>
                <img src = {element.img} alt ="" />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
