import {Button, Container} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function ProductInfo() {

	const {id} = useParams();
	// console.log(id)
	useEffect(() => {
		pruductDetails();
	},[])

	const pruductDetails = async () => {
		await fetch(`https://limitless-brushlands-90925.herokuapp.com/products/${id}`).then(res => res.json()).then(data =>
		{
			console.log(data)
		})

	}

	return(
		<div>
		</div>
	)
}