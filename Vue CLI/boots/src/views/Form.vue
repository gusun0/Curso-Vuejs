<template>
    <div class="mt-5">
        <h1>Formularios</h1>

        <form>  
            <!-- //filas -->
            <b-row> 
                <b-col md="3">
                    <!-- state es una propiedad -->
                    <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
                    <small>minimo 3 caracteres </small>
                    <p>texto: {{texto}}</p>
                </b-col>

                <b-col md="3">
                    <!-- siempre se va a relacionar con un v-model 
                    select es la respuesta del usuario
                     -->
                    <b-form-select v-model="select" :options="animales"></b-form-select>
                    <p>{{select}}</p>
                    
                </b-col>

                <b-col md="3">
                    <b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>

                </b-col>


                <b-col md="3">
                    <b-form-checkbox-group v-model="cbox" :options="animalesRadio"></b-form-checkbox-group>
                <p>{{cbox}}</p>
                </b-col>

            </b-row>
        </form>
    
    </div>
</template>


<script>
export default {
    name: 'Forms',
    data(){
        return{
            texto: '',
            radio: null,
            select: null,
            cbox: [], 
            animales: [
                // estos valores viajan al select 
                // el primer objeto dede de ser null 
                {value:null, text: 'seleccione un animal'},
                {value:'perro', text: 'Guau'},
                {value:'gato', text: 'Miau'},
                {value:'pato', text: 'Cuak'}
            ],
            animalesRadio: [
                // {value:null, text: 'seleccione un animal'},
                {value:'perro', text: 'Guau'},
                {value:'gato', text: 'Miau'},
                {value:'pato', text: 'Cuak'}
            ]
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