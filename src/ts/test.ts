let user = "Jane User";

function greeter(person: string) {
  return "Hello, " + person;
}

//document.body.textContent = greeter(user);

let greet = () => {
  console.log("Hello there, " + user);
};

greet();
