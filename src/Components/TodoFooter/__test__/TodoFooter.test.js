import { render, screen } from '@testing-library/react'

// import component yang akan dites
import TodoFooter from '../TodoFooter'


test('renders todo footer container', () => {
    // 1. Render component
    render(<TodoFooter todoLength={5} />)
    // 2. Select DOM
    const containerElement = screen.getByTestId('todo-footer-container');
    // 3. Expected Result
    expect(containerElement).toBeInTheDocument()
})

describe('todo length > 0', () => {

    test('render "with-items" message', () => {
        render(<TodoFooter todoLength={5} />)
        const footerWithItemsElement = screen.getByTestId('todo-footer-with-items')
        expect(footerWithItemsElement).toBeInTheDocument()
    })
    
    test('not render "with-no-items" message', () => {
        render(<TodoFooter todoLength={5} />)
        const footerWithNoItemsElement = screen.queryByTestId('todo-footer-with-no-items')
        expect(footerWithNoItemsElement).not.toBeInTheDocument()
    })

    describe('todo length == 1', () => {
        test('render "TASK" in singular', () => {
            render(<TodoFooter todoLength={1} />)
            const footerWithNoItemsElement = screen.getByTestId('todo-footer-with-items')
            expect(footerWithNoItemsElement).toHaveTextContent("You have 1 task")
        })
    })

    describe('todo length > 1', () => {
        test('render "TASK" in plural', () => {
            render(<TodoFooter todoLength={5} />)
            const footerWithNoItemsElement = screen.getByTestId('todo-footer-with-items')
            expect(footerWithNoItemsElement).toHaveTextContent("You have 5 tasks")
        })
    })
})
describe('todo length <= 0', () => {
    test('not render with items message', () => {
        render(<TodoFooter todoLength={0} />)
        const footerWithItemsElement = screen.queryByTestId('todo-footer-with-items')
        expect(footerWithItemsElement).not.toBeInTheDocument()
    })
    
    test('not render with no items message', () => {
        render(<TodoFooter todoLength={0} />)
        const footerWithNoItemsElement = screen.getByTestId('todo-footer-with-no-items')
        expect(footerWithNoItemsElement).toBeInTheDocument()
    })
})







