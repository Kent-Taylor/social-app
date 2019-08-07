import React from "react";
import DropzoneComponent from "react-dropzone-component";
import request from "superagent";
import { navigate } from "hookrouter";

import "../node_modules/react-dropzone-component/styles/filepicker.css";
import "../node_modules/dropzone/dist/min/dropzone.min.css";

const UserForm = props => {
  const [name, setName] = React.useState("");
  const [shortBio, setShortBio] = React.useState("");
  const [image, setImage] = React.useState("");
  const imageRef = React.useRef(null);

  React.useEffect(() => {
    if (props.id && props.editMode) {
      fetch(`https://social-app-backend-bot.herokuapp.com/user/${props.id}`)
        .then(response => response.json())
        .then(data => {
          setName(data.name);
          setShortBio(data.short_bio);
        });
    }
  }, []);

  const componentConfig = () => {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    };
  };

  const djsConfig = () => {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    };
  };

  const handleDrop = () => {
    return {
      //'https://api.cloudinary.com/v1_1/rsbv-bottega/image/upload'
      addedfile: file => {
        let upload = request
          .post("https://api.cloudinary.com/v1_1/rsbv-bottega/image/upload")
          .field("upload_preset", "meme-images")
          .field("file", file);

        upload.end((err, response) => {
          if (err) {
            console.log("cloudinary err", err);
          }
          if (response.body.secure_url !== "") {
            setImage(response.body.secure_url);
          }
        });
      }
    };
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (props.editMode) {
      await fetch(
        `https://social-app-backend-bot.herokuapp.com/user/${props.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            name: name,
            short_bio: shortBio
          })
        }
      )
        .then(imageRef.current.dropzone.removeAllFiles())
        .catch(error => console.log("put error", error));

      navigate("/");
    } else {
      await fetch("https://social-app-backend-bot.herokuapp.com/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: name,
          image: image,
          short_bio: shortBio
        })
      })
        .then(result => result.json())
        .then(setName(""))
        .then(setImage(""))
        .then(setShortBio(""))
        .then(imageRef.current.dropzone.removeAllFiles())
        .then(navigate("/")) //after removing take user to homepage
        .catch(err => console.log("form submit err", err));
      navigate("/");

    }
  };
  return (
    <div className="userform">
      <h1>Add a user, please</h1>
      <form onSubmit={handleSubmit}>
        <DropzoneComponent
          ref={imageRef}
          config={componentConfig()}
          djsConfig={djsConfig()}
          eventHandlers={handleDrop()}
        >
          Drop your profile pic
        </DropzoneComponent>
        <input
          type="text"
          placeholder="Caption"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <div>
          <input
            type="text"
            placeholder="Bio"
            value={shortBio}
            onChange={e => setShortBio(e.target.value)}
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default UserForm;
