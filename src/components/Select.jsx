import { styled } from "styled-components";

const SelectLayout = styled.div`
    border: 3px solid rgb(221, 221, 221);
    height: 200px;
    overflow: hidden;
    position: relative;
    margin-top: 50px;
`

const SelectComponents = styled.div`
    display: flex;
    gap: 10px;
`
const SelectButton = styled.select`
    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 300px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;

`

const Select = () => {
    return (
        <div>
            <SelectLayout>
                <h1>Select </h1>
                <SelectComponents>
                    <div>
                        <SelectButton></SelectButton>
                    </div>
                    <div>
                        <SelectButton></SelectButton>
                    </div>
                </SelectComponents>
            </SelectLayout>
        </div>
    )
}

export default Select;