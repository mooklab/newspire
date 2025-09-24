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