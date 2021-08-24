import { render,screen } from "@testing-library/react";
import Greeting from "./Greeting";


test('render Hello World as a text',()=>{
    // Arrange
    render(<Greeting/>);

    // act
    // ...nothing

    //  assert
    const helloWorldElement=screen.getByText('hello world',{exact:false});
    expect(helloWorldElement).toBeInTheDocument;
});


