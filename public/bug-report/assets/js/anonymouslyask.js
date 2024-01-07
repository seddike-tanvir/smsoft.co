





function sendEmail() {
    Email.send({
      SecureToken: "0c816fe8-5970-40be-a50f-bdb07b6d9860",
      To: "mtstech03@gmail.com" ,
      From: "mboxreply@gmail.com",
      Subject: " smsoft.co/bug-reports/  ",
      Body: 
             "Hi! You have received an bug report from 'SM Soft .co/bug-reports/'  " 
           	+"<br> <b>Message to you:</b> <br>" 
       	+ document.getElementById("msg").value 
           	+"<br>Added Attachments :<br>" 
	+ document.getElementById("attachments").value 
	+"<br><br><br><br><br><br>"
    })
    .then(
      // message => alert(" Your report sent successfully ! Thanks for your affort to rectify us! ")
   
      swal("Your report sent successfully !   Thanks for your affort to rectify us ! ")
     );

  }

