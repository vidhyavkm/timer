var timer = 10;
setTimeout(() => {
  var counter = document.getElementById("parent");
  counter.innerText = timer;
  counter.setAttribute("class","h3");
  timer--;

  setTimeout(() => {
    document.getElementById("parent").innerText = timer;
    timer--;

    setTimeout(() => {
      document.getElementById("parent").innerText = timer;
      timer--;

      setTimeout(() => {
        document.getElementById("parent").innerText = timer;
        timer--;

        setTimeout(() => {
          document.getElementById("parent").innerText = timer;
          timer--;

          setTimeout(() => {
            document.getElementById("parent").innerText = timer;
            timer--;

            setTimeout(() => {
              document.getElementById("parent").innerText = timer;
              timer--;

              setTimeout(() => {
                document.getElementById("parent").innerText = timer;
                timer--;

                setTimeout(() => {
                  document.getElementById("parent").innerText = timer;
                  timer--;

                    setTimeout(() => {
                      document.getElementById("parent").innerText ="HAPPY NEW YEAR";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);

