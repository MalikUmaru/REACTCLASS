import React from "react";

function FormData() {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUserNameChange = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      // userName:userName,
      // password:password
      userName,
      password,
    });
    setUserName(""), setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="col">
          <div className="col-12 col-md-6 col-sm-3">
            <input
              type="text"
              placeholder="username"
              id="usernameId"
              value={userName}
              name="username"
              onChange={handleUserNameChange}
            />
          </div>
          <div className="col-12 col-md-6 col-sm-3">
            <input
              className="border rounded mb-10"
              type="password"
              placeholder="password"
              id="userpassword"
              value={password}
              name="password"
              onChange={handlePasswordChange}
            />
          </div>
          <input type="submit" value={"submit"} className="bg-success"/>
        </div>
      </form>
    </div>
  );
}

export default FormData;
