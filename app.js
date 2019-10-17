//Get input element
let filterInput = document.getElementById('filterInput');

filterNames = () => {
    //GEt value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();


    //Get name ul

    let ul = document.getElementById('names');
    //Get li from ul
    let li = ul.querySelectorAll('li.collection-item');
    //loop through collection items
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        //if matched
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }

}
//Add event listener
filterInput.addEventListener('keyup', filterNames);