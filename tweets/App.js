// Render the tweets using React!
const App = (props) => {
    let { tweets } = props;
    console.log('Inside App component: ', tweets)
    // const allUsers = tweets.map(User)
    const Tweets = tweets.map(Tweet)
    return (
        <span>{Tweets}</span>
    )
}

// const Tweet = null;  // CHALLENGE: Write a separate Tweet component for use in the App component
const Tweet = (props) => {
    console.log('Inside the Tweet component: ', props)
    let { user, text } = props;
    return (

        <div>
            <User user={ user } />
            <h3>{text}</h3>
        </div>
    )
}

// const User = null;  // CHALLENGE: Write a separate User component for use in the Tweet component
const User = (props) => {
    console.log('Inside User component: ', props)
    // let username = props.user.username
    // let handle = props.user.handle
    // let profilePic = props.user.profilePic
    // let isVerified = props.user.isVerified
    let { username, handle, profilePic, isVerified } = props.user

    return (
        <div className="d-flex align-items-center">
        <img width="50" src={profilePic} />
        <div className="mt-4 ml-2">
            <b>{username}</b>
            {isVerified ? <img width="15" src="./twitterIcons/check-circle.svg" /> : ''}
            <p>{handle}</p>
        </div>
        </div>
    )
}

// const Metrics = null;  // CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)
const Metrics = (props) => {
    
}

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly
