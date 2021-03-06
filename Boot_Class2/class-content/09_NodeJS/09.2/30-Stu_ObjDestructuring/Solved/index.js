// 1. Object
const arya = {
	first: 'Arya',
	last: 'Stark',
	origin: 'Winterfell',
	allegiance: 'House Stark'
};

const { first, last, origin, allegiance } = arya;
console.log(first); // <= Arya
console.log(last); // <= Stark

// 2. Nested Object
const john = {
	first: 'John',
	last: 'Snow',
	title: 'Prince',
	family: {
		brothers: {
			brother1: 'Rob Stark',
			brother2: 'Rickon Stark'
		},
		sisters: {
			sister1: 'Arya Stark',
			sister2: 'Sansa Stark'
		}
	}
};

const { brother1, brother2 } = john.family.brothers;
console.log(brother1); // <= Rob Stark
console.log(brother2); // <= Rickon Stark

// 3. Arrays
// Please sure to the make the alias and allegiance variables different from the variables declared in the first practice problem.
const characters = [ 'Ned Stark', 'The Quiet Wolf', 'House Stark' ];

const [ name, alias, aLlegiance ] = characters;
console.log(name, alias, aLlegiance); // <= Ned Stark The Quiet Wolf House Stark

// 4. Strings
const skills = 'The Usurper, male, Baratheon, Cersei'; // string of data

const [ aLias, gender, family, spouse ] = skills.split(','); // set variables and split
console.log(aLias, gender, family, spouse); // print them by variable name
