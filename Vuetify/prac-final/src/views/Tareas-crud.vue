<template>
    <v-container grid-list-xl>
        <!-- row, wrap => para que respeste el sistema de columnas -->
        <v-layout row wrap>
            <v-flex md6>
                <v-card class="mb-3" v-for="(item, index) in listaTareas" :key="index">
                    <v-card-text>
                          <v-chip class="ma-2 ml-0" color="pink" label text-color="white">
                        <v-icon left>mdi-label</v-icon>
                        {{item.titulo}}
                        </v-chip>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloribus.</p>
                        <v-btn color="warning" class="ml-0" @click="editar(index)">Editar</v-btn>
                        <v-btn color="error" @click="eliminarTareas(item.id)">Eliminar</v-btn>
                    </v-card-text>

                </v-card>

            <!-- <v-card class="mb-3">

                    <v-card-text>
                          <v-chip class="ma-2 ml-0" color="pink" label text-color="white">
                        <v-icon left>mdi-label</v-icon>
                        Lista de tareas #2
                        </v-chip>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloribus.</p>
                        <v-btn color="warning" class="ml-0">Editar</v-btn>
                        <v-btn color="error">Eliminar</v-btn>
                    </v-card-text>

                </v-card> -->

            </v-flex>

            <v-flex md6 v-if="formAgregar">
                <v-card class="mb-3 pa-3" >
                    <v-form @submit.prevent="agregarTareas">
                        <v-text-field label="titulo de tarea" v-model="titulo"></v-text-field>
                        <v-textarea label="descripcion de tarea" v-model="descripcion"></v-textarea>
                        <v-btn block color="success" type="submit">Agregar Tarea</v-btn>
                    </v-form>
                </v-card>
            </v-flex>

              <v-flex md6 v-if=!formAgregar>
                <v-card class="mb-3 pa-3" >
                    <v-form @submit.prevent="editarTareas">
                        <v-text-field label="titulo de tarea" v-model="titulo"></v-text-field>
                        <v-textarea label="descripcion de tarea" v-model="descripcion"></v-textarea>
                        <v-btn block color="warning" type="submit">Editar Tarea</v-btn>
                    </v-form>
                </v-card>
            </v-flex>
            
        </v-layout>

    <v-snackbar
      v-model="snackbar"
    >
      {{ mensaje }}

      <template v-slot:action="{ attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>


    </v-container>
</template>

<script>
export default {
    data(){
        return{
            listaTareas: [
                {id: 1, titulo: 'Titulo tarea 1', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloribus.'},
                {   
                
                    id: 2, titulo: 'Titulo tarea 2', descripcion: 'Lorem ipsum dolor sit'
                }
            ],
            titulo: '',
            descripcion: '',
            snackbar: false,
            mensaje: '',
            formAgregar: true,
            indexTarea: ''

        }
    },
    methods:{
        agregarTareas(){
            console.log(this.titulo, this.descripcion);
            if(this.titulo === '' || this.descripcion === ''){
                this.snackbar = true
                this.mensaje = "llena todos los campos"
                console.log('vacio');
            }else{
                this.listaTareas.push({
                    id: Date.now(),
                    titulo: this.titulo,
                    descripcion: this.descripcion
                })
                this.titulo = ''
                this.descripcion = ''
                this.snackbar= true
                this.mensaje = "tarea agregada"
            }
        },

        eliminarTareas(id){
            console.log(id);
            this.listaTareas = this.listaTareas.filter(e => e.id != id)
        },
        
        editar(index){
            this.formAgregar = false
            this.titulo = this.listaTareas[index].titulo
            this.descripcion = this.listaTareas[index].descripcion
            this.indexTarea = index
        },

        editarTareas(){
            this.listaTareas[this.indexTarea].titulo = this.titulo
            this.listaTareas[this.indexTarea].descripcion = this.descripcion
            this.formAgregar = true
            this.titulo = ''
            this.descripcion = ''
            this.snackbar = true
            this.mensaje = 'editaste la tarea'
        }
    }
}
</script>