/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Global variables
const list = document.getElementsByClassName('student-item');
const itemsPerPage = 10;//Hard coded to always show 10 items per page
const firstPage = 1;    //Always start on page one. Indexing starts at 1 instead of 0.



//Shows selected page number with the given items per page.
const showPage = (list,selectedPage) => {
  const pageMin = selectedPage * itemsPerPage - itemsPerPage;
  const pageMax = selectedPage * itemsPerPage;

  for(let i = 0; i < list.length; i++){
    const listItem = list[i];
    if(pageMin <= i && i < pageMax){
      listItem.style.display = "";
    } else {
      listItem.style.display = "none";
    }
  }
};

//Generates and adds functionality to pagination links.
const appendPageLinks = (list) => {
  const numPages = Math.ceil(list.length/itemsPerPage); //Number of pages to be made

  //Create div to hold links, change class to pagination, add to page div.
  const div = document.createElement('div');
  div.className = 'pagination';
  document.querySelector('.page').appendChild(div);

  //Creates and appends ul to div
  const ul = document.createElement('ul');
  div.appendChild(ul);

  //Loops through the number of pages and creates a link for each
  for(let i =0; i<numPages;i++){
    let li = document.createElement('li');  //li to hold link

    //Generates link and makes the first one active
    let a = document.createElement('a');
    a.href = '#';
    a.textContent = i+1;
    if(i == (firstPage-1)){
      a.className = 'active';
    }

    //Appends link to ul
    li.appendChild(a);
    ul.appendChild(li);
  }

  //Selects links to be manipulated in event listener
  const links = ul.getElementsByTagName('a');
  console.log(links);

  /*Event listener to change all pagination links to inactive
    and make the clicked link active. Then shows the page for the selected link.*/
  ul.addEventListener('click', (event) => {
    if(event.target.tagName = 'A') {
      for(let i =0; i <links.length; i++){
        links[i].className = "";
      }
      event.target.className = "active";
      showPage(list,event.target.textContent);
    }
  });
};

const searchFunction = (list) => {

  //Creates div to hold search input and button
  const searchDiv = document.createElement('div');
  searchDiv.className = "student-search";

  //input
  const placeholder = document.createElement('input');
  placeholder.value = "Search for students...";
  searchDiv.appendChild(placeholder);

  //Search button
  const searchButton = document.createElement('button');
  searchButton.textContent = "Search";
  searchDiv.appendChild(searchButton);

  //Page header
  const header = document.querySelector('.page-header');
  header.appendChild(searchDiv);

  searchButton.addEventListener('click', (event) => {
    

  });

}
showPage(list, firstPage);  //Shows the first page
appendPageLinks(list);  //adds pagination links
searchFunction(list);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
