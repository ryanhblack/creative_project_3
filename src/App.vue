<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/logo.png"><br>
        Friendzapp
      </router-link>
    </div>
    <div id="side">
      <router-link to="/post">
        <div class="menu-item post">
          <p><span class="icon">
          <svg class="bi bi-person-plus-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm7.5-3a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
          <path fill-rule="evenodd" d="M13 7.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clip-rule="evenodd"/>
          </svg>
          </span><br>
          Add Contact</p>
        </div>
      </router-link>
      <router-link to="/contacts">
        <div class="menu-item">
          <p><span class="icon">
          <svg class="bi bi-heart-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" clip-rule="evenodd"/>
          </svg>
          </span><br>
          Contacts</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  <div id="footer">
    <p style="text-align: center; padding: 0px 25%;">The repository for this project can be found at <a href="https://github.com/ryanhblack/creative_project_3">https://github.com/ryanhblack/creative_project_3</a></p>
  </div>
</div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 20px;;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #000;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 200%;
  font-weight: 900;
}

#brand img {
  height: 150px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side span {
  font-size: 200%;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
  text-align: center;
}

.post {
  margin-right: 50px;
}

#footer {
  word-wrap: break-word;
  margin-top: 10px;
}
</style>
