


    var select = document.getElementById('selecttag');
   
    select.addEventListener("onchange", function()  {
        alert("working")
        var value = select.options[select.selectedIndex].value;
        
          window.location.href = value;
        
    }
    )
    
  