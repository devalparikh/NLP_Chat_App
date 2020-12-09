import React from 'react';
import './Chatbox.css';

interface Props {

};

export function Chatbox(props: Props) {


    return (



        <div className="chat-card card">

            {/* Chat log */}
            <h2 className="invert-color">Chat</h2>
            <div className="scrollable chat-box">

                <div className="message you">Hey</div>

                <div className="message me">Hi</div>

                <div className="message me">How are you today?</div>

                <div className="message you">Doing well, wbu?</div>

                <div className="message me">Ohhh, I am alright thanks for asking. Do you know to train a Neural Network?</div>

                <div className="message you">I do!</div>

                <div className="message me">Great, I am so excited to learn!</div>

            </div>

            {/* New chat message */}
            <div className="new-chat invert-color">
                <input className="chat-input" placeholder="Enter chat message here"></input>
                <button className="submit-button">Send</button>
            </div>
        </div>
    );
}