new Vue({

    el: '.container',

    data: {

      gender: 'female',

      name: 'Вселенная',

      stories: [
		'Сегодня я разбил машину!',
		'Вчера кто-то украл мою сумку!',
		'Кто-то съел мой шоколад...',
		],
	stories2: [
		{
			plot: 'Сегодня я разбил машину!',
			writer: 'Алекс'},
		{
			plot: 'Вчера кто-то украл мою сумку!',
			writer: 'Джон'},
		{
			plot: 'Кто-то съел мой шоколад...',
			writer: 'Джон'},
		{
			plot: 'Я съел чей-то шоколад!',
			writer: 'Алекс'},
		],
	story: {

      plot: 'Кто-то съел мой шоколад...',

      writer: 'Джон',

      upvotes: 47

    },
   myParametrs: {

     name: 'Misha',

     Height: '179',

     weigh: "65 kg.",

     eyeColor: "grey",

     favoriteFood: "Piizza"

    },

    upvotes: 0


    },

  });




