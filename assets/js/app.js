$(document).ready(function(){

  var TMDB = {
    URL: 'http://api.themoviedb.org/3',
    API: '20c37a7bb085a194a8781df8dd193ac1',
    baseURL: '',
    size: '',
    backdropSizes: '',

    getConfig: function(){
      $.get(this.URL + '/configuration?api_key=' + this.API, this.loadConfig);
    },

    loadConfig: function(data){
      console.log(data);
      TMDB.baseURL = data.images.base_url;
      TMDB.size = data.images.poster_sizes[3];
      TMDB.backdropSizes = data.images.backdrop_sizes[0];
    }
  };

  var films = {
    filmIDs: [
    '106646',
    '44826',
    '11324',
    '1422',
    '2567',
    '3131',
    '524',
    '1598',
    '769'
    ],
    filmContainers: [
    $('#wolf-of-wall-street'),
    $('#hugo'),
    $('#shutter-island'),
    $('#departed'),
    $('#aviator'),
    $('#gangs'),
    $('#casino'),
    $('#cape-fear'),
    $('#goodfellas')
    ]
  };



  var wows = {
    ID: '106646',
    data: '',
    backdropPath: '',
    posterPath: '',
    posterEl: $('#wolf-of-wall-street img'),
    title: 'Wolf of Wall Street',
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
      wows.backdropPath = data.backdrop_path;


      $('#wolf-of-wall-street').css('background-image', 'url("' + TMDB.baseURL + TMDB.backdropSizes + wows.backdropPath + '")');
      // $('#wolf-of-wall-street').css('background-color', 'blue');

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
      hugo.backdropPath = data.backdrop_path;


      $('#hugo').css('background-image', 'url("' + TMDB.baseURL + TMDB.backdropSizes + hugo.backdropPath + '")');


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

  var aviator = {
    ID: '2567',
    data: '',
    posterPath: '',
    posterEl: $('#aviator img'),
    title: '',
    titleEl: $('#aviator h1'),
    overview: '',
    overviewEl: $('#aviator p'),

    getFilmDetails: function(){
      $.get(TMDB.URL + '/movie/' + this.ID + '?api_key=' + TMDB.API, this.loadDetails);
    },

    loadDetails: function(data){
      aviator.data = data;
      aviator.posterPath = data.poster_path;
      aviator.title = data.title;
      aviator.overview = data.overview;

      aviator.posterEl.attr('src', TMDB.baseURL + TMDB.size + aviator.posterPath);
      aviator.titleEl.text(aviator.title);
      aviator.overviewEl.text(aviator.overview);
    },
  };

  var gangs = {
    ID: '3131',
    data: '',
    posterPath: '',
    posterEl: $('#gangs img'),
    title: '',
    titleEl: $('#gangs h1'),
    overview: '',
    overviewEl: $('#gangs p'),

    getFilmDetails: function(){
      $.get(TMDB.URL + '/movie/' + this.ID + '?api_key=' + TMDB.API, this.loadDetails);
    },

    loadDetails: function(data){
      gangs.data = data;
      gangs.posterPath = data.poster_path;
      gangs.title = data.title;
      gangs.overview = data.overview;

      gangs.posterEl.attr('src', TMDB.baseURL + TMDB.size + gangs.posterPath);
      gangs.titleEl.text(gangs.title);
      gangs.overviewEl.text(gangs.overview);
    },
  };

  var casino = {
    ID: '524',
    data: '',
    posterPath: '',
    posterEl: $('#casino img'),
    title: '',
    titleEl: $('#casino h1'),
    overview: '',
    overviewEl: $('#casino p'),

    getFilmDetails: function(){
      $.get(TMDB.URL + '/movie/' + this.ID + '?api_key=' + TMDB.API, this.loadDetails);
    },

    loadDetails: function(data){
      casino.data = data;
      casino.posterPath = data.poster_path;
      casino.title = data.title;
      casino.overview = data.overview;

      casino.posterEl.attr('src', TMDB.baseURL + TMDB.size + casino.posterPath);
      casino.titleEl.text(casino.title);
      casino.overviewEl.text(casino.overview);
    },
  };

  var cape = {
    ID: '1598',
    data: '',
    posterPath: '',
    posterEl: $('#cape-fear img'),
    title: '',
    titleEl: $('#cape-fear h1'),
    overview: '',
    overviewEl: $('#cape-fear p'),

    getFilmDetails: function(){
      $.get(TMDB.URL + '/movie/' + this.ID + '?api_key=' + TMDB.API, this.loadDetails);
    },

    loadDetails: function(data){
      cape.data = data;
      cape.posterPath = data.poster_path;
      cape.title = data.title;
      cape.overview = data.overview;

      cape.posterEl.attr('src', TMDB.baseURL + TMDB.size + cape.posterPath);
      cape.titleEl.text(cape.title);
      cape.overviewEl.text(cape.overview);
    },
  };

  var goodfellas = {
    ID: '769',
    data: '',
    posterPath: '',
    posterEl: $('#goodfellas img'),
    title: '',
    titleEl: $('#goodfellas h1'),
    overview: '',
    overviewEl: $('#goodfellas p'),

    getFilmDetails: function(){
      $.get(TMDB.URL + '/movie/' + this.ID + '?api_key=' + TMDB.API, this.loadDetails);
    },

    loadDetails: function(data){
      goodfellas.data = data;
      goodfellas.posterPath = data.poster_path;
      goodfellas.title = data.title;
      goodfellas.overview = data.overview;

      goodfellas.posterEl.attr('src', TMDB.baseURL + TMDB.size + goodfellas.posterPath);
      goodfellas.titleEl.text(goodfellas.title);
      goodfellas.overviewEl.text(goodfellas.overview);
    },
  };

  var app = {
    init: function(){
      TMDB.getConfig();
      for (var i = 0; i < films.filmIDs.length; i++) {
        console.log(films.filmIDs[i]);
        app.getFilmDetails(films.filmIDs[i]);
      };


      wows.getFilmDetails();
      hugo.getFilmDetails();
      shutter.getFilmDetails();
      departed.getFilmDetails();
      aviator.getFilmDetails();
      gangs.getFilmDetails();
      casino.getFilmDetails();
      cape.getFilmDetails();
      goodfellas.getFilmDetails();
    },

    // getFilmDetails: function(id){
    //   $.get(TMDB.URL + '/movie/' + id + '?api_key=' + TMDB.API, function(data){
    //     console.log(data.title);
    //   });

  };

  // $.adaptiveBackground.run({
  //   normalizeTextColor: true,
  // });
  app.init();
  window.app = app;
  window.TMDB = TMDB;
  window.wows = wows;

});
