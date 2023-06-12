function validatePassword() {
      var password = document.getElementById("password").value;

      var lengthPattern = /.{8,}/;
      var uppercasePattern = /[A-Z]/;
      var symbolPattern = /[!@#$%^&*]/;

      var lengthCheck = lengthPattern.test(password);
      var uppercaseCheck = uppercasePattern.test(password);
      var symbolCheck = symbolPattern.test(password);

      document.getElementById("length").style.display = lengthCheck ? "none" : "inline";
      document.getElementById("uppercase").style.display = uppercaseCheck ? "none" : "inline";
      document.getElementById("symbol").style.display = symbolCheck ? "none" : "inline";

      if (lengthCheck && uppercaseCheck && symbolCheck) {
        document.getElementById("valid").style.display = "inline";
      } else {
        document.getElementById("valid").style.display = "none";
      }
    }