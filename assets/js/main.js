/* Minecraft server players */
$(document).ready(()=>{
    const ip = $(".sip").attr("data-ip");
    const port = $(".sip").attr("data-port");
  
    $.get(`https://mcapi.us/server/status?ip=${ip}&port=${port}`, (result)=>{
      if (result.online) {
        $(".sip").html(result.players.now);
      } else {
        $(".playercount").html("Server isn't online!");
      }
    });
  
    setInterval(()=>{
      $.get(`https://mcapi.us/server/status?ip=${ip}&port=${port}`, (result)=>{
        if (result.online) {
          $(".sip").html(result.players.now);
        } else {
          $(".playercount").html("Server isn't online!");
        }
      });
    }, 500);
  });
/* Minecraft server players end */


/* Siema carousel */
$(document).ready(function() {
    const mySiema = new Siema({
      selector: '.siema',
      duration: 10,
      loop: true,
    });
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    
    prev.addEventListener('click', () => mySiema.prev());
    next.addEventListener('click', () => mySiema.next());
    
  });
/* Siema carousel end */