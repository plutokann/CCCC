// fetch('data/activities.json')
//   .then(response => response.json())
//   .then(data => {
//     const gridContainer = document.querySelector('#populate-activities');
//     // Clear the existing items
//     gridContainer.innerHTML = '';

//     // Reverse the data array to iterate from newer to older
//     // data.reverse();

//     // Get the current page name
//     const pageName = window.location.pathname.split('/').pop();

//     // Set the limit to 3 by default, and remove the limit if the page is 'produccio.html'
//     const limit = pageName === 'produccio.html' ? data.length : 3;

//     // Use the slice method to get the limited number of items
//     const limitedData = data.slice(0, limit);

//     data.forEach(item => {
//       const div = document.createElement('div');
//       div.className = 'item';
//       div.innerHTML = `
//         <a href="${item.link}"><img src="${item.image}" alt=""></a>
//         <div>
//           <h3>${item.name}</h3>
//           <p>${item.medium}</p>
//           <p>${item.year}</p>
//         </div>
//       `;
//       gridContainer.appendChild(div);
//     });
//   });

fetch('../data/activities.json')
  .then(response => response.json())
  .then(data => {
    const gridContainer = document.querySelector('#populate-activities');
    // Clear the existing items
    gridContainer.innerHTML = '';

    // Reverse the data array to iterate from newer to older
    // data.reverse();

    // Get the current page name
    const pageName = window.location.pathname.split('/').pop();

    // Set the limit to 3 by default, and remove the limit if the page is 'produccio.html'
    const limit = pageName === 'activitats.html' ? data.length : 3;

    // Use the slice method to get the limited number of items
    const limitedData = data.slice(0, limit);

    limitedData.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `
        <a href="${item.link}"><img src="${item.image}" alt=""></a>
        <div>
          <h3>${item.name}</h3>
          <p>${item.medium}</p>
          <p>${item.year}</p>  
        </div>
      `;
      gridContainer.appendChild(div);
    });
  });

