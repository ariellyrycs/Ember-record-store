
App.ArtistController = Ember.ObjectController.extend({
    actions: {
        editTodo: function () {
            this.set('isEditing', true);
        },
        createItem: function(id) {
            var nameEdit = this.get('name');
            $.ajax({
                url: 'http://localhost:9090/artist/' + id + '.json',
                type: 'PUT',
                contentType: "application/json",
                data: JSON.stringify({"name": nameEdit}),
                success: function (data) {
                }
            });
            this.set('isEditing', false);
        },
        delete: function (id) {
            $.ajax({
                url: 'http://localhost:9090/artist/'+ id +'.json',
                type: 'DELETE',
                success: function () {

                }
            });
        }.property('name')
    },
    isEditing: false,
});

App.RecordController = Ember.ObjectController.extend({
    actions: {
        editTodo: function () {
            this.set('isEditing', true);
        },
        editRecord: function(id) {
            var nameEdit = this.get('title'),
                yearEdit = this.get('year');
            $.ajax({
                url: 'http://localhost:9090/record/' + id + '.json',
                type: 'PUT',
                contentType: "application/json",
                data: JSON.stringify({"title": nameEdit, "year": yearEdit}),
                success: function (data) {
                }
            });
            this.set('isEditing', false);
        },
        delete: function (id) {
            console.log(id);
            $.ajax({
                url: 'http://localhost:9090/record/' + id + '.json',
                type: 'DELETE',
                success: function () {

                }
            });
        }.property('name')
    },
    isEditing: false,
});
