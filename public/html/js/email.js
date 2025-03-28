(function() {
    emailjs.init('Q9U38VwJtvtCX5p7H') 
})()

window.onload = function() {
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault()
      
        emailjs.sendForm('service_68v7kja', 'template_yrebh5e', '#contact-form')
            .then((error) => {
                alert('Failed to send message. Please try again.')
                console.log('Error:', error)
            })
    })
}