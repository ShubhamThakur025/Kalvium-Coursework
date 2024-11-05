import './App.css';
import GallaryFooter from './components/GallaryFooter';
import GallaryHeader from './components/GallaryHeader';
import GallaryBody from './components/GallaryBody';

function App(props) {
  return (
    <div>
      <GallaryHeader />
      <GallaryBody Data = {props.Data}/>
      <GallaryFooter/> 
    </div>
  )
}

export default App;