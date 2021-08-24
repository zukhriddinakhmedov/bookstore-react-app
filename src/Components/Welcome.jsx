import { Jumbotron, Button } from 'react-bootstrap'

const Welcome = () => {
    return (
        <Jumbotron>
            <h1>Welcome to the bookstore of strivers</h1>
            <p>
                In this bookstore you can find many book categories of Fantasy, History, Horror, Romance and Scifi
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    )
}

export default Welcome