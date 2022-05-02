import React from 'react'
import { render, screen } from '@testing-library/react';
import Main from './Main';

describe('Main', ()=>{
    it('should render default Main', ()=>{
        const mainProps = {
            onClick: jest.fn()
        }
        const element = render(
            <Main data-testid='testingMain' {...mainProps}></Main>
        ).container.firstChild
        //const element = screen.getByTestId('testingMain')
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('main');
    })
})
