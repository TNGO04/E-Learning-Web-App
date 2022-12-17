const states = [
  {selector: "#attract", wait: 5, title: "Start Listening"},
  {selector: ".ARC.player.HTplayer.q4-player .q4-player-box", wait: 2, title: "Player 1"},
  {selector: ".areaVideoBack", wait: 2, title: "Close Player 1"},
  {selector: ".q4-player-compare", wait: 2, title: "Learn More"},
  {selector: ".q2-pdp-specifications", wait: 2, title: "Specifications"},
  {selector: ".q2-catalog-exit-specs-compare", wait: 2, title: "Close Specifications"},
  {selector: ".q2-pdp-compare", wait: 2, title: "Compare"},
  {selector: ".q2-catalog-exit-specs-compare", wait: 2, title: "Close Compare"},
  {selector: ".q2-pdp-info-next", wait: 2, title: "Learn More Next 1"},
  {selector: ".q2-pdp-info-next", wait: 2, title: "Learn More Next 2"},
  {selector: ".q2-pdp-info-next", wait: 2, title: "Learn More Next 3"},
  {selector: ".q2-pdp-photo-icons-next", wait: 2, title: "Photos Next 1"},
  {selector: ".q2-pdp-photo-icons-next", wait: 2, title: "Photos Next 2"},
  {selector: ".q2-pdp-photo-icons-next", wait: 2, title: "Photos Next 3"},
  {selector: ".q2-pdp-photo-icons-next", wait: 2, title: "Photos Next 4"},
  {selector: ".q2-pdp-photo-icons-next", wait: 2, title: "Photos Next 5"},
  {selector: ".q2-pdp-photo-icons-next", wait: 2, title: "Photos Next 6"},
  {selector: ".q2-pdp-photo-icons-next", wait: 2, title: "Photos Next 7"},
  {selector: ".q2-pdp-photo-icons-next", wait: 2, title: "Photos Next 8"},
  {selector: ".q2-pdp-page-close", wait: 2, title: "Close Learn More"},
  {selector: ".q2-top-menu-item.q2-top-menu-about", wait: 2, title: "About Sonos"},
  {selector: ".q2-about-menu-item:nth-child(2)", wait: 2, title: "Easy to use"},
  {selector: ".q2-about-menu-item:nth-child(3)", wait: 2, title: "Listen your way"},
  {selector: ".q2-about-menu-item:nth-child(4)", wait: 2, title: "Brilliant sound"},
  {selector: ".q2-about-menu-item:nth-child(1)", wait: 2, title: "Why Sonos"},
  {selector: ".q2-top-menu-item.q2-top-menu-features",  wait: 2, title: "Features"},
  {selector: ".q2-catalog-right-scroll.q2-features.q2-features-view",  wait: 2, title: "Scroll Right 1"},
  {selector: ".q2-catalog-right-scroll.q2-features.q2-features-view",  wait: 2, title: "Scroll Right 2"},
  {selector: ".q2-catalog-right-scroll.q2-features.q2-features-view",  wait: 2, title: "Scroll Right 3"},
  {selector: ".q2-catalog-right-scroll.q2-features.q2-features-view",  wait: 2, title: "Scroll Right 4"},
  {selector: ".q2-top-menu-item.q2-top-menu-listen", wait: 2, title: "Listen"},
  {selector: ".BEAM.player.HTplayer.q4-player .q4-player-box", wait: 2, title: "Player 2"},
  {selector: ".areaVideoBack", wait: 2, title: "Close Player 2"},
]
let rules = [
  ":root",
  "html",
  "body",
  ".SONOS #divboot",
  ".boot-cover",
  ".SONOS .ik2-video-fat-finger",
  ".SONOS .ik2-back-fat-finger",
  "#divPreloadStats",
  "#divPreloadStats h2",
  "#divAttract",
  "#divAttractPromptContainer",
  "#divAttractPrompt",
  ".factory-mask",
  ".factory-target",
  ".expFactory .factory-mask",
  ".expFactory .factory-target",
  ".expFactory .factory-absolute",
  ".compare",
  ".compareDisable",
  ".learnDisable",
  ".learn",
  ".reset",
  ".tssiyh",
  ".features",
  ".language-display",
  ".tv",
  ".players",
  ".player",
  ".bond",
  ".playerSelect",
  ".bondSelect",
  ".playerSelect.selected",
  ".bondSelect.selected",
  ".bond.disabled",
  ".bondSelect.disabled",
  ".player.disabled",
  ".playerSelect.disabled",
  ".configDisable",
  ".topBarDisable",
  ".sectionDisable",
  ".topBarDisable",
  ".sectionDisable",
  ".configHelp",
  ".configHelp li::before",
  ".configHelp li",
  ".SONOS .colorLocator",
  ".done-locator::before",
  ".playerPlacement .players",
  ".playerPlacement.Sonos .compare",
  ".playerPlacement .bond.disabled",
  ".playerPlacement .bondSelect.disabled",
  ".playerPlacement .player.disabled",
  ".playerPlacement .playerSelect.disabled",
  "#divAttract",
  "#divVideo",
  "#divVideo.autoplay",
  ".imgVideo",
  ".areaVideoBack",
  "#divAttract",
  ".divFade",
  "#vignette",
  "#vignetteHack",
  ".WebDemoMode #divAttract",
  "#divAttractTopLeft.app-assist-indicator",
  ".imgVideoFooter",
  ".volume-slider",
  ".playerPlacement .volume-slider",
  ".playerPlacement .volume-slider",
  ".volume-mute-fat-finger",
  ".volume-icon",
  ".volume-icon.mute",
  ".volume-range",
  ".volume-active-track",
  ".volume-trim",
  "input[type=range].volume",
  "input[type=range].volume::-webkit-slider-runnable-track",
  "input[type=range].volume::-webkit-slider-thumb",
  "input[type=range].volume:focus",
  ".swiper-container",
  ".swiper-container::-webkit-scrollbar",
  ".swiper-container::-webkit-scrollbar-thumb",
  ".swiper-backing",
  ".swiper-wrapper",
  ".swiper-slide",
  ".swiper-slide:nth-last-child(n+7)",
  ".swiper-slide:nth-last-child(n+7) ~ .swiper-slide",
  ".swiper-slide.song-1",
  ".swiper-slide.song-2",
  ".swiper-slide.song-3",
  ".swiper-slide.song-4",
  ".swiper-slide.song-5",
  ".swiper-slide.song-SFX",
  ".swiper-slide.video",
  ".swiper-fill",
  ".thumbnail-content",
  ".thumbnail-content.video",
  ".thumbnail",
  ".thumbnail.video",
  ".thumbnail.selected",
  ".thumbnail.video.selected",
  ".thumbnail-control",
  ".thumbnail-control.video",
  ".thumbnail-control.play",
  ".thumbnail.selected > .thumbnail-control.play",
  ".thumbnail.selected > .thumbnail-control.video.play",
  ".thumbnail-control.learnAboutSonos.play",
  ".thumbnail-text",
  ".player[data-player=\"ONESL\"]",
  ".player[data-player=\"ONE\"]",
  ".player[data-player=\"PAIRCC\"]",
  ".player[data-player=\"PAIROO\"]",
  ".player[data-player=\"PAIROC\"]",
  ".player[data-player=\"PAIR\"]",
  ".player[data-player=\"PAIR55\"]",
  ".player[data-player=\"PAIRVV\"]",
  ".playerPlacement .bond[data-player=\"REAROO\"]",
  ".playerPlacement .bond[data-player=\"REAROC\"]",
  ".playerPlacement .bond[data-player=\"REARCC\"]",
  ".playerPlacement .bond[data-player=\"REAR\"]",
  ".playerPlacement .bond[data-player=\"REAR55\"]",
  ".player[data-player=\"FIVE\"]",
  ".playerPlacement .player[data-player=\"PAIRVV\"]",
  ".player[data-player=\"MOVE\"]",
  ".player[data-player=\"ROAM\"]",
  ".player[data-player=\"ROAMSL\"]",
  ".player[data-player=\"ROAM\"][data-color=\"white\"]",
  ".player[data-player=\"ROAMSL\"][data-color=\"white\"]",
  ".player[data-player=\"H-ROAM\"]",
  ".player[data-player=\"H-ROAMSL\"]",
  ".player[data-player=\"H-ROAM\"][data-color=\"white\"]",
  ".player[data-player=\"H-ROAMSL\"][data-color=\"white\"]",
  ".player[data-player=\"BEAM\"]",
  ".player[data-player=\"ARC\"]",
  ".player[data-player=\"ARCSL\"]",
  ".bond[data-player=\"SUB\"]",
  ".player[data-player=\"LAMP\"]",
  ".player[data-player=\"LAMP\"][data-color=\"white\"]",
  ".player[data-player=\"SHELF\"]",
  ".player[data-player=\"SHELF\"][data-color=\"white\"]",
  ".collatHP19Deprecated .player[data-player=\"SONOSONE\"]",
  ".collatHP19Deprecated .player[data-player=\"PROMO\"]",
  ".collatMANUFACT .player.MANUFACT",
  ".collatMANUFACT .player.MANUFACT[data-done=\"yes\"]",
  ".expAIO .thumbnail.learnAboutSonos",
  ".expAIO .thumbnail.learnAboutSonos.noVideo",
  ".expAIO .thumbnail.selected > .thumbnail-control.learnAboutSonos.play",
  ".expHT .thumbnail.learnAboutSonos",
  ".expHT .thumbnail.learnAboutSonos.noVideo",
  ".expHT .thumbnail.selected > .thumbnail-control.learnAboutSonos.play",
  ".compare-page.pt-page-current",
  ".pageCompareTop",
  "#catalogHeader",
  ".divComparePage",
  ".pt-page-current .divComparePage",
  ".compareEmulate .imgBrightSignCatalogHack",
  "table.tableCatalogHeader",
  "table.tableCatalogHeader td",
  "table.tableCatalogHeader td.left",
  "table.tableCatalogHeader td.center",
  "table.tableCatalogHeader td.right",
  "table.tableCatalogHeader td.active",
  "table.catalogTable",
  ".catalogRedDot",
  "table.catalogTable td",
  ".catalogFootCol",
  "table.catalogTable td.catalogAttribCol",
  "table.catalogTable td.catalogCompareCol",
  "table.catalogTable td.catalogFootCol",
  "table.catalogTable td.catalogFootCol",
  "table.catalogTable td.catalogCompareCol",
  "table.catalogTable td.catalogCompareProdCol",
  "table.catalogTable tr.catalogShadedRow",
  "table.catalogTable tr.catalogShadedRow td",
  "table.catalogTable3Prod td",
  "table.catalogTable4Prod td.catalogCompareProdCol",
  "table.catalogTable4Prod td.catalogCompareProdCol",
  "img.catalogProduct",
  "table.catalogTable3Prod img.catalogProduct",
  "table.catalogTable4Prod img.catalogProduct",
  ".divCatalogFooter",
  ".expSBDAIO .pt-page",
  ".expSBDHT .pt-page",
  ".expSBDAIO #divBoot",
  ".expSBDHT #divBoot",
  ".expSBDAIO .base",
  ".expSBDHT .base",
  "#divSBDHTOverlays",
  ".SBDHTOverlayBase",
  "#SBDHTAlbumArt",
  ".SBDBottomNextSong",
  ".SBDBottomNextVideo",
  ".HTNowPlaying",
  ".SBDBottomNextSong",
  ".SBDBottomNextVideo",
  ".expSBDAIO .sbdFadeIn",
  ".expSBDHT .sbdFadeIn",
  ".expSBDAIO .sbdFadeOut",
  ".expSBDHT .sbdFadeOut",
  ".jconfirm .jconfirm-box",
  ".jconfirm",
  ".jconfirm .jconfirm-scrollpane",
  ".jconfirm .jconfirm-box-container",
  ".jconfirm.jconfirm-light .jconfirm-box .jconfirm-buttons button.btn-default",
  ".jconfirm.jconfirm-light .jconfirm-box .jconfirm-buttons button.btn-default:hover",
  ".jconfirm.jconfirm-light .jconfirm-box .jconfirm-buttons",
  ".jconfirm.jconfirm-light .jconfirm-box .jconfirm-buttons button.btn-bold",
  ".jconfirm .jconfirm-content",
  ".jconfirm .jconfirm-content.no-message",
  ".jconfirm .jconfirm-content div",
  ".expAIO .imgBase",
  ".expHT .imgBase",
  ".langENUS.expHT-TV .imgBase",
  ".tv",
  ".imgCompare",
  ".imgVideo",
  ".default .imgVideo"
]

