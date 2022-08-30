//create the about section
const generateAbout = aboutText => {
  if(!aboutText) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
      <p>${aboutText}</p>
      </section>
      `;
};

const generateProjects = projectsArr => {
  const projectHtmlArr = projectsArr.map(({name, description, languages, link}) => {
    return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
        <!-- Leaving this empty as we'll dynamically insert a project HTML here -->
      </div>
    </section>
  `;
});

  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${projectHtmlArr.join('')}
      </div>
    </section>
    `;
};

module.exports = (templateData) => {
    console.log(templateData);
    
// destructure projects and about data from templateData based on their property key names
const { projects, about } = templateData;

// this will create three variables based on data in templateData
const { projects, about, ...header } = templateData;


    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
    
    <body>
      <h1>${templateData.name}</h1>
      <h2><a href="https://github.com/${templateData.github}">Github</a></h2>
      <main class="container my-5">
        ${generateAbout(about)}
        ${generateProjects(projects)}
      </main>
    </body>
    </html>
    `;
  };
  