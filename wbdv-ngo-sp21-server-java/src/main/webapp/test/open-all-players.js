(function(){
  const main = () => {
    runTest()
  }
  $(main)

  const runTest = () => {
    let wait = 0
    openAllPlayers()
    // setTimeout(() => {
    //   openAllPlayers()
    // }, 7000)
  }

  const openAllPlayers = () => {
    const players = $("#player input[type=radio]")
    console.log(players)
    for(let p=0; p<players.length; p++) {
      const player = players[p]
      setTimeout(() => {
        click(player)
        $("#quickSubmit").click()
      }, p * 2000)
    }
  }

  const click = (selector) => {
    domElement = $(selector)[0]

    if(document.createEvent) {
      const event = document.createEvent("MouseEvents");
      event.initMouseEvent(
        "click",
        true, true,
        window,
        0, 0,0, 0, 0,
        false, false, false, false, 0, null);
      try {
        const allowDefault = domElement.dispatchEvent(event);
      } catch (e) {
        console.log(e)
      }
    }
  }
})()
