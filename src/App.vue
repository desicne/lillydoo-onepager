<template>
  <div id="app">
    <!-- Main View - load all the components there -->
    <router-view class="view"></router-view>
    <footer></footer>
  </div>
</template>
<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700')

html {
  background-color: #fff;
}

body {
  position: relative;
  margin: 0px;
  padding: 0px;
  height: 100%;
  color: #1b262c;
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  overflow: scroll;
  cursor: default;
}
  
footer {
  min-height: 240px;
  background-image: url('/public/images/pusteblume-pattern-04.png');
}

h2 {
  margin: 0;
  padding: 1em;
  color: #1b262c;
  font-family: 'Roboto', sans-serif;
  font-size: 2em;
  font-weight: 400;
}
  

h3 {
  margin: 0;
  padding: 0;
  color: #1b262c;
  font-family: 'Roboto', sans-serif;
  font-size: 1.3em;
  font-weight: 400;
}

h4 {
  font-size: 0.8em;
  font-weight: 400;
  text-transform: uppercase;
}

img {
  user-select: none;
}

p {
  margin: 0px;
  padding: 8px;
  color: #1b262c;
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  
}

a {
  display: block;
  background: #00afab;
  padding: 1em;
  margin: auto;
  width: fit-content;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  box-sizing: border-box;
  transition: all 0.5s ease;

  &:hover {
    background: lighten(#00afab, 10%)
  }
}

ul {
  margin-bottom: 2em;
  list-style: none;
}

ul li::before {
  content: "\2022";
  display: inline-block;
  width: 1em; 
  margin-left: -1em;
  color: #1b262c;
  font-weight: bold;
}

li {
  margin-bottom: 1em;
}

div {
  margin: 0;
  padding: 0;
  color: #1b262c;
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
}

span {
  color: #00afab;
}
  
::selection {
  background: #00afab;
  color: #f2f2f2;
}

::-moz-selection{
  background: #00afab;
  color: #f2f2f2;
}

.view {
  position: relative;
  top: 0;
  margin: 0px auto;
  min-width: 100vw;
  min-height: 100vh;
  overflow: auto;
  background: #fff;
}

</style>
