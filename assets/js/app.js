$(document).ready(function(){
  
  var TMDB = {
    URL: 'http://api.themoviedb.org/3',
    API: '20c37a7bb085a194a8781df8dd193ac1',
    baseURL: '',
    size: '',

    getConfig: function(){
      $.get(this.URL + '/configuration?api_key=' + this.API, this.loadConfig);
    },

    loadConfig: function(data){
      console.log(data);
      TMDB.baseURL = data.images.base_url;
      TMDB.size = data.images.poster_sizes[3];
    }
  };


  var wows = {
    ID: '106646',
    data: '',
    posterPath: '',
    posterEl: $('#wolf-of-wall-street img'),
    title: '',
    titleEl: $('#wolf-of-wall-street h1'),
    overview: '',
    overviewEl: $('#wolf-of-wall-street p'),

    getFilmDetails: function(){
      $.get(TMDB.URL + '/movie/' + this.ID + '?api_key=' + TMDB.API, this.loadDetails);
    },

    loadDetails: function(data){
      wows.data = data;
      wows.posterPath = data.poster_path;
      wows.title = data.title;
      wows.overview = data.overview;

      wows.posterEl.attr('src', TMDB.baseURL + TMDB.size + wows.posterPath);
      wows.titleEl.text(wows.title);
      wows.overviewEl.text(wows.overview);
    },

    displayPoster: function(){
      if (wows.posterPath) {
        // this.posterEl.attr('src', TMDB.baseURL + TMDB.size + wows.posterPath);
      }
    },   
  };

  var hugo = {
    ID: '44826',
    data: '',
    posterPath: '',
    posterEl: $('#hugo img'),
    title: '',
    titleEl: $('#hugo h1'),
    overview: '',
    overviewEl: $('#hugo p'),

    getFilmDetails: function(){
      $.get(TMDB.URL + '/movie/' + this.ID + '?api_key=' + TMDB.API, this.loadDetails);
    },

    loadDetails: function(data){
      hugo.data = data;
      hugo.posterPath = data.poster_path;
      hugo.title = data.title;
      hugo.overview = data.overview;

      hugo.posterEl.attr('src', TMDB.baseURL + TMDB.size + hugo.posterPath);
      hugo.titleEl.text(hugo.title);
      hugo.overviewEl.text(hugo.overview);
    },
  };

  var shutter = {
    ID: '11324',
    data: '',
    posterPath: '',
    posterEl: $('#shutter-island img'),
    title: '',
    titleEl: $('#shutter-island h1'),
    overview: '',
    overviewEl: $('#shutter-island p'),

    getFilmDetails: function(){
      $.get(TMDB.URL + '/movie/' + this.ID + '?api_key=' + TMDB.API, this.loadDetails);
    },

    loadDetails: function(data){
      shutter.data = data;
      shutter.posterPath = data.poster_path;
      shutter.title = data.title;
      shutter.overview = data.overview;

      shutter.posterEl.attr('src', TMDB.baseURL + TMDB.size + shutter.posterPath);
      shutter.titleEl.text(shutter.title);
      shutter.overviewEl.text(shutter.overview);
    },
  };

  var departed = {
    ID: '1422',
    data: '',
    posterPath: '',
    posterEl: $('#departed img'),
    title: '',
    titleEl: $('#departed h1'),
    overview: '',
    overviewEl: $('#departed p'),

    getFilmDetails: function(){
      $.get(TMDB.URL + '/movie/' + this.ID + '?api_key=' + TMDB.API, this.loadDetails);
    },

    loadDetails: function(data){
      departed.data = data;
      departed.posterPath = data.poster_path;
      departed.title = data.title;
      departed.overview = data.overview;

      departed.posterEl.attr('src', TMDB.baseURL + TMDB.size + departed.posterPath);
      departed.titleEl.text(departed.title);
      departed.overviewEl.text(departed.overview);
    },
  };

  var app = {
    init: function(){
      TMDB.getConfig();
      wows.getFilmDetails();
      hugo.getFilmDetails();
      shutter.getFilmDetails();
      departed.getFilmDetails();
    },
  };


  app.init();
  window.app = app;
  window.TMDB = TMDB;
  window.wows = wows;

});