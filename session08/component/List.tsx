import "./List";
import Item from "./item";
import { StoryType } from "../types";
type ListProps = {
  ListOfItems: Array<StoryType>;
  onClickDelete: (e: number) => void;
};



const List = ({ ListOfItems, onClickDelete }: ListProps) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Author</th>
            <th>points</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ListOfItems.map(function (item): {
              return (
                <Item
                  key={item.objectID}
                  item={item}
                  onClickDelete={onClickDelete} />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
