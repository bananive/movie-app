const movies = [
    {
       "adult":false,
       "backdrop_path":"/rjccRKWUPKWHKIJ76rWLRIpeSdZ.jpg",
       "genre_ids":[
          18,
          10749
       ],
       "id":191714,
       "original_language":"hi",
       "original_title":"The Lunchbox",
       "overview":"A mistaken delivery in Mumbai's famously efficient lunchbox delivery system (Mumbai's Dabbawallahs) connects a young housewife to a stranger in the dusk of his life. They build a fantasy world together through notes in the lunchbox. Gradually, this fantasy threatens to overwhelm their reality.",
       "popularity":7.742,
       "poster_path":"/jSOiz1h97i3qwjZJXY8SeLvjPsl.jpg",
       "release_date":"2013-09-20",
       "title":"The Lunchbox",
       "video":false,
       "vote_average":7.3,
       "vote_count":509
    },
    {
       "adult":false,
       "backdrop_path":"/w07bsFp3gwbl0CK7XVZRAC6ZTW8.jpg",
       "genre_ids":[
          28,
          878
       ],
       "id":3107,
       "original_language":"ja",
       "original_title":"怪獣総進撃",
       "overview":"At the turn of the century, all of the Earth's monsters have been rounded up and kept safely on Monsterland. Chaos erupts when a race of she-aliens known as the Kilaaks unleash the monsters across the world.",
       "popularity":8.438,
      //  "poster_path":"/24r1hsRisfUidwLF67J0iMuWh7p.jpg",
       "poster_path":"",
       "release_date":"1968-08-01",
       "title":"Destroy All Monsters",
       "video":false,
       "vote_average":6.8,
       "vote_count":155
    },
    {
       "adult":false,
       "backdrop_path":"/3gbOR4AV5znoDhOuawFdu8gwLvO.jpg",
       "genre_ids":[
          18
       ],
       "id":291351,
       "original_language":"en",
       "original_title":"The Sea of Trees",
       "overview":"A suicidal American befriends a Japanese man lost in a forest near Mt. Fuji and the two search for a way out.",
       "popularity":7.244,
       "poster_path":"/wJjUrR2VvX6dNifngg4qCJAYYvX.jpg",
       "release_date":"2016-04-27",
       "title":"The Sea of Trees",
       "video":false,
       "vote_average":6.3,
       "vote_count":391
    },
    {
       "adult":false,
       "backdrop_path":"/adLyEt4sbwDM73NX2ZzXkoaYwGm.jpg",
       "genre_ids":[
          28,
          27,
          878,
          53
       ],
       "id":46368,
       "original_language":"en",
       "original_title":"The Rig",
       "overview":"In the midst of a tropical storm, the crew of an offshore oil rig must survive the rampage of a creature after invading its undersea habitat.",
       "popularity":6.68,
       "poster_path":"",
       "release_date":"2010-10-05",
       "title":"The Rig",
       "video":false,
       "vote_average":3.5,
       "vote_count":48
    },
    {
       "adult":false,
       "backdrop_path":"/kXpx1dEnmyMpnDTg04a7kmetIod.jpg",
       "genre_ids":[
          27,
          28
       ],
       "id":290555,
       "original_language":"en",
       "original_title":"Wolves",
       "overview":"The coming-of-age story of Cayden Richards. Forced to hit the road after the murder of his parents, Cayden wanders lost without purpose... Until he meets a certifiable lunatic named Wild Joe who sets him on a path to the ominous town of Lupine Ridge to hunt down the truths of his history. But in the end| who's really hunting whom?",
       "popularity":10.242,
       "poster_path":"/zY6ObzQfCp6RO4ONqP4snfVVSdH.jpg",
       "release_date":"2014-08-28",
       "title":"Wolves",
       "video":false,
       "vote_average":5.9,
       "vote_count":212
    },
    {
       "adult":false,
       "backdrop_path":"/rAx0aCQ6luULuUb8tW6CD1365Mh.jpg",
       "genre_ids":[
          35,
          80
       ],
       "id":4551,
       "original_language":"en",
       "original_title":"Be Cool",
       "overview":"Disenchanted with the movie industry, Chili Palmer tries the music industry, meeting and romancing a widow of a music executive along the way.",
       "popularity":10.988,
       "poster_path":"/ekKCH7Zkb5ZTr1f1AczZY23FH.jpg",
       "release_date":"2005-03-04",
       "title":"Be Cool",
       "video":false,
       "vote_average":5.4,
       "vote_count":676
    },
    {
       "adult":false,
       "backdrop_path":"/1peNRGUNhU6CoLelzuDkwdJwdZa.jpg",
       "genre_ids":[
          35,
          10751
       ],
       "id":593660,
       "original_language":"it",
       "original_title":"Mio fratello rincorre i dinosauri",
       "overview":"As a child, Jack believed the tender lie his parents told him, that Gio was a special being with superpowers, as in a comic book. Now that he is about to go to high school, however, Jack no longer believes that his brother is a superhero, in fact, he is almost ashamed of him, especially since he met Arianna, the first love of his life.",
       "popularity":9.759,
       "poster_path":"/jWdaKaodaBxYEIv31xJ5J7pf8rn.jpg",
       "release_date":"2019-09-05",
       "title":"My Brother Chases Dinosaurs",
       "video":false,
       "vote_average":7,
       "vote_count":199
    },
    {
       "adult":false,
       "backdrop_path":"/pKX8G6IN8ZCRvKeHh6ctqoHZl0K.jpg",
       "genre_ids":[
          35
       ],
       "id":10227,
       "original_language":"fr",
       "original_title":"PlayTime",
       "overview":"Clumsy Monsieur Hulot finds himself perplexed by the intimidating complexity of a gadget-filled Paris. He attempts to meet with a business contact but soon becomes lost. His roundabout journey parallels that of an American tourist, and as they weave through the inventive urban environment, they intermittently meet, developing an interest in one another. They eventually get together at a chaotic restaurant, along with several other quirky characters.",
       "popularity":8.487,
       "poster_path":"/wE4iXk3aMGfvhfA6WI6et73wbTY.jpg",
       "release_date":"1967-12-16",
       "title":"PlayTime",
       "video":false,
       "vote_average":7.8,
       "vote_count":347
    },
    {
       "adult":false,
       "backdrop_path":"/53dMoCCdlUnU1ldPDpLr5fheZbG.jpg",
       "genre_ids":[
          35
       ],
       "id":10118,
       "original_language":"en",
       "original_title":"Material Girls",
       "overview":"Two wealthy sisters, both heiresses to their family's cosmetics fortune, are given a wake-up call when a scandal and ensuing investigation strip them of their wealth.",
       "popularity":8.488,
       "poster_path":"/tJaTKE5kP0BQCR2hkltnr8aEpnu.jpg",
       "release_date":"2006-08-18",
       "title":"Material Girls",
       "video":false,
       "vote_average":5.3,
       "vote_count":376
    },
    {
       "adult":false,
       "backdrop_path":null,
       "genre_ids":[
          878
       ],
       "id":150061,
       "original_language":"en",
       "original_title":"Prometheus Trap",
       "overview":"In the future, mankind's quest for answers will take them to the edge of the universe... but the knowledge they seek should never be known. In deep space, the military cruiser Venom is diverted from its mission to investigate a derelict freighter ship, the Prometheus. On board, all of the crew are dead - victims of sabotage - and its only cargo is a weapon that will change the course of time and their destiny.",
       "popularity":8.17,
       "poster_path":"/4RARhXYiwEmXWriWbvH0w32nsDO.jpg",
       "release_date":"2012-01-01",
       "title":"Prometheus Trap",
       "video":false,
       "vote_average":3.6,
       "vote_count":6
    },
    {
       "adult":false,
       "backdrop_path":"/yWpbG6BT0IdwBnGHpCUicKTDGOm.jpg",
       "genre_ids":[
          35,
          10749
       ],
       "id":3078,
       "original_language":"en",
       "original_title":"It Happened One Night",
       "overview":"A renegade reporter and a crazy young heiress meet on a bus heading for New York, and end up stuck with each other when the bus leaves them behind at one of the stops.",
       "popularity":9.487,
       "poster_path":"/wx4ptyx3vlPBVl5DzBA8KomcJww.jpg",
       "release_date":"1934-02-22",
       "title":"It Happened One Night",
       "video":false,
       "vote_average":7.9,
       "vote_count":826
    },
    {
       "adult":false,
       "backdrop_path":"/hQugaB1DFdlazQNZYDTLPOGBn4v.jpg",
       "genre_ids":[
          35,
          80
       ],
       "id":2144,
       "original_language":"en",
       "original_title":"One Night at McCool's",
       "overview":"Every man has a different recollection of the beautiful young woman who wreaked havoc on their lives during one heated night.",
       "popularity":7.487,
       "poster_path":"/uGx1MdP4m4nurfB0HAwahaHMIU3.jpg",
       "release_date":"2001-04-19",
       "title":"One Night at McCool's",
       "video":false,
       "vote_average":5.8,
       "vote_count":238
    },
    {
       "adult":false,
       "backdrop_path":"/oas0DvvhhaMncvn805LjepxeoZh.jpg",
       "genre_ids":[
          35,
          80
       ],
       "id":9535,
       "original_language":"en",
       "original_title":"Analyze This",
       "overview":"Countless wiseguy films are spoofed in this film that centers on the neuroses and angst of a powerful Mafia racketeer who suffers from panic attacks. When Paul Vitti needs help dealing with his role in the \"family,\" unlucky shrink Dr. Ben Sobel is given just days to resolve Vitti's emotional crisis and turn him into a happy, well-adjusted gangster.",
       "popularity":10.737,
       "poster_path":"/eqa4TEgkx63WRhqyD8eTwmL7bUi.jpg",
       "release_date":"1999-03-05",
       "title":"Analyze This",
       "video":false,
       "vote_average":6.5,
       "vote_count":1350
    },
    {
       "adult":false,
       "backdrop_path":null,
       "genre_ids":[
          16
       ],
       "id":697883,
       "original_language":"ja",
       "original_title":"Pokémon Fushigi no Dungeon Toki no Tankentai · Yami no Tankentai",
       "overview":"",
       "popularity":10.167,
       "poster_path":"/eMhX4Nmf0wzxFCuvMdbgzyvDnCb.jpg",
       "release_date":"2007-09-09",
       "title":"Pokémon Mystery Dungeon Explorers of Time & Darkness",
       "video":false,
       "vote_average":6.7,
       "vote_count":6
    },
    {
       "adult":false,
       "backdrop_path":"/sA2pcOD40pMfa7HxZk0kKGlGM9B.jpg",
       "genre_ids":[
          18
       ],
       "id":477887,
       "original_language":"en",
       "original_title":"The White Crow",
       "overview":"The story of Rudolf Nureyev, whose escape to the West stunned the world at the height of the Cold War. With his magnetic presence, Nureyev emerged as ballet’s most famous star, a wild and beautiful dancer limited by the world of 1950s Leningrad. His flirtation with Western artists and ideas led him into a high-stakes game of cat and mouse with the KGB.",
       "popularity":9,
       "poster_path":"/uQBlGMzWPQh2sYnMHMneziZ4GCL.jpg",
       "release_date":"2018-08-31",
       "title":"The White Crow",
       "video":false,
       "vote_average":6.6,
       "vote_count":160
    },
    {
       "adult":false,
       "backdrop_path":"/cdDwJcE2fH9wEiuswJ0GkPR6hIG.jpg",
       "genre_ids":[
          53,
          27,
          878
       ],
       "id":355193,
       "original_language":"en",
       "original_title":"Devil's Gate",
       "overview":"Set in the small town of Devil's Gate, North Dakota, the film examines the disappearance of a local woman and her young son. Schull plays an FBI agent who helps the local sheriff search for answers. Partnering with a deputy , they track down the missing woman's husband and find that nothing is as it seems.",
       "popularity":9.245,
       "poster_path":"/qlguwriLf7PkG6jAzpnClkZKmHi.jpg",
       "release_date":"2017-04-24",
       "title":"Devil's Gate",
       "video":false,
       "vote_average":5.1,
       "vote_count":169
    },
    {
       "adult":false,
       "backdrop_path":"/xaQhFVDeWf78FzZw214yU42w0YZ.jpg",
       "genre_ids":[
          878
       ],
       "id":61984,
       "original_language":"ja",
       "original_title":"SPACE BATTLESHIP ヤマト",
       "overview":"In 2199, five years after the Gamilons began an invasion of Earth, the planet has been ravaged by the aliens' bombs. The remnants of humanity have fled underground to escape the irradiated surface. One day, former pilot Susumu Kodai discovers a capsule sent from the planet Iscandar that tells of a device that can remove the radiation from the Earth's surface. The Earth Defense Force rebuilds the battleship Yamato with a new type of propulsion system to make the 148,000 light year trip to Iscandar in hopes of saving the Earth. Within one year, the radiation will drive the rest of humanity to extinction.",
       "popularity":6.738,
       "poster_path":"/rcpMcrJ2NE2g3aGzBFfpkAEOjhP.jpg",
       "release_date":"2010-12-01",
       "title":"Space Battleship Yamato",
       "video":false,
       "vote_average":6.2,
       "vote_count":151
    },
    {
       "adult":false,
       "backdrop_path":"/lO4tCnwIVYSX3ShqlbaHhFcthOe.jpg",
       "genre_ids":[
          35,
          80,
          10402
       ],
       "id":13595,
       "original_language":"en",
       "original_title":"Airheads",
       "overview":"The Lone Rangers have heavy-metal dreams and a single demo tape they can't get anyone to play. The solution: Hijack an AM rock station and hold the deejays hostage until they agree to broadcast the band's tape.",
       "popularity":9.685,
       "poster_path":"/caztkbLTC3GHkVljVsPHiTVh9Pl.jpg",
       "release_date":"1994-08-05",
       "title":"Airheads",
       "video":false,
       "vote_average":6,
       "vote_count":507
    },
    {
       "adult":false,
       "backdrop_path":"/oBl3ygxi9EM5XKAxE09AEu1t3uR.jpg",
       "genre_ids":[
          28,
          12,
          16,
          35,
          10751
       ],
       "id":382512,
       "original_language":"en",
       "original_title":"LEGO DC Comics Super Heroes: Justice League: Cosmic Clash",
       "overview":"Earth, a shiny jewel floating in the blackness of space... and for the robot known as Brainiac, the last piece to capture for his collection of planets. Not if the Justice League has anything to say about it!",
       "popularity":9.613,
       "poster_path":"/sC9FzfJhFRPVeHCEZjf84vOguc.jpg",
       "release_date":"2016-02-16",
       "title":"LEGO DC Comics Super Heroes: Justice League: Cosmic Clash",
       "video":false,
       "vote_average":6.2,
       "vote_count":89
    },
    {
       "adult":false,
       "backdrop_path":"/nSk9gTtAUaV5Hr2sc22gZwvDbCk.jpg",
       "genre_ids":[
          35
       ],
       "id":12778,
       "original_language":"en",
       "original_title":"Greedy",
       "overview":"Meet the McTeagues. They've come to stake a claim in their wealthy uncle's will… only he's not dead yet!",
       "popularity":6.735,
       "poster_path":"/pj3UCLosqo45geXLGZhmH8GRFAw.jpg",
       "release_date":"1994-03-04",
       "title":"Greedy",
       "video":false,
       "vote_average":6.2,
       "vote_count":184
    }
 ];

export default movies;