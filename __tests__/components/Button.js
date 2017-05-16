import 'react-native';
import React from 'react';
import {Button} from '../../app/components/button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('render with text set matches snapshot', () => {
  const tree = renderer.create(
    <Button text={'some text'} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});