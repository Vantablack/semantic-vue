'use strict';

$(document).ready(function () {
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
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    },
    methods: {
        toggleSeen: function () {
            this.seen = !this.seen;
        }
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{
            text: 'Learn JavaScript'
        }, {
            text: 'Learn Vue'
        }, {
            text: 'Build something awesome'
        }]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

// Define a new component called todo-item
Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [{
            text: 'Vegetables'
        }, {
            text: 'Cheese'
        }, {
            text: 'Whatever else humans are supposed to eat'
        }]
    }
});

var computedApp = new Vue({
    el: '#computedApp',
    data: {
        message: "Hello!"
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('');
        }
    }
});

var argument = new Vue({
    el: '#argument',
    data: {
        href: 'yesno.wtf/',
        protocol: 1,
    },
    computed: {
        computedHref: function () {
            return this.protocol === 1 ?
                'https://' + this.href : 'http://' + this.href;
        }
    }
});

var classBinding = new Vue({
    el: '#classBinding',
    data: {
        isRed: true
    },
    methods: {
        toggleClass: function () {
            this.isRed = !this.isRed;
        }
    }
});

var httpRequest = new Vue({
    el: '#httpRequest',
    data: {
        content: '',
        isLoading: false
    },
    methods: {
        callApi: _.debounce(
            function () {
                var vm = this;
                // Set loading state
                this.isLoading = true;
                axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        vm.isLoading = false;
                        vm.content = response;
                    })
                    .catch(function (error) {
                        console.error(error);
                        vm.isLoading = false;
                        vm.content = error;
                    });
            },
            // Prevent spamming
            500)
    }
});