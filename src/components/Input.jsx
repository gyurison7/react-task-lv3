import { useState } from "react";
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

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const priceChangeHandler = (event) => {
        let price = event.target.value;
        price = Number(price.replaceAll(',', '')); // 한글자 입력할때마다 price의 값이 바뀌어서 오기 때문에 isNan 검사전 ,떼고 Number로 바꿔줘야 함
        if(isNaN(price)) {
            setPrice(0);
        } else {
            setPrice(price.toLocaleString('ko-KR'));
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (name === '' || price === 0) {
            alert("이름과 가격 모두 입력해주세요.");
            return;
        } else {
            const removedPrice = price.replaceAll(',','');
            alert(`{ name: ${name}, price: ${removedPrice} }`);
        }
    }

    return (
        <>
            <h1>Input</h1>
            <form onSubmit={onSubmitHandler}>
                <InputForm>
                    <div>
                        <label>이름</label>
                        <InputComponents type="text" value={name} onChange={nameChangeHandler} name="name"></InputComponents>
                    </div>
                    <div>
                        <label>가격</label>
                        <InputComponents type="text" value={price} onChange={priceChangeHandler} name="price"></InputComponents>
                    </div>
                    <SaveButton>저장</SaveButton>
                </InputForm>
            </form>
        </>
    )
}

export default Input