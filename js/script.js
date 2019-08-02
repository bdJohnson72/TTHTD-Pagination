/******************************************
 Treehouse Techdegree:
 FSJS project 2 - List Filter and Pagination
 ******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


//Global variables for student array and size of page


const studentList = document.getElementsByClassName("student-item");
const studentLimit = 10;

//function get set number of pages
numberOfPages = (array, pageMax) => {
    const totalPages = Math.ceil(array.length / studentLimit);
};

//Show Page function
showPage = (array, pageNum) => {
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
appendPageLinks = () => {
    //get page from HTML
    let page = document.querySelector('.page');
    d

};
showPage(studentList, 1);
numberOfPages(studentList, studentLimit);




