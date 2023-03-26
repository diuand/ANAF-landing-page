const tooltip = document.querySelectorAll('tt')
tooltip.forEach(t => {
    new bootstrap.tooltip(t)
});


const dropdown_btns = document.querySelectorAll('.btn_dropdown')

const all_text = document.querySelectorAll('.dropdown_animation')

const show_elements = (scroll_top,elements,animation) =>{
    elements.forEach((element,i) => {
        const elem_offset = cumulativeOffset(element)
        if (scroll_top + window.innerHeight > elem_offset.top + element.offsetHeight){
            element.classList.add(animation) 
        }
        
    });
}
const cumulativeOffset = (element) => {
    var top = 0
    var left = 0
    do {
      top += element.offsetTop || 0 
      left += element.offsetLeft || 0
      element = element.offsetParent
    } while (element)
    return {
      top: top,
      left: left
    }
  }
  



show_elements(0,all_text,'reveal')

