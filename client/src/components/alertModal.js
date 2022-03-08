import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function AlertModal({ setModalOn, visible, children }) {
  document.addEventListener(
    "click",
    (e) => (e.target.matches(".modal-outside") ? setModalOn("") : 0),
    false
  );
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper className="modal-outside" visible={visible}>
        <ModalInner className="modal-inside">{children}</ModalInner>
      </ModalWrapper>
    </>
  );
}
AlertModal.propTypes = {
  visible: PropTypes.bool,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 350px;
  height: 100px;
  border-radius:30px;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  background-color: white
`;

export default AlertModal;