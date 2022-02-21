window.document.addEventListener("DOMContentLoaded", function () {
  const oneBtn = document.createElement("button");
  const oneBtnText = document.createTextNode("I'm First!!!");
  oneBtn.appendChild(oneBtnText);
  document.body.appendChild(oneBtn);

  const btnDiv = document.createElement("div");
  btnDiv.setAttribute("id", "btnDiv");
  document.body.appendChild(btnDiv);

  const txtDiv = document.createElement("div");
  txtDiv.setAttribute("id", "txtDiv");
  document.body.appendChild(txtDiv);

  const txtBox = document.createElement("input");
  txtDiv.appendChild(txtBox);

  const btn = document.createElement("button");
  const btnTxt = document.createTextNode("I Work!!!");
  btn.appendChild(btnTxt);
  txtDiv.appendChild(btn);

  // ex. cell.addEventListener('click', handleClick, { once: true })
  btn.addEventListener("click", function () {
    alert("I'm supposed to be nice soo...😝");
  });

  const colorDiv = document.createElement("div");
  // colorDiv.setAttribute.apply('id', "colorDiv")
  document.body.appendChild(colorDiv);
  colorDiv.style.cssText = "width: auto; height: 100px; background-color: blue";

  colorDiv.addEventListener("mouseenter", function () {
    colorDiv.style.cssText =
      "width: auto; height: 100px; background-color: pink";
  });
  colorDiv.addEventListener("mouseleave", function () {
    colorDiv.style.cssText =
      "width: auto; height: 100px; background-color: blue";
  });

  const para = document.createElement("p");
  const paraTxt = document.createTextNode(
    "Apple Cider vinigar is a natural laxative and it can improve digestion."
  );
  para.appendChild(paraTxt);
  document.body.appendChild(para);

  para.style.cssText = "cursor: pointer";

  para.addEventListener("click", function (event) {
    let colors = ["red", "blue", "brown", "pink", "green", "yellow"];
    let randomColor = Math.floor(Math.random() * colors.length);
    event.target.style.color = colors[randomColor];
  });

  const btnEmpty = document.createElement("button");
  const btnEmptyTxt = document.createTextNode("I Work. Also!!!");
  btnEmpty.appendChild(btnEmptyTxt);
  document.body.appendChild(btnEmpty);

  const emptyDiv = document.createElement("div");
  document.body.appendChild(emptyDiv);

  btnEmpty.addEventListener("click", function () {
    const span = document.createElement("span");
    emptyDiv.appendChild(span);
    span.textContent = "ABBIE!!! ";
    btnDiv.setAttribute("id", "btnDiv");
  });

  const listBtn = document.createElement("button");
  listBtn.textContent = "List Button";
  document.body.appendChild(listBtn);

  const ul = document.createElement("ul");
  document.body.appendChild(ul);

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

  // friends[i];
  //     }

  listBtn.addEventListener("click", function () {
    for (let i = 0; i < friends.length; i++) {
      const li = document.createElement("li");
      const friendList = document.createTextNode(friends[i]);
      li.appendChild(friendList);
      ul.appendChild(li);
    }

  });
});
