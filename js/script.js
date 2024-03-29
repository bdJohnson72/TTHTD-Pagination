/******************************************
 Treehouse Techdegree:
 FSJS project 2 - List Filter and Pagination
 ******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


//Global variables for student array and size of page

"use strict"
const studentList = document.getElementsByClassName("student-item");
const studentLimit = 10;
let resultsFound = true;




//add search bar to top of page
function createSearchBar(){
    let location = document.getElementsByClassName('cf').item(0);
    let input = document.createElement('input');
    let div = document.createElement('div');
    let button = document.createElement('button');
    location.appendChild(div);
    div.appendChild(input);
    div.setAttribute('class', 'student-search' );
    input.setAttribute('placeholder', 'Search by student name');
    input.setAttribute('type', 'text');
    //input.setAttribute('onkeyup', 'search()');
    input.setAttribute('id', 'search-field');
    div.appendChild(button);
    button.innerHTML = "Search";
    button.addEventListener('click', (e) =>{
       search();
        }
    );

}


//function get set number of pages
 const numberOfPages = (array, pageMax) => {
    const totalPages = Math.ceil(array.length / studentLimit);
    return totalPages;
};

//Show Page function
const showPage = (array, pageNum) => {
    //set index numbers to adjust for items in array with 0 based index
    const startIndex = (pageNum * studentLimit) - studentLimit;
    const endIndex = (pageNum * studentLimit) - 1;

    const li = document.querySelector('li');
    for (let i = 0; i < array.length; i++) {
        array[i].style.display = 'none';
    }
    for (let i = 0; i < array.length; i++) {
        if (i >= startIndex && i <= endIndex) {
            array[i].style.display = 'block';
        }
    }
};

/***
 Create the `appendPageLinks function` to generate, append, and add
 functionality to the pagination buttons.
 ***/
const appendPageLinks = (list) => {
    //get page from HTML
    const page = document.querySelector('.page');
    const div = document.createElement("div");
    const pageList = document.createElement("ul");
    div.classList.add('pagination');
    page.appendChild(div);
    div.appendChild(pageList);
    const pagesNeeded = numberOfPages(studentList, studentLimit);
    for (let i = 1; i <= pagesNeeded; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = i.toString();
        //set page 1 to active
        if (a.textContent === '1') {
            a.classList.add('active');
        }
        a.setAttribute('href', '#');
        pageList.appendChild(li);
        li.appendChild(a);
    }
    setEventHandlers();
};
const removePagination = () => {
    const pagination = document.querySelector('.pagination');
    console.log(pagination);
    pagination.innerHTML = '';
}

const setEventHandlers = () => {
    const anchorTags = document.querySelectorAll("a");
    anchorTags.forEach(element => {
        addEventListener("click", (e) => {
            updateActiveLink(anchorTags);
            e.target.classList.add('active');
            showPage(studentList, e.target.textContent);
        })
    })
}

const updateActiveLink = (tagList) => {
    tagList.forEach(element => {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        }
    })
}
/*****
 * Start of search functionality
 */

const search = () => {
    const studentNames = document.getElementsByTagName("h3");
    let searchResults = [];
    removePagination();
    const searchTerm = document.getElementById('search-field');
    let searchValue = searchTerm.value.toLowerCase();
    console.log('search term = ' + searchValue);
    for (let i = 0; i < studentNames.length; i++) {
        let nameToCheck = studentNames[i].textContent;
        let nameValue = nameToCheck;
        if (nameValue.includes(searchValue) ) {
            console.log('match found');
            studentList[i].style.display = 'block';
            searchResults.push(nameValue);
            console.log(nameValue);
        }
        if(searchResults.length > 0){
            resultsFound = true;
            setDisplay(searchResults);
        }else {
            console.log('in no results loop');
            if(resultsFound = true){
                let location = document.querySelector('.page');
                let div = document.createElement('div');
                div.textContent = 'No Results Found';
                location.appendChild(div);
                for(let i = 0; i < studentList; i++){
                    studentList[i].style.display = 'none';
                    resultsFound = false;
                }

            }else {return}

        }
    }
};

const setDisplay = (searchResults) => {
    console.log('value in search array' + searchResults);
}

createSearchBar();
showPage(studentList, 1);
appendPageLinks(studentList);



