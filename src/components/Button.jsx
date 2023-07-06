import { styled, css } from "styled-components";

const ButtonLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const ButtonSet = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

const LargeButton = styled.button`
    cursor: pointer;
    border-radius: 8px;
    height: 50px;
    width: 200px;
    background-color: rgb(255, 255, 255);
    font-weight: 600;

    ${props =>
        props.primary &&
        css`
        color : rgb(0, 0, 0);
        border: 3px solid rgb(85, 239, 196);
    `
    }

    ${props =>
        props.navigate &&
        css`
        color: rgb(214, 48, 49);
        border: 3px solid rgb(250, 177, 160);
    `
    }
`

const MediumButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    height: 45px;
    width: 130px;

    ${props =>
        props.primary &&
        css`
        color : rgb(0, 0, 0);
        background-color: rgb(85, 239, 196);
    `
    }

    ${props =>
        props.navigate &&
        css`
        color: rgb(214, 48, 49);
        background-color: rgb(250, 177, 160);
    `
    }
`

const SmallButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    height: 40px;
    width: 100px;

    ${props =>
        props.primary &&
        css`
        color : rgb(0, 0, 0);
        background-color: rgb(85, 239, 196);
    `
    }

    ${props =>
        props.navigate &&
        css`
        color: rgb(214, 48, 49);
        background-color: rgb(250, 177, 160);
    `
    }
`

const Button = () => {
    return (
        <ButtonLayout>
            <h1>Button</h1>
            <ButtonSet>
                <LargeButton primary={true} onClick={() => alert("버튼을 클릭했어요!")}>Large Primary Button</LargeButton>
                <MediumButton primary={true}>Medium</MediumButton>
                <SmallButton primary={true}>Small</SmallButton>
            </ButtonSet>
            <ButtonSet>
                <LargeButton navigate={true} onClick={() => prompt("prompt창 띄우기!")}>Large Navigaate Button</LargeButton>
                <MediumButton navigate={true}>Medium</MediumButton>
                <SmallButton navigate={true}>Small</SmallButton>
            </ButtonSet>
        </ButtonLayout>
    )
}

export default Button;