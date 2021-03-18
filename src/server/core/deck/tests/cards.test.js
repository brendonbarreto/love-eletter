import cards from '../cards';

it('should includes Spy', () => {
  const spy = cards.find(a => a.name === 'Spy')

  expect(spy.level).toBe(0)
  expect(spy.copies).toBe(2)
});