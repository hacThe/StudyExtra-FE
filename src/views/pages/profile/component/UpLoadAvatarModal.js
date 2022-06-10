import React, { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { useDispatch } from "react-redux";
import { userActions } from "./../../../../actions/user.actions";
import { storage } from "./../../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { showToast } from "../../../../actions/toast.action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50rem",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

function UploadModal(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [upProg, setUpProg] = useState(0);
  const [imgUrl, setImgUrl] = useState(props.avatar);
  const [file, setFile] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setFile(null);
      setImgUrl(props.avatar);
      setOpen(false);
    }
  };

  const styleBtnCancle = {
    textTransform: "none",
    background: "#D83333",
    fontSize: "1.3rem",
    fontFamily: "Montserrat",
  };
  const styleBtnSubmit = {
    textTransform: "none",
    fontSize: "1.3rem",
    fontFamily: "Montserrat",
  };
  const handleChange = (e) => {
    const fileSelected = e.target.files[0];
    if (typeof fileSelected === "undefined") {
      setImgUrl(props.avatar);
      setFile(null);
    } else {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUrl(reader.result);
      };
      if (fileSelected.type.match(/image.*/)) {
        setFile(e.target.files[0]);
        reader.readAsDataURL(fileSelected);
      } else {
        dispatch(showToast("fail", "Tệp được chọn phải là tệp hình ảnh!"));
      }
    }
  };
  const uploadImg = (imgSelected) => {
    if (typeof imgSelected === "undefined" || imgSelected === null) {
      dispatch(showToast("fail", "Vui lòng chọn tệp hình ảnh"));
      return;
    }
    console.log("Upload ");
    const storageRef = ref(storage, `file${imgSelected.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imgSelected);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUpProg(prog);
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((URL) => {
          console.log("url: ", URL);
          dispatch(userActions.uploadAvatar(URL));
        });
      }
    );
  };

  const handleUpload = () => {
    uploadImg(file);
  };
  return (
    <>
      <Button className="btn-changeAvt" onClick={() => handleOpen()}>
        {" "}
        <MdOutlinePhotoCamera></MdOutlinePhotoCamera>{" "}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Uploaded: {upProg}%</h1>
          <Typography
            id="modal-modal-description"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <img
              src={imgUrl}
              style={{ height: "40rem", width: "40rem", objectFit: "contain" }}
            ></img>
          </Typography>
          <Typography
            id="modal-modal-description"
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "2rem",
            }}
          >
            <Button
              variant="contained"
              style={styleBtnCancle}
              onClick={() => handleClose()}
            >
              Hủy
            </Button>
            <input
              type="file"
              onChange={handleChange}
              style={{ maxWidth: "5rem" }}
            />
            <Button
              variant="contained"
              onClick={() => handleUpload()}
              style={styleBtnSubmit}
            >
              Cập nhật
            </Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
export { UploadModal };
