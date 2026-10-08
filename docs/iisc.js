var data = '';
var venue_id = 0;
const ven = ["Main Building", "Near A hostel", "None"];
const [day,date1,date2] = curday();

window.addEventListener('load', (event) =>{
  // Check if the current page is iisc.html
  if (window.location.pathname.endsWith('iisc.html')) {
    document.getElementById('post-date-replace').innerHTML=date2;
    show();
    let venue_list = "";
    for (let i = 0; i < ven.length; i++) {
      venue_list += `<br><a href="#" onclick=venue(`;
      venue_list += i.toString();
      venue_list += `)>`;
      venue_list += ven[i];
      venue_list += `</a>`;
    }
    document.getElementById("iisc-venue").innerHTML = venue_list;
    document.getElementById("iisc-venue").setAttribute("hidden","hidden");
  }
});

//Day and Date
function curday() {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const sh_month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const today = new Date();
  var day = weekday[today.getDay()];
  var dd = today.getDate();
  var mmm = sh_month[today.getMonth()]
  var mon = month[today.getMonth()];
  var yyyy = today.getFullYear();

  if(dd<10) dd='0'+dd;

  return [day,(dd+' '+mmm+' '+yyyy),(yyyy+' '+mon+' '+dd)];
};

// Function to define innerHTML for HTML table
function show() {
  var head, reading;
  if (venue_id==2)
    head = 'Please pray the Rosary by yourself';
  else
    head = 'Rosary (offline)';

	reading = '\nDate: ';
  reading += date1;
  reading += '\nDay: ';
  reading += day;
  if (venue_id!=2){
    reading += '\nTime: 08:00 pm';
    reading += '\nVenue: ';
    reading += ven[venue_id];
  }
  reading += '\nGospel: ';
	reading += data;
	document.getElementById("reading_head").innerHTML = '<b>'+head+'</b>';
	document.getElementById("reading_text").innerHTML = reading;
}

function gospel() {
  var new_data = document.getElementById('gospel').value;
  data = new_data;
  show();
}

function dropdown() {
  var elem = document.getElementById("iisc-venue")
  if(elem.getAttribute("hidden"))
    elem.removeAttribute("hidden");
  else
    elem.setAttribute("hidden","hidden");
}

function venue(opt) {
  venue_id = opt;
  show();
}

function copy_text(){
  // Get the field
  var copyText = '*'+document.getElementById("reading_head").textContent+'*';
  copyText += document.getElementById("reading_text").textContent;

  // Copy the text
  navigator.clipboard.writeText(copyText);
  console.log(copyText);
}
