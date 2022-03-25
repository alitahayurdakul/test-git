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

    // For BTC
    it("should render BTC name content is existing by text", async()=> {
        render(
            <MockNavbar />
        );

        const element = await screen.findByText("BTC/USD")
        expect(element).toBeInTheDocument();
    });

    it("should render BTC PART is existing?", async()=> {
        render(
            <MockNavbar />
        );

        const element = await screen.findByTestId("btc")
        expect(element).toBeInTheDocument();
    });

    it("should render BTC Name", async()=> {
        render(
            <MockNavbar />
        );

        const element = await screen.findByTestId("btc")
        expect(element.textContent).toBe("BTC/USD");
    });

    it("should render BTC price content is existing by text", async()=> {
        render(
            <MockNavbar />
        );

        const element = await screen.findByText("Fiyat:6.00")
        expect(element).toBeInTheDocument();
    });

    it("should render BTC price is existing?", async()=> {
        render(
            <MockNavbar />
        );

        const element = await screen.findByTestId("btc-price")
        expect(element).toBeInTheDocument();
    });

    it("should render BTC price should be 6.00", async()=> {
        render(
            <MockNavbar />
        );

        const element = await screen.findByTestId("btc-price")
        expect(element.textContent).toBe("Fiyat:6.00");
    });

    it("should render BTC change content is existing by text?", async()=> {
        render(
            <MockNavbar />
        );

        const element = await screen.findByText("Değişim:%-0.14")
        expect(element).toBeInTheDocument();
    });

    it("should render BTC change is existing?", async()=> {
        render(
            <MockNavbar />
        );

        const element = await screen.findByTestId("btc-change")
        expect(element).toBeInTheDocument();
    });

    it("should render BTC change should be -0.14", async()=> {
        render(
            <MockNavbar />
        );

        const element = await screen.findByTestId("btc-change")
        expect(element.textContent).toBe("Değişim:%-0.14");
    });

})

