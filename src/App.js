import React from 'react';

import back from './assets/svgs/back.svg'
import './App.css';
import FeedBackForm from './components/user feedback/FeedBackForm';

function App() {
  return (
    <div className="formFeedBack_wrap">
      <header><img src={back} /></header>

      <FeedBackForm />
    </div>
  );
}

export default App;
