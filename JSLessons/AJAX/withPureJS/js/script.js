document.querySelector('button').onclick =()=> {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.querySelector("p").innerHTML = this.responseText;
    }
    xhttp.open("GET", "../data/naturalniy.txt");
    xhttp.send();
  }