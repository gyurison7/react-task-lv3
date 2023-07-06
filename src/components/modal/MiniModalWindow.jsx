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
    width: 300px;
    height: 200px;
    position: absolute;
`

const ButtonSet = styled.div`
    position: absolute;
    top: 12px;
    right: 12px;
`

const CloseButton = styled.button`
    border: 1px solid rgb(221, 221, 221);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    cursor: pointer;
`

const MiniModalWindow = ({openMiniModalHandler}) => {
    return (
        <div onClick={openMiniModalHandler}>
            <ModalDiv></ModalDiv>
            <ModalComponents>
                <div>닫기 버튼 1개가 있고,<br />외부 영역을 누르면 모달이 닫혀요.</div>
                <ButtonSet>
                    <div>
                        <CloseButton onClick={openMiniModalHandler}>X</CloseButton>
                    </div>
                </ButtonSet>
            </ModalComponents>
        </div>
    )
}

export default MiniModalWindow;