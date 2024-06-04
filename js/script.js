document.addEventListener("DOMContentLoaded", function () {
  // 각 섹터 요소들을 가져옵니다.
  var sectors = document.querySelectorAll(".sector");

  // 오디오 요소를 가져옵니다.
  var audioPlayer = document.getElementById("audioPlayer");

  // 각 섹터에 클릭 이벤트 리스너를 추가합니다.
  sectors.forEach(function (sector) {
    sector.addEventListener("click", function () {
      // 클릭한 섹터의 오디오 파일 경로를 가져옵니다.
      var audioSrc = this.getAttribute("data-audio");

      // 이전에 재생 중이던 오디오를 일시 정지합니다.
      audioPlayer.pause();

      // 새로운 오디오를 재생합니다.
      audioPlayer.src = audioSrc;
      audioPlayer.play();
    });
  });

  // 클래스가 ".btn.btn-secondary"인 버튼들에 클릭 이벤트 리스너를 추가합니다.
  var secondaryButtons = document.querySelectorAll(".btn.btn-secondary");
  secondaryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    });
  });
});

$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});

$(document).ready(function () {
  $(".sector.btn.btn-primary").hover(
    function () {
      // Get the sector number from the data-sector attribute
      var sectorNumber = $(this).data("sector");

      // Hide all hover images
      $(".hoverContainer img").hide();

      // Show the hover image corresponding to the sector number
      $(".hover-image" + sectorNumber).show();
    },
    function () {
      // Hide all hover images when the mouse leaves the sector
      $(".hoverContainer img").hide();
    }
  );
});