let $report = $(`
<textarea id="test-report" style='z-index:1000; position: fixed; left:0px; top:0px; width: 200px; height: 200px; opacity: 0%'></textarea>
<div id="table-report" style='resize:both; z-index:1000; position: fixed; left:0px; top:0px; width: 25px; height: 25px; overflow-y: scroll; overflow-x:hidden; background-color: white; opacity: 85%'>
  <table width="100%">
      <thead>
        <tr>
            <th style="font-size: 2em;height: 40px;padding-top: 15px;">
                <h3>CSS Coverage</h3>
            </th>
            <th style="font-size: 2em;height: 40px;padding-top: 15px;">
                <h3 id="state"></h3>
            </th>
        </tr>
      </thead>
      <tbody id="table-body"></tbody>
  </table>
</div>
`)
let $tableBody
let $state
let $tableReport
const main = () => {
  $("body").append($report)
  $tableBody = $("#table-body")
  $state = $("#state")
  $tableReport = $("#table-report")
  // $tableReport.click(() => {
  //   const hidden = $tableReport.hasClass("hidden")
  //   if(hidden) {
  //     $tableReport.css({width: "500px", bottom: "0px"})
  //     $tableReport.removeClass("hidden")
  //   } else {
  //     $tableReport.css({width: "50px", bottom: "90%"})
  //     $tableReport.addClass("hidden")
  //   }
  // })
  // fetch("test/field-day.json")
  // fetch("http://wd-sp21-02-java.herokuapp.com/test/field-day.json")
  //   .then(response => response.json())
  //   .then(rls => {
  //     rules = rls
  //   })
  runTest()
  // $("body").on("click", handleClick)
}
$(main)

