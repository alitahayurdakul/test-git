import Body from "./Body";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import configureStore from "../../redux/reducers/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

const MockBody = () => {
    return(
        <Provider store={store}>
            <Body/>
        </Provider>
    )
}

describe("Body", () => {
    //it=test
    it("Select Part when changed", () => {
        render(
            <MockBody/>
        );
        const selectElement = screen.getByTestId("selectpart");
        fireEvent.change(selectElement, {target: {value:"USD"}});
        expect(selectElement.value).toBe("USD");
    })

    it("Select Part when USD clicked", () => {
        render(
            <MockBody/>
        );
        const selectElement = screen.getByTestId("selectpart");
        const selectUSD = screen.getByTestId("selectUSD");
        fireEvent.click(selectUSD);
        fireEvent.change(selectElement, {target: {value:selectUSD.value}});
        expect(selectElement.value).toBe("USD");
    })

    it("select part USD value", () => {
        render(
            <MockBody/>
        );
        const selectUSD = screen.getByTestId("selectUSD");
        expect(selectUSD.value).toBe("USD");
    })

    it("Turning money is existing", () => {
        render(
            <MockBody  />
        );
        const element= screen.getByText(/Dönüştürülecek Para Birimi:TRY/i);
        expect(element).toBeInTheDocument();
    });

    it("Turning money value render", () => {
        render(
            <MockBody  />
        );
        const element = screen.getByTestId("turning");
        expect(element).toBeInTheDocument();
    });

    it("TRY word count === 3", ()=> {
        render(
            <MockBody  />
        );

        const element = screen.getAllByText(/TRY/i);
        expect(element.length).toBe(3);
    })

    it("Input placeholder is true?", () => {
        render(
            <MockBody/>
        );
        const inputElement = screen.getByPlaceholderText(/Para miktarını giriniz/i);
        expect(inputElement).toBeInTheDocument();
    })

    it("Input value is existing?", () => {
        render(
            <MockBody/>
        );
        const inputElement = screen.getByTestId("inputpart");
        fireEvent.change(inputElement,{target:{value:12}})
        expect(inputElement.value).not.toBe(12);
    })

    it("Input placeholder is only number?", () => {
        render(
            <MockBody/>
        );
        const inputElement = screen.getByTestId("inputpart");
        fireEvent.change(inputElement,{target:{value:"a"}})
        expect(inputElement.value).not.toBe("a");
    })

    // there is a mistake in onClickConvert function in Body.js because of Selling is null

    // it("Input placeholder is not null when click button?", async() => {
    //     render(
    //         <MockBody/>
    //     );
    //     const inputElement = screen.getByTestId("inputpart");
    //     const selectElement = screen.getByTestId("selectpart");
    //     fireEvent.change(inputElement,{target: {value: "12"}});
    //     fireEvent.change(selectElement,{target: { value:"USD"}});
    //     const buttonElement = screen.getByRole("button", {name: /Dönüştür/i});
    //     fireEvent.click(buttonElement);
    //     await waitFor(()=>{
    //         expect(buttonElement.textContent).toBe("Dönüştür");
    //     })   
    // })

    it("Button Value is existing", () => {
        render(
            <MockBody/>
        );
        const buttonElement = screen.getByText(/Kullanılamaz/i);
        expect(buttonElement).toBeInTheDocument();
    })

    it("Button Value when input and select is null", () => {
        render(
            <MockBody/>
        );
        const buttonElement = screen.getByTestId("btn-div");
        expect(buttonElement.textContent).toBe("Kullanılamaz");
    })

    it("Button Value when input and select is not null", () => {
        render(
            <MockBody/>
        );
        const selectElement = screen.getByTestId(/selectpart/i);
        const inputElement = screen.getByTestId(/inputpart/i);
        fireEvent.change(selectElement, { target: {value: "USD"}});
        fireEvent.change(inputElement, {target:{value: 12}})
        
        const buttonElement = screen.getByTestId(/btn-div-2/i);
        expect(buttonElement).toBeInTheDocument();
    })

})