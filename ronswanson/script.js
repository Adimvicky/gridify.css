const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
const xhr = document.getElementById("xhr"),
      ftch = document.getElementById("fetch"),
      jq = document.getElementById("jquery"),
      ax = document.getElementById("axios"),
      quote = document.getElementById("quote-text");



// XHR

xhr.addEventListener('click', function(){
   var XHR = new XMLHttpRequest();
  
   XHR.onreadystatechange = function(){
       if(XHR.readyState == 4 && XHR.status == 200){
          let data = JSON.parse(XHR.responseText);
          console.log(typeof XHR.readyState,typeof XHR.status)
          quote.textContent = data[0];
       } else {
           throw Error("Something went wrong with the XHR..");
       }
    }

   XHR.open("GET",url);
   XHR.send();

})


// FETCH

ftch.addEventListener('click', function(){
    fetch(url)
    .then(function(res){
        if(!res.ok){
            throw Error("Something went wrong with the fetch")
        }
        return res;
    })
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        quote.textContent = data[0]
    })
    .catch(function(error){
        throw Error("Sorry - fetch failed..")
    })
})




// JQUERY


jq.addEventListener('click',function(){
    $.ajax({
        url : url,
        method : "GET"
    })
    .done(function(response){
        quote.textContent = response[0]
    })
    .catch(function(error){
        throw Error("Something went wrong with the Jquery Ajax request..")
    })

})


// AXIOS

ax.addEventListener('click',function(){
    axios.get(url)
    .then(function(response){
        quote.textContent = response.data[0];
    })
    .catch(function(error){
        throw Error("Something went wrong with the Axios Request..")
    })
})

