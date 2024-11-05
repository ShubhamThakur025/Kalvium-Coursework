import './App.css';
import LikeImageHOC from './components/HOC/LikeImageHOC';
import LikePostHOC from './components/HOC/LikePostHOC';
import LikeImage from './components/RENDer/LikeImage';
import LikePost from './components/RENDer/LikePost';
import Wrapper from './components/RENDer/Wrapper';

function App() {
  return (
    <>

      <h1>Some Blog</h1>
      {/* Render Solution */}
      <h3>With RenderProps</h3>

      <Wrapper render={(counter, handleIncrement) => {
        return <LikeImage handleLikeImage={handleIncrement} LikeImageCounter={counter} />
      }} />
      <Wrapper render={(counter, handleIncrement) => {
        return <LikePost handleLikePost={handleIncrement} LikePostCounter={counter} />
      }} />

      {/* HOC solution */}
      <div>
        <h3>HOC</h3>
        <LikeImageHOC />
        <LikePostHOC />
      </div>
    </>

  )
}

export default App;
