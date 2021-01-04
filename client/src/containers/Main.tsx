import * as React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import SimpleTabs from "components/SimpleTabs";
import Modal from "@material-ui/core/Modal";
import ovenImg from "assets/images/oven1.png";

interface Imain {}
export default function Main({ ...props }: Imain) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MainWrapper>
        <ProductCard>
          <Oven />
        </ProductCard>
        <Container>
          <button type="button" onClick={handleOpen}>
            Open Modal
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Card>Hello</Card>
          </Modal>
          <SimpleTabs></SimpleTabs>
        </Container>
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.div`
  overflow: hidden;
  /* ${({ theme }) => theme.media.desktop`
        background-color:black;
    `}
  ${({ theme }) => theme.media.tablet`
        background-color: yellow;
    `}
    ${({ theme }) => theme.media.mobile`
        background-color: purple;
    `} */
`;
const Card = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 30vh;
  left: 30vh;
  padding: 10px;
`;

const ProductCard = styled.div`
  height: 600px;
`;

const Oven = styled.div`
  background-image: url(${ovenImg});
  height: 100%;
  width: 90%;
  background-repeat: no-repeat;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  position: relative;
  z-index: 1;
`;
