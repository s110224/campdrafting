var multipleCardCarousel = document.querySelector("#carouselExampleControls");
if (window.matchMedia("(min-width: 576px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}










// $(document).ready(function() {

//     $('#calendar').fullCalendar({
//       //locale: 'zh-cn',
//       header: {
//         left: 'prev,next today',
//         center: 'title',
//         right: 'month,basicWeek,basicDay'
//       },
//       defaultDate: '2018-03-12',
//       navLinks: true, // can click day/week names to navigate views
//       editable: true,
//       eventLimit: true, // allow "more" link when too many events
//       events: [
//         {
//           title: 'big river campdraft',
//           start: '2023-03-01'
//         },
//         {
//           title: 'cowra camdraft ',
//           start: '2023-03-07',
//           end: '2018-03-10'
//         },
//         {
//           id: 999,
//           title: 'Repeating Event',
//           start: '2023-03-09T16:00:00'
//         },
//         {
//           id: 999,
//           title: 'Repeating Event',
//           start: '2023-03-16T16:00:00'
//         },
//         {
//           title: 'walgett campdraft',
//           start: '2018-03-11',
//           end: '2023-03-13'
//         },
//         {
//           title: 'bingara show camdraft',
//           start: '2018-03-12T10:30:00',
//           end: '2023-06-12T12:30:00'
//         },
//         {
//           title: 'merriaw campdraft',
//           start: '2023-03-12T12:00:00'
//         },
//         {
//           title: 'merriawcampdraft',
//           start: '2023-03-12T14:30:00'
//           end:'2023 - 05-12t14'00:00
//         },
//         {
//           title: 'Happy Hour',
//           start: '2023-03-12T17:30:00'
//         },
//         {
//           title: 'Dinner',
//           start: '2023-03-12T20:00:00'
//         },
//         {
//           title: 'Birthday Party',
//           start: '2023-03-13T07:00:00'
//         },
//         {
//           title: 'Click for Google',
//           url: 'http://google.com/',
//           start: '2018-03-28'
//         }
//       ]
//     });

//   });

























// var statesSelect = document.getElementById("states");

// var states = {
//   AL: "SOUTH AUS ",
//   AK: "WA ",
//   AS: "Victoria",
//   AZ: "NT",
//   AR: "ACT",
//   CA: "QLD",
//   CO: "NSW",
  
// };

// for (var key in states) {
//   console.log(key);

//   if (states.hasOwnProperty(key)) {
//     console.log(key);
//     var option = document.createElement("option"); // Create a <p> node
//     var t = document.createTextNode(states[key]); // Create a text node
//     option.appendChild(t); //Append the text to<p>
//     statesSelect.appendChild(option);
//   }
// }













































































