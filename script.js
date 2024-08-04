
let tablinks=document.getElementsByClassName("tab-links");
let tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
   for(let tablink of tablinks)
   {
    tablink.classList.remove("active-link"); 
   }
   for(let tabcontent of tabcontents)
    {
     tabcontent.classList.remove("active-tab"); 
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// For Google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbx5ULZXa5L4yJbqS3uclkh_trLQ6DL-3-UQo5w9TfaXY-ckS24b8n3g7SEGpI9hlEgF/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg");
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent successfully";
        setTimeout(function(){
            msg.innerHTML="";
        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})