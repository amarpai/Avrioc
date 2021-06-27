module.exports = {
  async up(db, client) {
    await db.collection('films').insertMany([
      {
        name: 'The Smallfoot (1994)',
        description:
          'Smallfoot is a 2018 American computer-animated musical comedy film produced by the Warner Animation Group and distributed by Warner Bros.',
        release_date: '2nd July 2019',
        rating: 3,
        ticket_price: 200,
        country: 'Paris',
        genre: ['kids', 'Animation', 'romantic'],
        photo:
          'https://www.philasun.com/wp-content/uploads/2018/10/smallfoot-poster.jpg',
        comments: [
          {
            name: 'Amar',
            comment: 'This is a good Movie to watch',
          },
        ],
      },
      {
        name: 'Forrest Gump (1994)',
        description:
          'Forrest Gump (1994) ... The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective',
        release_date: '23 June 1994',
        rating: 2,
        ticket_price: 50,
        country: 'USA',
        genre: ['Drama', 'Romance'],
        photo: 'https://i.ytimg.com/vi/hf_lCA-T99c/movieposter_en.jpg',
        comments: [
          {
            name: 'Amar',
            comment:
              'slow begining and grumpy ending but overall good storyline',
          },
        ],
      },
      {
        name: 'The Godfather (1972) ',
        description:
          'The Godfather is a 1972 American crime film directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo, based on Puzo best selling',
        release_date: '14 March 1972',
        rating: 4,
        ticket_price: 150,
        country: 'USA',
        genre: ['crime', 'Drama'],
        photo:
          'https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg',
        comments: [
          {
            name: 'Hussain',
            comment: 'Not living upto it expectations',
          },
        ],
      },
    ]);
  },

  async down(db, client) {
    await db.collection('films').remove({});
  },
};
