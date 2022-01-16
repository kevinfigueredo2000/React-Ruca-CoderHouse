import { render } from "@testing-library/react";
import React from "react";
import Container from 'react-bootstrap/Container';

function ItemListContainer(){
        const stylePar = {
            fontFamily: "Arial",
            color: "grey",
            fontSize: 20,
            marginTop:10
        }
    return(
        <Container>
            <p style={stylePar}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Vel orci porta non pulvinar neque laoreet suspendisse interdum. In massa tempor nec feugiat nisl pretium fusce id velit. Gravida cum sociis natoque penatibus et magnis dis. Iaculis eu non diam phasellus vestibulum lorem. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Elit ut aliquam purus sit. Tristique et egestas quis ipsum suspendisse ultrices. Diam in arcu cursus euismod quis viverra nibh. Integer enim neque volutpat ac tincidunt. Massa vitae tortor condimentum lacinia quis vel eros donec ac.</p>
        </Container>
    )
    }

export default ItemListContainer;