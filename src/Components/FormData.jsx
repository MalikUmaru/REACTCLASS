import React from "react";

function FormData() {
  return (
    <div>
      <form>
        <div className="col">
          <div className="col-12 col-md-6 col-sm-3">
            <input type="text" placeholder="username" id="usernameId" />
          </div>
          <div className="col-12 col-md-6 col-sm-3">
            <input className="border rounded mb-10" type="password" placeholder="password" id="userpassword" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormData;
