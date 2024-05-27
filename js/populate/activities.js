fetch('data/activities.json')
  .then(response => response.json())
  .then(data => {
    const gridContainer = document.querySelector('#populate-activities');
    // Clear the existing items
    gridContainer.innerHTML = '';
    
    // Reverse the data array to iterate from newer to older
    // data.reverse();
    
    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `
        <a href="${item.activityLink}"><img src="${item.image}" alt=""></a>
        <div>
          <h3>${item.name}</h3>
          <p>${item.medium}</p>
          <p>${item.year}</p>
        </div>
      `;
      gridContainer.appendChild(div);
    });
  });
