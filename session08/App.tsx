import "./styles.css";
import List from "./component/List";
import Search from "./Search";
import logo from "./assets/react.jpg";
import { useState } from "react";
import "./component/List.css";
import { StoryType } from "./types";

const name = "React";
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

function App() {
  const [searchText, setSearchText]: any = useState("");
  function handleChange(event: any) {
    setSearchText(event.target.value);
  }
  function handleDeleteClick(objectId: number) {
    const newListOfItems = stories.filter(
      (story: StoryType) => story.objectID !== objectId
    );
    setStories(newListOfItems);
  }

  const filteredList = ListOfItems.filter((item: any) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div>
      <nav>
        <div className="heading">
          <h1>
            Welcome to {name} <img src={logo} />
          </h1>
        </div>
        <Search searchText={searchText} onChange={handleChange}>
          Search
        </Search>
      </nav>

      <List listOfItems={filteredList} onClickDelete={handleDeleteClick} />
    </div>
  );
}

export default App;
