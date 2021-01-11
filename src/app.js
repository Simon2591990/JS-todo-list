import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: '#app',
        data: {
            tasks: [
                {taskName: "Walk Dog", priority: "high"},
                {taskName: "Wash Car", priority: "low"},
                {taskName: "Feed Cat", priority: "high"},
            ],
       
        newTask: "",
        newTaskPriority: ""
    },
    methods: {
        saveNewTask: function() {
            this.tasks.push({name: this.newTask, priority: this.newTaskPriority});
            this.newTask = ""
            this.newTaskPriority = ""
        }
    }
    })
});