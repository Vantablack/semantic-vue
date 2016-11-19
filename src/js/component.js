'use strict';

$(document).ready(function() {
    // Semantic UI Accordions
    $('.ui.accordion').accordion({
        exclusive: false
    });

    // Semantic UI Tabs
    $('.menu .item').tab();

    // Semantic UI Dropdowns
    $('.ui.dropdown').dropdown();
});

// Vue.js codes

// Basic Component
Vue.component('basic-component', {
    template: '<p>This is a very basic component</p>'
});

var firstComponent = new Vue({
    el: '#basicComponent'
});

// Local Component
var childLocalComponent = {
    template: '<p>I am a local component</p>'
};

var localComponent = new Vue({
    el: '#localComponent',
    components: {
        'local-component': childLocalComponent
    }
});

// Counter
Vue.component('simple-counter', {
    template: '<button @click="counter += 1" class="ui fluid button">{{ counter }}</button>',
    // data is technically a function, so Vue won't
    // complain, but we return the same object
    // reference for each component instance
    data: function() {
        return { counter: 0 };
    }
})

var counter = new Vue({
    el: '#counter'
});

// Basic Prop
Vue.component('basic-prop', {
    props: ['message'],
    template: '<p>{{ message }}</p>'
});

var basicProp = new Vue({
    el: '#basicProp'
});

// Dynamic Prop
var dynamicProp = new Vue({
    el: '#dynamicProp',
    data: {
        parentMessage: 'Change this message'
    }
});

// Events
Vue.component('event-counter', {
    template: '<button @click="increment" class="ui fluid button">{{ counter }}</button>',
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        increment: function() {
            this.counter += 1;
            this.$emit('increment');
        }
    }
});

var counterWithEvent = new Vue({
    el: '#counterWithEvent',
    data: {
        totalClicks: 0
    },
    methods: {
        incrementTotal: function() {
            this.totalClicks += 1;
        }
    }
})