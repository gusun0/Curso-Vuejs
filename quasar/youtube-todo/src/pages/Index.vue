<template>
  <div class="q-pa-md q-gutter-sm">

       <q-editor v-if="!modoEdicion"
      v-model="editor"
      :definitions="{
        save: {
          tip: 'Guardar task',
          icon: 'save',
          label: 'Guardar',
          handler: saveWork
        }
      }"
      :toolbar="[
        ['bold', 'italic', 'strike', 'underline'],
        ['upload', 'save']
      ]"
    />

     <q-editor v-else
      v-model="editor"
      :definitions="{
        save: {
          tip: 'actulizar nota',
          icon: 'save',
          label: 'actualizar',
          handler: updateWork
        }
      }"
      :toolbar="[
        ['bold', 'italic', 'strike', 'underline'],
        ['upload', 'save']
      ]"
    />





    <!-- <q-card flat bordered>
      <q-card-section>
        <pre style="white-space: pre-line">{{ editor }}</pre>
      </q-card-section>
    </q-card> -->

    <q-card class="row"
    flat bordered v-for="(item, index) in tasks" :key="index">
      <!-- v-html es para que inteprrete los codigos   -->
      <q-card-section class="col" v-html="item.texto" 
      :class="item.estado ? 'tachar' : ''"/>
      <q-btn 
      color="blue" flat @click="item.estado = !item.estado">Accion</q-btn>
      <q-btn color="red" flat @click="editar(index,item.id)">Editar</q-btn>
      <q-btn color="red" flat @click="eliminar(index,item.id)">Eliminar</q-btn>
    </q-card>

    <div class="flex flex-center" v-if="tasks.length === 0">
      <h6>sin notas</h6>
    </div>
  </div>
</template>

<script>

import { db } from 'boot/firebase';

export default {
 data(){
   return{
     editor: '',
     tasks: [
      //  { id: 'i8G8NYAWqUE6sJdn2Qms', texto: 'abc', estado: false },
      //   { id: 'sdfsdfsdf', texto: 'abc', estado: false }

      //  { texto: 'tarea 1', estado: false },
      //  { texto: 'tarea 2', estado: true },
      //  { texto: 'tarea 3', estado: false }                
       ],
       
       // para poder usar editar()
       index: null,
       modoEdicion: false,
       id: null
   }
 },

 created(){
   this.listarTareas();
 },
 methods:{


   async updateWork(){
     try {

        const resDB = await db.collection('tareas').doc(this.id).update({
          texto: this.editor
        })
        
        this.tasks[this.index].texto = this.editor


         this.$q.notify({
          message: 'tarea actualizada',
          color: 'dark',
          textColor: 'white',
          icon: 'cloud_done'
        })


     } catch (error) {
       console.log(error);
     }
     finally{

       this.modoEdicion = false;
     this.index = null;
     this.id = null;
     this.editor = '';

     }
   },

   editar(index,id){
// activamos el formulario de edicion
     this.modoEdicion = true;
     this.index = index;
     this.id = id;
     this.editor = this.tasks[index].texto;

   },

   async listarTareas(){
     // es un metodo async
     try {

       const resDB = await db.collection('tareas').get()

       resDB.forEach( res => {
         console.log(res.id);
         const tarea = {
           id: res.id, texto: res.data().texto, estado: res.data().estado
           }
      this.tasks.push(tarea)

       })
       
     } catch (error) {
       console.log(error);
     }
   },
   // se usa async para hacerlo de forma dinamica
   async saveWork () {

     try {

       const resDB = await db.collection('tareas').add({
         // add le dice a firebase que cree un nuevo doc con un id automatico 
         //resDB es nuestro doc
         texto: this.editor,
         estado: false
       })
       
       this.tasks.push({
         texto: this.editor,
         estado: false,
         id: resDB.id  
       })
       this.editor = ''
        this.$q.notify({
          message: 'Saved your text to local storage',
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done'
        })
      }
          
     catch (error) {
       console.log(error);
     }

   },
    
    async eliminar(index,id){
      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to delete the task?',
        cancel: true,
        persistent: true
      }).onOk( async () => {  

        try {

          await db.collection('tareas').doc(id).delete()
          // console.log('>>>> OK')
        this.tasks.splice(index,1);
          
        } catch (error) { 
          console.log(error);
        }
        
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
 }

}
</script>



<style>
  .tachar{
    text-decoration: line-through;
  }
</style>