import React from 'react'

import { apiPostCreate } from './lookup'

export function PostCreate(props) {
    const textAreaRef = React.createRef()
    const { didPost } = props
    const handleBackEndUpdate = (response, status) => {
        if (status === 201) {
            didPost(response)
        } else {
            console.log(response)
            alert("An error occured please try again")
        }
    }

    const handleSubmit = (event) => {
        //backend api request
        event.preventDefault()
        const newVal = textAreaRef.current.value
        // change this to a server side call
        apiPostCreate(newVal, handleBackEndUpdate)
        textAreaRef.current.value = ''
    }
    return <div className={props.className}>
        <form onSubmit={handleSubmit}>
            <textarea ref={textAreaRef} required={true} className='form-control' name='post'>

            </textarea>
            <button type='subbmit' className='btn btn-primary my-3'>Speek</button>
        </form>
    </div>
}
