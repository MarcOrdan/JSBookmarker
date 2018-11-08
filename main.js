// listen to form submit
document.getElementById('myForm').addEventListener('submit', saveBookMark);

function saveBookMark(e){
   // Get form values
   var siteName = document.getElementById('siteName').value;
   var siteUrl = document.getElementById('siteUrl').value;

    var bookmark = {
        name: siteName,
        url: siteUrl
    }

    // Local storage test
    // localStorage.setItem('test','Hello World');
    // console.log(localStorage.getItem('test'));
    // localStorage.removeItem('test');
    // console.log(localStorage.getItem('test'));


    // Test if bookmarks is null
    if (localStorage.getItem('bookmarks') === null){
        // Init array
        var bookmarks = [];
        // Add to array
        bookmarks.push(bookmark);
        // Set to localstorage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    } else {
        // Get bookmarks from localStorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add bookmark to array
        bookmarks.push(bookmark);
        // Re-set back to localstorage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }


    //Prevent form from submitting
    e.preventDefault();
}