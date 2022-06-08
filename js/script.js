window.onscroll = function() {myFunction()};

function myFunction() {

  let bookMark = document.getElementById('bookmark');  //Add Element To Target
  let scrollNum = document.documentElement.scrollTop;

  // console.log(scrollNum); //FOR Fixes

   function scrollNum500 (){                   //FOr Larger Screen
    if (scrollNum >= 400) {
        bookMark.style.display = 'block';
        }else{
          bookMark.style.display = 'none';
        }
      }

    function scrollNum750 (){                  //FOr Smaller Screen
      if (scrollNum >= 560) {
          bookMark.style.display = 'block';
          }else{
            bookMark.style.display = 'none';
          }
        }  

// Create a match Function
    function matchFunction(x) {
      
      if (x.matches) {
        
        scrollNum750();        //For Mobile Screen

      } else {

        scrollNum500();        //For Lager Screen

      }
    }
// Create a MediaQueryList object
    const mmObj = window.matchMedia("(max-width: 609px)")

// Call the match function at run time:
matchFunction(mmObj);

// Add the match function as a listener for state changes:
mmObj.addListener(matchFunction)
  

}
