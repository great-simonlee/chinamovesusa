if (window.location.pathname === '/register/') {
  window.addEventListener('DOMContentLoaded', () => {
    // firebase
    const db = firebase.firestore();
    const storage = firebase.storage();
    const auth = firebase.auth();

    auth.onAuthStateChanged((user) => {
      if (user) {
        // mapbox
        var maptest = new mapboxgl.Map({
          container: 'maptestDiv',
          // style: 'mapbox://styles/mapbox/streets-v11',
          style: 'mapbox://styles/mapbox/dark-v10',
          center: [121.5003576, 31.2185876],
          zoom: 12,
        });

        maptest.addControl(new mapboxgl.NavigationControl());

        const marker1 = new mapboxgl.Marker({
          color: '#b40219',
        })
          .setLngLat([121.5003576, 31.2185876])
          .addTo(maptest);

        const newPostingObj = { fea: [], ame: [] };

        const uid = user.uid;
        const time = new Date().getTime();
        console.log(uid);
        console.log(time);

        const pointMapCity = document.querySelector('#rq-area');
        const pointMapAddress = document.querySelector('#rq-address');
        const pointMapZip = document.querySelector('#rq-zip');
        pointMapAddress.addEventListener('focusout', () => {
          marker1.remove();

          console.log('work?');
          const searchMap = String(
            pointMapAddress.value +
              ', ' +
              pointMapCity.value +
              ', ' +
              pointMapZip.value +
              'united states'
          );

          if (pointMapAddress.value != '') {
            // LONGITUDE AND LATITUTDE
            const xmlhttp = new XMLHttpRequest();
            let addressReq1 = searchMap.replaceAll(',', '');
            let addressReq = addressReq1.replaceAll(' ', '%20');
            console.log(addressReq);
            xmlhttp.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                newPostingObj.address = myArr.features[0].place_name;
                newPostingObj.coordinate = myArr.features[0].center;
              }
            };
            const corReqURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressReq}.json?access_token=pk.eyJ1IjoiZ3JlYXQtc2ltb25sZWUiLCJhIjoiY2t6b2szZ2U5NjA0ZjJwdHZiY3Q1OHNtcyJ9.qdLhsMCScxxfzT9CYywRUQ`;
            xmlhttp.open('GET', corReqURL, true);
            xmlhttp.send();

            const coorCheck = setInterval(() => {
              maptest.flyTo({
                center: newPostingObj.coordinate,
                essential: true,
                screenSpeed: 3,
              });

              const marker1 = new mapboxgl.Marker({
                color: '#b40219',
              })
                .setLngLat(newPostingObj.coordinate)
                .addTo(maptest);

              if (newPostingObj.coordinate != undefined) {
                clearInterval(coorCheck);
              }
            }, 500);

            // maptest.on('load', () => {
            //   const center = newPostingObj.coordinate;
            //   const radius = 0.5;
            //   const options = {
            //     steps: 30,
            //     units: 'kilometers',
            //   };
            //   const circle = turf.circle(center, radius, options);

            //   maptest.addSource('circleData', {
            //     type: 'geojson',
            //     data: circle,
            //   });

            //   // add a layer that displays the data
            //   maptest.addLayer({
            //     id: 'circle-fill',
            //     type: 'fill',
            //     source: 'circleData',
            //     paint: {
            //       'fill-color': '#cf352e',
            //       // 'fill-color': '#000',
            //       'fill-opacity': 0.3,
            //     },
            //   });
            // });
          }
        });

        // access the db
        db.collection('rentListing')
          .get()
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });

        const regFile = document.querySelector('#inputFiles');

        regFile.addEventListener('change', () => {
          const uploadFiles = regFile.files;
          const picPreviewDiv = document.querySelector('#previewPicDiv');
          picPreviewDiv.innerHTML = ``;
          for (i = 0; i < uploadFiles.length; i++) {
            picPreviewDiv.innerHTML += `<img class="text-unit draggable" src="${URL.createObjectURL(
              uploadFiles[i]
            )}" />`;
          }

          const draggablePics = document.querySelectorAll('.draggable');
          const lastDraggablePic = picPreviewDiv.lastElementChild;
          const lastPicBottom = lastDraggablePic.getBoundingClientRect();

          draggablePics.forEach((pic) => {
            pic.addEventListener('dragstart', () => {
              pic.classList.add('dragging');
            });
            pic.addEventListener('dragend', () => {
              pic.classList.remove('dragging');
            });
            pic.addEventListener('dragover', (e) => {
              e.preventDefault();
              const targetBox = e.target.getBoundingClientRect();
              const centerPointXTarget = (targetBox.left + targetBox.right) / 2;
              const draggingEle = document.querySelector('.dragging');
              if (e.target != draggingEle) {
                if (
                  (e.clientX < centerPointXTarget) &
                  (e.clientY < lastPicBottom.bottom)
                ) {
                  picPreviewDiv.insertBefore(draggingEle, e.target);
                } else if (
                  (e.clientX > centerPointXTarget) &
                  (e.clientY < lastPicBottom.bottom)
                ) {
                  picPreviewDiv.insertBefore(draggingEle, e.target.nextSibling);
                }
              } else {
                return null;
              }
            });
          });

          picPreviewDiv.addEventListener('dragover', (e) => {
            e.preventDefault();
            const draggingEle = document.querySelector('.dragging');
            if (e.clientY > lastPicBottom.bottom) {
              picPreviewDiv.insertBefore(
                draggingEle,
                e.target.lastElementChild.nextSibling
              );
            }
          });
          console.log(lastDraggablePic);

          console.log(uploadFiles);
        });

        const gapiConfig = {
          apiKey: 'AIzaSyCRtWDfnZq-jw_M89y5scltB1sUe0UFqgA',
          discoveryDocs: [
            'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
          ],
          scope: 'https://www.googleapis.com/auth/drive',
          clientId:
            '383323609067-8ovj7j0j9ji6rsgil0nm7q30pourf2n9.apps.googleusercontent.com',
        };

        const initClient = () => {
          gapi.client.init(gapiConfig).then(
            function () {
              // Listen for sign-in state changes.
              gapi.auth2
                .getAuthInstance()
                .isSignedIn.listen(updateSigninStatus);
              console.log(gapi);
              // Handle the initial sign-in state.
              updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
              authorizeButton.onclick = handleAuthClick;
              signoutButton.onclick = handleSignoutClick;
            },
            function (error) {
              console.error(error.details);
            }
          );
        };

        gapi.load('client:auth2', initClient);

        // gapi.client.init(gapiConfig).then(
        //   function () {
        //     // Listen for sign-in state changes.
        //     console.log('client ok');
        //     gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        //     // Handle the initial sign-in state.
        //     updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

        //     authorizeButton.onclick = handleAuthClick;
        //     signoutButton.onclick = handleSignoutClick;
        //   },
        //   function (error) {
        //     console.log(error);
        //   }
        // );

        const regSubmitBtn = document.querySelector('#regSubmitBtn');

        const regProp = document.querySelector('#rq-city');
        const regTitle = document.querySelector('#rq-title');
        const regPrice = document.querySelector('#rq-price');
        const regType = document.querySelector('#rq-type');
        const regLength = document.querySelector('#rq-length');
        const regDate = document.querySelector('#rq-movdate');
        const regContact = document.querySelector('#rq-contact');
        const regFea = document.querySelectorAll('.rq-fea');
        const regAme = document.querySelectorAll('.rq-ame');
        const regDesc = document.querySelector('#rq-desc');

        regSubmitBtn.addEventListener('click', () => {
          newPostingObj.prop = regProp.value;
          newPostingObj.title = regTitle.value;
          newPostingObj.price = regPrice.value;
          newPostingObj.type = regType.value;
          newPostingObj.length = regLength.value;
          newPostingObj.date = regDate.value;
          newPostingObj.contact = regContact.value;
          newPostingObj.description = regDesc.value;

          regFea.forEach((el) => {
            if (el.checked) {
              newPostingObj.fea.push(el.getAttribute('data-input'));
            }
          });
          regAme.forEach((el) => {
            if (el.checked) {
              newPostingObj.ame.push(el.getAttribute('data-input'));
            }
          });
          console.log(newPostingObj);
        });
      } else {
        document.location.href = '/member-login';
      }
    });
  });
}
