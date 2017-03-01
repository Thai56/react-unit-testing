import { renderComponent, expect } from '../test_helper';
// import React , { Component } from 'react';
import App from '../../src/components/app';

// Use to 'describe' to group together similar tests
describe('App', () => {

  // Use 'it' test a single attribute of a target
  it('shows the correct text', () => {


    //create an instance of App
    const component = renderComponent(App);

    // Use 'expect' to make an 'assertion' about a target
    expect(component).to.contain('React simple starter');

  })


});
