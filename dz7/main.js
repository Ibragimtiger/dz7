class Light {
  constructor(selector) {
    this.$element = document.getElementById(selector);
  }
}

class Circle extends Light {
  constructor(options) {
    super(options.selector);

    this.$element.style.backgroundColor = options.color;

    this.$element.textContent = options.text;
  }
}

let color = prompt("Введите цвет светофора:").toLowerCase().trim();

if (color === "red") {
  const red = new Circle({
    selector: "red",

    color: "red",

    text: "stop",
  });
} else if (color === "yellow") {
  const yellow = new Circle({
    selector: "yellow",

    color: "yellow",

    text: "wait",
  });
} else if (color === "green") {
  const green = new Circle({
    selector: "green",

    color: "green",

    text: "go",
  });
} else alert("Вы должны ввести цвет светофора: красный, желтый или зеленный");
