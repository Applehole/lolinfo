import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Edit from "./pages/Mypage-Edit";
import DeleteAccount from "./pages/Mypage-DelAco";
import ChangePassword from "./pages/Mypage-ChangePw";
import ChattingRoom from "./pages/ChattingRoom";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import RecordPage from "./pages/RecordPage";
import Search from "./components/search";
import NaviBar from "./components/naviBar";
import LoginPage from "./components/loginPage";
import useSticky from "./hook/useSticky";
import SignupPage from "./components/signupPage";
import Modal from "./components/modal";
import AlertModal from "./components/alertModal";
import DeleteModal from "./components/deleteModal";

function App() {
  const { isSticky, element } = useSticky();
  const [history, setHistory] = useState(0);
  const [loginModal, setLoginModal] = useState("");
  const [schBarInput, setSchBarInput] = useState("");
  const [loginState, setLoginState] = useState("");
  const [loginFailState, setloginFailState] = useState("");
  const [emailState, setemailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [passwordCheckState, setPasswordCheckState] = useState("");
  const [registerState, setRegisterState] = useState("");
  const [replaceState, setReplaceState] = useState("");
  const [deleteModal, setDeleteModal] = useState("");
  const [deleteModalConfirm, setDeleteModalConfirm] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    password: "",
    passwordC: "",
    submit: "",
    login: "",
  });

  return (
    <div className="App" ref={element}>
      <ThemeProvider theme={Theme}>
        <Router>
          <GlobalStyle />
          <NaviBar sticky={isSticky} setLoginModal={setLoginModal} loginState={loginState} />
          {history !== "/" ? <Search setSchBarInput={setSchBarInput} schBarInput={schBarInput} /> : null}
          {loginModal ? (
            <Modal setLoginModal={setLoginModal} visible={true}>
              {loginModal === "login" ? (
                <LoginPage setLoginModal={setLoginModal} userInfo={userInfo} setUserInfo={setUserInfo} setLoginState={setLoginState} setloginFailState={setloginFailState} />
              ) : (
                <SignupPage
                  setLoginModal={setLoginModal}
                  setUserInfo={setUserInfo}
                  userInfo={userInfo}
                  setemailState={setemailState}
                  setPasswordState={setPasswordState}
                  setPasswordCheckState={setPasswordCheckState}
                  setRegisterState={setRegisterState}
                />
              )}
            </Modal>
          ) : null}
          {loginState ? <AlertModal setLoginState={setLoginState} visible={true} children="???????????? ?????????????????????."></AlertModal> : <div></div>}
          {loginFailState ? <AlertModal setLoginState={setloginFailState} visible={true} children={loginFailState}></AlertModal> : <div></div>}
          {emailState ? <AlertModal setLoginState={setemailState} visible={true} children="????????? ????????? ????????????."></AlertModal> : <div></div>}
          {passwordState ? <AlertModal setLoginState={setPasswordState} visible={true} children="???????????? ??????: 8~16??? ?????? ??? ?????????, ??????, ??????????????? ?????????????????????."></AlertModal> : <div></div>}
          {passwordCheckState ? <AlertModal setLoginState={setPasswordCheckState} visible={true} children="??????????????? ???????????? ????????????."></AlertModal> : <div></div>}
          {registerState ? <AlertModal setLoginState={setRegisterState} visible={true} children="??????????????? ??????????????????!"></AlertModal> : <div></div>}
          {replaceState ? <AlertModal setLoginState={setReplaceState} visible={true} children="??????????????? ?????????????????????!"></AlertModal> : <div></div>}
          {deleteModalConfirm ? <AlertModal setLoginState={setDeleteModalConfirm} visible={true} children="?????? ?????????????????????!"></AlertModal> : <div></div>}
          {deleteModal ? (
            <Modal>
              <DeleteModal setDeleteModal={setDeleteModal} setDeleteModalConfirm={setDeleteModalConfirm} visible={true}></DeleteModal>
            </Modal>
          ) : (
            <div></div>
          )}

          <Routes>
            <Route path="/" element={<Home setSchBarInput={setSchBarInput} setHistory={setHistory} />} />
            <Route path="/board" element={<Board setHistory={setHistory} />} />
            <Route path="/record" element={<RecordPage setHistory={setHistory} schBarInput={schBarInput} setSchBarInput={setSchBarInput} />} />
            <Route path="/mypage/edit" element={<Edit setHistory={setHistory} setReplaceState={setReplaceState} />} />
            <Route path="/mypage/changePassword" element={<ChangePassword setHistory={setHistory} setPasswordState={setPasswordState} setPasswordCheckState={setPasswordCheckState} setReplaceState={setReplaceState} />} />
            <Route path="/mypage/deleteAccount" element={<DeleteAccount setHistory={setHistory} setDeleteModal={setDeleteModal} setloginFailState={setloginFailState} />} />
            <Route path="/chat" element={<ChattingRoom setHistory={setHistory} />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}
export default App;
