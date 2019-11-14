
        function openNav() {
          if(document.getElementById("mySideNav").style.width == "0px"){
              document.getElementById("mySideNav").style.width = "250px";
              document.getElementById("main").style.marginLeft = "250px";

          }
          else {
            document.getElementById("mySideNav").style.width = "0px";
            document.getElementById("main").style.marginLeft = "0px";

          }
}
    