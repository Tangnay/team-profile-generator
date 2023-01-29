function getHTML(body) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>team generator</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid justify-content-center bg-danger">
        <a class="navbar-brand" href="#"> My Team </a>
      </div>
    </nav>

    <!-- body of the box -->
    <div class="d-flex justify-content-between">
      ${body}
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      crossorigin="anonymous"
    ></script>
  </body>
</html>

  
  `;
}

function generateHTML(answers) {
  let body = "";

  answers.forEach((employee) => {
    const { name, id, email, role, officeNumber, school, github } = employee;
    const card = `
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action active"> name: 
        ${name}
      </a>
      <a href="#" class="list-group-item list-group-item-action" 
        >${role}</a
      >
      <a href="#" class="list-group-item list-group-item-action"
        > ID: ${id}</a
      >
      <a href="mailto:${email}" class="list-group-item list-group-item-action"
        > Email: ${email}</a> 
      <a href="#" class="list-group-item list-group-item-action ${
        officeNumber === undefined ? "d-none" : ""
      }"
        >Office Number: ${officeNumber}</a>
      <a href="#" class="list-group-item list-group-item-action ${
        school === undefined ? "d-none" : ""
      }
      "
        > School: ${school}</a> 
      <a href="https://github.com/${github}" class="list-group-item list-group-item-action ${
      github === undefined ? "d-none" : ""
    }"
        > GitHub: ${github}</a> 
      
    </div>
    `;

    body += card;
  });

  return getHTML(body);
}

module.exports = generateHTML;
