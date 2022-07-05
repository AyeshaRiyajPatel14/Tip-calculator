let billAmt = document.getElementById("billamt");
let percentage = document.getElementById("serviceQual");
let NoOfPerson = document.getElementById("peopleamt");
let calculate = document.getElementById("calculate");
let p = document.querySelector("p");
let span = document.querySelector('span');

calculate.addEventListener("click", () => {
  if (billAmt.value === "" || percentage === "--Choose an Option" || NoOfPerson === "") {
    alert("Please Enter Bill Amount");
  }
  if(NoOfPerson.value != 1){
      span.style.display = "block";
  }else{
      span.style.display = "none";
  }
  let total = (billAmt.value * percentage.value)/NoOfPerson.value;
  total = total.toFixed(2);
  p.innerText = total;
});