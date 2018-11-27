const TABLE_NAME = 'comics'

exports.seed = knex => {
  return knex(TABLE_NAME).insert([
    {
      id: 1,
      title: 'Avengers #1',
      url: 'http://www.coverbrowser.com/image/avengers/1-1.jpg',
      rating: 5,
      review: 'Epic adventures that you can\'t imagine >.>. You gotta read it to believe it!'
    },
    {
      id: 2,
      title: 'The Sandman Vol. 3: Dream Country by Neil Gaiman',
      url: 'http://www.coverbrowser.com/image/bestselling-comics-2006/81-1.jpg',
      rating: 5,
      review: 'Spicy jalapeno bacon ipsum dolor amet capicola picanha filet mignon t-bone meatloaf. Flank turducken pork chop, jowl pork belly bacon beef shoulder t-bone sausage tail chicken meatloaf short loin. Sausage shoulder pork, kielbasa swine spare ribs turducken short ribs porchetta andouille pork belly drumstick hamburger ribeye. Porchetta short loin short ribs, prosciutto doner jowl bresaola shank turducken venison tail kevin ball tip buffalo cupim. Jerky porchetta sausage andouille, turkey fatback shankle. Ham hock drumstick pork belly, meatball short ribs beef ribs ground round bacon andouille porchetta pig.'
    },
    {
      id: 3,
      title: 'Uncanny X-Men #1',
      url: 'http://www.coverbrowser.com/image/uncanny-x-men/1-3.jpg',
      rating: 3,
      review: 'Spare ribs strip steak turkey meatball doner, pork belly shankle pastrami sausage porchetta pancetta bacon turducken. Drumstick salami rump, tongue venison capicola short loin buffalo beef ribs. Jerky ball tip kielbasa biltong tenderloin kevin flank porchetta chuck fatback pork sirloin beef ribs bacon. Alcatra capicola filet mignon tongue cow. Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!'
    },
    {
      id: 4,
      title: 'Judge Dredd - 2000 AD #1',
      url: 'http://www.coverbrowser.com/image/judge-dredd-2000-ad/1-1.jpg',
      rating: 4,
      review: 'Leberkas jowl prosciutto pork loin. Pig meatloaf porchetta cow strip steak shoulder ground round short loin tail spare ribs sausage doner pancetta. Salami leberkas pork, pancetta shoulder beef ribs brisket boudin filet mignon. Corned beef shank jowl t-bone, strip steak cow short loin pork chop biltong meatloaf short ribs turducken.'
    },
    {
      id: 5,
      title: 'Green Lantern (1960) #1',
      url: 'http://www.coverbrowser.com/image/green-lantern-1960/1-1.jpg',
      rating: 1,
      review: 'Spicy jalapeno bacon ipsum dolor amet capicola picanha filet mignon t-bone meatloaf. Flank turducken pork chop, jowl pork belly bacon beef shoulder t-bone sausage tail chicken meatloaf short loin. Sausage shoulder pork, kielbasa swine spare ribs turducken short ribs porchetta andouille pork belly drumstick hamburger ribeye. Porchetta short loin short ribs, prosciutto doner jowl bresaola shank turducken venison tail kevin ball tip buffalo cupim. Jerky porchetta sausage andouille, turkey fatback shankle. Ham hock drumstick pork belly, meatball short ribs beef ribs ground round bacon andouille porchetta pig.'
    },
    {
      id: 6,
      title: 'Thor #1',
      url: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1532054.jpg',
      rating: 5,
      review: 'HOT! Spicy jalapeno bacon ipsum dolor amet capicola picanha filet mignon t-bone meatloaf. Flank turducken pork chop, jowl pork belly bacon beef shoulder t-bone sausage tail chicken meatloaf short loin. Sausage shoulder pork, kielbasa swine spare ribs turducken short ribs porchetta andouille pork belly drumstick hamburger ribeye. Porchetta short loin short ribs, prosciutto doner jowl bresaola shank turducken venison tail kevin ball tip buffalo cupim. Jerky porchetta sausage andouille, turkey fatback shankle. Ham hock drumstick pork belly, meatball short ribs beef ribs ground round bacon andouille porchetta pig.'
    },
    {
      id: 7,
      title: 'Sailor Moon #2',
      url: 'http://www.coverbrowser.com/image/sailor-moon/2-1.jpg',
      rating: 5,
      review: 'Leberkas jowl prosciutto pork loin. Pig meatloaf porchetta cow strip steak shoulder ground round short loin tail spare ribs sausage doner pancetta. Salami leberkas pork, pancetta shoulder beef ribs brisket boudin filet mignon. Corned beef shank jowl t-bone, strip steak cow short loin pork chop biltong meatloaf short ribs turducken.'
    },
    {
      id: 8,
      title: 'Spectacular Spider-Man #4',
      url: 'http://www.coverbrowser.com/image/spectacular-spider-man-1976/4-1.jpg',
      rating: 5,
      review: 'Spicy jalapeno bacon ipsum dolor amet capicola picanha filet mignon t-bone meatloaf. Flank turducken pork chop, jowl pork belly bacon beef shoulder t-bone sausage tail chicken meatloaf short loin. Sausage shoulder pork, kielbasa swine spare ribs turducken short ribs porchetta andouille pork belly drumstick hamburger ribeye. Porchetta short loin short ribs, prosciutto doner jowl bresaola shank turducken venison tail kevin ball tip buffalo cupim. Jerky porchetta sausage andouille, turkey fatback shankle. Ham hock drumstick pork belly, meatball short ribs beef ribs ground round bacon andouille porchetta pig.'
    },
    {
      id: 9,
      title: 'Archie\'s Girls - Betty and Veronice #6',
      url: 'http://www.coverbrowser.com/image/archies-girls-betty-and-veronica/6-1.jpg',
      rating: 5,
      review: 'Leberkas jowl prosciutto pork loin. Pig meatloaf porchetta cow strip steak shoulder ground round short loin tail spare ribs sausage doner pancetta. Salami leberkas pork, pancetta shoulder beef ribs brisket boudin filet mignon. Corned beef shank jowl t-bone, strip steak cow short loin pork chop biltong meatloaf short ribs turducken.'
    }
  ])
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
