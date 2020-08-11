<template>
  <div id="app">
    
    <!-- es responsivo -->
    <b-navbar toggleable="lg" type="dark" variant="danger">

      <b-container>

         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav>
              <b-nav-item to="/" active-class="active" exact>Home</b-nav-item>
              <b-nav-item to="/about" active-class="active">About</b-nav-item>
            </b-navbar-nav>

        </b-collapse>


      </b-container>


    </b-navbar>
    <router-view/>
  </div>
</template>

