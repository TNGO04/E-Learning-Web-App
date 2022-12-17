(function () {
  const main = () => {
    runTest()
  }
  $(main)

  const runTest = () => {
    let wait = 0
    setTimeout(() => {
      click("#attract")
      cycleThroughPlayers()
    }, 1000)
  }
  let counter = 0
  let interval = null
  const cycleThroughPlayers = () => {
    interval = setInterval(() => {
      const players = $(".q4-player-box")
      const player = players[counter]
      counter++
      if (counter > players.length - 1) {
        clearInterval(interval)
      }
      console.log(counter, player)
      // $(player)
      //   .css("border-color", "white")
      //   .css("border-width", "10px")
      //   .css("border-style", "solid")
      click(player)

      setTimeout(() => {
        const closeVideo = $(".pt-page-current .areaVideoBack")
        if (closeVideo.length > 0) {
          click(closeVideo)
        }
      }, 100)
    }, 2000)
  }

  const click = (selector) => {
    domElement = $(selector)[0]

    if (document.createEvent) {
      const event = document.createEvent("MouseEvents");
      event.initMouseEvent(
        "click",
        true, true,
        window,
        0, 0, 0, 0, 0,
        false, false, false, false, 0, null);
      try {
        const allowDefault = domElement.dispatchEvent(event);
      } catch (e) {
        console.log(e)
      }
    }
  }
})()
