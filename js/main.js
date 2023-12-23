
var sitename =document.getElementById("tx-name");
var siteurl =document.getElementById("tx-url");
var bookmarks;
if (localStorage.getItem("myBookMarks")!=null) {
    bookmarks=JSON.parse(localStorage.getItem("myBookMarks"));
    display(bookmarks);
}
else{
    bookmarks=[];
}
function add() {
    if (validateName(sitename.value)&validateUrl(siteurl.value)) {
        var bookmark={
            name:sitename.value,
            url:siteurl.value
        }
        bookmarks.push(bookmark);
        localStorage.setItem("myBookMarks",JSON.stringify(bookmarks));
        display(bookmarks);
        clearForm(); 
    }
    else{
        alert("Enter Correct Data");
    }       
    }
function display(bookmarks) {
    cartona=``;
    for (let i = 0; i < bookmarks.length; i++) {
        cartona+=`
        <tr>
        <td>${i+1}</td>
        <td>${bookmarks[i].name}</td>              
        <td>
          <button onclick="window.open('${bookmarks[i].url} ')" class="btn btn-secondary">
            <i class="fa-solid fa-eye pe-2"></i>
            Visit
          </button>
        </td>
        <td>
          <button  onclick="deleteIteam(${i})" class="btn  btn-danger ">
            <i class="fa-solid fa-trash-can"></i>
            Delete
          </button>
        </td>
    </tr>
    `
    }
    document.getElementById("table-body").innerHTML=cartona;
}

function clearForm() {
    sitename.value='';
    siteurl.value='';
}

function deleteIteam(indexOfDelete) {
    bookmarks.splice(indexOfDelete,1);
    localStorage.setItem("myBookMarks",JSON.stringify(bookmarks));
    display(bookmarks);    
}

function validateName(name) {
    var nameRegx=/[A-Z]{1}[a-z]{3,8}$|^[A-Z]{1}[a-z]{3,6}\s[a-z]{3,7}$/;
    if (nameRegx.test(name)) {
        sitename.classList.replace("is-invalid","is-valid");   
        return true;
    }
    else{
        sitename.classList.add("is-invalid");  
        return false;
    }
}
function validateUrl(url) {
    var urlRegex=/^https:[\/]{2}/;
    if (urlRegex.test(url)) {
        siteurl.classList.replace("is-invalid","is-valid");   
        return true;
    }
    else{
        siteurl.classList.add("is-invalid");  
        return false;
    }
}
