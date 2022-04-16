const React = require("react");
const Def = require("../default");

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
  return (
    <Def>
      <main>
        <div></div>
        <div className="row">
          <div className="col-6">
            <img
              src={data.place.pic}
              className="img-fluid"
              alt={data.place.name}
            />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-6">
            <h1>{data.place.name}</h1>
            <h2>Rating</h2>
            <p>Not Rated</p>
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}.</h4>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
              Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
        <div>
          <h2>Comments</h2>
          <p>{comments}</p>
          <h2>Got a rant or rave of your own?</h2>
          <form method="POST" action={`/places/${data.place.id}/comment`}>
                <div className="form-group">
                    <label htmlFor="author">Your Name</label>
                    <input className="form-control" id="author" name="author" required />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <input className="form-control" id="content" name="content" />
                </div>
                <div className="form-group">
                    <label htmlFor="stars">Star Rating</label>
                    <input type="range" id="stars" name="stars"  min="0" max="5"/>
                </div>
                <div className="form-group">
                    <label htmlFor="rant">Rant?</label>
                    <input type="checkbox" id="rant" name="rant" />
                </div>
                <input className="btn btn-primary" type="submit" value="Submit"/>
            </form>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;

