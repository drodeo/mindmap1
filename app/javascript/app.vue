<template>
   <div id='hello'>

     <app></app>
   </div>
</template>

<script>
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
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
