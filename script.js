let movies = [
  {
    id:  1,
    name: "Bad Grandmas",
    tags: ["Comedy", "Crime"],
    rating: "TV-14",
    url: "https://tubitv.com/movies/516144/bad-grandmas",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Bad_Grandmas_movie_poster.jpg/220px-Bad_Grandmas_movie_poster.jpg",
  },
  {
    id:  2,
    name: "Cheech and Chong's Next Movie",
    tags: ["Comedy"],
    rating: "R",
    url: "https://tubitv.com/movies/469619/cheech-and-chong-s-next-movie",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSC7AThEsoaBTOb_ZhZXQWcXMSreTzwYqYXzvu3fmD_IbpBOK",
  },
  {
    id:  3,
    name: "Hot Tub Time Machine",
    tags: ["Comedy", "Sci-Fi", "Adventure"],
    rating: "R",
    url: "https://tubitv.com/movies/639802/hot-tub-time-machine",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTU3NzQzMzE0NV5BMl5BanBnXkFtZTgwMDM4MTI0NDE@._V1_.jpg",
  },
  {
    id:  4,
    name: "Miss Congeniality 2 : Armed and Fabulous",
    tags: ["Comedy", "Action", "Crime"],
    rating: "PG-13",
    url: "https://tubitv.com/movies/639796/miss-congeniality-2-armed-and-fabulous?start=true",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Miss_Congeniality_2.jpg",
  },
  {
    id:  5,
    name: "Tyler Perry's Madea's Tough Love",
    tags: ["Comedy", "Animation"],
    rating: "PG",
    url: "https://tubitv.com/movies/555948/tyler-perry-s-madea-s-tough-love",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/Madea%27s_Tough_Love.jpg",
  },
  {
    id:  6,
    name: "Teen Wolf",
    tags: ["Comedy", "Fantasy"],
    rating: "PG",
    url: "https://tubitv.com/movies/348455/teen-wolf",
    image: "https://flxt.tmsimg.com/assets/p8629851_b_v8_af.jpg",
  },
  {
    id:  7,
    name: "Crazy on the Outside",
    tags: ["Comedy"],
    rating: "PG-13",
    url: "https://tubitv.com/movies/615162/crazy-on-the-outside",
    image: "https://m.media-amazon.com/images/I/81ol6RStwjL._SY445_.jpg",
  },
  {
    id:  8,
    name: "Grumpy Old Men",
    tags: ["Comedy", "Drama"],
    rating: "PG-13",
    url: "https://tubitv.com/movies/591621/grumpy-old-men",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjQxM2YyNjMtZjUxYy00OGYyLTg0MmQtNGE2YzNjYmUyZTY1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  },
  {
    id:  9,
    name: "The Sitter",
    tags: ["Comedy"],
    rating: "R",
    url: "https://tubitv.com/movies/608519/the-sitter",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/8f/The_Sitter_Poster.jpg",
  },
  {
    id:  10,
    name: "Just Getting Started",
    tags: ["Comedy", "Action"],
    rating: "PG-13",
    url: "https://tubitv.com/movies/563205/just-getting-started",
    image: "https://i.ytimg.com/vi/_Nv1S7lrWU8/movieposter.jpg",
  },
  {
    id:  11,
    name: "Leprechaun",
    tags: ["Comedy", "Horror", "Fantasy"],
    rating: "R",
    url: "https://tubitv.com/movies/343310/leprechaun",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTVhY2JhNzgtYzQxZS00YmEzLTk3ODQtZjlkYzVkN2E5MGU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id:  12,
    name: "Leprechaun 2",
    tags: ["Comedy", "Horror", "Fantasy"],
    rating: "R",
    url: "https://tubitv.com/movies/343312/leprechaun-ii",
    image:
      "https://pm1.narvii.com/6288/6db369e846df1c9761d3985c0812f9073134cb81_hq.jpg",
  },
  {
    id:  13,
    name: "Bad Ass : Bad Asses 2",
    tags: ["Action", "Crime", "Comedy"],
    rating: "R",
    url: "https://tubitv.com/movies/457715/bad-ass-2-bad-asses",
    image:
      "https://images-us-az.crackle.com/profiles/channels/3301/OneSheetImage_350x525.jpg?ts=20170622151002",
  },
  {
    id:  14,
    name: "Fred 2: Night of the Living Fred",
    tags: ["Kids & Family", "Comedy"],
    rating: "TV-PG",
    url: "https://tubitv.com/movies/321860/fred-2-night-of-the-living-fred",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Fred_2-_Night_of_the_Living_Fred_FilmPoster.jpeg/220px-Fred_2-_Night_of_the_Living_Fred_FilmPoster.jpeg",
  },
  {
    id:  15,
    name: "Trailer Park Boys",
    tags: ["Comedy", "Adventure"],
    rating: "R",
    url: "https://tubitv.com/movies/486616/trailer-park-boys",
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/65/Trailer_Park_Boys_-_The_Movie_%282006%29_theatrical_poster.jpg",
  },
  {
    id:  16,
    name: "Who's your Daddy?",
    tags: ["Comedy"],
    rating: "R",
    url: "https://tubitv.com/movies/486462/who-s-your-daddy",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTI4YTYxM2EtMTU4YS00N2QzLTk0MDYtNmMwNWE3OGNiOTdkXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg",
  },
  {
    id:  17,
    name: "Spun (Unrated)",
    tags: ["Crime", "Comedy"],
    rating: "R",
    url: "https://tubitv.com/movies/460473/spun-unrated",
    image: "https://m.media-amazon.com/images/I/91xCt18Q47L._SY445_.jpg",
  },
  {
    id:  18,
    name: "Stan Helsing",
    tags: ["Comedy", "Horror"],
    rating: "R",
    url: "https://tubitv.com/movies/356373/stan-helsing",
    image:
      "https://static.wikia.nocookie.net/listofdeaths/images/6/64/Stan_Helsing_poster.jpg",
  },
  {
    id:  19,
    name: "Act Naturally",
    tags: ["Comedy"],
    rating: "TV-MA",
    url: "https://tubitv.com/movies/550794/act-naturally",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81TGxujuqCL._RI_.jpg",
  },
  {
    id:  20,
    name: "Tad: The Lost Explorer",
    tags: ["Animation", "Kids & Family", "Comedy"],
    rating: "TV-PG",
    url: "https://tubitv.com/movies/398630/tad-the-lost-explorer",
    image: "https://m.media-amazon.com/images/I/81IDAN5tKoL._SL1500_.jpg",
  },
  {
    id: 21,
    name : "Sheldon and the Alien Toes : Part 2",
    tags: ['Comedy'],
    rating : 'R',
    url: '#',
    image: 'https://i.postimg.cc/JnmvxqfX/image.png'
  }
];

