import React from 'react'
import { render, screen } from '@testing-library/react';
import Summary from './Summary';

describe('Summary', ()=>{
    it('should render default Summary', ()=>{
        const summaryProps = {
            onClick: jest.fn()
        }
        const element = render(
            <Summary data-testid='testingSummary' {...summaryProps}></Summary>
        ).container.firstChild
        //const element = screen.getByTestId('testingSummary')
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('summary');
    })
})
