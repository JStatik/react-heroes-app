const heroes = {
    ids: [
        'dc-batman',
        'dc-superman',
        'dc-flash',
        'dc-green',
        'dc-arrow',
        'dc-wonder',
        'dc-martian',
        'dc-robin',
        'dc-blue',
        'dc-black',
        'marvel-spider',
        'marvel-captain',
        'marvel-iron',
        'marvel-thor',
        'marvel-hulk',
        'marvel-wolverine',
        'marvel-daredevil',
        'marvel-hawkeye',
        'marvel-cyclops',
        'marvel-silver'
    ],
    entities: {
        'dc-batman': {
            id: 'dc-batman',
            superhero: 'Batman',
            publisher: 'DC Comics',
            alter_ego: 'Bruce Wayne',
            first_appearance: 'Detective Comics #27',
            characters: 'Bruce Wayne',
            image: '/dc-batman.jpg'
        },
        'dc-superman': {
            id: 'dc-superman',
            superhero: 'Superman',
            publisher: 'DC Comics',
            alter_ego: 'Kal-El',
            first_appearance: 'Action Comics #1',
            characters: 'Kal-El',
            image: '/dc-superman.jpg'
        },
        'dc-flash': {
            id: 'dc-flash',
            superhero: 'Flash',
            publisher: 'DC Comics',
            alter_ego: 'Jay Garrick',
            first_appearance: 'Flash Comics #1',
            characters: 'Jay Garrick, Barry Allen, Wally West, Bart Allen',
            image: '/dc-flash.jpg'
        },
        'dc-green': {
            id: 'dc-green',
            superhero: 'Green Lantern',
            publisher: 'DC Comics',
            alter_ego: 'Alan Scott',
            first_appearance: 'All-American Comics #16',
            characters: 'Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz',
            image: '/dc-green.jpg'
        },
        'dc-arrow': {
            id: 'dc-arrow',
            superhero: 'Green Arrow',
            publisher: 'DC Comics',
            alter_ego: 'Oliver Queen',
            first_appearance: 'More Fun Comics #73',
            characters: 'Oliver Queen',
            image: '/dc-arrow.jpg'
        },
        'dc-wonder': {
            id: 'dc-wonder',
            superhero: 'Wonder Woman',
            publisher: 'DC Comics',
            alter_ego: 'Princess Diana',
            first_appearance: 'All Star Comics #8',
            characters: 'Princess Diana',
            image: '/dc-wonder.jpg'
        },
        'dc-martian': {
            id: 'dc-martian',
            superhero: 'Martian Manhunter',
            publisher: 'DC Comics',
            alter_ego: 'J\'onn J\'onzz',
            first_appearance: 'Detective Comics #225',
            characters: 'Martian Manhunter',
            image: '/dc-martian.jpg'
        },
        'dc-robin': {
            id: 'dc-robin',
            superhero: 'Robin/Nightwing',
            publisher: 'DC Comics',
            alter_ego: 'Dick Grayson',
            first_appearance: 'Detective Comics #38',
            characters: 'Dick Grayson',
            image: '/dc-robin.jpg'
        },
        'dc-blue': {
            id: 'dc-blue',
            superhero: 'Blue Beetle',
            publisher: 'DC Comics',
            alter_ego: 'Dan Garret',
            first_appearance: 'Mystery Men Comics #1',
            characters: 'Dan Garret, Ted Kord, Jaime Reyes',
            image: '/dc-blue.jpg'
        },
        'dc-black': {
            id: 'dc-black',
            superhero: 'Black Canary',
            publisher: 'DC Comics',
            alter_ego: 'Dinah Drake',
            first_appearance: 'Flash Comics #86',
            characters: 'Dinah Drake, Dinah Lance',
            image: '/dc-black.jpg'
        },
        'marvel-spider': {
            id: 'marvel-spider',
            superhero: 'Spider Man',
            publisher: 'Marvel Comics',
            alter_ego: 'Peter Parker',
            first_appearance: 'Amazing Fantasy #15',
            characters: 'Peter Parker',
            image: '/marvel-spider.jpg'
        },
        'marvel-captain': {
            id: 'marvel-captain',
            superhero: 'Captain America',
            publisher: 'Marvel Comics',
            alter_ego: 'Steve Rogers',
            first_appearance: 'Captain America Comics #1',
            characters: 'Steve Rogers',
            image: '/marvel-captain.jpg'
        },
        'marvel-iron': {
            id: 'marvel-iron',
            superhero: 'Iron Man',
            publisher: 'Marvel Comics',
            alter_ego: 'Tony Stark',
            first_appearance: 'Tales of Suspense #39',
            characters: 'Tony Stark',
            image: '/marvel-iron.jpg'
        },
        'marvel-thor': {
            id: 'marvel-thor',
            superhero: 'Thor',
            publisher: 'Marvel Comics',
            alter_ego: 'Thor Odinson',
            first_appearance: 'Journey into Myster #83',
            characters: 'Thor Odinson',
            image: '/marvel-thor.jpg'
        },
        'marvel-hulk': {
            id: 'marvel-hulk',
            superhero: 'Hulk',
            publisher: 'Marvel Comics',
            alter_ego: 'Bruce Banner',
            first_appearance: 'The Incredible Hulk #1',
            characters: 'Bruce Banner',
            image: '/marvel-hulk.jpg'
        },
        'marvel-wolverine': {
            id: 'marvel-wolverine',
            superhero: 'Wolverine',
            publisher: 'Marvel Comics',
            alter_ego: 'James Howlett',
            first_appearance: 'The Incredible Hulk #180',
            characters: 'James Howlett',
            image: '/marvel-wolverine.jpg'
        },
        'marvel-daredevil': {
            id: 'marvel-daredevil',
            superhero: 'Daredevil',
            publisher: 'Marvel Comics',
            alter_ego: 'Matthew Michael Murdock',
            first_appearance: 'Daredevil #1',
            characters: 'Matthew Michael Murdock',
            image: '/marvel-daredevil.jpg'
        },
        'marvel-hawkeye': {
            id: 'marvel-hawkeye',
            superhero: 'Hawkeye',
            publisher: 'Marvel Comics',
            alter_ego: 'Clinton Francis Barton',
            first_appearance: 'Tales of Suspense #57',
            characters: 'Clinton Francis Barton',
            image: '/marvel-hawkeye.jpg'
        },
        'marvel-cyclops': {
            id: 'marvel-cyclops',
            superhero: 'Cyclops',
            publisher: 'Marvel Comics',
            alter_ego: 'Scott Summers',
            first_appearance: 'X-Men #1',
            characters: 'Scott Summers',
            image: '/marvel-cyclops.jpg'
        },
        'marvel-silver': {
            id: 'marvel-silver',
            superhero: 'Silver Surfer',
            publisher: 'Marvel Comics',
            alter_ego: 'Norrin Radd',
            first_appearance: 'The Fantastic Four #48',
            characters: 'Norrin Radd',
            image: '/marvel-silver.jpg'
        }
    }
};

export default heroes;
