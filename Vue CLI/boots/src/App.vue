<template>
  <div id="app">
    
    <!-- es responsivo -->
    <b-navbar toggleable="md" type="dark" variant="success">

      <b-container>

         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav>
              <b-nav-item to="/" active-class="active" exact>HOME</b-nav-item>
              <b-nav-item to="/about" active-class="active">ABOUT</b-nav-item>
              <b-nav-item to="/grid" active-class="active">GRID</b-nav-item>
              <b-nav-item to="/cards" active-class="active">CARDS</b-nav-item>
            </b-navbar-nav>

        </b-collapse>


      </b-container>


    </b-navbar>


      <b-container>
    <!-- todo lo que este en forma dinamica estara dentro de un container -->
    <router-view/>

      </b-container>

  </div>
</template>

