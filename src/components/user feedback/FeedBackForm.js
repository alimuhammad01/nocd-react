import React, { useState } from 'react'
import bottom_flowers from '../../assets/svgs/footer-flowers.svg'
import './FeedBackForm.css'

export default function FeedBackForm() {
    const onFormSubmit = () => {

        fetch('https://api-qa.treatmyocd.com/v1/user_question', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                question: question,

            }),
        }).then(res => {
            console.log(res)
            setLocation(false)
            setAge(false)
            setQuestion('')
            if (res.status === 200 || res.status) {
                alert('Question Submitted')

            }
            else {
                alert('something went wrong')
            }
        });
    }




    const [location, setLocation] = useState(false)
    const [question, setQuestion] = useState('')

    const [age, setAge] = useState(false)

    const onTextChange = (event) => {
        setQuestion(event.target.value)
    }


    return (
        <div className="feedBackForm">
            <h3 className="title"> Send us your question and we’ll put you in touch with our team.</h3>
            <p className="detail"> We’ll also help you learn about the most effective ways to deal with unwanted thoughts and repetitive behaviors. </p>
            <textarea name="question" type="text" value={question} className="input-question" placeholder="Ask you question here" onChange={onTextChange} />
            <label for="question" />
            <div className="checkBox-row">
                <input onChange={() => setLocation(!location)} checked={location} type="checkbox" id="checkbox1" />
                <label htmlFor="checkbox1"></label>
                <p>
                    I  live in Illinois, Michigan, Ohio, Texas, or California
                </p>
            </div>
            <p className="availability"> *Currently available only in these states due to clinician licensure</p>
            <div className="checkBox-row">
                <input onChange={() => setAge(!age)} checked={age} type="checkbox" id="checkboxAge" />
                <label for="checkboxAge"></label>
                <p>
                    I’m 18 years old or above
                </p>
            </div>

            <input onClick={() => onFormSubmit()} className="submitBtn" type="submit" disabled={(question.length < 1) || !age || !location} />

            <footer className="feedBack_footer">
                <img src={bottom_flowers} />
            </footer>
        </div>
    )
}
