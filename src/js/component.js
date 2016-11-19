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

    $('#expandAll').click(function() {
        for (var i = 0; i < $('.ui.accordion .title').length; i++) {
            $('.ui.accordion').accordion('open', i);
        }
    });

    $('#closeAll').click(function() {
        for (var i = 0; i < $('.ui.accordion .title').length; i++) {
            $('.ui.accordion').accordion('close', i);
        }
    });
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
});

Vue.component('simple-slot', {
    template: `<div class="ui message">
    <div class="header">simple-slot header</div>
    <div><slot>This will only be displayed if there is no content to be distributed.</slot></div>
    </div>`
});

var slots = new Vue({
    el: '#slots'
});

Vue.component('bacon-ipsum', {
    template: `
    <div>
        <p v-if="!isError">{{ bacon }}</p>
        <div v-else>
            <p>Failed to load bacon ipsum.</p>
            <p>Here's why:</p>
            <p>{{ errorMessage }}</p>
        </div>
    </div>`,
    mounted: function() {
        var vm = this;
        axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=1')
            .then(function(response) {
                vm.bacon = response.data[0];
                vm.$emit('done');
            })
            .catch(function(error) {
                console.log(error);
                vm.errorMessage = error;
                vm.isError = true;
                vm.$emit('done');
            });
    },
    data: function() {
        return {
            bacon: '',
            isError: false,
            errorMessage: ''
        }
    }
})

var comp1 = {
    template: `
    <div class="ui message">
        <div class="header">Component 1</div>
        <div class="ui centered inline loader" :class="{ active: isLoading }"></div>
        <bacon-ipsum @done="finishedLoading"></bacon-ipsum>
    </div>`,
    data: function() {
        return {
            isLoading: true
        };
    },
    methods: {
        finishedLoading: function() {
            this.isLoading = false;
        }
    }
};
var comp2 = {
    template: `
    <div class="ui message">
        <div class="header">Component 2</div>
        <div class="ui centered inline loader" :class="{ active: isLoading }"></div>
        <bacon-ipsum @done="finishedLoading"></bacon-ipsum>
    </div>`,
    data: function() {
        return {
            isLoading: true
        };
    },
    methods: {
        finishedLoading: function() {
            this.isLoading = false;
        }
    }
}
var comp3 = {
    template: `
    <div class="ui message">
        <div class="header">Component 3</div>
        <div class="ui centered inline loader" :class="{ active: isLoading }"></div>
        <bacon-ipsum @done="finishedLoading"></bacon-ipsum>
    </div>`,
    data: function() {
        return {
            isLoading: true
        };
    },
    methods: {
        finishedLoading: function() {
            this.isLoading = false;
        }
    }
}

var vm = new Vue({
    el: '#dynamicComponent',
    data: {
        currentView: 'comp1'
    },
    components: {
        comp1: comp1,
        comp2: comp2,
        comp3: comp3
    }
});