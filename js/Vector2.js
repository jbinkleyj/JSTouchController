var Vector2, Vector2Const;
Vector2 = function(x, y) {
  this.x = x || 0;
  this.y = y || 0;
  return {
    reset: function(x, y) {
      this.x = x;
      this.y = y;
      return this;
    },
    toString: function(decPlaces) {
      var scalar;
      decPlaces = decPlaces || 3;
      scalar = Math.pow(10, decPlaces);
      return "[" + Math.round((this.x * scalar) / scalar + ", " + Math.round((this.y * scalar) / scalar + "]"));
    },
    clone: function() {
      return new Vector2(this.x, this.y);
    },
    copyTo: function(v) {
      v.x = this.x;
      return v.y = this.y;
    },
    copyFrom: function(v) {
      this.x = v.x;
      return this.y = v.y;
    },
    magnitude: function() {
      return Math.sqrt((this.x * this.x) + (this.y * this.y));
    },
    magnitudeSquared: function() {
      return (this.x * this.x) + (this.y * this.y);
    },
    normalize: function() {
      var m;
      m = this.magnitude();
      this.x = this.x / m;
      this.y = this.y / m;
      return this;
    },
    reverse: function() {
      this.x = -this.x;
      this.y = -this.y;
      return this;
    },
    plusEq: function(v) {
      this.x += v.x;
      this.y += v.y;
      return this;
    },
    plusNew: function(v) {
      return new Vector2(this.x + v.x, this.y + v.y);
    },
    minusEq: function(v) {
      this.x = v.x;
      this.y = v.y;
      return this;
    },
    minusNew: function(v) {
      return new Vector2(this.x - v.x, this.y - v.y);
    },
    multiplyEq: function(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      return this;
    },
    multiplyNew: function(scalar) {
      var returnvec;
      returnvec = this.clone();
      return returnvec.multiplyEq(scalar);
    },
    divideEq: function(scalar) {
      this.x /= scalar;
      this.y /= scalar;
      return this;
    },
    divideNew: function(scalar) {
      var returnvec;
      returnvec = this.clone();
      return returnvec.divideEq(scalar);
    },
    dot: function(v) {
      return (this.x * v.x) + (this.y * v.y);
    },
    angle: function(useRadians) {
      return Math.atan2(this.y, this.x) * (useRadians != null ? useRadians : {
        1: Vector2Const.TO_DEGREES
      });
    },
    rotate: function(angle, useRadians) {
      var cosRY, sinRY;
      cosRY = Math.cos(angle * (useRadians != null ? useRadians : {
        1: Vector2Const.TO_RADIANS
      }));
      sinRY = Math.sin(angle * (useRadians != null ? useRadians : {
        1: Vector2Const.TO_RADIANS
      }));
      Vector2Const.temp.copyFrom(this);
      this.x = (Vector2Const.temp.x * cosRY) - (Vector2Const.temp.y * sinRY);
      this.y = (Vector2Const.temp.x * sinRY) + (Vector2Const.temp.y * cosRY);
      return this;
    },
    equals: function(v) {
      return (this.x === v.x) && (this.y === v.x);
    },
    isCloseTo: function(v, tolerance) {
      if (equals(v)) {
        return true;
      }
      Vector2Const.temp.copyFrom(this);
      Vector2Const.temp.minusEq(v);
      return Vector2Const.temp.magnitudeSquared() < tolerance * tolerance;
    },
    rotateAroundPoint: function(point, angle, useRadians) {
      Vector2Const.temp.copyFrom(this);
      Vector2Const.temp.minusEq(point);
      Vector2Const.temp.rotate(angle, useRadians);
      Vector2Const.temp.plusEq(point);
      return this.copyFrom(Vector2Const.temp);
    },
    isMagLessThan: function(distance) {
      return this.magnitudeSquared() < distance * distance;
    },
    isMagGreaterThan: function(distance) {
      return this.magnitudeSquared() > distance * distance;
    }
  };
};
Vector2Const = {
  TO_DEGREES: 180 / Math.PI,
  TO_RADIANS: Math.PI / 180,
  temp: new Vector2()
};