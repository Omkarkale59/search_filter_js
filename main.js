const selectbox = document.querySelector('.select-box');
const selectoption = document.querySelector('.select-option');
const soValue = document.querySelector('#soValue');
const optionsearch = document.querySelector('#optionsearch');
const options = document.querySelector('.options');
const optionsList = document.querySelectorAll('.options li');

selectoption.addEventListener('click',function(){
    selectbox.classList.toggle('active');
});

optionsList.forEach(function(optionsListsingle){
    optionsListsingle.addEventListener('click',function(){
     text = this.textContent;
     soValue.value = text;
     selectbox.classList.remove('active');
    })
});

// optionsearch.addEventListener('keyup',function(){
//     var filter, li, i, textValue;
//     filter = optionsearch.value.toUpperCase();
//     li = options.getElementsByTagName('li');
//     for(i = 0; i < li.length; i++){
//         licount = li[i];
//         textValue = licount.textContent || licount.innerText;
//         if(textValue.toUpperCase().indexof(filter) > -1){
//             li[i].style.display = '';
//         }else{
//             li[i].style.display= 'none';
//         }
//     }
// })

optionsearch.addEventListener('keyup', function () {
    var filter = optionsearch.value.toUpperCase();
    optionsList.forEach(function (li) {
        var textValue = li.textContent || li.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li.style.display = '';
        } else {
            li.style.display = 'none';
        }
    });
});