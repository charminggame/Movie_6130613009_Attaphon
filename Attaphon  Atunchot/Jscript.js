document.addEventListener('init', function(event) {
    var page = event.target;
  
    if (page.id === 'page1') {
        page.querySelector('#mov1').onclick = function() {
            console.log("joke")
            document.querySelector('#myNavigator').pushPage('joker.html')
        }
    } else if (page.id === 'page2') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
  });