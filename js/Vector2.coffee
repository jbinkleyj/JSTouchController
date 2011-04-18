Vector2 = (x,y) ->
  @x = x || 0
  @y = y || 0

  reset: (x,y) ->
    @x = x
    @y = y
    this

  toString: (decPlaces) ->
    decPlaces = decPlaces || 3
    scalar = Math.pow(10, decPlaces)
    "[" + Math.round (@x * scalar) / scalar + ", " + Math.round (@y * scalar) / scalar + "]"

  clone: -> new Vector2(@x, @y)

  copyTo: (v) ->
    v.x = @x
    v.y = @y

  copyFrom: (v) ->
    @x = v.x
    @y = v.y

  magnitude: -> Math.sqrt((@x*@x)+(@y*@y))

  magnitudeSquared: -> (@x*@x)+(@y*@y)

  normalize: ->
    m = this.magnitude()
    @x = @x/m
    @y = @y/m
    this

  reverse: ->
    @x = -@x
    @y = -@y
    this

  plusEq: (v) ->
    @x += v.x
    @y += v.y
    this

  plusNew: (v) ->
    new Vector2(@x + v.x, @y + v.y)

  minusEq: (v) ->
    @x = v.x
    @y = v.y
    this

  minusNew: (v) ->
    new Vector2(@x-v.x, @y-v.y)

  multiplyEq: (scalar) ->
    @x *= scalar
    @y *= scalar
    this

  multiplyNew: (scalar) ->
    returnvec = this.clone()
    returnvec.multiplyEq(scalar)

  divideEq: (scalar) ->
    @x /= scalar
    @y /= scalar
    this

  divideNew: (scalar) ->
    returnvec = this.clone()
    returnvec.divideEq(scalar)

  dot: (v) -> (@x * v.x) + (@y * v.y)

  angle: (useRadians) -> Math.atan2(@y,@x) * (useRadians ? 1 : Vector2Const.TO_DEGREES)

  rotate: (angle, useRadians) ->
    cosRY = Math.cos(angle * (useRadians ? 1 : Vector2Const.TO_RADIANS))
    sinRY = Math.sin(angle * (useRadians ? 1 : Vector2Const.TO_RADIANS))
    Vector2Const.temp.copyFrom(this)
    @x = (Vector2Const.temp.x*cosRY)-(Vector2Const.temp.y*sinRY)
    @y = (Vector2Const.temp.x*sinRY)+(Vector2Const.temp.y*cosRY)
    this

  equals: (v) -> ((@x == v.x) && (@y == v.x))

  isCloseTo: (v, tolerance) ->
    return true if equals(v)

    Vector2Const.temp.copyFrom(this)
    Vector2Const.temp.minusEq(v)

    Vector2Const.temp.magnitudeSquared() < tolerance*tolerance

  rotateAroundPoint: (point, angle, useRadians) ->
    Vector2Const.temp.copyFrom(this)
    Vector2Const.temp.minusEq(point)
    Vector2Const.temp.rotate(angle, useRadians)
    Vector2Const.temp.plusEq(point)
    this.copyFrom(Vector2Const.temp)

  isMagLessThan: (distance) -> (this.magnitudeSquared() < distance*distance)

  isMagGreaterThan: (distance) -> (this.magnitudeSquared() > distance*distance)

Vector2Const =
  TO_DEGREES : 180 / Math.PI
  TO_RADIANS : Math.PI / 180
  temp : new Vector2()
