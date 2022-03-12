import { render,screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { Provider } from 'react-redux';
import configureStore from "../../redux/reducers/configureStore";

const store=configureStore();

const MockNavbar = () => {
    return(
        <Provider store={store}>
            <Navbar />     
        </Provider>
    )
}
describe("Navbar", () => {
    it('should render btc name', () => {
        render(
            <MockNavbar/>
        );
    const element = screen.getByText(/Loading/i)
    expect(element).toBeInTheDocument();
    })
})