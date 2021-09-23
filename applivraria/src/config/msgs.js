import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    //containerClass:'danger',
    duration: 5000,
    theme: 'bubble',
    position: 'top-right', //['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left']
    //fullWidth: true,
    fitToScreen: true,
    keepOnHover: true,
    action : {
        text : 'fechar',
        onClick : (e, toastObject) => {
            toastObject.goAway(0);
        }
    } 
})

Vue.toasted.register(
    'defaultSuccess',
    obj => !obj.msg ? 'Operação realidada com sucesso!' : obj.msg,
    { type: 'success', icon: 'check-circle'}
    
)
Vue.toasted.register(
    'defaultWarning',
    obj => !obj.msg ? 'Operação realidada com sucesso!' : obj.msg,
    { type: 'info', icon: 'exclamation-triangle'}
    
)

Vue.toasted.register(
    'defaultError',
    obj => !obj.msg ? 'Oops.. Erro inesperado.' : obj.msg,
    { type: 'error', icon: 'times-circle ' }
)

// criando na hora sem mesagens padrão
/* this.$toasted.show( 'my message', { 
    type: 'success',
    icon:'home',
    action:{
          text:'Alert',
          onClick: () => {
                alert("agora foi")
          }
    }

}) */