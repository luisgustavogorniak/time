var msg = window.document.getElementById('message')
var img = window.document.getElementById('image')
var msg2 = window.document.getElementById('message2')
var date = new Date()
var hour  = date.getHours()
msg.innerHTML = `It is ${hour} o'clock.`
if (hour>=0 && hour<12){
    img.innerHTML = '<img src="images/morning.png" width="400">'
    document.body.style.background = '#639804'
    msg2.innerHTML = `Good Morning!`
}else if (hour>=12&&hour<=18){
    img.innerHTML = '<img src="images/afternoon.png" width="400">'
    document.body.style.background = '#db9f08'
    msg2.innerHTML = `Good Afternoon!`
}else {
    img.innerHTML = '<img src="images/evening.png" width="400">'
    document.body.style.background = '#152A34'
    msg2.innerHTML = `Good Evening!`    
}    

