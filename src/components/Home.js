import { useState, useEffect } from "react"

const Home = () => {

    const [userName, setUserName] = useState('')

    useEffect(() => {
        setUserName('Johanna')
        // fetch('https://heroku-test-group.herokuapp.com/user-name')
        // .then(response => response.json())
        // .then(data => {
        //     setUserName(data.name)
        // })
        // .catch(err => console.error(err))
    }, [])


    return (
        <div>
            <h2>User { userName },</h2>
            <h2>Welcome to Source One!</h2>
        </div>
    )

}

export default Home