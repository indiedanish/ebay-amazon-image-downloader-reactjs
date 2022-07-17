import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import RingLoader from "react-spinners/RingLoader";
import axios from "axios";

import ImageButton from 'react-image-button';
import { saveAs } from "file-saver";
//ss
function Header() {
  const [images, setImages] = useState([]);
  const [typed, setTyped] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [disableDownloadBtn, setDisableDownloadBtn] = useState(true);
  const didMount = useRef(false);



  useEffect(() => {
    if (didMount.current) {
      axios
        .post(`http://localhost:4001/`, { link: typed })
        .then((res) => {
          setImages(res.data);
          setShowSpinner(false);
          setDisableDownloadBtn(false);
        })
        .catch(() => {
          setShowErrorMessage(true);
          setShowSpinner(false);
        });
    } else didMount.current = true;
  }, [typed]);

  

  return (
    <div className="app__header">
      <h1>Amazon & Ebay Instant Image Downloader</h1>
    

      <InputGroup size="lg" className="mb-0">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Enter link here . . . . . "
          value={typed}
          onChange={(value) => {
            setShowErrorMessage(false);
            setImages([]);
            setDisableDownloadBtn(true);
            setShowSpinner(true);
            if (value.target.value == "") {
              setShowSpinner(false);
            }
            setTyped(value.target.value);
          }}
        />

        <Button
          disabled={disableDownloadBtn}
          style={{ background: "linear-gradient(90deg, #9ebd13 0%, #008552 100%)", borderColor: "transparent", zIndex:1}}
          onClick={() => {
            for (var i = 0; i < images.length; i++) {
              saveAs(`${images[i]}`, `${i}.jpg`);
            }
          }}
        >
          Download All
        </Button>
      </InputGroup>

      {showErrorMessage && (
        <span
          style={{
            color: "red",
            marginLeft: "20px",
            marginTop: "5px",
            fontSize: "13px",
          }}
        >
          Invalid Link Address! Try again
        </span>
      )}

      <div className="app__header-loader">
        {showSpinner && <RingLoader size={190} color="#B1CF6C" />}
      </div>

      <div className="imgbtn-container">
        {images.map((item, index) => {
          return (


            <div style={{ position: "relative" }}>
              <img
                style={{ width: "100px", height: "100px" }}
                key={index}
                src={item}
                download
              ></img>

              <Button
                className="btn-overimage"
                style={{
                  background: "rgba(183, 219, 98,0.1)",
                  borderColor: "rgba(183, 219, 98,0.4)",
                  textShadow: "1.5px 1.5px 2px #3e5900",
                  position: "absolute",
                  top: "0%",
                  left: "0%",
                  height: "100%",
                }}
                onClick={() => {
                  saveAs(`${item}`, `${index}.jpg`);
                }}
              > 
                Download
              </Button>
            </div>

         
          );
        })}
      </div>

   
    </div>
  );
}
export default Header;
