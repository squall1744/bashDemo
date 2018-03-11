if [ -d $1 ]; then
  echo '$1 has exist'
  exit 1
else
  mkdir $1
  cd $1
  mkdir css js
  touch index.html css/style.css js/main.js
  echo "<!DOCTYPE>" >> index.html
  echo "<title>Hello</title>" >>  index.html
  echo "<h1>Hi</h1>" >> index.html
  echo "h1{color: red;}" >> css/style.css
  echo 'let string =  "Hello world"' >> js/main.js
  echo 'alert(string)' >> js/main.js
  exit 0
fi
