// home




// curriculum 
const cv = document.getElementById("cv");
cv.addEventListener("click" , curriculum);

function curriculum (){
    
    let confirmo = confirm( "Do you want this resume in English?");
    if (confirmo == false) {
      
      cv.setAttribute("download" , "curriculum");   
      cv.setAttribute("href" , "cv español.docx");
      
    }else {
      
      cv.setAttribute("download" , "curriculum");
      cv.setAttribute("href" , "cv ingles.docx");
      
    }
    
}



 



