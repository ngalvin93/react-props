// Render the tweets using React!
const App = (props) => {
    console.log('Inside App component: ', props)
    let { tweets } = props;
    const allUsers = tweets.map(User)
    const allTweets = tweets.map(Tweet)
    return (
        <span>{allUsers}{allTweets}</span>
    )
}

// const Tweet = null;  // CHALLENGE: Write a separate Tweet component for use in the App component
const Tweet = (props) => {
    console.log('Inside the Tweet component: ', props)
    const text = props.text
    return (
        <h3>{text}</h3>
    )
}

// const User = null;  // CHALLENGE: Write a separate User component for use in the Tweet component
const User = (props) => {
    console.log('Inside User component: ', props)
    let username = props.user.username
    let handle = props.user.handle
    let profilePic = props.user.profilePic
    let isVerified = props.user.isVerified

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

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly
