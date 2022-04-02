const React = require("react");
const Def = require("../default");

function show(data) {
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
          </div>
          <div className="col-6">
            <h1>{data.place.name}</h1>
            <h2>Rating</h2>
            <p>Not Rated</p>
            <h2>Description</h2>
            <p>
              Located in {data.place.city}, {data.place.state}. Serving {data.place.cuisines}.
            </p>
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
          <p>No comments yet!</p>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
