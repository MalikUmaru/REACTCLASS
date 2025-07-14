function greetUser(){

  const firstName = prompt("First name: ");
  const lastName = prompt("Last name: ");

  return firstName + " " + lastName;
}

let userName = greetUser()
function EE() {
  return (
  <div>
   Good Morning {userName}
  </div>
  )
}

export default EE;
