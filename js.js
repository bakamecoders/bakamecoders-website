const container = document.getElementById('contents');

function loadPage(pageName)
{
    const xhr = new XMLHttpRequest;
    xhr.open('GET', pageName, true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == XMLHttpRequest.DONE)
        {
            if(xhr.status == 200)
            {
                contents.innerHTML = xhr.response;
            }
            else{
                contents.innerHTML = "Error!";
            }
        }
    };
    xhr.send();
}

// Remove 000 Watermark
$(document).ready(function() {
    $('[title="Hosted on free web hosting 000webhost.com. Host your own website for FREE."]').hide();
  });


  