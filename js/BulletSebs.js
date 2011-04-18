var Bullet;
Bullet = function(x, y, angle) {
  var draw, reset, speed, update;
  speed = 10;
  update = function() {
    this.pos.plusEq(this.vel);
    this.life--;
    if (this.life < 0) {
      return this.enabled = false;
    }
  };
  draw = function(c) {
    if (!this.enabled) {
      return;
    }
    c.lineWidth = 2;
    c.strokeStyle = "#fff";
    c.beginPath;
    c.arc(this.pos.x, this.pos.y, 2, 0, Math.PI * 2, true);
    return c.stroke();
  };
  reset = function(x, y, angle) {
    var unitv;
    this.pos = new Vector2(x, y);
    unitv = new Vector2(1, 0);
    unitv.rotate(angle);
    this.vel = unitv.clone();
    this.vel.multiplyEq(speed);
    unitv.multiplyEq(10);
    this.pos.plusEq(unitv);
    this.enabled = true;
    return this.life = 50;
  };
  return reset(x, y, angle);
};