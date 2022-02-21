$(document).ready(function () {
    $("<div id='div1'></div>").appendTo("body");

    let button = $("<button id='oneBtn'>Click Me!</button>");
    button.appendTo("#div1");
    button.click(function () {
        alert("Nice, this works!!!");
    });

    $("<div id='inputDiv'></div>").appendTo("body");
    $("<input type='text'></input>").appendTo("#inputDiv");
    $("<button>I Work Somedays</button>").appendTo("#inputDiv");

    $("<div id='colorDiv'></div>").appendTo("body");
    $("#colorDiv").css({"background":"pink", "width":"auto", "height":"100px"});

    $("#colorDiv").mouseenter(function () {
        $("#colorDiv").css({backgroundColor: "blue"});
    });
    $("#colorDiv").mouseleave(function () {
        $("#colorDiv").css({backgroundColor: "pink"});
    });

    $("<p id='p'>Apple Cider vinigar is a natural laxative and it can improve digestion.</p>").appendTo("body");
    $("#p").css({cursor: "pointer"})

    $("#p").click(function (e) {
        let colors = ["red", "blue", "brown", "pink", "green", "yellow"];
        let randomColor = Math.floor(Math.random() * colors.length);
        e.target.style.color = colors[randomColor];     
    })

    $("<button id='emptyBtn'>I Work, Also!!!</button>").appendTo("body")
    $("<div id='emptyDiv'></div>").appendTo("body")
    $("#emptyBtn").click(function() {
        $("<span>ABBIE!!!! </span>").appendTo("#emptyDiv")
    })

    $("<button id='friendBtn'>All My Friends</button>").appendTo("body")
    $("<div id='friendDiv'></div>").appendTo("body")
    $("<ul></ul>").appendTo("#friendDiv")
  
    let friends = [
        "Ashley",
        "Blake",
        "Jackie",
        "Lisa",
        "Jessica",
        "Mr.Whale",
        "Barney",
        "Cindy",
        "Hazel",
        "Erica",
      ];
    $("#friendBtn").click(function() {
        
        for (let i = 0; i < friends.length; i++) {
            let li = $("<li>" + (friends[i]) + "</li>"); 
            $(li).appendTo("ul")  
     
        }       
        
  });
});
