function handleSearch(){
    if (document.querySelector('searchInput').style.displey === 'flex')
    document.querySelector('searchInput').style.displey = 'flex'
    document.querySelector('searchBox').style.border = '0.5px solid #fff'
}



<span class="searchBox">
               <img src="" alt="Procurar" onclick="handleSearch()">
               <input type="text" class "searchInput" placeholder="Títulos e Generos">
 </span>


 searchBox{
     displey;flex
 }