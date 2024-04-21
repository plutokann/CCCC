fetch('../data/consorci-gent.json')
  .then(response => response.json())
  .then(data => {
    const gridContainer = document.querySelector('#populate-productions');
    // Clear the existing items
    gridContainer.innerHTML = '';
    
    // Iterate through each item in the data array
    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `
        <a href="${item.artistPage}?id=${item.artistID}"><img src="${item.artistImage}" alt=""></a>
        <div>
          <h3>${item.artistName}</h3>
          <p>${item.artistBio}</p>
        </div>
      `;
      gridContainer.appendChild(div);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
