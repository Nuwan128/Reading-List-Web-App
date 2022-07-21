
//--variable--
const frmAdd = document.forms['addfrm'];
const list = document.getElementById('book-list');
const btnAdd = document.getElementById('btn-add');
const addTxtBox = document.getElementById('add-book-box');
const searchBox = document.getElementById('search-box');
const cheakBox = document.getElementById('ch-box');
const books = list.getElementsByTagName('li');
var having;



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
   

    // console.log(e.target.firstElementChild.value.toLowerCase());
    if(addTxtBox.value == ' '){
        alert('Do not enter space as first element');
    }
    else{
       
        isHaving();
        // list.appendChild(li);
    }
    addTxtBox.value = '';
}


//--search book--
function searchBook(e){


    e.preventDefault();
    const value = e.target.value.toLowerCase();
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

//--all ready having book
function isHaving(){
    const li = document.createElement('li');
    const p = document.createElement('p');
    const btn = document.createElement('button');

    li.className = 'item';
    p.textContent = addTxtBox.value;
    btn.className ='btn delete';
    btn.innerText ='delete';

    li.appendChild(p);
    li.appendChild(btn);
    

        const arrBooks = Array.from(books);
       
        if(arrBooks.length >=0){
            // arrBooks.forEach(function(book){
                
            //     // const title = book.firstElementChild.textContent;
            //     // console.log("title is",title)
            //     // if(addTxtBox.value.toLowerCase() == title.toLowerCase()){
                    
            //     //     alert("All ready existing this book!");
            //     //     // list.appendChild(li);
                 
                    
            //     // }
                
            //     // else{
        
            //     //     list.appendChild(li);
            //     //     console.log(++counnt,title)
            //     //     return true;
                
            //     // }
                
                


            // });
            let count = 0;
            for(let i = 0; i < arrBooks.length; i++){
                const title = arrBooks[i].firstElementChild.textContent;
                console.log(title)
                if(addTxtBox.value.toLowerCase() == title.toLowerCase()){
                    alert("All ready existing this book!");
                    break;
                  
                }
                else{
                    ++count
                }
            
              }
              if(count == arrBooks.length){
                list.appendChild(li);
                console.log('dsdsdsdsdsd')
              }
           
        
        
      
    }
   
}

