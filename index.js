today =  new Date();
if (today.getDay() != 6)
  today.setDate(today.getDate() + 7 - today.getDay());
  
y = today.getFullYear();
m = today.getMonth() + 1;
d = today.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
