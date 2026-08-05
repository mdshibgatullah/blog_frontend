import React from 'react'
import Articles from './Articles'
import { Container, Row } from 'react-bootstrap'
import Sidebar from './Sidebar'




const LatestArticles = () => {
  return (
    <section className="py-4">
      <Container>
        <Row className="g-4">
          
          {/* LEFT SIDE: Latest Articles */}
          <Articles />

          {/* RIGHT SIDE: Sidebar Widgets */}
          <Sidebar />

        </Row>
      </Container>
    </section>
  )
}

export default LatestArticles