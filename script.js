 var form = document.getElementById("form")

 form.addEventListener('submit', e => {

     e.preventDefault()
     submitform();

    form.reset();

 })


 const submitform = () => {

     // var form = document.getElementById("form")
     var Fname = document.getElementById("first-name").value;
     var lname = document.getElementById("last-name").value;
     var email=document.getElementById("email").value
     var address = document.getElementById("address").value;
     var state = document.getElementById("state").value;
     var country = document.getElementById("country").value;
     var pin = document.getElementById("pincode").value;
     var tab = document.getElementById("tableval");
     document.getElementById("id1").innerHTML = Fname
     document.getElementById("id2").innerHTML = lname
     document.getElementById("id4").innerHTML = address
     document.getElementById("id5").innerHTML = state
     document.getElementById("id6").innerHTML = country
     document.getElementById("id7").innerHTML = pin
     document.getElementById("id9").innerHTML = email
     console.log(tab)

     if (document.getElementById('male').checked) {
         document.getElementById("id3").innerHTML = document.getElementById("male").value;
     } else if (document.getElementById('female').checked) {
         document.getElementById("id3").innerHTML = document.getElementById("female").value;
     }
     var foods = [];
     if (document.getElementById('check1').checked) foods.push(document.getElementById('check1').value)
     if (document.getElementById('check2').checked) foods.push(document.getElementById('check2').value)
     if (document.getElementById('check3').checked) foods.push(document.getElementById('check3').value)

     if (foods.length > 0) {
         document.getElementById("id8").innerHTML = foods
     }
     console.log(foods)
     

    
    }
