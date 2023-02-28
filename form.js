const express = require("express")

const tutorForm = document.querySelector('form')

const submit = document.querySelector('button')

tutorForm.addEventListener('submit1', (e)=>{
    e.preventDefault()

    const complete = submit.value
    
})

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }