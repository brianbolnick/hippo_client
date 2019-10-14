import React, { useState } from 'react'
//import styled from 'styled-components'
import Layout from "components/common/Layout";
import FileInput from 'components/common/FileInput'

const NewRecipe = () => {
	const [image, setImage] = useState(null)
	const [imageUrl, setImageUrl] = useState("")

	const  handleUploadImage = e => {
		const image = e.target.files[0];
		const reader = new FileReader();
		reader.onloadend = () => {
			const imageUrl = reader.result;
			setImageUrl(imageUrl);
		};

		image && reader.readAsDataURL(image);

		setImage(image)
	};

  const removeImage = () => {
		setImage(null)
    this.setState({ image: null });
  };


	return (
    <Layout>
			<div>TITLE</div>
			<FileInput onChange={handleUploadImage} file={image} onClear={removeImage} imageUrl={imageUrl}/>
    </Layout>
	)
}

export default NewRecipe;

