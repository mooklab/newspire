new Swiper('section.certificates div.swiper', {
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: {
        prevEl: 'section.certificates div.swiper-navigation div.swiper-arrows div.prev',
        nextEl: 'section.certificates div.swiper-navigation div.swiper-arrows div.next',
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
        prevEl: 'section.services div.swiper-navigation div.swiper-arrows div.prev',
        nextEl: 'section.services div.swiper-navigation div.swiper-arrows div.next',
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

    main_intro = document.querySelector('section.intro.main')
    main_container = document.querySelector('section.intro.main div.container')
    page_intro = document.querySelector('section.intro.inner')
    projects = document.querySelector('section.projects.rollup')
    brands = document.querySelector('section.brands div.container')
    numbers = document.querySelectorAll('section.about div.digit span.digit')

    gsap.fromTo(main_container, {
        y: 0
    }, {
        y: '-=500',
        scrollTrigger: {
            trigger: main_intro,
            start: 'top 0px',
            end: '+=460',
            scrub: true,
            pin: true,
            // markers: true
        }
    })

    gsap.fromTo(projects, {
        y: '200',
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: projects,
            start: 'start bottom',
            end: 'start bottom',
            toggleActions: 'play none none reverse',
            // scrub: true,
            // pin: true,
            // markers: true
        }
    })

    gsap.fromTo(brands, {
        x: 0
    }, {
        x: '-=800',
        scrollTrigger: {
            trigger: main_intro,
            start: 'center center',
            end: 'bottom center',
            scrub: true,
            // pin: true,
            // markers: true
        }
    })

    numbers.forEach(number => {
        const targetValue = parseInt(number.textContent)
        const obj = { value: 0 }

        number.textContent = 0

        gsap.to(obj, {
            value: targetValue,
            duration: 2,
            ease: 'power1.out',
            onUpdate: () => {
                number.textContent = Math.floor(obj.value)
            },
            scrollTrigger: {
                trigger: number,
                start: 'top 85%',
                end: 'bottom top',
                toggleActions: 'play none none none',

            }
        })
    })

    about_timeline = gsap.timeline({
        scrollTrigger: {
            trigger: 'section.infographic',
            start: 'top 75%',
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


    if (document.querySelector('section.intro.inner')) {
        header_height = document.querySelector('header').offsetHeight
        intro_height = document.querySelector('section.intro.inner').offsetHeight
        header_timeline = gsap.timeline()
        header_timeline
            .fromTo('section.intro.inner', { width: 0, y: header_height * -1, height: header_height }, { width: '100%', y: header_height * -1, height: header_height }, 0.5)
            .fromTo('section.intro.inner', { y: header_height * -1, height: header_height }, { y: 0, height: intro_height }, 1)
            .fromTo('header a.logotype', { opacity: 0 }, { opacity: 1, duration: 3 }, 0.9)
            .fromTo('header div.partners', { opacity: 0 }, { opacity: 1 }, 0.9)
            .fromTo('header menu', { opacity: 0 }, { opacity: 1 }, 0.9)
            .fromTo('header div.contacts', { opacity: 0 }, { opacity: 1 }, 0.9)
            .fromTo('header img.menu', { opacity: 0 }, { opacity: 1 }, 0.9)
            .fromTo('section.intro.inner a.back', { opacity: 0, y: -20 }, { opacity: 1, y: 0 }, 1.5)
            .fromTo('section.intro.inner div.breadcrumbs', { opacity: 0, y: -20 }, { opacity: 1, y: 0 }, 1.5)
            .fromTo('section.intro.inner div.text h1', { opacity: 0, y: -20 }, { opacity: 1, y: 0 }, 1.75)
            .fromTo('section.intro.inner div.text span', { opacity: 0, y: -20 }, { opacity: 1, y: 0 }, 1.9)
            .fromTo('section.intro.inner + section', { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, 2)
    }
}