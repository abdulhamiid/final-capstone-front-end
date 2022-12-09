import deleteFunction from '../../utils/deleteFunction';

describe('Delete users', () => {
  test('Delete item from array', () => {
    const fitActivities = [
      { name: 'Gym', image: 'image.jpg', index: 1 },
      { name: 'Swim', image: 'image2.jpg', index: 2 },
      { name: 'Gym', image: 'image3.jpg', index: 3 },
    ];
    deleteFunction(fitActivities, 1);
    expect(fitActivities).toHaveLength(2);
  });
});
