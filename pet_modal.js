const btn_next = document.getElementById('next-slide_pet');
const btn_pre = document.getElementById('previous-slide_pet'); 
const slider = document.getElementById('Slider_Pet'); 
const {width: Slider_Petwidth} = window.getComputedStyle(Slider_Pet); 

function controlSlide( { target: { id }}){
    switch (id) {
        case 'next-slide_pet' :{ 
            return slider.scrollLeft +=  parseInt(Slider_Petwidth) 
        }                                                            
            break;
        case 'previous-slide_pet':  
        
        return slider.scrollLeft -= parseInt(Slider_Petwidth)
            
         break


          default:
            break;
    } 
    
    
}

btn_next.addEventListener('click', controlSlide)
btn_pre.addEventListener('click', controlSlide)