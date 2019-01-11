/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/
const list = document.getElementsByClassName('student-item');

let page = 1;



/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/

const showPage = (list,page) => {
  const pageMin = page * 10 - 10;
  const pageMax = page * 10;

  for(let i = 0; i < list.length; i++){
    const listItem = list[i];
    if(pageMin <= i && i < pageMax){
      listItem.style.display = "";
    } else {
      listItem.style.display = "none";
    }
  }

  appendPageLinks(list);
}

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
  const div = document.createElement('div','className','pagination');
  const pageList = document.createElement('ul');
  const numPages = Math.ceil(list.length/10);


  function createElement(elementName, property, value) {
    const element = document.createElement(elementName);
    element[property] = value;
    return element;
  }

  function appendToPageList (value) {
    const li = createElement('li');
    const link = createElement('a','href','#');
    link.textContent = value;
    link.style.display="";

    if(value == 1) {
      link.className = 'active';
    } else {
      link.className = "";
    }
    li.appendChild(link);
    return li;
  }

  for(let i = 0; i < numPages; i++){
    const pageButton = appendToPageList(i+1);
    pageList.appendChild(pageButton);
  }

  div.appendChild(pageList);
  document.body.appendChild(div);

}

// Remember to delete the comments that came with this file, and replace them with your own code comments.