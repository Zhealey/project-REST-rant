const React = require("react");
const Def = require("../default.jsx");

function edit_form(data) {
  return (
    <Def>
      <main className="my-2">
        <h1>Edit Place</h1>
        <form method="POST" action={`/places/${data.id}?_method=PUT`}>
          <div className="row mx-2">
            <div
              className="form-group col-sm-4
            "
            >
              <label htmlFor="name">Place Name</label>
              <input
                className="form-control"
                id="name"
                name="name"
                value={data.place.name}
                required
              />
            </div>
            <div
              className="form-group col-sm-4
            "
            >
              <label htmlFor="pic">Place Picture</label>
              <input
                className="form-control"
                id="pic"
                name="pic"
                value={data.place.pic}
              />
            </div>
            <div
              className="form-group col-sm-4
            "
            >
              <label htmlFor="city">City</label>
              <input
                className="form-control"
                id="city"
                name="city"
                value={data.place.city}
              />
            </div>
            <div
              className="form-group col-sm-4
            "
            >
              <label htmlFor="state">State</label>
              <input
                className="form-control"
                id="state"
                name="state"
                value={data.place.state}
              />
            </div>
            <div
              className="form-group col-sm-4
            "
            >
              <label htmlFor="cuisines">Cuisines</label>
              <input
                className="form-control"
                id="cuisines"
                name="cuisines"
                value={data.place.cuisines}
                required
              />
            </div>
            <div className="my-4">
              <input
                className="btn btn-secondary"
                type="submit"
                value="Update Place"
              />
            </div>
          </div>
        </form>
      </main>
    </Def>
  );
}

module.exports = edit_form;