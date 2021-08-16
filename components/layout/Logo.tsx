import Image from "next/image";

import styled from "styled-components";

const Wrapper = styled.div``;

const Logo = () => {
  return (
    <Wrapper>
      <Image
        src="/imgs/common/logo.jpg"
        alt="로고 이미지"
        width={100}
        height={70}
      />
    </Wrapper>
  );
};

export default Logo;
