import Button from './Button/index.vue'

const components = [Button];

const install = (app) => {
  components.forEach(comp => {
    app.component(comp.name, comp);
  })
  return app
}

export { Button }
export default {
  install
}