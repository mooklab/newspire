new Swiper('section.certificates div.swiper', {
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: {
        prevEl: 'section.certificates div.swiper-navigation div.arrows div.prev',
        nextEl: 'section.certificates div.swiper-navigation div.arrows div.next',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.175,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 50
        }
    }
})

new Swiper('section.services div.swiper', {
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: {
        prevEl: 'section.services div.swiper-navigation div.arrows div.prev',
        nextEl: 'section.services div.swiper-navigation div.arrows div.next',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.175,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 50
        }
    }
})

forms = document.querySelectorAll('form')

forms.forEach(form => {

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log("Form submitted successfully!")
    })

    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
        input.addEventListener("invalid", (event) => {
            event.target.style.border = "1px solid red"
            event.target.parentNode.classList.add('error')
            console.log(`Invalid input: ${event.target.name}`)
        })

        input.addEventListener("input", () => {
            input.style.border = ""
            input.parentNode.classList.remove('error')
        })
    })

})

window.onload = () => {

    main = document.querySelector('section.intro.scrollup')
    main_container = document.querySelector('section.intro.scrollup div.container')

    gsap.fromTo(main_container, {
        y: 0
    }, {
        y: '-=500',
        scrollTrigger: {
            trigger: main,
            start: 'top 0px',
            end: '+=460',
            scrub: true,
            pin: true,
            // markers: true
        }
    })

    projects = document.querySelector('section.projects')
    gsap.fromTo(projects, {
        y: '300',
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: 'section.projects div.list',
            start: 'start bottom',
            end: 'start bottom',
            toggleActions: 'play none none reverse',
            // scrub: true,
            // pin: true,
            // markers: true
        }
    })

    about_timeline = gsap.timeline({
        scrollTrigger: {
            trigger: 'section.infographic',
            start: 'top center',
            end: 'center center',
            toggleActions: 'play none none reverse',
            // scrub: true,
            // markers: true
        }
    })
    about_timeline
        .fromTo('section.infographic span.subtitle', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo('section.infographic h2', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.7")
        .fromTo('section.infographic span.text', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.7")
        .fromTo('section.infographic img', { opacity: 0, y: 50 }, { opacity: 1, y: 0 })

}