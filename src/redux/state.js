const posts = [
	{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
	{ id: 2, message: 'First post', likesCount: 10 },
];

const dialogs = [
	{ id: 1, name: 'Andrey' },
	{ id: 2, name: 'Fedor' },
	{ id: 3, name: 'Oleg' },
	{ id: 4, name: 'Vladimir' },
	{ id: 5, name: 'Alexey' },
];

const messages = [
	{ id: 1, message: 'Hi' },
	{ id: 2, message: 'How are you?' },
	{ id: 3, message: 'BB!' },
];

const state = {
	profilePage: { posts },
	dialogsPage: { dialogs, messages },
};

export default state;