


    var select = document.getElementById('selecttag');
   
    select.addEventListener("onchange", function()  {
        alert("working")
        var value = select.options[select.selectedIndex].value;
        if (value) {
          window.location.href = value;
        }
    }
    )
    
  