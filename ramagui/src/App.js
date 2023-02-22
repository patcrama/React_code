import './App.css';
import SampleForm from './components/sampleForm';

function App() {
  return (
    <div className="App">
      
        <h1>This Rama React application</h1>
    <SampleForm/>
    </div>
  );
}

export default App;

function Button({onClick,children}){

  return(
    <button onClick={onClick}>{children}</button>
  )
}
function PlayButton({movieName}){
function handleOnclick(){
  alert(`Playing movie ${movieName}`);
}
  return(
    <Button onClick={handleOnclick} >
Play "{movieName}""
    </Button>
  )
}
function UploadImage(){
  function handleOnclick(){
    alert(`uploading Image`);
  }
  return(
    <Button onClick={handleOnclick} >
      Upload Image
    </Button>
  )
}