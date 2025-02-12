/*toggle icon navbar*/

let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* scroll section active link*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

Window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*sticky*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
    /*remove toogle icon and navbar when click navbar(scroll)*/
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

function doPost(e) {
  var fullName = e.parameter.fullName;
  var emailAddress = e.parameter.emailAddress;
  var mobileNumber = e.parameter.mobileNumber;
  var emailSubject = e.parameter.emailSubject;
  var message = e.parameter.message;

  var emailBody = `
    Full Name: ${fullName}\n
    Email Address: ${emailAddress}\n
    Mobile Number: ${mobileNumber}\n
    Subject: ${emailSubject}\n
    Message: ${message}
  `;

  MailApp.sendEmail({
    to: "your-email@gmail.com", 
    subject: "New Contact Form Submission: " + emailSubject,
    body: emailBody
  });

  return ContentService.createTextOutput("Form submitted successfully");
}
