document.getElementById("generate-names").addEventListener("submit", loadNames);

function loadNames(e) {
  e.preventDefault();

  //reading the form values
  const origin = document.getElementById("country").value,
    genre = document.getElementById("genre").value,
    quantity = document.getElementById("quantity").value;

  // building the url
  let url = "http://uinames.com/api/?";

  // appending the origin to the url
  // check the condition: whether the origin is empty or not
  if (origin !== null) {
    url += `region=${origin}&`;
  }

  //   read the gender and append it to the url
  if (genre !== null) {
    url += `gender=${genre}&`;
  }

  //   read the quantity and append it to the url
  if (quantity !== null) {
    url += `amount=${quantity}&`;
  }

  //   Ajax call
  // our 4 steps

  // create new object
  const xhr = new XMLHttpRequest();

  // open the connection
  xhr.open("GET", url, true);

  // execute the function
  xhr.onload = function() {
    if (this.status === 200) {
      //   const names = JSON.parse(this.responseText);
      console.log(this.responseText);
    }
  };

  //   send the request
  xhr.send();
}
