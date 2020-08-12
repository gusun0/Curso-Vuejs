<template>
    <div class="mt-5">
        <h1>Formularios</h1>

        <form>  
            <!-- //filas -->
            <b-row> 
                <b-col md="6">
                    <!-- state es una propiedad -->
                    <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
                    <small>minimo 3 caracteres </small>
                </b-col>
            </b-row>
            <p>texto: {{texto}}</p>
        </form>
    
    </div>
</template>


<script>
export default {
    name: 'Forms',
    data(){
        return{
            texto: ''
        }
    },
    // hacemos una propiedad computada para manejar state de forma dinamica
    computed:{ //devuelven un verdadero o falso

        comprobar(){
            return this.texto.length > 2 ? true : false            
                    
        }

        
    }
}
</script>