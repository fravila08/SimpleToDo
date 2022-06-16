

const handleFormSubmit= (event)=>{
    const formData= new FormData(event.target);
    const formProps=Object.fromEntries(formData);
    for (let fieldName in formProps){
        console.log(fieldName, formData.get(fieldName))
    }
    //  showGreeting(formData.get("name"))
    return thelist=formData.get("name")
}

const showGreeting = (event) => {
    let greetingOutput = document.getElementById("output")
    if (greetingOutput) {
      greetingOutput.innerHTML = "Hello " + event+ "!"
    }
  }
function seeList(){
    console.log(document.getElementById('list'));
}
