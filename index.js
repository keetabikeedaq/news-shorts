function getNews(){
    const para =document.querySelector("p")
    var e = document.getElementById("ddlViewBy");
   var strUser = e.value;
   console.log(strUser);
   fetch(`https://inshortsapi.vercel.app/news?category=${strUser}`)
     .then(response => response.json())
     .then(data =>para.textContent= (data.data[0].content));
   }
   