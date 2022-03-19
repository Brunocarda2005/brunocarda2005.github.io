// home




// curriculum 
const cv = document.getElementById("cv");
cv.addEventListener("click" , curriculum);

function curriculum (){
    
    let confirmo = confirm( "Do you want this resume in English?");
    if (confirmo == false) {   
      
      cv.setAttribute("href" , "cv español.docx");
      cv.removeEventlistener("click" , curriculum);      

    }else {
      
      cv.setAttribute("href" , "cv ingles.docx");
      cv.removeEventlistener("click" , curriculum);      

    }
    
}


 



