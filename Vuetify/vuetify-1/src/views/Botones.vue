<template>
    <v-container>
        <v-layout>
            <v-flex>
                <h1>Hola</h1>
                <v-btn>Boton</v-btn>
                <v-btn class="primary">Boton</v-btn>
                <v-btn class="blue" dark>Boton</v-btn>
                <v-btn color="secondary">Sin fondo</v-btn>
                <v-btn color="warning" large>Largo</v-btn>
                 <v-btn color="warning" small>Largo</v-btn>
                 <v-btn color="warning" small disabled>Largo</v-btn>

                 <v-btn color="info" depressed>Largo</v-btn>        
                 <v-btn>
                    <span class="material-icons">
                    accessibility
                    </span>
                 </v-btn>

                 <v-btn color="primary" icon>
                    <span class="material-icons">
                    accessibility
                    </span>
                 </v-btn>



                 <v-btn color="primary" fab>
                    <span class="material-icons">
                    accessibility
                    </span>
                 </v-btn>


                  <v-btn color="primary" fab small>
                    <span class="material-icons">
                    accessibility
                    </span>
                 </v-btn>

                  <v-btn color="primary" fab large>
                    <span class="material-icons">
                    accessibility
                    </span>
                 </v-btn>


                 <v-btn color="success">
                     texto
                     <span class="material-icons">accessibility</span>
                 </v-btn>


                 <v-btn color="success">
                     texto
                     <span class="material-icons ml-2" >accessibility</span>
                 </v-btn>

                  <v-btn color="success">
                     texto
                     <span right class="material-icons">accessibility</span>
                 </v-btn>

                    <v-btn color="success" outlined>
                     texto
                     <span right class="material-icons">accessibility</span>
                 </v-btn>

                  <v-btn color="success" outlined block>
                     texto
                     <span right class="material-icons">accessibility</span>
                 </v-btn>


                
            </v-flex>
        </v-layout>
    </v-container>    
</template>


<script>
export default {
    
}
</script>