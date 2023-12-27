

(function(){
    "use strict"

    gsap.registerPlugin(ScrollTrigger);


    const timeline = gsap.timeline({defaults: {duration:1}});
    timeline.from('.alpeadalogosm' ,{y:'-100%', ease: 'power2.in', opacity: 0})
            .from('.menubar', {x:'-100%', ease: 'power2.in', opacity: 0}, '<0.5')
            .from('.herotext',{y: '100%', ease: 'expo.in', opacity: 0, duration: 0.5}, '<')
            .from('.herobtn', {y: '100%', ease:'bounce.inOut', opacity: 0 , duration: 2}, 0);

    const bigTimeline = gsap.timeline({defaults: {duration:1}});
    bigTimeline.from('.alpeadalogomd', {x:'-100%', ease: 'power3.in', opacity:0 })
                .from('.mainMenuItems',{x:'-100%', ease:'power2.in', opacity:0, stagger:0.4})
                .from('.heromaintext', {x:'-100%', ease:'power3.in', opacity:0}, '<')
                .from('.herobtnmain', {x: '-100%', ease:'bounce.inOut', opacity: 0 , duration: 2});

    // const timelineTwo = gsap.timeline({  
    //         scrollTrigger: {
    //             trigger:'.jointext',
    //             pin: true,
    //             start: "top top", // when the top of the trigger hits the top of the viewport
    //             end: "+=500", // end after scrolling 500px beyond the start
    //             scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //             snap: {
    //             snapTo: "labels", // snap to the closest label in the timeline
    //             duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //             delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    //             ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
    //         }
    //    }
    // }) 

    // timelineTwo.from('.jointext', {x:'-100%'})

    const joinText = gsap.utils.toArray('.jointext');
    joinText.forEach(text => {
    gsap.from(text, { 
        y: '100%',
        duration: 0.7,
        opacity: 0,
        stagger: 0.5,
        ease:'power1.in',
        scrollTrigger: {
        trigger: text,
        start: "top bottom",
        toggleActions: "play none none reset"
        }
    })
    });

    const trustBox = gsap.utils.toArray('.trustbox');
    trustBox.forEach(box => {
    gsap.from(box, { 
        x: '-100%',
        opacity: 0,
        stagger: 0.5,
        ease:'power1.in',//change
        scrollTrigger: {
        trigger: box,
        start: "top bottom",
        toggleActions: "play none none reset"
        }
    })
    });

    const investMethods = gsap.utils.toArray('.invstmethods');
    investMethods.forEach(method =>{
        gsap.from( method, {
            y: '100%',
            opacity: 0,
            stagger: 0.5,
            ease:'expo.in',
            scrollTrigger: {
            trigger: method,
            start: "top bottom",
            toggleActions: "play none none reset"
            }
        })
    });

    const copyTrader = gsap.utils.toArray('.copytrader');
    copyTrader.forEach( trader =>{
        gsap.from( trader, {
            x: '-100%',
            opacity: 0,
            stagger: 0.7,
            duration:1,
            ease:'power4.in',
            scrollTrigger: {
            trigger: trader,
            start: "top bottom",
            toggleActions: "play none none reset"
            }
        })
    });

    const accountType = gsap.utils.toArray('.acctype');
    accountType.forEach(type =>{
        gsap.from( type, {
            y: '100%',
            opacity: 0,
            stagger: 0.5,
            ease:'power3.in',
            scrollTrigger: {
            trigger: type,
            start: "top bottom",
            toggleActions: "play none none reset"
            }
        })
    });




        
 }())
