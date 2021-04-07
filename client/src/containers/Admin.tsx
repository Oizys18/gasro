import React, { useState, useEffect } from "react";
import firebase from "database/firebaseConfig";
import "firebase/auth";
import { filestorage } from "database/filedata";
import { noticeRef } from "database/textdata";
import { ImageAspectRatioTwoTone } from "@material-ui/icons";

export default function Admin() {
  const [login, setLogin] = useState(Boolean);
  useEffect(() => {
    checkLogin();
  }, []);
  function checkLogin() {
    firebase
      .auth()
      .getRedirectResult()
      .then((result) => {
        var user = result.user;
        setLogin(true);
      })
      .catch((error) => {
        setLogin(false);
        var errorCode = error.code;
      });
  }
  var provider = new firebase.auth.GoogleAuthProvider();
  function goGoogle() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var user = result.user;
        setLogin(true);
        console.log("wow");
        // ...
      })
      .catch((error) => {
        console.log("no");
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // ...
      });
  }
  function outGoogle() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        alert("로그아웃 성공");
        setLogin(false);
      })
      .catch((error) => {
        alert("로그아웃 실패..?");
        // An error happened.
      });
  }
  //   input 관리
  const [image, setImage] = useState<Array<ImageData>>([]);
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    youtube: "",
    images: Array<string>(),
  });
  const { title, content, youtube } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e: any) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };
  function handleFileInput(e: any) {
    setImage(e.target.files);
    let temp = Array<string>();
    for (let i = 0; i < e.target.files.length; i++) {
      temp.push(e.target.files[i].name);
    }
    setInputs({ ...inputs, images: temp });
  }
  function onSubmit() {
    // // console.log();
    // // key 생성
    const newKey = firebase.database().ref().child("notice").push().key;
    // // 파일저장소
    // const filestorageRef = filestorage.ref();

    // image.forEach((file) => {
    //   filestorageRef.put(file.data).then(function (snapshot) {
    //     console.log("Uploaded a blob or file!");
    //   });
    // });

    const postData = {
      ...inputs,
      //   id: timeStamp(),
    };
    // noticeRef.push().set(postData);
    alert("성공적으로 작성되었습니다.");
  }
  return (
    <div className="basic-container admin-container">
      {login ? (
        <>
          <form onSubmit={onSubmit}>
            <input type="text" onChange={onChange} name="title" value={title} />
            <input
              type="text"
              onChange={onChange}
              name="content"
              value={content}
            />
            <textarea
              rows={5}
              cols={100}
              onChange={onChange}
              name="youtube"
              value={youtube}
            />
            <input type="file" multiple onChange={handleFileInput} />
            <button>submit!!</button>
          </form>
          <button className="support-link" onClick={outGoogle}>
            google logout
          </button>
        </>
      ) : (
        <div>
          <div className="admin-title">관리자 페이지</div>
          <button className="support-link" onClick={goGoogle}>
            google login
          </button>
        </div>
      )}
    </div>
  );
}
