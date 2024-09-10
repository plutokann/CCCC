fetch('../data/consorci-gent.json')
  .then(response => response.json())
  .then(data => {
    const gridContainer = document.querySelector('#populate-consorci');
    // Clear the existing items
    gridContainer.innerHTML = '';

    // Reverse the data array to iterate from newer to older
    data.reverse();

    // Get the current page name
    const pageName = window.location.pathname.split('/').pop();

    // Set the limit to 3 by default, and remove the limit if the page is 'conosorci-gent.html'
    const limit = pageName === 'consorci-gent.html' ? data.length : 3;

    // Use the slice method to get the limited number of items
    const limitedData = data.slice(0, limit);

    // Iterate over the limited data and create HTML elements for each item
    limitedData.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `
        <a href="${item.artistPage}?id=${item.artistID}"><img src="${item.artistImage}" alt=""></a>
        <div>
          <h3>${item.artistName}</h3>
          <p>${item.artistBio}</p>  
        </div>
      `;
      gridContainer.appendChild(div); // Append the created elements to the container
    });
  });

