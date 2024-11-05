export default function LikePost(props) {
  return (
    <div>
      <button onClick={props.handleLikePost}>Like Post {props.LikePostCounter}</button>
    </div>
  )
}
