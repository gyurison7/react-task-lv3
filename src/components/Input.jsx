import { styled } from "styled-components";

export const InputForm = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`

export const InputComponents = styled.input`
    border: 1px solid rgb(51, 51, 51);
    height: 40px;
    width: 200px;
    outline: none;
    border-radius: 8px;
    padding-left: 12px;
    padding-right: 12px;
`

export const SaveButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
`

const Input = () => {
    return (
        <>
            <h1>Input</h1>
            <form>
                <InputForm>
                    <div>
                        <label>이름</label>
                        <InputComponents></InputComponents>
                    </div>
                    <div>
                        <label>가격</label>
                        <InputComponents></InputComponents>
                    </div>
                    <SaveButton>저장</SaveButton>
                </InputForm>
            </form>
        </>
    )
}

export default Input