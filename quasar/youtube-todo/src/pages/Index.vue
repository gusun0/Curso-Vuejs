<template>
  <div class="q-pa-md q-gutter-sm">

       <q-editor
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
      <q-btn color="red" flat @click="eliminar(index)">Eliminar</q-btn>
    </q-card>

    <div class="flex flex-center" v-if="tasks.length === 0">
      <h6>sin notas</h6>
    </div>
  </div>
</template>

<script>
export default {
 data(){
   return{
     editor: '',
     tasks: [
       { texto: 'tarea 1', estado: false },
       { texto: 'tarea 2', estado: true },
       { texto: 'tarea 3', estado: false }                
       ]
   }
 },
 methods:{
   saveWork () {
     this.tasks.push({
       texto: this.editor,
       estado: false
     })
      this.$q.notify({
        message: 'Saved your text to local storage',
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done'
      })
    },
    eliminar(index){
      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to delete the task?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        // console.log('>>>> OK')
      this.tasks.splice(index,1);
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