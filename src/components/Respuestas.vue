<template>

  <section class="src-components-respuestas">
    <div class="jumbotron">
      <h2><i>RESPUESTAS</i></h2>
        <div class="table responsive">
          <table class="table table-dark">
            <tr>
              <th>Pregunta</th>
              <th>Respuesta</th>
            </tr>
            <tr v-for="(respuesta,index) in respuestas" :key="index" >
            <th>{{respuesta.pregunta}}</th>
            <th>{{respuesta.resp}}</th>
            </tr>
            
          </table>
      </div>
      <p>*Profe: estoy para un 10 :)</p>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
        respuestas:[
          {pregunta:1,resp:'C'},
          {pregunta:2,resp:'C'},
          {pregunta:3,resp:'B'},
      ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-respuestas {

  }
</style>
