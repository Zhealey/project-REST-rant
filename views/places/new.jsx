const React = require("react");
const Def = require("../default");

function new_form() {
  return (
    <Def>
      <main className="my-2">
        <h1>Add a New Place</h1>
        <form method="POST" action="/places">
          <div className="row mx-2">
            <div className="form-group col-sm-4">
              <label htmlFor="name">Place Name</label>
              <input className="form-control" id="name" name="name" required />
            </div>
            <div className="form-group col-sm-4">
              <label for="founded">Founded Year</label>
              <input className="form-control" id="founded" name="founded" />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="pic">Place Picture</label>
              <input className="form-control" id="pic" name="pic" />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="city">City</label>
              <input className="form-control" id="city" name="city" />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="state">State</label>
              <input className="form-control" id="state" name="state" />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="cuisines">Cuisines</label>
              <input
                className="form-control col-sm-4"
                id="cuisines"
                name="cuisines"
                required
              />
            </div>
            <div className="my-4">
              <input
                className="btn btn-secondary"
                type="submit"
                value="Add Place"
              />
            </div>
          </div>
        </form>
      </main>
    </Def>
  );
}

module.exports = new_form;