let observer = new IntersectionObserver((e)=>{
    e.forEach((box)=>{
        if (box.isIntersecting) {
            // 화면에서 보여질 때
            box.target.style.opacity = 1
            box.target.style.transform = 'translate(0px, 0px)'
            
        } else {
            // 화면에서 사라질 때
            box.target.style.opacity = 0
            box.target.style.transform = 'translate(0px, 20px)'
        }
    })
})

// html 요소가 화면에 나타나고 사라짐을 감시해줌
document.querySelectorAll('section').forEach(element => {
    observer.observe(element)
})