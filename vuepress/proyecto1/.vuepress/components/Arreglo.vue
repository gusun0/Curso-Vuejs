<template>
    <div>
        <h1>este es un componente</h1>
        <ul>
            <li v-for="(item, index) in lista" :key="index">
                {{item.nombre}} - {{item.descripcion}}
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    data(){
        return{
            lista: [
                {nombre: 'html', descripcion: 'curso de html'},
                {nombre: 'css', descripcion: 'curso de css'},
                {nombre: 'js', descripcion: 'curso de js'}
            ]
        }
    }
}
</script>