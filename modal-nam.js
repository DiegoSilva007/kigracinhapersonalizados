const prev_nam = document.getElementById('previous-slide_nam');
const next_nam = document.getElementById('next-slide_nam');
const slide_nam = document.getElementById('slide_namorados');
const {width: slide_namoradosWidth} = window.getComputedStyle(slide_namorados);

function control_nam( {target: { id }}) {
      
    switch (id) {
        case 'next-slide_nam':
            slide_nam.scrollLeft += parseInt(slide_namoradosWidth);
            break;
            
        case 'previous-slide_nam':
            slide_nam.scrollLeft -= parseInt(slide_namoradosWidth);  
            break;
        
        default:  
            break;
    }
}

next_nam.addEventListener('click', control_nam);
prev_nam.addEventListener('click', control_nam);
