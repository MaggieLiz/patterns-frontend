function DisplayComments({ pattern }) {


  return (
    <div className="container">
      <div className="card">
        <h1 className="subtitle is-4 is-centered">Maker Notes</h1>
        <div>{pattern.comments.map(comment => {
          return (
            <div key={comment._id}>
              <h1 className="subtitle is-4">New Make</h1>
              <p>Made for: {comment.wearer}</p>
              <p>Fabric: {comment.fabric} - {comment.fabricType}</p>
              <p>Size: {comment.size}</p>
              <p>Mods/Hacks: {comment.modifications}</p>
            </div>
          )
        })}</div>
      </div>
      
    </div>
    
  )
}

export default DisplayComments