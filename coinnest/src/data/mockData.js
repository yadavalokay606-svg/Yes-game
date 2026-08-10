const mock = {
  user: {
    id: 'user_1',
    name: 'Prototype User',
    coins: 420,
    pending: 80
  },
  tasks: [
    { id: 't1', title: 'Complete app feedback', type: 'Feedback', reward: 50 },
    { id: 't2', title: 'Short survey on shopping habits', type: 'Survey', reward: 30 },
    { id: 't3', title: 'Trivia quiz: India', type: 'Quiz', reward: 20 }
  ],
  brands: [
    { id: 'b1', name: 'Acme Corp' },
    { id: 'b2', name: 'Mintly' }
  ]
};

export default mock;
