const next_coffeemd = document.getElementById("next_coffee")
const prev_coffeeemd = document.getElementById("prev_coffee") 
const slide_coffeemd = document.getElementById("slide_coffee")
const { width: slide_coffeewidth} = window.getComputedStyle(slide_coffee) 
function constrol_coffee( { target: { id }}) {
    switch (id) {
        case "next_coffee":  
        slide_coffeemd.scrollLeft += parseInt(slide_coffeewidth)
          break; 
        case "prev_coffee":
            slide_coffeemd.scrollLeft -= parseInt(slide_coffeewidth)
            break
    
        default:
            break;
    }
}
next_coffeemd.addEventListener('click', constrol_coffee)
prev_coffeeemd.addEventListener('click', constrol_coffee)
