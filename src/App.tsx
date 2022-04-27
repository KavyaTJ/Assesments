import "./styles.css";
import List from "./components/List";
import InputWithLabel from "./components/InputWithLabel";
import logo from "./assets/logo.png";
import usePersistence from "./hooks/usePersistence";
import React, { useEffect, useState } from "react";
import { StoryType } from "./types";
const title: string = "React Training";
const ListOfItems = [
  {
    id: 1,
    created_at: "2006-10-09T18:21:51.000Z",
    author: "pg",
    title: "Y Combinator",
    url: "http://ycombinator.com",
    text: null,
    points: 57
  },
  {
    id: 15,
    created_at: "2006-10-09T19:51:01.000Z",
    title: "foo@bar.com",
    url:
      "https://www.nytimes.com/2019/04/01/technology/burger-king-impossible-whopper.html",
    author: "sama",
    text:
      "&#34;the rising star of venture capital&#34; -unknown VC eating lunch on SHR",
    points: 5
  },
  {
    id: 24,
    created_at: "2021-09-22T20:33:53.000Z",
    title:
      "Google Drive of historical footage locked and flagged as terrorist activity",
    url:
      "https://support.google.com/drive/thread/127021326/google-has-locked-my-account-for-sharing-a-historical-archive-they-labeled-as-terrorist-activity?hl=en",
    author: "knaik94",
    points: 1595
  },
  {
    id: 36,
    created_at: "2011-09-23T13:24:09.000Z",
    title: "I was once a Facebook fool",
    url: "http://public.numair.com/2011_fbfool.html",
    author: "numair",
    points: 1368
  }
];


function getAsyncData() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject({ data: ListOfItems }), 3000)
  );
}

function App(): JSX.Element {
  const [searchText, setSearchText] = usePersistence("searchTerm", "");
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAsyncData()
      .finally(() => setIsLoading(false))
      .then((value: any) => setStories(value.data))
      .catch((e) => setIsError(true));
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  function handleDeleteClick(objectId: number) {
    const newListOfItems= stories.filter(
      (story: StoryType) => story.objectID !== objectId
    );
    setStories(newListOfItems);
  }

  const filteredList = stories.filter((item: StoryType) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  if (isError) {
    return (
      <h1 style={{ marginTop: "10rem", color: " red" }}>
        Something went wrong
      </h1>
    );
  }


  return (
    <div>
      <nav>
        <div className="heading">
          <h1>{title}</h1>
          <img src={logo} />
        </div>
        <InputWithLabel searchText={searchText}
          onChange={handleChange}
          id="searchBox" >
          Search
        </InputWithLabel>
      </nav>
      
      {isLoading ? (
        <h1 style={{ marginTop: "10rem" }}>Loading</h1>
      ) : (
        <List ListOfItems={filteredList} onClickDelete={handleDeleteClick} />
      )}
    </div>
  );
}


export default App;
