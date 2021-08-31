import {act, fireEvent, render} from "@testing-library/react";
import Button from "./Button";

describe('Button Component test(@testing-libary/react', ()=>{
	it('컴포넌트가 정상적으로 생성된다', ()=>{
		const button = render(<Button/>);
		expect(button).not.toBe(null);
	});
	it('"button"이라고 쓰여있는 엘리먼트는 HtmlButtonElement 이다', ()=>{
		const {getByText} = render(<Button/>);
		const buttonElement = getByText('button');
		expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
	});
	it('버튼을 클릭하면, p태그 안에 "버튼이 방금 눌렸다." 라고 출력한다', ()=>{
		const {getByText} = render(<Button/>);
		const buttonElement = getByText('button');

		fireEvent.click(buttonElement);
		const pElement = getByText('버튼이 방금 눌렸다.');
		expect(pElement).not.toBeNull();
		expect(pElement).toBeInstanceOf(HTMLParagraphElement);
	});
	it('버튼을 클릭하기 전에는, p태그 안에 "버튼이 눌리지 않았다." 라고 출력한다', ()=>{
		const {getByText} = render(<Button/>);
		const pElement = getByText('버튼이 눌리지 않았다.');
		expect(pElement).not.toBeNull();
		expect(pElement).toBeInstanceOf(HTMLParagraphElement);
	});
	it('버튼을 클릭하고 5초 뒤에는, p태그 안에 "버튼이 눌리지 않았다." 라고 출력한다', ()=>{
		// 반드시 시작 시점에 사용
		jest.useFakeTimers();

		const {getByText} = render(<Button/>);
		const buttonElement = getByText('button');
		fireEvent.click(buttonElement);

		// 5초 경과
		act(()=>{
			jest.advanceTimersByTime(5000);
		});

		const pElement = getByText('버튼이 눌리지 않았다.');
		expect(pElement).not.toBeNull();
		expect(pElement).toBeInstanceOf(HTMLParagraphElement);
	});
	it('버튼을 클릭하면 버튼이 5초 동안 비활성화 된다', ()=>{
		// 반드시 시작 시점에 사용
		jest.useFakeTimers();

		const {getByText} = render(<Button/>);
		const buttonElement = getByText('button');
		fireEvent.click(buttonElement);

		// 비활성
		expect(buttonElement).toBeDisabled();

		// 5초 경과
		act(()=>{
			jest.advanceTimersByTime(5000);
		});

		// 활성화
		expect(buttonElement).not.toBeDisabled();
	});
});