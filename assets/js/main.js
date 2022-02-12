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

/* Copy To Clipboard */

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
  }
  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }
  
/* Copy To Clipboard end */

/* IP copy */
$(document).ready(function(){
    $(".ip").click(function(){
      copyTextToClipboard("megamaa.com");
      window.alert("IP kopioitu!")
    });
  });
/* IP copy end */

/* Redirect Function */

function redirectdiscord(){
  window.location.href = "https://discord.gg/mp6XzgmMwg";
}

/* Redirect Function end */