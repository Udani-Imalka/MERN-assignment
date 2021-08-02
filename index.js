function user(firstName,lastName,email,utype,contactNo,address,pmethod){
    return {firstName,lastName,email,utype,contactNo,address,pmethod};
}

function fnameValidation(firstName){

    if(firstName.length <= 0 || firstName==""){
        document.getElementById("fname").innerHTML="Required*";
        return false;
    } 

    document.getElementById("fname").innerHTML="";
    return true;

}

function lnameValidation(lastName){

    if(lastName.length <= 0 || lastName==""){
        document.getElementById("lname").innerHTML="Required*";
        return false;
    } 

    document.getElementById("lname").innerHTML="";
    return true;

}

function emailValidation(email){

    if(email.length <= 0 || email==""){
        document.getElementById("email_err").innerHTML="Required*";
        return false;
    } 

    document.getElementById("email_err").innerHTML="";
    return true;

}

function TeleNoValidation(ContactNo){

    if(ContactNo.length <= 0 || ContactNo==""){
        document.getElementById("conNo").innerHTML="Required*";
        return false;
    } 

    document.getElementById("conNo").innerHTML="";
    return true;

}

function UsertypeValidation(userType){

    if(userType == null){
        document.getElementById("utype").innerHTML="Required*";
        return false;
    }
    document.getElementById("utype").innerHTML="";
    return true;
}

function addressValidation(address){

    if(address.length <= 0 || address==""){
        document.getElementById("add_err").innerHTML="Required*";
        return false;
    } 

    document.getElementById("add_err").innerHTML="";
    return true;

}


function validationForm(firstName,lastName,email,userType,ContactNo,address){

    let fname_val = fnameValidation(firstName);
    let lname_val = lnameValidation(lastName);
    let email_val = emailValidation(email);
    let usertype_val = UsertypeValidation(userType);
    let ContactNo_val = TeleNoValidation(ContactNo);
    let address_val = addressValidation(address);

    if(fname_val && lname_val && email_val && usertype_val && ContactNo_val && address_val){
        return true;
    }
    return false;
}

function getRadioValue(buttonName){
    let data = document.querySelector("input[name="+buttonName+"]:checked");

    if(data == null){
        return null;
    }else{
        return data.value;
    }
}

const onSubmit = (e)=>{

    let firstName =document.getElementById("firstName").value;
    let lastName =document.getElementById("lastName").value;
    let email =document.getElementById("email").value;
    let utype = getRadioValue("usertype");
    let contactNo = document.getElementById("contactNo").value;
    let address = document.getElementById("address").value;
    let pmethod = document.getElementById("pmethod").value;
    
    //console.log(user(firstName,lastName,email,utype,contactNo,address,pmethod));

    if(validationForm(firstName,lastName,email,utype,contactNo,address)){
        console.log(user(firstName,lastName,email,utype,contactNo,address,pmethod));
        alert("User added Succesfully");
    }
    else{
        console.log("Error")
    }

    e.preventDefault()
}