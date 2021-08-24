import { Card, CardColumns, Col, Container, Row } from 'react-bootstrap'
import books from '../data/history.json'

const LatestRelease = () => {

    return (
        <div>
            <Container>
                <CardColumns>
                    {
                        books.map(book => (
                            <Card>
                                <Card.Img variant="top" src={book.img} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                        {book.price}£
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">{book.category}</small>
                                </Card.Footer>
                            </Card>
                        ))
                    }
                </CardColumns>
            </Container>
        </div>
    )
}

export default LatestRelease