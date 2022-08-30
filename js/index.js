var mql = window.matchMedia('screen and (max-width:900px)')
if (mql.matches) {
    document.querySelector('h4').innerText =
        'Most calendars are \n designed for teams'
    document.querySelector('h4.features-hero-text').textContent =
        ' Most calendars are \n designed for teams. '
    document.querySelector('h4.des-content').innerText =
        'Most calendars are \n designed for teams. '
    document.querySelector('h4.partners-des').innerText =
        'Most calendars are designed for teams. \nSlate is designed for freelancers'

    document.querySelector('h4.testi-text').innerText =
        'Most calendars are designed for teams. \nSlate is designed for freelancers who want a \nsimple way to plan their schedule.'

    document.querySelector('h4.pricing-des').innerText =
        'Most calendars are \ndesigned for teams. '
    document.querySelector('h4.des-contact').innerText =
        'Most calendars are \ndesigned for teams. '
}
