import React from 'react';
import { mount } from 'enzyme';

import ErrorBoundary from './index';

class HandGranade extends React.Component {
  render() {
    throw 'BOOOM!';
  }
}

describe('FileCard Component', () => {
  let Component;

  it('should render childs normally', () => {
    Component = mount(<ErrorBoundary><div>hi</div></ErrorBoundary>);
    expect(Component.text()).toEqual('hi');
  });

  it('should stop propagation of an error on render', () => {
    Component = mount(
      <div>
        <div>hi</div>
        <ErrorBoundary><HandGranade /></ErrorBoundary>
      </div>
    );
    expect(Component.text()).toEqual('hi');
  });
});
