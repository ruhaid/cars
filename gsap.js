gsap.from('.cart', {
	y: 100,
    opacity:0,
    duration:2,
	stagger: 0.1 
    
});

gsap.from("h1",{
    y:50,
    opacity:0,
    duration:3,
})
gsap.from(".heroimg",{
    x:1200,
    opacity:0,
    duration:3
})

gsap.from(".wheelimg",{
    rotate:360,
    duration:3,
    repeat:-1
})