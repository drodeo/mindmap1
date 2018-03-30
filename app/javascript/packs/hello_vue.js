/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

//import Vue from 'vue'
//import App from '../app.vue'

//document.addEventListener('DOMContentLoaded', () => {
//  const el = document.body.appendChild(document.createElement('hello'))
//  const app = new Vue({
//    el,
//    render: h => h(App)
//  })

//  console.log(app)
//})


// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


 import Vue from 'vue/dist/vue.esm'
 //import App from '../app.vue'
 import VueTree from 'liquor-tree/dist/liquor-tree.esm'

Vue.use(VueTree)

 document.addEventListener('DOMContentLoaded', () => {

   const app =     new Vue({
       el: '#app',
       data: function() {
           return {
               treeData: getTreeData(),
               treeOptions: {
                   checkbox: true,
                   propertyNames: {
                       text: 'MY_TEXT',
                       children: 'KIDS'
                   }
               }
           }
       }
   })


     function getTreeData() {
         return [
             {
                 MY_TEXT: 'JS: The Right Way',
                 state: {expanded: true},
                 KIDS: [
                     {MY_TEXT: 'Getting Started', state: {checked: true}},
                     {MY_TEXT: 'JavaScript Code Style', state: {selected: true}},
                     {
                         MY_TEXT: 'The Good Parts', KIDS: [
                             {MY_TEXT: 'OBJECT ORIENTED', state: {checked: true}},
                             {MY_TEXT: 'ANONYMOUS FUNCTIONS', state: {checked: true}},
                             {MY_TEXT: 'FUNCTIONS AS FIRST-CLASS OBJECTS', state: {checked: true}},
                             {MY_TEXT: 'LOOSE TYPING', state: {checked: true}}
                         ]
                     },
                     {
                         MY_TEXT: 'Patterns', KIDS: [
                             {
                                 MY_TEXT: 'DESIGN PATTERNS', state: {expanded: true}, KIDS: [
                                     {
                                         MY_TEXT: 'Creational Design Patterns', KIDS: [
                                             {MY_TEXT: 'Factory'},
                                             {MY_TEXT: 'Prototype'},
                                             {MY_TEXT: 'Mixin'},
                                             {MY_TEXT: 'Singleton'}
                                         ]
                                     },
                                     {MY_TEXT: 'Structural Design Patterns'}
                                 ]
                             },
                             {
                                 MY_TEXT: 'MV* PATTERNS', cildren: [
                                     {MY_TEXT: 'MVC Pattern'},
                                     {MY_TEXT: 'MVP Pattern'},
                                     {MY_TEXT: 'MVVM Pattern'}
                                 ]
                             }
                         ]
                     }
                 ]
             }
         ]
     }
 })
//
//
//
// If the using turbolinks, install 'vue-turbolinks':
//
// yarn add 'vue-turbolinks'
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks';
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
