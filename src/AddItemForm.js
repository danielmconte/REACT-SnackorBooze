
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Card,
    CardBody,
    CardTitle
  } from "reactstrap";

const AddItemForm = ({title}) => {
    const [inputs, setInputs] = useState({ 
        id: null, 
        called: null, 
        description: null, 
        recipe: null, 
        serve: null });


    const handleChange=(evt) => {
        const {value, name} = evt.target;
        setInputs(inputs => ({...inputs, [name]: value}))
    };

    const handleSubmit=() => {
        // This does't always work, but can't figure out a more consistent way have tried useEffect and other things
        if(!inputs.id || !inputs.called || !inputs.description || !inputs.recipe || !inputs.serve ) {
            alert("Please fill in all the fields")
        } else {
            async function postVictuals(){
                await axios.post(`http://localhost:5000/${title}`, {
                   id: inputs.id,
                   name: inputs.called,
                   description: inputs.description,
                   recipe: inputs.recipe,
                   serve: inputs.serve })
            }
            postVictuals();
            }

        }


    return (

    <Card>
        <CardBody>
            <CardTitle><h3>{`New ${title}:`}</h3></CardTitle>
            <form action="/" onSubmit={handleSubmit}>
                <label htmlFor="identification">Id:</label>
                <input
                    id="identification"
                    name="id"
                    type="text"
                    min="1"
                    max="25"
                    value={inputs.id}
                    onChange={handleChange}
                />
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    name="called"
                    type="text"
                    min="1"
                    max="50"
                    value={inputs.called}
                    onChange={handleChange}
                />
                <label htmlFor="description">Description:</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    min="1"
                    max="100"
                    value={inputs.description}
                    onChange={handleChange}
                />
                <label htmlFor="recipe">Recipe:</label>
                <input
                    id="recipe"
                    name="recipe"
                    type="text"
                    min="1"
                    max="100"
                    value={inputs.recipe}
                    onChange={handleChange}
                />
                <label htmlFor="serve">Serve:</label>
                <input
                    id="serve"
                    name="serve"
                    type="text"
                    min="1"
                    max="100"
                    value={inputs.serve}
                    onChange={handleChange}
                />
                <button className="btn btn-secondary">Confirm</button>
            </form>
        </CardBody>
    </Card>
    )
}

export default AddItemForm;