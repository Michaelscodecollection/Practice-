function that(thisIs){
  if (thisIs === 'this'){
    console.log(thisIs);
  }else{
    console.log('that');
  }
  
}
that('notthis');


function whatsup (response){
  for (let i=0; i<response.length; i++){
    if (response[i] === 'coding'){
      console.log('you better be boii');
    }else{
      console.log('but wouldnt you rather be coding?')
    }
  }

}

//let response =
   whatsup(['coding', 'not coding']);
