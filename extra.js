function addDetails() {
    bname = a1.value
    aname = a2.value
    pub = a3.value
    desc = a4.value

    book = { bname, aname, pub, desc }
    if (bname in localStorage) {
        // ale.innerHTML = `<p class="text-danger mt-2">User Already Exist</p>`
        alert ("BOOK DETAILS ALREADY EXIST")
    }
    else {
        // create an object user with user details
        // book={bname,aname,pub,desc}

        // store in localStorage
        localStorage.setItem(bname, JSON.stringify(book))
        // window.location='search.html'
        alert (" NEW BOOK DETAILS ADDED")
    }
}
function searchBook() {
    window.location = 'search.html'
}

function display() {
    typeBook = b1.value
    // JSON.parse(localStorage.getItem(book))
    if (typeBook in localStorage) {
        displayBook = JSON.parse(localStorage.getItem(typeBook))
        dis.innerHTML = `<p>BOOK NAME : ${displayBook.bname}</p>
    <p>AUTHOR NAME : ${displayBook.aname}</p>
    <p>PUBULICATION YEAR : ${displayBook.pub}</p>
    <p>DESCRIPTION : ${displayBook.desc}</p>`
    }
    else {
        dis.innerHTML = `<p  style="color:yellow">BOOK NOT FOUND</p>`
    }
}