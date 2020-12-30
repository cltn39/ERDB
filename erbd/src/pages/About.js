import React, { useState } from "react";
import Hero from "../components/Hero";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import Row from "../components/Row";
import Col from "../components/Col";
import { Redirect } from "react-router-dom";

function About() {

  const [playerName, setPlayerName] = useState("");
  const [clickSearch, setClickSearch] = useState(false);
  const [error, setError] = useState("")
  const [results, setResults] = useState([]);
  const [breeds, setBreeds] = useState([])


  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();

    setClickSearch(true);
    // API.getDogsOfBreed(playerName)
    // .then((res) => {
    //   if (res.data.status === "error") {
    //     throw new Error(res.data.message);
    //   }
    //   this.setError(res.data.message);
    // })
    // .catch((err) => this.setError(err.message));
  };


  return (
    <div>
      <Hero backgroundImage="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/34875433/322249281e9d7c77e4372e6edb241091fda48ff8.png">
        <h1>ER:DB</h1>
        <h2>Simple serach</h2>
        <br/>
        <Alert
            type="danger"
            style={{ opacity: error ? 1 : 0, marginBottom: 10 }}
          >
            {error}
          </Alert>
        <SearchForm
          onSearch={onSearch}
          handleFormSubmit={onSearch}
          handleInputChange={handleChange}
          search={playerName}
          redirect={clickSearch && <redirect push to={`/search/${playerName}`}/>}
        />
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To ER:DB!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <SearchResults results={results} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquet diam tortor, id consequat mauris ullamcorper eu. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Pellentesque et dui id justo finibus sollicitudin
              at et metus. Ut feugiat tellus nec metus commodo, sed suscipit
              nisi gravida. Duis eget vestibulum quam, ut porttitor sem. Donec
              sagittis mi sollicitudin turpis semper, et interdum risus
              lobortis. Vestibulum suscipit nunc non egestas tristique. Proin
              hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
              quam non, tristique tempor erat. Nullam non sem facilisis, tempus
              tortor sit amet, volutpat nisl. Ut et turpis non nunc maximus
              mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet
              cursus. Praesent suscipit orci neque, vestibulum tincidunt augue
              tincidunt non. Duis consequat mattis tortor vitae mattis.
            </p>
            <p>
              Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum
              porttitor. Sed malesuada molestie velit ac viverra. Quisque a
              ullamcorper purus. Curabitur luctus mi ac mi hendrerit semper.
              Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
              nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue
              dictum egestas. Aliquam blandit mi eu urna scelerisque, vitae
              volutpat ligula ultricies. Maecenas vel porta augue. Fusce mauris
              ex, dignissim et lacinia ut, tempus eget nibh.
            </p>
            <p>
              Etiam ut massa efficitur, gravida sapien non, condimentum sapien.
              Suspendisse massa tortor, facilisis in neque sit amet, scelerisque
              elementum tortor. Nullam eget nibh sit amet odio lobortis
              ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis.
              Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit
              mi, non mattis enim congue at. Proin mi lectus, ullamcorper id
              hendrerit eu, ultricies vitae lacus. Nunc vehicula, erat eget
              laoreet condimentum, felis ante malesuada leo, nec efficitur diam
              nisi eget nisi. Cras arcu lacus, tristique in bibendum vitae,
              elementum eget lorem. Maecenas vestibulum volutpat orci eu
              pharetra. Praesent vel blandit ante, nec faucibus libero. Sed
              ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id
              dapibus eros. Nullam tempor sem rhoncus porta semper. Proin
              bibendum vulputate nisl, fringilla interdum elit pulvinar eu.
              Quisque vitae quam dapibus, vestibulum mauris quis, laoreet massa.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
