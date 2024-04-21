// Get the artistID from the URL
const urlParams = new URLSearchParams(window.location.search);
const artistID = urlParams.get('id');

// Fetch the artist data
fetch('../../data/consorci-gent.json')
  .then(response => response.json())
  .then(data => {
    
    // Find the artist with the matching artistID
    const artist = data.find(item => item.artistID === artistID);

    // Fetch the project data
    fetch('../../data/produccio.json')
      .then(response => response.json())
      .then(projects => {

        // Filter the projects that match the artistID
        const artistProjects = projects.filter(project => project.artistID === artistID);

        // Create a string with all the project names and links
        const projectLinks = artistProjects.map(project => `<a href="${project.projectPage}?id=${project.projectID}">${project.projectName}</a>`).join(', ');

        // Check if the artist exists
        if (artist) {
          const gridContainer = document.querySelector('#populate-productions');
          const div = document.createElement('div');
          div.className = 'item';

          // Replace \n\n with <br>
          const formattedBio = artist.artistBio.replace(/\n\n/g, '<br>');

          div.innerHTML = `
            <a href="${artist.artistPage}?id=${artist.artistID}"><img src="${artist.artistImage}" alt=""></a>
            <div>
              <h3>${artist.artistName} (${artist.artistYear})</h3>
              <p>${artist.artistPronouns}</p>
              <p class="item-desc">${formattedBio}</p>
              <a href="${artist.artistLink}" target="_blank">Pàgina Web</a> <!-- Add target="_blank" -->
              <p class="item-cccc">Projectes a Centre del Col·lapse:</p>
              <p>${projectLinks}</p> <!-- Add this line -->
            </div>
          `;
          gridContainer.appendChild(div);
        } else {
          console.log('artist not found');
        }
      });
  });
