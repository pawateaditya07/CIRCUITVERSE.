(function () {
    var menuToggle = document.getElementById("menuToggle");
    var navLinks = document.getElementById("navLinks");
    var toast = document.getElementById("toast");
    var copyEmail = document.getElementById("copyEmail");
    var emailLink = document.getElementById("emailLink");
    var email = "pawateaditya07@gmail.com";
  
    emailLink.href = "mailto:" + email;
  
    function showToast(message) {
      toast.textContent = message;
      toast.classList.add("show");
      window.setTimeout(function () {
        toast.classList.remove("show");
      }, 2400);
    }
  
    menuToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  
    var navItems = navLinks.querySelectorAll("a");
    for (var i = 0; i < navItems.length; i++) {
      navItems[i].addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    }
  
    copyEmail.addEventListener("click", function () {
      // Clipboard API is not available in every older browser/file setup.
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(function () {
          showToast("Email copied: " + email);
        }, function () {
          showToast("Your email is: " + email);
        });
      } else {
        showToast("Your email is: " + email);
      }
    });
  
    var projectLinks = document.querySelectorAll("[data-project]");
    for (var j = 0; j < projectLinks.length; j++) {
      projectLinks[j].addEventListener("click", function () {
        var projectName = this.getAttribute("data-project");
        var subject = encodeURIComponent("Question about " + projectName);
        emailLink.href = "mailto:" + email + "?subject=" + subject;
      });
    }
  }());