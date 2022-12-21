document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener('scroll', ()=>{
    const direction = window.scrollY - document.lastScrollPosition >0 ? 'down':'up';
    const sections = [...document.querySelectorAll('section')];

    
    console.log(window.scrollY)
    if (document.onWayTo === null) {
        const destIndex = direction === 'up'? document.lastCentered - 1:document.lastCentered + 1;
        console.log({direction, destIndex, }, document.onWayTo)
        if (destIndex>=0 && destIndex<sections.length) {
            console.log({destIndex, direction}, document.lastCentered)
            document.onWayTo = destIndex
            window.scroll(0, sections[destIndex].offsetTop)
    
        }
    }
    

    sections.forEach((section, index)=>{
        // console.log(document.onWayTo, section.offsetTop)
        if (section.offsetTop === window.scrollY) {
            document.lastCentered = index;
            section.className = 'active';
            console.log('update last center', document.lastCentered, document.onWayTo)
            
            if (document.onWayTo===index) {
                console.log('set onWayTo to Null')
                document.onWayTo = null;
            }
        } else {
            section.className = '';
        }
    })


    document.lastScrollPosition = window.scrollY;
    // console.log(document.lastScrollPosition)
})