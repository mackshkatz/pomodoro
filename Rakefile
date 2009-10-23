
desc "Generate HTML and CSS"
task :build do
  system "haml public/index.haml > public/index.html"
  system "sass public/stylesheets/sass/application.sass > public/stylesheets/application.css"
  rm_rf ".sass-cache"
end

