import { render, screen } from '@testing-library/react'
import NavbarParts from './NavbarParts'

// const mockedSetTodo = jest.fn();
describe("NavbarParts", () => {

    //getByText
    it('should render name part', () => {
        render(
            <NavbarParts name="USD" Buying="13.49" Selling="13.48"  Change="-%3" />
        );
        
    const pnameElement =  screen.getByText(/USD/i);
    expect(pnameElement).toBeInTheDocument();
    });

    //getByAllText
    it('should render name getByAllText part', () => {
        render(
            <NavbarParts name="USD" Buying="13.49" Selling="13.48"  Change="-%3" />
        );
        
    const pnameElement =  screen.getAllByText(/USD/i);
    expect(pnameElement.length).toBe(1);
    });

    //getByAllTestId
    it('should render name getByAllTestId part', () => {
        render(
            <NavbarParts name="USD" Buying="13.49" Selling="13.48"  Change="-%3" />
        );
        
    const pnameElement =  screen.getByTestId("name");
    expect(pnameElement).toBeInTheDocument();
    });

    //Buy Part
    //getByText
    it('should render buying part', () => {
        render(
            <NavbarParts name="USD" Buying="13.49" Selling="13.48"  Change="-%3" />
        );
        
    const pnameElement =  screen.getByText(/13.49/i);
    expect(pnameElement).toBeInTheDocument();
    });

    //getByAllText
    it('should render buying getByAllText part', () => {
        render(
            <NavbarParts name="USD" Buying="13.49" Selling="13.48"  Change="-%3" />
        );
        
    const pnameElement =  screen.getAllByText(/13.49/i);
    expect(pnameElement.length).toBe(1);
    });

    //getByAllTestId
    it('should render buying getByAllTestId part', () => {
        render(
            <NavbarParts name="USD" Buying="13.49" Selling="13.48"  Change="-%3" />
        );
        
    const pnameElement =  screen.getByTestId("buy");
    expect(pnameElement).toBeInTheDocument();
    });

    //Sell Part
    //getByText
    it('should render selling part', () => {
        render(
            <NavbarParts name="USD" Buying="13.49" Selling="13.48"  Change="-%3" />
        );
        
    const pnameElement =  screen.getByText(/13.48/i);
    expect(pnameElement).toBeInTheDocument();
    });

    //getByAllText
    it('should render selling getByAllText part', () => {
        render(
            <NavbarParts name="USD" Buying="13.49" Selling="13.48"  Change="-%3" />
        );
        
    const pnameElement =  screen.getAllByText(/13.48/i);
    expect(pnameElement.length).toBe(1);
    });

    //getByAllTestId
    it('should render selling getByAllTestId part', () => {
        render(
            <NavbarParts name="USD" Buying="13.49" Selling="13.48"  Change="-%3" />
        );
        
    const pnameElement =  screen.getByTestId("sell");
    expect(pnameElement).toBeInTheDocument();
    });

    //Change Part
    //getByText
    it('should render change part', () => {
        render(
            <NavbarParts name="USD" Buying="13.49" Selling="13.48"  Change="-%3" />
        );
        
    const pnameElement =  screen.getByText(/-%3/i);
    expect(pnameElement).toBeInTheDocument();
    });

    //getByAllText
    it('should render change getByAllText part', () => {
        render(
            <NavbarParts name="USD" Buying="13.49" Selling="13.48"  Change="-%3" />
        );
        
    const pnameElement =  screen.getAllByText(/-%3/i);
    expect(pnameElement.length).toBe(1);
    });

    //getByAllTestId
    it('should render change getByAllTestId part', () => {
        render(
            <NavbarParts name="USD" Buying="13.49" Selling="13.48"  Change="-%3" />
        );
        
    const pnameElement =  screen.getByTestId("change");
    expect(pnameElement).toBeInTheDocument();
    });


})
