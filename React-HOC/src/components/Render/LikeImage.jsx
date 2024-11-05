export default function LikeImage(props){
    return (
        <div>
          <button onClick={props.handleLikeImage}>Like Post {props.LikeImageCounter}</button>
        </div>
    )
}