let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('fa-bars');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    menu.classList.add('fa-bars');
    header.classList.remove('active');
}

// let cursor1 = document.querySelector('.cursor-1');
// let cursor2 = document.querySelector('.cursor-2');

// window.onmousemove = (e) =>{
//     cursor1.style.top = e.pageY + 'px';
//     cursor1.style.left = e.pageX + 'px';
//     cursor2.style.top = e.pageY + 'px';
//     cursor2.style.left = e.pageX + 'px';
// }

// document.querySelectorAll('a').forEach(links =>{

//     links.onmouseenter = () =>{
//         cursor1.classList.add('active');
//         cursor2.classList.add('active');
//     }

//     links.onmouseleave = () =>{
//         cursor1.classList.remove('active');
//         cursor2.classList.remove('active');
//     }

// });

// function sendEmail() {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;
//     let finalmessage = `Name : ${name} <br>  Email : ${email} <br>  Message : ${message} <br>`;
//     Email.send({
//         SecureToken : "addyoursecuretokenhere",
//         To : 'them@website.com',
//         From : "you@isp.com",
//         Subject : "Mail from website",
//         Body : finalmessage
//     }).then(
//       message => alert(message)
//     );
// }