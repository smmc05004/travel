import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  text-align: right;
  width: 100%;
  height: 50px;

  .register_btn {
    border: 1px solid black;
    border-radius: 3px;
    font-size: 16px;
    line-height: 50px;
    padding: 5px;
  }
`;

const GoRegisterBtn = () => {
  return (
    <Wrapper>
      <Link href="/survey/register" passHref>
        <a className="register_btn">등록하기</a>
      </Link>
    </Wrapper>
  );
};

export default GoRegisterBtn;
