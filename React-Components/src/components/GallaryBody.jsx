function GallaryBody(props) {
    return (
        <div>
            {
                props.Data.map(image => {
                    return (
                        <div key={image.id} className="column">
                            <img src={image.img} alt=""></img>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GallaryBody
