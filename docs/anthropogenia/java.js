function passwd(){

    var password = prompt('Enter the password to download the file:');
    if(password.toLowerCase() == "atticus"){
      window.open("https://drive.google.com/uc?id=1ul7THHbWpfzkrpcgw07t4w9l7rb5fM3p&export=download")    
    }else{
      alert("Wrong! What's the name of our orange cat?");
    }
  }