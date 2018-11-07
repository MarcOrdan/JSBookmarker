//listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookMark);

function saveBookMark(e){
   //Get form values
   var siteName = document.getElementById('siteName').value;
   var siteUrl = document.getElementById('siteUrl').value;

    var bookmark = {
        name: siteName,
        url: siteUrl
    }

    //Local storage
    localStorage.setItem('test','fucking world');

    //Prevent form from submitting
    e.preventDefault();
}