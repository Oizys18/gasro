import React, { useState, useEffect, useRef } from "react";
import firebase from "database/firebaseConfig";
import { filestorage } from "database/filedata";
import { noticeRef } from "database/textdata";
import "firebase/auth";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

export default function Admin() {
  const [post, setPost] = useState();
  const [curUser, setCurUser] = useState<string | null>();

  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const { email, password } = auth;

  const authChange = (e: any) => {
    const { value, name } = e.target;
    setAuth({
      ...auth,
      [name]: value,
    });
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setCurUser(user?.email);
      } else {
        setCurUser("");
      }
    });
  }, []);
  function authenticate() {
    const isUser = firebase.auth().currentUser;
    if (isUser) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log(user?.email);
          setCurUser(user?.email);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    }
  }

  const [inputs, setInputs] = useState({
    date: "",
    title: "",
    content: "",
  });
  const { title } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e: any) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  function onSubmit() {
    if (inputs["title"] !== "" || inputs["content"] !== "") {
      try {
        const newKey = noticeRef.push().key;
        const postData = {
          ...inputs,
          date: new Date().toISOString().slice(0, 10),
          content: post,
          post_id: newKey,
        };
        noticeRef.child(`${newKey}`).set(postData);
        alert("글작성 성공");
      } catch {
        alert("글작성 실패, 다시 시도해주세요");
      }
    } else {
      alert("제목과 내용을 입력해주세요");
    }
  }
  const editorRef = useRef<SunEditor>(null);
  useEffect(() => {
    console.log(editorRef.current?.editor.core);
  }, []);
  function handleChange(content: any) {
    setPost(content);
  }
  return (
    <div className="basic-container admin-container">
      <div className="admin-title">관리자 페이지</div>
      {curUser ? (
        <>
          <form onSubmit={onSubmit} className="admin-post">
            <p>
              <label htmlFor="title">제목</label>
              <input
                type="text"
                onChange={onChange}
                name="title"
                value={title}
              />
            </p>
            <SunEditor
              ref={editorRef}
              lang="ko"
              onChange={handleChange}
              setOptions={{
                height: 500,
                buttonList: [
                  ...buttonList.formatting,
                  ["image", "video", "link"],
                ],
              }}
            />

            <button className="support-link">작성</button>
          </form>
          <button className="support-link" onClick={authenticate}>
            Admin logout
          </button>
        </>
      ) : (
        <div className="admin-login">
          <p>
            <label htmlFor="email">이메일: </label>
            <input
              type="text"
              onChange={authChange}
              value={email}
              name="email"
            />
          </p>
          <p>
            <label htmlFor="password">패스워드: </label>
            <input
              type="password"
              onChange={authChange}
              value={password}
              name="password"
            />
          </p>
          <button className="support-link" onClick={authenticate}>
            Admin login
          </button>
        </div>
      )}
    </div>
  );
}
