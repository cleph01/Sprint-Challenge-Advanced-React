import React from 'react';
import * as rtl from '@testing-library/react';
import { getByText } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);


test('Render the App', () => {
  const wrapper = rtl.render(<App />)
  
    //test whether Toggle Button Click Adds Class to button
    //and activates the css. 
    const toggle_button = wrapper.getByTestId('toggle-button')

    //Would like to check if User Cards get the appropriate
    //className applied after toggle
    const user_card = wrapper.getByRole('user_card')


      expect(toggle_button).toHaveClass('toggle')

      expect(user_card).toHaveClass('')

      rtl.fireEvent.click(toggle_button);


      expect(toggle_button).toHaveClass('toggle toggled')

      expect(user_card).toHaveClass('dark-mode')


      wrapper.debug(user_card)

      wrapper.debug(toggle_button)
})

// test('Render the UserCard', () => {
//   const wrapper = rtl.render(<UserCard />)
//   wrapper.debug()
// })



