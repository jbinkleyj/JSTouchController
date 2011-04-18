Bullet = (x, y, angle) ->
  speed = 10

  update = ->
    @pos.plusEq(@vel)
    @life--
    @enabled = false if @life < 0


  draw = (c) ->
    return unless @enabled
    c.lineWidth = 2
    c.strokeStyle = "#fff"
    c.beginPath
    c.arc(this.pos.x,this.pos.y,2, 0, Math.PI*2, true)
    c.stroke()

  reset = (x, y, angle) ->
    @pos = new Vector2(x,y)
    unitv = new Vector2(1,0)
    # instead set Vector with speed and rotate
    unitv.rotate(angle)
    @vel = unitv.clone()
    @vel.multiplyEq(speed)
    unitv.multiplyEq(10)
    @pos.plusEq(unitv)
    @enabled = true
    @life = 50

  reset(x, y, angle)
