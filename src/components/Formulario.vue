<template>

  <section class="src-components-formulario">
    <div class="jumbotron">
      <h1><i>PLANILLA DE NOTAS</i></h1>
      <vue-form :state="formstate" @submit.prevent="enviar()">

        <!--CAMPO NOMBRE -->
        <validate tag="div">  
          <label for="nombre">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            v-model="formData.nombre" 
            name="nombre"
            autocomplete="off"
            class="form-control"
            required 
            :minlength="datoMinLength"
            :maxlength="datoMaxLength"
            sin-espacios
            />

            <field-messages name="nombre" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Campo obligatorio</div>
              <div slot="sin-espacios" class="alert alert-danger mt-1">No puede haber espacios en este campo</div>
              <div slot="minlength" class="alert alert-danger mt-1">
                Se debe insertar como minimo {{datoMinLength}} caracteres.
              </div>
              <div class="alert alert-danger mt-1" v-if="formData.nombre.length==datoMaxLength">
                La cantidad maxima de caracteres es {{datoMaxLength}}.
              </div>
            </field-messages>
        </validate>
        <br>

        <!--CAMPO Apellido -->
        <validate tag="div">  
          <label for="apellido">Apellido</label>
          <input 
            type="text" 
            id="apellido" 
            v-model.trim="formData.apellido" 
            name="apellido"
            autocomplete="off"
            class="form-control"
            required 
            :minlength="datoMinLength"
            :maxlength="datoMaxLength"
            sin-espacios
            />

            <field-messages name="apellido" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Campo obligatorio</div>
              <div slot="sin-espacios" class="alert alert-danger mt-1">No puede haber espacios en este campo</div>
              <div slot="minlength" class="alert alert-danger mt-1">
                Se debe insertar como minimo {{datoMinLength}} caracteres.
              </div>
              <div class="alert alert-danger mt-1" v-if="formData.apellido.length==datoMaxLength">
                La cantidad maxima de caracteres es {{datoMaxLength}}.
              </div>
            </field-messages>
        </validate>
        <br>

        <!--CAMPO Nota -->
        <validate tag="div">  
          <label for="nota">Nota</label>
          <input 
            type="number" 
            id="nota" 
            v-model.number="formData.nota" 
            name="nota"
            autocomplete="off"
            class="form-control"
            required
            />

            <field-messages name="nota" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Campo obligatorio</div>
              <div class="alert alert-danger mt-1" v-if="formData.nota<1||formData.nota>10">
                El nota debe estar entre 1 y 10.
              </div>
            </field-messages>
        </validate>


        <button class="btn btn-success my-3" :disabled="formstate.$invalid" type="submit">Enviar</button>
      </vue-form>

      <!-- TABLA DE DATOS -->

      <h3><i>Detalle</i></h3>
      <div v-if="notas.length" class="table-responsive">
        <table class="table table-info">
          <tr>
            <th>Nombre y apellido</th>
            <th>Nota</th>
          </tr>
          <tr v-for="(nota,index) in notas" :key="index" :style="{color:colorNotas(nota.nota).color}">
            <td>{{nota.nombre}} {{nota.apellido}}</td>
            <td>{{nota.nota}}</td>         
          </tr>
          <tr :style="{color:colorNotas(calcularPromedio().promedio).color}">
            <th>Promedio de notas</th>
            <th>{{calcularPromedio().promedio}}</th>
          </tr>
        </table>
       </div> 
       <h4 v-else class="alert alert-info">Sin notas ingresadas por el momento</h4>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formstate:{},
        formData:this.inicialData(),
        datoMinLength:3,
        datoMaxLength:15,
        notas:[]
      }
    },
    methods: {
      inicialData(){
        return{
          nombre:"",
          apellido:"",
          nota:"",
        }
      },
      enviar(){
        let nota = {...this.formData}
        this.notas.push(nota)
        this.formData=this.inicialData()
        this.formstate._reset()
      },
      colorNotas(nota){
        let valor = nota
        let color='green'
        if(valor<7) color='yellow'
        if(valor<4) color='red'
        return{
          color
        }
      },
      calcularPromedio(){
        let promedio=0
        let sum=0
        let cont=0
        for (let index = 0; index < this.notas.length; index++) {
          const element = this.notas[index];
          sum+=element.nota;
          cont++;
        }
        promedio=sum/cont
        return{
          promedio
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {
    
  }
  .jumbotron{
    padding-top: 20px;
    text-align: left;
  }
</style>
