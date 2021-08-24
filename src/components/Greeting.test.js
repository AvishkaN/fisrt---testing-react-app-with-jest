import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";



describe('Greeting component',()=>{

    // test('test user not clicked',()=>{
    //     // Arrange
    //     render(<Greeting/>);
    
    //     // act
    //     // ...nothing
    
    //     //  assert
    //     const helloWorldElement=screen.getByText('unchaned text');
    //     expect(helloWorldElement).toBeInTheDocument;
    // });

    test('test use button clicked !',()=>{
        // arrange
        render(<Greeting/>);

        // act
        const buttonElement =screen.getByRole('button');
        userEvent.click(buttonElement );

        // assert
        // const outputElement=screen.getByText('changed text');
        // expect(outputElement).toBeInTheDocument();

        const outputElement = screen.getByText('chaned');
        expect(outputElement).toBeInTheDocument();

    })
    // test('doe not render good to see !',()=>{
    //     // arrange
    //     render(<Greeting/>);

    //     // act
    //     const buttonElement =screen.getByRole('button');
    //     userEvent.click(buttonElement );

    //     // assert
    //     const outputElement = screen.queryByText('good to see',{exact:false});
    //     expect(outputElement).toBeNull();

    // })

});

