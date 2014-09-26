/**
 * Created by arobles on 9/19/14.
 */
App = Ember.Application.create({
    rootElement: '.frame'
});
App.Store = DS.Store.extend({
    adapter: DS.RESTAdapter.create()
});

App.Router.map(function() {
    this.resource('artists', function () {
        this.route('view', {path: "/:artist_id/records"});
        this.route('edit', {path: "/edit/:artist_id"});
    });
    this.resource('records', function () {
        this.route('edit', {path: "/edit/:record_id"});
        this.route('view', {path: "/:record_id"});
    });
    this.resource('songs', function () {
        this.route('edit', {path: "/edit/:song_id"});
        this.route('view', {path: "/:song_id"});
    });
});
App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('artists');
    }
});
App.ArtistsIndexRoute = Ember.Route.extend({
    model: function () {
       return $.getJSON( "http://localhost:9090/artists.json");
    }
});
App.ArtistsViewRoute = Ember.Route.extend({
    model: function (params) {
         return  $.getJSON('http://localhost:9090/artist/' + params.artist_id + '/records.json');
    }
});
App.ArtistsEditRoute = Ember.Route.extend({
    model: function (params) {
         return  $.getJSON('http://localhost:9090/artist/' + params.artist_id + '/records.json');
    }
});
