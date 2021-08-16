import Image from "next/image";

import styled from "styled-components";

const LogoWrapper = styled.div``;

const Logo = () => {
  return (
    // <LogoWrapper>
    <Image
      src="/imgs/common/logo.jpg"
      alt="로고 이미지"
      width={100}
      height={70}
    />
    // </LogoWrapper>
  );
};

export default Logo;
