
desc "Compile the coffeescript files into js files"
task :default do
  here = File.expand_path(File.dirname(__FILE__))
  files = %W{Vector2 BulletSebs ShipMovingTouch}
  puts "Compiling the coffee script files"
  paths = files.map{|f| "#{here}/js/#{f}.coffee"}.join(" ")
  #`coffee -c #{here}/js/BulletSebs.coffee`
  #`coffee -b -c #{here}/js/ShipMovingTouch.coffee`
  puts `coffee -b -c #{paths}`
end
