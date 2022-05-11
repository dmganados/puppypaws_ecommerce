import React, {useRef} from 'react';

const FileUploader = ({onFileSelect}) => {

	const fileInput = useRef(null)

	const handleFileInput = (e) => {

		const file = e.target.files[0]
		
		// if (file.size > 1024) {
		// 	onFileSelector({ error: "File cannot excess  more than 1MB"});
		// } else {
		// 	onFileSelectSuccess(file);
		// }
	}


	return (
		<div>
			<input type="file" onChange={handleFileInput} />
			<button onClick={e => fileInput.current && fileInput.current.click} className="btn btn-primary" />
		</div>
	)
}