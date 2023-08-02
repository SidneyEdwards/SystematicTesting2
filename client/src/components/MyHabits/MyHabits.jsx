import React from "react";
import styled from "styled-components";
import MyHabitsDesktop from "./MyHabitsDesktop/MyHabitsDesktop"

const DesktopContainer = styled.div`
@media only screen and (max-width: 699px){
    display:none;
}
`


const MyHabits = () =>{
    return(
        <>
        <DesktopContainer>
            <MyHabitsDesktop>

            </MyHabitsDesktop>
        </DesktopContainer>
        </>
    );
};

export default MyHabits;