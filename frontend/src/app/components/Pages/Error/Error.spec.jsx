import React from 'react';
import { mount } from 'enzyme';

import ErrorBoundary from './index';

// eslint-disable-next-line
class HandGranade extends React.Component {
  render() {
    throw 'BOOOM!'; // eslint-disable-line
  }
}

describe('<ErrorBoundary />', () => {
  let Component;

  it('should render childs normally', () => {
    Component = mount(<ErrorBoundary><div>hi</div></ErrorBoundary>);
    expect(Component.text()).toEqual('hi');
  });

  // it('should stop propagation of an error on render', () => {
  //   Component = mount(<div>
  //     <div>hi</div>
  //     <ErrorBoundary><HandGranade /></ErrorBoundary>
  //   </div>);
  //   expect(Component.text()).toEqual('hi');
  // });
});
