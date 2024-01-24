document.getElementById('talent1').addEventListener('click', function(){
     
     // document.getElementById('talent1').innerHTML = '<button style="background:green"</button>';
     this.innerText = 'Unlocked';
     this.style.backgroundColor = "green";
})
document.getElementById('talent2').addEventListener('click', function(){
     
     // document.getElementById('talent1').innerHTML = '<button style="background:green"</button>';
     this.innerText = 'Unlocked';
     this.style.backgroundColor = "green";
})
document.getElementById('talent3').addEventListener('click', function(){
     
     // document.getElementById('talent1').innerHTML = '<button style="background:green"</button>';
     this.innerText = 'Unlocked';
     this.style.backgroundColor = "green";
})
document.getElementById('talent4').addEventListener('click', function(){
     
     // document.getElementById('talent1').innerHTML = '<button style="background:green"</button>';
     this.innerText = 'Unlocked';
     this.style.backgroundColor = "green";
})
document.getElementById('talent5').addEventListener('click', function(){
     
     // document.getElementById('talent1').innerHTML = '<button style="background:green"</button>';
     this.innerText = 'Unlocked';
     this.style.backgroundColor = "green";
})
document.getElementById('talent6').addEventListener('click', function(){
     
     // document.getElementById('talent1').innerHTML = '<button style="background:green"</button>';
     this.innerText = 'Unlocked';
     this.style.backgroundColor = "green";
})
function result() {
    //body...
    var score=0;
    if (document.getElementById('goed1').checked)
    {
         score++;
    }
    if (document.getElementById('goed2').checked)
    {
         score++;
    }
    if (document.getElementById('goed3').checked)
    {
         score++;
    }
    if (document.getElementById('goed4').checked)
    {
         score++;
    }
    if (document.getElementById('goed5').checked)
    {
         score++;
    }
    if (document.getElementById('goed6').checked)
    {
         score++;
    }
    if (document.getElementById('goed7').checked)
    {
         score++;
    }
    if (document.getElementById('goed8').checked)
    {
         score++;
    }
    if (document.getElementById('goed9').checked)
    {
         score++;
    }
    if (document.getElementById('goed10').checked)
    {
         score++;
    }
    
    alert("Je score is:"+score);
}
