import { styled } from "styled-components";

const ModalDiv = styled.div`
    width: 100%;
    height: 100vh;
    inset: 0px;
    position: fixed;
    opacity: 0.8;
    background-color: rgb(221, 221, 221);
`

const ModalComponents = styled.div`
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    box-sizing: border-box;
    padding: 24px;
    background-color: rgb(255, 255, 255);
    width: 500px;
    height: 300px;
    position: absolute;
`

const ButtonSet = styled.div`
    position: absolute;
    bottom: 12px;
    right: 12px;
    display: flex;
    gap: 5px;
`

const CloseButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(250, 177, 160);
    color: rgb(214, 48, 49);
    height: 40px;
    width: 100px;
`

const CheckButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
`

const ModalWindow = ({openModalHandler}) => {
    return (
        <div>
            <ModalDiv></ModalDiv>
            <ModalComponents>
                <div>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</div>
                <ButtonSet>
                    <div>
                        <CloseButton onClick={openModalHandler}>닫기</CloseButton>
                    </div>
                    <div>
                        <CheckButton>확인</CheckButton>
                    </div>
                </ButtonSet>
            </ModalComponents>
        </div>
    )
}

export default ModalWindow;