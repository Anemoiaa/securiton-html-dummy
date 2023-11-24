function initFilter() {
  const filterContainer = document.querySelector('#filter');
  
  if(!filterContainer) {
    return
  }

  const width = window.innerWidth;
  let activeFilter = 'pc';

  function setPcFilter() {
    activeFilter = 'pc';
    filterContainer.innerHTML = '';
    fetch('pc-filter.html')
      .then(response => response.text())
      .then(html => {
        filterContainer.innerHTML = html;
      })
      .catch(error => console.error('Error fetching external HTML:', error));
  }

  function setMobFilter() {
    activeFilter = 'mob';
    filterContainer.innerHTML = '';
    fetch('mob-filter.html')
      .then(response => response.text())
      .then(html => {
        filterContainer.innerHTML = html;
      })
      .catch(error => console.error('Error fetching external HTML:', error));
  }
  

  // First
  if (width < 1439) {
    setMobFilter();
  } else {
    setPcFilter();
  }

  window.addEventListener("resize", function () {
    const width = window.innerWidth;
    if(width < 1439 && activeFilter === 'pc') {
     setMobFilter();
    } else if (width > 1439 && activeFilter === 'mob') {
     setPcFilter();
    } 
    

  });

}

export { initFilter };