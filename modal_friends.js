 const prev_friends = document.getElementById("prev_friends");
 const next_friends = document.getElementById("next_friends");
 const slide_friends = document.getElementById("slide_friends");
 const {width: slide_friendswidth} = window.getComputedStyle(slide_friends);

 function control_friends( {target: {id} }) {
   switch (id) {
    case "next_friends": 
    slide_friends.scrollLeft += parseInt(slide_friendswidth)
        
        break;
    case "prev_friends": 
    slide_friends.scrollLeft -= parseInt(slide_friendswidth)

        break 
   
    default:
        break;
   }
 }
 next_friends.addEventListener('click', control_friends);
 prev_friends.addEventListener('click', control_friends);  