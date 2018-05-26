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

  //   fetch api code
  fetch(url).then(response => {
    return response.json().then(names => {
      let html = "<h3>Generated Names:</h3>";
      html += '<ul class="list">';
      names.forEach(name => {
        html += `
        <li>${name.name}</li>
    `;
      });
      html += "</ul>";
      document.getElementById("result").innerHTML = html;
    });
  });
}