const renderReport = (report) => {
  const reportTable = []
  let maxScore = 0
  Object.keys(report).forEach(rule => {
    const score = report[rule]
    reportTable.push({rule: rule, score: score})
    maxScore = maxScore > score ? maxScore : score
  })
  reportTable.sort((a, b) => b.score - a.score)
  $tableBody.empty()
  reportTable.forEach(row => {
    const percentScore = Math.round(row.score*100.0/maxScore, 2)
    const $row = $(`
      <tr style="border-bottom: white; border-bottom-width: 1px; border-bottom-style: solid">
          <td style="padding: 4px">${row.rule}</td>
          <td width="100%">
              <div style="min-width: 60px; width: ${percentScore}%; background-color: ${percentScore === 0 ? 'lightsalmon': 'lightgreen'}; padding: 4px">
                  (${row.score}) ${percentScore}%
              </div>
          </td>
      </tr>`)
    $tableBody.append($row)
  })
}

let report = {}
const runTest = () => {
  let wait = 0
  states.forEach((state, ndx) => {
    wait += state.wait
    setTimeout(() => {
      $report.append(`${state.title}\n`)
      $state.html(state.title)
      click(state)
      rules.forEach(rule => {
        const length = $(rule).length
        if(!report[rule]) {
          report[rule] = 0
        }
        if(length !== 0) {
          report[rule]++
        }
      })
      renderReport(report)
      // }, ndx * 4000)
    }, wait * 1000)
  })
}

const handleClick = (e) => {
  console.log(e)
  console.log(e.target)
}

const click = (state) => {
  $(state.selector).css({
    "box-shadow": "0px 0px 10px 10px white"
  })
  domElement = $(state.selector)[0]

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
      console.log(state)
      console.log($(state.selector))
      console.log(e)
    }
  }
}
