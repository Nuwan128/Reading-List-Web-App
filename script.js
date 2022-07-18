
//--variable--
const frmAdd = document.forms['addfrm'];
const list = document.getElementById('book-list');
const btnAdd = document.getElementById('btn-add');
const addTxtBox = document.getElementById('add-book-box');
const searchBox = document.getElementById('search-box');
const cheakBox = document.getElementById('ch-box');



//--Events

frmAdd.addEventListener('submit',addBook);
list.addEventListener('click',deleteBook);
searchBox.addEventListener('keyup',searchBook);
cheakBox.addEventListener('change',hideBooks);


// //--Funtion--

// delete book
function deleteBook(e){
    
    if(e.target.className == 'btn delete'){
        const li = e.target.parentElement;
        console.log(li);
        list.removeChild(li);
    }  
}

// add book
function addBook(e){

    e.preventDefault();

    if(addTxtBox.value == ' '){
        alert('please enter valid');
        console.log(addTxtBox.value);
    }
    else{
        const li = document.createElement('li');
        const p = document.createElement('p');
        const btn = document.createElement('button');

        li.className = 'item';
        p.textContent = addTxtBox.value;
        btn.className ='btn delete';
        btn.innerText ='delete';

        li.appendChild(p);
        li.appendChild(btn);
        list.appendChild(li);
    }


    

    
    addTxtBox.value = '';
    
    
}

//--search book--
function searchBook(e){

    const value = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');

    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(value) != -1){
            book.style.display = '';

        }else{
            book.style.display = 'none';
        }

    });
    

}

//--Hide books--
function hideBooks(e){
    if(cheakBox.checked){
        list.style.display = 'none';
    }
    else{
        list.style.display = '';
    }
}