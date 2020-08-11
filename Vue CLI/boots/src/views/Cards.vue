<template>
    <div class="mt-5">
    
    <b-button>Boton</b-button>
    <b-button variant="primary">Primary</b-button>
    <b-button variant="secondary">Secondary</b-button>
    <b-button variant="success">Success</b-button>
    <b-button variant="danger">Danger</b-button>
    <b-button variant="warning">Warning</b-button>
    <b-button variant="info">Info</b-button>
    <b-button variant="light">Light</b-button>
    <b-button variant="dark">Dark</b-button>

    <b-row>
        <b-col cols="12" md="4" class="mt-5">
            <!-- aqui van las tarjetas  -->
            <b-card 
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=5"
            img-alt="Image"
            img-top
            tag="article"
           
            class="mb-2" 
            > 
            <!-- mb-2 => margin bottom de 2  -->

            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nobis consectetur sunt expedita error sequi quae voluptate distinctio reiciendis repudiandae tempora hic autem sint accusamus blanditiis, ullam, perferendis, culpa illo?
            </p>
              <b-button variant="light">Light</b-button>
            </b-card>   

        </b-col>

        <b-col cols="12" md="4" class="mt-5">
            <!-- aqui van las tarjetas  -->
            <b-card 
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=5"
            img-alt="Image"
            img-top
            tag="article"
           
            class="mb-2" 
            > 
            <!-- mb-2 => margin bottom de 2  -->

            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nobis consectetur sunt expedita error sequi quae voluptate distinctio reiciendis repudiandae tempora hic autem sint accusamus blanditiis, ullam, perferendis, culpa illo?
            </p>
              <b-button variant="light">Light</b-button>
            </b-card>   

        </b-col>

        <b-col cols="12" md="4" class="mt-5">
            <!-- aqui van las tarjetas  -->
            <b-card 
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=5"
            img-alt="Image"
            img-top
            tag="article"
           
            class="mb-2" 
            > 
            <!-- mb-2 => margin bottom de 2  -->

            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nobis consectetur sunt expedita error sequi quae voluptate distinctio reiciendis repudiandae tempora hic autem sint accusamus blanditiis, ullam, perferendis, culpa illo?
            </p>
              <b-button variant="light">Light</b-button>
            </b-card>   

        </b-col>
    </b-row>  
    </div>  
</template>

<script>
export default {
    name: 'Cards'
}
</script>