// listen to form submit
document.getElementById("myForm").addEventListener("submit", saveBookMark);

function saveBookMark(e) {
  // Get form values
  var siteName = document.getElementById("siteName").value;
  var siteUrl = document.getElementById("siteUrl").value;

  if(!validateForm(siteName,siteUrl)){
    return false;
  }

  var bookmark = {
    name: siteName,
    url: siteUrl
  };

  // Local storage test
  // localStorage.setItem('test','Hello World');
  // console.log(localStorage.getItem('test'));
  // localStorage.removeItem('test');
  // console.log(localStorage.getItem('test'));

  // Test if bookmarks is null
  if (localStorage.getItem("bookmarks") === null) {
    // Init array
    var bookmarks = [];
    // Add to array
    bookmarks.push(bookmark);
    // Set to localstorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    // Add bookmark to array
    bookmarks.push(bookmark);
    // Re-set back to localstorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  }
  //Re-fetch bookmarks
  fetchBookmarks();

  //Clear form and focus on site name
  document.getElementById('myForm').reset();
  document.getElementById("siteName").focus()

  // Prevent form from submitting
  e.preventDefault();
}

//Delete bookmark
function deleteBookmark(url) {
  //Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  //loop through bookmark
  for (var i = 0; i < bookmarks.length; i++){
    if(bookmarks[i].url == url){
      //remove from array
      bookmarks.splice(i,1);
    }
  }
  // Re-set back to localstorage
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  //Re-fetch bookmarks
  fetchBookmarks();
}


//Fetch bookmarks
function fetchBookmarks() {
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  // Get output id
  var bookmarksResults = document.getElementById("bookmarksResults");

  // Build Output
  bookmarksResults.innerHTML = "";
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

  bookmarksResults.innerHTML += '<div class="card bg-light text-dark card-body">'+
                                '<h3>'+name+
                                '<a class= "btn btn-secondary btn-sm" target="_blank" href="'+url+'">Visit</a> '+
                                '<a onClick="deleteBookmark(\''+url+'\')" class= "btn btn-danger btn-sm" href="#">Delete</a> '
                                '</h3>'+
                                '</div>';
  }
}

//Form Validation
function validateForm(siteName, siteUrl){
  if(!siteName || !siteUrl){
    alert('Please fill in the form');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteUrl.match(regex)){
    alert('Please use a valid URL');
    return false;
  }
    return true;

}

