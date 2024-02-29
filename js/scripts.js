      const userName = document.getElementById("name");
      const userEmail = document.getElementById("email");
      const userPhone = document.getElementById("phone");
      const message = document.getElementById("message");


          const setAllFieldsToEmpty = () => {
              userName.value =
              userEmail.value =
              userPhone.value =
              message.value =
              "";
          }
      const submitBTN = document.getElementById("submitB");

      // email reciever sender function
      (function () {
        emailjs.init("yf1anzwTZWgDaYT_e");
      })();

      submitBTN.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const email = userEmail.value;
        const phone = userPhone.value;
        const messagE = message.value;
        const name = `${userName.value} : ${phone}`;
        if (!email || !phone || !message) {
          return (Swal.fire("Failed", "Some required fields are empty", "error"));
        }

        // Prepare the email parameters
        let params = {
          from_name: name,
          from_email: email,
          message: messagE,
        };

        // Send the email
        emailjs.send("service_bs1750k", "template_0isr23u", params).then(
          function (response) {
            // sweet allert and set all fields to empty
            Swal.fire("Sent ", "I will reply your Message ASAP!", "success");
            setAllFieldsToEmpty()
          
          },
          function (error) {
            Swal.fire("Failed", "something went wrong", "error");
           setAllFieldsToEmpty()
          }
        );
      });