function signupSubmit() {
 let first = document.querySelector('#firstName');
 let last = document.querySelector('#lastName');
 let date = document.querySelector('#movieNight');
 let confirmation = document.querySelector('#confirmation');
 let secretCode = document.querySelector('#other');
 if(!first.value) return alert('No first name');
 if(!last.value) return alert('No last name');
 if(!date.value) return alert('Didn\'t pick a movie date')
 
 var request = new XMLHttpRequest();
 request.open("POST", "https://discord.com/api/webhooks/937188645163655239/9ec2mLpyt5iSmHRyPqDsGmxGeR6TtCNKK99ztB4cJcKGp6_XvycQ2RTF8YmFq-fl_4ug");

 request.setRequestHeader('Content-type', 'application/json');

 var params = {
   username: "Movie Night 🍿",
   avatar_url: "https://thumbs.dreamstime.com/b/big-open-clapper-board-movie-reel-cinema-icon-set-movie-film-elements-flat-design-cinema-movie-time-flat-icons-f-95500226.jpg",
   content: `New Participant for ${date.value} movie night.\n\nName: ${first.value} ${last.value}, Member of Zucchini Group(s): ${confirmation.value}, secret movie night code ${secretCode.value ? secretCode.value : 'No Movie Code Provided.'}`
 }

 request.send(JSON.stringify(params));
 first.value = '';
 last.value = '';
 suggest.value = '';
 alert('Submission sent, see you Tuesday!')

}

function submitSuggestion() {
  let movieName = document.querySelector('#movieName');
  let tubi = document.querySelector('#question1');
  let name = document.querySelector('#name');

  if(!movieName.value) return alert('No movie name provided');
  if(!name.value) return alert('Did not provide your name');

  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/937188645163655239/9ec2mLpyt5iSmHRyPqDsGmxGeR6TtCNKK99ztB4cJcKGp6_XvycQ2RTF8YmFq-fl_4ug");
 
  request.setRequestHeader('Content-type', 'application/json');
 
  var params = {
    username: "Movie Night 🍿",
    avatar_url: "https://thumbs.dreamstime.com/b/big-open-clapper-board-movie-reel-cinema-icon-set-movie-film-elements-flat-design-cinema-movie-time-flat-icons-f-95500226.jpg",
    content: `Movie Suggestion by ${name.value}, Movie Title: ${movieName.value}, Is this on Tubi? ${tubi.value}.`
  }
 
  request.send(JSON.stringify(params));
  movieName.value = '';
  tubi.value = '';
  name.value = '';
  alert('Submission sent, see you Tuesday!') 
}
