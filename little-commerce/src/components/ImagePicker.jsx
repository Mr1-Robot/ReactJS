/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import { motion } from "framer-motion";
import { Close, Upload } from "./icons/Icons";

export default function ImagePicker({
  label,
  name,
  onSetProductData,
  onRemoveFile,
  onSuccess,
}) {
  const inputRef = useRef(null);
  const [images, setImages] = useState([]);

  // Trigger the input tag when the div clicked. Design purposes only.
  function triggerImagePicker() {
    inputRef.current.click();
  }

  // Handling images upload to make a preview of the selected images.
  function handleImageChange(event) {
    const files = Object.values(event.target.files);

    if (!files) {
      setImages([]);
      return;
    }

    // Mapping files and creating a url for each one.
    const promises = files.map((image) => {
      return new Promise((resolve) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          resolve({
            imageUrl: fileReader.result,
            imageName: image.name,
          });
        };
        fileReader.readAsDataURL(image);
      });
    });

    // Waiting for all promises to resolve
    Promise.all(promises).then((updatedImages) => {
      // Setting the urls in a state.
      setImages(updatedImages);

      // Lifting the state of urls up to NewProductForm component.
      onSetProductData((prev) => {
        return {
          ...prev,
          images: [
            ...prev.images,
            ...updatedImages.map((image) => image.imageUrl),
          ],
        };
      });
    });
  }

  // Handling remove an image, and lift the effect to parent component state.
  function handleRemoveImage(imageUrl) {
    setImages((prev) => prev.filter((image) => image.imageUrl !== imageUrl));

    onRemoveFile(imageUrl);
  }

  // Cleanup for images URL, and resetting the images state if the submit done successfully.
  useEffect(() => {
    if (onSuccess && images.length > 0) {
      setImages([]);
    }

    return () => {
      images.forEach((image) => URL.revokeObjectURL(image.imageUrl));
    };
  }, [onSuccess, images]);

  return (
    <motion.div className={classes["image-picker"]} layout>
      <label htmlFor="images">{label}</label>
      <motion.div className={classes.container} layout>
        {images.length === 0 && (
          <div className={classes.picker} onClick={triggerImagePicker}>
            <Upload />
            <span>Pick an image</span>
          </div>
        )}

        {images.length !== 0 &&
          images.map((image, idx) => (
            <motion.div className={classes.image} key={idx} layout>
              <img src={image.imageUrl} alt="" />
              <span>{image.imageName}</span>
              <span onClick={() => handleRemoveImage(image.imageUrl)}>
                Remove
                <Close />
              </span>
            </motion.div>
          ))}
      </motion.div>
      <input
        ref={inputRef}
        type="file"
        id={name}
        name={name}
        placeholder="Pick an image"
        accept="image/png, image/jpeg"
        multiple={true}
        onChange={handleImageChange}
      />
    </motion.div>
  );
}
