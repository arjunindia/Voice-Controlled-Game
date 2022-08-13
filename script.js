const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = document.querySelector(".container").offsetWidth;
canvas.height = document.querySelector(".container").offsetWidth / 1.6;
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  xvel: 10,
  yvel: 10,
  color: "#00f",
  radius: 30,
  ArrowLeft: false,
  ArrowRight: false,

  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  },
  update: function () {
    if (this.ArrowRight === true) {
      this.right();
    }
    if (this.ArrowLeft === true) {
      this.left();
    }
    if (this.Space === true) {
      this.reset();
    }
    if (this.ArrowUp === true) {
      this.up();
    }
    if (this.ArrowDown === true) {
      this.down();
    }
  },

  left: function () {
    this.x = this.x - this.xvel;
    if (this.x <= 0) {
      this.x = 0;
    }
  },
  right: function () {
    this.x = this.x + this.xvel;
    if (this.x >= canvas.width) {
      this.x = canvas.width;
    }
  },
  down: function () {
    this.y = this.y + this.xvel;
    if (this.y >= canvas.height) {
      this.y = canvas.height;
    }
  },
  up: function () {
    this.y = this.y - this.xvel;
    if (this.y <= 0) {
      this.y = 0;
    }
  },
  reset: function () {
    this.ArrowLeft = false;
    this.ArrowRight = false;
    this.ArrowUp = false;
    this.ArrowDown = false;
  },
};
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.update();
  window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
document.addEventListener("keydown", function (e) {
  //   ball.reset();
  ball[e.key] = true;
});
document.addEventListener("keyup", function (e) {
  ball[e.key] = false;
});
