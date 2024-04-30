// Get the projectID from the URL
const urlParams = new URLSearchParams(window.location.search);
const projectID = urlParams.get('id');

// Fetch the project data
fetch('../../data/produccio.json')
  .then(response => response.json())
  .then(data => {
    
    // Find the project with the matching projectID
    const project = data.find(item => item.projectID === projectID);

    // Fetch the artist data
    fetch('../../data/consorci-gent.json')
      .then(response => response.json())
      .then(artists => {

        // Find the artist with the matching artistID
        const artist = artists.find(artist => artist.artistID === project.artistID);

        // Check if the project and artist exist
        if (project && artist) {
          const gridContainer = document.querySelector('#populate-productions');
          const div = document.createElement('div');
          div.className = 'item';

          // Replace \n\n with <br>
          const formattedDesc = project.projectDesc.replace(/\n\n/g, '<br>');

          // Remove the leading '/views' from the artistPage and projectPage URLs
          const artistPage = artist.artistPage.replace('/views', '');
          const projectPage = project.projectPage.replace('/views', '');

          div.innerHTML = `
            <a href="${projectPage}?id=${project.projectID}"><img src="${project.projectImage}" alt=""></a>
            <div>
              <h3>${project.projectName}</h3>
              <p>- ${project.projectMedium} -</p>
              <p class="italic"><a href="${artistPage}?id=${artist.artistID}">${project.artistName}</a> (${project.projectYear})</p>
              <p>${formattedDesc}</p>
              <br>
              ${project.projectLink ? `<a class='link' href="${project.projectLink}" target="_blank">${project.projectLinkName}</a>` : ''}
              <br>
            </div>
          `;
          gridContainer.appendChild(div);
        } else {
          console.log('Project or artist not found');
        }
      });
  });
