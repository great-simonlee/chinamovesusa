window.addEventListener('DOMContentLoaded', () => {
  const auth = firebase.auth();
  auth.onAuthStateChanged((user) => {
    if (user) {
      const signUpLogInDiv = document.querySelector('#signUpLogInDiv');
      const userMenuDiv = document.querySelector('#userMenuDiv');
      const userMenu = document.querySelector('#userMenu');
      const ddMenu = document.querySelector('#dd-menu-cont');
      const logOutBtn = document.querySelector('#logOutBtn');
      signUpLogInDiv.style.display = 'none';
      userMenuDiv.style.display = 'flex';

      userMenu.addEventListener('click', () => {
        if (ddMenu.style.display == 'none') {
          ddMenu.style.display = 'flex';
        } else {
          ddMenu.style.display = 'none';
        }
      });

      logOutBtn.addEventListener('click', () => {
        auth.signOut();
        signUpLogInDiv.style.display = 'flex';
        userMenuDiv.style.display = 'none';
      });

      if (
        window.location.pathname === '/member-login/' ||
        window.location.pathname === '/member-signup/'
      ) {
        document.location.href = '/';
      }
    } else {
      if (window.location.pathname === '/member-login/') {
        const logInEmail = document.querySelector('#logInEmail');
        const logInPassword = document.querySelector('#logInPassword');

        const logInBtn = document.querySelector('#logInBtn');
        logInBtn.addEventListener('click', () => {
          auth
            .signInWithEmailAndPassword(logInEmail.value, logInPassword.value)
            .then((result) => {
              // location.reload();
              document.location.href = '/';
              // console.log(auth.currentUser);
            })
            .catch((err) => {
              window.alert(err);
            });
        });
      }
      if (window.location.pathname === '/member-signup/') {
        const signUpUsername = document.querySelector('#signUpUsername');
        const signUpEmail = document.querySelector('#signUpEmail');
        const signUpPassword = document.querySelector('#signUpPassword');
        const signUpPasswordCheck = document.querySelector(
          '#signUpPasswordCheck'
        );
        const signUpAgreement = document.querySelector('#userAgreement');

        const signUpBtn = document.querySelector('#signUpBtn');
        signUpBtn.addEventListener('click', () => {
          console.log('Clicked');
          if (signUpPassword.value != signUpPasswordCheck.value) {
            console.log('Different!');
          } else {
            // Display the passwords are different
            if (!signUpAgreement.checked) {
              console.log('Not checked!');
            } else {
              auth
                .createUserWithEmailAndPassword(
                  signUpEmail.value,
                  signUpPassword.value
                )
                .then((result) => {
                  result.user.updateProfile({
                    displayName: signUpUsername.value,
                  });
                  setTimeout(() => {
                    document.location.href = '/';
                  }, 1000);
                })
                .catch((err) => {
                  console.error(err.message);
                  window.alert(err.message);
                });
              console.log('Checked');
            }
          }
        });
        const db = firebase.firestore();
        const userInfoRef = db.collection('userInfo');
        userInfoRef
          .doc(user.uid)
          .set({
            username: user.displayName,
            email: user.email,
            number: '',
            wechat: '',
            membership: '',
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      if (window.location.pathname === '/mypage/') {
        document.location.href = '/';
      }
    }
  });
});

// if (window.location.pathname === '/member-login/') {
//   window.addEventListener('DOMContentLoaded', () => {
//     const auth = firebase.auth();

//     auth.onAuthStateChanged((user) => {
//       if (!user) {
//       } else {
//         // document.location.href = '/';
//         console.log(user);
//         setTimeout(() => {
//           console.log(user);
//         }, 2000);
//       }
//     });
//   });
// }

// if (window.location.pathname === '/member-signup/') {
//   window.addEventListener('DOMContentLoaded', () => {
//     const auth = firebase.auth();

//   });
// }

// if (window.location.pathname === '/member-login/') {
//   window.addEventListener('DOMContentLoaded', () => {
//     console.log('login');
//   });
// }

// auth
//   .createUserWithEmailAndPassword(signUpEmail.value, signUpPassword.value)
//   .then((result) => {
//     result.user.updateProfile({
//       displayName: signUpUsername.value,
//     });
//     // location.reload();
//     result.user
//       .sendEmailVerification()
//       .then(() => {
//         window.alert(
//           '본인인증을 위해 회원가입에 사용하신 이메일의 본인인증 확인 링크를 클릭하여 주시기 바랍니다.'
//         );
//         veriBtnLSOff();
//       })
//       .catch((err) => {
//         console.error(err.message);
//         veriBtnLSOff();
//       });
//   })
//   .catch((err) => {
//     console.error(err.message);
//     window.alert(err.message);
//     veriBtnLSOff();
//   });
