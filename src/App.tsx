import { useState } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';
import CreateNotes from './components/CreateNotes';
import Footer from './components/Footer';
import { Note } from './models/note.model';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meetings(Example)",
    text: "Schedule meeting with UI/US team",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]);


  return (
    <>
      <div className="d-flex flex-column min-vh-100">
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
      </Container>
      <Footer />
      </div>
    </>
  );
}

export default App;