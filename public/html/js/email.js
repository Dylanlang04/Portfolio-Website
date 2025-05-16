import emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/+esm'


document.addEventListener('DOMContentLoaded', () => {
    emailjs.init("Q9U38VwJtvtCX5p7H");
    const form = document.getElementById('contact-form')
    if (form) {
       form.addEventListener('submit', function(event) {
            event.preventDefault()

             emailjs.sendForm('service_68v7kja', 'template_yrebh5e', this)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text)
                    alert('Message sent successfully!')
                    this.reset()
                    document.getElementById('char-count').textContent = '200'
                })
                .catch((error) => {
                    console.error('FAILED...', error)
                    alert('Failed to send message. Please try again.')
                })
        })
    }
})